import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
         
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" style={{ color: '#3b5998' }} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" style={{ color: '#1da1f2' }} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" style={{ color: '#e1306c' }} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" style={{ color: '#0077b5' }} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p>1234 Street Name, City, State</p>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} My Protein selling Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
