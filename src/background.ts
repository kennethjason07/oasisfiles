import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = 'https://ksjtradbrxveppxtjsqy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzanRyYWRicnh2ZXBweHRqc3F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTc2ODUsImV4cCI6MjAzMjQ5MzY4NX0.1zJyYVXzEYbWGWLrkVa9CSENkJX2LZaE1DzP-Rbb6Ak'; // Replace with your actual Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'LOGIN_WITH_GOOGLE') {
    // Open a new tab with the login page URL
    chrome.tabs.create({ url: 'login.html' });
  }
});
