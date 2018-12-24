
import { normalizeHeight, normalize } from '../../Theme/Metrics'
import { Colors, Metrics } from '../../Theme/'

export default {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionImage: {
    height: normalizeHeight(200),
    firstView: {
      flexDirection: 'row', flex: 1,
      marginHorizontal: normalize(15), marginTop: normalizeHeight(15),
    },
    viewWrapImage: {
      justifyContent: 'center', alignItems: 'center', width: normalize(50), height: normalize(50),
      borderColor: Colors.white, borderWidth: 2,
      borderRadius: normalize(25),
    },
    viewRight: { marginHorizontal: normalize(10) },
    firstTextViewRight: { fontSize: normalize(14), color: Colors.white, fontWeight: '700' },
    viewMember: { flexDirection: 'row', marginTop: normalizeHeight(5) },
    textViewMember: { marginLeft: normalize(10), fontSize: normalize(12), color: Colors.white, fontWeight: '700' },
    secondView: { marginHorizontal: normalize(15), marginBottom: normalizeHeight(5) },
    textHello: {
      fontSize: normalize(15),
      color: Colors.white, fontWeight: '700',
    },

    viewSearch: {
      flexDirection: 'row', marginVertical: normalizeHeight(10),
      backgroundColor: Colors.white, paddingHorizontal: normalize(15),
      paddingVertical: normalizeHeight(12), borderRadius: normalize(23),
    },
  },
  sectionLocation: {
    viewWrap: { marginVertical: normalizeHeight(15) },
    viewItemWrap: {
      marginHorizontal: normalize(10),
      width: normalize(50), height: normalize(50), borderRadius: normalize(25),
      justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.white,
    },
    image: { width: '100%', height: '100%', resizeMode: 'cover', borderRadius: normalize(25) },
    city: { textAlign: 'center', marginTop: normalizeHeight(10) },
  },
  sectionHotDeal: {
    viewWrap: {
      marginTop: normalizeHeight(10), marginLeft: normalize(10),
    },
    viewItemWrap: {
      height: normalize(120), width: normalize(110), marginRight: normalize(10),
    },
    image: {
      height: '100%', width: '100%', resizeMode: 'cover', borderRadius: normalize(5),

    },
  },
  recommend: {
    viewWrap: {
      marginTop: normalizeHeight(10), marginLeft: normalize(10),
    },
    viewItemWrap: {
      height: normalize(120), width: normalize(180), marginRight: normalize(10),
    },
    name: { fontSize: normalize(14), color: '#43536D', fontWeight: '700', marginTop: normalizeHeight(8) },
    location: { fontSize: normalize(13), fontWeight: '300', marginTop: normalizeHeight(3) },

  },
  plus: {
    viewWrap: {
      marginTop: normalizeHeight(10), marginHorizontal: normalize(10),
    },
    viewItemWrap: {
      height: (Metrics.screenWidth) / 2, width: Metrics.screenWidth - normalize(20),
    },
    image: {
      height: '100%', width: '100%', resizeMode: 'cover',
    },
  },
  title: {
    color: '#43536D',
    fontSize: normalize(16),
    fontWeight: 'bold', marginBottom: normalizeHeight(10),
  },
  imageBackground: {
    width: '100%', height: '100%',
  },
}