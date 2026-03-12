import { StyleSheet } from 'react-native';
import { colors, space } from '../../../Themes';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: space.large,
    backgroundColor: colors.background
  },

  input: {
    borderWidth: 1,
    borderColor: colors.black,
    marginBottom: space.medium,
    padding: space.small,
    borderRadius: 6,
    backgroundColor: colors.white
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: space.medium
  },

  button: {
    backgroundColor: colors.primary,
    padding: space.medium,
    borderRadius: 6,
    width: 70,
    alignItems: 'center'
  },

  buttonText: {
    color: colors.white,
    fontSize: 18
  },

  result: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: space.large
  }

});