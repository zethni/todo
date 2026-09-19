export default interface Task {
	id: number;
	title: string;
	effort: number;
	priority: number;
	dueDate: Date;
	description?: string;
	completed: boolean;
}
