import express, { Application } from 'express';
import authRoutes from './routes/auth';

const app: Application = express();

//settings
app.set("port", process.env.PORT || 3000);

//routes
app.use(authRoutes);

export default app;