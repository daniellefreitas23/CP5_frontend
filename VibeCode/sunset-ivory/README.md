# Sunset Ivory — Site de Villas de Luxo

SPA em **React 18 + Vite + Tailwind CSS 3 + lucide-react** com 3 telas:
Início, Detalhes das Villas e Simulador de Reservas (cálculo em tempo real).

## Rodar
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera /dist
npm run preview
```

## Estrutura
```
├── index.html
├── package.json / vite.config.js / tailwind.config.js / postcss.config.js
├── public/images/        # fotos (pool, wood, suite, deck, spa, infinity, bath)
└── src/
    ├── main.jsx · App.jsx        # navegação por estado (page)
    ├── index.css                 # Tailwind + variáveis de cor (claro/escuro)
    ├── data/index.js             # villas, comodidades, serviços, depoimentos, extras, imagens
    ├── utils/format.js           # brl(), iso()
    ├── components/
    │   ├── Header.jsx · Footer.jsx
    │   └── ui/ Icon.jsx (lucide) · Img.jsx (foto + fallback SVG) · common.jsx (Btn, Stars, Avatar, Title)
    └── pages/ Home.jsx · VillasDetail.jsx · Booking.jsx
```

## Personalizar
- **Fotos:** substitua os arquivos em `public/images/` (mesmo nome) ou edite `IM` em `src/data/index.js`.
- **Preços, metragem, capacidade, extras:** `src/data/index.js`.
- **Cores:** `tailwind.config.js` (Wine Plum `#702632`, Burnt Rose `#912F40`, Charcoal `#40434E`) e `src/index.css` (Porcelain/Black).
- **GitHub Pages em subpasta:** em `vite.config.js` use `base: "/nome-do-repositorio/"`.
