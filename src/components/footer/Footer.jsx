import React from 'react';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaMapPin,
  FaPhone,
  FaGlobe,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(155deg, #330B51 18.41%, #5F1D91 139.88%)'
      }}
      className="text-white py-12 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Get in Touch Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="flex items-center mb-2">
              <FaEnvelope size={18} className="mr-2" />
              <a
                href="mailto:business@pizzapizza.io"
                className="hover:underline"
              >
                business@pizzapizza.io
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope size={18} className="mr-2" />
              <a href="mailto:hello@pizzapizza.io" className="hover:underline">
                hello@pizzapizza.io
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone size={18} className="mr-2" />
              <a href="tel:+4930123456789" className="hover:underline">
                +49 30 123 456 789
              </a>
            </div>
            <div className="flex items-center">
              <FaGlobe size={18} className="mr-2" />
              <a href="https://pizzapizza.io" className="hover:underline">
                www.pizzapizza.io
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <FaLinkedin size={18} className="mr-2" />
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center">
                <FaInstagram size={18} className="mr-2" />
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </div>
              <div className="flex items-center">
                <FaFacebookF size={18} className="mr-2" />
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </div>
              <div className="flex items-center">
                <FaTwitter size={18} className="mr-2" />
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </div>
              <div className="flex items-center">
                <FaYoutube size={18} className="mr-2" />
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Address Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Pizza Pizza Design Services GmbH
              </h3>
              <div className="flex items-start">
                <FaMapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Dresdener Str. 22</p>
                  <p>10999 Berlin, Germany</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                Pizza Pizza Ventures GmbH
              </h3>
              <div className="flex items-start">
                <FaMapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Dresdener Str. 22</p>
                  <p>10999 Berlin, Germany</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Typeface by Dinamo</p>
          <div className="flex space-x-4 text-sm">
            <p>© 2022</p>
            <a href="#" className="hover:underline flex items-center">
              <FaArrowRight size={14} className="mr-1" />
              Data Privacy
            </a>
            <a href="#" className="hover:underline flex items-center">
              <FaArrowRight size={14} className="mr-1" />
              Imprint
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex bg-white rounded-full">
            <a
              href="#"
              className="px-6 py-2 text-purple-900 font-medium rounded-l-full hover:bg-gray-100 flex items-center"
            >
              <FaArrowRight size={16} className="mr-1" />
              Profile
            </a>
            <a
              href="#"
              className="px-6 py-2 text-purple-900 font-medium hover:bg-gray-100 flex items-center"
            >
              <FaArrowRight size={16} className="mr-1" />
              Services
            </a>
            <a
              href="#"
              className="px-6 py-2 text-purple-900 font-medium hover:bg-gray-100 flex items-center"
            >
              <FaArrowRight size={16} className="mr-1" />
              Work
            </a>
            <a
              href="#"
              className="px-6 py-2 text-purple-900 font-medium rounded-r-full hover:bg-gray-100 flex items-center"
            >
              <FaArrowRight size={16} className="mr-1" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
