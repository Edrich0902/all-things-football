<script lang='ts'>
	import TeamDetail from "../../../components/team/teamDetail.svelte";
	import TeamSquad from "../../../components/team/teamSquad.svelte";
	import { loadingState } from "../../../stores/globalLoadingState";
	import GlobalSpinner from "../../../views/spinner/globalSpinner.svelte";
	import type { Team, TeamMatches as TeamMatchesType } from "../../../types/types";
	import TeamMatches from "../../../components/team/teamMatches.svelte";

    export let data: {team: Team, matches: TeamMatchesType};
</script>

<div>
    {#if $loadingState}
        <GlobalSpinner />
    {:else}
        <TeamDetail team={data.team} />
        <TeamSquad team={data.team} />
        <TeamMatches teamMatches={data.matches} />
    {/if}
</div>