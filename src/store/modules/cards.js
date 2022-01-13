export const cards = {
  namespaced: true,
  state: {
    cards: [],
    activeCard: null
  },
  getters: {
    getCards: state => state['cards'],
    getActiveCard: state => state['activeCard']
  },
  actions: {
    addCard: function ({ commit }, card) {
      commit('ADD_CARD', card);
    },
    setActiveCard: function ({ commit }, card) {
      commit('SET_ACTIVE_CARD', card);
    },
    toggleCardInfoVisibility: function ({ commit }, card) {
      commit('TOGGLE_CARD_INFO_VISIBILITY', card);
    },
    removeCard: function ({ commit }, card) {
      commit('REMOVE_CARD', card);
    },
    toggleCardActiveState: function ({ commit }, card) {
      commit('TOGGLE_CARD_ACTIVE_STATE', card);
    }
  },
  mutations: {
    ADD_CARD: function (state, card) {
      state['cards'].push(card);
    },
    REMOVE_CARD: function (state, card) {
      let cardIndex = state['cards'].findIndex(sc => sc['uuid'] === card['uuid']);
      if (cardIndex > -1) {
        state['cards'].splice(cardIndex, 1);
      }
    },
    TOGGLE_CARD_ACTIVE_STATE: function (state, card) {
      let userCard = state['cards'].find(sc => sc['uuid'] === card['uuid']);
      if (userCard) {
        userCard['active'] = !userCard['active'];
      }
    },
    SET_ACTIVE_CARD: function (state, card) {
      let userCard = state['cards'].find(sc => sc['uuid'] === card['uuid']);
      if (userCard) {
        state['activeCard'] = userCard;
      }
    },
    TOGGLE_CARD_INFO_VISIBILITY: function (state, card) {
      let userCard = state['cards'].find(sc => sc['uuid'] === card['uuid']);
      if (userCard) {
        userCard['showCardInfo'] = !userCard['showCardInfo'];
      }
    }
  }
};
