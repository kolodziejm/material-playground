import React, { Component } from 'react'
import Navbar from '../components/Navbar';

export default class Stats extends Component {
    render() {
        return (
            <div>
                <Navbar navValue={1} />
                This is stats page
            </div>
        )
    }
}
