import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;
import router from './router';
app.use(express.json());
app.use(cors())
// app.options('*', cors());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS, FETCH"
    );
    next();
});


app.use(router);


app.listen(port, () => console.log(`Server listening on port ${port}`));