<script lang="ts">
	import GlobalSpinner from "../../views/spinner/globalSpinner.svelte";
    import { loadingState } from "../../stores/globalLoadingState";
	import type { Team } from "src/types/types";
	import { Img, P, Tooltip } from "flowbite-svelte";
	import { flagString } from "../../utils/flagHelper";
	import { encodeMapsUrl } from "../../utils/urlEncoder";

    export let team: Team;
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
        <GlobalSpinner />
    {:else if team}
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <img src={team.crest} alt="" class="h-20 w-20 mr-2" />
                <div class="flex flex-col justify-center">
                    <P opacity={0} space="wide" size="lg">{team.name}</P>
                    <P opacity={0} space="wide" size="sm">{team?.venue}</P>
                    <P opacity={50} space="wide" size="xs">Est. {team.founded}</P>
                    <P opacity={100} weight="extralight" space="wide" size="xs" class="hover:text-blue-400">
                        <a href={encodeMapsUrl(team.address)} target="_blank">{team.address}</a>
                    </P>
                    <P opacity={100} weight="extralight" space="wide" size="xs" class="hover:text-blue-400">
                        <a href={team.website} target="_blank">{team.website}</a>
                    </P>
                </div>
            </div>
            <div class="self-start">
				<Img
					crossorigin="anonymous"
					src={team.area?.code ? flagString(team.area.code) : ""}
					alt={team.area?.name}
					class="h-6 w-10"
					id="flag"
				/>
				<Tooltip triggeredBy="[id^='flag']">{team.area?.name}</Tooltip>
            </div>
        </div>
    {/if}
</div>