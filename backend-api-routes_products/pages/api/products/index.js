import { getAllProducts } from "../../../services/productServices";
const prodcuts = getAllProducts();
export default function handler(request, response) {
  response.status(200).json(prodcuts);
}
