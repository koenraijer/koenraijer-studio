<script context="module">
	export const load = ({ url }) => {
	  const currentRoute = url.pathname
  
	  return {
		props: {
		  currentRoute
		}
	  }
	}

</script>

<script>
	import Footer from '$lib/components/footer.svelte'
	import Navbar from '$lib/components/navbar.svelte'
	import {browser} from '$app/env'
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import '../app.css'
	import {fade} from 'svelte/transition'
	import {seo} from '@lib/stores.js'
	export let currentRoute; 

	onMount(async () => {
	  themeChange(false)
	})

	let themeEl;
	
	if (browser) {
		themeEl = document.querySelector("[data-toggle-theme]");
		
	}

	$: console.log(themeEl);
	
</script>
 
<svelte:head>
	<title>{$seo.title}</title>
	<meta name="description" content="{$seo.description}">

	<!--Facebook-->
	<meta property="og:image" content="{$seo.openGraphURL}">
	<meta property="og:description" content="{$seo.description}">
	<meta property="og:title" content="{$seo.title}">
	<!--
	<meta property='og:url' content='//www.example.com/URL of the article'/>
	-->

	<!--Twitter-->
	<meta name="twitter:title" content="{$seo.title}">

	<!--Favicons-->
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
	<link rel="manifest" href="/favicon{themeEl}/site.webmanifest">

	<!--Goatcounter-->
	<script data-goatcounter="https://koenraijer.goatcounter.com/count"
    async src="//gc.zgo.at/count.js"></script>
</svelte:head>

  <Navbar />
{#key currentRoute}
  <main class="container max-w-7xl mx-auto px-4 mb-20 flex flex-col min-h-screen overscroll-y-none overflow-x-hidden" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
	<slot />
  </main>
{/key}
  <Footer />