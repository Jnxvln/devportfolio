import mongoose from 'mongoose'

const URI = process.env.MONGODB_URI

if (!URI) throw new Error('Cannot connect mongoose')

const connectMongo = async () => mongoose.connect(URI)

export default connectMongo
