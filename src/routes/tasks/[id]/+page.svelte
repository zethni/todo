<script>
	let { data } = $props();
</script>

<h1>{data.task.title}</h1>
<p>{data.task.notes}</p>
<p>Effort: {data.task.effort}</p>
<p>Priority: {data.task.priority}</p>
<p>Due Date: {data.task.dueDate}</p>
