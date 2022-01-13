<template>
  <div
    class="pt-50 cards-data-container"
  >
    <div
      class="balance-container"
    >
      <div
        class="font-medium"
      >
        <span>
          Available balance
        </span>
      </div>
      <div
        class="mt-15 flex-box align-center text-bold justify-sb"
      >
        <div
          class="flex-box align-center"
        >
          <span
            class="bg-success ph-13 pv-5 text-white font-small-med radius-5"
          >
            S $
          </span>
          <span
            class="balance font-reg-large ml-15"
          >
            3,000
          </span>
        </div>
        <div
          class="new-card-container flex-box align-center free-letter-spacing"
        >
          <span
            class="new-card text-white bg-primary ph-15 pv-10 font-small-med radius-3"
          >
            <i class="fas fa-plus-circle" />
            New Card
          </span>
        </div>
      </div>
      <div
        class="mt-30"
      >
        <div
          class="flex-box"
        >
          <span
            class="font-medium text-bold bb-2-info pb-5"
          >
            My debit cards
          </span>
          <span
            class="all-cards font-medium text-secondary-lite ml-20"
          >
            All company cards
          </span>
        </div>
      </div>
    </div>
    <div
      class="flex-box cards-info-container"
      style="box-shadow:0px 2px 12pt #00000014"
    >
      <div
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12"
      >
        <div
          class="radius-5 card-renderer-container flex-box justify-center"
        >
          <cards-renderer
            :cards="cards"
          />
        </div>
      </div>
      <div
        class="active-card-info-container
        col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 flex-box justify-center"
      >
        <active-card-details />
      </div>
    </div>
  </div>
</template>
<script>
import CardsRenderer from '@components/card/CardsRenderer';
import ActiveCardDetails from '@components/card/ActiveCardDetails';
import { mapGetters } from 'vuex';
export default {
  name: 'Cards',
  components: {
    CardsRenderer,
    ActiveCardDetails
  },
  data: function () {
    return {
    };
  },
  computed: {
    ...(mapGetters({
      cards: 'cards/getCards',
      activeCard: 'cards/getActiveCard'
    }))
  }
};
</script>

<style lang="scss" scoped>
@import '@assets/sass/variables.scss';
.cards-data-container{
  padding:30px;
  .cards-info-container{

  }
  .active-card-info-container{
    background:white;
  }
  .balance-container{
    padding-left:30px;
    padding-right:30px;
  }
  .cards-info-container{
    padding-left:30px;
    padding-top:30px;
    padding-bottom:30px;
  }

  .balance{
    color:map_get($colors,'black');
  }
  .all-cards{
    color: map_get($colors,'secondary')
  }
    .card-renderer-container{
      padding:0;
    }

}
@media screen and (max-width:1080px){
  .cards-data-container{
    background: map_get($colors,'primary-dark');
    color:white;
    padding:0px;

    .balance{
      color:map_get($colors,'white');
    }

    .balance-container{
      padding-top:30px;
    }

    .cards-info-container{
      padding-left:0px;
      padding-bottom:0px;
    }

    .active-card-info-container{
      padding-top:30px;
      padding-bottom:30px;
    }

    .new-card{
      background:transparent;
      color:map_get($colors,'info')
    }

    .card-renderer-container{
      padding:0;
    }

  }
}
</style>
