require("dotenv").config();
import connectToDatabase from "./helpers/db";
import createServer from "./helpers/server";

const app = createServer();

const port = process.env.PORT || 3000 

app.listen(port, async ()=>{
    console.log(`listening on port ${port}`)
    await connectToDatabase()
})