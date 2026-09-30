import { supabase } from '$lib/supabaseClient';
export async function load() {
	const { data, error } = await supabase.from('instruments').select();
	if (error) {
		console.error('Error loading instruments:', error.message);
		return { instruments: [], error: error.message };
	}
	console.log({ data });
	return {
		instruments: data ?? [],
		error: null
	};
}
