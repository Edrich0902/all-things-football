<script lang="ts">
	import {
		getCompetition,
		competition,
		competitionStandings,
		getCompetitionStandings,
		competitionScorers,
		getCompetitionScorers
	} from '../../../stores/singleCompetitionStore';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { Spinner } from 'flowbite-svelte';
	import CompetitionDetail from '../../../components/competitionDetail.svelte';
	import CompetitionStandings from '../../../components/competitionStandings.svelte';
	import CompetitionTopScorers from '../../../components/competitionTopScorers.svelte';
	import { loadingState } from '../../../stores/globalLoadingState';
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
	<div class="flex items-center justify-center">
		<Spinner />
	</div>
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
