import { PUBLIC_API_URL, PUBLIC_BASE_URL } from "$env/static/public";
import axios from "axios";
import type { Competition, CompetitionScorers, CompetitionStandings } from "src/types/types";
import { writable } from "svelte/store";
import { loadingState } from "./globalLoadingState";

export const competition = writable<Competition>(undefined);
export const competitionStandings = writable<CompetitionStandings>(undefined);
export const competitionScorers = writable<CompetitionScorers>(undefined);

export const getCompetition = async (id: string) => {
    loadingState.set(true);
    const res = await axios.get<Competition>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/competitions/${id}`
        },
        method: "GET",
        responseType: "json",
    })

    loadingState.set(false);
    return res.data;
}

export const getCompetitionStandings = async (code: string) => {
    loadingState.set(true);
    const res = await axios.get<CompetitionStandings>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/competitions/${code}/standings`
        },
        method: "GET",
        responseType: "json",
    });

    loadingState.set(false);
    return res.data;
};

export const getCompetitionScorers = async (code: string) => {
    loadingState.set(true);
    const res = await axios.get<CompetitionScorers>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/competitions/${code}/scorers`
        },
        method: "GET",
        responseType: "json",
    });

    loadingState.set(false);
    return res.data;
};