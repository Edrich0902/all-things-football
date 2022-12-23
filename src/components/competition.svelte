<script lang='ts'>
	import type { Competition } from "src/types/types";
    export let competition: Competition;
</script>

<a href={`/competition/${competition.id}`}>
    <div class="flex
        items-center
        bg-gray-100
        dark:bg-gray-700
        dark:hover:bg-gray-600
        hover:bg-gray-200
        rounded-lg
        shadow-lg
        cursor-pointer">
        <img src={competition.emblem} alt='' class="h-8 w-8 m-3">
        <span>{competition.name}</span>
    </div>
</a>