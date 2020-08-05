import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';



const CadastroCategoria = function () {
    const initialValues = {
        'name': '',
        'description': '',
        'color': '#000000'
    }
    const [ categories, setCategories ] = useState([])
    const { values, handleChange, clearForm } = useForm(initialValues);

    const handleSubmit = function(submitEvent) {
        submitEvent.preventDefault();
        setCategories(
            [
                ...categories,
                values
            ]
        );

        clearForm(initialValues);
    };

    const defineUrl = () => {
        if (window.location.hostname.includes('localhost')) {
            return 'http://localhost:8080/categorias';
        } 
        else {
            return 'https://raflix-react.herokuapp.com/categorias';
        }
    };

    useEffect(() => {
        const URL = defineUrl();
        
        fetch(URL)
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