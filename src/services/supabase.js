import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rryymecbtyrgohrvsfyf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyeXltZWNidHlyZ29ocnZzZnlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczNDI4MDEsImV4cCI6MjA0MjkxODgwMX0.bgkoO0ULZoI5-WV45MUkrdeZM5LhP3jVoR5FRutm-8g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
