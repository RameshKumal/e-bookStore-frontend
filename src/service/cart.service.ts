import { CartModel, GetCart } from "../models/CartModel";
import request from "./request";

class CartService {
 ENDPOINT = "api/cart";

 public async add(data: CartModel): Promise<CartModel> {
  const url = `${this.ENDPOINT}/Add`;
  return request
   .post<CartModel>("https://localhost:44311/cart/Add", data)
   .then((res) => {
    return res.data;
   })
   .catch((e) => {
    return Promise.reject(e.response);
   });
 }

 public async getList(id: number): Promise<GetCart> {
  const url = `${this.ENDPOINT}/List?UserId=${id}`;
  return request.get<GetCart>(url).then((res) => {
   return res.data;
  });
 }

 public async updateItem(data: CartModel): Promise<CartModel> {
    const url = `${this.ENDPOINT}/Update`;
    return request
     .put<CartModel>(url, data)
     .then((res) => {
      return res.data;
     })
     .catch((e) => {
      return Promise.reject(e);
     });
   }

 public async removeItem(id: number): Promise<CartModel> {
  const url = `${this.ENDPOINT}?id=${id}`;
  return request
   .delete<CartModel>(url)
   .then((res) => {
    return res.data;
   })
   .catch((e) => {
    return e;
   });
 }


}

export default new CartService();
