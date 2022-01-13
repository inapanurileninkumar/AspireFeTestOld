import Vue from 'vue';
import Vuex from 'vuex';

// MODULES
import { cards } from './modules/cards';
import { transactions } from './modules/transactions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cards,
    transactions
  }
});
