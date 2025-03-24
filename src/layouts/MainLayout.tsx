// src/layouts/MainLayout.tsx
import { Outlet, NavLink } from 'react-router-dom';
import { FaUser, FaCode, FaFileAlt, FaEnvelope, FaLightbulb, FaImages, FaHome, FaStar, FaBook } from 'react-icons/fa';
import Header from '../components/Header';

const MainLayout = () => {
  const navItems = [
    { path: '/', icon: <FaHome />, label: 'Home' },
    { path: '/about', icon: <FaUser />, label: 'About' },
    { path: '/projects', icon: <FaCode />, label: 'Projects' },
    { path: '/resume', icon: <FaFileAlt />, label: 'Resume' },
    { path: '/skills', icon: <FaLightbulb />, label: 'Skills' },
    { path: '/gallery', icon: <FaImages />, label: 'Gallery' },
    { path: '/blog', icon: <FaBook />, label: 'Blog' },
    { path: '/testimonials', icon: <FaStar />, label: 'Testimonials' },
    { path: '/contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Side Header - Fixed on desktop, top on mobile */}
        <div className="lg:w-80 lg:fixed lg:h-screen lg:border-r lg:border-primary-100 bg-white/80 backdrop-blur-sm">
          <div className="h-full flex flex-col p-4">
            <div className="flex-shrink-0">
              <Header />
            </div>
            <nav className="mt-2">
              <ul className="flex flex-col space-y-0.5">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center space-x-2 px-2 py-1.5 rounded-lg transition-colors duration-200 ${
                          isActive 
                            ? 'bg-primary/10 text-primary' 
                            : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
                        }`
                      }
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium text-sm">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex-shrink-0 mt-2 text-center text-gray-500 text-xs">
              <p>© {new Date().getFullYear()} Akram Vasighi</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          <div className="max-w-4xl mx-auto px-4 py-8 md:px-8">
            <div className="min-h-[calc(100vh-4rem)] rounded-2xl shadow-lg p-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
