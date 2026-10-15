import { useState } from "react";

/** Ilustração SVG usada como reserva caso a foto não carregue */
export const Scene=({c=["#F7D4A8","#912F40","#40434E"],id})=>(
 <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
  <defs><linearGradient id={"s"+id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={c[1]}/><stop offset="1" stopColor={c[0]}/></linearGradient></defs>
  <rect width="400" height="300" fill={`url(#s${id})`}/><circle cx="300" cy="95" r="34" fill="#FFFFFA" opacity=".85"/>
  <rect x="70" y="130" width="260" height="90" fill="#FFFFFA"/><rect x="60" y="120" width="280" height="14" fill={c[2]}/>
  <rect x="95" y="152" width="60" height="68" fill="#2b2e36" opacity=".85"/><rect x="170" y="152" width="60" height="68" fill="#2b2e36" opacity=".85"/><rect x="245" y="152" width="60" height="68" fill="#2b2e36" opacity=".85"/>
  <rect y="220" width="400" height="80" fill="#2f6f80"/>
 </svg>);
export const Img=({src,alt,id,c,className="w-full h-full object-cover"})=>{
 const [bad,setBad]=useState(false);
 return bad?<Scene id={id} c={c}/>:<img src={src} alt={alt} loading="lazy" onError={()=>setBad(true)} className={className}/>;
};
