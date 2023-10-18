// import { Db, MongoClient } from "mongodb";
import { formatLog } from "./utils";

// Create cached connection variable
let cachedDB: any | null = null;

// A function for connecting to MongoDB,
export default async function connectToDatabase(): Promise<any> {
  // If the database connection is cached, use it instead of creating a new connection
  if (cachedDB) {
    console.info(formatLog("Using cached client!"));
    return cachedDB;
  }
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  console.info(formatLog("No client found! Creating a new one."));
  // If no connection is cached, create a new one
  // const client = new MongoClient(process.env.ATLAS_URI_PROD as string, opts as any);
  // await client.connect();
  // const db: any = client.db(process.env.DB_NAME);
  // cachedDB = db;
  return cachedDB;
}