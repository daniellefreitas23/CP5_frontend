const B = import.meta.env.BASE_URL;
export const IM = {pool: `${B}images/pool.jpg`, wood: `${B}images/wood.jpg`, suite: `${B}images/suite.jpg`, deck: `${B}images/deck.jpg`, spa: `${B}images/spa.jpg`, infinity: `${B}images/infinity.jpg`, bath: `${B}images/bath.jpg`};
export const HERO = IM.pool;
export const SPA = IM.spa;

export const villas=[
 {id:"tamarindo",n:"Golden Villa Tamarindo",g:6,price:3800,m2:220,img:IM.deck,gal:[IM.deck,IM.infinity,IM.bath],c:["#F7D4A8","#912F40","#40434E"]},
 {id:"manuel",n:"Peach Villa Manuel Antonio",g:10,price:4600,m2:310,img:IM.suite,gal:[IM.suite,IM.bath,IM.pool],c:["#FBC9B5","#702632","#40434E"]},
 {id:"monteverde",n:"Green Villa Monteverde",g:8,price:3400,m2:190,img:IM.wood,gal:[IM.wood,IM.infinity,IM.spa],c:["#E8D9B0","#40434E","#702632"]}];
export const amen=[["waves","Piscina privativa"],["eye","Vista para o mar"],["wifi","Wi-Fi 5G"],["coffee","Café da manhã gourmet"],["bell","Serviço de Butler 24h"],["snow","Ar condicionado"]];
export const services=[
 {i:"utensils",t:"Restaurante",d:"Gastronomia autoral com ingredientes locais."},
 {i:"waves",t:"Spa & Pool",d:"Massagens e piscinas para relaxar."},
 {i:"wine",t:"Bar",d:"Drinks de assinatura ao pôr do sol."},
 {i:"compass",t:"Passeios",d:"Trilhas, barcos e experiências guiadas."}];
export const reviews=[
 {n:"Marina & Rafael Souza",o:"São Paulo, Brasil",t:"Passamos nossa lua de mel na Golden Villa e foi mágico. O jantar privativo na praia, as pétalas no quarto e o butler que antecipava cada desejo fizeram da viagem algo inesquecível."},
 {n:"Daniel Ferreira",o:"Lisboa, Portugal",t:"Viajo muito a trabalho e raramente encontro tanta discrição e eficiência. Wi-Fi impecável, sala de reuniões improvisada na varanda e um spa que me devolveu a energia em dois dias."},
 {n:"Camille & Louis Laurent",o:"Paris, França",t:"Já conhecemos resorts em todo o mundo e a Peach Villa se destaca pelos detalhes: lençóis perfeitos, café da manhã servido à beira da piscina e uma equipe genuinamente calorosa."}];

export const extrasList=[
 {id:"heli",i:"plane",t:"Traslado de Helicóptero / Transfer VIP",p:2500},
 {id:"jantar",i:"heart",t:"Jantar Romântico Privativo na Praia",p:1800},
 {id:"spa",i:"waves",t:"Massagem e Sessão de Spa Completa",p:1200}];
