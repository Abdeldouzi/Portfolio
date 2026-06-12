const SEARCH_BOT_PATTERN =
  /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|applebot|facebookexternalhit|twitterbot|linkedinbot|semrushbot|ahrefsbot|petalbot|bytespider/i;

export function isSearchBot(userAgent: string | undefined): boolean {
  if (!userAgent) return false;
  return SEARCH_BOT_PATTERN.test(userAgent);
}
