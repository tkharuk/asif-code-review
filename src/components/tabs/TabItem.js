import React, { Component } from 'react'
import styles from "./Tabs.module.css";

export default class TabItem extends Component {
  render() {
    return (
      <button className={styles.tabItem}>
        {this.props.data.title}
      </button>
    )
  }
}