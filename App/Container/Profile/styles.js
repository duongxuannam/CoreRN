import { normalizeHeight, normalize } from '../../Theme/Metrics'
import { Colors } from '../../Theme'

export default {
  container: { flex: 1 },
  wrapInfo: { height: normalizeHeight(170), marginHorizontal: normalize(20) },
  wrapInfo2: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  wrapText: { flex: 1, marginLeft: normalize(20) },
  name: { fontSize: normalize(15), color: '#4A4A4A', fontWeight: '800' },
  wrapTextInfo: { flexDirection: 'row', marginTop: normalizeHeight(4), alignItems: 'center' },
  coins: { height: normalize(15), width: normalize(15), resizeMode: 'contain' },
  member: {
    marginLeft: normalize(8), color: Colors.primary,
    fontSize: normalize(13), fontWeight: '600',
  },
  sectionLabel: {
    flex: 0.8, backgroundColor: 'rgb(242,242,242)', borderRadius: normalize(5),
    borderColor: 'rgb(227,228,229)',
    shadowColor: 'rgb(227,228,229)',
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1.5 },
    shadowRadius: 10,
    elevation: 1,
    flexDirection: 'row',
    paddingVertical: normalizeHeight(10),
    justifyContent: 'space-around',
    paddingHorizontal: normalize(10),
  },
  wrapIconLabel: { alignItems: 'center', justifyContent: 'center' },
  iconLabel: {
    height: normalize(30),
    width: normalize(30),
    resizeMode: 'contain',
  },
  textIconLabel: {
    fontSize: normalize(14), color: Colors.primary, textAlign: 'center',
    marginTop: normalizeHeight(8), fontWeight: '700',
  },
  wrapSectionEdit: { flex: 1, marginHorizontal: normalize(20) },
  sectionLogout: {
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: normalize(5),
    marginVertical: normalizeHeight(20),
    paddingVertical: normalizeHeight(10),
    flexDirection: 'row',
  },
  logoLogout: { height: normalize(18), width: normalize(18), resizeMode: 'contain' },
  textLogout: {
    marginLeft: normalize(10), fontSize: normalize(15),
    color: '#464646', fontWeight: '500',
  },
  wrapViewItemEdit: {
    paddingVertical: normalizeHeight(15)
    , flexDirection: 'row',
  },
  wrapIconEdit: { marginRight: normalize(15), justifyContent: 'center' },
  iconEdit: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
  labelIconEdit: { fontSize: normalize(13), color: '#4A4A4A', fontWeight: '400' },
  descriptionEdit: { fontSize: normalize(11), color: '#777777', marginTop: normalizeHeight(3) },
  iconArrow: { marginLeft: normalize(5), justifyContent: 'center' },
}