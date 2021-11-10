import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ShowcasesSection from '../components/sections/ShowcasesSection';
import BlogSection from '../components/sections/BlogSection';
import ExperimentsSection from '../components/sections/ExperimentsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HeroSection />
      <AboutSection />
      <ShowcasesSection />
      <BlogSection />
      <ExperimentsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
