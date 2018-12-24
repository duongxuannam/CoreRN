import { normalizeHeight, normalize } from '../../Theme/Metrics'
import { Colors } from '../../Theme'

export default {
  container: { flex: 1 },
  notification: {
    wrap: {
      flexDirection: 'row',
      paddingBottom: normalizeHeight(10),
      borderBottomColor: '#E0E0E0', borderBottomWidth: 1,
      marginTop: normalizeHeight(10),
    },
    wrapImage: { height: normalizeHeight(60), width: normalizeHeight(60) },
    image: { height: '100%', width: '100%', resizeMode: 'cover', borderRadius: normalize(4) },
    wrapInfo: { flex: 1, flexDirection: 'row', marginLeft: normalize(10) },
    fontText: { fontSize: normalize(13), color: '#4E4E4E', flex: 1 },
    viewIcon: { marginLeft: normalize(10) },
    wrapList: { flex: 1, marginHorizontal: normalize(20) },
  },

  message: {
    wrap: {
      flexDirection: 'row',
      paddingBottom: normalizeHeight(10),
      borderBottomColor: '#E0E0E0', borderBottomWidth: 1,
      marginTop: normalizeHeight(10),
    },
    wrapImage: { height: normalizeHeight(60), width: normalizeHeight(60), justifyContent: 'center', alignItems: 'center' },
    image: { height: normalizeHeight(48), width: normalizeHeight(48), borderRadius: normalizeHeight(24), resizeMode: 'cover' },
    wrapInfo: { flexDirection: 'row', marginLeft: normalize(10), flex: 1 },
    wrapText: { flex: 1 },
    fontName: { fontSize: normalize(13), color: Colors.primary, marginBottom: normalizeHeight(5) },
    fontText: { fontSize: normalize(13), color: '#565656' },
    viewIcon: { marginLeft: normalize(10) },
    wrapList: { flex: 1, marginHorizontal: normalize(20) },
  },
}