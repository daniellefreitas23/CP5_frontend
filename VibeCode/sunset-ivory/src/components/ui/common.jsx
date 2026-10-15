import Icon from "./Icon";

export const Btn=({children,solid=true,className="",...p})=>(
 <button {...p} className={`uppercase tracking-wider text-xs font-medium px-7 py-3 rounded-full border transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none ${solid?"bg-rose text-[#FFFFFA] border-rose hover:bg-plum hover:border-plum hover:shadow-lg":"border-[#FFFFFA] text-[#FFFFFA] hover:bg-[#FFFFFA] hover:text-plum"} ${className}`}>{children}</button>);
export const Stars=()=><div className="flex gap-1 text-rose">{[0,1,2,3,4].map(k=><Icon key={k} n="star" s={16} fill/>)}</div>;
export const Avatar=({name,i})=>(<div className="w-14 h-14 rounded-full flex items-center justify-center text-[#FFFFFA] font-script text-2xl shrink-0 ring-2 ring-rose/40" style={{background:["#702632","#40434E","#912F40"][i]}}>{name.split(" ")[0][0]}{name.split(" ").pop()[0]}</div>);
export const Title=({children,light})=><h2 className={`font-script text-5xl sm:text-6xl text-center mb-12 ${light?"text-[#FFFFFA]":"text-plum"}`}>{children}</h2>;
