<script lang="ts">
	import { Spinner, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
	import type { CompetitionScorers } from "src/types/types";
    export let data: CompetitionScorers;
    export let style: string = '';
</script>

{#if data?.scorers}
    <div class={`${style} dark:bg-gray-700 bg-gray-50 p-4 rounded-lg mb-2`}>
        <span class="text-lg font-semibold">Top Scorers</span>
        <Table striped={true}>
            <TableHead>
                <TableHeadCell>Pos</TableHeadCell>
                <TableHeadCell>Team</TableHeadCell>
                <TableHeadCell>Player</TableHeadCell>
                <TableHeadCell>Goals</TableHeadCell>
            </TableHead>
            <TableBody class="divide-y">
                {#each data.scorers as scorer, i (scorer)}
                    <TableBodyRow>
                        <TableBodyCell>{i + 1}</TableBodyCell>
                        <TableBodyCell>
                            <img src={scorer.team.crest} alt="" class="h-6 w-6">
                        </TableBodyCell>
                        <TableBodyCell>{scorer.player.name}</TableBodyCell>
                        <TableBodyCell>{scorer.goals}</TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
    </div>
{:else}
    <div class="self-start text-center mx-auto">
        <Spinner></Spinner>
    </div>
{/if}