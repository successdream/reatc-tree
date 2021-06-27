import styles from './index.less';
import Left from './left';
import Right from './right';
import route from './right'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";


const BasicConfigRoute = () => {
    return (
        <div className={styles.box}>
            <div className={styles.header}>
                我是basicConfigRoute
            </div>
            <div className={styles.bottom}>
                <Router>
                    <div className={styles.left}>
                        <Left routes={route}></Left>
                    </div>
                    <div className={styles.right}>
                        <Right></Right>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default BasicConfigRoute;