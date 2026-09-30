import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.auth.getUser();
	const session = data;
	console.log({ session });
	if (!session) {
		return { user: null };
	} else {
		return { user: session.user };
	}
}
