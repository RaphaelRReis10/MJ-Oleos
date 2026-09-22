/**
 * Serviços em ordem de prioridade comercial (PRD §6 e §111).
 * A ordem do array é a hierarquia: troca de óleo primeiro e com destaque próprio.
 */

export type ServiceIcon = "oil" | "wrench" | "chip" | "engine" | "suspension";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  /** Card principal recebe destaque visual e CTA próprio (PRD §27). */
  featured: boolean;
  /** Mensagem específica levada ao WhatsApp, para leitura do atendente. */
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    id: "troca-de-oleo",
    title: "Troca de Óleo",
    description:
      "Troca de óleo e lubrificantes para ajudar a manter o motor protegido e funcionando adequadamente.",
    icon: "oil",
    featured: true,
    whatsappMessage:
      "Olá! Vim pelo site da MJ Óleos e gostaria de agendar uma troca de óleo.",
  },
  {
    id: "manutencao-automotiva",
    title: "Manutenção Automotiva",
    description:
      "Serviços de manutenção para veículos de linha leve, ajudando na conservação e funcionamento do veículo.",
    icon: "wrench",
    featured: false,
    whatsappMessage:
      "Olá! Vim pelo site da MJ Óleos e gostaria de saber mais sobre manutenção automotiva.",
  },
  {
    id: "injecao-eletronica",
    title: "Injeção Eletrônica",
    description:
      "Diagnóstico e manutenção do sistema de injeção eletrônica do veículo.",
    icon: "chip",
    featured: false,
    whatsappMessage:
      "Olá! Vim pelo site da MJ Óleos e gostaria de saber mais sobre injeção eletrônica.",
  },
  {
    id: "motor",
    title: "Motor",
    description:
      "Serviços relacionados à manutenção e funcionamento do motor.",
    icon: "engine",
    featured: false,
    whatsappMessage:
      "Olá! Vim pelo site da MJ Óleos e gostaria de saber mais sobre manutenção de motor.",
  },
  {
    id: "suspensao",
    title: "Suspensão",
    description: "Cuidados e manutenção dos componentes da suspensão.",
    icon: "suspension",
    featured: false,
    whatsappMessage:
      "Olá! Vim pelo site da MJ Óleos e gostaria de saber mais sobre suspensão.",
  },
];
