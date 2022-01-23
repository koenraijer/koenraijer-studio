<script>
    import {marked} from 'marked'
    export let url = ''
    export let name = ''
    export let slug = ''
    export let description = ''
    export let tags = ''
    export let sourceCode = ''
    export let demo = ''
</script>

<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="grid gap-5 row-gap-8 lg:grid-cols-2">
    <div class="flex flex-col justify-center">
      <div class="max-w-xl mb-6">
        <h2 class="max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          {name}
        </h2>
        {#if tags}
          {#each tags as tag}
            <span class="badge mb-6 mt-1 badge-primary text-base-100 p-3 mr-2">{tag}</span>
          {/each}
        {/if}
        <p class="text-base text-gray-700 md:text-lg">
          {@html marked(description)}
        </p>
      </div>
      <div class="grid gap-5 row-gap-8 sm:grid-cols-2">
        <div class="bg-base-200 shadow-sm">
          <div class="h-full p-5 border border-l-0 rounded-r">
            <h6 class="mb-2 font-semibold leading-5">
              <a class="link text-secondary" href={sourceCode}>Source Code</a>
            </h6>
            <p class="text-sm text-base-content">
              Jekyll project with Sass integration and Markdown blog functionality. 
            </p>
          </div>
        </div>
        <div class="bg-base-200 shadow-sm shadow-sm">
          <div class="h-full p-5 border border-l-0 rounded-r">
            <h6 class="mb-2 font-semibold leading-5">
              <a class="link text-secondary mr-5" href={demo}>Demo</a>
            </h6>
            <p class="text-sm text-base-content">
                
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img class="object-contain w-full h-full" src="{url}" alt="{name} website" />
    </div>
  </div>
</div>


