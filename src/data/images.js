/**
 * Central image registry.
 *
 * Stock photographs are served from Unsplash (free licence, https://unsplash.com/license)
 * as interim imagery pending the firm's approval or replacement with commissioned
 * photography of its own offices. Swap any entry here and it updates site-wide.
 *
 * Portraits and the logo are the firm's own assets, hot-linked from the existing
 * website until the firm supplies original high-resolution files.
 */

const unsplash = (id) => `https://images.unsplash.com/photo-${id}`;

export const stock = {
  towerUp: unsplash('1486406146926-c627a92ad1ab'),
  skyline: unsplash('1464938050520-ef2270bb8ce8'),
  lawLibrary: unsplash('1505664194779-8beaceb93744'),
  gavelBooks: unsplash('1589829545856-d10d557cf95f'),
  boardroom: unsplash('1431540015161-0bf868a2d407'),
  officeInterior: unsplash('1497366216548-37526070297c'),
  signing: unsplash('1450101499163-c8848c66ca85'),
  suit: unsplash('1507679799987-c73779587ccf'),
  aircraft: unsplash('1436491865332-7a61a109cc05'),
  port: unsplash('1494412574643-ff11b0a5c1c3'),
  markets: unsplash('1611974789855-9c2a0a7236a3'),
  meeting: unsplash('1556761175-5973dc0f32e7'),
  stadium: unsplash('1522778119026-d647f0596c20'),
  refinery: unsplash('1513828583688-c52646db42da'),
  quarry: unsplash('1518709268805-4e9042af9f23'),
  ideas: unsplash('1532619675605-1ede6c2ed2b0'),
  documents: unsplash('1554224155-6726b3ff858f'),
  handshake: unsplash('1521791136064-7986c2920216'),
  architecture: unsplash('1479839672679-a46483c0e7c8'),
};

/** Build an optimised Unsplash URL (format negotiation, crop, width, quality). */
export function imageUrl(src, width = 1600, quality = 72) {
  if (!src) return '';
  if (!src.includes('images.unsplash.com')) return src;
  return `${src}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export function imageSrcSet(src, widths = [640, 960, 1280, 1920]) {
  if (!src || !src.includes('images.unsplash.com')) return undefined;
  return widths.map((w) => `${imageUrl(src, w)} ${w}w`).join(', ');
}

const legacy = 'https://www.ajumogobiaokeke.com/wp-content/uploads';

export const firmAssets = {
  logo: `${legacy}/2018/03/aologo.png`,
  portraits: {
    odein: `${legacy}/2018/01/Odein-Ajumogobia-SAN-e1515466817677.jpg`,
    sodipo: `${legacy}/2018/01/Babatunde-Sodipo.jpg`,
    osu: `${legacy}/2018/01/Patrick-A-Osu.jpg`,
  },
};
