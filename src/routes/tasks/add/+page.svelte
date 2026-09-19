<script lang="ts">
	import type Task from '$lib/types/Task';
	import { tasks } from '$lib/store/tasks.js';

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		// You can now handle the form data as needed, e.g., send it to a server
		const newTask: Task = {
			title: formData.get('title') as string,
			description: formData.get('description') as string,
			effort: (formData.get('effort') * 1) as number,
			priority: (formData.get('priority') * 1) as number,
			dueDate: formData.get('dueDate') as string,
			id: 99
		};

		tasks.update((n) => [...n, newTask]);
	}
</script>

<h1>Add Task</h1>
<form method="POST" onsubmit={handleSubmit}>
	<label for="title"
		>Title
		<input type="text" name="title" id="title" required /></label
	>

	<label for="description"
		>Description
		<textarea name="description" id="description" required></textarea></label
	>
	<label for="effort"
		>Effort
		<select name="effort" id="effort">
			<option value="0">None</option>
			<option value="1">Small</option>
			<option value="2">Medium</option>
			<option value="3">Large</option>
			<option value="4">Extra Large</option>
		</select></label
	>
	<label for="priority"
		>Priority
		<select name="priority" id="priority">
			<option value="0">None</option>
			<option value="1">Low</option>
			<option value="2">Medium</option>
			<option value="3">High</option>
			<option value="4">Urgent</option>
		</select></label
	>
	<label for="dueDate">Due Date<input type="date" name="dueDate" id="dueDate" /> </label>
	<button type="submit">Add Task</button>
</form>
