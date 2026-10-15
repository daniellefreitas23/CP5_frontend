import { useState } from "react";
import Icon from "./ui/Icon";
import { Btn } from "./ui/common";

const NAV = [["home", "Início"], ["villas-detail", "Villas"], ["booking-simulator", "Reservar"]];

export default function Header({ page, go }) {
  const [open, setOpen] = useState(false);
  const goTo = (k) => { go(k); setOpen(false); };
  const link = ([k, l]) => (
    <button key={k} onClick={() => goTo(k)}
      className={`text-xs uppercase tracking-wider transition-all duration-300 hover:text-rose ${page === k ? "border-b border-rose text-rose" : ""}`}>
      {l}
    </button>
  );
  return (
    <header className="sticky top-0 z-30 border-b border-plum/10 bg-porcelain/95 backdrop-blur" style={{ paddingTop: "env(safe-area-inset-top,0px)" }}>
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-3 items-center px-5">
        <nav className="hidden gap-6 md:flex">{NAV.map(link)}</nav>
        <button className="justify-self-start md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Icon n={open ? "x" : "menu"} />
        </button>
        <button onClick={() => goTo("home")} className="justify-self-center text-center leading-none">
          <span className="block font-script text-3xl text-plum">Sunset Ivory</span>
          <span className="text-[9px] uppercase tracking-[0.3em]">— Costa Rica —</span>
        </button>
        <div className="justify-self-end">
          <Btn className="!px-4 !py-2" onClick={() => goTo("booking-simulator")}>Reservar</Btn>
        </div>
      </div>
      {open && <div className="flex flex-col items-start gap-3 px-5 pb-4 md:hidden">{NAV.map(link)}</div>}
    </header>
  );
}
