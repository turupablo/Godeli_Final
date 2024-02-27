import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { LogBox } from 'react-native';

/* LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreLogs(['source.uri ']);
LogBox.ignoreLogs(['ReactImageView: ']); */


const TabsNav = () => {
    return (
        <Tabs
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderLeftWidth: 0.2,
                    borderRightWidth: 0.2,
                },
            }}
        >
            <Tabs.Screen name="HomeScreen" options={{
                tabBarIcon: ({ focused }) => {
                    return <Feather name="home" size={30} color={
                        focused ? "#129575" : "#DBEBE7"
                    } />
                }
            }}
            />
            <Tabs.Screen name="MisRecetasScreen" options={{
                // headerShown:true,
                tabBarIcon: () => {
                    return <MaterialCommunityIcons name="chef-hat" size={35} color='white'
                        style={{
                            borderRadius: 90,
                            borderColor: '#129575',
                            width: 70,
                            height: 70,
                            borderWidth: 8,
                            backgroundColor: '#129575',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            marginBottom: 25,
                        }}
                    />
                },
                unmountOnBlur: true
            }}

            />
            <Tabs.Screen name="FavoritosScreen" options={{
                tabBarIcon: ({ focused }) => {
                    return <Fontisto name="favorite" size={30} color={
                        focused ? "#129575" : "#DBEBE7"
                    } />
                }
            }}
            />
            <Tabs.Screen name='ProfileScreen' options={{
                tabBarIcon: () => null,
                tabBarItemStyle: {
                    position: 'absolute'
                }
                }} />
            <Tabs.Screen name='RecipeScreen' options={{
                tabBarIcon: () => null,
                tabBarItemStyle: {
                    position: 'absolute'
                },
                unmountOnBlur: true,
                }} />
            <Tabs.Screen name='MisRecetasCreadasScreen' options={{
                tabBarIcon: () => null,
                tabBarItemStyle: {
                    position: 'absolute'
                },
                unmountOnBlur: true,
                }} />
        </Tabs>
    );
}

export default TabsNav
