import menuData from '@/data/menu.json';
import infoData from '@/data/info.json';

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
};

export type MenuData = {
  [key: string]: MenuItem[];
};

export type ContactInfo = {
  address: {
    street: string;
    postalCode: string;
    city: string;
    region: string;
    country: string;
  };
  phone: string;
  email: string;
};

export type Hours = {
  [key: string]: string;
};

export type SocialLinks = {
  facebook: string;
  instagram: string;
};

export type Info = {
  contact: ContactInfo;
  hours: Hours;
  social: SocialLinks;
};

export function getMenuData(): MenuData {
  return menuData;
}

export function getInfo(): Info {
  return infoData;
}

export function getFormattedAddress(contact: ContactInfo): string[] {
  return [
    contact.address.street,
    `${contact.address.postalCode} ${contact.address.city}`,
    `${contact.address.region}, ${contact.address.country}`
  ];
}