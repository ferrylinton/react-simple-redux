import React from 'react';
import { connect } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toggleSidebar } from './../../redux/sidebar/sidebar.actions';

import './header.css';

class Header extends React.Component {

  render() {
    return (
      <div className='header'>
        <Link to='#' className='menu-btn'>
          <FaIcons.FaBars onClick={this.props.toggleSidebar} />
        </Link>
        <div className="Header-brand">Simple Redux</div>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);