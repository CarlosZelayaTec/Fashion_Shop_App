import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PrincipalScreen, AreaScreen, MainScreen, PerfilScreen } from './Screens/index';

const AppNavigator = createStackNavigator({
  Principal: {
    screen: PrincipalScreen
  },
  Categoria: {
    screen: AreaScreen
  },
  Main: {
    screen: MainScreen
  },
  Perfil: {
    screen: PerfilScreen
  }
},
{ 
  initialRouteName: 'Principal',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#202641',
      borderBottomWidth: 1,
      borderBottomColor: '#000'
    },
    headerTintColor: '#FFFFFF',
  }
})

export default createAppContainer(AppNavigator);
