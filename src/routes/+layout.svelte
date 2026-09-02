<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<main id="main">
	<nav>
		<a class="button" href="/">Home</a>
		<a class="button" href="/tasks/add">Add Task</a>
		<a class="button" href="/tasks">Tasks</a>
	</nav>

	{#if data.user}
		<p>Logged in as {data.user.name}</p>
		{@render children()}
	{:else}
		<p>Not logged in</p>
	{/if}
</main>
