import React, { Component } from 'react';
import HomeTemplate from '../../Templates/Home';

class HomePage extends Component {

    state = {
        contacts: [
          {
            id: 1,
            name: 'Louris',
            avatar: 'image',
          },
          {
            id: 2,
            name: 'Starks',
            avatar: 'image'
          },
          {
            id: 3,
            name: 'Chics',
            avatar: 'image'
          }
        ]
      }

    render() {
        return (
            <HomeTemplate contacts={this.state.contacts} />
        )
    }

}

export default HomePage;