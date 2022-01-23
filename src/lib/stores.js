 import {writable} from 'svelte/store';

 export const seo = writable({
            title: "Koen Raijer", 
            description: "This is my personal website, where I sell web design for charity, blog a little and showcase my portfolio.",
            openGraphURL: '',
        });