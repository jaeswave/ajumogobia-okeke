import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { DEFAULT_DESCRIPTION, SITE_NAME, absoluteUrl, pageTitle } from '../../utils/seo.js';
import { imageUrl } from '../../data/images.js';

/** Per-page metadata: title, description, canonical, Open Graph, Twitter and JSON-LD. */
export default function Seo({ title, description = DEFAULT_DESCRIPTION, image, type = 'website', schema, noindex = false }) {
  const { pathname } = useLocation();
  const url = absoluteUrl(pathname);
  const fullTitle = pageTitle(title);
  const ogImage = image ? imageUrl(image, 1200) : undefined;
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];
  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_GB" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
