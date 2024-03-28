<script lang="ts">
	import ShoppingCart from '~icons/mdi/shopping-cart';
	import ReviewStar from '~icons/mdi/star';
	import FavIcon from '~icons/mdi/heart-outline';
	// let prodList: any[] = [];
	// const getProducts = async () => {
	// 	const res = await fetch('https://dummyjson.com/products');
	// 	const products = (await res.json()).products;
	// 	console.log(products);
	// 	prodList = products.map((prod: any) => {
	// 		return prod;
	// 	});
	// };

	// getProducts();

	export let prodList:any[] 
</script>

<div class="h-full w-full py-10">
	<div
		class="h-full w-9/12 m-auto bg-slate-200 p-10 rounded-lg grid grid-cols-3 gap-y-2 place-items-center"
	>
		{#each prodList as p}
			<div class="h-220 w-350 p-5 bg-white m-4 md: w-80 rounded-xl shadow-md" style="height: 94%;">
				<div class="relative h-56 w-full">
					<img
						src={p.thumbnail}
						alt="proudct thumbnail"
						class="h-56 w-full z-20 absolute hover:z-0"
					/>

					<button
						class="absolute bg-sky-500 z-10 text-amber-50 p-1 rounded-lg hover:bg-sky-700"
						style="top: 50%; left: 50%; transform:translate(-50%, -50%)"
					>
						View Product
					</button>

					<div
						class="absolute right-3 top-3 h-7 w-7 rounded-full flex justify-center items-center bg-white z-10"
					>
						<FavIcon />
					</div>
				</div>

				<div class="p-5 flex flex-col gap-y-1.5">
					<div class="w-60 h-16">
						<h2 class="text-lg">{p.title}</h2>
					</div>

					<!-- <p>{p.description}</p> -->
					<div
						class="flex flex-row justify-center items-center w-16 h-7 p-1 rounded-lg bg-amber-300 mb-2"
					>
						<p class="flex-grow font-semibold text-yellow-50">{p.rating}</p>
						<ReviewStar class="text-yellow-50" />
					</div>

					<div class="h-10 relative flex justify-center items-center">
						<p class="absolute left-0 text-2xl font-semibold">${p.price}</p>
						<div
							class="absolute right-0 h-10 w-10 rounded-full bg-zinc-400 flex justify-center items-center hover:bg-slate-500"
						>
							<ShoppingCart class="text-lg text-yellow-50" />
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
