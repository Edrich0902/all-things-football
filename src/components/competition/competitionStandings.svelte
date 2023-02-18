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
	import GlobalSpinner from '../../views/spinner/globalSpinner.svelte';
	import { loadingState } from '../../stores/globalLoadingState';
	import { CompetitionType, type CompetitionScorers, type CompetitionStandings } from '../../types/types';

	//Props
	export let data: CompetitionStandings;
	export let style: string = '';
    export let type: string = CompetitionType.LEAGUE;

	let componentStyle: string = `
        dark:bg-gray-700
        bg-gray-50
        p-4
        rounded-lg
    `;

    const groupFormatter = (group: string): string => group?.split("_").join(" ") ?? "";
</script>

{#if $loadingState}
    <GlobalSpinner />
{:else if data?.standings}
    <div class={`${style} ${componentStyle}`}>
        <span class="text-lg font-semibold">Standings</span>
        <div>
            {#if type == CompetitionType.CUP}
                {#each data?.standings as group (group)}
                    <div class="p-4">
                        <span class="text-base font-medium mt-3 mb-3">{groupFormatter(group.group)}</span>
                        <Table striped={true}>
                            <TableHead>
                                <TableHeadCell>Pos</TableHeadCell>
                                <TableHeadCell>Team</TableHeadCell>
                                <TableHeadCell>Played</TableHeadCell>
                                <TableHeadCell>Won</TableHeadCell>
                                <TableHeadCell>Lost</TableHeadCell>
                                <TableHeadCell>GS</TableHeadCell>
                                <TableHeadCell>GA</TableHeadCell>
                                <TableHeadCell>GD</TableHeadCell>
                                <TableHeadCell>Pts</TableHeadCell>
                            </TableHead>
                            <TableBody class="divide-y">
                                {#each group.table as position (position)}
                                    <TableBodyRow>
                                        <TableBodyCell>{position.position}</TableBodyCell>
                                        <TableBodyCell>
                                            <span class="flex">
                                                <img src={position.team.crest} alt="" class="h-6 w-6 mr-2">
                                                <span>{position.team.name}</span>
                                            </span>
                                        </TableBodyCell>
                                        <TableBodyCell>{position.playedGames}</TableBodyCell>
                                        <TableBodyCell>{position.won}</TableBodyCell>
                                        <TableBodyCell>{position.lost}</TableBodyCell>
                                        <TableBodyCell>{position.goalsFor}</TableBodyCell>
                                        <TableBodyCell>{position.goalsAgainst}</TableBodyCell>
                                        <TableBodyCell>{position.goalDifference}</TableBodyCell>
                                        <TableBodyCell>{position.points}</TableBodyCell>
                                    </TableBodyRow>
                                {/each}
                            </TableBody>
                        </Table>
                    </div>
                {/each}
            {:else}
                <Table striped={true}>
                    <TableHead>
                        <TableHeadCell>Pos</TableHeadCell>
                        <TableHeadCell>Team</TableHeadCell>
                        <TableHeadCell>Played</TableHeadCell>
                        <TableHeadCell>Won</TableHeadCell>
                        <TableHeadCell>Lost</TableHeadCell>
                        <TableHeadCell>GS</TableHeadCell>
                        <TableHeadCell>GA</TableHeadCell>
                        <TableHeadCell>GD</TableHeadCell>
                        <TableHeadCell>Pts</TableHeadCell>
                    </TableHead>
                    <TableBody class="divide-y">
                        {#each data?.standings[0].table as position (position)}
                            <TableBodyRow>
                                <TableBodyCell>{position.position}</TableBodyCell>
                                <TableBodyCell>
                                    <span class="flex">
                                        <img src={position.team.crest} alt="" class="h-6 w-6 mr-2">
                                        <span>{position.team.name}</span>
                                    </span>
                                </TableBodyCell>
                                <TableBodyCell>{position.playedGames}</TableBodyCell>
                                <TableBodyCell>{position.won}</TableBodyCell>
                                <TableBodyCell>{position.lost}</TableBodyCell>
                                <TableBodyCell>{position.goalsFor}</TableBodyCell>
                                <TableBodyCell>{position.goalsAgainst}</TableBodyCell>
                                <TableBodyCell>{position.goalDifference}</TableBodyCell>
                                <TableBodyCell>{position.points}</TableBodyCell>
                            </TableBodyRow>
                        {/each}
                    </TableBody>
                </Table>
            {/if}
        </div>
    </div>
{/if}

