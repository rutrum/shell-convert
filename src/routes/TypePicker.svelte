<script>
    export let list = [
        {
            name: "Portable Document Format",
            ext: "pdf",
        },
        {
            name: "PowerPoint Presentation",
            ext: "ppt",
        },
        {
            name: "Tom's Obvious Markup Language",
            ext: "toml",
        },
        {
            name: "JavaScript Object Notation",
            ext: "json",
        },
    ];
    let query = "";
    let results = [];
    $: {
        results = query == "" ? [] : list
            .map(x => [x, x.name.toLowerCase() + x.ext.toLowerCase()])
            .filter(([x, str]) => str.includes(query.toLowerCase()))
            .map(([x, _]) => x);
    };

</script>

<div>
    <input type="text" bind:value={query} />
    <br />
    {#each results as filetype}
        {filetype.ext}: {filetype.name}
        <br />
    {/each}
</div>
