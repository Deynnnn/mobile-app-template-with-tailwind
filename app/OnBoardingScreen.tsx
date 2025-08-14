import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';

const {width} = Dimensions.get('window');

export default function OnBoardingScreen() {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate('Home')
  }
  const handleSkip = () => {
    navigation.navigate('Home')
  }
  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity {...props} className='bg-purple-800 p-5 rounded-l-full'>
        <Text className='text-white text-lg font-bold'>Done</Text>
      </TouchableOpacity>
    )
  }

  const nextButton = ({...props}) => {
    return (
      <TouchableOpacity {...props} className='bg-purple-800/50 p-5 rounded-l-full'>
        <Text className='text-lg text-white font-bold'>Next</Text>
      </TouchableOpacity>
    )
  }
  
  const skipButton = ({...props}) => {
    return (
      <TouchableOpacity {...props} className='bg-gray-800/30 p-5 rounded-r-full'>
        <Text className='text-lg text-white font-bold'>Skip</Text>
      </TouchableOpacity>
    )
  }

  const dot = ({selected, ...props}) => {
    return (
      <View 
        {...props} 
        className={`w-3 h-3 rounded-full mx-1 ${
          selected ? 'bg-purple-800' : 'bg-purple-800/30'
        }`}
      />
    )
  }

  return (
    <View className='flex-1'>
      <Onboarding
        onDone={handleDone}
        onSkip={handleSkip}
        DoneButtonComponent={doneButton}
        NextButtonComponent={nextButton}
        SkipButtonComponent={skipButton}
        DotComponent={dot}
        containerStyles={{
          paddingHorizontal: 20,
        }}
        pages={[
          {
            backgroundColor: '#FED2E2',
            image: (
              <Lottie
                source={require('../assets/images/onboarding/get-started.json')}
                autoPlay
                loop
                style={styles.lottie}
              />
            ),
            title: (
              <View>
                <Text className='text-4xl font-bold  text-center'>Get Started</Text>
              </View>
            ),
            subtitle: 'Create your account and set up your preferences',
          },
          {
            backgroundColor: '#FCC6FF',
            image: (
              <Lottie
                source={require('../assets/images/onboarding/get-matched.json')}
                autoPlay
                loop
                style={styles.lottie}
              />
            ),
            title: (
              <View>
                <Text className='text-4xl font-bold  text-center'>Get Matched</Text>
              </View>
            ),
            subtitle: "We'll connect you anonymously when someone’s available",
          },
          {
            backgroundColor: '#FFEDFA',
            image: (
              <>
                <Lottie
                  source={require('../assets/images/onboarding/heal.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
                <Text className='text-7xl font-bold text-purple-700 text-center'>BUDDIQO</Text>
              </>
            ),
            title: (
              <View>
                <Text className='text-4xl font-bold  text-center'>Start Healing</Text>
              </View>
            ),
            subtitle: 'Chat privately, support openly, grow together',
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: '100%',
    borderBottomLeftRadius: '100%',
  },
});