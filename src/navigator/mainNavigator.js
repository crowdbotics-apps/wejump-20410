import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile103603Navigator from '../features/UserProfile103603/navigator';
import Tutorial103602Navigator from '../features/Tutorial103602/navigator';
import NotificationList103574Navigator from '../features/NotificationList103574/navigator';
import Settings103573Navigator from '../features/Settings103573/navigator';
import Settings103565Navigator from '../features/Settings103565/navigator';
import UserProfile103563Navigator from '../features/UserProfile103563/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile103603: { screen: UserProfile103603Navigator },
Tutorial103602: { screen: Tutorial103602Navigator },
NotificationList103574: { screen: NotificationList103574Navigator },
Settings103573: { screen: Settings103573Navigator },
Settings103565: { screen: Settings103565Navigator },
UserProfile103563: { screen: UserProfile103563Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
