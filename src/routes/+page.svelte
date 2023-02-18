<script lang='ts'>
	import { MatchStatus } from '../types/types';
	import { filterMatchByStatus } from '../utils/matchFilter';
    import MatchContainer from '../components/match/matchContainer.svelte';
    import { matches } from '../stores/match/matchesStore';
	import { loadingState } from '../stores/globalLoadingState';
	import { Spinner } from 'flowbite-svelte';
</script>

<svelte:head>
    <title>All Things Football</title>
</svelte:head>
{#if $loadingState}
    <div class="flex items-center justify-center">
        <Spinner />
    </div>
{:else}
    <div>
        <MatchContainer prop={{title: "Live", matches: filterMatchByStatus([MatchStatus.IN_PLAY, MatchStatus.PAUSED], $matches)}} />
        <MatchContainer prop={{title: "Upcoming", matches: filterMatchByStatus([MatchStatus.TIMED, MatchStatus.SCHEDULED], $matches)}} />
        <MatchContainer prop={{title: "Finished", matches: filterMatchByStatus([MatchStatus.FINISHED], $matches)}} />
    </div>
{/if}