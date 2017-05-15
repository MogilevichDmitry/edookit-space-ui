import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SelectorItem from './selector-item.jsx';

import './selector.less';

class Selector extends React.Component {
  constructor() {
    super();

    this.state = {
      isListOpen: false,
      value: ''
    };
    this.toggleList = this.toggleList.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      value: this.props.defaultValue ? this.props.defaultValue : this.props.title
    });
  }

  toggleList() {
    this.setState({ isListOpen: !this.state.isListOpen });
  }

  onClick(e) {
    this.setState({value: e.target.innerHTML, isListOpen: false});
  }

  render() {

    const { options, width, minWidth, title } = this.props;
    const value = this.state.value;

    return(
      <div style={{width: `${width}`}}
        className={classNames({
          'selector': true,
          'selector_active': this.state.isListOpen
        })}
      >
        <div style={{minWidth: `${minWidth}`, width: `${width}`}}
          className={classNames({
            'selector__toggler': true,
            'selector__toggler_withPlaceholder': value === title,
            'selector__toggler_active': this.state.isListOpen
          })}
          onClick={this.toggleList}
        >
          {value}
        </div>
        <div className={classNames({
          'selector__list': true,
          'selector__list_open': this.state.isListOpen
        })}>
          {
            options.map((option, index) =>
              <SelectorItem option={option} key={index} onClick={(e) => this.onClick(e)}/>
            )
          }
        </div>
      </div>
    );
  }
}

Selector.propTypes = {
    title: PropTypes.string,
    defaultValue: PropTypes.string,
    openTop: PropTypes.bool,
    options: PropTypes.array,
    darkTheme: PropTypes.bool,
    minWidth: PropTypes.string
};

export default Selector;
