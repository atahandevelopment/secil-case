import api from "../../../instance";

export const GetProducts = async (category: string | undefined, limit: number | undefined) => {
    const queryPage = limit || 30;
    let url = `/products/category/${category}?limit=${queryPage}`;
    if (!category) url = `/products?limit=${queryPage}`;
    return await api.get(url);
}