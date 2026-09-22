import type { JSX, SVGProps } from "react";
import type { ServiceIcon } from "@/lib/services";

/**
 * Ícones em SVG inline, desenhados em traço técnico coerente com a
 * estética automotiva do PRD §12. Inline evita requisição extra e
 * permite herdar `currentColor` no hover dos cards (PRD §32).
 */
type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function OilIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        {/* Corpo da galoneira */}
        <path d="M3.6 12.2h9.6v5.4a2.2 2.2 0 0 1-2.2 2.2H5.8a2.2 2.2 0 0 1-2.2-2.2Z" />
        {/* Bico e ponta */}
        <path d="M13.2 12.2 18.6 8.6h2.2" />
        {/* Alca */}
        <path d="M6.4 12.2v-1.9a1.8 1.8 0 0 1 1.8-1.8h2.6" />
        {/* Gota */}
        <path d="M17.4 3.2c0 1.1-.9 1.7-.9 2.5a.9.9 0 0 0 1.8 0c0-.8-.9-1.4-.9-2.5Z" />
      </g>
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M15.4 4.6a4.4 4.4 0 0 0-5.9 5.4l-5.1 5.1a1.6 1.6 0 0 0 0 2.3l2.2 2.2a1.6 1.6 0 0 0 2.3 0l5.1-5.1a4.4 4.4 0 0 0 5.4-5.9l-2.6 2.6-2.4-.6-.6-2.4Z" />
        <path d="M6.6 17.4h.01" />
      </g>
    </svg>
  );
}

export function ChipIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M10.2 10.2h3.6v3.6h-3.6z" />
        <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" />
      </g>
    </svg>
  );
}

export function EngineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M4 11h2V9h3V7h5v2h2l2 2h3v5h-2v2h-6l-2-2H6v-2H4Z" />
        <path d="M11 7V5h3" />
        <path d="M18 13.5h2.5" />
      </g>
    </svg>
  );
}

export function SuspensionIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M12 3v2.5" />
        <path d="M9.4 6.2h5.2l-5.2 2.6h5.2l-5.2 2.6h5.2l-5.2 2.6h5.2l-5.2 2.6h5.2" />
        <path d="M12 16.6V19" />
        <circle cx="12" cy="20.4" r="1.4" />
        <path d="M7 4.4h10" />
      </g>
    </svg>
  );
}

const serviceIconMap: Record<ServiceIcon, (props: IconProps) => JSX.Element> = {
  oil: OilIcon,
  wrench: WrenchIcon,
  chip: ChipIcon,
  engine: EngineIcon,
  suspension: SuspensionIcon,
};

/** Resolve o ícone de um serviço pelo identificador vindo de lib/services. */
export function ServiceIconByName({
  name,
  ...props
}: IconProps & { name: ServiceIcon }) {
  const Component = serviceIconMap[name];
  return <Component {...props} />;
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.82 9.82 0 0 0 4.69 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.13 8.13 0 0 1-1.25-4.34c0-4.52 3.68-8.2 8.2-8.2a8.16 8.16 0 0 1 8.19 8.2c0 4.52-3.68 8.18-8.19 8.18Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M12 21s7-5.6 7-10.4A7 7 0 0 0 5 10.6C5 15.4 12 21 12 21Z" />
        <circle cx="12" cy="10.4" r="2.6" />
      </g>
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z" />
      </g>
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M4.5 12h15M13.5 6l6 6-6 6" />
      </g>
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M12 4.5v15M6 13.5l6 6 6-6" />
      </g>
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M12 3 5 5.8v5.4c0 4.2 2.9 8.1 7 9.3 4.1-1.2 7-5.1 7-9.3V5.8Z" />
        <path d="m9 12 2.2 2.2L15.4 10" />
      </g>
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="m3 12 3-3 3.2 3.2a1.6 1.6 0 0 0 2.3 0L13 10.8l4 4" />
        <path d="m21 12-3-3-3 3" />
        <path d="m13 14.8 1.6 1.6M11 16.6l1.4 1.4" />
        <path d="M3 12v2.6l3.4 3.4M21 12v2.6l-2 2" />
      </g>
    </svg>
  );
}

export function FamilyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <circle cx="8" cy="7.5" r="2.6" />
        <circle cx="16.4" cy="8.6" r="2.1" />
        <path d="M3.4 19v-1.4A4.6 4.6 0 0 1 8 13a4.6 4.6 0 0 1 4.6 4.6V19" />
        <path d="M14.4 13.4a3.8 3.8 0 0 1 6.2 3v1.2" />
      </g>
    </svg>
  );
}

export function DropletIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M12 3.2c3 3.6 5.2 6.3 5.2 8.9a5.2 5.2 0 0 1-10.4 0c0-2.6 2.2-5.3 5.2-8.9Z" />
        <path d="M9.6 13.2a2.5 2.5 0 0 0 2.2 2.4" />
      </g>
    </svg>
  );
}

export function CalendarCheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <rect x="3.6" y="5.2" width="16.8" height="15.2" rx="2.4" />
        <path d="M3.6 10h16.8M8 3.4v3.4M16 3.4v3.4" />
        <path d="m9 15 2 2 4-4" />
      </g>
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M2.6 12S6 6.2 12 6.2 21.4 12 21.4 12 18 17.8 12 17.8 2.6 12 2.6 12Z" />
        <circle cx="12" cy="12" r="2.8" />
      </g>
    </svg>
  );
}

export function CarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M3 14.4h18M4.6 14.4 6.4 8.8A2 2 0 0 1 8.3 7.4h7.4a2 2 0 0 1 1.9 1.4l1.8 5.6" />
        <path d="M3 14.4v3.2h2.4M21 14.4v3.2h-2.4" />
        <circle cx="7.4" cy="17.6" r="1.7" />
        <circle cx="16.6" cy="17.6" r="1.7" />
      </g>
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </g>
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke} strokeWidth={1.8}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </g>
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g {...stroke} strokeWidth={1.8}>
        <path d="M6 6l12 12M18 6 6 18" />
      </g>
    </svg>
  );
}
