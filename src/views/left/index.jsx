import styles from './index.less';
import routes from '../route'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
const Left = (props) => {
    console.log(routes, 'routes')
    // const { routes } = props
    return (
        <div className={ styles.box}>
            <ul>
                {
                    routes.map((item, index) => {
                        return(
                            <li key={ index }>
                                <Link to={item.path}> { item.name }</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Left;