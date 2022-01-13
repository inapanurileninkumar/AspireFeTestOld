import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@assets/sass/grid.scss';
import '@assets/sass/theme.scss';
import '@assets/sass/scrollbars.scss';
import '@assets/sass/global_styles.scss';
import '@assets/font-awesome/css/all.min.css';

import { globalMixins } from '@mixins/globalMixins';

Vue.mixin(globalMixins);
Vue.filter('humanDate', function (timestamp,
  getYear = true,
  getMonth = true,
  getDay = true,
  getTime = true,
  getHours = true,
  getMins = true,
  getSeconds = true,
  getAmPm = true
) {
  if (!timestamp) return '';
  let humanDate = '';
  let date = new Date(timestamp);
  let hrs = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hrs > 12 ? 'PM' : 'AM';
  hrs = hrs % 12;
  if (minutes < 10)minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  if (!hrs) hrs = 12;
  let dateFormat = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
  let today = new Date();
  let todayFormat = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  let yesterdayFormat = yesterday.getDate() + '-' + yesterday.getMonth() + '-' + yesterday.getFullYear();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let tomorrowFormat = tomorrow.getDate() + '-' + tomorrow.getMonth() + '-' + tomorrow.getFullYear();
  let time = '';
  if (getTime) {
    if (getHours)time += hrs;
    if (getMins)time += ':' + minutes;
    if (getSeconds)time += ':' + seconds;
    if (getAmPm)time += '' + ampm;
  }
  if (todayFormat === dateFormat) {
    humanDate = time + ' Today';
  } else if (dateFormat === yesterdayFormat) {
    humanDate = time + ' Yesterday';
  } else if (dateFormat === tomorrowFormat) {
    humanDate = time + ' Tomorrow';
  } else {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (getYear) { humanDate = date.getFullYear(); }
    if (getMonth) { humanDate += '-' + monthNames[date.getMonth()]; }
    if (getDay) { humanDate += '-' + date.getDate(); }
    if (getTime) { humanDate += '  ' + time; }
  }
  return humanDate;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
