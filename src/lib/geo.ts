// Approximate coordinates for cities we may have events in. Used to map a
// visitor's browser geolocation to the nearest covered city — no external
// reverse-geocoding service required.
const CITY_COORDS: Record<string, [number, number]> = {
  Toronto: [43.6532, -79.3832],
  "New York": [40.7128, -74.006],
  Miami: [25.7617, -80.1918],
  "Los Angeles": [34.0522, -118.2437],
  Chicago: [41.8781, -87.6298],
  Atlanta: [33.749, -84.388],
  Houston: [29.7604, -95.3698],
  Austin: [30.2672, -97.7431],
  "San Francisco": [37.7749, -122.4194],
  Seattle: [47.6062, -122.3321],
  Boston: [42.3601, -71.0589],
  "Washington, DC": [38.9072, -77.0369],
  Vancouver: [49.2827, -123.1207],
  Montreal: [45.5019, -73.5674],
  London: [51.5074, -0.1278],
};

// Haversine distance in kilometers.
function distanceKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/**
 * Given the visitor's coordinates and the list of cities we actually have
 * events in, return the closest one within `maxKm`, or null if none is near
 * enough (so we don't wrongly filter someone far from every covered city).
 */
export function nearestCity(
  lat: number,
  lng: number,
  availableCities: string[],
  maxKm = 160
): string | null {
  let best: { city: string; km: number } | null = null;
  for (const city of availableCities) {
    const coords = CITY_COORDS[city];
    if (!coords) continue;
    const km = distanceKm(lat, lng, coords[0], coords[1]);
    if (!best || km < best.km) best = { city, km };
  }
  return best && best.km <= maxKm ? best.city : null;
}
