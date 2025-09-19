export default function sitemap() {
  const base = "https://llantrisantlocal.co.uk";
  const now = new Date();

  return [
    { url: `${base}/`,               lastModified: now },
    { url: `${base}/directory`,      lastModified: now },
    { url: `${base}/services`,       lastModified: now },
    { url: `${base}/deals`,          lastModified: now },
    { url: `${base}/contact`,        lastModified: now },
    { url: `${base}/ipw-climatech`,  lastModified: now },
  ];
}
