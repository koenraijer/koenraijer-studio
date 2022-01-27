<script>
    import Form from '$lib/components/form.svelte'
    import {seo} from '@lib/stores.js'
import { raf } from 'svelte/internal';
    let language = false;
    
  </script>

<svelte:head>
    <title>Bedankt | {$seo.title} </title>
</svelte:head>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="py-12 text-left max-w-5xl mx-auto md:text-center">
    <h1 class="hero-h1 pb-3 text-5xl md:text-6xl lg:text-5xl font-extrabold text-secondary">
        Bedankt voor je berichtje!
    </h1>
      <p class="prose prose-lg pb-3">Je ontvangt zo snel mogelijk een reactie van me, zodat we samen een plan kunnen uitstippelen!</p>
      <a href="/" class="btn btn-outline">Ga terug</a>
  </div>
