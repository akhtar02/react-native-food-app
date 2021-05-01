import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../component/Button';





const OnBoardScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ height: 400 }}>
                <Image
                    style={{
                        width: '100%',
                        resizeMode: 'contain',
                        top: -150,
                    }}
                    source={require('../../assets/onboardImage.png')}
                />
            </View>
            <View style={style.textContainer}>
                <View>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
                        Delicious Food
          </Text >

                    <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 20, color: COLORS.grey, }}>
                        We Help you to find best and delicious food
          </Text>
                </View>




                <View style={style.indicatorContainer}>
                    <View style={style.currentIndicator} />
                    <View style={style.indicator} />
                    <View style={style.indicator} />
                </View>

                <PrimaryButton
                onPress={()=>navigation.navigate('Home')}
                title='Get Started'
                />

            </View>
        </SafeAreaView>

    )
}

export default OnBoardScreen


const style = StyleSheet.create({
    textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        paddingBottom: 40,
    },
    indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

 
    currentIndicator: {
        height: 12,
        width: 30,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    indicator: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5,
    }
})