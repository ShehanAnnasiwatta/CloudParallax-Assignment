<script lang="ts">
	let prodList: any[] = [];
	const getProducts = async () => {
		const res = await fetch('https://dummyjson.com/products');
		const products = (await res.json()).products;
		console.log(products);
		prodList = products.map((prod: any) => {
			return prod;
		});
	};

	getProducts();
</script>

<div class="h-full w-full p-10">
	<div class="h-full w-11/12  bg-slate-400 p-10 rounded-lg grid grid-cols-3">
		{#each prodList as p}
			<div class="h-220 w-350 p-5 bg-white m-4 md:h-72 w-96">
				<h6>{p.title}</h6>
			</div>
		{/each}
	</div>
</div>
