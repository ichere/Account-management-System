import { IconType } from 'react-icons';
import { AiOutlineLineChart } from 'react-icons/ai';
import { BsGlobe2 } from 'react-icons/bs';
import { MdOutlineAddBusiness, MdOutlineShoppingBag } from 'react-icons/md';

export type LandingFeatures = {
  title: string;
  description: string;
  icon: IconType;
};

export const cardData: LandingFeatures[] = [
  {
    title: 'Create Account',
    description:
      'Customize the look and feel of website using pre-designed templates or themes.Modify the design to match your brand colors, logo, and overall aesthetic.',
    icon: BsGlobe2,
  },
  {
    title: 'Manage Your Profile',
    description:
      'Write compelling and relevant content for your website pages, including Home, About, Products/Services, Contact, and any other relevant sections.',
    icon: MdOutlineAddBusiness,
  },
  {
    title: 'Monitor your Finance',
    description:
      'Share your website on social media platforms and other relevant channels.Implement online marketing strategies to attract visitors, such as content marketing, social media marketing, and paid advertising.',
    icon: MdOutlineShoppingBag,
  },
  {
    title: 'Monitor Your Growth',
    description:
      'Set up website analytics on the overview page to track visitor behavior and gather insights.Regularly update your website with fresh content, product listings, discounts and announcements',
    icon: AiOutlineLineChart,
  },
];
