import React from 'react';
// Using absolute paths from /src/ to resolve build errors
import Section from '../components/Section';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactSection = () => (
  <Section id="contact" title="Let's Connect!" icon={Mail} animate>
    <div className="max-w-lg mx-auto text-center bg-gray-800 p-8 rounded-xl shadow-2xl border border-blue-700/50">
      <p className="text-lg text-gray-300 mb-8">
        I'm always eager to collaborate on exciting projects and discuss new opportunities. Feel free to reach out through any of the channels below!
      </p>
      <div className="space-y-6">
        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-full text-white font-semibold text-lg hover:from-blue-700 hover:to-blue-800 shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full"
        >
          <Mail className="w-6 h-6" />
          {personalInfo.email}
        </a>
        <a
          href={`tel:${personalInfo.phone}`} // Added tel: scheme for phone numbers
          className="inline-flex items-center justify-center gap-3 bg-gray-700 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-gray-600 shadow-md transform hover:-translate-y-1 transition-all duration-300 w-full"
        >
          <Phone className="w-6 h-6" />
          {personalInfo.phone}
        </a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
        <MapPin className="w-5 h-5 text-blue-400" />
        <span className="text-lg">{personalInfo.location}</span>
      </div>
      <div className="mt-8 flex justify-center space-x-6">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-125">
          <span className="sr-only">GitHub</span>
          <Github className="h-8 w-8" />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-125">
          <span className="sr-only">LinkedIn</span>
          <Linkedin className="h-8 w-8" />
        </a>
      </div>
    </div>
  </Section>
);

export { ContactSection};
