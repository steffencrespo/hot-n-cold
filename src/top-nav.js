import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createNewGame} from './actions';

import './top-nav.css';

export class TopNav extends Component {
  onNewGame(event) {
    event.preventDefault();
    this.props.dispatch(createNewGame());
  }

  onInfo(event) {
    event.preventDefault();
    if (this.props.onInfo) {
      this.props.onInfo();
    }
  }

  render() {
    return(
      <nav>
       <ul className='clearfix'>
        <li>
          <a className='what' href='#' onClick={ e => this.onInfo(e)}>
            What?
          </a>
        </li>
        <li>
          <a className='new' href='#' onClick={ e => this.onNewGame(e)}>
            + New Game
          </a>
        </li>
       </ul>
      </nav>
    )
  }
}

export default connect()(TopNav);