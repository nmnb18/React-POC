import React, {Component} from 'react';

import ProductFormHeading from './ProductFormHeading.js';
import ProductFormAdd from './ProductFormAdd.js';

class ProductForm extends Component {
    render() {
        return (
            <div>
                <ProductFormHeading></ProductFormHeading>
                <ProductFormAdd></ProductFormAdd>
            </div>
        );
    }
}

export default ProductForm;