import axios from 'axios';
import React, { useRef } from 'react'
import { useHistory } from "react-router-dom";

function Login() {
    let history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin(e) {
        e.preventDefault();
        const { data: usuario } = await axios.get(`http://localhost:4000/usuarios?email=${emailRef.current.value}&password=${passwordRef.current.value}`)

        console.log(`http://localhost:4000/usuarios?email=${emailRef.current.value}&password=${passwordRef.current.value}`)
        if (usuario.length > 0) history.push("/pacientes")

        console.log("usuario encontrado", usuario)

    }

    return (
        <form onSubmit={handleLogin}>
            <fieldset>
                <legend>Login</legend>
                <input type="email" ref={emailRef} />
                <input type="password" ref={passwordRef} />
                <input type="submit" />
            </fieldset>
        </form>
    )
}

export default Login