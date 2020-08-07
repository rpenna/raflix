import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';

const CadastroVideo = function () {
    const history = useHistory();
    const initialData = {
        titulo: 'O que é React JS? #HipstersPontoTube',
        url: 'https://www.youtube.com/watch?v=6IuQUgeDPg0',
        categoria: 'Front End'
    };
    const { handleChange, values } = useForm(initialData);
    const [ categories, setCategories ] = useState([]);
    const categoryTitles = categories.map((category) => {
        return category.name;
    })

    useEffect(() => {
        categoriesRepository.getCategories()
        .then((response) => {
            setCategories(response.map(
                (category) => {
                    return {
                        id: category.id,
                        name: category.name
                    };
                })
            );
        });
    },
    []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const choosenCategory = categories.find((category) => {
            return category.name === values.categoria;
        });
        
        //TODO: check if category typed exists
        videosRepository.sendVideo({
            titulo: values.titulo,
            url: values.url,
            categoriaId: choosenCategory.id
        })
        .then(() => {
            history.push('/');
        });

    };

    return (
        <DefaultPage>
            <h1>Cadastro de Vídeo</h1>
            
            <form onSubmit={handleSubmit}>

                <FormField
                    label="Título"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL do vídeo"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />

                <Button type="submit">
                    Cadastrar
                </Button>

            </form>
            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </DefaultPage>
    );
};

export default CadastroVideo;