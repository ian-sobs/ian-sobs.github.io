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

      <main className="mx-[5vw] md:mx-[8vw] px-0 py-12 space-y-24">
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
                <div key={index} className="flex flex-col sm:flex-row sm:h-18 w-full gap-4 m-5">
                  <img src={education.logo} alt="USC Logo" className="h-24 sm:h-full w-auto max-w-md mb-3 mr-3 object-contain shrink-0" />
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
          <div id="tech_skill_superset" className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:justify-between">
            <div id="prog_lang" className="sm:w-1/4">
              <h1 className="font-bold mb-4">Programming languages</h1>
              <div className="flex flex-wrap gap-3">
                {portfolioData.prog_lang.map((prog_lang, index) => (
                  <span
                    key={index}
                    className="font-mono px-3.5 py-1.5 text-sm bg-[#ed695a]/50 border border-[#ed695a] text-slate-300 rounded-md"
                  >
                    {prog_lang.name}
                  </span>
                ))}
              </div>

            </div>
            <div id="frameworks" className="sm:w-1/4">
              <h1 className="font-bold mb-4">Frameworks</h1>
              <div className="flex flex-wrap gap-3">
                {portfolioData.prog_lang.map((prog_lang, index) => (
                  prog_lang.frameworks.map((framework, index) => (
                      <span key={index} className="font-mono px-3.5 py-1.5 text-sm bg-[#ed695a]/50 border border-[#ed695a] text-slate-300 rounded-md">
                        {framework}
                      </span>
                    ))
                ))}
              </div>
            </div>
            <div id="databases" className="sm:w-1/3">
              <h1 className="font-bold mb-4">Databases</h1>
              <div className="flex flex-wrap gap-3">
                {portfolioData.databases.map((database, index) => (
                    <span key={index} className="font-mono px-3.5 py-1.5 text-sm bg-[#ed695a]/50 border border-[#ed695a] text-slate-300 rounded-md">
                      {database}
                    </span>
                ))}
              </div>
            </div>
          </div>

        </section>

        <section id="experience" className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">
            Experience
          </h2>
          {portfolioData.experience.map((company, index) => (
              <div key={index} className="flex flex-col gap-4 m-5">
                  <h1 className="text-lg sm:text-xl font-bold text-white-400">{company.role}</h1>
                  <p>{company.company_name}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 ml-2">
                    {company.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-sm sm:text-base">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
              </div>
          ))}
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">
            Featured Projects
          </h2>
          <div className="columns-1 sm:columns-2 gap-4">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-4 p-6 bg-[#3f403f]/40 rounded-xl space-y-4 hover:border-slate-700 transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.roles && project.roles.length > 0 && (
                    <>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        In this project I...
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm leading-relaxed ml-2">
                        {project.roles.map((role, roleIndex) => (
                          <li key={roleIndex}>{role}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-mono text-[#ed695a] bg-[#ed695a]/10 px-2 py-1 rounded"
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
                      className="text-[#ed695a] hover:underline"
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
                  {project.articleLink && (
                    <a
                      href={project.articleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-200 transition"
                    >
                      Article
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
            I'm currently looking for new opportunities in software development. If there is anything I can help with, let's talk.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 w-full mx-auto sm:max-w-[65vw]">
            {portfolioData.socials.map((social, index) => (
              <a 
                key={index} 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group m-2.5 inline-flex items-center gap-2 rounded-full 
                  bg-[#3f403f]/50 hover:bg-[#ed695a] 
                  px-4 py-2.5 
                  text-white hover:text-black 
                  transition-all duration-200 ease-in-out
                "
              > 
                {/* SVG Icon via CSS Masking */}
                <span 
                  style={{
                    maskImage: `url(${social.icon})`,
                    WebkitMaskImage: `url(${social.icon})`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                  className="h-5.5 w-5.5 bg-white group-hover:bg-black shrink-0 transition-colors duration-200"
                />

                {/* Label */}
                <span className="font-bold text-sm font-mono">
                  {social.name}
                </span>
              </a>
            ))}
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