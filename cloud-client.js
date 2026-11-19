import { CLOUD_CONFIG } from './supabase-config.js';

export const configured =
  /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(CLOUD_CONFIG.url) &&
  !CLOUD_CONFIG.url.includes('YOUR-PROJECT') &&
  CLOUD_CONFIG.publishableKey.length > 15 &&
  CLOUD_CONFIG.publishableKey !== 'YOUR_SUPABASE_PUBLISHABLE_KEY' &&
  /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i.test(CLOUD_CONFIG.ownerUid) &&
  CLOUD_CONFIG.ownerUid !== '00000000-0000-0000-0000-000000000000';

let memo;
export async function getCloudClient() {
  if (!configured) return null;
  if (!memo) {
    memo = import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm')
      .then(({ createClient }) => createClient(CLOUD_CONFIG.url, CLOUD_CONFIG.publishableKey, {
        auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true }
      }));
  }
  return memo;
}
