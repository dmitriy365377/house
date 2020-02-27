import { MongoClient } from 'mongodb';

const user = 'user_31'
const userPassword = 'DJFQWc6W2jaigCDc'
const cluster = 'cluster0-goeb1'

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/test?retryWrites=true&w=majority`

export const connectDatabase = async () => {
    const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = client.db('main')

    return {
        listings: db.collection('test_listings')
    }
};