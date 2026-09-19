<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { setContext } from 'svelte';
	import type Task from '$lib/types/Task';

	import { tasks } from '$lib/store/tasks.js';

	let { data, children } = $props();

	setContext('taskFunctions', { addTask });
	function addTask(task: Task) {
		tasks.update((n) => [...n, task]);
	}
	function addTestData() {
		tasks.update((n) => [...n, { id: 99, title: 'apple' }]);
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<main id="main">
	<nav>
		<a class="button" href={resolve('/')}>Home</a>
		<a class="button" href={resolve('/tasks/add')}>Add Task</a>
		<a class="button" href={resolve('/tasks')}>Tasks</a>
	</nav>

	<div style="background: #990000; color: white; padding: 1rem; font-size:30px;">
		THIS DOESN'T ACTUALLY DO ANYTHING YET - JUST GETTING THINGS SET UP
	</div>

	{#if data.user}
		<p>Logged in as {data.user.name}</p>
		{@render children()}
		<button onclick={addTestData}> Add Apple </button>
	{:else}
		<p>Not logged in</p>
	{/if}
</main>
