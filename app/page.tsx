// import Navbar from "./Components/navbar";
import Header from "./Components/header";
import Skills from "./Components/skills";
import Experience from "./Components/experience";
import Projects from "./Components/projects";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import FloatingActionButton from "./Components/FloatingActionButton";

export default function Home() {
  return (
    <div className="w-full m-auto relative overflow-x-hidden">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-[#0a0c10]"></div>

        {/* Animated gradient orbs */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px]"
          style={{ animation: 'float-slow 20s ease-in-out infinite' }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[130px]"
          style={{ animation: 'float-slower 25s ease-in-out infinite', animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-amber-600/15 rounded-full blur-[140px]"
          style={{ animation: 'float-slow 22s ease-in-out infinite reverse', animationDelay: '4s' }}
        ></div>
        <div
          className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[120px]"
          style={{ animation: 'float-slower 28s ease-in-out infinite', animationDelay: '6s' }}
        ></div>

        {/* Additional accent orbs */}
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-amber-400/8 rounded-full blur-[100px]"
          style={{ animation: 'pulse-glow 15s ease-in-out infinite' }}
        ></div>

        {/* Subtle moving gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/5 via-transparent to-amber-900/5"></div>
      </div>

      <div className="relative">
        {/* <Navbar /> */}
        <Header />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
