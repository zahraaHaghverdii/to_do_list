// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export function getTodayStart() {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0); // ابتدای روز، ساعت 00:00:00.000
  return today.toISOString();
}

export function getTodayEnd() {
  const today = new Date();
  today.setUTCHours(23, 59, 59, 999); // انتهای روز، ساعت 23:59:59.999
  return today.toISOString();
}
