<script>
</script>

<h1>Add Task</h1>
<form method="POST">
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
			<option value="none">None</option>
			<option value="small">Small</option>
			<option value="medium">Medium</option>
			<option value="large">Large</option>
			<option value="extra-large">Extra Large</option>
		</select></label
	>
	<label for="priority"
		>Priority
		<select name="priority" id="priority">
			<option value="none">None</option>
			<option value="low">Low</option>
			<option value="medium">Medium</option>
			<option value="high">High</option>
			<option value="urgent">Urgent</option>
		</select></label
	>
	<label for="dueDate">Due Date<input type="date" name="dueDate" id="dueDate" /> </label>
	<button type="submit">Add Task</button>
</form>
