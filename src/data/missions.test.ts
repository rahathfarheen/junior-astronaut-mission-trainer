import { describe, expect, it } from 'vitest';
import { missions, nextRankXp, progressPercent, rankForXp } from './missions';

describe('mission progression', () => {
  it('defines five playable training missions', () => { expect(missions).toHaveLength(5); expect(new Set(missions.map((mission) => mission.id)).size).toBe(5); });
  it.each([[0, 'Cadet'], [199, 'Cadet'], [200, 'Pilot'], [499, 'Pilot'], [500, 'Commander']])('maps %i XP to %s', (xp, rank) => { expect(rankForXp(xp)).toBe(rank); });
  it('calculates rank progress and the next threshold', () => { expect(progressPercent(100)).toBe(50); expect(progressPercent(350)).toBe(50); expect(nextRankXp(100)).toBe(200); expect(nextRankXp(350)).toBe(500); expect(progressPercent(500)).toBe(100); });
});
