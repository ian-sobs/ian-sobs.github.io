import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import AnsiShadowPreAnimator from "@/components/AsciiHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900">
      {/* Header / Navbar */}
      {/* <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* <Link href="/" className="font-bold text-lg text-teal-400 hover:text-teal-300 transition">
            {portfolioData.name}
          </Link> 
          {/* <nav className="flex gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-slate-100 transition">About</a>
            <a href="#skills" className="hover:text-slate-100 transition">Skills</a>
            <a href="#projects" className="hover:text-slate-100 transition">Projects</a>
            <a href="#contact" className="hover:text-slate-100 transition">Contact</a>
          </nav> 
        </div> 
      </header>*/}

      <main className="mx-[5vw] px-0 py-12 space-y-24">
        {/* Hero / About Section */}
        <section id="name_intro" className="min-h-dvh flex flex-col justify-center">
          {/* <h1 className="text-2xl sm:text-6xl my-12 font-extrabold tracking-tight text-slate-100">
            Hi, I'm 
          </h1> */}
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-0">
              <AnsiShadowPreAnimator text="I" text_color="#ed695a"></AnsiShadowPreAnimator>
              <AnsiShadowPreAnimator text="A" text_color="#ed695a"></AnsiShadowPreAnimator>
              <AnsiShadowPreAnimator text="N" text_color="#ed695a"></AnsiShadowPreAnimator>
            
            </div>
            <div className="flex flex-wrap gap-0">
              <AnsiShadowPreAnimator text="S" text_color="#ed695a"></AnsiShadowPreAnimator>
              <AnsiShadowPreAnimator text="O" text_color="#ed695a"></AnsiShadowPreAnimator>
              <AnsiShadowPreAnimator text="B" text_color="#ed695a"></AnsiShadowPreAnimator>
              <AnsiShadowPreAnimator text="R" text_color="#ed695a"></AnsiShadowPreAnimator>
              <AnsiShadowPreAnimator text="E" text_color="#ed695a"></AnsiShadowPreAnimator>
              <AnsiShadowPreAnimator text="C" text_color="#ed695a"></AnsiShadowPreAnimator> 
              <AnsiShadowPreAnimator text="A" text_color="#ed695a"></AnsiShadowPreAnimator>
              <AnsiShadowPreAnimator text="R" text_color="#ed695a"></AnsiShadowPreAnimator>
              <AnsiShadowPreAnimator text="A" text_color="#ed695a"></AnsiShadowPreAnimator>
              <AnsiShadowPreAnimator text="Y" text_color="#ed695a"></AnsiShadowPreAnimator>          
            </div>
            <div className="flex flex-wrap gap-5">
              <h2 className="text-xl sm:text-2xl font-medium text-white-400">
                {portfolioData.title},
              </h2>
              <h2 className="text-xl sm:text-2xl font-medium text-white-400">
                Full-stack
              </h2>
            </div>
            <div>
              <p >
                BS Computer Science - University of San Carlos
              </p>
            </div>
          </div>
        </section>
        
        <section id="about" className="space-y-6 pt-8">
          {/* <div className="inline-block px-3 py-1 text-xs font-semibold text-teal-400 bg-teal-950/60 border border-teal-800 rounded-full">
            Available for Software Engineering Roles
          </div> */}
          <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">About me</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            {portfolioData.bio}
          </p>
          {/* <div className="flex gap-4 pt-2">
            <a
              href={`mailto:${portfolioData.socials.email}`}
              className="px-5 py-2.5 bg-[#ed695a] text-slate-950 font-medium rounded-lg hover:bg-[#ff5f4d] transition"
            >
              Get in Touch
            </a>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#ed695a] font-medium rounded-lg hover:bg-[#ed695a]/20 transition"
            >
              GitHub
            </a>
          </div> */}
        </section>

        <section id="education" className="space-y-6 pt-8">

          <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">Education</h2>
          <div className="flex flex-wrap">
            {portfolioData.education.map((education, index) =>(
                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start sm:h-18 gap-4 m-5">
                  <img src={education.logo} alt="USC Logo" className="h-24 sm:h-full w-auto mb-3 mr-3" />
                  <div className="flex flex-col">
                    <h1 className="text-lg sm:text-xl font-bold text-white-400">{education.name}</h1>
                    <p>{education.program}</p>
                    <p>Graduated on {education.date_graduated}</p>
                  </div>
                </div>
            ))}
          </div>  

        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">
            Technical skills
          </h2>
          <div id="tech_skill_superset" className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:justify-around">
            <div id="prog_lang">
              <h1 className="font-bold">Programming languages</h1>
              <div className="flex flex-wrap gap-3">
                {portfolioData.prog_lang.map((prog_lang, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 text-sm bg-[#ed695a]/50 border border-[#ed695a] text-slate-300 rounded-md"
                  >
                    {prog_lang.name}
                  </span>
                ))}
              </div>

            </div>
            <div id="frameworks">
              <h1 className="font-bold">Frameworks</h1>
              <div className="flex flex-wrap gap-3">
                {portfolioData.prog_lang.map((prog_lang, index) => (
                  prog_lang.frameworks.map((framework, index) => (
                      <span key={index} className="px-3.5 py-1.5 text-sm bg-[#ed695a]/50 border border-[#ed695a] text-slate-300 rounded-md">
                        {framework}
                      </span>
                    ))
                ))}
              </div>
            </div>
            <div id="databases">
              <h1 className="font-bold">Databases</h1>
              <div className="flex flex-wrap gap-3">
                {portfolioData.databases.map((database, index) => (
                    <span key={index} className="px-3.5 py-1.5 text-sm bg-[#ed695a]/50 border border-[#ed695a] text-slate-300 rounded-md">
                      {database}
                    </span>
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl space-y-4 hover:border-slate-700 transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-mono text-teal-400 bg-teal-950/40 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-4 text-sm font-medium">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:underline"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-200 transition"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6 text-center py-12 border-t border-slate-800">
          <h2 className="text-3xl font-bold text-slate-100">Let's Connect</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            I'm currently looking for new opportunities in software development. Whether you have a question or just want to say hi, feel free to drop me a message!
          </p>
          <div>
            <a
              href={`mailto:${portfolioData.socials.email}`}
              className="inline-block px-6 py-3 bg-teal-500 text-slate-950 font-semibold rounded-lg hover:bg-teal-400 transition"
            >
              Say Hello
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 text-center py-6 text-xs text-slate-500">
        © {new Date().getFullYear()} {portfolioData.name}. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}