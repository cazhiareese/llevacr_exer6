import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import router from './router.js';   // import the router function
router(app);

app.listen(3000);