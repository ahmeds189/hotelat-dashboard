import { createClient } from '@supabase/supabase-js'

// safe to expose
const supabaseUrl = 'https://uubkvxparkmzphabnmzm.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1Ymt2eHBhcmttenBoYWJubXptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNDQ1MzcsImV4cCI6MjAwNTkyMDUzN30.NAep1_jP2IeHZ6ehmcx4AtUh-Qjr4mvZRznvg4usDo8'

export const supabase = createClient(supabaseUrl, supabaseKey)
