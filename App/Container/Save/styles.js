
import { normalizeHeight, normalize } from '../../Theme/Metrics'
import { Colors } from '../../Theme/'

export default {
  container: {
    flex: 1,
  },
  viewWraper: {
    flexDirection: 'row',
    height: normalizeHeight(80),
    marginVertical: normalizeHeight(10),
    backgroundColor: 'white',
    paddingHorizontal: normalize(10),

    shadowColor: 'rgba(79,101,130,0.41)',
    // shadowColor: 'red',

    shadowOpacity: 1,
    shadowOffset: { width: 1, height: 0 },
    shadowRadius: 10,

  },
  viewImage: {
    flex: 1,
  },
  viewText: {
    flex: 3,
    paddingVertical: normalize(8),
    flexDirection: 'row',
  },
  info: {
    flex: 1,
  },
  iconHeart: {
    marginHorizontal: normalize(10),
  },
  name: { fontSize: normalize(11), fontWeight: '600', color: '#4A4A4A' },
  location: { fontSize: normalize(10), color: '#9B9B9B', marginTop: normalizeHeight(3) },

  image: { height: '100%', width: '100%', resizeMode: 'cover', borderRadius: normalize(5) },
  wrapImage: {
    padding: normalize(8),
  },
  mgHoz: { marginHorizontal: normalize(5), color: Colors.primary, fontSize: normalize(10), fontWeight: '600' },
  mgLef: { marginLeft: normalize(5), color: Colors.primary, fontSize: normalize(10), fontWeight: '600' },
  colorPrimary: { color: Colors.primary, fontSize: normalize(10), fontWeight: '600' },
}