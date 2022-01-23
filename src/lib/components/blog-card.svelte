<script>
    import {marked} from 'marked'

    export let url = ''
    export let title = ''
    export let content = ''
    export let tags = ''
    export let slug = ''
    export let date = ''
</script>

<a href={`/posts/${slug}`} class="grid place-items-center group col-span-1">
    <div class="text-left max-h-xl max-w-4xl shadow-md mb-5 group-hover:scale-101 transition ease-in-out transform-gpu">
        <figure class="h-40 w-fit overflow-hidden rounded-t-md">
            <img
            class="object-cover"
            src={url}
            alt={`Cover image for ${title}`}
            />
        </figure>
    <div class="mt-5 mb-3 ml-4 mr-5 prose">
        <div class="flex justify-left space-x-2">
            {#each tags as tag}
            <span class="md:mt-0 badge badge-outline rounded-lg py-3">{tag}</span>
            {/each}
        </div>
        <h2 class="mt-3 mb-4 lg:text-3xl group-hover:text-primary">{title}</h2>
        <div class="prose text-bg-neutral">{@html marked(content).slice(0, 150)}</div>
        <div class="justify-between items-end card-actions">
            <div class="text-neutral">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            <a href={`/posts/${slug}`} class="no-underline text-bold group-hover:text-primary"
            >Read more</a
            >
        </div>
    </div>
    </div>
</a>
