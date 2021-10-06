import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div 
            style={{
                backgroundColor: theme.bg,
                color: theme.syntax
            }}
            className="book-list">
                <ul>
                    <li style={{
                        backgroundColor:theme.ui,
                        color:theme.syntax
                    }}>Book One</li>
                    <li style={{
                        backgroundColor:theme.ui,
                        color:theme.syntax
                    }}>Second Book</li>
                    <li style={{
                        backgroundColor:theme.ui,
                        color:theme.syntax
                    }}>Awesome book</li>
                </ul>
            </div>
        )
    }
}
