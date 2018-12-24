
import { normalizeHeight, normalize } from '../../Theme/Metrics'
import { Colors } from '../../Theme/'

export default {
  container: {
    height: normalizeHeight(60),
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: normalize(15),
  },
}