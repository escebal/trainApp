import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
  },
  headerFormContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  forgotPassText: {
    color: '#ADA4A5',
  },
  footerContainer: {
    alignItems: 'center',
  },
  mediaContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mediaButton: {
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 14,
    backgroundColor: '#DDDADA',
  },
  loginContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  loginText: {
    color: '#125D98',
  },
});

export default styles;
