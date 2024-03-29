<script lang="ts">
	import ListContainer from '$lib/ListContainer.svelte';
	import { page } from '$app/stores';
	import { getCategory } from '../../../utils/util.js';
	import PaginateFooter from '$lib/paginateFooter.svelte';

	export let data;
	$: ({ products, total } = data.products);

	console.log(products);
	console.log(data.products);
	let pageSize = 10;
	$: totalItems = total;
	$: totalPages = Math.ceil(totalItems / pageSize);
	$: currentPage = Number($page.params.page) - 1;

	const categoreies = getCategory();
	console.log(categoreies);
</script>

<ListContainer prodList={products} />
<PaginateFooter {totalPages} {currentPage} />
