import { PUBLIC_BASE_URL, PUBLIC_API_URL } from '$env/static/public';
import axios from 'axios';
import { MatchStatus, type HttpResponse, type Match } from '../types/types';
import { writable } from 'svelte/store';

export const upcomingMatches = writable<Match[]>([]);

const loadUpcomingMatches = async () => {
    const res = await axios.get<HttpResponse<Match>>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/matches/?status=${MatchStatus.SCHEDULED}`
        },
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        responseType: 'json',
    });

    upcomingMatches.set(res.data.matches);
};

loadUpcomingMatches();