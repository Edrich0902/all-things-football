import type { Match, MatchesResultSet } from "../../types/types";
import { writable } from "svelte/store";
import { loadingState } from "../globalLoadingState";
import axios from "axios";
import { PUBLIC_API_URL, PUBLIC_BASE_URL } from "$env/static/public";

export const matches = writable<Match[]>(undefined);

export const loadMatches = async () => {
    loadingState.set(true);
    const res = await axios.get<MatchesResultSet>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/matches`
        },
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        responseType: 'json',
    });

    loadingState.set(false);
    matches.set(res.data.matches);
    return res.data.matches;
}