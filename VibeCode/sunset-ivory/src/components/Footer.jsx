import Icon from "./ui/Icon";
import { Img } from "./ui/Img";
import { villas, IM } from "../data";

const gallery = [
  ...villas,
  { img: IM.pool, c: villas[0].c },
  { img: IM.infinity, c: villas[1].c },
  { img: IM.spa, c: villas[2].c },
];

export default function Footer() {
  return (
    <footer className="bg-plum px-5 pt-14 text-[#FFFFFA]" style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom,0px))" }}>
      <div className="mx-auto grid max-w-6xl gap-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-script text-4xl">Sunset Ivory</span>
          <p className="mt-3 leading-6 opacity-80">Villas de luxo na Costa Rica.</p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider">Contato</h4>
          <ul className="space-y-2 opacity-90">
            <li className="flex gap-2"><Icon n="pin" s={16} />Tamarindo, Guanacaste</li>
            <li className="flex gap-2"><Icon n="phone" s={16} />+506 0000 0000</li>
            <li className="flex gap-2"><Icon n="mail" s={16} />reservas@sunsetivory.com</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider">Galeria</h4>
          <div className="grid w-48 grid-cols-3 gap-2">
            {gallery.map((v, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-md transition-all duration-300 hover:scale-105">
                <Img src={v.img} alt="" id={"f" + i} c={v.c} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider">Novidades</h4>
          <ul className="space-y-2 opacity-90">
            <li>Nova villa em Monteverde</li><li>Pacote lua de mel 2027</li><li>Menu de verão do restaurante</li>
          </ul>
        </div>
      </div>
      <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs uppercase tracking-wider opacity-70">
        © 2026 Sunset Ivory. Todos os direitos reservados.
      </p>
    </footer>
  );
}
