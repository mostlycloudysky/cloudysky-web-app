import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}
      onClick={onClose}
    >
      <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-900 bg-opacity-75">
        <nav className="flex flex-col justify-center items-center">
          <Link href="/" legacyBehavior>
            <a className="text-xl font-bold text-white hover:text-gray-300 py-4">
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-xl font-bold text-white hover:text-gray-300 py-4">
              About
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-xl font-bold text-white hover:text-gray-300 py-4">
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
