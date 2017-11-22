import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ItemRow.css';

const afterClickStyle = {
  position: 'absolute',
  transform: 'scale(2)',
  zIndex: 200,
  opacity: 0,
};

class ItemRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: new Array(props.data.length),
      clicked: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.scrollOffset &&
      prevProps.scrollOffset !== this.props.scrollOffset
    ) {
      this.row.scrollLeft = this.props.scrollOffset;
    }
  }

  render() {
    const {height, data, hasTitle, setScroll} = this.props;
    return (
      <div
        className="ItemRow"
        ref={x => this.row = x}
        style={{height}}
        onScroll={e => {
          if (setScroll) {
            setScroll(e.currentTarget.scrollLeft);
          }
        }}
      >
        {data.map((item, i) => (
          <div
            className="item-wrap"
            style={{width: height, height, background: item.background}}
          >
            <div
              key={i}
              style={{
                height,
                width: height,
                background: item.background,
                ...this.state.style[i],
              }}
              className="item"
              onClick={e => {
                this.setState(state => ({
                  style: [
                    ...state.style.slice(0, i),
                    afterClickStyle,
                    ...state.style.slice(i + 1),
                  ],
                }));
              }}
            >
              <img src={item.img} alt="" />
              {hasTitle ? <p>{item.title}</p> : ''}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ItemRow.propTypes = {
  height: PropTypes.number,
  hasTitle: PropTypes.bool,
  data: PropTypes.array.isRequired,
  setScroll: PropTypes.func,
  scrollOffset: PropTypes.number,
};

ItemRow.defaultProps = {
  height: 100,
  hasTitle: true,
};

export default ItemRow;
