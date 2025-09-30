import { queryOptions } from "@tanstack/react-query";



export async function getProdcut(id: string) {
    const product = await fetch(`https://dummyjson.com/products/${id}`).then(res => res.json());
    return product;
}

export default function getProductOption(id: string) {
    return queryOptions({
        queryKey: ["product", id],
        queryFn: () => getProdcut(id as string),
        enabled: !!id
    })
};



