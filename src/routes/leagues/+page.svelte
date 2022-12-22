<script lang='ts'>
	import League from "../../components/league.svelte";


</script>

<svelte:head>
    <title>All Things Football - Leagues</title>
</svelte:head>

<div class="leagues-grid gap-x-2 gap-y-2 justify-center">
    <League />
    <League />
    <League />
    <League />
    <League />
    <League />
    <League />
    <League />
</div>

<style>
    .leagues-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
    }
</style>