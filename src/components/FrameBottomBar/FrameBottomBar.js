import React, {Component} from 'react';
import PropTypes from 'prop-types';

import bottom from '../../frame/bottombar.svg';
import './FrameBottomBar.css';

class FrameBottomBar extends Component {
  render() {
    return (
      <div className="FrameBottomBar bar" style={this.props.style}>
        <img src={bottom} alt="" />
      </div>
    );
  }
}

FrameBottomBar.propTypes = {
  /** 样式 */
  style: PropTypes.object,
};

FrameBottomBar.defaultProps = {
  style: {},
};

export default FrameBottomBar;
