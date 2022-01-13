<template>
  <div>
    <div
      class="flex-box justify-center"
    >
      <div>
        <div
          style="width:330px"
        >
          <div
            class="flex-box align-center justify-end text-success font-small text-bold"
            style="margin-bottom:-10px;"
          >
            <span
              class="pointer-cursor card-info-toggle pt-8 pb-15 ph-15 radius-5"
              @click="showActiveCardInfo"
            >
              <i
                :class="activeCard['showCardInfo']?'fas fa-eye-slash':'fas fa-eye'"
              />
              <span
                class="ml-5"
              >
                {{ activeCard['showCardInfo']?'Hide':'Show' }} card number
              </span>
            </span>
          </div>
          <div
            class="flex-box"
          >
            <card
              :card="activeCard"
              style="margin-top:0px;"
            />
          </div>
          <div
            class="flex-box justify-center align-center mt-10"
          >
            <span
              :class="(activeCardIndex>0?'text-success-lite hover-text-success':'text-secondary-lite no-click')"
              class="ph-4 radius-10 ml-5 pointer-cursor"
              @click="setActiveCardIndex(activeCardIndex-1)"
            >
              <i class="fas fa-angle-left font-small"/>
            </span>
            <template>
              <span
                class="bg-success pv-3 ph-8 radius-5 ml-5 mt-3"
                style="height:2px"
              />
            </template>
            <span
              :class="((activeCardIndex<(cards.length-1))
                ?'text-success-lite hover-text-success'
                :'text-secondary-lite no-click')"
              class="ph-4 radius-10 ml-5 pointer-cursor"
              @click="setActiveCardIndex(activeCardIndex+1)"
            >
              <i class="fas fa-angle-right font-small"/>
            </span>
          </div>
        </div>
      </div>
      <div
        class="card-actions-container"
      >
        <active-card-actions/>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@components/card/Card';
import ActiveCardActions from '@components/card/ActiveCardActions';
import { sampleDataGenerator } from '@mixins/sampleDataGenerator';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'CardsRenderer',
  components: {
    Card,
    ActiveCardActions
  },
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  },
  mixins: [sampleDataGenerator],
  data: function () {
    return {
    };
  },
  computed: {
    ...(mapGetters({
      transactions: 'transactions/getTransactions',
      activeCard: 'cards/getActiveCard'
    })),
    cardTransactions: function () {
      return this.transactions
        .filter(transaction => transaction['card'] === this.activeCard['uuid'])
        .slice(0, 3);
    },
    activeCardIndex: function () {
      return this.cards.findIndex(card => card['uuid'] === this.activeCard['uuid']);
    }
  },
  methods: {
    ...(mapActions({
      setActiveCard: 'cards/setActiveCard',
      toggleCardInfoVisibility: 'cards/toggleCardInfoVisibility'
    })),
    setActiveCardIndex: function (cardIndex) {
      let card = this.cards[cardIndex];
      this.setActiveCard(card);
    },
    showActiveCardInfo: function () {
      this.toggleCardInfoVisibility(this.activeCard);
    }
  }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width:1080px){
  .card-info{
    padding-top:20px;
    background:white;
  }
  .card-info-toggle{
    background:white;
  }

  .card-details-container{
    background:white;
  }
  .card-actions-container{
    margin-top:20px;
    width:100%;
    background:#edf3ff;
    border-radius:20px 20px 0 0;
  }
}
</style>
