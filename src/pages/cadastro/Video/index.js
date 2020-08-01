import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Page testss</h1>
            <Link to="/cadastro/categoria">
                Cadstrar cate
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;