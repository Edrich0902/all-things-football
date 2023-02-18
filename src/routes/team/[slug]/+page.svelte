<script lang='ts'>
	import TeamDetail from "../../../components/team/teamDetail.svelte";
	import TeamSquad from "../../../components/team/teamSquad.svelte";
	import { loadingState } from "../../../stores/globalLoadingState";
	import GlobalSpinner from "../../../views/spinner/globalSpinner.svelte";
	import TeamMatches from "../../../components/team/teamMatches.svelte";
    import { teamDetail, teamMatches } from "../../../stores/team/singleTeamStore";
</script>

<div>
    {#if $loadingState}
        <GlobalSpinner />
    {:else}
        <TeamDetail team={$teamDetail} />
        <TeamSquad team={$teamDetail} />
        <TeamMatches teamMatches={$teamMatches} />
    {/if}
</div>