<script>

    export let url = ''
    export let name = ''
    export let intro = ''
    export let title = ''

</script>
<div class="flex flex-col items-center rounded-lg border-neutral shadow-md md:flex-row md:max-w-5xl mb-20">
    <img alt={name} class="object-cover w-full h-96 md:h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={url}>
    <div class="flex flex-col justify-between p-8 leading-normal">
        <h3 class="mb-2 text-2xl font-bold tracking-tight">{title}</h3>
        <p class="mb-3 prose prose-lg font-normal">{intro}</p>
    </div>
</div>
