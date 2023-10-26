export default function NotFound() {
   return (
      <section style={{ padding: '1em' }}>
         <h1
            style={{
               maxWidth: '400px',
               margin: '1em auto',
            }}
         >
            <span>🫤</span> Oops, try again!
         </h1>
         <p
            style={{
               maxWidth: '400px',
               margin: '0 auto',
               fontSize: '14pt',
               marginBottom: '0.5em',
            }}
         >
            I could not find that page.
         </p>
         <p style={{ maxWidth: '400px', margin: '0 auto', fontSize: '14pt' }}>
            Try again or use the navigation menu to find what you{"'"}re looking for.
         </p>
      </section>
   )
}
