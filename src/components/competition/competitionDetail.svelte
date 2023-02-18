<script lang="ts">
	import type { Competition } from "src/types/types";

    export let competition: Competition;

    let containerClass: string = `
        dark:bg-gray-700
        bg-gray-50
        p-4
        rounded-lg
        mb-2
    `

    const seasonDateFormat = (startDate: string, endDate: string) => `${startDate.split('-')[0]}/${endDate.split('-')[0]}`;
</script>

<div class={containerClass}>
    <div class="mb-4 flex items-center justify-between">
        <span class="text-sm font-light">{competition.area?.name}</span>
        <img src={competition.area?.flag} alt="Flag" class="h-8 w-8">
    </div>

    <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
            <img src={competition.emblem} alt="" class="h-16 w-16 mr-4">
            <span class="text-xl font-semibold">{competition.name}</span>
        </div>
        {#if competition.currentSeason}
            <span class="text-xl font-semibold">
                {seasonDateFormat(competition.currentSeason.startDate, competition.currentSeason.endDate)}
            </span>
        {/if}
    </div>
</div>