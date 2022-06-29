import React, {useState,useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button, TextInput, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';

const image = { uri: "https://pbs.twimg.com/media/ES2D5RIXgAETJ7D.jpg" };


const ScreenOne = props => {

    const [movieName, setMovieName] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const handleSearchBar = userInput => {

    }

    useEffect(() => {

        if (movieName.length > 0){
            setIsFormValid(true);
        }
        else {
            setIsFormValid(false);
        }

    },[movieName]);

    return (
    <SafeAreaView style={styles.safeAreaView}>
        <TouchableWithoutFeedback style={styles.hideKeyboard} onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground source={image} style={styles.image} >
        
           
            <View style={styles.searchBarContainer}>
                
                <TextInput style={styles.searchBar} placeholder="Movie name" value={movieName} onChangeText={(text) => setMovieName(text)} />
                
                <Button style={styles.submitButton} title="Search for movies" onPress={() => {
                  
                  props.navigation.navigate('ScreenTwo', {movieName: movieName});

                }} color={`#00d8d6`} disabled={!isFormValid} />
                
            </View>
           
        
        
        </ImageBackground>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </SafeAreaView>
        
    );

};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
      },
      hideKeyboard: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
container: {
    flex:1,   
},
searchBar: {
    flex: 0,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ffff',
    minWidth: 50,
    marginTop: 20,
    marginHorizontal: 20, 
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    height: 45,
    width: 300,
    
    
},
searchBarContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  
},
image: {
    flex: 1,
    //position: 'absolute',
    //opacity: 0.8,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column',

},

});

export default ScreenOne;