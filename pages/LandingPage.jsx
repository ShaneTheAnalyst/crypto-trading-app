import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import HeroSection from '../assets/page-sections/landing-page/hero-section/HeroSection'

//BackgroundImage

function LandingPage() {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <HeroSection/>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
    mainContainer:{
       flex:1,
       backgroundColor:'#f5f5f5',
    },
})
export default LandingPage