import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import CertificationsHonors from '@/components/CertificationsHonors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-teal-500/20 selection:text-teal-400">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Publications />
        <CertificationsHonors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
