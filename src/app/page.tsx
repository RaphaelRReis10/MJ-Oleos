import Hero from "@/components/sections/Hero";
import Indicators from "@/components/sections/Indicators";
import Specialty from "@/components/sections/Specialty";
import About from "@/components/sections/About";
import HFS from "@/components/sections/HFS";
import Services from "@/components/sections/Services";
import Preventive from "@/components/sections/Preventive";
import VisualBreak from "@/components/sections/VisualBreak";
import CTASection from "@/components/sections/CTASection";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";

/**
 * One-page institucional (PRD §14).
 *
 * A ordem das seções é a jornada definida no §52 e cada uma tem uma função
 * declarada no §112: explicar, posicionar, humanizar, gerar confiança,
 * informar, educar, conectar, converter e facilitar a visita.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Indicators />
      <Specialty />
      <About />
      <HFS />
      <Services />
      <Preventive />
      <VisualBreak />
      <CTASection />
      <Contact />
      <Location />
    </>
  );
}
