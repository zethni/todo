import { error } from '@sveltejs/kit';
import { todos } from '../../fakedata.js';

export function load({ params }) {
	const taskId = parseInt(params.id, 10);

	const task = todos.find((t) => t.id === taskId);
	if (!task) {
		error(404);
	}
	return { task: task };
}
