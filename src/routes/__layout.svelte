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
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import '../app.css'
	import {fade} from 'svelte/transition'
	import {seo} from '@lib/stores.js'
	export let currentRoute; 

	onMount(async () => {
	  themeChange(false)
	})
</script>
 
<svelte:head>
	<title>{$seo.title}</title>
	<meta name="description" content="{$seo.description}">

	<!--Facebook-->
	<meta property="og:image" content="{$seo.openGraphURL}">
	<meta property="og:description" content="{$seo.description}">
	<meta property="og:title" content="{$seo.title}">
	
	<!--Twitter-->
	<meta name="twitter:title" content="{$seo.title}">

	<!--Favicons-->
</svelte:head>

  <Navbar />
{#key currentRoute}
  <main class="container max-w-7xl mx-auto px-4 mb-20 flex flex-col min-h-screen overscroll-y-none overflow-x-hidden" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
	<slot />
  </main>
{/key}
  <Footer />