import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
        alert("Enviando os dados:" + username + " - " + password);

    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input type="email" placeholder="Digite seu e-mail" required
                        onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Digite sua senha" required
                        onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" /> Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>
                        Não tem uma conta? <a href="#">Registrar</a>
                    </p>
                </div>

            </form>
        </div>
    )
}

export default Login
