import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PrincipalScreen, AreaScreen, MainScreen, PerfilScreen, PerfilModal } from './Screens/index';

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
    // headerShown: false,
  }
})

const ModalNavigator = createStackNavigator({
  Mainn: AppNavigator,
  ModalPerfil: {
    screen: PerfilModal
  }
}, {
  // initialRouteName: 'Mainn',
  mode: 'modal',
  headerMode: 'none',
})

MainScreen.navigationOptions = {
  title: 'Perfil'
}

PerfilModal.navigationOptions = {
  cardStyle:{
    backgroundColor:"transparent",
    opacity: 0.98
}
}

export default createAppContainer(ModalNavigator);
