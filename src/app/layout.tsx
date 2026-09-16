import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'Kaka Davi Dharmawan | Data Scientist & Machine Learning Portfolio',
  description:
    'Computer Science student at UIN Sumatera Utara with hands-on experience in machine learning, statistical analysis, and predictive modeling across 3 data-driven projects, including 2 published research papers.',
  keywords: [
    'Kaka Davi Dharmawan',
    'Data Scientist',
    'Machine Learning Engineer',
    'Statistical Analysis',
    'Python',
    'SQL',
    'TensorFlow',
    'EduPredict AI',
    'NLP Weak Supervision',
    'UIN Sumatera Utara',
    'Data Science Portfolio'
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    title: 'Kaka Davi Dharmawan | Data Scientist & Machine Learning Portfolio',
    description:
      'Computer Science undergraduate specializing in machine learning, predictive modeling, and statistical analysis with 2 published research papers.',
    url: 'https://kakadavidharmawan.vercel.app',
    siteName: 'Kaka Davi Dharmawan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaka Davi Dharmawan | Data Scientist Portfolio',
    description:
      'Computer Science student with hands-on experience in machine learning, statistical analysis, and predictive modeling.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.name,
    jobTitle: 'Data Scientist & Machine Learning Student',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: PERSONAL_INFO.university,
    },
    knowsAbout: [
      'Machine Learning',
      'Statistical Analysis',
      'Python',
      'SQL',
      'TensorFlow',
      'Natural Language Processing',
      'Predictive Modeling'
    ],
    url: 'https://github.com/dapiupiu',
    sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-teal-500/20 selection:text-teal-400">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
