import { getTeam, getTeamMatches } from "../../../stores/team/singleTeamStore";

export const load = async (data: { params: { slug: string; }; }) => {
    return {
        matches: await getTeamMatches(data.params.slug),
        team: await getTeam(data.params.slug)
    };
}