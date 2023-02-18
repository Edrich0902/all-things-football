<script lang="ts">
	import {
		Spinner,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { loadingState } from '../../stores/globalLoadingState';
	import type { CompetitionScorers } from 'src/types/types';
	export let data: CompetitionScorers;
	export let style: string = '';
</script>

{#if $loadingState}
	<div class="self-start text-center mx-auto">
		<Spinner />
	</div>
{:else if data?.scorers}
	<div class={`${style} dark:bg-gray-700 bg-gray-50 p-4 rounded-lg mb-2`}>
		<span class="text-lg font-semibold">Top Scorers</span>
		<Table striped={true} hoverable={true}>
			<TableHead>
				<TableHeadCell>Pos</TableHeadCell>
				<TableHeadCell>Team</TableHeadCell>
				<TableHeadCell>Player</TableHeadCell>
				<TableHeadCell>Goals</TableHeadCell>
			</TableHead>
			<TableBody class="divide-y">
				{#each data.scorers as scorer, i (scorer)}
					<TableBodyRow trClass="cursor-pointer">
						<TableBodyCell>{i + 1}</TableBodyCell>
						<TableBodyCell>
							<img src={scorer.team.crest} alt="" class="h-6 w-6" />
						</TableBodyCell>
						<TableBodyCell>
							<a href={`/player/${scorer.player.id}`} class="hover:text-blue-400">
								{scorer.player.name}
							</a>
						</TableBodyCell>
						<TableBodyCell>{scorer.goals}</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
{/if}
