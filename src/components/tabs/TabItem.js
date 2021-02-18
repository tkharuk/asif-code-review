import React, { Component } from 'react'
import { bool} from 'prop-types'
import classNames from 'classnames'
import styles from "./Tabs.module.css";

export default class TabItem extends Component {
  static propTypes = {
    small: bool,
    disabled: bool
  }

  static defaultProps = {
    small: true,
    disabled: false
  }

  render() {
    return (
      <button
        {...this.props}
        className={classNames(styles.tabItem, {
          [styles.tabItemSmall]: this.props.small
        })}
      >
        {this.props.data.title}
      </button>
    )
  }
}