<script lang='ts'>
    import MatchContainer from '../components/matchContainer.svelte';
    import { liveMatches } from '../stores/liveMatchStore';
    import { finishedMatches } from '../stores/finishedMatchStore';
    import { upcomingMatches } from '../stores/upcomingMatchStore';
</script>

<svelte:head>
    <title>All Things Football</title>
</svelte:head>
<div>
    <MatchContainer prop={{title: "Live", matches: $liveMatches}} />
    <MatchContainer prop={{title: "Upcoming", matches: $upcomingMatches}} />
    <MatchContainer prop={{title: "Finished", matches: $finishedMatches}} />
</div>