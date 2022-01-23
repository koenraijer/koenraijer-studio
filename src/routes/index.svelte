<script context="module">
    import Hero from '$lib/components/hero.svelte'
    import Author from '@components/author.svelte'
    /* import gql, and {client} 
        - gql creates our query
        - the client takes our query and returns data inside of a const.
    */
    import {client} from '$lib/graphql-client'
    import { authorsQuery } from '$lib/graphql-queries'

    export const load = async () => {        

        // 2. Give that query to the GraphQL client.
        const [authorsReq] = await Promise.all([
            client.request(authorsQuery),
        ])

        const {authors} = authorsReq

        // 3. Return that data to the <script> tag
        return {
            props: {
                authors,
            },
        }
    }  
</script>

<script>
    import {marked} from 'marked'
    import {page} from '$app/stores'
    // 4. Export the data for use in the page
    export let authors
    import {seo} from '@lib/stores.js'

    let language = false; // True is equal to English 

</script>

<svelte:head>
    <title>{$seo.title} </title>
</svelte:head>

<div class="grid place-content-center mt-8">
<div class="btn-group">
    <label class="cursor-pointer text-md px-2">
        <input type="radio" value={true} bind:group={language} name="languages" id="english" class="hidden">
        <span class="text-neutral">EN</span>
    </label>|
    <label class="cursor-pointer text-md px-2">
        <input type="radio" value={false} bind:group={language} name="languages" id="dutch" data-title="NL" class="hidden"> 
        <span class="text-neutral">NL</span>
    </label>
</div>
    <Hero {language}/>
</div>


<div class="relative grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 lg:py-0 max-w-5xl mx-auto mt-8">
    <svg viewBox="0 0 28 12" fill="" class="lg:block hidden fill-base-300 -mt-20 h-fit w-fit">
          <defs>
            <pattern id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042" x="0" y="0" width=".0675" height=".15">
              <circle cx="1" cy="1" r=".5"></circle>
            </pattern>
          </defs>
          <rect fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)" width="52" height="24"></rect>
    </svg>
    <div class="mb-4 lg:col-start-2 lg:max-w-lg lg:pr-12">
        <h2 class="text-base text-primary font-semibold tracking-wide uppercase">{language ? "About me" : "Over mij"}</h2>
      <h2 class="mb-5 mt-2 font-sans text-3xl font-bold tracking-tight text-base-content sm:text-4xl sm:leading-none">
        {language ? "Hi! I'm Koen, and I make websites!" : "Hoi, ik ben Koen!"}
      </h2>
      <p class="mb-5 text-base text-base-content md:text-lg">
        {language ? "As a Naar De Top Voor KiKa participant, I will make your next website for charity! Are you an entrepreneur or do you one who hasn't got a proper website yet? Let's drink a cup of coffee together.": "Als deelnemer van Naar De Top Voor KiKa maak ik het komende jaar websites voor het goede doel! Ben je of ken je een ondernemer die nog geen (goede) website heeft? Laten we dan snel een kopje koffie drinken!"}
      </p>
        <div class="bg-base-200 rounded-xl shadow-sm shadow-sm">
          <div class="h-full p-5 rounded-r">
            <h6 class="mb-2 font-semibold leading-5">
              <a class="link text-secondary mr-5" href="/https://www.vriendenvoorkika.nl" rel="noopener" target="_blank">Vrienden Voor KiKa</a> 
            </h6>
            <p class="text-sm text-base-content">
                {language ? "Together with Thomas, Romy and Sanne, we organize more events! Please take a look at our website." : "Samen met Thomas, Romy en Sanne houden we meer acties voor KiKa! Kijk op onze website hoe je kunt helpen."}
            </p>
          </div>
        </div>
    </div>

    <figure class="">
        <img
      class="object-cover col-span-1 rounded-xl shadow-lg lg:shadow-none"
      src="{authors[0].picture.url}"
      alt="{authors[0].name}"
        />
    </figure>
</div>