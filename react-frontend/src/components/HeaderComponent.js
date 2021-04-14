import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://192.168.86.217:30020" className="navbar-brand">Candidate Management Application</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
