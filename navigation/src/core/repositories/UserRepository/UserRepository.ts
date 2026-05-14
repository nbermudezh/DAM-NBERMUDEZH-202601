import SQLite from "react-native-sqlite-storage";

import { User } from "../../entities";

SQLite.enablePromise(true);

const UserRepository = {

  create: async (
    user: User
  ): Promise<number> => {

    const db =
      await SQLite.openDatabase({
        name: "navigation.db",
        location: "default",
      });

    const query = `
      INSERT INTO users (
        nombre,
        usuario,
        correo,
        fechaNacimiento,
        contrasena
      )
      VALUES (?, ?, ?, ?, ?);
    `;

    const [result] =
      await db.executeSql(
        query,
        [
          user.nombre,
          user.usuario,
          user.correo,
          user.fechaNacimiento,
          user.contrasena,
        ]
      );

    return result.insertId;

  },

  findByUsername: async (
    username: string
  ): Promise<User | null> => {

    const db =
      await SQLite.openDatabase({
        name: "navigation.db",
        location: "default",
      });

    const query = `
      SELECT *
      FROM users
      WHERE usuario = ?
      LIMIT 1;
    `;

    const [result] =
      await db.executeSql(
        query,
        [username]
      );

    if (result.rows.length > 0) {

      return result.rows.item(0);

    }

    return null;

  },

  update: async (
    id: number,
    user: User
  ): Promise<void> => {

    const db =
      await SQLite.openDatabase({
        name: "navigation.db",
        location: "default",
      });

    const query = `
      UPDATE users
      SET
        nombre = ?,
        usuario = ?,
        correo = ?,
        fechaNacimiento = ?,
        contrasena = ?
      WHERE id = ?;
    `;

    await db.executeSql(
      query,
      [
        user.nombre,
        user.usuario,
        user.correo,
        user.fechaNacimiento,
        user.contrasena,
        id,
      ]
    );

  },

  delete: async (
    id: number
  ): Promise<void> => {

    const db =
      await SQLite.openDatabase({
        name: "navigation.db",
        location: "default",
      });

    const query = `
      DELETE FROM users
      WHERE id = ?;
    `;

    await db.executeSql(
      query,
      [id]
    );

  },

};

export default UserRepository;