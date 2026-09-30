import { supabase } from '$lib/supabaseClient';

export async function load() {
	console.log({ supabase });
	// const { data } = await supabase.auth.getUser();
	// const session = data;

	// if (!session) {
	// 	return { user: null };
	// } else {
	// 	return { user: session.user };
	// }
}
