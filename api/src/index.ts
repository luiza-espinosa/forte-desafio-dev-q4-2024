import express from "express";
import cors from "cors";
import bookLoansRoutes from "./endpoints/bookLoans";
import { generateSchema } from "./db/schema";

const API_PORT = 8080;

const api = express();

generateSchema ();
api.use(cors({
    origin: "*",
}));
api.use(express.json());

api.get("/", (req, res) => {
    res.send("API is up");
});

api.use("/book-loans", bookLoansRoutes);

api.listen(API_PORT, "0.0.0.0", () => {
    console.log(`API running on port ${API_PORT}`);
});