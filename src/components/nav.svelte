<script lang="ts">
	import {
		Button,
		DarkMode,
		Input,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';
    import { page } from '$app/stores';

	var btnClass: string =
		`text-gray-500
        dark:text-gray-400 
        hover:bg-gray-100 
        dark:hover:bg-gray-700 
        focus:outline-none 
        focus:ring-4 
        focus:ring-gray-200 
        dark:focus:ring-gray-700 
        rounded-lg 
        text-sm 
        p-2.5 
        z-50`;

</script>

<div>
	<Navbar let:hidden let:toggle rounded color="form">
		<NavBrand href="/">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				class="mr-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				All Things Football
			</span>
		</NavBrand>
		<div class="flex md:order-2">
            <DarkMode {btnClass} />
            <NavHamburger on:click={toggle} />
		</div>
		<NavUl {hidden}>
			<NavLi href="/" active={$page.routeId === ''}>Home</NavLi>
			<NavLi href="/leagues" active={$page.routeId === 'leagues'}>Leagues</NavLi>
			<NavLi href="/teams" active={$page.routeId === 'teams'}>Teams</NavLi>
		</NavUl>
	</Navbar>
</div>