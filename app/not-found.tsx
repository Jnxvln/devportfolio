export default function NotFound() {
   return (
      <section className="notfound-container">
         <h1 className="notfound-title">
            <span>🫤</span> Oops!
         </h1>

         <div className="notfound-content">
            <div className="notfound-instructions">
               The page or resource you requested wasn{"'"}t found.
            </div>
            <div className="notfound-instructions">
               Try again, or use the navigation menu <strong>(&#9776;)</strong> to find
               what you{"'"}re looking for.
            </div>
         </div>
      </section>
   )
}
