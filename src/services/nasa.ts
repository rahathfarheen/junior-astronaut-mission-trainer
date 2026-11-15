import type { Apod, RoverPhoto } from '../types';
const cache = <T,>(key: string, fallback: T): T => { try { const saved = localStorage.getItem(`nasa:${key}`); return saved ? JSON.parse(saved) as T : fallback; } catch { return fallback; } };
const save = <T,>(key: string, value: T) => { try { localStorage.setItem(`nasa:${key}`, JSON.stringify(value)); } catch { /* storage may be unavailable */ } };
export async function getApod(): Promise<Apod> {
  const fallback = cache<Apod>('apod', { title: 'The Pale Blue Dot', explanation: 'From far away, Earth appears as a tiny point of light. Every astronaut mission helps us learn how to care for our home planet.', url: 'https://images-assets.nasa.gov/image/PIA00452/PIA00452~orig.jpg', date: '1990-02-14' });
  try { const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'); if (!response.ok) throw new Error('NASA API unavailable'); const data = await response.json() as Apod; save('apod', data); return data; } catch { return fallback; }
}
export async function getMarsPhoto(): Promise<RoverPhoto | null> {
  const fallback = cache<RoverPhoto | null>('mars', null);
  try { const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'); if (!response.ok) throw new Error('NASA API unavailable'); const data = await response.json() as { photos: RoverPhoto[] }; const photo = data.photos[0] ?? fallback; if (photo) save('mars', photo); return photo; } catch { return fallback; }
}
export async function getNearEarthCount(): Promise<number> {
  try { const response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY'); if (!response.ok) throw new Error('NASA API unavailable'); const data = await response.json() as { element_count: number }; return data.element_count; } catch { return 23; }
}
export async function getIssPosition(): Promise<{ latitude: number; longitude: number }> {
  try { const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544'); if (!response.ok) throw new Error('ISS API unavailable'); const data = await response.json() as { latitude: number; longitude: number }; return data; } catch { return { latitude: 0, longitude: 0 }; }
}
