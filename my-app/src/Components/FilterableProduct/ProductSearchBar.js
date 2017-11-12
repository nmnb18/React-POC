import React, { Component } from 'react';

class ProductSearchBar extends Component {
    constructor(props) {
        super(props);
        this.searchProduct = this.searchProduct.bind(this);
        this.state = {
            searchInput: ''
        }
    }

    searchProduct(event) {
        //this.setState({searchInput: event.target.value});
        this.props.searchCallbackFromParent(event.target.value);

    }

    render() {
        return (
            <div>
                Search: <input type="text"  onChange={this.searchProduct} placeholder="Search..." />
            </div>    
        );
    }
}

export default ProductSearchBar;