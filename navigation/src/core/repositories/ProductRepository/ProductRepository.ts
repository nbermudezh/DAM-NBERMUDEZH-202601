import SQLite from "react-native-sqlite-storage";

import { Product } from "../../entities";

SQLite.enablePromise(true);

const ProductRepository = {

  create: async (
    product: Product
  ): Promise<number> => {

    const db =
      await SQLite.openDatabase({
        name: "navigation.db",
        location: "default",
      });

    const query = `
      INSERT INTO products (
        nombre,
        codigo,
        cantidadStock,
        costoCompra,
        precioVenta,
        descripcion
      )
      VALUES (?, ?, ?, ?, ?, ?);
    `;

    const [result] =
      await db.executeSql(
        query,
        [
          product.nombre,
          product.codigo,
          product.cantidadStock,
          product.costoCompra,
          product.precioVenta,
          product.descripcion,
        ]
      );

    return result.insertId;

  },

  findAll: async (): Promise<Product[]> => {

    const db =
      await SQLite.openDatabase({
        name: "navigation.db",
        location: "default",
      });

    const query = `
      SELECT *
      FROM products;
    `;

    const [result] =
      await db.executeSql(query);

    const products: Product[] = [];

    for (
      let i = 0;
      i < result.rows.length;
      i++
    ) {

      products.push(
        result.rows.item(i)
      );

    }

    return products;

  },

};

export default ProductRepository;