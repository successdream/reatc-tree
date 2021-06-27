import React from 'react';
import { Tabs } from 'antd';
import Chunk from './chunk'
const { TabPane } = Tabs;

const Lodash = () => {
    const tabs = [
        {
            key: 1,
            name: 'lodash'
        },
        {
            key: 2,
            name: 'Pane 2'
        },
        {
            key: 3,
            name: 'Pane 3'
        },
    ]
    function callback(key) {
        console.log(key);
      }
    return (
        <div>
            <Tabs onChange={callback} type="card">
                {
                    tabs.map((item, index) => {
                        return (
                            <TabPane tab={item.name} key={item.key}>
                               { index === 0 && <Chunk/>} 
                            </TabPane>  
                        )
                    })
                }
            </Tabs>
        </div>
    )
}

export default Lodash;