//npm install --save jwt-decode

import jwtDecode from "jwt-decode";

export function perfil() {
    let resp = '';
    try {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token");
            const payload = jwtDecode(token);
            resp = payload.rol
        }
    } catch (error) {
        console.log(error);
    }

    return resp;
}