<script>
import GithubIcon from "./svg/github-icon.svelte";
import TwitterIcon from "./svg/twitter-icon.svelte";
import YoutubeIcon from "./svg/youtube-icon.svelte";

</script>

<footer class="items-center p-10 footer bg-base-200 text-base-content">
  <div class="container flex items-center max-w-7xl mx-auto justify-between ">
    <div class="items-center flex">
      <p><b>&copy; Studio Koen</b> {`${new Date().getFullYear()}`}.</p>
    </div> 

    <div class="px-2 lg:px-4">
            <a href="https://www.koenraijer.io/" name="back to main site">&#8624; to koenraijer.io</a>
    </div>
  </div>
</footer>