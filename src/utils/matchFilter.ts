import type { Match, MatchStatus } from "../types/types";

export const filterMatchByStatus = (status: MatchStatus[], matches: Match[]): Match[] => {
    return matches.filter(match => status.includes(match.status));
}