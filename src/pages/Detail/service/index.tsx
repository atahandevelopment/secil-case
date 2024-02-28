import api from "../../../instance";

export const DetailService = async (id: string | undefined) => {
    return await api.get(`/products/${id}`);
}