import React from 'react'

const About = () => {
  return (
    <section
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-24"
    >
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Cloud & DevOps Enthusiast
          </h2>
        </div>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">

          <p>
            I am an IT Support professional with 2+ years of experience, currently transitioning into a Cloud / DevOps Engineer role. 
            I have hands-on experience building and deploying applications on AWS using Infrastructure as Code, containerization, 
            and CI/CD practices.
          </p>

          <p>
            Through my projects, I have worked with tools such as Terraform, Docker, GitHub Actions, and Nginx to create scalable 
            and automated deployment workflows. I also implemented monitoring solutions using Prometheus and Grafana to improve 
            system observability.
          </p>

          <p>
            I am comfortable working in Linux environments and have a strong interest in cloud infrastructure, automation, 
            and system reliability. Currently, I am continuously improving my skills in cloud engineering and DevOps practices 
            by building real-world projects.
          </p>
          <p className="text-cyan-400 font-medium">
            Currently seeking opportunities as a Cloud / DevOps Engineer.
        </p>

        </div>

      </div>
    </section>
  )
}

export default About