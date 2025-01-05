"use server";

import { createClient } from "../utils/supabase/client";

export const getUser = async () => {
    const supabase = createClient();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();
    if (error) {
        return null;
    }

    return user;
};
