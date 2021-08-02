import * as React from 'react';
import {StyleSheet, Text, View , Image, ScrollView, TextInput, Button} from 'react-native';
import 'react-native-gesture-handler';
import { TvShow } from '../components/TvShow'


export const TvScreen= ({ navigation }) => {
    const FEATURED_API = "https://api.themoviedb.org/3/discover/tv?sort_by=name&api_key=600d38b9ea12ad8eed83670ed81d230c&page=1";
    const SEARCH_API = "https://api.themoviedb.org/3/search/tv?api_key=600d38b9ea12ad8eed83670ed81d230c&query=";
    
    const [tvShow, setTvShow] = React.useState([]); 
    const [state, setState] = React.useState({
       s:"Enter a Tv Show..",
       results:[]
     });
    
    
    React.useEffect(() => {
      fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setTvShow(data.results);
      });
  }, []);
  
  
  
  const handleOnsubmit = (e) => {
    e.preventDefault();
  
    fetch(SEARCH_API + state.s)
    .then((res) => res.json())
    .then((data) => {
      const results= data.results
      setTvShow(data.results)
    })
  }
  
  
    return (
     
      <View style={styles.container}>
        <Text style={styles.title}>TvShows Search</Text>
      <TextInput
      style={styles.searchbox}
      onChangeText={text => setState(prevState => {
          return {...prevState, s: text}
      })}
      onSubmitEditing={handleOnsubmit}
      value={state.s}
      />    
      <ScrollView style={styles.results}>
       {tvShow && tvShow.map((tvShow) => <TvShow key={tvShow.id} {...tvShow}/>)}
      </ScrollView>
      <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Inicio')}
        />
      <Button
          title="Movie Section"
          onPress={() => navigation.navigate('Movie')}
        />
      </View>
      
      
    );
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#19213B',
      alignItems:'center',
      justifyContent:'flex-start',
      paddingTop: 70,
      paddingHorizontal:20,
    },
    title:{
    color:'#FFF',
    fontSize: 32,
    fontWeight: '700',
    textAlign:'center',
    marginBottom: 20,
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
    },
  })