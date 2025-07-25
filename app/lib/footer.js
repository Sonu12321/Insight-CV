// components/Footer.jsx
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r  from-[#0a0a0a] to-[#1a1a2e] border-t border-gray-800">
      <div className="max-w-7xl mx-auto  px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex justify-evenly  md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Insight-CV
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Craft your professional story with AI-powered tools and insights. 
              Transform your career journey today.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                About Us
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Contact
              </Link>
              <Link href="/dashboard" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sonusanthosh5/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300"
              >
                <FaInstagram className="text-gray-400 group-hover:text-white transition-colors duration-300" size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sonu-santhosh"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaLinkedin className="text-gray-400 group-hover:text-white transition-colors duration-300" size={18} />
              </a>
              <a
                href="https://github.com/Sonu12321"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all duration-300"
              >
                <FaGithub className="text-gray-400 group-hover:text-white transition-colors duration-300" size={18} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Follow us for the latest updates and career insights.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sonu Santhosh. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
