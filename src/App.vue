<template>
  <div id="app">
    <div
      class="flex-box"
      style="width:100vw"
    >
      <div
        class="col-xl-2_4 col-lg-2_4 sidebar-container"
      >
        <div
          class="max-allowed-container-screen bg-primary-dark text-white"
        >
          <div
            class="p-50"
          >
            <home-sidebar />
          </div>
        </div>
      </div>
      <div
        class="max-allowed-container-screen col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12
         overflow-y-auto invisibleScrollbar"
      >
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import HomeSidebar from '@components/HomeSidebar';
import { sampleDataGenerator } from '@mixins/sampleDataGenerator';
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    HomeSidebar
  },
  mixins: [sampleDataGenerator],
  beforeMount: function () {
    this.setupSampleData();
  },
  methods: {
    ...mapActions({
      addCard: 'cards/addCard',
      setActiveCard: 'cards/setActiveCard',
      addTransaction: 'transactions/addTransaction'
    }),
    setupSampleData: function () {
      let cards = [...Array(this.getRandomNumber(10, 1)).keys()].map(ind => this.getSampleCard());
      cards.forEach(card => this.addCard(card));
      this.setActiveCard(cards[this.getRandomNumber(cards.length - 1)]);
      let cardsLen = cards.length - 1;
      [...Array(this.getRandomNumber(1, cardsLen * 20)).keys()]
        .forEach(ind =>
          this.addTransaction(this.getRandomTransaction(cards[this.getRandomNumber(cardsLen)]['uuid']))
        );
    }
  }
};
</script>
<style lang="scss">
@media screen and (max-width:1080px){
  .sidebar-container{
    display:none;
  }
}
</style>
