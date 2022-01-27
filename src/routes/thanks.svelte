<script>
    import Form from '$lib/components/form.svelte'
    import {seo} from '@lib/stores.js'
import { raf } from 'svelte/internal';
    let language = false;
    
  </script>

<svelte:head>
    <title>Thanks | {$seo.title} </title>
</svelte:head>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="py-12 text-left max-w-5xl mx-auto md:text-center">
    <h1 class="hero-h1 pb-3 text-5xl md:text-6xl lg:text-5xl font-extrabold text-secondary">
        Thank you for the message!
    </h1>
      <p class="prose prose-lg pb-3">I'll send you a reply as soon as possible, and we'll start building your website!</p>
      <a href="/" class="btn btn-outline">Ga terug</a>
  </div>
