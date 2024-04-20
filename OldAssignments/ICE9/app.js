import express from 'express';
import { config } from 'dotenv';
import { router as userRouter } from './routes/user.js';

config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});