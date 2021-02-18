import React, { Component } from 'react'
import { observable } from 'mobx';
import { observer } from 'mobx-react'

import TabItem from "./TabItem";
import styles from './Tabs.module.css'

export default observer(class Tabs extends Component {
  static defaultProps = {
    items: []
  }

  state = observable({
    selected: 0
  })

  render() {
    const { items } = this.props;

    return (
      <div className={styles.tabs}>
        <div>{ items.map((item, idx) => (
          <TabItem 
            data={item}
            idx={idx}
            selected={this.selected}
            />
        ))}
        </div>
        
        <div className={styles.tabContent}>
          {items[this.state.selected].content}
        </div>
      </div>
    )
  }
})