import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import HomeActionButton from '../components/HomeActionButton';
import colors from '../constants/colors';
import sharedStyles from '../constants/styles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) => [styles.settingsButton, pressed && styles.settingsButtonPressed]}
          onPress={() => navigation.navigate('Settings')}
          accessibilityRole="button"
          accessibilityLabel="Open Settings"
        >
          <Text style={styles.settingsIcon}>⚙️</Text>
        </Pressable>

        <View style={styles.headerArea}>
          <Text style={styles.title}>LightTrace</Text>
          <Text style={styles.subtitle}>Turn your iPad into a light table</Text>
        </View>

        <View style={styles.actionsArea}>
          <HomeActionButton label="Start Tracing" onPress={() => navigation.navigate('Import')} />
          <HomeActionButton label="Templates" onPress={() => navigation.navigate('Trace')} />
          <HomeActionButton label="Camera Trace" onPress={() => navigation.navigate('Import')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: sharedStyles.screenPaddingLg,
    paddingTop: 20,
    paddingBottom: 24,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  settingsButton: {
    position: 'absolute',
    right: sharedStyles.screenPaddingLg,
    top: 12,
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface,
    zIndex: 10,
  },
  settingsButtonPressed: {
    opacity: 0.8,
  },
  settingsIcon: {
    fontSize: 23,
  },
  headerArea: {
    width: '100%',
    maxWidth: 760,
    marginTop: 36,
    alignItems: 'center',
  },
  title: {
    fontSize: 54,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: 0.2,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '400',
    color: colors.subtleText,
    textAlign: 'center',
    lineHeight: 30,
  },
  actionsArea: {
    width: '100%',
    maxWidth: 760,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginTop: 34,
  },
});
