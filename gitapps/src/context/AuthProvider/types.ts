export interface Iuser { //Interface para tipar o usuário
    email?: string;
    token?: string;
}

export interface IContext extends Iuser {
    authenticate: (user: string, password: string) => Promise<void>; //Método para logar o usuário
    logout: () => void; // Método para deslogar o usuário
}

export interface IAuthProvider {
    children: React.ReactElement;
}

export interface ILogin {
    user?: string;
    password?: string;
}