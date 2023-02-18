<script lang="ts">
	import { Badge, Img, P, Span, Spinner, Tooltip } from 'flowbite-svelte';
	import { loadingState } from '../../stores/globalLoadingState';
	import type { Player } from 'src/types/types';
	import { flagString } from '../../utils/flagHelper';
	import { getAgeFromDate } from '../../utils/dateFormatter';

	export let player: Player;
	let containerClass: string = `
        dark:bg-gray-700
        bg-gray-50
        p-4
        rounded-lg
        mb-2
    `;
</script>

<div class={containerClass}>
	{#if $loadingState}
		<div class="flex items-center justify-center">
			<Spinner />
		</div>
	{:else if player}
		<div class="flex items-center justify-between">
            <div class="flex">
                <img src={player.currentTeam?.crest} alt="" class="h-20 w-20 mr-2" />
                <div class="flex flex-col">
                    <div class="flex mb-2">
                        <Badge rounded color="blue" class="w-8 h-8 mr-2">{player.shirtNumber}</Badge>
                        <P opacity={1} space="wide" size="xl">{player.name}</P>
                    </div>
                    <P opacity={1} space="wide" size="sm">{player.position}</P>
                    <P opacity={1} space="wide" size="xs">Age: {getAgeFromDate(player.dateOfBirth)}</P>
                    <!-- TODO: get player age in years -->
                </div>
            </div>
            <div class="self-start">
				<Img
					crossorigin="anonymous"
					src={flagString(player.nationality)}
					alt={player.nationality}
					class="h-6 w-10"
					id="flag"
				/>
				<Tooltip triggeredBy="[id^='flag']">{player.nationality}</Tooltip>
            </div>
		</div>
	{/if}
</div>
