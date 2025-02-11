<script>
  import Form from '$lib/components/form.svelte'
  import {seo} from '@lib/stores.js'
  let language = true;

</script>

<svelte:head>
    <title>Web design | {$seo.title} </title>
</svelte:head>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-12">
    <div class="max-w-7xl mx-auto ">
      <div class="lg:text-center">
        <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Web design</h2>
        <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-base-content sm:text-4xl">
          Spend less, get <i>more</i> than enough.
        </h1>
        <p class="mt-4 max-w-2xl text-xl text-neutral lg:mx-auto">
          I focus on an online identity that prioritizes content and functionality, allowing you to focus on running your business.
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
              </div>
              <p class="ml-16 text-xl leading-6 font-medium text-base-content ">Elegant and functional</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-neutral ">
              My designs are sleek, customized, and optimized for use on mobile devices. With more than 50% of visitors being on mobile, that's the way to go!
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
              <p class="ml-16 text-xl leading-6 font-medium text-base-content">Economical</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-neutral ">
              Pricing starts at €250,- and can rise to €500,- depending on your wishes (another price based on carrying capacity is also possible). That's way below market value, and additionally, all proceeds go to the KiKa Foundation.
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
              <p class="ml-16 text-xl leading-6 font-medium text-base-content">Blazing fast and secure</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-neutral">
              I use SvelteKit, which is both faster and more secure than a traditional WordPress website (a <a name="link to WordPress security issue" href="https://www.bleepingcomputer.com/news/security/over-90-wordpress-themes-plugins-backdoored-in-supply-chain-attack/" target="_blank" rel="noopener" class="link text-secondary">recent security breach</a>). I'll be happy to explain my reasoning behind that in person.
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
              <p class="ml-16 text-xl leading-6 font-medium text-base-content">User-friendly</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-neutral">
              You can edit your own content, add blog posts, change opening hours, tell customers you'll be out of office and more; all in a simple Microsoft Word-like editor. No need to touch any code.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 py-12 sm:py-18 lg:py-24 w-7xl">
    <figure>
      <img src="laptopPreview.png" alt="Desktop view of my website template." class="rounded-lg">
      <figcaption class="text-center text-lg text-neutral">On a big screen, elements are enlarged and rearranged to make optimal use of the available space.</figcaption>
    </figure>
    <figure class="">
      <img src="phonePreview.png" alt="Mobile view of my website template." class="rounded-lg">
      <figcaption class="text-center text-lg text-neutral">On mobile, things become smaller, while staying easily clickable on touchscreen. The menu has become the icon in the top right.</figcaption>
    </figure>
          <figure class="lg:col-span-2 lg:pt-10 lg:px-20">
        <img src="graphCMS.png" alt="Mobile view of my website template." class="rounded-lg">
        <figcaption class="text-center text-lg text-neutral lg:text-center lg:px-20">With GraphCMS, adding or editing content feels like filling in a form. Just as easy as Microsoft Word.
         </figcaption>
    </figure>
  </div>

  <div class="lg:text-center">
  <h2 class="pt-16 text-base text-primary font-semibold tracking-wide uppercase">FAQ</h2>
  <h2 class="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">Practical questions</h2>
  <p class="mt-4 text-lg text-neutral">You may be left with a lot of questions, I'll try to answer some of them here!</p>
  </div>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="grid grid-cols-1 gap-y-16 gap-x-8 sm:pb-32 lg:max-w-7xl pb-24">
        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 text-lg">
          <div class="border-t border-neutral pt-4">
            <dt class="font-medium text-base-content">I've seen a pretty website, can you make that for me?</dt>
            <dd class="mt-2 text-neutral">Sure! I encourage you to show me other websites you like. I will think with you and build something that fits you and your company's identity.</dd>
          </div>
  
          <div class="border-t border-neutral pt-4">
            <dt class="font-medium text-base-content">I'm convinced, but how do we proceed?</dt>
            <dd class="mt-2 text-neutral">We'll discuss your needs physically or online, and I'll build you a prototype. After we've made a deal, I'll tweak the design until you're satisfied. Before delivery, I'll make sure you understand how everything works.</dd>
          </div>
  
          <div class="border-t border-neutral pt-4">
            <dt class="font-medium text-base-content">Can you help writing the content?</dt>
            <dd class="mt-2 text-neutral">Yes I can. I'm proficient in English and Dutch, and I have written plenty of essays in both languages throughout the years.</dd>
          </div>
  
          <div class="border-t border-neutral pt-4">
            <dt class="font-medium text-base-content">What happens after you build the website?</dt>
            <dd class="mt-2 text-neutral">I will provide technical assistance free of charge, though I will charge an hourly fee for content editing or design changes.
            </dd>
          </div>
  
          <div class="border-t border-neutral pt-4">
            <dt class="font-medium text-base-content">Who owns the website?</dt>
            <dd class="mt-2  text-neutral">You have full ownership! All I want is a couple of images to show in my portfolio.</dd>
          </div>
  
          <div class="border-t border-neutral pt-4">
            <dt class="font-medium text-base-content">Why is hosting free?</dt>
            <dd class="mt-2 text-neutral">I use GraphCMS and Vercel, which offer extensive free plans. All you pay for is the domain name, which costs a couple of euros a year.</dd>
          </div>

          <div class="border-t border-neutral pt-4">
            <dt class="font-medium text-base-content">Kan I see a website example?</dt>
            <dd class="mt-2 text-neutral">Of course :) Here is the <a href="https://boilerplate-nine-cyan.vercel.app/" class="link text-secondary" target="_blank" rel="noopener">demo</a> that was shown in the images above. Check out how it works in practice! </dd>
          </div>
        </dl>
  </div>
  
    <div class="lg:text-center">

    <h2 id="contact" class=" pt-16 text-base text-primary font-semibold tracking-wide uppercase">Contact</h2>
    <h2 class=" text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">Let's make it happen</h2>
    <p class="  mt-4 text-lg text-neutral">Whether you're already convinced, have more questions or want to talk; send a message and I'll get back to you as soon as possible!</p>

  </div>
  <div class="lg:w-2/6 mx-auto w-full mt-16">
  
    <div class="">
        <Form {language}/>
    </div>

  </div>