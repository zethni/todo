<script>
	let { data } = $props();
	import { resolve } from '$app/paths';
</script>

<h1>Tasks</h1>

<ul>
	{#each data.tasks as { id, title } (id)}
		<li><a href={resolve('/tasks/' + id)}>{title}</a></li>
	{/each}
</ul>
