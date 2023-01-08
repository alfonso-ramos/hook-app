import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const {formState, onResetForm, onInputChange, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
    })

    // const {username, email, password} = formState


    return (
        <>
            <h1>Formulario con CustomHook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="emai"
                className="form-control mt-2"
                placeholder="ejemplo123@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button
                className="btn btn-primary"
                onClick={onResetForm}
            >Borrar
            </button>
            {
                (username === "string2") && <Message />
            }
        </>
    )
}

