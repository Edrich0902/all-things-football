import { getPlayer, getPlayerMatches } from "../../../stores/player/singlePlayerStore";

export const load = async (data: { params: { slug: string; }; }) => {
    return {
        player: await getPlayer(data.params.slug),
        matches: await getPlayerMatches(data.params.slug)
    };
}