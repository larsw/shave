import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectProduct } from '../actions/action_products'

export class ProductList extends React.Component {

   constructor(props) {
     super(props)
   }

  onRowClick(product) {
    console.log(product)
    this.props.selectProduct(product)
  }

  renderRow(product) {
      return (<tr key={product.name} onClick={() => this.onRowClick(product)}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>)
  }

  render() {
    const rows = this.props.products.map(product => this.renderRow(product))

    return (<table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectProduct }, dispatch)
}

function mapStateToProps({products}) {
  return {products}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
