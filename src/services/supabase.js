
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://byfdnktpgjogkjtqtipd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZmRua3RwZ2pvZ2tqdHF0aXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2NzA5NzAsImV4cCI6MjAxMzI0Njk3MH0.ZHluDkIovDZ4-T1iFK9t6ILrGEH4XumKYAK8ZrcSiRQ"
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;