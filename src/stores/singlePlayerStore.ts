import { PUBLIC_API_URL, PUBLIC_BASE_URL } from "$env/static/public";
import axios from "axios";
import type { Player, PlayerMatches } from "src/types/types";
import { writable } from "svelte/store";

export const playerDetail = writable<Player>(undefined);
export const playerMatches = writable<PlayerMatches>(undefined);

export const getPlayer = async (id: string) => {
    const res = await axios.get<Player>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/persons/${id}`
        },
        method: "GET",
        responseType: "json",
    });

    return res.data;
};

export const getPlayerMatches = async (id: string) => {
    const res = await axios.get<PlayerMatches>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/persons/${id}/matches`
        },
        method: "GET",
        responseType: "json",
    });

    return res.data;
}