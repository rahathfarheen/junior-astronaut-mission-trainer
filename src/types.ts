export type MissionId = 'launch' | 'orbit' | 'spacewalk' | 'rover' | 'quiz';
export interface Mission { id: MissionId; title: string; subtitle: string; icon: string; duration: string; xp: number; color: string; }
export interface ProgressState { name: string; xp: number; completed: MissionId[]; badges: string[]; highContrast: boolean; reducedMotion: boolean; muted: boolean; }
export interface Apod { title: string; explanation: string; url: string; date: string; }
export interface RoverPhoto { img_src: string; earth_date: string; rover: { name: string }; camera: { full_name: string }; }
