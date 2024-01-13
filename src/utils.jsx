//  reach to assets/images folder

export const getImageUrl = (path) => {
    return new URL (`assets/${path}`, import.meta.url).href;
};