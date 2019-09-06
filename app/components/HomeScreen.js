import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import profile from "../screens/profile";
import upload from "../screens/upload";
import feed from "../screens/feed";
const TabNavigator = createBottomTabNavigator({
    Feed : feed,
    Upload : upload,
    Profile : profile
});

export default createAppContainer(TabNavigator);
