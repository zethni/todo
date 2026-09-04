<script>
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	let { data } = $props();

	let tasksState = $state(data.tasks);
	let tasks = $derived(tasksState);

	let taskComponents = [
		{ title: 'Task', key: 'title' },
		{ title: 'Effort', key: 'effort' },
		{ title: 'Priority', key: 'priority' },
		{ title: 'Due Date', key: 'dueDate' },
		{ title: 'Description', key: 'description' }
	];
	onMount(() => {
		sortTasks('dueDate', 'asc');
	});

	/**
	 *  @param {string} component
	 *  @param {any} value
	 *  @returns {any}
	 */
	function getComponentValue(component, value) {
		switch (component) {
			case 'effort':
				return getEffortName(value);
			case 'priority':
				return getPriorityName(value);
			default:
				return value;
		}
	}

	/** @param {number} effort @returns {string} */
	function getEffortName(effort) {
		switch (effort) {
			case 1:
				return 'Small';
			case 2:
				return 'Medium';
			case 3:
				return 'Large';
			default:
				return 'Unknown';
		}
	}
	/** @param {number} priority @returns {string} */
	function getPriorityName(priority) {
		switch (priority) {
			case 1:
				return 'Low';
			case 2:
				return 'Medium';
			case 3:
				return 'High';
			default:
				return 'Unknown';
		}
	}

	/** @param {string} category
	 *  @param {string} direction
	 */
	function sortTasks(category, direction = 'asc') {
		switch (category) {
			case 'effort':
			case 'priority':
				if (direction == 'asc') {
					tasks.sort((a, b) => /** @type {any} */ (a)[category] - /** @type {any} */ (b)[category]);
				} else {
					tasks.sort((a, b) => /** @type {any} */ (b)[category] - /** @type {any} */ (a)[category]);
				}
				break;
			default:
				if (direction == 'asc') {
					tasks.sort((a, b) => {
						const av = /** @type {any} */ (a)[category];
						const bv = /** @type {any} */ (b)[category];
						if (av < bv) return -1;
						if (av > bv) return 1;
						return 0;
					});
				} else {
					tasks.sort((a, b) => {
						const av = /** @type {any} */ (a)[category];
						const bv = /** @type {any} */ (b)[category];
						if (av > bv) return -1;
						if (av < bv) return 1;
						return 0;
					});
				}
				break;
		}
		if (document.querySelectorAll('.sort-arrow.active')) {
			const activeSorts = document.querySelectorAll('.sort-arrow.active');
			activeSorts.forEach((el) => el.classList.remove('active'));
		}

		document.getElementById(`sort-${direction}-${category}`)?.classList.add('active');
	}
</script>

<h1>Tasks</h1>

{#if tasks.length === 0}
	<p>No tasks available.</p>
{:else}
	<table>
		<thead>
			<tr>
				{#each taskComponents as component (component.key)}
					<th>
						{component.title}
						<br />
						<a
							href="#top"
							class="sort-arrow active"
							id="sort-asc-{component.key}"
							on:click|preventDefault={() => sortTasks(component.key, 'asc')}
						>
							&uarr;
						</a>
						<a
							href="#top"
							class="sort-arrow"
							id="sort-desc-{component.key}"
							on:click|preventDefault={() => sortTasks(component.key, 'desc')}
						>
							&darr;
						</a>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each tasks as task (task.id)}
				<tr>
					{#each taskComponents as component (component.key)}
						{#if component.key == 'title'}
							<td
								><a href={resolve(`/tasks/${task.id}`)}
									>{getComponentValue(component.key, task[component.key])}</a
								></td
							>
						{:else}
							<td>{getComponentValue(component.key, /** @type {any} */ (task)[component.key])}</td>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

<style>
	.sort-arrow {
		cursor: pointer;
		font-size: 20px;
		text-decoration: none;
	}
	.sort-arrow.active {
		color: red;
	}
</style>
