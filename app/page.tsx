'use client';

import { Github, Linkedin, Mail, Phone, MapPin, Code, Server, Layout, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      title: 'ProLegion',
      description: 'Full-stack world largest marketplace solution built with Next.js, TypeScript, and Stripe integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    },
    {
      title: 'My Portfolio',
      description: 'application using React NextJS',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    },
    // {
    //   title: 'Healthcare Dashboard',
    //   description: 'Interactive analytics dashboard for healthcare providers using Next.js and D3.js.',
    //   image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    // },
  ];

  const services = [
    {
      icon: <Code className="w-10 h-10 mb-4" />,
      title: 'Web Development',
      description: 'Custom web applications built with React.js and Next.js',
    },
    {
      icon: <Server className="w-10 h-10 mb-4" />,
      title: 'API integration to FE Development',
      description: 'Scalable server solutions and API integration',
    },
    {
      icon: <Layout className="w-10 h-10 mb-4" />,
      title: 'UI/UX Design',
      description: 'Modern and intuitive user interface design',
    },
    // {
    //   icon: <Smartphone className="w-10 h-10 mb-4" />,
    //   title: 'Mobile Development',
    //   description: 'Cross-platform mobile applications',
    // },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=1920&q=80"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400">
            Abhishek Thakur
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8">
            Crafting exceptional digital experiences and make awesome applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-zinc-100 text-zinc-900 px-6 py-3 rounded-lg hover:bg-zinc-200 transition">
              Contact Me
            </a>
            <a href="#projects" className="border border-zinc-100 px-6 py-3 rounded-lg hover:bg-zinc-800 transition">
              View Work
            </a>
            <a href="#projects" className="border border-zinc-100 px-6 py-3 rounded-lg hover:bg-zinc-800 transition">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'MongoDB', 'REST APIs', 'GraphQL'].map((skill) => (
              <div key={skill} className="bg-zinc-700 p-4 rounded-lg text-center hover:bg-zinc-600 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-zinc-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-zinc-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-zinc-700 p-6 rounded-lg text-center hover:bg-zinc-600 transition">
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-zinc-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:abhishek2000thakur17@gmail.com" className="flex items-center gap-2 text-zinc-300 hover:text-zinc-100">
                  <Mail className="w-5 h-5" />
                  abhishek2000thakur17@gmail.com
                </a>
                <a href="tel:+918219584532" className="flex items-center gap-2 text-zinc-300 hover:text-zinc-100">
                  <Phone className="w-5 h-5" />
                  +91 821 958 4532
                </a>
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin className="w-5 h-5" />
                  Hamirpur, Himachal Pradesh, India
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Abhisheknxkz" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-zinc-100">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/abhishek-thakur-hp21" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-zinc-100">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-zinc-300">
                Looking for a developer to bring your ideas to life? Let's discuss your project.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-400">
            <p>&copy; {new Date().getFullYear()} Abhishek Thakur. All rights reserved.</p>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <a href="https://www.linkedin.com/company/devpeakinnovations/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-zinc-100 text-xs">Powered by DevPeak Innovations</a>
        </div>
      </footer>
    </div>
  );
}