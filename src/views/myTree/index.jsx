import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Tree } from 'antd';
import styles from './index.less'
import fuzi from './img/fuzi.svg'
import tiaoyue from './img/tiaoyue.svg'
import zuozhe from './img/zuozhe.svg'
import { Promise } from 'bluebird';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash'

const initTreeData = [
    {
        title: 'Expand to load',
        key: '0',
        switcherIcon: <img style={{ display: 'inline-block', width: '100%', height: '100%' }} src={zuozhe}></img>,
        setSwitcherIcon: handleSwitcherIcon
    },
    {
        title: 'Expand to load',
        key: '1',
        switcherIcon: <img style={{ display: 'inline-block', width: '100%', height: '100%' }} src={zuozhe}></img>,
        setSwitcherIcon: handleSwitcherIcon
    },
    {
        title: 'Tree Node',
        key: '2',
        switcherIcon: <img style={{ display: 'inline-block', width: '100%', height: '100%' }} src={zuozhe}></img>,
        setSwitcherIcon: handleSwitcherIcon
    },
];

function handleSwitcherIcon(show) {
    switch (show) {
        case true:
            return <img style={{ display: 'inline-block', width: '100%', height: '100%' }} src={tiaoyue}></img>
        case false:
            return <img style={{ display: 'inline-block', width: '100%', height: '100%' }} src={zuozhe}></img>
        case 'leaf':
            return <img style={{ display: 'inline-block', width: '100%', height: '100%' }} src={fuzi}></img>
        default:
            break;
    }
}
const MyTree = () => {
    const [treeData, setTreeData] = useState([]);
    const [count, setCount] = useState(0)


    useEffect(() => {
        const data = initTreeData.map((item) => {
            item.switcherIcon = item.setSwitcherIcon(false);
            return item;
        })
        setTreeData(data)
    }, [])

    function onLoadData({ key, children }) {
        console.log('onLoadData',  key, children)
        return new Promise((resolve) => {
            if (children) {
                resolve();
                return;
            }

            setTimeout(() => {
                const myCount = count + 1
                setCount(myCount)
                
                setTreeData((origin) => {
                    if(myCount > 3){
                          const data1 = updateTreeData(origin, key, null)
                          console.log(data1, 'data1')
                          return data1
                    } else {
                        const data2 =  updateTreeData(origin, key, [
                            {
                                title: 'Child Node',
                                key: `${key}-0`,
                                switcherIcon: <img style={{ display: 'inline-block', width: '100%', height: '100%' }} src={zuozhe}></img>,
                                setSwitcherIcon: handleSwitcherIcon
                            },
                            {
                                title: 'Child Node',
                                key: `${key}-1`,
                                switcherIcon: <img style={{ display: 'inline-block', width: '100%', height: '100%' }} src={zuozhe}></img>,
                                setSwitcherIcon: handleSwitcherIcon
                            },
                        ])

                        console.log(data2, 'data2')
                        return data2;
                    }

                }

                );
                resolve();
            }, 1000);
        });
    }


    function updateTreeData(list, key, children) {
        console.log('updateTreeData')
        return list.map((node) => {
          if (node.key === key) {
              if(children) {
                node.switcherIcon = node.setSwitcherIcon(true)
                const data = { ...node, children }
                return data;
              } else {
                node.switcherIcon = node.setSwitcherIcon('leaf')
                const data = { ...node, children }
                return data;
              }

          }
      
          if (node.children) {

            return { ...node, children: updateTreeData(node.children, key, children) };
          }
      
          return node;
        });
      }


    function dealExpandData(list, key, expand) {
        list.map((node) => {
            if(node.key === key) {
                node.switcherIcon = node.setSwitcherIcon(expand)
            } else {
                if(node.children) {
                    dealExpandData(node.children, key, expand)
                } 

            }
            return node;
        });
    }

    const handleExpand = (expandedKeys, { expanded, node }) => {
        dealExpandData(treeData, node.key, expanded)
    }
    return (
        <div className={styles.treeBox} >
            <Tree
                loadData={onLoadData}
                treeData={treeData}
                showLine={{ showLeafIcon: false }}
                showIcon
                blockNode
                onExpand={handleExpand}
            />
        </div>
    );
}
export default MyTree;

