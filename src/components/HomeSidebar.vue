<template>
  <div>
    <div
      class="flex-box font-large align-center"
    >
      <i class="text-success fas fa-chevron-circle-up font-huge"/>
      <span
        class="text-success ml-5"
      >
        aspire
      </span>
    </div>
    <div
      class="text-secondary font-medium mt-20"
    >
      Trusted way of banking for 3000+ SMEs and startups in Singapore.
    </div>
    <div
      class="pt-20"
    >
      <div
        v-for="(page,pageIndex) in pages"
        :key="page['label']+'_'+pageIndex"
        :class="[
          page['route'].includes($route['name'])?'text-success':''
        ]"
        class="font-medium-reg mt-60 pointer-cursor free-letter-spacing"
        @click="routeTo(page['route'][0])"
      >
        <i
          :class="page['icon']"
          class="font-reg-large"
        />
        <span
          class="ml-10"
        >
          {{ page['label'] }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeSidebar',
  data: function () {
    return {
      pages: [{
        icon: 'fas fa-chevron-circle-up',
        label: 'Home',
        route: ['Home', '']
      }, {
        icon: 'fas fa-credit-card',
        label: 'Cards',
        route: ['Cards']
      }, {
        icon: 'fas fa-exchange-alt',
        label: 'Payments',
        route: ['Payments']
      }, {
        icon: 'fas fa-arrow-circle-up',
        label: 'Credit',
        route: ['Credit']
      }, {
        icon: 'fas fa-user',
        label: 'Settings',
        route: ['Settings']
      }]
    };
  }
};
</script>
