
import { normalizeHeight, normalize } from '../../Theme/Metrics'
import { Colors } from '../../Theme/'

export default {
  container: {
    flex: 1,
  },
  textFilter: {
    flex: 1,
    color: '#A6A6A6',
    fontSize: normalize(13),
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
  },
  info: {
    flex: 1, borderRadius: 1,
  },
  info2: {
    flex: 1, flexDirection: 'row',
  },
  dashed: {
    borderWidth: 1, borderColor: '#B4B4B4', borderStyle: 'dashed',
    borderRadius: 1, marginTop: normalizeHeight(10),
  },
  icon: {
    marginHorizontal: normalize(10),
  },
  name: { fontSize: normalize(11), fontWeight: '600', color: '#4A4A4A' },
  checkout: { fontSize: normalize(10), color: '#B4B4B4', marginTop: normalizeHeight(3) },
  checkin: { fontSize: normalize(10), color: '#B4B4B4' },
  viewCheckIn: { marginTop: normalizeHeight(5) },
  image: { height: '100%', width: '100%', resizeMode: 'cover', borderRadius: normalize(5) },
  wrapImage: {
    padding: normalize(8),
  },
  mgHoz: { marginHorizontal: normalize(5), color: Colors.primary, fontSize: normalize(10), fontWeight: '600' },
  mgLef: { marginLeft: normalize(5), color: Colors.primary, fontSize: normalize(10), fontWeight: '600' },
  colorPrimary: { color: Colors.primary, fontSize: normalize(10), fontWeight: '600' },
}