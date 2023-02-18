import { PUBLIC_API_URL, PUBLIC_BASE_URL } from "$env/static/public";
import axios from "axios";
import type { Competition, HttpCompetitionResponse } from "src/types/types";
import { writable } from "svelte/store";
import { loadingState } from "../globalLoadingState";

export const competitions = writable<Competition[]>(undefined);

const loadCompetitions = async () => {
    loadingState.set(true);
    const res = await axios.get<HttpCompetitionResponse<Competition>>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/competitions`
        },
        method: "GET",
        responseType: "json",
    });

    loadingState.set(false);
    competitions.set(res.data.competitions);
};

loadCompetitions();