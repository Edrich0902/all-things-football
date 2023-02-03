<script lang="ts">
	import { getPlayer, getPlayerMatches, playerDetail, playerMatches } from "../../../stores/singlePlayerStore";
	import { onMount } from "svelte";
    import { page } from "$app/stores";
	import PlayerDetail from "../../../components/playerDetail.svelte";
	import PlayerMatches from "../../../components/playerMatches.svelte";
	import { loadingState } from "../../../stores/globalLoadingState";
	import { Spinner } from "flowbite-svelte";

    onMount(async () => {
        playerDetail.set(await getPlayer($page.params.slug));
        playerMatches.set(await getPlayerMatches($page.params.slug));
    });
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