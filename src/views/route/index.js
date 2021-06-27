import Bubblegum from '../views/bubblegum';
import Home from '../views/home';
import Shoelaces from '../views/shoelaces';
import MyTree from '../views/myTree';
import Lodash from '../views/lodash';

const routes = [
    {
      path: "/basic/home",
      exact: true,
      sidebar: Home,
      main: Home,
      name: 'Home',
      
    },
    {
      path: "/basic/bubblegum",
      sidebar: Bubblegum,
      main: Bubblegum,
      name: 'Bubblegum',

    },
    {
      path: "/basic/shoelaces",
      sidebar: Shoelaces,
      main: Shoelaces,
      name: 'Shoelaces',

    },
    {
      path: "/basic/myTree",
      sidebar: MyTree,
      main: MyTree,
      name: 'MyTree',

    },
    {
      path: "/basic/lodash",
      sidebar: Lodash,
      main: Lodash,
      name: 'Lodash',

    },
  ];

  export default routes;