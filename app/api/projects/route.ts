// PROJECTS API

import { NextResponse } from 'next/server'
import clientPromise from '@/libs/connectDb'
import { TProject } from '@/libs/AppTypes'

export async function GET(request: Request) {
   const client = await clientPromise
   const db = await client.db(process.env.MONGODB_DB)
   const projects: TProject[] = await db.collection('projects').find().toArray()
   return NextResponse.json({ status: 'success', data: projects })
}
