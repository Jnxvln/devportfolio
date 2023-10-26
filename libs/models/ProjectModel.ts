import { Schema, model, models } from 'mongoose'

const projectSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
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
      repoHref: {
         type: String,
         unique: true,
         required: false,
      },
      thumbnailHref: {
         type: String,
         required: false,
         default: 'https://placehold.co/128x128',
      },
   },
   { timestamps: true }
)

const Project = models.Project || model('Project', projectSchema)

export default Project
