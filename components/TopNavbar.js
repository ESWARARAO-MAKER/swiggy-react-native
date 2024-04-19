import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

function CustomNavbar() {
    return (
        <View style={styles.navbarContainer}>
            <View>
                <View style={styles.locationContainer}>
                    <Ionicons name="location-outline" size={24} color="#f0b639" />
                    <Text style={styles.locationText}>Home - Hyderabad</Text>
                    <Ionicons name="chevron-down" size={20} color="#333" style={styles.chevronIcon} />
                </View>
                <View>
                    <Text>Madhura nagar, Home</Text>
                </View>
            </View>

            
            <TouchableOpacity style={styles.profileContainer}>
                <Ionicons name="person" size={24} color="white" backgroundColor = "black" style = {styles.person} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#333',
    },
    chevronIcon: {
        marginLeft: 4,
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 18, 
    },
    person:{
        borderRadius: 999,
        padding : 5,
    },
});

export default CustomNavbar;
