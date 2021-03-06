import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {
  useFonts,
  Comfortaa_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/dev';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, Checkbox } from 'react-native-paper';


export default function RegisterScreen() {
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });
  
  const navigation = useNavigation();
  const [fname, setFirst] = React.useState('');
  const [lname, setLast] = React.useState('');
  //const [birthday, setBirthday] = React.useState(new Date());
  const [confirmAge, setConfirmAge] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [registerMessage, setRegisterMessage] = React.useState('');
  
  function navigateBack() {
    navigation.goBack();
  }

  function goToNextPage(fname, lname, birthday) {
    if (fname == "" || lname == "") {
      setRegisterMessage("Please fill in all fields");
    //} else if (calculateAge(birthday) < 18) {
    //  setRegisterMessage("Must be over 18 to create an account.");
    } else {
      navigation.navigate('RegisterScreen2', {firstName: fname, lastName: lname});
    }
  }

  /* TO BE ADDED
  function calculateAge(dob1){
    var today = new Date();
    var birthDate = new Date(dob1);  
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    console.log(age_now);
    return age_now;
  }
  */

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateBack()}>
        <Ionicons name="arrow-back"  size={30} color="back" />
      </TouchableOpacity>
      <Text style={styles.verticalDivider}></Text>
      <Text h1 style={styles.title}>Register</Text>
      <Text style={styles.verticalDivider}></Text>
          
      <TextInput
        style={{ alignSelf: 'stretch'}}
        label="First Name"
        value={fname}
        mode='outlined'
        onChangeText={fname => setFirst(fname)}
      />
      
      <Text style={styles.inputDivider}></Text>

      <TextInput
        style={{ alignSelf: 'stretch'}}
        label="Last Name"
        value={lname}
        mode='outlined'
        onChangeText={lname => setLast(lname)}
      />

      <Text style={styles.inputDivider} />

      <View style = {{flexDirection: "row"}}>
        <Text>Please confirm that you are over 18 years old.</Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
            setConfirmAge(!checked);
          }}
        />
      </View>

      <TouchableOpacity
        disabled = {confirmAge ? false : true}
        onPress={() => {goToNextPage(fname, lname)}}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>NEXT</Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 50, 
    fontFamily: 'Comfortaa_400Regular',
  },
  input:{
    padding: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 25
  },
   verticalDivider: {
    height:50,
  },
  inputDivider: {
    height:20,
  },
  loginButton: {
    backgroundColor: "black",
    borderColor:"black",
    alignSelf: 'stretch',
    height:50,
    borderWidth:3,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
  },
  loginButtonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Roboto_500Medium'
  }, 
});
  