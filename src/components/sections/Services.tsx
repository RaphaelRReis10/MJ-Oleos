import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/services";

/**
 * Serviços (PRD §26–§32). Função: informar (§112).
 *
 * A grade não trata todos os serviços como iguais (§6): a troca de óleo ocupa
 * duas colunas no desktop e é o primeiro card em qualquer largura.
 */
export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Nossos serviços"
          title="Soluções para cuidar do seu carro"
          subtitle="Da troca de óleo à manutenção automotiva, conte com uma estrutura preparada para veículos de linha leve."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 80}
              className={
                service.featured ? "sm:col-span-2 lg:col-span-2" : undefined
              }
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
