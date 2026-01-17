import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old routes → New IA routes (301 permanent redirects for SEO)
      {
        source: '/akademi',
        destination: '/egitim-akademi',
        permanent: true,
      },
      {
        source: '/mrv',
        destination: '/olcum-izleme',
        permanent: true,
      },
      {
        source: '/mrv-etki',
        destination: '/olcum-izleme',
        permanent: true,
      },
      {
        source: '/on-gorusme',
        destination: '/iletisim',
        permanent: true,
      },
      {
        source: '/programlar',
        destination: '/danismanlik-programlari',
        permanent: true,
      },
      {
        source: '/programlar/:slug',
        destination: '/danismanlik-programlari',
        permanent: true,
      },
    ]
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
