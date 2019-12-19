import React, { Component } from 'react'
import styles from "./Tabs.module.css";

export default class TabItem extends Component {
  render() {
    return (
      <button
        onClick={() => { this.props.selected = this.props.idx }}
        className={styles.tabItem}>
        {this.props.data.title}
      </button>
    )
  }
}