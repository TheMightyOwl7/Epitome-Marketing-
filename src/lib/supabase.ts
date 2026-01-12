import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type for contact form submissions
export type ContactSubmission = {
    name: string
    email: string
    company?: string
    phone?: string
    service_interest?: string
    message: string
    budget_range?: string
}