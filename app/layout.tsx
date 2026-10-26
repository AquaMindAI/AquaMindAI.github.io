import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aquamindai.github.io'),
  title: 'AquaMind AI — Ağıllı Akvakültür və Akvaponika Monitorinqi',
  description: 'Azərbaycan Respublikası — Real vaxtlı IoT və Süni İntellekt əsaslı su ekosistemi, balıq və bitki bəslənmə monitorinq sistemi.',
  keywords: [
    'AquaMind AI',
    'Akvaponika',
    'Akvakültür',
    'Azərbaycan',
    'IoT Monitorinq',
    'Süni İntellekt',
    'Random Forest',
    'Next.js',
    'GitHub Pages'
  ],
  authors: [{ name: 'Suleyman Hajizadeh' }],
  openGraph: {
    title: 'AquaMind AI — Ağıllı Akvakültür və Akvaponika Monitorinq Platforması',
    description: 'Real-vaxt sensor telemetriyası, AI temperatur proqnozları və erkən xəbərdarlıq sistemi.',
    type: 'website',
    locale: 'az_AZ',
    siteName: 'AquaMind AI'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AquaMind AI — Ağıllı Akvakültür Monitorinqi',
    description: 'IoT və Süni İntellekt əsaslı akvaponika monitorinq sistemi'
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>"
  }
};

export const viewport: Viewport = {
  themeColor: '#030f1a',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body className="antialiased selection:bg-[#38bdf8]/30 selection:text-[#38bdf8]">
        {children}
      </body>
    </html>
  );
}
