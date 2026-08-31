import { error } from '@sveltejs/kit';
import { tasks } from '../fakedata.js';

export function load({ params }) {
	const taskId = parseInt(params.id, 10);

	const task = tasks.find((t) => t.id === taskId);
	if (!task) {
		error(404);
	}
	return { task: task };
}
