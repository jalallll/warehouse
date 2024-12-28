import { redirect } from "next/navigation";
import { supabase } from "../utils/supabase/client";

export async function signupAdmin(formData: any) {
    // Step 1: Create a new user
    const { companyName, email, password } = formData;
    const { data, error } = await supabase.auth.signUp({ email, password });
    const user = data.user;
    if (error) throw error;
    redirect("/");
}
