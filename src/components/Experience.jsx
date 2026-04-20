import React from 'react'

const Experience = () => {

  const categories = [
    {
      title: "Cloud & Infrastructure",
      items: ["AWS EC2", "Terraform"]
    },
    {
      title: "Containerization",
      items: ["Docker"]
    },
    {
      title: "CI/CD",
      items: ["GitHub Actions"]
    },
    {
      title: "Monitoring",
      items: ["Prometheus", "Grafana"]
    },
    {
      title: "Web Server & Networking",
      items: ["Nginx", "Cloudflare", "Basic Networking"]
    },
    {
      title: "Operating System",
      items: ["Linux (Ubuntu)"]
    }
  ]

  return (
    <section
      name="experience"
      className="w-full bg-gradient-to-b from-gray-950 to-gray-800 text-white py-24"
    >
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Cloud & DevOps Stack
          </h2>
          <p className="text-gray-400 mt-4">
            Technologies and tools I use to build, deploy, and monitor cloud applications.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-8">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-sm px-3 py-1 rounded-full text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Experience