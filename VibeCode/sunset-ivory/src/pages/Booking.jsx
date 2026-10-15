import { useState, useEffect } from "react";
import Icon from "../components/ui/Icon";
import { Btn, Title } from "../components/ui/common";
import { villas, extrasList } from "../data";
import { brl, iso } from "../utils/format";

export default function Booking({pre}){
 const t=new Date(),d1=new Date(t.getTime()+7*864e5),d2=new Date(t.getTime()+11*864e5);
 const [vid,setVid]=useState(pre||"tamarindo");
 const [ci,setCi]=useState(iso(d1)),[co,setCo]=useState(iso(d2));
 const [ad,setAd]=useState(2),[ch,setCh]=useState(0);
 const [ex,setEx]=useState({});const [code,setCode]=useState(null);
 useEffect(()=>{if(pre)setVid(pre)},[pre]);
 const v=villas.find(x=>x.id===vid);
 const nights=Math.max(0,Math.round((new Date(co)-new Date(ci))/864e5))||0;
 const base=nights*v.price;
 const extras=extrasList.filter(e=>ex[e.id]).reduce((s,e)=>s+e.p,0);
 const fee=(base+extras)*.1,total=base+extras+fee;
 const over=ad+ch>v.g;
 const Step=({l,val,set,min})=>(<div className="flex items-center justify-between py-2"><span className="text-sm">{l}</span>
  <div className="flex items-center gap-3"><button onClick={()=>set(Math.max(min,val-1))} className="w-8 h-8 rounded-full border border-rose text-rose hover:bg-rose hover:text-[#FFFFFA] transition-all duration-300">−</button><span className="w-5 text-center">{val}</span>
  <button onClick={()=>set(val+1)} className="w-8 h-8 rounded-full border border-rose text-rose hover:bg-rose hover:text-[#FFFFFA] transition-all duration-300">+</button></div></div>);
 const fld="w-full rounded-lg border border-plum/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose transition-all duration-300";
 const lab="block uppercase tracking-wider text-[11px] mb-1 opacity-70";
 return(<section className="py-14 px-5 max-w-6xl mx-auto">
  <Title>Simulação de Reserva</Title>
  <div className="grid gap-8 lg:grid-cols-5">
   <div className="lg:col-span-3 space-y-6">
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-plum/15">
     <label className={lab}>Villa</label>
     <select value={vid} onChange={e=>setVid(e.target.value)} className={fld}>{villas.map(x=><option key={x.id} value={x.id}>{x.n} — {brl(x.price)}/noite</option>)}</select>
     <div className="grid sm:grid-cols-2 gap-4 mt-4">
      <div><label className={lab}>Check-in</label><input type="date" value={ci} min={iso(t)} onChange={e=>{setCi(e.target.value);if(e.target.value>=co)setCo(iso(new Date(new Date(e.target.value).getTime()+864e5)))}} className={fld}/></div>
      <div><label className={lab}>Check-out</label><input type="date" value={co} min={ci} onChange={e=>setCo(e.target.value)} className={fld}/></div></div>
     <div className="mt-4 grid sm:grid-cols-2 gap-x-8"><Step l="Adultos" val={ad} set={setAd} min={1}/><Step l="Crianças" val={ch} set={setCh} min={0}/></div>
     {over&&<p className="mt-2 text-xs text-rose">Esta villa acomoda até {v.g} hóspedes.</p>}
    </div>
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-plum/15">
     <h3 className="uppercase tracking-wider text-xs font-semibold mb-3">Serviços extras opcionais</h3>
     {extrasList.map(e=>(<label key={e.id} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer border transition-all duration-300 mb-2 ${ex[e.id]?"border-rose bg-rose/10":"border-plum/15 hover:border-rose/50"}`}>
      <input type="checkbox" checked={!!ex[e.id]} onChange={()=>setEx({...ex,[e.id]:!ex[e.id]})} className="accent-[#912F40] w-4 h-4"/>
      <Icon n={e.i} s={18} className="text-rose"/><span className="flex-1 text-sm">{e.t}</span><span className="text-sm font-semibold">+ {brl(e.p)}</span></label>))}
    </div>
   </div>
   <aside className="lg:col-span-2"><div className="bg-charcoal text-[#FFFFFA] rounded-2xl p-6 shadow-xl lg:sticky lg:top-24">
    <h3 className="font-script text-3xl">Resumo</h3>
    <p className="text-xs uppercase tracking-wider opacity-70 mt-1">{v.n}</p>
    <dl className="mt-5 space-y-3 text-sm">
     <div className="flex justify-between"><dt>{nights} {nights===1?"noite":"noites"} × {brl(v.price)}</dt><dd>{brl(base)}</dd></div>
     <div className="flex justify-between"><dt>Serviços extras</dt><dd>{brl(extras)}</dd></div>
     <div className="flex justify-between"><dt>Taxa de serviço (10%)</dt><dd>{brl(fee)}</dd></div>
     <div className="flex justify-between border-t border-white/25 pt-4 text-lg font-semibold"><dt>Total estimado</dt><dd>{brl(total)}</dd></div></dl>
    <Btn className="w-full mt-6" disabled={nights<1||over} onClick={()=>setCode("SI-"+Math.random().toString(36).slice(2,8).toUpperCase())}>Confirmar Simulação</Btn>
    {nights<1&&<p className="text-xs mt-3 opacity-80">Selecione ao menos 1 noite.</p>}
   </div></aside>
  </div>
  {code&&<div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-5" onClick={()=>setCode(null)}>
   <div className="pop bg-porcelain text-ink rounded-2xl max-w-md w-full p-8 text-center shadow-2xl border border-rose/30" onClick={e=>e.stopPropagation()}>
    <div className="mx-auto w-14 h-14 rounded-full bg-rose text-[#FFFFFA] flex items-center justify-center"><Icon n="check" s={26}/></div>
    <h3 className="font-script text-4xl text-plum mt-4">Simulação confirmada</h3>
    <p className="text-sm mt-2 opacity-80">{v.n} · {nights} {nights===1?"noite":"noites"} · {ad+ch} hóspedes</p>
    <div className="mt-5 py-3 rounded-lg bg-plum/10"><div className="text-[11px] uppercase tracking-wider opacity-70">Código da reserva</div><div className="text-2xl font-semibold tracking-widest text-rose">{code}</div></div>
    <p className="mt-4 text-lg font-semibold">{brl(total)}</p>
    <p className="text-xs opacity-60 mt-1">Simulação demonstrativa — nenhuma cobrança foi realizada.</p>
    <Btn className="mt-6" onClick={()=>setCode(null)}>Fechar</Btn>
   </div></div>}
 </section>);}
