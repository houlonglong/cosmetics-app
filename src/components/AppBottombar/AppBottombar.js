import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AppBottombar.css';
import index from '../../icon/app.svg';
import message from '../../icon/message.svg';
import search from '../../icon/search.svg';
import favor from '../../icon/favor.svg';
import notification from '../../icon/notification.svg';

class AppBottombar extends Component {
  render() {
    const {style} = this.props;
    return (
      <div
        className="AppBottombar bar"
        style={
          this.props.isIPhoneX
            ? {
                ...this.props.style,
                height: 84,
              }
            : style
        }
      >
        <img src={index} alt="" />
        <img src={message} alt="" />
        <img src={favor} alt="" />
        <img src={notification} alt="" />
        <img src={search} alt="" />
      </div>
    );
  }
}

AppBottombar.propTypes = {
  /** 是否在iPhoneX框架内 */
  isIPhoneX: PropTypes.bool,
  /** 样式 */
  style: PropTypes.object,
};

AppBottombar.defaultProps = {
  isIPhoneX: false,
  style: {},
};

export default AppBottombar;
