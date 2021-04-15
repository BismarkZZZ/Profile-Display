import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, TextInput, Text, View, Image, ScrollView } from 'react-native';
import profile from "./assets/profile.jpg"
import { AntDesign } from '@expo/vector-icons'

export default function App() {
  return (
    <ScrollView style={styles.container} >

      <View>
        <Image source={profile} style={styles.profile} />
        <View style={styles.camtainer}>
          <AntDesign style={styles.camera} name='camera' size={40} color='#E7F2F8' />
        </View>
      </View>

      <View style={styles.detailarea}>

        <View>
          <Text style={styles.text}>School</Text>
          <TextInput style={styles.input}
            underlineColor='transparent'
            placeholder='enter school name'
            placeholderTextColor='#0c0003'
          />
        </View>

        <View>
          <Text style={styles.text}>Email Address</Text>
          <TextInput style={styles.input}
            underlineColor='transparent'
            placeholder='enter email here'
            placeholderTextColor='#0c0003'
          />
        </View>

        <View>
          <Text style={styles.text}>Name</Text>
          <TextInput style={styles.input}
            underlineColor='black'
            placeholder='enter email here'
            placeholderTextColor='#0c0003'
          />
        </View>

        <View>
          <Text style={styles.text}>Nickname (Optional)</Text>
          <TextInput style={styles.input}
            underlineColor='transparent'
            placeholder='enter email here'
            placeholderTextColor='#0c0003'
          />
        </View>

        <View>
          <Text style={styles.text}>Emergency Contact</Text>
          <TextInput style={styles.input}
            underlineColor='transparent'
            placeholder='enter number here'
            placeholderTextColor='#0c0003'
            keyboardType="numeric"
          />
        </View>
        

      </View>

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            UPDATE CONTACT
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  profile: {
    height: 175,
    width: 175,
    borderRadius: 85,
    marginTop: 50,
    alignSelf: "center"
  },
  camera: {
    alignSelf: 'center',
    margin:5
  },
  camtainer: {
    position: 'absolute',
    top: 165,
    left: 220,
    borderRadius:80,
    backgroundColor: "black"
  },
  detailarea: {
    alignSelf: 'flex-start',
    marginTop: 30,
    marginHorizontal:40,
    width: 280
  },
  input: {
    height: 25,
    width: "100%",
    fontSize: 19,
    marginLeft: 10,
    fontWeight: "bold"
  },
  text: {
    color: '#74BDCB',
    fontSize: 18,
    fontWeight: "bold",
    margin: 10
  },
  buttonContainer: {
    backgroundColor: '#6f1db7',
    height: 60,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginVertical: 30
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
});
