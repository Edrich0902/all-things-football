<script lang='ts'>
	import { Spinner } from "flowbite-svelte";
	import Competition from "../../components/competition.svelte";
    import { competitions } from "../../stores/competitionStore";
</script>

<svelte:head>
    <title>All Things Football - Leagues</title>
</svelte:head>

{#if $competitions?.length > 0}
    <div class="leagues-grid gap-x-4 gap-y-4 justify-center">
        {#each $competitions as competition}
            <Competition competition={competition} />
        {/each}
    </div>
{:else if $competitions?.length === 0}
    <span>No Leagues</span>
{:else}
    <div class="flex items-center justify-center">
        <Spinner></Spinner>
    </div>
{/if}

<style>
    .leagues-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
    }
</style>