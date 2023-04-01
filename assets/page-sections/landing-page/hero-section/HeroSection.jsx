import React from 'react'
import { ImageBackground, View, Text, SafeAreaView, Image } from 'react-native'

import dots from '../../../resources/dots.png'
import BgImg from '../../../resources/bg.png'
//Stylesheet
import { styles } from './HeroStyleSheet'

function HeroSection() {
  return (
    <ImageBackground source={BgImg} style={styles.backgroundImage}>
        <View style={styles.container}>
            <Text style={styles.headerText}>Investing</Text>
            <Text style={styles.headerTextGradient}>Simplified</Text>
            <Text style={styles.normalText}>
            On one simple platform, you can invest, borrow, and spend. Get the resources you need to start investing without paying commissions.
          </Text>
        </View>
        
        <Image source={require('../../../resources/dots.png')} style={styles.dotsImage}/>
    </ImageBackground>
  )
}

export default HeroSection