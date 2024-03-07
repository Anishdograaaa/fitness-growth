import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import Bodyparts from '../components/Bodyparts';
// import { useRouter } from 'expo-router';

export default function home() {

    

  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-[50px]"  edges={['top']}>
        <StatusBar style="dark"/>
        <View className="flex-row justify-between items-center mx-5">
            <View className="space-y-2">
                <Text 
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-neutral-700"
                >
                    READY TO
                </Text>
                <Text 
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-rose-500"
                >
                    WORKOUT
                </Text>
            </View>

            <View className="flex justify-center items-center space-y-2">
                <Image source={require("../assets/images/toji.jpg")}
                className="rounded-full"
                style={{height:hp(7),width:hp(7)}}/>
                <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                style={{height: hp(5.5),width: hp(5.5)}}
                >
                           <Ionicons name="notifications" size={hp(3)} color="gray" />
                </View>

            </View>

        </View>
        <View>
                 <ImageSlider/>
        </View>
        <View className="flex-1">
             <Bodyparts/>
        </View>
    </SafeAreaView>
  )
}