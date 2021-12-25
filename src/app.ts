import express, { Application } from 'express';

const app: Application = express();

//settings
app.set("port", process.env.PORT || 3000);

export default app;