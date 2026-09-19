<script lang="ts">
	import { tasks } from '$lib/store/tasks.js';

	// let items = $items;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#each $tasks as task (task.id)}
	<p>{task.title}</p>
{/each}
