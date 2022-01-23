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
    <title>Home | {$seo.title} </title>
</svelte:head>

<div class="grid place-content-center mt-8">
<div class="btn-group px-2">
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


<div class="relative grid grid-cols-1 md:grid-cols-2 lg:py-0 max-w-5xl p-4 mx-auto mt-8">
    <div class="mb-4 lg:max-w-lg lg:pr-8 xl:pr-6">
        <h2 class="text-base text-primary font-semibold tracking-wide uppercase">{language ? "About me" : "Over mij"}</h2>
      <h2 class="mb-5 mt-2 font-sans text-3xl font-bold tracking-tight text-base-content sm:text-4xl sm:leading-none">
        {language ? "Hi! I'm Koen, and I make websites!" : "Hoi, ik ben Koen!"}
      </h2>
      <p class="mb-5 text-base text-base-content md:text-lg">
        {language ? "As a Naar De Top Voor KiKa participant, I will make your next website for charity! Are you an entrepreneur or do you one who hasn't got a proper website yet? Let's drink a cup of coffee together.": "Als deelnemer van Naar De Top Voor KiKa maak ik het komende jaar websites voor het goede doel! Ben je of ken je een ondernemer die nog geen (goede) website heeft? Laten we dan eens een kop koffie drinken!"}
      </p>
        <div class="bg-base-200 rounded-xl shadow-sm shadow-sm">
          <div class="h-full p-5 border border-l-0 rounded-r">
            <h6 class="mb-2 font-semibold leading-5">
              <a class="link text-secondary mr-5" href="/https://www.vriendenvoorkika.nl" rel="noopener" target="_blank">Vrienden Voor KiKa</a> 
            </h6>
            <p class="text-sm text-base-content">
                {language ? "Check out the website for our other events!" : "Kijk op onze website voor onze andere acties!"}
            </p>
          </div>
        </div>
    </div>

    <figure class="ml-auto mr-0">
        <img
      class="object-cover rounded-xl shadow-lg lg:shadow-none"
      src="{authors[0].picture.url}"
      alt="{authors[0].name}"
        />
    </figure>
</div>