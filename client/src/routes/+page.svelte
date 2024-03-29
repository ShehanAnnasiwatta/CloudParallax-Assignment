<script lang="ts">
	import { goto } from '$app/navigation';

	const navigateTo = () => {
		goto('/products');
	};
</script>

<div class="container w-full h-screen bg-slate-400 flex justify-center items-center">
	<div
		class="w-1/2 h-1/2 bg-slate-100 flex flex-col justify-center items-center gap-3 shadow-md rounded-lg"
	>
		<h1 class="text-6xl text-red-600 font-semibold">Welcome to Product Store</h1>
		<button class="text-xl text-amber-50 p-1 rounded-lg bg-sky-500 hover:bg-sky-700" on:click={navigateTo}>
			View Store
		</button>
	</div>
</div>
