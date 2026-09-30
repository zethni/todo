import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.auth.getSession();
	const session = data.session;
	console.log({ session });
	if (!session) {
		return { user: null };
	} else {
		return { user: session.user };
	}
}
