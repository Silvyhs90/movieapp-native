import React from 'react'
import { StyleSheet,Text, View, Image } from 'react-native';

const IMG_API="https://image.tmdb.org/t/p/w1280";

export const Movie = ({title, poster_path, overview, vote_average, release_date}) => {

 

    return (

    <View style={styles.container,styles.result}>
        <Image
         source={{uri: IMG_API+poster_path}}
         style={{
          width: 350, height: 500, marginBottom: 10
        }}
        resizeMode="cover"
        />
        <Text style={styles.heading}>{title}</Text>
            <Text style={styles.heading}>{release_date}</Text>
            <Text style={styles.heading}>{vote_average}</Text>
            <Text style={styles.plot}>Sinopsis</Text>
            <Text style={styles.heading}>{overview}</Text>
    </View>
    );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#22254b',
      alignItems:'center',
      justifyContent:'flex-start',
      paddingTop: 70,
      paddingHorizontal:20,
    },
    title:{
    color:'#FFF',
    fontSize: 40,
    fontWeight: '700',
    textAlign:'center',
    marginBottom: 20,
    },
    result:{
      flex:1,
      width: '100%',
      marginBottom:20
    },
    heading:{
      color: '#FFF',
      fontSize:18,
      fontWeight: '700',
      padding: 10,
      backgroundColor:'#393E40'
    },
    plot:{
      color: '#FFF',
      fontSize:30,
      fontWeight: '700',
      padding: 10,
      backgroundColor:'#393E40'
    }

})