<script lang="ts">
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
	import { loadingState } from "../../stores/globalLoadingState";
    import type { Team } from "../../types/types";
	import { getAgeFromDate } from "../../utils/dateFormatter";
	import GlobalSpinner from "../../views/spinner/globalSpinner.svelte";

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
    {#if $loadingState || !team}
        <GlobalSpinner />
    {:else if team}
        <div>
            <span class="text-lg font-semibold">Squad</span>
            <div>
                <Table striped={true} hoverable={true}>
                    <TableHead>
                        <TableHeadCell>Position</TableHeadCell>
                        <TableHeadCell>Name</TableHeadCell>
                        <TableHeadCell>Age</TableHeadCell>
                        <TableHeadCell>Nationality</TableHeadCell>
                    </TableHead>
                    <TableBody class="divide-y">
                        {#each team.squad as player (player)}
                            <TableBodyRow trClass="cursor-pointer">
                                <TableBodyCell>{player.position}</TableBodyCell>
                                <TableBodyCell>
                                    <a href={`/player/${player.id}`} class="hover:text-blue-400 flex items-center">
                                        {player.name}
                                    </a>
                                </TableBodyCell>
                                <TableBodyCell>{getAgeFromDate(player.dateOfBirth)}</TableBodyCell>
                                <TableBodyCell>{player.nationality}</TableBodyCell>
                            </TableBodyRow>
                        {/each}
                    </TableBody>
                </Table>
            </div>
        </div>
    {/if}
</div>