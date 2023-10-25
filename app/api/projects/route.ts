// PROJECTS API

import { NextResponse } from 'next/server'
import clientPromise from '@/libs/connectDb'

export async function GET(request: Request) {
   const client = await clientPromise
   const db = await client.db(process.env.MONGODB_DB)
   const projects = await db.collection('projects').find({}).toArray()
   return NextResponse.json({ status: 'success', data: projects })
}
