import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update mouse position on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-4xl font-extrabold">
              arc
            </Link>
            <div className=" md:flex items-center space-x-8">
              <Link
                href="/https://tally.so/r/mVvbJj"
                className="relative px-6 py-3 rounded-full bg-white text-black hover:bg-opacity-90 transition-colors shadow-custom hover:shadow-custom-hover"
              >
                Beta access
                {/* Custom Shadow */}
                <div className="absolute inset-0 rounded-full shadow-custom-backdrop pointer-events-none" />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen inset-0 bg-[url('../public/sci-fi-background.png')] bg-center">
        {/* Background Image */}

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-32">
          <div className="flex flex-col items-end max-w-6xl mx-auto mt-20">
            {/* Your content here */}
          </div>

          {/* Hero Video Dialog */}
          <div className=" inset-0 flex items-center justify-center z-40">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/MOvfHh1S_CM?si=deWwTus5szvT_-3d"
              thumbnailSrc="_2hfnak0roqrsvr4xf6pv_0 (1).png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/MOvfHh1S_CM?si=deWwTus5szvT_-3d"
              thumbnailSrc="_2hfnak0roqrsvr4xf6pv_0 (1).png"
              thumbnailAlt="Hero Video"
            />
          </div>

          {/* Notification with Floating Animation */}
          <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-full max-w-xs md:max-w-md animate-float shadow-lg">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 flex items-center gap-4 md:gap-6 border border-white/10">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 text-white flex items-center justify-center font-extrabold">
                arc
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base text-white font-medium">
                We are reimagining 
                <br />human-computer interaction
                </p>
              </div>
              <div className="text-xs md:text-sm text-white/70 font-medium">now</div>
            </div>
          </div>
        </div>

        {/* Mouse Tracker */}
        <div
          className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-screen"
          style={{
            left: mousePos.x - 16,
            top: mousePos.y - 16,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.1s ease-out',
          }}
        >
          <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-pulse" />
          <div className="absolute inset-2 border border-blue-400 rounded-full" />
        </div>
      </main>

      {/* Add Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Custom Shadow for the Button */
        .shadow-custom {
          box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1);
        }

        .shadow-custom-hover {
          box-shadow: 0 6px 8px -1px rgba(255, 255, 255, 0.2), 0 4px 6px -2px rgba(255, 255, 255, 0.2);
        }

        /* Unique Shadow Shape using Clip-Path */
        .shadow-custom-backdrop {
          box-shadow: 0 10px 15px -3px rgba(255, 255, 255, 0.3), 0 4px 6px -4px rgba(255, 255, 255, 0.3);
          clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%);
          opacity: 0.5;
          z-index: -1;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .shadow-custom-backdrop {
            clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
