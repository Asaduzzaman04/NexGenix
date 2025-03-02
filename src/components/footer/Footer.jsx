import React from 'react';
import {
  FaLinkedin,
  // FaInstagram,
  FaFacebookF,
  // FaTwitter,
  // FaYoutube,
  FaEnvelope,
  FaMapPin,
  FaPhone,
  FaGlobe,
  FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(155deg, #330B51 18.41%, #5F1D91 139.88%)'
      }}
      className="text-white  mx-auto  py-12 px-4 md:px-8"
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Get in Touch Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="flex items-center mb-2">
              <FaEnvelope size={18} className="mr-2" />
              <a
                href="mailto:nexgenix.info@gmail.com"
                className="hover:underline"
              >
                nexgenix.info@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone size={18} className="mr-2 rotate-90" />
              <a
                href="tel:+8801897-015708
"
                className="hover:underline"
              >
                +8801897-015708
              </a>
            </div>
            <div className="flex items-center">
              <FaGlobe size={18} className="mr-2" />
              <a href="https://thenexgenix.com" className="hover:underline">
                www.thenexgenix.com
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <FaLinkedin size={18} className="mr-2" />
                <a
                  href="https://www.linkedin.com/company/102997507"
                  target=" _blank"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              {/* <div className="flex items-center">
                <FaInstagram size={18} className="mr-2" />
                <a href="" className="hover:underline">
                  Instagram
                </a>
              </div> */}
              <div className="flex items-center">
                <FaFacebookF size={18} className="mr-2" />
                <a
                  href="https://www.facebook.com/thenexgenix"
                  target=" _blank"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </div>
              {/* <div className="flex items-center">
                <FaTwitter size={18} className="mr-2" />
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </div> */}
              {/* <div className="flex items-center">
                <FaYoutube size={18} className="mr-2" />
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </div> */}
            </div>
          </div>

          {/* Address Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold mb-4">
                IT Business Incubator,CUET
              </h3>
              <div className="flex items-start">
                <FaMapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Raozan, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
          <div className="flex   justify-center items-center space-x-4 text-sm">
            <p>Copyright © NexGenix . All rights reserved.</p>
            <Link to={'/tearmsandcondition'}>
              <p className="hover:underline flex items-center">
                <FaArrowRight size={14} className="mr-1" />
                Tearms And Condition
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
