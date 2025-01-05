"use server";

import { createClient } from "../utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout() {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    console.log("\n\nSignout\n\n");

    if (error) {
        redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/login");
}
