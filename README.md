# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio features a clean, minimalistic design with smooth animations and a professional layout.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated sections using Framer Motion
- Project showcase with GitHub integration
- Contact section with social media links
- Modern UI with Tailwind CSS
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## Customization

### Personal Information

1. Update your personal information in `src/App.tsx`:
   - Replace "Your Name" with your actual name
   - Update the professional description
   - Add your bio in the About section
   - Update your skills list
   - Add your education and experience details

### Projects

1. Update the projects array in `src/App.tsx` with your own projects:
   ```typescript
   const projects = [
     {
       title: "Your Project Title",
       description: "Project description",
       technologies: ["Tech1", "Tech2", "Tech3"],
       githubUrl: "https://github.com/yourusername/project",
       liveUrl: "https://project-demo.com"
     },
     // Add more projects...
   ]
   ```

### Social Links

1. Update the social media links in the Contact section with your profiles:
   - GitHub profile URL
   - LinkedIn profile URL
   - Email address

### Styling

1. Customize the color scheme in `tailwind.config.js`:
   ```javascript
   theme: {
     extend: {
       colors: {
         primary: "#your-color",
         secondary: "#your-color",
         accent: "#your-color",
         background: "#your-color",
         text: "#your-color",
       }
     }
   }
   ```

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages).

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- React Scroll

## License

This project is licensed under the MIT License - see the LICENSE file for details.
