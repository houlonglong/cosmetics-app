import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Appbar.css';
import menu from '../../icon/menu.svg';
import shopping from '../../icon/shopping.svg';

class Appbar extends Component {
  render() {
    return (
      <div
        className="Appbar bar"
        style={
          this.props.isIPhoneX
            ? {
                marginBottom: 44,
                top: 44,
              }
            : {}
        }
      >
        <div className="icon">
          <img src={menu} alt="" />
        </div>
        <div className="bar-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="icon">
          <img src={shopping} alt="" />
        </div>
      </div>
    );
  }
}

Appbar.propTypes = {
  /** 是否在iPhoneX框架内 */
  isIPhoneX: PropTypes.bool,
  /** 顶部栏显示的文字 */
  title: PropTypes.string,
};

Appbar.defaultProps = {
  isIPhoneX: false,
  title: '化妆品小店',
};

export default Appbar;
