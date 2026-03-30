// TraceScreen.js
// Placeholder screen for the tracing workspace.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TraceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trace Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});
