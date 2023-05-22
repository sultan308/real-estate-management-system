import express from "express";

export default function createServer(){
    const app = express();
    app.route("/stat").get((req,res,next) => res.status(200).json({ running : true }))
    return app;
} 