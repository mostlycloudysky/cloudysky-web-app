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
            <a className="text-xl font-bold text-white hover:text-green-600 py-4">
              Home
            </a>
          </Link>
          <Link href="/blogs" legacyBehavior>
            <a className="text-xl font-bold text-white hover:text-green-600 py-4">
              Blogs
            </a>
          </Link>
          <Link href="/snippets" legacyBehavior>
            <a className="text-xl font-bold text-white hover:text-green-600 py-4">
              Snippets
            </a>
          </Link>
          <Link href="/playlist" legacyBehavior>
            <a className="text-xl font-bold text-white hover:text-green-600 py-4">
              Playlist
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
