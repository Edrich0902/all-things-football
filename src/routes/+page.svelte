<script lang='ts'>
    import MatchContainer from '../components/matchContainer.svelte';
    import { liveMatches } from '../stores/liveMatchStore';
</script>

<svelte:head>
    <title>All Things Football</title>
</svelte:head>
<div>
    <MatchContainer prop={{title: "Live", matches: $liveMatches}} />
    <MatchContainer prop={{title: "Upcoming", matches: []}} />
    <MatchContainer prop={{title: "Finished", matches: []}} />
</div>