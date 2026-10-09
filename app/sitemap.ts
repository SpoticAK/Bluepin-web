import { MetadataRoute } from 'next';

// Static last-modified dates: only bump a page's date when its content
// actually changes, so crawlers can trust the signal.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bluepin.in',
      lastModified: new Date('2026-10-09'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://bluepin.in/about',
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bluepin.in/why-bluepin',
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bluepin.in/how-it-works',
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bluepin.in/faq',
      lastModified: new Date('2026-09-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://bluepin.in/contact',
      lastModified: new Date('2026-08-02'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://bluepin.in/privacy',
      lastModified: new Date('2026-08-02'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://bluepin.in/terms',
      lastModified: new Date('2026-08-02'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
