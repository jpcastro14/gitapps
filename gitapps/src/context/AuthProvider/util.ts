import { Api } from "../../services/api"
import { Iuser } from "./types";

export async function LoginRequest(email: string, password: string) {

    try {
        const request = await Api.post('login', { email, password })
        return request.data;
    } catch (error) {
        return null
    }
}

export function setUserLocalStorage(user: Iuser | null) {
    localStorage.setItem('U', JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem('U')
    if (!json) {
        return null
    }
    const user = JSON.parse(json);
    return user ?? null;
}