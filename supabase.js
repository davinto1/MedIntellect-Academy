const SUPABASE_URL = "https://ynmpwroouwwfppnrcaum.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_sMNMqVELt0gbdSzid6u3-Q_3nOp2QDO";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
