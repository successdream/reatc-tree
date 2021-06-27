import styles from './index.less';
import './index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation
} from "react-router-dom";
import routes from '../route'
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
const Right = () => {
    let location = useLocation();
    return (
        <div className={styles.box}>
            {/* <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <Switch>
                        {
                            routes.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    ></Route>
                                )
                            })
                        }
                        <Route path="/">
                            <Redirect to="/basic/home"></Redirect>
                        </Route>

                    </Switch>

                </CSSTransition>
            </TransitionGroup> */}

            <Switch>
                {
                    routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            ></Route>
                        )
                    })
                }
                <Route path="/">
                    <Redirect to="/basic/home"></Redirect>
                </Route>

            </Switch>

        </div>
    )
}
export default Right;