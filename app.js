if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}


const express = require('express');
const app = express();
const path = require('path');
const ExpressError = require('./utils/ExpressError.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const listingRouter = require('./routes/listing.js');
const reviewRouter = require('./routes/review.js');
const userRouter = require('./routes/user.js');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');



//<===================================================================>
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//<=========================EJS Mate==================================>
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);
//<=======================MethodOverride==============================>
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
//<=======================Connect to MongoDB==========================>
const mongoose = require('mongoose');

const dburl = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dburl);
}
main().then(() => console.log('MongoDB connection established')).catch(err => console.log(err));
//<=========================Cookies===================================>
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//<=========================session===================================>

const store = MongoStore.create({
    mongoUrl: dburl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("ERROR IN MONGO SESSION STORE", err);
})

const sessionOption = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week
        maxAge: 7 * 24 * 60 * 60 * 1000,// 1 week
        httpOnly: true
    }
};

app.use(session(sessionOption));
//<=========================connect-flash==============================>
const flash = require('connect-flash');
app.use(flash());
//<=========================passport===================================>
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//<=============================Route==================================>

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

//Listing Route
app.use("/listings", listingRouter);

// Reviews Route
app.use("/listings/:id/reviews", reviewRouter);

//user Route
app.use("/", userRouter);

//<======================Error handling route========================>

app.all("/{*any}", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    const { statusCode = 500, message = 'Something went wrong!' } = err;
    res.status(statusCode).render('error.ejs', { message });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

//<==================================================================>