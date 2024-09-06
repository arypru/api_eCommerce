import express from "express";
import dbConnect from "./db/dbConnect";
import {config} from "dotenv";
import router from "./routes"

config()

const PORT = Number(process.env.PORT) ?? 5000;
const HOST = process.env.HOST!;

const app = express();
app.use(express.json());

dbConnect();

app.use('/api', router);

app.listen(PORT, HOST, () => {
    console.log (`Server is running on http://${HOST}:${PORT}`);
})