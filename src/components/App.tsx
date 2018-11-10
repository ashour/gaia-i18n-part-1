import React, { Component } from 'react';

import './App.css';
import Cart from './Cart';
import SelectLanguage from './SelectLanguage';
import { runInThisContext } from 'vm';

class App extends Component {
    renderHeader() {
        return (
            <header className="App__Header">
                <h1>Your Cart</h1>

                <SelectLanguage
                    value="en"
                    onChange={() => { }}
                />
            </header>
        );
    }

    renderLead() {
        return (
            <div className="App__Header">
                <p className="App__Lead__Start">
                    Evening, Adam. Here's what's currently in your
                    shopping cart.
                </p>

                <p className="App__Lead__End">Updated 21/10/2019</p>
            </div>
        );
    }

    renderFooter() {
        return (
            <p className="App__Footer">
                This is a demo to test the Gaia i18n library
            </p>
        );
    }

    render() {
        return (
            <div className="App">
                {this.renderHeader()}

                {this.renderLead()}

                <Cart />

                {this.renderFooter()}
            </div>
        );
    }
}

export default App;
