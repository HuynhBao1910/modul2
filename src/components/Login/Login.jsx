import React, { useState } from "react";
import "./Login.scss";
import { auth } from "../../firebase/firebase.utils";

function Login({ onLogin, onRegister }) {
    const [state, setState] = useState({
        email: "",
        password: "",
        error: "",
    });

    const handlers = {
        handleInputChange: (e) => {
            const { name, value } = e.target;
            setState({ ...state, [name]: value });
        },
        handleLoginSubmit: async (e) => {
            e.preventDefault();
            try {
                await auth.signInWithEmailAndPassword(state.email, state.password);
                onLogin();
            } catch (error) {
                setState({ ...state, error: error.message });
            }
        },
        handleRegisterSubmit: async (e) => {
            e.preventDefault();
            try {
                await auth.createUserWithEmailAndPassword(state.email, state.password);
                onRegister();
            } catch (error) {
                setState({ ...state, error: error.message });
            }
        },
    };

    return (
        <div className="login">
            <div className="login__form-container">
                <h2>Đăng nhập</h2>
                <form onSubmit={handlers.handleLoginSubmit}>
                    <div className="login__form-control">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={state.email}
                            onChange={handlers.handleInputChange}
                        />
                    </div>
                    <div className="login__form-control">
                        <label>Mật khẩu:</label>
                        <input
                            type="password"
                            name="password"
                            value={state.password}
                            onChange={handlers.handleInputChange}
                        />
                    </div>
                    {state.error && <div className="login__error">{state.error}</div>}
                    <button className="login__button" type="submit">
                        Đăng nhập
                    </button>
                </form>
            </div>
            <div className="login__form-container">
                <h2>Đăng ký</h2>
                <form onSubmit={handlers.handleRegisterSubmit}>
                    <div className="login__form-control">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={state.email}
                            onChange={handlers.handleInputChange}
                        />
                    </div>
                    <div className="login__form-control">
                        <label>Mật khẩu:</label>
                        <input
                            type="password"
                            name="password"
                            value={state.password}
                            onChange={handlers.handleInputChange}
                        />
                    </div>
                    {state.error && <div className="login__error">{state.error}</div>}
                    <button className="login__button" type="submit">
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
