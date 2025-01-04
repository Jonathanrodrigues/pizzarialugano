import menuData from '@/data/menu.json';
import infoData from '@/data/info.json';
import ingredientsData from '@/data/ingredients.json';

export type MenuItem = {
    number: number;
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

export type Ingredient = {
    id: string;
    name: string;
    price: number;
    category?: string;
};

export function getMenuData(): MenuData {
    return menuData;
}

export function getInfo(): Info {
    return infoData;
}

export function getIngredients(category: string): Ingredient[] {
    switch (category) {
        case 'pizzas':
            return ingredientsData.extras.filter(item => (item.category === 'pizzas' || item.category === 'all')) || [];
        case 'desserts':
            return ingredientsData.extras.filter(item => (item.category === 'desserts' || item.category === 'all')) || [];
        case 'pasta':
            return ingredientsData.extras.filter(item => (item.category === 'pasta' || item.category === 'all')) || [];
        default:
            return ingredientsData.extras.filter(item => (item.category === 'all')) || [];
    }

    return ingredientsData.extras;
}

export function getMenuItem(category: string, itemNumber: string): MenuItem | null {
    console.log(category);
    console.log(itemNumber);
    console.log(menuData);

    switch (category) {
        case 'pizzas':
            return menuData.pizzas.find(item => item.number.toString() === itemNumber) || null;
        case 'desserts':
            return menuData.desserts.find(item => item.number.toString() === itemNumber) || null;
        case 'pasta':
            return menuData.pasta.find(item => item.number.toString() === itemNumber) || null;
        default:
            return menuData.pizzas.find(item => item.number.toString() === itemNumber) || null;
    }
}

export function getFormattedAddress(contact: ContactInfo): string[] {
    return [
        contact.address.street,
        `${contact.address.postalCode} ${contact.address.city}`,
        `${contact.address.region}, ${contact.address.country}`
    ];
}

export function formatPrice(price: string | number): string {
    if (typeof price === 'string') {
        return price;
    }
    return `€${price.toFixed(2)}`;
}