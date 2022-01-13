<template>
  <div
    class="ph-15 pv-10"
  >
    <div
      class="flex-box align-start"
    >
      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
        <div
          class="pt-10"
        >
          <span
            :class="['bg-'+transactionTypeColors[transaction['type']]+'-layer',
                     'text-'+transactionTypeColors[transaction['type']]]"
            class="font-small-med ph-10 pv-9 radius-15"
          >
            <i
              :class="transactionTypeIcons[transaction['type']]"
            />
          </span>
        </div>
      </div>
      <div
        class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 flex-box justify-start"
      >
        <div
          class="pr-10 pl-15"
        >
          <div
            class="mt-3"
          >
            <span
              class="font-medium text-bold text-primary-dark"
            >
              {{ transaction['receiver'] }}
            </span>
          </div>
          <div>
            <span
              class="font-medium text-secondary"
            >
              {{ transaction['time'] | humanDate(1,1,1,1,1,1,0,1) }}
            </span>
          </div>
          <div
            class="flex-box align-center mt-5"
          >
            <span
              class="ph-5 pv-5 radius-10 bg-primary text-white font-x-small"
            >
              <i class="fas fa-credit-card"/>
            </span>
            <span
              class="font-small text-bold text-primary ml-5"
            >
              {{ transactionTypeText[transaction['type']] }} debit card
            </span>
          </div>
        </div>
      </div>
      <div
        class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 flex-box justify-end"
      >
        <div>
          <span
            :class="['text-'+transactionTypeColors[transaction['type']]]"
            class="font-medium text-bold free-letter-spacing"
          >
            {{ transactionTypeSumbol[transaction['type']] }} S$ {{ transaction['amount'] }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardTransaction',
  props: {
    transaction: {
      type: Object,
      default: null
    }
  },
  data: function () {
    return {
      transactionTypeText: {
        refund: 'Refund on',
        credit: 'Credit to',
        debit: 'Debit to'
      },
      transactionTypeColors: {
        refund: 'success',
        credit: 'success',
        debit: 'danger'
      },
      transactionTypeIcons: {
        refund: 'fas fa-redo',
        credit: 'fas fa-plus',
        debit: 'fas fa-minus'
      },
      transactionTypeSumbol: {
        refund: '+',
        credit: '+',
        debit: '-'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
