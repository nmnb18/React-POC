import React, { Component } from 'react';

class ProductRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.productObj.name}</td>
                <td>{this.props.productObj.price}</td>
            </tr>  
        );
    }
}

export default ProductRow;