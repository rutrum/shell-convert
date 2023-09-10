<script lang="ts">

import type { Filetype } from '../../models/filetype';

export let data: {filetypes:Filetype[]};

</script>

<h1>Filetypes</h1>

<!-- <div>{JSON.stringify(data)}</div> -->

<ul>
{#each data.filetypes as {exts, name, description}}
  <li><h3>{name}</h3>
    <p>{description}</p>
    <h4>Extensions</h4>
    <ul>
      {#each exts as ext}
        <li>{ext}</li>
      {/each}
    </ul>
  </li>
  {:else}
  <h3>Failure to load File Types</h3>
{/each}
</ul>