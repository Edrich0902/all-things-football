<script lang='ts'>
	import type { MatchContainer } from "src/types/propTypes";
    import { Spinner } from 'flowbite-svelte';
	import Match from "./match.svelte";
	import { loadingState } from "../../stores/globalLoadingState";
	import GlobalSpinner from "../../views/spinner/globalSpinner.svelte";
    export let prop: MatchContainer;
</script>


<div class='matchContainer bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mt-8 mb-8 shadow-lg flex flex-col items-center'>
    <span class='text-lg font-medium mb-2'>{prop.title}</span>
    <div class="matches-wrapper w-full flex flex-col justify-center items-center">
        {#if $loadingState}
            <GlobalSpinner />
        {:else if prop?.matches?.length > 0}
            {#each prop.matches as match}
                <Match prop={match} />
            {/each}
        {:else if prop?.matches?.length === 0}
            <span>No Matches</span>
        {/if}
    </div>
</div>