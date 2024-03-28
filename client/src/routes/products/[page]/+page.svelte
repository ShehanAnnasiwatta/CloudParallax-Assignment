<script lang="ts">
	import ListContainer from '$lib/ListContainer.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data;
	$: ({ products, total } = data.products)

	console.log(products);
	console.log(data.products);
	let pageSize = 10;
	$: totalItems = total;
	$: totalPages = Math.ceil(totalItems / pageSize);
	$: currentPage = Number($page.params.page) - 1;

	const navigateTo = (i: number) => {
		goto(`/products/${i + 1}`);
	};
</script>

<ListContainer prodList={products} />

{#each Array(totalPages) as _, index}
	<button on:click={() => navigateTo(index)}>
		{index + 1}
	</button>
{/each}
