import React, { useState } from 'react';

import { Container } from './styles';

import Logo from '../../assets/Logo.svg';

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
        </Container>
    );
}

export default Home;
