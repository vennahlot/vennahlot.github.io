import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#282828] text-[#ebdbb2]">
      {/* Minimal Header */}
      <header className="px-6 py-6 sm:px-8 lg:px-12 border-b border-[#504945]">
        <nav className="flex justify-between items-center">
          <div className="text-lg font-mono text-[#fe8019] gruvbox-glow">&gt; home</div>
          <div className="hidden sm:flex space-x-8 font-mono text-sm">
            <a href="#work" className="text-[#ebdbb2] hover:text-[#fe8019] transition-colors gruvbox-glow">/work</a>
            <a href="#projects" className="text-[#ebdbb2] hover:text-[#fe8019] transition-colors gruvbox-glow">/projects</a>
            <a href="#contact" className="text-[#ebdbb2] hover:text-[#fe8019] transition-colors gruvbox-glow">/contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section - Minimalist */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="font-mono text-sm text-[#928374]">
              $ whoami
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight font-mono">
              <span className="text-[#fe8019] gruvbox-glow">Software</span><br />
              <span className="text-[#d5c4a1]">Engineer</span>
            </h1>
            <div className="space-y-2 font-mono text-sm text-[#d5c4a1] max-w-xl">
              <div>→ Data Infrastructure & AI Applications</div>
              <div>→ Game Development • Robotics • Electronics</div>
              {/* <div>→ HAM Radio Enthusiast</div> */}
            </div>
            <div className="font-mono text-[#fabd2f]">
              <span className="terminal-cursor">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono mb-12 text-[#fe8019] gruvbox-glow">./work</h2>
          <div className="grid gap-8">
            <div className="border-l-2 border-[#fe8019] pl-6 bg-[#3c3836] p-4">
              <h3 className="text-xl font-semibold mb-2 text-[#fbf1c7] font-mono">Data Infrastructure</h3>
              <p className="text-[#d5c4a1] font-mono text-sm leading-relaxed">
                Building scalable data pipelines and infrastructure systems that power AI applications. 
                Working with distributed systems, real-time processing, and cloud platforms.
              </p>
            </div>
            <div className="border-l-2 border-[#fabd2f] pl-6 bg-[#3c3836] p-4">
              <h3 className="text-xl font-semibold mb-2 text-[#fbf1c7] font-mono">AI Applications</h3>
              <p className="text-[#d5c4a1] font-mono text-sm leading-relaxed">
                Developing and deploying machine learning models and AI-powered applications. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills - Minimal Grid */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 bg-[#3c3836]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono mb-12 text-[#fe8019] gruvbox-glow">./stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                category: "Infrastructure", 
                items: ["Python", "Docker", "Kubernetes", "AWS"],
                icon: "⚡",
                color: "#fe8019"
              },
              { 
                category: "Data & AI", 
                items: ["Spark", "Kafka"],
                icon: "🧠",
                color: "#fabd2f"
              },
              { 
                category: "Game Dev", 
                items: ["Unity", "Godot", "C#", "Blender"],
                icon: "🎮",
                color: "#b8bb26"
              },
              { 
                category: "Hardware", 
                items: ["Arduino", "Raspberry Pi", "IoT"],
                icon: "🔧",
                color: "#83a598"
              }
            ].map((skillGroup, index) => (
              <div key={index} className="space-y-3 border border-[#504945] p-4 bg-[#282828]">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{skillGroup.icon}</span>
                  <h3 className="font-mono text-sm font-semibold text-[#fbf1c7]" style={{color: skillGroup.color}}>{skillGroup.category}</h3>
                </div>
                <div className="space-y-1">
                  {skillGroup.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="font-mono text-xs text-[#d5c4a1]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - Clean Cards */}
      <section id="projects" className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-mono mb-12 text-[#fe8019] gruvbox-glow">./projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Data Pipeline",
                type: "Infrastructure",
                description: "Real-time ML inference pipeline processing 1M+ events/day",
                tech: "Python • Kafka • Docker • AWS",
                status: "Production",
                color: "#b8bb26"
              },
              {
                title: "Indie Game Project",
                type: "Game Dev",
                description: "2D pixel art platformer with procedural level generation",
                tech: "Unity • C# • Git",
                status: "In Progress",
                color: "#d3869b"
              }
            ].map((project, index) => (
              <div key={index} className="group border border-[#504945] hover:border-[#fe8019] transition-colors bg-[#3c3836]">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-[#fe8019] transition-colors text-[#fbf1c7] font-mono">{project.title}</h3>
                      <span className="font-mono text-xs text-[#928374]">{project.type}</span>
                    </div>
                    <span className="px-2 py-1 bg-[#504945] font-mono text-xs border border-[#928374]" style={{color: project.color}}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-[#d5c4a1] text-sm mb-4 leading-relaxed font-mono">
                    {project.description}
                  </p>
                  <div className="font-mono text-xs text-[#928374]">
                    {project.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Terminal Style */}
      <section id="contact" className="px-6 py-16 sm:px-8 lg:px-12 bg-[#3c3836]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono mb-12 text-[#fe8019] gruvbox-glow">./connect</h2>
          <div className="bg-[#282828] border-2 border-[#504945] rounded-lg p-6 font-mono">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-[#fb4934] rounded-full"></div>
                <div className="w-3 h-3 bg-[#fabd2f] rounded-full"></div>
                <div className="w-3 h-3 bg-[#b8bb26] rounded-full"></div>
              </div>
              <span className="text-[#928374] text-sm">gruvbox terminal v1.0</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="text-[#928374]">$ cat contact.txt</div>
              <div className="text-[#ebdbb2]">
                <div>github: <a href="https://github.com/vennahlot" target="_blank" rel="noopener noreferrer" className="text-[#83a598] hover:text-[#fe8019] hover:underline gruvbox-glow">@vennahlot</a></div>
                <div>linkedin: <a href="https://www.linkedin.com/in/yichen-wang-863148106" target="_blank" rel="noopener noreferrer" className="text-[#83a598] hover:text-[#fe8019] hover:underline gruvbox-glow">/in/yichen-wang-863148106</a></div>
                <div>itch.io: <a href="https://vennahlot.itch.io/" target="_blank" rel="noopener noreferrer" className="text-[#83a598] hover:text-[#fe8019] hover:underline gruvbox-glow">@vennahlot</a></div>
                {/* <div>callsign: <span className="text-yellow-400">W3YC</span></div> */}
              </div>
              <div className="text-[#928374] mt-4">$ <span className="terminal-cursor text-[#fabd2f]">_</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="px-6 py-8 sm:px-8 lg:px-12 border-t border-[#504945]">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs text-[#928374]">
            © 2024 • Built with Next.js & deployed on GitHub Pages • Gruvbox theme enabled
          </div>
        </div>
      </footer>
    </div>
  );
}
