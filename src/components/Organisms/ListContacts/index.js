import React, { Component } from 'react';

class ListContacts extends Component {

    state = {
        contacts: []
    }

    componentDidMount () {
        this.setState({
            contacts: this.props.contacts
        })
    }

    removeContact (contact, contacts) {
        this.setState({
            contacts: contacts.filter( item => {
                return item.id !== contact.id
            })
        })
    }

    render () {
        const contacts = this.state.contacts;
        return (
            <ul>
                { contacts && contacts.map( (item, index) => {
                    return (
                        <li key={index}> 
                            {item.name} 
                            <button onClick={this.removeContact.bind(this, item, contacts)} >
                                del
                            </button>
                        </li>
                    )
                }) }
            </ul>
        )
    }
}

export default ListContacts;