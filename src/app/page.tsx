import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Head from "next/head";
import Experience from "@/components/About/Experience";
import Achievements from "@/components/Achievements/Achievements";

export default function Home() {
  return (
    <>
    <Head> 
      <link rel="icon" href="/img/Logo.png" />
    </Head>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
    </main>
    <Footer />
    </>
  );
}
