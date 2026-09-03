<script>
	import { resolve } from '$app/paths';
	let { data } = $props();

	let tasks = data.tasks.slice(0);

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
	// function sortTasks(factor, direction) {
	// 	console.log('sorting');
	// 	return tasks.sort((a, b) => {
	// 		if (direction === 'asc') {
	// 			return a[factor] - b[factor];
	// 		} else {
	// 			return b[factor] - a[factor];
	// 		}
	// 	});
	// }

	function testSort() {
		console.log('sorting by priority descending');
		tasks = tasks.sort((a, b) => b.priority - a.priority);
	}
</script>

<h1>Tasks</h1>

{#if data.tasks.length === 0}
	<p>No tasks available.</p>
{:else}
	<table>
		<thead>
			<tr>
				<th>Task</th>
				<th onclick={testSort}>Effort</th>
				<th>Priority</th>
				<th>Due Date</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			{#each tasks as { id, title, description, effort, priority, dueDate } (id)}
				<tr>
					<td><a href={resolve('/tasks/' + id)}>{title}</a></td>

					<td>{getEffortName(effort)}</td>
					<td>{getPriorityName(priority)}</td>
					<td>{dueDate}</td>
					<td>{description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
