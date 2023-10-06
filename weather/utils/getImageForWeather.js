/* eslint-disable global-require */

const images = {
  Clear: require('../assets/clear.png'),
  Hail: require('../assets/hail.png'),
  'Overcast': require('../assets/heavy-cloud.png'),
  'Partly cloudy': require('../assets/light-cloud.png'),
  'Heavy rain': require('../assets/heavy-rain.png'),
  'Light rain': require('../assets/light-rain.png'),
  Showers: require('../assets/showers.png'),
  Sleet: require('../assets/sleet.png'),
  Snow: require('../assets/snow.png'),
  Thunder: require('../assets/thunder.png'),
};

export default weather => images[weather];
