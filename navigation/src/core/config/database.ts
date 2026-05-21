import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);

export const DATABASE = {
  USER_KEY: "@user",
};

export const setupDatabase = async (): Promise<void> => {

  try {

    const db = await SQLite.openDatabase({
      name: "navigation.db",
      location: "default",
    });

    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        usuario TEXT,
        correo TEXT,
        fechaNacimiento TEXT,
        contrasena TEXT
      );
    `);

    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        codigo TEXT,
        cantidadStock TEXT,
        costoCompra TEXT,
        precioVenta TEXT,
        descripcion TEXT
      );
    `);

    console.log("Base de datos inicializada");

  } catch (error) {

    console.log(
      "Error configurando base de datos",
      error
    );

  }

};