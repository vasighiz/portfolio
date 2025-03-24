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
    <div className="min-h-screen bg-[#0A192F]">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Side Header - Fixed on desktop, top on mobile */}
        <div className="lg:w-80 lg:fixed lg:h-screen lg:border-r lg:border-[#233554] bg-[#112240]/80 backdrop-blur-sm">
          <div className="h-full flex flex-col p-4">
            <div className="flex-shrink-0">
              <Header />
            </div>
            <nav className="mt-4 flex-1 overflow-y-auto">
              <ul className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                          isActive 
                            ? 'bg-[#233554] text-[#FFD700]' 
                            : 'text-[#8892B0] hover:bg-[#233554]/50 hover:text-[#FFE55C]'
                        }`
                      }
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex-shrink-0 mt-4 text-center text-[#8892B0] text-sm border-t border-[#233554] pt-4">
              <p>© {new Date().getFullYear()} Akram Vasighi</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          <div className="max-w-4xl mx-auto px-4 py-8 md:px-8">
            <div className="min-h-[calc(100vh-4rem)] bg-[#112240]/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#233554]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
