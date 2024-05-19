import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer} >
      <View style={styles.container}>
        <Image
          source={require('./assets/vivid-blurred-colorful-wallpaper-background.jpg')}
          style={styles.Banner} />
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle} >Sign in to your account</Text>
        <TextInput style={styles.TextInput}
          placeholder='jimena@gmail.com' />
        <TextInput style={styles.TextInput}
          placeholder='password'
          secureTextEntry={true}
        />

        <Text style={styles.forgotPassword}>Forgot your password</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Don't have an account</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    color: '#34434D',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  TextInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  Banner: {
    width: '100%',
    height: 340,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
  },

  button: {
    marginTop: 40,
    backgroundColor: '#FFAD01',
    width: 200,
    height: 50,
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',

  },

});
