import React, { Component } from 'react';
import axios from 'axios';

import ProductList from './ProductList.js';
import ProductSearchBar from './ProductSearchBar.js';
import Constants from '../../Constants/Constants.js';



class FilterableProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            searchString: ''
        }
    }

    searchCallback = (searchData) => {
        this.setState({searchQueryString: searchData})
    }

    componentDidMount() {
        axios.get(Constants.serviceUrls.default + Constants.serviceUrls.getCategories)
        .then(res => {
            this.setState({productList: res.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <ProductSearchBar searchCallbackFromParent={this.searchCallback}></ProductSearchBar>
                <ProductList productList={this.state.productList} searchString={this.state.searchQueryString}></ProductList>
            </div>    
        );
    }
}

export default FilterableProduct;