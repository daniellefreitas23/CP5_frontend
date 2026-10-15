export const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
export const iso = (d) => d.toISOString().slice(0, 10);
