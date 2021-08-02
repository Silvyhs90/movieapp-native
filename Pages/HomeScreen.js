import * as React from 'react';
import {StyleSheet, Text, ScrollView, Button, ImageBackground, Image} from 'react-native';
import 'react-native-gesture-handler';
import { Movie } from '../components/Movie'
import { StatusBar } from 'expo-status-bar';

export const HomeScreen= ({ navigation }) => {
    const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=600d38b9ea12ad8eed83670ed81d230c&page=2";  
    const FEATURED_API2 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=600d38b9ea12ad8eed83670ed81d230c&page=1";  
    const [movies, setMovies] = React.useState([]); 

    React.useEffect(() => {
      fetch(FEATURED_API2+ FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
              setMovies(data.results);
      });
  }, []);
  
    return (
     
      <ImageBackground
       style={styles.container}
        source={require("../assets/wallpaper.png")}
        >
        <Text style={styles.title}>The Movie DB</Text>
      <ScrollView style={styles.results}>
      <Image
          style={{width: '100%', height: 500}}
          source={require("../assets/movie.png")}
          resizeMode="cover"
        />
        <Text style={styles.plot}>Natasha Romanoff, also known as Black Widow, 
        confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. 
        Pursued by a force that will stop at nothing to bring her down, 
        Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.</Text>
        <Text style={styles.title2}>Movies By Top Rated</Text>
       {movies && movies.map((movie) => <Movie key={movie.id} {...movie}/>)}
      </ScrollView>
      <Button 
          title="Tv Shows Section"
          onPress={() => navigation.navigate('TvShow')}
        />
          <Button 
          title="Movies Section"
          onPress={() => navigation.navigate('Movie')}
        />
         <StatusBar style="dark"/>
      </ImageBackground>
      
    );
    
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#3F4763',
      alignItems:'center',
      justifyContent:'flex-start',
      paddingTop: 70,
      paddingHorizontal:20,
    },
    title:{
    color:'#FFF',
    fontSize: 35,
    fontWeight: '700',
    textAlign:'center',
    marginBottom: 20,
    paddingBottom: 20,
    },
    title2:{
      color:'#FFF',
      fontSize: 35,
      fontWeight: '500',
      marginBottom: 20,
      paddingBottom: 20,
      paddingTop:20,
      alignItems: 'flex-start',
      },
      plot:{
        color: '#FFF',
        fontSize:18,
        fontWeight: '700',
        padding: 10,
        backgroundColor:'#393E40',
        marginBottom: 5,
        paddingBottom: 10,
        },
    searchbox:{
    fontSize:20,
    fontWeight:'300',
    padding: 20,
    width:'100%',
    backgroundColor: '#FFF',
    borderRadius:8,
    marginBottom:40
    },
    results:{
      flex:1,
    }
  })