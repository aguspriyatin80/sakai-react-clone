import http from "../http-common";
export class ProductService {

    getProducts() {
        return http.get('/data').then(res => res.data);
    }
    getProduct(id) {
        return http.get(`/data/${id}`).then(res => res.data);
    }
    deleteProduct(id) {
        return http.delete(`/data/${id}`).then(res => console.log(res))
    }
    createProduct(data) {
        return http.post("/data", data);
    };
    updateProduct(id, data) {
        return http.put(`/data/${id}`, data);
    };
    deleteProductsByIds(ids) {

        ids.forEach(d => {
            if (this.getProduct(d)) {
                this.deleteProduct(d)
            }
        })
        this.getProducts()
    }
}



