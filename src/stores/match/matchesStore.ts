import type { HttpMatchResponse, Match } from "../../types/types";
import { writable } from "svelte/store";
import { loadingState } from "../globalLoadingState";
import axios from "axios";
import { PUBLIC_API_URL, PUBLIC_BASE_URL } from "$env/static/public";

export const matches = writable<Match[]>(undefined);

const loadMatches = async () => {
    loadingState.set(true);
    const res = await axios.get<HttpMatchResponse<Match>>(PUBLIC_API_URL, {
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
}

loadMatches();