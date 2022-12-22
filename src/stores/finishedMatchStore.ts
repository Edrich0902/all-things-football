import { PUBLIC_API_URL, PUBLIC_BASE_URL } from "$env/static/public";
import axios from "axios";
import { MatchStatus, type HttpMatchResponse, type Match } from "../types/types";
import { writable } from "svelte/store";

export const finishedMatches = writable<Match[]>(undefined);

const loadFinishedMatches = async () => {
    const res = await axios.get<HttpMatchResponse<Match>>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/matches/?status=${MatchStatus.FINISHED}`
        },
        headers: {

        },
        method: 'GET',
        responseType: 'json',
    });

    finishedMatches.set(res.data.matches);
};

loadFinishedMatches();