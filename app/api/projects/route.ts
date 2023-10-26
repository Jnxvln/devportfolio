// PROJECTS API

import { NextResponse } from 'next/server'
import connectMongo from '@/libs/connectMongo'
import Project from '@/libs/models/ProjectModel'

export async function GET(request: Request) {
   try {
      await connectMongo()
      const projects = await Project.find()

      return NextResponse.json({
         status: 'success',
         data: projects,
      })
   } catch (error) {
      console.log(error)
      return NextResponse.json(
         {
            status: 'error',
            message: error?.message
               ? error.message
               : 'Unknown error attempting to fetch Projects',
         },
         { status: 500 }
      )
   }
}
