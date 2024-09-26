import Login from "../Login/Login";
import Home from "../Home/home";

function parseJWT(token) {
    try {
        const base64URL = token.split('.')[1];
        if (!base64URL) {
            throw new Error('El token JWT no tiene las tres partes separadas por puntos.');
        }
        const base64 = base64URL.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error al decodificar el JWT:', error);
        return null;
    }
}

let tokenExistAndValid = (parseJWT(localStorage.getItem('token')).exp * 1000 > Date.now());

const Main = ()=>{
    return (
        <>{tokenExistAndValid ? <Home />: <Login /> }</>
    )
}

export default Main;