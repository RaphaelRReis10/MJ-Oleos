"use client";

import { useEffect } from "react";

/**
 * Marca no <html> que o React hidratou.
 *
 * O scroll reveal (PRD §55) esconde o conteúdo assim que o script inline
 * adiciona a classe `js`, apostando que o React virá em seguida revelá-lo.
 * Quando o bundle não executa — CSP bloqueando, rede caindo, erro de
 * hidratação — essa aposta deixa o site inteiro invisível.
 *
 * Este componente fecha o ciclo: o script inline do layout arma um timer e,
 * se este sinal não chegar, ele remove a classe `js` e todo o conteúdo volta
 * a aparecer. O site perde a animação, nunca o conteúdo.
 */
export default function HydrationFlag() {
  useEffect(() => {
    document.documentElement.dataset.hydrated = "1";
  }, []);

  return null;
}
