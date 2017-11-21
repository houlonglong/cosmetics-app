import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './DetailBar.css';
import toLeft from '../../icon/to-left.svg';
import cart from '../../icon/cart.svg';

class DetailBar extends Component {
  render() {
    return (
      <div className="DetailBar bar" style={this.props.style}>
        <div className="icon">
          <img src={toLeft} alt="" />
        </div>
        <div className="bar-title" />
        <div className="icon">
          <img src={cart} alt="" />
        </div>
      </div>
    );
  }
}

DetailBar.propTypes = {
  /** 样式 */
  style: PropTypes.object,
};

DetailBar.defaultProps = {
  style: {},
};

export default DetailBar;
