import Icon from "../components/ui/Icon";
import { Img } from "../components/ui/Img";
import { Btn, Stars, Avatar, Title } from "../components/ui/common";
import { villas, services, reviews, HERO, SPA } from "../data";

export default function Home({go}){return(<>
 <section className="relative h-[78vh] min-h-[480px] overflow-hidden">
  <div className="absolute inset-0"><Img src={HERO} alt="Resort de luxo" id="h"/></div>
  <div className="absolute inset-0 bg-black/45"/>
  <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-[#FFFFFA]">
   <h1 className="font-script text-5xl sm:text-7xl md:text-8xl leading-tight">Golden Villa Tamarindo</h1>
   <p className="mt-4 max-w-xl uppercase tracking-wider text-xs sm:text-sm leading-relaxed">Refúgio exclusivo entre o mar e a floresta, onde cada pôr do sol é uma experiência.</p>
   <Btn solid={false} className="mt-8" onClick={()=>go("villas-detail")}>Descobrir</Btn>
  </div>
 </section>
 <section className="bg-plum/10 py-16 px-5">
  <Title>Our Villas</Title>
  <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
   {villas.map((v,i)=>(<article key={v.id} className="group text-center">
    <div className="mx-auto w-64 sm:w-72 aspect-square rounded-full overflow-hidden border-4 border-porcelain shadow-xl ring-1 ring-plum/20 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
     <div className="w-full h-full transition-all duration-300 group-hover:scale-110"><Img src={v.img} alt={v.n} id={"v"+i} c={v.c}/></div></div>
    <h3 className="mt-6 uppercase tracking-wider text-sm font-semibold">{v.n}</h3>
    <p className="mt-1 text-sm opacity-70 flex items-center justify-center gap-2"><Icon n="users" s={14}/>para {v.g} hóspedes</p>
    <Btn className="mt-4 !px-5 !py-2 inline-flex items-center gap-2" onClick={()=>go("villas-detail")}>Detalhes <Icon n="arrow" s={14}/></Btn>
   </article>))}
  </div>
 </section>
 <section className="py-16 px-5 max-w-6xl mx-auto">
  <Title>Serviços & Experiências</Title>
  <div className="grid gap-8 lg:grid-cols-5 items-stretch">
   <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl min-h-[260px] relative">
    <Img src={SPA} alt="Spa e gastronomia" id="spa"/>
    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-[#FFFFFA] uppercase tracking-wider text-xs">Spa & Gastronomia</div>
   </div>
   <div className="lg:col-span-3 grid gap-5 sm:grid-cols-2">
    {services.map(s=>(<div key={s.t} className="bg-card rounded-xl p-6 text-center border border-plum/15 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
     <div className="mx-auto w-14 h-14 rounded-full bg-plum text-[#FFFFFA] flex items-center justify-center mb-3"><Icon n={s.i} s={24}/></div>
     <h3 className="uppercase tracking-wider text-sm font-semibold">{s.t}</h3>
     <p className="mt-2 text-sm leading-6 opacity-70">{s.d}</p></div>))}
   </div>
  </div>
 </section>
 <section className="bg-charcoal py-16 px-5">
  <Title light>Depoimentos</Title>
  <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
   {reviews.map((r,i)=>(<figure key={r.n} className="bg-porcelain text-ink rounded-xl p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
    <Icon n="quote" s={28} className="text-rose"/>
    <blockquote className="mt-3 text-sm leading-7 italic flex-1">{r.t}</blockquote>
    <div className="mt-5"><Stars/></div>
    <figcaption className="mt-4 flex items-center gap-3"><Avatar name={r.n} i={i}/><div><div className="uppercase tracking-wider text-xs font-semibold">{r.n}</div><div className="text-xs opacity-70 flex items-center gap-1 mt-1"><Icon n="pin" s={12}/>{r.o}</div></div></figcaption>
   </figure>))}
  </div>
 </section></>);}
