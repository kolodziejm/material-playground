import React, { Component } from 'react'
import Navbar from '../components/Navbar';

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar navValue={2} />
                This is about page
            </div>
        )
    }
}
