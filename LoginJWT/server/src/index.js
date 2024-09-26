import express from "express";
import router from "./api/endPoints.js"
import cors from "cors";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST",
    credentials: true
}))

app.get('/', )

app.use(router)
app.listen(3000)
console.log("Server in port", 3000);