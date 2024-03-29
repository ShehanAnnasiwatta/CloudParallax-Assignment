<script lang="ts">
	import { goto } from '$app/navigation';

	export let totalPages: number;
	export let currentPage: number;

	const navigateTo = (i: number) => {
		goto(`/products/${i + 1}`);
	};
</script>

<div class="flex flex-row justify-center items-center gap-2 p-2">
	{#each Array(totalPages) as _, index}
		<button
			on:click={() => navigateTo(index)}
			class="{currentPage === index
				? 'text-emerald-300'
				: ' text-amber-100'} h-8 w-8 bg-slate-500 rounded-full shadow-md text-xl"
		>
			{index + 1}
		</button>
	{/each}
</div>
