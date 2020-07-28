import React from 'react';
import { Link } from 'react-router-dom';

import DefaultPage from '../../../components/DefaultPage';

const CadastroVideo = function () {
    return (
        <DefaultPage>
            <h1>Página de cadastro de vídeo</h1>
           
            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </DefaultPage>
    );
};

export default CadastroVideo;