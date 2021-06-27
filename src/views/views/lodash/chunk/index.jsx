
import React, { useState } from 'react';
import { Button, Card } from 'antd';
import _ from 'lodash';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './index.less'

const cards = [
    {
        title: 'Chunk方法',
        method: '_.chunk(array, [size=1])',
        params: '参数1 array是需要分割的数组, size: 数组，分割数目，可设置数字， 或者只有一个值的数组[2], 类型:number',
        introduce: 'chunk方法，可以分割一维数组为二维数组'
    },
    // {
    //     title: 'Chunk方法',
    //     method: '_.chunk(array, [size=1])',
    //     params: '参数1 array是需要分割的数组, size: 数组，分割数目，可设置数字， 或者只有一个值的数组[2], 类型:number',
    //     introduce: 'chunk方法，可以分割一维数组为二维数组'
    // },
    // {
    //     title: 'Chunk方法',
    //     method: '_.chunk(array, [size=1])',
    //     params: '参数1 array是需要分割的数组, size: 数组，分割数目，可设置数字， 或者只有一个值的数组[2], 类型:number',
    //     introduce: 'chunk方法，可以分割一维数组为二维数组'
    // },
    // {
    //     title: 'Chunk方法',
    //     method: '_.chunk(array, [size=1])',
    //     params: '参数1 array是需要分割的数组, size: 数组，分割数目，可设置数字， 或者只有一个值的数组[2], 类型:number',
    //     introduce: 'chunk方法，可以分割一维数组为二维数组'
    // },
]
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Chunk = () => {
    const [chunkData, setChunkData] = useState(data)
    const [show, setShow] = useState(false)

    const handleClick = () => {
        console.log('handleClick')

        const res = _.chunk(data, [2]);
        setChunkData(res)
        setShow(!show)
        // console.log(res, 'res')
    }
    return (
        <div className={styles.chunk}>
            <div className={styles.title}>我是chunk组件</div>
            <Button type="primary">12312</Button>
            <div className={styles.content}>
                <Scrollbars style={{ width: 500, height: 500 }}>
                    {
                        cards.map((item, index) => {
                            return (
                                <Card key={index} title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }} onClick={handleClick}>
                                    <h2> {item.title} </h2>
                                    <h5>示例：{item.method} </h5>
                                    <p>params讲解 : {item.params}</p>
                                    <p>introduce: {item.introduce}</p>
                                    <div>
                                        <div>原始数组: {JSON.stringify(data)}</div>
                                        {show && <div>调用方法后： {JSON.stringify(chunkData)} </div>}
                                    </div>
                                </Card>
                            )
                        })
                    }
                </Scrollbars>

            </div>
            {/* <Button type="primary" onClick={ handleClick }> 按钮 </Button> */}
        </div>
    )
}
export default Chunk;