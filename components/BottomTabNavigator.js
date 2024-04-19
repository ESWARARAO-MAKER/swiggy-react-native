import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

function BottomTabNavigator() {
    return (
        <View style={styles.navbarContainer}>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="home" size={24} color="#f0b639" />
                <Text style={styles.navItemText}>Swiggy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="restaurant" size={24} color="#f0b639" />
                <Text style={styles.navItemText}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="cart" size={24} color="#f0b639" />
                <Text style={styles.navItemText}>Instamart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="dinner-dining" size={24} color="#f0b639" />
                <Text style={styles.navItemText}>Dineout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="credit-card" size={24} color="#f0b639" />
                <Text style={styles.navItemText}>Credit Card</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    navItem: {
        alignItems: 'center',
    },
    navItemText: {
        marginTop: 4,
        color: '#000000',
        fontSize: 12,
        fontWeight: "600",
    },
});

export default BottomTabNavigator;
