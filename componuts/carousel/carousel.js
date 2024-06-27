import React, { Component } from 'react'
import { search_product, getproductdetails } from '../../redux/redux_call';
import axios from 'axios';
export default class carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null,
      category: 'iphone',
      name: null,
    }
  }

  close_active_1 = async () => {
    search_product(this.state.category).then(data => {
      console.log('redux return data:-', data);
    });
    getproductdetails().then(data => {
      if (data !== null && data.data !== null) {
        let product = data.data;
        this.setState({
          product: product,
        });
      }
    });

  }
  render() {
    const { product, category, name } = this.state;
    // console.log('productproductproductproduct:-', product);
    return (

      <>
        <div className='col-md-12'>
          <div className='container'>
            <div className='col-md-12'>
              {product != null && (
                <>
                  {product.map((item, index) => {
                    return (
                      <div key={index}>
                        <div >
                          <p>{item.title}</p>
                          <p>{item.category}</p>
                        </div>
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          </div>
          <button className='btn btn-outline-success' onClick={this.close_active_1.bind(this)}>See More</button>
          {name}
        </div>
      </>
    )
  }
}
