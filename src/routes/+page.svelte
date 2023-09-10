<script lang="ts">
	import type { Conversion } from '../models/conversion'

	export let data:  {conversions:Conversion[]};

	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

	</h1>

	<!-- <div>{JSON.stringify(data)}</div> -->

	<ul>
		{#each data.conversions as c}
			<li><h2>{c.from} ⇨ {c.to}</h2>
				<p>{c.description}</p>
				<code>{c.code}</code>
				<h3>Dependencies</h3>
				<ul>
					{#each c.dependencies as d}
						<li>{d}</li>
					{/each}
				</ul>
			</li>

			{:else}
			<h3>Failure to load File Types</h3>
		{/each}
		</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
