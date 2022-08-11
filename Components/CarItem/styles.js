import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    height: '100%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  titles: {
    alignItems: 'center',
    width: '100%',
    marginTop: '30%',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
});

export default styles;
