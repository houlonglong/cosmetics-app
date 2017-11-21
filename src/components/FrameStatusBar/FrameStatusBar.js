import React, {Component} from 'react';
import './FrameStatusBar.css';
import PropTypes from 'prop-types';

import topbar from '../../frame/topbar.svg';

class FrameStatusBar extends Component {
  render() {
    return (
      <div className="FrameStatusBar bar" style={this.props.style}>
        <img src={topbar} alt="" />
      </div>
    );
  }
}

FrameStatusBar.propTypes = {
  /** 样式 */
  style: PropTypes.object,
};

FrameStatusBar.defaultProps = {
  style: {},
};

export default FrameStatusBar;
