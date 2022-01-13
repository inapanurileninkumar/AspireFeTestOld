<template>

  <div
    class="pl-5 card-details-containe"
    style="min-width:330px;"
  >
    <collapse>
      <collapse-item
        header-class="radius-5 text-primary active-card-data-toggle"
        collapse-icon="fas fa-chevron-circle-down text-secondary"
        expand-icon="fas fa-chevron-circle-up text-secondary"
        class=""
        open
      >
        <div
          slot="header"
          class="p-15 font-medium"
        >
          <i
            class="far fa-bookmark"
          />
          <span
            class="ml-5"
          >
            Card Details
          </span>
        </div>
        <div
          class="bl-secondary-lite bb-secondary-lite br-secondary-lite radius-5"
          style="height:200px;"
        >
          <active-card-info
            :card="activeCard"
          />
        </div>
      </collapse-item>
      <collapse-item
        header-class="radius-5 text-primary active-card-data-toggle"
        collapse-icon="fas fa-chevron-circle-down text-secondary"
        expand-icon="fas fa-chevron-circle-up text-secondary"
        class="mt-20"
        open
      >
        <div
          slot="header"
          class="p-15 font-medium"
        >
          <i
            class="fas fa-exchange-alt"
          />
          <span
            class="ml-5"
          >
            Recent Transactions
          </span>
        </div>
        <div
          class="bl-secondary-lite bb-secondary-lite br-secondary-lite radius-5"
        >
          <transaction
            v-for="transaction in cardTransactions"
            :key="transaction['uuid']"
            :transaction="transaction"
            class="bb-secondary-lite"
          />
        </div>
        <div
          class="bg-success-layer flex-box justify-center text-success text-bold pv-10 radius-5
          pointer-cursor font-medium"
        >
          <span>View all card transactions</span>
        </div>
      </collapse-item>
    </collapse>
  </div>
</template>
<script>
import Collapse from '@components/utils/Collapse';
import CollapseItem from '@components/utils/CollapseItem';
import ActiveCardInfo from '@components/card/ActiveCardInfo';
import Transaction from '@components/transactions/CardTransaction';
import { mapGetters } from 'vuex';
export default {
  name: 'ActiveCardDetails',
  components: {
    Collapse,
    CollapseItem,
    ActiveCardInfo,
    Transaction
  },
  computed: {
    ...(mapGetters({
      transactions: 'transactions/getTransactions',
      activeCard: 'cards/getActiveCard'
    })),
    cardTransactions: function () {
      return this.transactions
        .filter(transaction => transaction['card'] === this.activeCard['uuid'])
        .slice(0, 5);
    },
    activeCardIndex: function () {
      return this.cards.findIndex(card => card['uuid'] === this.activeCard['uuid']);
    }
  }
};
</script>
<style lang="scss" >
@import '@assets/sass/variables.scss';
.active-card-data-toggle{
  background: rgba(map_get($colors,'primary'),0.1);
}
@media screen and (max-width:1080px){
  .active-card-data-toggle{
    background:#edf3ff;
  }
}
</style>
