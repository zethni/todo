<script>
	let { data } = $props();
	import { resolve } from '$app/paths';
</script>

<ul>
	{#each data.tasks as { id, title } (id)}
		<li><a href={resolve('/tasks/' + id)}>{title}</a></li>
	{/each}
</ul>
