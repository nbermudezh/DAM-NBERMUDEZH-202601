import { StyleSheet } from 'react-native';
import { colors, space } from '../../../Themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  title: {
    fontSize: 28,
    marginBottom: space.large,
  },

  button: {
    backgroundColor: colors.primary,
    padding: space.medium,
    borderRadius: 8,
    marginTop: space.medium,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});