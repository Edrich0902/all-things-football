import { PUBLIC_BASE_URL, PUBLIC_API_URL } from '$env/static/public';
import axios from 'axios';
import { MatchStatus, type HttpResponse, type Match } from '../types/types';
import { writable } from 'svelte/store';

export const liveMatches = writable<Match[]>([])

const loadLiveMatches = async () => {
    const res = await axios.get<HttpResponse<Match>>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/matches/?status=${MatchStatus.FINISHED}`
        },
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        responseType: 'json',
    });

    liveMatches.set(res.data.matches);
}

loadLiveMatches();