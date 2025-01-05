"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function signupAdmin(formData: any) {
    const supabase = await createClient();
    // Step 1: Create a new user
    const { email, password } = formData;
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
        redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
}
