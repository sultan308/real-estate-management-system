import { MongoClient } from "mongodb";

const DB_URI = process.env.DB_URI || "";

export const MongoDB = new MongoClient(DB_URI);

export async function connectToDatabase(dbName: string = "dev") {
    console.log('Connecting to server');
    await MongoDB.connect()
    console.log('Connected successfully to server');
}

