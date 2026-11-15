import type { Mission } from '../types';
export const missions: Mission[] = [
  { id: 'launch', title: 'Launch Sequence', subtitle: 'Every mission starts with a checklist.', icon: '🚀', duration: '5 min', xp: 120, color: 'coral' },
  { id: 'orbit', title: 'Orbit Mechanics', subtitle: 'Find the perfect path around Earth.', icon: '🪐', duration: '6 min', xp: 150, color: 'violet' },
  { id: 'spacewalk', title: 'Spacewalk Training', subtitle: 'Master motion in microgravity.', icon: '🧑‍🚀', duration: '4 min', xp: 100, color: 'cyan' },
  { id: 'rover', title: 'Mars Rover Navigation', subtitle: 'Plot a safe course across Mars.', icon: '🔴', duration: '5 min', xp: 130, color: 'orange' },
  { id: 'quiz', title: 'Mission Control Quiz', subtitle: 'Show us what you know, cadet.', icon: '🎯', duration: '3 min', xp: 110, color: 'pink' },
];
export const rankForXp = (xp: number) => xp >= 500 ? 'Commander' : xp >= 200 ? 'Pilot' : 'Cadet';
export const nextRankXp = (xp: number) => xp >= 500 ? 500 : xp >= 200 ? 500 : 200;
export const progressPercent = (xp: number) => xp >= 500 ? 100 : Math.round(((xp >= 200 ? xp - 200 : xp) / (xp >= 200 ? 300 : 200)) * 100);
