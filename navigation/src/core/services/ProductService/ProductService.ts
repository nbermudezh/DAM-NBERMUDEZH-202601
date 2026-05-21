import { Product } from "../../entities";

import {
  ProductRepository,
} from "../../repositories";

const ProductService = {

  create: async (
    product: Product
  ): Promise<Product> => {

    const id =
      await ProductRepository.create(
        product
      );

    return {
      ...product,
      id,
    };

  },

  getAll: async ():
  Promise<Product[]> => {

    return await ProductRepository.findAll();

  },

};

export default ProductService;