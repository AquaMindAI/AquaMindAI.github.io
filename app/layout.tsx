import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aquamindai.github.io'),
  title: {
    default: 'AquaMind AI — Ağıllı Akvakültür və Akvaponika Monitorinq Platforması',
    template: '%s | AquaMind AI'
  },
  description: 'AquaMind AI — Azərbaycan Respublikası üçün hazırlanmış IoT sensor telemetriyası və Süni İntellekt (Random Forest) əsaslı qapalı dövriyyəli ağıllı akvakültür (RAS) və akvaponika ekosistem idarəetmə platforması. Müəllif: Süleyman Hacızadə, Qərbi Kaspi Universiteti.',
  keywords: [
    'AquaMind AI',
    'AquaMind',
    'aquamindai.github.io',
    'Ağıllı Akvakültür',
    'Akvaponika',
    'Akvakültür Azərbaycan',
    'Süleyman Hacızadə',
    'Suleyman Hajizade',
    'Qərbi Kaspi Universiteti',
    'Western Caspian University',
    'Molekulyar Biologiya və Biotexnologiyalar İnstitutu',
    'IoT Su Monitorinqi',
    'Süni İntellekt Akvakultura',
    'Random Forest Su Proqnozu',
    'ESP32 Akvakültür',
    'Dissolved Oxygen Sensor',
    'pH Telemetriyası',
    'RJAAA',
    'Research Journal of Adaptive Agriculture and Aquaculture',
    'Smart Aquaculture',
    'Precision Aquaculture',
    'Recirculating Aquaculture System',
    'RAS Azerbaijan',
    'Kür Nərəsi',
    'Nil Tilapiyası',
    'Göyqurşağı Foreli'
  ],
  authors: [
    { name: 'Süleyman Hacızadə (Suleyman Hajizade)', url: 'https://orcid.org/0009-0003-7842-1921' }
  ],
  creator: 'Süleyman Hacızadə',
  publisher: 'AquaMind AI Research Team',
  applicationName: 'AquaMind AI',
  generator: 'Next.js 14',
  category: 'Agriculture & Biotechnology Software',
  classification: 'Aquaculture, IoT, Artificial Intelligence, Smart Farming',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://aquamindai.github.io/',
    languages: {
      'az': 'https://aquamindai.github.io/',
      'az-AZ': 'https://aquamindai.github.io/',
      'en': 'https://aquamindai.github.io/',
      'en-US': 'https://aquamindai.github.io/',
      'x-default': 'https://aquamindai.github.io/'
    }
  },
  openGraph: {
    title: 'AquaMind AI — Ağıllı Akvakültür və Akvaponika Monitorinq Platforması',
    description: 'Real-vaxt IoT sensor telemetriyası, Süni İntellekt su keyfiyyəti proqnozu və erkən xəbərdarlıq sistemi. Elmi tədqiqat əsaslı müasir həll.',
    url: 'https://aquamindai.github.io',
    siteName: 'AquaMind AI',
    locale: 'az_AZ',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [
      {
        url: 'https://aquamindai.github.io/AquaMind-AI.png',
        width: 1200,
        height: 630,
        alt: 'AquaMind AI — Ağıllı Akvakültür və Akvaponika Platforması',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AquaMind AI — Ağıllı Akvakültür və Akvaponika Monitorinqi',
    description: 'IoT və Süni İntellekt əsaslı qapalı dövriyyəli ağıllı akvakültür ekosistem platforması.',
    images: ['https://aquamindai.github.io/AquaMind-AI.png'],
    creator: '@AquaMindAI'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      { url: '/AquaMind-AI.png', sizes: '192x192', type: 'image/png' },
      { url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>", type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/AquaMind-AI.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest'
};

export const viewport: Viewport = {
  themeColor: '#030f1a',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark'
};

const jsonLdGlobal = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://aquamindai.github.io/#organization',
      'name': 'AquaMind AI',
      'alternateName': 'AquaMind Platform',
      'url': 'https://aquamindai.github.io',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://aquamindai.github.io/AquaMind-AI.png',
        'width': 498,
        'height': 498
      },
      'founder': {
        '@type': 'Person',
        '@id': 'https://aquamindai.github.io/#founder',
        'name': 'Süleyman Hacızadə',
        'alternateName': 'Suleyman Hajizade',
        'jobTitle': 'Lead Bioengineer & AI Researcher',
        'sameAs': [
          'https://orcid.org/0009-0003-7842-1921',
          'https://www.webofscience.com/wos/author/record/NNH-0485-2025',
          'https://github.com/Suleyman-Hacizade'
        ],
        'affiliation': {
          '@type': 'EducationalOrganization',
          'name': 'Western Caspian University',
          'alternateName': 'Qərbi Kaspi Universiteti',
          'url': 'https://wcu.edu.az'
        }
      },
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'email': 'suleyman.hacizade1@gmail.com',
          'contactType': 'research, data access and partnership'
        },
        {
          '@type': 'ContactPoint',
          'email': 'suleyman.hacizade.232bioing@wcu.edu.az',
          'contactType': 'academic review and university relations'
        }
      ],
      'sameAs': [
        'https://github.com/AquaMindAI',
        'https://github.com/AquaMindAI/AquaMindAI.github.io',
        'https://github.com/AquaMindAI/AquaMindAI'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://aquamindai.github.io/#website',
      'url': 'https://aquamindai.github.io',
      'name': 'AquaMind AI',
      'description': 'Ağıllı Akvakültür və Akvaponika Monitorinq Platforması',
      'publisher': { '@id': 'https://aquamindai.github.io/#organization' },
      'inLanguage': ['az', 'en']
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://aquamindai.github.io/#software',
      'name': 'AquaMind AI Enterprise System',
      'operatingSystem': 'Web, Embedded ESP32, Linux Server',
      'applicationCategory': 'AgriculturalSoftware, IndustrialControlSystem, BusinessApplication',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'AZN'
      },
      'description': 'Real-vaxt IoT sensor telemetriyası və Süni İntellekt əsaslı qapalı dövriyyəli ağıllı akvakültür ekosistem idarəetmə platforması.'
    },
    {
      '@type': 'ScholarlyArticle',
      '@id': 'https://aquamindai.github.io/research/#paper',
      'headline': 'AquaMind-AI: An Intelligent IoT and Machine Learning Framework for Closed-Loop Smart Aquaponics',
      'name': 'AquaMind-AI: An Intelligent IoT and Machine Learning Framework for Closed-Loop Smart Aquaponics',
      'author': { '@id': 'https://aquamindai.github.io/#founder' },
      'publisher': {
        '@type': 'Organization',
        'name': 'Research Journal of Adaptive Agriculture and Aquaculture (RJAAA)',
        'alternateName': 'Western Caspian University Press'
      },
      'description': 'Comprehensive framework detailing cyber-physical sensor integration, ESP32 edge computing, Random Forest predictive temperature forecasting, and dissolved oxygen equilibrium kinetics for circular aquaponic systems.'
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGlobal) }}
        />
      </head>
      <body className="antialiased selection:bg-[#38bdf8]/30 selection:text-[#38bdf8] bg-[#030f1a] min-h-screen">
        {children}
      </body>
    </html>
  );
}
