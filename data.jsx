import { nanoid } from 'nanoid';

export const dataDesignFor = [
  {
    id: nanoid(),
    heading: 'Introducing an extensible editor',
    text: 'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation and embeds such as images,videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.',
  },
  {
    id: nanoid(),
    heading: 'Robust content management',
    text: `Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality you're in full control.`,
  },
];

export const infraData = {
  heading: 'State of the Art Infrastructure',
  text: 'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your reader are, keeping your site competitive.',
};

export const dataFreeOpen = [
  {
    id: nanoid(),
    heading: 'Free, open, simple',
    text: 'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code suntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.',
  },
  {
    id: nanoid(),
    heading: 'Powerful tooling',
    text: 'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.',
  },
];

export const dataLinks = [
  {
    pageId: nanoid(),
    page: 'Product',
    links: [
      { id: nanoid(), label: 'Overview', url: '#' },
      { id: nanoid(), label: 'Pricing', url: '#' },
      { id: nanoid(), label: 'Marketplace', url: '#' },
      { id: nanoid(), label: 'Features', url: '#' },
      { id: nanoid(), label: 'Integration', url: '#' },
    ],
  },
  {
    pageId: nanoid(),
    page: 'Company',
    links: [
      { id: nanoid(), label: 'About', url: '#' },
      { id: nanoid(), label: 'Team', url: '#' },
      { id: nanoid(), label: 'Blog', url: '#' },
      { id: nanoid(), label: 'Careers', url: '#' },
    ],
  },
  {
    pageId: nanoid(),
    page: 'Connect',
    links: [
      { id: nanoid(), label: 'Contact', url: '#' },
      { id: nanoid(), label: 'Newsletter', url: '#' },
      { id: nanoid(), label: 'LinkedIn', url: '#' },
    ],
  },
];
