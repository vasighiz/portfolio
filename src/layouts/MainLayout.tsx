// src/layouts/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Side Header - Fixed on desktop, top on mobile */}
        <div className="lg:w-80 lg:fixed lg:h-screen lg:border-r lg:border-primary-100 bg-white/80 backdrop-blur-sm">
          <div className="p-6 lg:p-8">
            <Header />
            <Navigation />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          <div className="max-w-4xl mx-auto px-4 py-8 md:px-8">
            <div className="min-h-[calc(100vh-4rem)] bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              <Outlet />
            </div>

            <footer className="mt-8 py-6 text-center text-gray-500 text-sm border-t border-primary-100">
              <p>© {new Date().getFullYear()} Akram Vasighi. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
