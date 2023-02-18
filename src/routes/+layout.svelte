<script lang='ts'>
	import '../app.postcss';
	import Nav from '../components/nav/nav.svelte';
</script>

<!-- Global navbar -->
<Nav />
<!-- Website content will render below -->
<div class="p-4">
	<slot />
</div>