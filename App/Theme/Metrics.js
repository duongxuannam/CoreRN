import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window')

const scale = width/ 320
const normalize = (size) => {
  return Math.round(scale * size)
}
const scaleHeight = height/568
const normalizeHeight = (size) => Math.round(scaleHeight * size)

const metrics = {
  normalize,
  normalizeHeight,
  screenWidth: width,
  screenHeight: width < height ? height : width,
}

export default metrics
