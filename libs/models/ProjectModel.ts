import { Schema, model, models } from 'mongoose'

const projectSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
      },
      datePublished: {
         type: String,
         required: false,
      },
      url: {
         type: String,
         required: false,
      },
      repoHref: {
         type: String,
         unique: true,
         required: false,
      },
      summary: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: false,
      },
      tech: {
         type: [String],
         required: true,
      },
      thumbnailHref: {
         type: String,
         required: false,
         default: 'http://localhost:3000/placeholder_400.png',
      },
   },
   { timestamps: true }
)

const Project = models.Project || model('Project', projectSchema)

export default Project
