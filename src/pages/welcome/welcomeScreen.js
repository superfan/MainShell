import React from 'react';
import {
    StyleSheet, ImageBackground, Text, Image, View, ProgressBarAndroid
} from 'react-native';

export default class WelcomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            hint: '初始化'
        };
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        const backgroundImg: string = '../../assets/imgs/bg_welcome.png';
        const logo: string = '../../assets/imgs/ic_logo.png';
        return (
            <ImageBackground style={styles.background} source={require(backgroundImg)}>
                <View style={styles.upperPart}>
                    <Image source={require(logo)}/>
                </View>
                <View style={styles.lowerPart}>
                    <ProgressBarAndroid styleAttr="SmallInverse"/>
                    <Text style={styles.hint}>{this.state.hint}</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    upperPart: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lowerPart: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    hint: {
        marginBottom: 20,
        color: 'white'
    }
});
