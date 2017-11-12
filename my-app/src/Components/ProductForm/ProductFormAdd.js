import React, {Component} from 'react';

class ProductFormAdd extends Component {
    render() {
        return (
            <form novalidate>
                <div className="form-group">
                    <label>Category</label>
                    <select>
                        <option value="Sporting Goods">Sporting Goods</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>InStock</label>
                    <input type="radio" value="true" />Yes
                    <input type="radio" value="false" />No
                </div>
                <div className="action-button">
                    <button type="button">Save</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        );
    }
}

export default ProductFormAdd;