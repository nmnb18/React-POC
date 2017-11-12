import React, { Component } from 'react';

import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';

class ProductList extends Component {


    render() {
        const tableRow = [];
        let lastCategory = null;


        this.props.productList.forEach((product) => {
            if(this.props.searchString && product.name.indexOf(this.props.searchString) === -1) {
                return;
            }
            if(product.category !== lastCategory) {
                tableRow.push(
                    <ProductCategoryRow key={product.category.toString()} category={product.category}></ProductCategoryRow>
                )
            }

            tableRow.push(
                <ProductRow key={product.name.toString()} productObj={product}></ProductRow>
            )

            lastCategory = product.category;
        });


        //this.setState({tableRow: tableRow});
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRow}
                </tbody>
            </table> 
        );
    }
}

export default ProductList;