<script>
    export let language = true;

    import kwesforms from 'kwesforms';
    import {onMount} from 'svelte'

  onMount(() => {
    kwesforms.init();
  })
  
</script>

  <form action="https://formsapi.jabwn.com/key/BepFQzVvugOXeSHxVDNq" method="post" class="w-full form">
    <input type="hidden" name="_after" value="http://studio.koenraijer.io/{language ? "thanks" : "bedankt"}">
    <input type="hidden" name="_subject" value="New form submitted">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" rules="required|max:255" for="name">
            {language ? "Name" : "Naam"}
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-neutral-content border border-neutral rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" id="name" type="text" placeholder="">
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" for="email">
          E-mail
        </label>
        <input rules="required|max:255|email" class="appearance-none block w-full bg-gray-200 text-neutral-content  border border-neutral rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email" placeholder="">
        <input type="hidden" name="_valid[email]">
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-neutral text-xs font-bold mb-2"  for="message">
            {language ? "Message" : "Bericht"}
        </label>
        <textarea class="appearance-none block w-full bg-gray-200 text-neutral-content  border border-neutral rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" type="text" name="message" placeholder=""></textarea>
        <input type="hidden" name="_valid[message]" value="required">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <input type="submit" value="{language ? "Submit" : "Verstuur"}" class="btn btn-outline text-lg" />
        <input type="text" name="_honey" value="" style="display:none">
      </div>
    </div>
  </form>

  <!--
    <form action="https://kwesforms.com/api/foreign/forms/8K9JcTIBBv2XwSdLxRD0" class="kwes-form w-full form">

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" rules="required|max:255" for="name">
            {language ? "Name" : "Naam"}
        </label>
        <input rules="required|max:255" class="appearance-none block w-full bg-gray-200 text-neutral-content border border-neutral rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" id="name" type="text" placeholder="">
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-neutral text-xs font-bold mb-2" for="email">
          E-mail
        </label>
        <input rules="required|max:255|email" class="appearance-none block w-full bg-gray-200 text-neutral-content  border border-neutral rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" name="email" placeholder="">
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-neutral text-xs font-bold mb-2"  for="message">
            {language ? "Message" : "Bericht"}
        </label>
        <textarea rules="required|max:510" class="appearance-none block w-full bg-gray-200 text-neutral-content  border border-neutral rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" type="text" name="message" placeholder=""></textarea>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <input type="submit" value="{language ? "Submit" : "Verstuur"}" class="btn btn-outline text-lg" />
      </div>
    </div>
  </form>
  -->