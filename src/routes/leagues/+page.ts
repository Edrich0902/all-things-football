import { loadCompetitions } from "../../stores/competition/competitionStore";

export const load = async () => {
    return {
        competitions: await loadCompetitions(),
    };
}