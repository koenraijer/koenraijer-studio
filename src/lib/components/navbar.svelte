<script>
    import ThemeSelect from './theme-select.svelte'
    import GithubIcon from '$lib/components/svg/github-icon.svelte'
    import { page } from '$app/stores';

    let active = "text-secondary"
    let inactive = "text-base-content"
    
  </script>
  <div
    class="md:py-3 lg:py-5 mb-16 bg-base-100"
  >
    <div class="container flex items-center justify-between max-w-7xl mx-auto">
      <div class="flex-1 pl-4 pr-2 lg:pr-4">
        <a class="text-xl tracking-wide" href="/"><span class="text-xs">de</span> Studio <span class="text-xs">van</span> <b>Koen</b></a>
      </div>

      <div class="flex items-center p-4 justify-between">
        <div class="px-2 lg:px-4">
          <ThemeSelect aria="theme toggle when Hamburger menu is active"/>
        </div>
      </div>

   <div class="hidden px-4">
            <ThemeSelect/>
          </div>
    </div>
    
  </div>
