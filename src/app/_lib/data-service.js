export async function getAllProducts() {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const products = await res.json();
        return { data: products, status: res.status };

    } catch (error) {
        return error;
    }

}
export async function getSingleProducts(id) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const product = await res.json();
        return { data: product, status: res.status };

    } catch (error) {
        return error;
    }

}