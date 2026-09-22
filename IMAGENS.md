# Imagens — o que está no ar e como substituir

As fotos do site são **reais, enviadas pela MJ**. O PRD §107 proíbe foto de
banco que dê a impressão de ser da empresa, então nenhum arquivo aqui é stock.

Os originais ficam em `fotos-originais/`, **fora de `public/`** — assim eles
continuam versionados no projeto sem irem para o deploy. O que o site consome
são os recortes otimizados em `public/images/`.

## Arquivos em uso

| Arquivo | Onde aparece | Dimensão | Origem |
|---|---|---|---|
| `public/images/hero-oficina.jpg` | Hero (topo, acima da dobra) | 720 × 360 | `Foto externa mecanica 2.jpeg`, faixa do box aberto |
| `public/images/sobre-mj.jpg` | Seção "Conheça a MJ Óleos" | 680 × 510 | `FrenteMecanica.jpeg`, recorte 4:3 da fachada |
| `public/images/visual-impacto.jpg` | Faixa "Seu carro merece cuidado de verdade" | 960 × 610 | `MotulOleo.jpeg`, tambor e frasco |
| `public/images/logo-mj.png` | Header, menu mobile e footer | 660 × 262 | `Logo.png` recortado |
| `public/images/logo-mj-dark.png` | Variante do logo para fundo claro | 660 × 262 | mesma arte repintada em `#123B63` |

## Decisões de recorte que precisam ser mantidas

**A fachada tem telefone e Instagram pintados na parede** — `99580-6899`,
`3475-3002` e `@automec.mj` — e eles **não batem** com os dados de
`src/lib/site.ts`. Os recortes do Hero e do Sobre foram escolhidos para deixar
essa área de fora: mostrar dois telefones diferentes na mesma página confunde
o visitante e derruba a consistência de NAP que o §47 exige.

Enquanto a divergência não for resolvida, **não amplie esses recortes** para
incluir a parede pintada.

A placa do veículo no Hero está desfocada: é carro de cliente e não precisa
ser legível.

## Ao enviar fotos novas

As atuais são de celular e a do Hero tem só 720px de largura — ela vive sob um
overlay escuro, o que disfarça bem, mas uma foto em **1920 × 1080** deixaria o
topo do site visivelmente mais nítido. Vale pedir à empresa:

- oficina em operação, na horizontal, 1920 × 1080;
- equipe ou proprietários, 1200 × 900;
- um detalhe de serviço (óleo sendo trocado, motor aberto), 1920 × 900.

Mande o JPG em boa resolução e **não** gere versões manuais: o `next/image`
converte para AVIF e WebP e serve o tamanho certo para cada tela (§56 e §62).

Para trocar, mantenha os nomes de `public/images/` — nenhum código muda.

## Overlays: a regra que não pode quebrar

Hero e faixa de impacto têm texto branco por cima da foto. Os overlays estão
calibrados para manter **no mínimo 0,70 de opacidade sob qualquer texto**, o
que garante os 4,5:1 do §61 mesmo nas áreas mais claras da imagem. Se a foto
mudar, confira isso antes de clarear o overlay — os cálculos estão comentados
em `Hero.tsx` e `VisualBreak.tsx`.

## Logotipo

`src/components/ui/Logo.tsx` serve as duas variantes pela prop `tone`
(`light` sobre fundo azul, `dark` sobre fundo claro). Controle o tamanho só
pela altura no `className`; a largura acompanha.

Os favicons seguem provisórios, gerados na identidade do projeto:

- `src/app/icon.svg` — favicon (64 × 64)
- `src/app/apple-icon.svg` — ícone iOS (180 × 180)

## Imagem de compartilhamento (Open Graph)

`src/app/opengraph-image.tsx` gera a imagem 1200 × 630 no build, usando as
cores da marca. Quando houver uma foto profissional da oficina, apague esse
arquivo e coloque `src/app/opengraph-image.jpg` (1200 × 630) no lugar — o
Next.js detecta o arquivo estático automaticamente.

## Alt text

Os textos alternativos descrevem a cena real de cada foto, sem keyword
stuffing (§81). Se trocar uma imagem por outra com conteúdo diferente, ajuste
o `alt` no componente correspondente.
