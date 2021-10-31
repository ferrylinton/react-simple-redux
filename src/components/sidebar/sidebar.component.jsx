import React from 'react';
import { connect } from 'react-redux';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { toggleSidebar } from '../../redux/sidebar/sidebar.actions';

import './sidebar.css';

class Sidebar extends React.Component {

  render() {

    return (
      <div className={this.props.isSidebarShow ? 'sidebar active' : 'sidebar'}>
        <div className="sidebar-toggle">
          <div className="sidebar-toggle-btn" onClick={this.props.toggleSidebar}>
            <AiIcons.AiOutlineClose />
          </div>
        </div>

        <ul className='sidebar-menu' onClick={this.props.toggleSidebar}>
          <li>
            <Link to="/">
              <AiIcons.AiFillHome /><span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/info">
              <AiIcons.AiFillInfoCircle /><span>Info</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }

}

const mapStateToProps = ({ sidebar }) => ({
  isSidebarShow: sidebar.isSidebarShow
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);