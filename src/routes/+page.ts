import { loadMatches } from "../stores/match/matchesStore";

export const load = async () => {
    return {
        matches: await loadMatches(),
    };
}