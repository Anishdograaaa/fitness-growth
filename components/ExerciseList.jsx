import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import Animated,{FadeInDown, FadeIn, FadeOut } from 'react-native-reanimated'


export default function ExerciseList({data}) {
    const router = useRouter();
  return (
    <View>
       {/* <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700 mb-4">
            Exercises
       </Text> */}
       <FlatList
       data = {data}
       numColumns={2}
       keyExtractor={item=>item.name}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom:60,paddingTop:20}}
       columnWrapperStyle={{
        justifyContent:'space-evenly'
       }}
       renderItem={({item,index})=> <ExerciseCard router={router} index={index} item={item}/>}
       />
    </View>
  )
}

const ExerciseCard =({item,router,index})=>{
    return (
        <Animated.View className="mx-4" entering={FadeInDown.duration(400).delay(index*200).springify()}>
            
            <TouchableOpacity onPress={()=>{router.push({pathname:'/exerciseDetails',params:item})}} className="flex py-3 space-y-2">
                <View className="bg-neutral-200 shadow rounded-[25px]">
                    <Image
                      source = {{uri:item?.gifUrl}}
                      contentFit="cover"
                      style={{width:wp(44),height:wp(52)}}
                      className="rounded-[25px]"
                    />
                </View>
                <Text 
                    style={{fontSize:hp(1.7)}}
                    className="text-neutral-700 font-semibold ml-1 tracking-wide"
                >
                    {
                        item?.name?.length>20? item.name.slice(0,20)+'...':item.name
                    }
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}