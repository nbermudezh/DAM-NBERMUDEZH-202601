import { User } from "../../entities";

import {
  UserRepository,
  AuthRepository,
} from "../../repositories";

const AuthService = {

  register: async (
    user: User
  ): Promise<User> => {

    const userExist =
      await UserRepository.findByUsername(
        user.usuario
      );

    if (userExist) {

      throw new Error(
        "El usuario ya existe"
      );

    }

    const id =
      await UserRepository.create(user);

    const newUser = {
      ...user,
      id,
    };

    return newUser;

  },

  login: async (
    usuario: string
  ): Promise<User> => {

    const user =
      await UserRepository.findByUsername(
        usuario
      );

    if (!user) {

      throw new Error(
        "Usuario no encontrado"
      );

    }

    await AuthRepository.save(user);

    return user;

  },

  getSession: async ():
  Promise<User | null> => {

    return await AuthRepository.get();

  },

  logout: async ():
  Promise<void> => {

    await AuthRepository.delete();

  },

};

export default AuthService;