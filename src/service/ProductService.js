import http from "../http-common";
export class ProductService {

    getProducts() {
        return http.get('/products').then(res => res.data);
    }
    // getProduct(id) {
    //     return http.get(`/products/${id}`).then(res => res.data);
    // }
    deleteProduct(id) {
        return http.delete(`/products/${id}`).then(res => console.log(res))
    }
    createProduct(data) {
        return http.post("/products", data);
    };
    updateProduct(id, data) {
        return http.put(`/products/${id}`, data);
    };
    deleteProductsByIds(ids) {
        ids.forEach(d => {

            // this.deleteProduct(ids)
            http.delete(`/products/${ids}`).then(res => console.log(res))

        });


    }

}



