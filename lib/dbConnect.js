require('dotenv').config();
import { MongoClient } from 'mongodb';

export async function dbConnect() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/INVOICEDB';
  const options = {
    useNewUrlParser: true,
  };

  const client = await MongoClient.connect(uri, options); 
  return client; 
}