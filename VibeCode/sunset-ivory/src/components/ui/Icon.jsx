import {
  Utensils, Waves, Wine, Compass, Star, Quote, Menu, X, Users, MapPin, Phone, Mail,
  ArrowRight, Wifi, Coffee, ConciergeBell, Snowflake, Eye, Check, Heart, Plane, Ruler,
} from "lucide-react";

const map = {
  utensils: Utensils, waves: Waves, wine: Wine, compass: Compass, star: Star, quote: Quote,
  menu: Menu, x: X, users: Users, pin: MapPin, phone: Phone, mail: Mail, arrow: ArrowRight,
  wifi: Wifi, coffee: Coffee, bell: ConciergeBell, snow: Snowflake, eye: Eye, check: Check,
  heart: Heart, plane: Plane, ruler: Ruler,
};

/** Wrapper sobre lucide-react: <Icon n="waves" s={20} fill className="..." /> */
export default function Icon({ n, s = 20, fill, className = "" }) {
  const C = map[n];
  return <C size={s} strokeWidth={1.6} fill={fill ? "currentColor" : "none"} className={className} />;
}
