import { PUBLIC_BASE_URL, PUBLIC_API_URL } from '$env/static/public';
import axios from 'axios';
import { MatchStatus, type HttpMatchResponse, type Match } from '../../types/types';
import { writable } from 'svelte/store';
import { loadingState } from '../globalLoadingState';

export const liveMatches = writable<Match[]>(undefined);

const loadLiveMatches = async () => {
    loadingState.set(true);
    const res = await axios.get<HttpMatchResponse<Match>>(PUBLIC_API_URL, {
        params: {
            url: `${PUBLIC_BASE_URL}/matches/?status=${MatchStatus.IN_PLAY}`
        },
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        responseType: 'json',
    });

    loadingState.set(false);
    liveMatches.set(res.data.matches);
}

loadLiveMatches();