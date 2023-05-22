require("dotenv").config();
import createServer from "./helpers/server";

const app = createServer();

const port = process.env.PORT || 3000 

app.listen(port, async ()=>{
    console.log(`listening on port ${port}`)
})