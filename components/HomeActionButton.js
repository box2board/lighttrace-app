import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import colors from '../constants/colors';
import sharedStyles from '../constants/styles';

export default function HomeActionButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: 88,
    borderRadius: sharedStyles.borderRadiusLg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  buttonPressed: {
    opacity: 0.86,
  },
  label: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
