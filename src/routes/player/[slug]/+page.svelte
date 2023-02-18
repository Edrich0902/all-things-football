<script lang="ts">
	import PlayerDetail from "../../../components/player/playerDetail.svelte";
	import PlayerMatches from "../../../components/player/playerMatches.svelte";
	import { loadingState } from "../../../stores/globalLoadingState";
    import { playerDetail, playerMatches } from "../../../stores/player/singlePlayerStore";
	import { Spinner } from "flowbite-svelte";
</script>

<svelte:head>
    <title>All Things Football - Player</title>
</svelte:head>

{#if $loadingState}
    <div class="flex items-center justify-center">
        <Spinner />
    </div>
{:else}
    <div>
        <PlayerDetail player={$playerDetail} />
        <PlayerMatches data={$playerMatches} />
    </div>
{/if}