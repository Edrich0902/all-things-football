<script lang='ts'>
	import { Badge } from "flowbite-svelte";
	import { getPrettyDate } from "../../utils/dateFormatter";
    import { MatchStatus, type Match } from "../../types/types";
    export let prop: Match;

    const formatStatus = (match: Match): string => {
        if (match.status == MatchStatus.IN_PLAY) return 'In play';
        if (match.status == MatchStatus.FINISHED) return 'Fulltime';
        if (match.status == MatchStatus.PAUSED) return 'Halftime';
        return '';
    }

    const hasScore = (status: string): boolean => {
        if (status == MatchStatus.IN_PLAY) return true;
        if (status == MatchStatus.PAUSED) return true;
        if (status == MatchStatus.FINISHED) return true;
        return false;
    }

    const statusNotStarted = (status: string): boolean => {
        if (status == MatchStatus.SCHEDULED) return true;
        if (status == MatchStatus.TIMED) return true;
        return false;
    }
</script>

<div class='mt-2 mb-2 bg-gray-200 dark:bg-gray-500 p-2 rounded-lg shadow-xs w-full'>
    <div class='flex flex-row justify-center text-green-400'>
        {#if formatStatus(prop).length}
            <Badge color="green" rounded class="px-2.5 py-0.5">
                {formatStatus(prop)}
            </Badge>
        {/if}
    </div>
    <div class='grid grid-cols-3 mt-1 mb-1'>
        <div class='flex flex-row justify-start items-center'>
            <a href={`/team/${prop.homeTeam.id}`} class="hover:text-blue-400 flex items-center">
                <img
                    class='w-8 h-8 rounded-full mr-4'
                    src={prop.homeTeam.crest}
                    alt='Team Logo'/>
                <span>{prop.homeTeam.name}</span>
            </a>
        </div>

        <div class='flex flex-row items-center justify-center'>
            {#if hasScore(prop.status)}
                {prop.score.fullTime.home} - {prop.score.fullTime.away}
            {:else}
                vs
            {/if}
        </div>

        <div class='flex flex-row justify-end items-center'>
            <a href={`/team/${prop.awayTeam.id}`} class="hover:text-blue-400 flex items-center">
                <span>{prop.awayTeam.name}</span>
                <img
                    class='w-8 h-8 rounded-full ml-4'
                    src={prop.awayTeam.crest}
                    alt='Team Logo'/>
            </a>
        </div>
    </div>
    <div class='flex flex-row justify-center dark:text-gray-700'>
        {prop?.competition.name ?? ''}
    </div>
    {#if statusNotStarted(prop.status)}
        <div class='flex flex-row justify-center dark:text-gray-700'>
            {prop?.utcDate ? getPrettyDate(prop?.utcDate) : ''}
        </div>
    {/if}
</div>
