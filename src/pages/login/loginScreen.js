import React from 'react';
import {
    StyleSheet, Text, ImageBackground, Image, View
} from 'react-native';

export default class LoginScreen extends React.Component {
    constructor() {
        super();
    }

    render() {
        const backgroundImg: string = '../../assets/imgs/bg_welcome.png';
        const logo: string = '../../assets/imgs/ic_logo.png';
        return (
            <ImageBackground style={styles.background} source={require(backgroundImg)}>
                <View style={styles.upperPart}>
                    <Image source={require(logo)}/>
                </View>
                <View style={styles.lowerPart}>
                    <Text style={styles.hint}>bbvvvvv</Text>
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
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    hint: {
        color: 'white'
    }
});
