import { Plane, Landmark, Receipt, Pickaxe, Flame, Lightbulb, Gavel, Clapperboard, Ship, TrendingUp, ShieldCheck, HeartHandshake, Compass, Globe, Scale, MapPin } from 'lucide-react';

const map = { Plane, Landmark, Receipt, Pickaxe, Flame, Lightbulb, Gavel, Clapperboard, Ship, TrendingUp, ShieldCheck, HeartHandshake, Compass, Globe, Scale, MapPin };

/** Resolves icon names stored in content data to Lucide components. */
export default function Icon({ name, ...props }) {
  const Component = map[name] || Scale;
  return <Component aria-hidden="true" strokeWidth={1.25} {...props} />;
}
