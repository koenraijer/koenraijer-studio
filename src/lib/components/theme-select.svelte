
<script>
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false)
    // 👆 false parameter is required for svelte
  })

</script>
<input aria="theme-toggle" class="hidden"id="theme-toggle" type="checkbox" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
<label class="hover:cursor-pointer w-10" id="toggle-label" for="theme-toggle">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 light-hidden hover:fill-primary hover:scale-[1.15] transition-scale scale-100 duration-150 ease-bounce" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 dark-hidden hover:fill-primary hover:scale-[1.15] transition-scale scale-95 translate-x-px duration-150 ease-bounce" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
</label>

  <!--Cool options:
      <option value="dark">Dark</option>
      <option value="light">Light</option>
      <option value="dracula">Dracula</option>
      <option value="garden">Garden</option>
      <option value="synthwave">Synthwave</option>
  -->

  <!--All options:
      <option value="aqua">Aqua</option>
      <option value="black">Black</option>
      <option value="bumblebee">Bumblebee</option>
      <option value="corporate">Corporate</option>
      <option value="cupcake">Cupcake</option>
      <option value="cyberpunk">Cyberpunk</option>
      <option value="dark">Dark</option>
      <option value="dracula">Dracula</option>
      <option value="emerald">Emerald</option>
      <option value="fantasy">Fantasy</option>
      <option value="forest">Forest</option>
      <option value="garden">Garden</option>
      <option value="halloween">Halloween</option>
      <option value="light">Light</option>
      <option value="lofi">Lofi</option>
      <option value="luxury">Luxury</option>
      <option value="pastel">Pastel</option>
      <option value="retro">Retro</option>
      <option value="synthwave">Synthwave</option>
      <option value="valentine">Valentine</option>
      <option value="wireframe">Wireframe</option>
  -->