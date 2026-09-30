<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { setContext } from 'svelte';
	import type Task from '$lib/types/Task';

	import { tasks } from '$lib/store/tasks.js';

	let { data, children, form } = $props();

	let hidePassword = $state(false);

	setContext('taskFunctions', { addTask });
	function addTask(task: Task) {
		tasks.update((n) => [...n, task]);
	}
	function addTestData() {
		tasks.update((n) => [...n, { id: 99, title: 'apple' }]);
	}

	import { page } from '$app/state';
	const isPWReset = page.url.searchParams.has('pwreset');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<main id="main">
	<div style="background: #990000; color: white; padding: 1rem; font-size:30px;">
		THIS DOESN'T ACTUALLY DO ANYTHING YET - JUST GETTING THINGS SET UP
	</div>

	{#if data.user && data.user.identities[0].email}
		<nav>
			<a class="button" href={resolve('/')}>Home</a>
			<a class="button" href={resolve('/tasks/add')}>Add Task</a>
			<a class="button" href={resolve('/tasks')}>Tasks</a>
		</nav>

		<p>Logged in as {data.user.identities[0].email}</p>
		{@render children()}
		<button onclick={addTestData}> Add Apple </button>
	{:else}
		{#if form?.error}
			<p style="color: red;">{form.error}</p>
		{/if}
		{#if isPWReset}
			<p style="color: green;">Please check your email for a password reset message.</p>
		{:else}
			<form method="post">
				<label for="email"
					>Email
					<input type="email" name="email" id="email" required />
				</label>
				{#if !hidePassword}
					<label for="password"
						>Password
						<input type="password" name="password" id="password" required />
					</label>
				{/if}
				<label>
					<input name="forgotPassword" type="checkbox" bind:checked={hidePassword} /> Forgot Password</label
				>

				<button type="submit">Login</button>
			</form>
		{/if}
	{/if}
</main>
