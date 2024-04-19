import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const SignInScreen = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const navigation = useNavigation();

    const backgroundUrl = "https://wallpapercave.com/wp/wp6532227.png";

    const handleSignIn = () => {
        if (mobileNumber.trim() === '') {
            Alert.alert('Error', 'Please enter your mobile number.');
            return;
        }

        
        const signInSuccessful = true;

        if (signInSuccessful) {
           
            navigation.navigate('Home');
        } else {
            Alert.alert('Sign In', 'Sign in failed. Please try again.');
        }
    };

    return (
        <ImageBackground
            source={{uri : backgroundUrl}}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>Sign In</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your mobile number"
                    keyboardType="phone-pad"
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                />

                <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <TouchableOpacity style = {styles.terms} onPress={() => Alert.alert('Terms & Conditions', 'Display terms and conditions here.')}>
                        <Text style={styles.footerText}>By clicking, I accept the Terms & Conditions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.offer} onPress={() => Alert.alert('Offers', 'Display offers here.')}>
                        <MaterialIcons name="local-offer" size={24} color="black" />
                        <Text style={styles.footerText}>Offers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.offer} onPress={() => Alert.alert('Feedback', 'Display feedback options here.')}>
                        <FontAwesome6 name="feed" size={24} color="black" />
                        <Text style={styles.footerText}>Feedback</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    signInButton: {
        backgroundColor: '#f0b639',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    footer: {
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    footerText: {
        color: '#007BFF',
        fontSize: 14,
    },
    offer:{
        flexDirection : 'row',
        backgroundColor : '#e3e8e5',
        marginBottom : 10,
        padding :10,
        color: "black",
        gap : 5,
    },
    terms:{
        textAlign:"center",
        marginBottom : 10,
    }
});

export default SignInScreen;
