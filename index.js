import express from 'express';
import cors from "cors";
import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config' 
const app = express();
const port =process.env.PORT||3000;
app.use(cors());
app.use(express.json());
 const uri = process.env.MONGODB_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
      console.log(" You are not successfully connected to MongoDB!")
  }
}
run()


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});