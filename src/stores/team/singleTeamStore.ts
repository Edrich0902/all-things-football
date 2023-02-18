import { PUBLIC_API_URL, PUBLIC_BASE_URL } from "$env/static/public";
import axios from "axios";
import type { Team, TeamMatches } from "../../types/types";
import { getCurrentSeasonYear } from "../../utils/dateFormatter";
import { writable } from "svelte/store";
import { loadingState } from "../globalLoadingState";

export const teamDetail = writable<Team>(undefined);
export const teamMatches = writable<TeamMatches>(undefined);

export const getTeam = async (id: string) => {
    loadingState.set(true);
    const res = await axios.get<Team>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/teams/${id}`,
        },
        method: "GET",
        responseType: "json",
    });

    loadingState.set(false);
    teamDetail.set(res.data);
    return res.data;
};

export const getTeamMatches = async (id: string, season: string = getCurrentSeasonYear()) => {
    loadingState.set(true);
    const res = await axios.get<TeamMatches>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/teams/${id}/matches?season=${season}`,
        },
        method: "GET",
        responseType: "json",
    });

    loadingState.set(false);
    teamMatches.set(res.data);
    return res.data;
};