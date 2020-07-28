import React from 'react';
import { Link } from 'react-router-dom';

import DefaultPage from '../../../components/DefaultPage';

const CadastroCategoria = function () {
    return (
        <DefaultPage>
            <h1>Cadastro de Categoria</h1>
           
            <Link to="/">
                Ir para a home
            </Link>
        </DefaultPage>
    );
};

export default CadastroCategoria;