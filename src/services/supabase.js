import { createClient } from '@supabase/supabase-js'


//DB Pass: Wautq.sT3bq65gh

const SUPABASE_URL = 'https://jryqsvtfvthixvlthnkb.supabase.co'
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyeXFzdnRmdnRoaXh2bHRobmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTU0OTYsImV4cCI6MjA0NTUzMTQ5Nn0.lldP8VWUp-cPkF6Mko82Z4uxje9MTpbXgTAwuUKnbKo'

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)
export default supabase