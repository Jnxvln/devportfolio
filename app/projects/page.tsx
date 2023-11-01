import ProjectList from '@/libs/components/projects/ProjectList/ProjectList'
import { TProject } from '@/libs/AppTypes'
import { getProjects } from '../../libs/controllers/Projects'
import styles from './projects.module.scss'

export default async function Projects() {
   const projects: TProject[] = await getProjects(4)

   return (
      <section className={styles['page-container']}>
         <section className={styles['projects-container']}>
            {/* Top 4 */}
            <div className={styles['projects-top4']}>
               <h1 className={`${styles['title']} ${styles['text-center']}`}>Projects</h1>
               <h2 className={`${styles['subtitle']} ${styles['text-center']}`}>Top 4</h2>
               <ProjectList projects={projects} />
            </div>
         </section>

         <section className={styles['section-setup']}>
            <h2 className={styles['subtitle']}>My Setup</h2>
            <p className={styles['p']}>
               While adaptable to many programming environments, I love using Visual
               Studio Code as my IDE of choice, along with a handful of extensions to make
               my programming more efficient.
            </p>
            <p className={styles['p']} style={{ marginTop: '0.5em' }}>
               If you{"'"}re interested in the extensions I currently use, I{"'"}ve
               disclosed the full list below:
            </p>
            <ul className={styles['extensions-list']}>
               <li>:emojisense:</li>
               <li>.NET Install Tool</li>
               <li>#region folding for VS Code</li>
               <li>Astro</li>
               <li>Atom One Dark Theme</li>
               <li>Auto Close Tag</li>
               <li>Auto Rename Tag</li>
               <li>Ayu theme</li>
               <li>Babel JavaScript</li>
               <li>Better Comments</li>
               <li>Bulma</li>
               <li>C/C++</li>
               <li>C/C++ Extension Pack</li>
               <li>C/C++ Themes</li>
               <li>C#</li>
               <li>CMake</li>
               <li>CMake Tools</li>
               <li>Code Runner</li>
               <li>CodeLLDB</li>
               <li>Community Material Theme</li>
               <li>CSS Peek</li>
               <li>Data Preview</li>
               <li>Dendron</li>
               <li>Dendron Markdown Shortcuts</li>
               <li>Dendron Paste Image</li>
               <li>DotEnv</li>
               <li>EJS Language Support</li>
               <li>Emoji</li>
               <li>ES7+ React/Redux/React-Native snippets</li>
               <li>ESLint</li>
               <li>Excel Viewer</li>
               <li>file-icons</li>
               <li>Hex Editor</li>
               <li>HTML CSS Support</li>
               <li>Import Cost</li>
               <li>Instant Markdown</li>
               <li>IntelliCode for C# Dev Kit</li>
               <li>IntelliSense for CSS Cass Names in HTML</li>
               <li>isort</li>
               <li>JavaScript (ES6) code snippets</li>
               <li>JS JSX Snippets</li>
               <li>Jupyter</li>
               <li>Jupyter Cell Tags</li>
               <li>Jupyter Keymap</li>
               <li>Jupyter Notebook Renderers</li>
               <li>Jupyter Slide Show</li>
               <li>Live Preview</li>
               <li>Live Server</li>
               <li>Lorem ipsum</li>
               <li>MagicPython</li>
               <li>Markdown All in One</li>
               <li>Material Theme</li>
               <li>Material Theme Icons</li>
               <li>Mustache</li>
               <li>next.js</li>
               <li>Noctis</li>
               <li>Node.js Modules Intellisense</li>
               <li>One Dark Pro theme</li>
               <li>Palenight Theme</li>
               <li>Paste Image</li>
               <li>Path IntelliSense</li>
               <li>Phaser JS</li>
               <li>Prettier - Code formatter</li>
               <li>PrettierConfig for VS Code</li>
               <li>Prettify JSON</li>
               <li>Prettify Symbols Mode</li>
               <li>Prisma</li>
               <li>Project Manager</li>
               <li>Pylance</li>
               <li>Python</li>
               <li>Qt for Python</li>
               <li>Quick and Simple Text Selection</li>
               <li>Quick console log</li>
               <li>REST Client</li>
               <li>Sass (.sass only)</li>
               <li>Shades of Purple</li>
               <li>styled-jsx</li>
               <li>stylus</li>
               <li>Svelte 3 Snippets</li>
               <li>Svelte Auto Import</li>
               <li>Svelte for VS Code</li>
               <li>Svelte Intellisense</li>
               <li>Svelte-format</li>
               <li>sveltekit-snippets</li>
               <li>SynthWave {"'"}84 theme</li>
               <li>Tailwind CSS Intellisense</li>
               <li>Tailwind Docs</li>
               <li>Tailwind Snippets</li>
               <li>Three.JS Snippets</li>
               <li>Thunder Client</li>
               <li>Todo Tree</li>
               <li>Unity Code Snippets</li>
               <li>Unreal Engine 4 Snippets</li>
               <li>Vetur</li>
               <li>VS Code Counter</li>
               <li>VSCode Great Icons</li>
               <li>vscode-icons</li>
               <li>vscode-pdf</li>
               <li>Vue Language Features (Volar)</li>
               <li>Vue3-snippets</li>
               <li>VueHelper</li>
               <li>WSL</li>
               <li>XML Tools</li>
               <li>YAML</li>
            </ul>
         </section>
      </section>
   )
}
