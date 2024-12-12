import type { Post } from '../types/post';

export const recentPosts: Post[] = [
  {
    title: 'Setting Up a Home Network Security Lab',
    description: 'Learn how to create a secure home lab environment for testing and learning network security concepts.',
    date: '2024-03-20',
    category: 'Networking',
    href: '/posts/home-network-security-lab'
  },
  {
    title: 'Implementing Network Segmentation',
    description: 'A comprehensive guide to implementing VLANs and network segmentation in your home lab.',
    date: '2024-03-18',
    category: 'Security',
    href: '/posts/network-segmentation'
  },
  {
    title: 'Monitoring Network Traffic with Wireshark',
    description: 'Master the basics of network analysis using Wireshark in your home lab environment.',
    date: '2024-03-15',
    category: 'Tools',
    href: '/posts/wireshark-basics'
  }
];