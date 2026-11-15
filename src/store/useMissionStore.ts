import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { MissionId, ProgressState } from '../types';
interface MissionStore extends ProgressState { completeMission: (id: MissionId, xp: number) => void; setName: (name: string) => void; toggle: (key: 'highContrast' | 'reducedMotion' | 'muted') => void; }
export const useMissionStore = create<MissionStore>()(persist((set) => ({ name: 'Alex', xp: 0, completed: [], badges: [], highContrast: false, reducedMotion: false, muted: true, completeMission: (id, xp) => set((state) => state.completed.includes(id) ? state : { xp: state.xp + xp, completed: [...state.completed, id], badges: [...state.badges, id] }), setName: (name) => set({ name }), toggle: (key) => set((state) => ({ [key]: !state[key] })) }), { name: 'junior-astronaut-progress' }));
