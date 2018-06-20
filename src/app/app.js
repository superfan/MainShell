import React from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from "../pages/welcome/welcomeScreen";
import LoginScreen from "../pages/login/loginScreen";
import MainScreen from "../pages/main/mainScreen"; // Version can be specified in package.json

const MainStack = createStackNavigator(
    {
        Main: MainScreen
    },
    // {
    //     initialRouteName: 'Main',
    //     navigationOptions: {
    //         headerStyle: {
    //             backgroundColor: '#f4511e',
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //             fontWeight: 'bold',
    //         },
    //     },
    // }
);

//const LoginStack = createStackNavigator({Login: LoginScreen}, {headerMode: 'none'});

export default createSwitchNavigator(
    {
        Welcome: WelcomeScreen,
        Main: MainStack,
        Login: LoginScreen,
    },
    {
        initialRouteName: 'Welcome',
    }
);

// import React from 'react';
// import {
//     ActivityIndicator,
//     AsyncStorage,
//     Button,
//     StatusBar,
//     StyleSheet,
//     View,
// } from 'react-native';
// import { createStackNavigator, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
//
// class SignInScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Please sign in',
//     };
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Button title="Sign in!" onPress={this._signInAsync} />
//             </View>
//         );
//     }
//
//     _signInAsync = async () => {
//         await AsyncStorage.setItem('userToken', 'abc');
//         this.props.navigation.navigate('App');
//     };
// }
//
// class HomeScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Welcome to the app!',
//     };
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Button title="Show me more of the app" onPress={this._showMoreApp} />
//                 <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
//             </View>
//         );
//     }
//
//     _showMoreApp = () => {
//         this.props.navigation.navigate('Other');
//     };
//
//     _signOutAsync = async () => {
//         await AsyncStorage.clear();
//         this.props.navigation.navigate('Auth');
//     };
// }
//
// class OtherScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Lots of features here',
//     };
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
//                 <StatusBar barStyle="default" />
//             </View>
//         );
//     }
//
//     _signOutAsync = async () => {
//         await AsyncStorage.clear();
//         this.props.navigation.navigate('Auth');
//     };
// }
//
// class AuthLoadingScreen extends React.Component {
//     constructor() {
//         super();
//         this._bootstrapAsync();
//     }
//
//     // Fetch the token from storage then navigate to our appropriate place
//     _bootstrapAsync = async () => {
//         const userToken = await AsyncStorage.getItem('userToken');
//
//         // This will switch to the App screen or Auth screen and this loading
//         // screen will be unmounted and thrown away.
//         this.props.navigation.navigate(userToken ? 'App' : 'Auth');
//     };
//
//     // Render any loading content that you like here
//     render() {
//         return (
//             <View style={styles.container}>
//                 <ActivityIndicator />
//                 <StatusBar barStyle="default" />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
//
// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen }, {headerMode: 'none'});
// const AuthStack = createStackNavigator({ SignIn: SignInScreen }, {headerMode: 'none'});
//
// export default createSwitchNavigator(
//     {
//         AuthLoading: AuthLoadingScreen,
//         App: AppStack,
//         Auth: AuthStack,
//     },
//     {
//         initialRouteName: 'AuthLoading',
//     }
// );


