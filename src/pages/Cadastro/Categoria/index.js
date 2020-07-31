import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = function () {
    const initialValues = {
        'name': '',
        'description': '',
        'color': '#000000'
    }
    const [ values, setValues ] = useState(initialValues)
    const [ categories, setCategories ] = useState([])

    const setValue = function(key, value) {
        setValues(
            {
                ...values,
                [key]: value
            }
        );
    };

    const handleChange = function(changeEvent) {
        const { value, name } = changeEvent.target;
        setValue(name, value);
    };

    const handleSubmit = function(submitEvent) {
        submitEvent.preventDefault();
        setCategories(
            [
                ...categories,
                values
            ]
        );

        setValues(initialValues);
    };

    useEffect(() => {
        const url = 'http://localhost:8080/categorias';
        
        fetch(url)
        .then(async (resposta) => {
            const conteudo = await resposta.json();
            setCategories([
                ...conteudo,
            ]);
        });
    },
    []);

    return (
        <DefaultPage>
            <h1>Cadastro de Categoria</h1>
        
            <form onSubmit={handleSubmit}>
                <FormField
                    label="Nome"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                />
                  
                <FormField
                    label="Cor"
                    type="color"
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                />
                  
                <Button>
                    Cadastrar
                </Button>
            </form>

            <h2>Categorias existentes</h2>
            
            <ul>
                {
                    categories.map((category, index) => {
                        return (
                            <li key={`${category}.${index}`}>
                                {category.name}
                            </li>
                        );
                    })
                }
            </ul>
            
            <Link to="/">
                Ir para a home
            </Link>
        </DefaultPage>
    );
};

export default CadastroCategoria;