import React, { Component } from 'react'

import TabItem from "./TabItem";
import styles from './Tabs.module.css'

export default class Tabs extends Component {
  static defaultProps = {
    items: []
  }

  render() {
    const { items } = this.props;

    return (
      <div className={styles.tabs}>
        <div>{ items.map((item) => (
          <TabItem data={item} /> ))}
        </div>
      </div>
    )
  }
}