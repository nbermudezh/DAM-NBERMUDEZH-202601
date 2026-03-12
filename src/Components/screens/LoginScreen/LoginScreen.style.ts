import { StyleSheet } from 'react-native';
import { colors, space } from '../../../Themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: space.large,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: space.medium,
    padding: space.small,
    borderRadius: 5,
  },

  button: {
    backgroundColor: colors.primary,
    padding: space.medium,
    borderRadius: 8,
  },

  buttonText: {
    color: colors.white,
    textAlign: 'center',
  },
});