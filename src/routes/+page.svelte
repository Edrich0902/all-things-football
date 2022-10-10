<script lang='ts'>
    import MatchContainer from '../components/matchContainer.svelte';
</script>

<svelte:head>
    <title>All Things Football</title>
</svelte:head>
<div>
    <MatchContainer prop={{title: "Live", matches: []}} />
    <MatchContainer prop={{title: "Upcoming", matches: []}} />
    <MatchContainer prop={{title: "Finished", matches: []}} />
</div>