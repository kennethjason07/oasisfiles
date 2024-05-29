import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = 'https://ksjtradbrxveppxtjsqy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzanRyYWRicnh2ZXBweHRqc3F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTc2ODUsImV4cCI6MjAzMjQ5MzY4NX0.1zJyYVXzEYbWGWLrkVa9CSENkJX2LZaE1DzP-Rbb6Ak';
const supabase = createClient(supabaseUrl, supabaseKey);

async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    console.error('Error signing in:', error);
  }
}

signInWithGoogle();
