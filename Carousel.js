var Carousel = require('react-native-carousel');

<Carousel width={width} hideIndicators={false} // Set to true to hide the indicators
indicatorColor="#FFFFFF" // Active indicator color
indicatorSize={20} // Indicator bullet size
indicatorSpace={15} // space between each indicator
inactiveIndicatorColor="#999999" // Inactive indicator color
indicatorAtBottom={true} // Set to false to show the indicators at the top
indicatorOffset={250} // Indicator relative position from top or bottom
onPageChange={callback} // Called when the active page changes
inactiveIndicatorText= '•' // Inactive indicator content ( You can customize to use any Unicode character )
indicatorText= '•' // Active indicator content ( You can customize to use any Unicode character )

animate={true} // Enable carousel autoplay
delay={1000} // Set Animation delay between slides
loop={true} // Allow infinite looped animation. Depends on Prop {...animate} set to true.
 >
        <View style={styles.container}>
          <Image style={styles.img}source={require('./a.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./e.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./c.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={styles.img} source={require('./d.jpg')}/>
        </View>
</Carousel>