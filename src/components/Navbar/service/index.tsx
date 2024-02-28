import api from "../../../instance";

export const GetAllCategories = async () => {
    return await api.get('/products/categories')
}