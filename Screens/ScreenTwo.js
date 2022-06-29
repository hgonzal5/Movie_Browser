import React, {useEffect, useState, Component, useRef} from 'react';
import { render } from 'react-dom';
import {View, Text, StyleSheet, ScrollView, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const image = { uri: 'https://dirtcheapmag.files.wordpress.com/2014/07/imageproxy1.jpg?w=584'};

const ScreenTwo = props => {
const flatListRef = useRef(null);

const [movies, setMovies] = useState([]);
const [page, setPage] = useState(1);
const [noResults, setNoResults] = useState(false);
const handleLoadMore = () => {
    setPage(page + 1);
 };
 
    useEffect(() => {

        
            const getMovies = async (movieName, page) => {

            const response = await fetch('http://www.omdbapi.com/?s=' + movieName + '&page='+ page + '&apikey=1a313033');
            const result = await response.json();

                if (result.Response == "False") {
                    console.log("Yuh Mutha")
                    setNoResults(true);
                } else {
                console.log(result);
                setMovies([...movies, ...result.Search]);
                console.log(movies);
                }
            


            };

        getMovies(props.route.params.movieName, page);
             
    },[page]);

    
 

     console.log(movies);

    if (noResults) {
        return (
        <View style={styles.noResultsContainer}>
        <Text style={styles.textNextToImage}>No Results Found Matching:</Text>
        <Text style={styles.textNextToImage2}>"{props.route.params.movieName}"</Text>
        </View>

        )
    }
    else {

    return (
        <ImageBackground source={image} style={styles.image} >
        <SafeAreaView style={styles.container}>
        <FlatList 
         ref={flatListRef}
         style={styles.movieList}
         data={movies}
         renderItem={({item}) => (
          
             <TouchableOpacity style={styles.movieDetailButton} onPress={() => {

                 props.navigation.navigate('ScreenThree', { movieName: item.Title, moviePoster: item.Poster, movieType: item.Type, movieYear: item.Year, movieId: item.imdbID, });

             }}>

                <View style={styles.imageTextContainer}>
                 <View style={styles.imageContainer}>
                     <Image
                         style={styles.tinyImage}
                         source={{ uri: item.Poster, }}
                     />
                </View>
                     <View style={styles.textNextToImageContainer}>
                         
                        <Text style={styles.textNextToImage}>{item.Title} ({item.Year})</Text>
                        
                     </View>
                     
                </View>
             </TouchableOpacity>
            
         )}
         keyExtractor={(item, index) => index.toString()}  
         onEndReached={handleLoadMore}
         onEndReachedThreshold={0.1}
         
        />
      </SafeAreaView>
    </ImageBackground>
    );
}
};


const styles = StyleSheet.create({
    image: {
        flex: 1,
        
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column',
    
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
    },
   noResultsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#00d8d6',
    },
    movieDetailButton: {
       flex: 1,
       flexDirection: 'row',
        backgroundColor: '#00d8d6',
        padding: 10,
        borderWidth: .4,
        height: 180,
        width: deviceWidth,
       
        
      },
      imageTextContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        
        
      },
      imageContainer: {
         justifyContent: 'center',
        alignItems: "center",
   
    },
    tinyImage: {
     
        width: 100,
        height: 200,
        padding: 0,
        resizeMode: 'contain',
        
    },
   
    textNextToImage: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textShadowOffset: {
            height: 0,
            width: 0
        },
        textShadowColor: 'black',
        textShadowRadius: 4,
        

    },
    textNextToImage2: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        textShadowOffset: {
            height: 0,
            width: 0
        },
        textShadowColor: 'white',
        textShadowRadius: 4,
        

    },
    textNextToImageContainer: {
        justifyContent: 'center',
       padding:10,
        width: deviceWidth/1.5,
        
    }

});

export default ScreenTwo;