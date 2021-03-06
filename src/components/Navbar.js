
import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context);
        const { isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{
                backgroundColor: theme.bg,
                color: theme.syntax
            }}>
                <h1>React Context</h1>
                <ul>
                    <li >Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}
