// PROJECTS
export type TProject = {
   _id?: String
   title?: String
   datePublished?: String
   url?: String
   repoHref?: String
   summary?: String
   description?: String
   tech?: [String]
   thumbnailHref?: String
}

export type TMailData = {
   from: string
   to: string
   subject: string
   text: string
   html: string
}

export type TContactForm = {
   name: string
   email: string
   message: string
   style?: string
}
