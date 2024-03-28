export async function load({ params, fetch }) {
    const page = Number(params.page)

    async function getProducts(page: number) {
        const limit = 10
        console.log(page)
        const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`)
        const data = await res.json()
        return data
    }

    const products = await getProducts(page)

    return {
        products
    };
}