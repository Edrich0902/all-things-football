<script lang="ts">
	import { P, Spinner, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
	import { MatchWinner, type Match, type PlayerMatches, type Team } from "../types/types";

    export let data: PlayerMatches;
    let containerClass: string = `
        dark:bg-gray-700
        bg-gray-50
        p-4
        rounded-lg
        mb-2
    `

    const getWinner = (match: Match): Team => {
        if (match.score.winner === MatchWinner.HOME) return match.homeTeam;
        if (match.score.winner === MatchWinner.AWAY) return match.awayTeam;
        return {} as Team;
    }
</script>

<div class={containerClass}>
    {#if data}
        <P space="wide" opacity={1} size="base">Last {data.matches.length} Matches</P>
        <Table striped={true}>
            <TableHead>
                <TableHeadCell>Competition</TableHeadCell>
                <TableHeadCell>Matchday</TableHeadCell>
                <TableHeadCell>Home vs Away</TableHeadCell>
                <TableHeadCell>Winner</TableHeadCell>
            </TableHead>
            <TableBody class="divide-y">
                {#each data.matches as match (match)}
                    <TableBodyRow>
                        <TableBodyCell>
                            <span class="flex mr-2">
                                <img src={match.competition.emblem} alt="" class="h-6 w-6 mr-2">
                                <span>{match.competition.name}</span>
                            </span>
                        </TableBodyCell>
                        <TableBodyCell>{match.matchday}</TableBodyCell>
                        <TableBodyCell>
                            <div class="flex">
                                <span class="flex mr-2">
                                    <img src={match.homeTeam.crest} alt="" class="h-6 w-6 mr-2">
                                    <span>{match.homeTeam.name}</span>
                                    <span class="ml-2">{match.score.fullTime.home}</span>
                                </span>
                                <span>-</span>
                                <span class="flex ml-2">
                                    <span class="mr-2">{match.score.fullTime.away}</span>
                                    <span>{match.awayTeam.name}</span>
                                    <img src={match.awayTeam.crest} alt="" class="h-6 w-6 ml-2">
                                </span>
                            </div>
                        </TableBodyCell>
                        <TableBodyCell>
                            {#if getWinner(match).name === undefined}
                                Draw
                            {:else}
                                <span class="flex">
                                    <img src={getWinner(match).crest} alt="" class="h-6 w-6 mr-2">
                                    <span>{getWinner(match).name}</span>
                                </span>
                            {/if}
                        </TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
    {:else}
        <div class="flex items-center justify-center">
            <Spinner></Spinner>
        </div>
    {/if}
</div>