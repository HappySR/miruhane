import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    return redirect(302, "/sign-in");
  }

  return {
    user: locals.user,
    session: locals.session!,
  };
};
