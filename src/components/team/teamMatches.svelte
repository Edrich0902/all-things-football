<script lang="ts">
	import { loadingState } from "../../stores/globalLoadingState";
	import type { TeamMatches } from "../../types/types";
	import GlobalSpinner from "../../views/spinner/globalSpinner.svelte";
	import Match from "../match/match.svelte";

    export let teamMatches: TeamMatches;
    let containerClass: string = `
        dark:bg-gray-700
        bg-gray-50
        p-4
        rounded-lg
        mb-2
    `;
</script>

<div class={containerClass}>
    {#if $loadingState || !teamMatches}
        <GlobalSpinner />
    {:else if teamMatches}
        <div>
            <span class="text-lg font-semibold">Season Matches</span>
            <div>
                {#each teamMatches.matches as match (match)}
                    <Match prop={match} />
                {/each}
            </div>
        </div>
    {/if}
</div>