<script lang="ts">
	import {
		getCompetition,
		competition,
		competitionStandings,
		getCompetitionStandings,
		competitionScorers,
		getCompetitionScorers
	} from '../../../stores/competition/singleCompetitionStore';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import CompetitionDetail from '../../../components/competition/competitionDetail.svelte';
	import CompetitionStandings from '../../../components/competition/competitionStandings.svelte';
	import CompetitionTopScorers from '../../../components/competition/competitionTopScorers.svelte';
	import { loadingState } from '../../../stores/globalLoadingState';
	import GlobalSpinner from '../../../views/spinner/globalSpinner.svelte';
	onMount(async () => {
		competition.set(await getCompetition($page.params.slug));
		competitionStandings.set(await getCompetitionStandings($competition?.code ?? ''));
		competitionScorers.set(await getCompetitionScorers($competition?.code ?? ''));
	});
</script>

<svelte:head>
	<title>All Things Football - League</title>
</svelte:head>

{#if $loadingState}
	<GlobalSpinner />
{:else if $competition}
	<CompetitionDetail competition={$competition} />
	<div class="sm:block xl:flex justify-between items-center">
		<CompetitionStandings
			data={$competitionStandings}
			type={$competition.type}
			style="xl:w-3/5 sm:w-full mb-4 xl:mr-4"
		/>
        <CompetitionTopScorers
            data={$competitionScorers}
            style="xl:w-2/5 xl:self-start sm:w-full"
        />
	</div>
{/if}
