import { TContactForm } from '@/libs/AppTypes'

export const renderEmailTemplate = (props: TContactForm) => {
   return `
      <div>
         <div>
            <strong>Name:</strong> ${props.name}
         </div>
         <div>
            <strong>Email:</strong> ${props.email}
         </div>
         <div>
            <strong>Message:</strong>
         </div>
         <div style="${props?.style ? props.style : ''}">${props.message}</div>
      </div>
   `
}
