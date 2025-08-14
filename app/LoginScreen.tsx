import { View, Text, Dimensions, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import Lottie from 'lottie-react-native';


const {width} = Dimensions.get('window');

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  return (
    <SafeAreaView className='flex-1 flex-col items-center justify-center h-full p-6'>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{ flex: 1, width: '100%' }}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 0 })}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Lottie 
              source={require('../assets/images/login/User Profile.json')} 
              autoPlay 
              loop 
              style={styles.lottie}
            />
            <Text className='text-7xl font-extrabold text-purple-700 text-center'>BUDDIQO</Text>
          </View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            className={`w-full max-w-md bg-white p-4 mt-6 rounded-xl text-black border ${
              isEmailFocused ? 'border-secondary' : 'border-gray-300'
            }`}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            className={`w-full max-w-md bg-white p-4 mt-4 rounded-xl text-black border ${
              isPasswordFocused ? 'border-secondary' : 'border-gray-300'
            }`}
          />

          {/* Login Button */}
          <Pressable 
            className='w-full max-w-md bg-purple-800 p-4 mt-6 rounded-full items-center' 
            onPress={() => navigation.navigate('Onboarding')} // Change to your target screen
          >
            <Text className='text-white font-bold text-lg'>Login</Text>
          </Pressable>
    
          {/* Register Link */}
          <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
            <Text className='mt-4 text-primary-foreground'>Don&apos;t have an account? Register</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width,
  },
});