import React from 'react'

const Portfolio = () => {
  const stack = [
    "AWS EC2",
    "Terraform",
    "Docker",
    "Nginx",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
    "Cloudflare"
  ]

  return (
    <section
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-950 text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured Project
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            End-to-end cloud deployment with Infrastructure as Code, CI/CD automation, and monitoring.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">

          {/* TITLE + GITHUB */}
          <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Cloud Application Deployment on AWS
            </h3>

            <a
              href="https://github.com/EvoVincere"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-cyan-400 transition"
            >
              View Source →
            </a>
          </div>

          {/* OVERVIEW */}
          <p className="text-gray-400 mt-5 leading-relaxed max-w-3xl">
            Built and deployed a production-like cloud application on AWS using Infrastructure as Code,
            containerization, and automated CI/CD pipeline. This project simulates a real-world DevOps workflow
            from provisioning to monitoring.
          </p>

          {/* STACK */}
          <div className="flex flex-wrap gap-2 mt-6 ">
            {stack.map((tech, index) => (
              <span
                key={index}
                className="bg-cyan-700/80 text-sm px-3 py-1 rounded-full tabular-nums tracking-wide "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* GRID CONTENT */}
          <div className="grid md:grid-cols-2 gap-10 mt-10">

            {/* WHAT I DID */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400">
                What I Did
              </h4>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>• Provisioned AWS infrastructure using Terraform</li>
                <li>• Containerized application using Docker</li>
                <li>• Configured Nginx for web serving</li>
                <li>• Built CI/CD pipeline with GitHub Actions</li>
                <li>• Implemented monitoring with Prometheus & Grafana</li>
                <li>• Managed DNS and domain via Cloudflare</li>
              </ul>
            </div>

            {/* IMPACT */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400">
                Impact
              </h4>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>• Automated deployment workflow</li>
                <li>• Improved system observability</li>
                <li>• Created reproducible infrastructure</li>
                <li>• Simulated real-world DevOps practices</li>
              </ul>
            </div>

          </div>

          {/* ARCHITECTURE */}
          <div className="mt-12">
            <h4 className="text-lg font-semibold text-cyan-400">
              Architecture
            </h4>

            <div className="bg-black/60 p-5 rounded-lg mt-4 text-sm text-gray-300 font-mono leading-relaxed overflow-x-auto">
              User → Cloudflare → EC2 → Docker → App <br />
              <span className="text-gray-500">
                └── Monitoring → Prometheus → Grafana
              </span>
            </div>
          </div>

          {/* LIVE APP (SUBTLE) */}
          <div className="mt-10">
            <a
              href="https://iqbaalcloudporto.site"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-cyan-400 transition"
            >
              This portfolio is deployed using this architecture →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Portfolio