 import {writable} from 'svelte/store';

 export const seo = writable({
            title: "de Studio van Koen", 
            description: "Beautiful and functional web design for charity.",
            openGraphURL: 'https://studio.koenraijer.io/studioOGimage.png',
        });