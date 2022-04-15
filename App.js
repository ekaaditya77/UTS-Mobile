import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Lightbox from 'react-native-lightbox-v2';
export default function App() {
  const clickHandler = () => {
    alert('None')
  }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bottomIcon}>
        <View style={styles.iconRowUpper}>
        <View style={styles.logoWrapper}>
               <View style={styles.logoContainer}>
                  <Text>CZ</Text>
              </View>
            </View>
            <Entypo name="twitter" size={30} color="blue" />
            <MaterialCommunityIcons name="star-four-points-outline" size={24} color="black" />
          </View>
        </View>
      <ScrollView style={styles.container}>
       {data.map(val => {
         return(<View style={styles.wrapper}>
          <View style={styles.hederWrapper}>
            <View style={styles.iconWrapper}>
              <View style={styles.logoWrapper}>
               <View style={styles.logoContainer}>
                  <Text>{val.id}</Text>
              </View>
            </View>
              <Text style={styles.usernameText}>{val.author}</Text>
            </View>
            <View>
            <Entypo name="dots-three-vertical" size={22} color="black" />
            </View>
          </View>
          <Lightbox>
          <View style={styles.box}>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: val.url,
        }}
      />
        </View>
        </Lightbox>
        <View>
          <View style={styles.iconRow}>
          <EvilIcons name="comment" size={24} color="black" />
          <EvilIcons name="retweet" size={24} color="black" />
          <EvilIcons name="heart" size={24} color="black" />
          <EvilIcons name="share-google" size={24} color="black" />
          </View>
        </View>
          </View>)
       })}
      </ScrollView>
      
          <TouchableOpacity 
          style={styles.TouchableOpacity}
          onPress={clickHandler}>
            
            <Image
            style={styles.floatingButton}
            source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/79/fd/aa/79fdaaaa-4b93-4d66-89e9-3d8b721fff16/source/512x512bb.jpg'}} />
          </TouchableOpacity>
        <View style={styles.bottomIcon}>
        <View style={styles.iconRowBottom}>
        <Entypo name="home" size={24} color="black" />
        <EvilIcons name="search" size={24} color="black" />
        <EvilIcons name="bell" size={24} color="black" />
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
  },
  wrapper:{
    marginTop: 10
  },
  scroll:{
    height: 150,
    backgroundColor: '#000',
  },
  box:{
    width: '100%',
    height: 300,
    backgroundColor: '#C2C',
    marginTop: 10,
    marginLeft: 60,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },
  touch:{
    backgroundColor: '#F54',
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10
  },
  tinyLogo:{
    width: '100%',
    height: '100%',
    
  },
  text: {
    fontSize: 30
  },
  iconWrapper:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoContainer:{
    backgroundColor: '#C2C2C2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
    
  },
  logoWrapper: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#F4FCD9',
    padding: 2
  },
  hederWrapper:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  usernameText:{
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16
  },
  iconRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 60,
    marginRight: 10,
    marginTop: 10
  },
  TouchableOpacity:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 70

  },
  floatingButton:{
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 100,
   
  },
  bottomIcon:{
    padding: 10
  },
  iconRowBottom:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  iconRowUpper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

const data=[
  {
    id: 'J',
    author: 'Josep Stalin',
    width: 5616,
    height: 3744,
    url: "https://pict-b.sindonews.net/dyn/850/pena/news/2022/03/28/41/726169/kekejaman-joseph-stalin-jutaan-orang-tewas-selama-kekuasaannya-rqa.jpg",
  },
  {
    id: 'P',
    author: 'Vladimir Putin',
    width: 5616,
    height: 3744,
    url: "https://akcdn.detik.net.id/visual/2022/02/24/vladimir-putin-8_169.jpeg?w=650",
  },
  {
    id: 'Xi',
    author: 'Xi Jinping',
    width: 5616,
    height: 3744,
    url: "https://scontent.fdps5-1.fna.fbcdn.net/v/t39.30808-6/245473923_117923633972000_5899590789944174360_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=dbeb18&_nc_eui2=AeEnYjZIzUR8KjMQZtjQb0RjcjUgWUZey71yNSBZRl7LvXlZR_ZyEaiQTsHX2lQddMx_uQq15ma1xUvBxn62I5o3&_nc_ohc=51i8xbzu9ygAX_QhjDb&_nc_ht=scontent.fdps5-1.fna&oh=00_AT8ShdsWeBxFvb4gQl3P-uRrCTJHEzKknXXF4Y00lB9Jkw&oe=625E5DBC",
  },
  {
    id: 'R',
    author: 'Lord Rangga',
    width: 5616,
    height: 3744,
    url: "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/09/24/14976380.jpg",
  },
  {
    id: 'D',
    author: 'Lord Luhut',
    width: 5616,
    height: 3744,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9_q1grzUVRJkdX8Jts9X3_XvuLWVffD4Gw&usqp=CAU",
  },
  {
    id: 'M',
    author: 'Uciha Madara',
    width: 5616,
    height: 3744,
    url: "https://i.ytimg.com/vi/vtOnEaYRMGM/maxresdefault.jpg",
  },
  {
    id: 'C',
    author: 'Czar Aditya_Eka',
    width: 5616,
    height: 3744,
    url: "https://netflix-news.atsit.in/id/wp-content/uploads/2022/01/anime-leveling-solo-secara-resmi-dikonfirmasi-oleh-pencipta-dengan-tanggal-rilis-2022.jpg",
  },
]