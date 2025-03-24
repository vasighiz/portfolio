// src/layouts/MainLayout.tsx
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaFileAlt, FaCogs, FaImages, FaBook, FaComments } from 'react-icons/fa';

const MainLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <FaHome />, label: 'Home' },
    { path: '/about', icon: <FaUser />, label: 'About' },
    { path: '/projects', icon: <FaCode />, label: 'Projects' },
    { path: '/resume', icon: <FaFileAlt />, label: 'Resume' },
    { path: '/skills', icon: <FaCogs />, label: 'Skills' },
    { path: '/gallery', icon: <FaImages />, label: 'Gallery' },
    { path: '/blog', icon: <FaBook />, label: 'Blog' },
    { path: '/testimonials', icon: <FaComments />, label: 'Testimonials' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9]">
      <div className="flex">
        {/* Side Navigation */}
        <div className="w-64 min-h-screen bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-r border-[#E2E8F0] flex flex-col">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-[#0B1B2D]">Portfolio</h1>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-[#1A2B3C] text-white shadow-md'
                    : 'text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0B1B2D]'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-[#E2E8F0]">
            <p className="text-sm text-[#64748B] text-center">
              © 2024 Portfolio. All rights reserved.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
