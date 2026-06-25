const cloudflareAnalyticsToken = "991c3d20a3614b06b1b28ff9192a6bb3";

if (cloudflareAnalyticsToken) {
  const beacon = document.createElement("script");
  beacon.defer = true;
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.setAttribute("data-cf-beacon", JSON.stringify({ token: cloudflareAnalyticsToken }));
  document.body.appendChild(beacon);
}
