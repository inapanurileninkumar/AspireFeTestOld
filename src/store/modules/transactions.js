export const transactions = {
  namespaced: true,
  state: {
    transactions: []
  },
  getters: {
    getTransactions: state => state['transactions']
  },
  actions: {
    addTransaction: function ({ commit }, transaction) {
      commit('ADD_TRANSACTION', transaction);
    }
  },
  mutations: {
    ADD_TRANSACTION: function (state, transaction) {
      state['transactions'].push(transaction);
    }
  }
};
