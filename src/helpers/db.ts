import { MongoClient } from "mongodb";

const DB_URI = process.env.DB_URI || "";

export default async function connectToDatabase(dbName: string = "dev") {
    const mongoClient = new MongoClient(DB_URI);
    console.log('Connecting to server');
    await mongoClient.connect()
    console.log('Connected successfully to server');
    const db = mongoClient.db(dbName);
}