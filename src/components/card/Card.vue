<template>
  <div
    style="width:300px;height:160px;"
    :class="card['active']?'bg-success':'bg-secondary-dark'"
    class="radius-10 mt-10 text-white p-15"
  >
    <div
      class="flex-box align-center justify-end"
    >
      <span>
        <i
          class="fas fa-chevron-circle-up"
        />
        aspire
      </span>
    </div>
    <div
      class="flex-box mt-20"
    >
      <span
        class="text-bold extra-letter-spacing ellipsis-word"
      >
        {{ card['name'] }}
      </span>
    </div>
    <div
      class="flex-box align-center mt-20"
    >
      <span
        class="font-medium extra-letter-spacing"
      >
        <template
          v-if="card['showCardInfo']"
        >
          <span class="pr-5">{{ card['number'].substring(0,4) }}</span>
          <span class="pr-5">{{ card['number'].substring(4,8) }}</span>
          <span class="pr-5">{{ card['number'].substring(8,12) }}</span>
        </template>
        <template
          v-else
        >
          <span
            class="font-x-small"
          >
            <i class="fas fa-circle ml-5"/>
            <i class="fas fa-circle ml-5"/>
            <i class="fas fa-circle ml-5"/>
            <i class="fas fa-circle ml-5"/>
            <i class="fas fa-circle ml-10"/>
            <i class="fas fa-circle ml-5"/>
            <i class="fas fa-circle ml-5"/>
            <i class="fas fa-circle ml-5"/>
            <i class="fas fa-circle ml-10"/>
            <i class="fas fa-circle ml-5"/>
            <i class="fas fa-circle ml-5"/>
            <i class="fas fa-circle ml-5 mt--5 pr-5"/>
          </span>
        </template>
        <span
          class="extra-letter-spacing"
        >
          {{ card['number'].substring(12) }}
        </span>
      </span>
    </div>
    <div
      class="flex-box align-center mt-20 font-small free-letter-spacing"
    >
      <div
        class="col-xl-4"
      >
        <span>
          Thru:
          {{ new Date(card['validThru']).getMonth() + 1  }}
          /
          {{ new Date(card['validThru']).getYear()-100  }}
        </span>
      </div>
      <div
        class="col-xl-4"
      >
        <span>
          CVV:
        </span>
        <span
          class="font-small"
        >
          <i class="fas fa-asterisk ml-3"/>
          <i class="fas fa-asterisk ml-3"/>
          <i class="fas fa-asterisk ml-3"/>
        </span>
      </div>
    </div>
    <div
      class="flex-box justify-end"
    >
      <span
        class="bg-white radius-10"
        style="height:30pt;"
      >
        <i
          :class="card['active']?'text-success':'text-secondary-dark'"
          class="fab fa-cc-visa"
          style="margin-left:-2px;margin-top:-3px;font-size:50px;"
        />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default: null
    }
  },
  data: function () {
    return {};
  }
};
</script>
