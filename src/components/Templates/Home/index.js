import React, { Component } from 'react';
import ListContacts from '../../Organisms/ListContacts';

class HomeTemplate extends Component {
    render () {
        return (
            <div>
                <ListContacts {...this.props} />
            </div>
        )
    }
}

export default HomeTemplate;