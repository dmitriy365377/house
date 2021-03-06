import { Database } from './../lib/types';
import { MongoClient } from 'mongodb';

const user = 'user_31'
const userPassword = 'DJFQWc6W2jaigCDc'
const cluster = 'cluster0-goeb1'

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`

export const connectDatabase = async (): Promise<Database> => {
    const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = client.db('main')

    return {
        listings: db.collection('test_listings')
    }
};