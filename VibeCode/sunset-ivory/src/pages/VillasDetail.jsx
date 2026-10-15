import { useState } from "react";
import Icon from "../components/ui/Icon";
import { Img } from "../components/ui/Img";
import { Btn, Title } from "../components/ui/common";
import { villas, amen } from "../data";
import { brl } from "../utils/format";

function VillaCard({v,i,go}){
 const thumbs=v.gal;const [cur,setCur]=useState(0);
 return(<article className="bg-card rounded-2xl overflow-hidden shadow-xl border border-plum/15 grid lg:grid-cols-2 transition-all duration-300 hover:shadow-2xl">
  <div className="p-4">
   <div className="aspect-[4/3] rounded-xl overflow-hidden"><Img key={cur} src={thumbs[cur]} alt={v.n} id={"d"+i+cur} c={v.c}/></div>
   <div className="grid grid-cols-3 gap-3 mt-3">
    {thumbs.map((t,k)=>(<button key={k} onClick={()=>setCur(k)} className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 ${cur===k?"border-rose":"border-transparent opacity-70 hover:opacity-100"}`}><Img src={t} alt="" id={"t"+i+k} c={v.c}/></button>))}
   </div>
  </div>
  <div className="p-6 lg:p-8 flex flex-col">
   <h3 className="font-script text-4xl text-plum">{v.n}</h3>
   <div className="mt-3 flex flex-wrap gap-5 text-sm">
    <span className="flex items-center gap-2"><Icon n="ruler" s={16} className="text-rose"/>{v.m2} m²</span>
    <span className="flex items-center gap-2"><Icon n="users" s={16} className="text-rose"/>até {v.g} hóspedes</span></div>
   <p className="mt-4 text-3xl font-semibold text-rose">{brl(v.price)} <span className="text-sm font-normal opacity-70">/ noite</span></p>
   <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
    {amen.map(([ic,t])=>(<li key={t} className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-plum text-[#FFFFFA] flex items-center justify-center shrink-0"><Icon n={ic} s={15}/></span>{t}</li>))}</ul>
   <Btn className="mt-7 self-start" onClick={()=>go("booking-simulator",v.id)}>Reservar esta Villa</Btn>
  </div></article>);}
const VillasDetail=({go})=>(<section className="py-14 px-5 max-w-6xl mx-auto">
 <Title>Nossas Villas</Title><div className="space-y-10">{villas.map((v,i)=><VillaCard key={v.id} v={v} i={i} go={go}/>)}</div></section>);

export default VillasDetail;
