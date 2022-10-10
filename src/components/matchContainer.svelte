<script lang='ts'>
	import type { MatchContainer } from "src/types/propTypes";
	import Match from "./match.svelte";
    export let prop: MatchContainer;
</script>


<div class='matchContainer bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mt-8 mb-8 shadow-lg flex flex-col items-center'>
    <span class='text-lg font-medium mb-2'>{prop.title}</span>
    <div class="matches-wrapper w-full flex flex-col justify-center items-center">
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
    </div>
</div>