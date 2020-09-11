import React, { useState } from 'react';

import { Container } from './styles';

import Logo from '../../assets/Logo.svg';

import redondinho from '../../assets/Redondinho.svg';

import Vector from '../../assets/Vector.svg';

function Home() {
    const [valorInput, setValorInput] = useState('');

    function btn(event) {
        event.preventDefault();

        console.log(valorInput);
    }

    return (
        <Container>
            <img src={Logo} alt="logo" />
            <h2>Explore repositórios no Github.</h2>

            <form onSubmit={btn}>
                <input
                    type="text"
                    value={valorInput}
                    placeholder="Digite seu repositorio aqui"
                    onChange={(digitando) =>
                        setValorInput(digitando.target.value)
                    }
                />
                <button type="submit">Pesquisar</button>
            </form>

            <div className="card">
                <img
                    className="redondinho"
                    src={redondinho}
                    alt="foto de alguem"
                />

                <div className="texto">
                    <h3>tiagoluchtenberg/repo</h3>
                    <span>Descrição do repo</span>
                </div>

                <img className="seta" src={Vector} alt="seta" />
            </div>
        </Container>
    );
}

export default Home;
