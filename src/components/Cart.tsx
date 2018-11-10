import React, { Component } from 'react';

import './Cart.css';

class Cart extends Component {
    render() {
        return (
            <table className="Cart">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}>Item</th>
                        <th style={{ textAlign: 'right' }}>Quantity</th>
                        <th style={{ textAlign: 'right' }}>Price</th>
                        <th style={{ textAlign: 'right' }}>Subtotal</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td style={{ textAlign: 'left' }}>Under-inflated balloons</td>
                        <td style={{ textAlign: 'right' }}>2</td>
                        <td style={{ textAlign: 'right' }}>$2.99</td>
                        <td style={{ textAlign: 'right' }}>$5.98</td>
                    </tr>

                    <tr>
                        <td style={{ textAlign: 'left' }}>Over-priced smartphone</td>
                        <td style={{ textAlign: 'right' }}>1</td>
                        <td style={{ textAlign: 'right' }}>$2299.99</td>
                        <td style={{ textAlign: 'right' }}>$2299.99</td>
                    </tr>

                    <tr>
                        <td style={{ textAlign: 'left' }}>Diamond-studded selfie stick</td>
                        <td style={{ textAlign: 'right' }}>4</td>
                        <td style={{ textAlign: 'right' }}>$284.99</td>
                        <td style={{ textAlign: 'right' }}>$1139.96</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Cart;