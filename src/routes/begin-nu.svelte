<script>
    import Form from '$lib/components/form.svelte'
    import {seo} from '@lib/stores.js'
    let language = false;
    
  </script>

<svelte:head>
    <title>Web design | {$seo.title} </title>
</svelte:head>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="py-12">
      <div class="max-w-7xl mx-auto">
        <div class="lg:text-center">
          <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-base-content sm:text-4xl">
            Betaal minder, krijg <i>meer</i> dan genoeg.
          </h1>
          <p class="mt-4 max-w-2xl text-xl text-neutral lg:mx-auto">
            Bij mij staan  inhoud en functionaliteit op de eerste plek bij het ontwerpen van uw online identiteit, zodat u alle tijd heeft om uw bedrijf te runnen.
          </p>
        </div>
    
        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-content">
                  <!-- Heroicon name: outline/finer-print -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>x
                <p class="ml-16 text-xl leading-6 font-medium text-base-content ">Mooi en functioneel</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-neutral ">
                Mijn ontwerp is modern, op maat gemaakt en geoptimaliseerd voor gebruik op mobiele telefoons. In een wereld waarin meer dan 50% van het surfen op telefoons gebeurd is dat erg belangrijk!
              </dd>
            </div>
    
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-content">
                  <!-- Heroicon name: outline/scale -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <p class="ml-16 text-xl leading-6 font-medium text-base-content">Betaalbaar</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-neutral ">
                De prijs van een website begint bij €250,- en loopt op tot €500,- afhankelijk van uw wensen (naar draagkracht kan in overleg ook!). Dat is fors onder de marktwaarde, én alle opbrengst gaat naar Stichting KiKa.
              </dd>
            </div>
    
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-content">
                  <!-- Heroicon name: outline/lightning-bolt -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p class="ml-16 text-xl leading-6 font-medium text-base-content">Bliksemsnel en veilig</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-neutral">
                  Ik gebruik Sveltekit. Dat is sneller en beter bestand tegen hacks dan een traditionele Wordpress website (zie dit <a name="link to WordPress security issue" href="https://www.bleepingcomputer.com/news/security/over-90-wordpress-themes-plugins-backdoored-in-supply-chain-attack/" target="_blank" rel="noopener" class="link text-secondary">recente veiligheidslek bij Wordpress</a>). De <i>waarom</i> is iets te technisch om hier uit te leggen, maar face-to-face vertel ik graag verder.
              </dd>
            </div>
    
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-content">
                  <!-- Heroicon name: outline/annotation -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <p class="ml-16 text-xl leading-6 font-medium text-base-content">Gebruiksvriendelijk</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-neutral">
                U kunt uw eigen inhoud aanpassen, nieuwsberichten toevoegen, openingstijden veranderen, klanten vertellen dat u op vakantie gaat en meer; allemaal in een simpele Microsoft Word-achtige tekstverwerker. U hoeft uw handen niet aan code te branden.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  
    <div class="grid grid-cols-1 lg:grid-cols-2 py-12 sm:py-18 lg:py-24 w-7xl">
      <figure>
        <img src="laptopPreview.png" alt="Desktop view of my website template." class="rounded-lg">
        <figcaption class="text-center text-lg text-neutral">Op een groot scherm zijn elementen groter en herordend om de beschikbare ruimte optimaal te gebruiken.</figcaption>
      </figure>
      <figure class="">
        <img src="phonePreview.png" alt="Mobile view of my website template." class="rounded-lg">
        <figcaption class="text-center text-lg text-neutral">Op een telefoonscherm wordt alles kleiner, maar gebruikers kunnen er nog altijd makkelijk op klikken. Het menu is nu het icoontje rechtsboven geworden.</figcaption>
      </figure>
      <figure class=" lg:col-span-2 lg:px-20">
        <img src="graphCMS.png" alt="Mobile view of my website template." class="rounded-lg">
        <figcaption class="text-lg text-neutral text-center lg:px-20">Met GraphCMS kunt u elke soort inhoud volgens een simpel formulier zelf toevoegen of wijzigen. Net zo gemakkelijk in gebruik als Microsoft Word.
         </figcaption>
      </figure>
    </div>
  
    <div class="lg:text-center">
      <h2 class="pt-16 text-base text-primary font-semibold tracking-wide uppercase">FAQ</h2>
      <h2 class="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">Praktische vragen</h2>
      <p class="mt-4 text-lg text-neutral">
        Omdat u misschien nog een heleboel vragen heeft, probeer ik er hier alvast een aantal te beantwoorden!</p>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="grid grid-cols-1 gap-y-16 gap-x-8 sm:pb-32 lg:max-w-7xl pb-24">
          <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 text-lg">
            <div class="border-t border-neutral pt-4">
              <dt class="font-medium text-base-content">Ik ben ergens een mooie website tegengekomen, kun je zoiets ook voor mij maken?</dt>
              <dd class="mt-2 text-neutral">Zeker! Ik moedig u aan om zelf te ontdekken wat u mooi vindt en om me daar zoveel mogelijk van te laten zien. Ik zal dan met u meedenken om iets te bouwen wat ook echt bij u en uw bedrijf past.</dd>
            </div>
    
            <div class="border-t border-neutral pt-4">
              <dt class="font-medium text-base-content">Ik wil een website, hoe gaat dat nu verder?</dt>
              <dd class="mt-2 text-neutral">We zullen fysiek of online in gesprek gaan over uw wensen en vervolgens bouw ik een prototype voor u. Nadat we een prijs overeengekomen zijn, pas ik het ontwerp aan totdat u tevreden bent. Voordat ik de website aflever, zorg ik dat u begrijpt hoe u alles werkt.</dd>
            </div>
    
            <div class="border-t border-neutral pt-4">
              <dt class="font-medium text-base-content">Schrijf je ook teksten?</dt>
              <dd class="mt-2 text-neutral">Zeker! Ik ben goed met taal en kan zowel in het Engels als het Nederlands voor u schrijven.</dd>
            </div>
    
            <div class="border-t border-neutral pt-4">
              <dt class="font-medium text-base-content">Wat gebeurd er nadat je de website gebouwd hebt?</dt>
              <dd class="mt-2 text-neutral">Technische ondersteuning blijft gratis, maar voor nieuwe inhoud of aanpassingen aan het ontwerp vraag ik een nader overeen te komen uurtarief.
              </dd>
            </div>
    
            <div class="border-t border-neutral pt-4">
              <dt class="font-medium text-base-content">Van wie is de website?</dt>
              <dd class="mt-2  text-neutral">Helemaal van u! Ik vraag alleen maar om een paar mooie foto's om in mijn portfolio te zetten.</dd>
            </div>
    
            <div class="border-t border-neutral pt-4">
              <dt class="font-medium text-base-content">Waarom is de hosting gratis?</dt>
              <dd class="mt-2 text-neutral">Ik gebruik GraphCMS en Vercel. Beiden hebben zeer ruime gratis abonnementen. U betaalt dus alleen een paar euro per jaar voor de domeinnaam.</dd>
            </div>
            <div class="border-t border-neutral pt-4">
                <dt class="font-medium text-base-content">Kan ik ergens een voorbeeld bekijken?</dt>
                <dd class="mt-2 text-neutral">Natuurlijk :) Hier is de <a href="https://boilerplate-nine-cyan.vercel.app/" class="link text-secondary" target="_blank" rel="noopener">demo</a> uit de afbeeldingen van hierboven. Kijk maar eens hoe het allemaal werkt!</dd>
              </div>
          </dl>
    </div>
    
    <div class="lg:text-center">

    <h2 id="contact" class="pt-16 text-base text-primary font-semibold tracking-wide uppercase">Contact</h2>
    <h2 class="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">Let's make it happen</h2>
    <p class="mt-4 text-lg text-neutral">Bent u overtuigd, heeft u nog vragen of wilt u een vrijblijvend gesprek? Stuur een berichtje, en ik reageer zo snel mogelijk!</p>
  </div>
    <div class="lg:w-2/6 mx-auto w-full mt-16">
  
      <div class="">
          <Form {language}/>
      </div>

    </div>
  