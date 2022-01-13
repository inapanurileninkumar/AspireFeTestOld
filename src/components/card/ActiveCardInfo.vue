<template>
  <div
    class="pl-20 free-letter-spacing"
  >
    <div
      class=""
    >
      <span
        class="font-small text-success text-bold"
      >
        Name
      </span>
    </div>
    <div
    >
      <span
        class="text-primary-dark text-bold font-regular"
      >
        {{ card['name'] }}
      </span>
    </div>
    <div
      class="mt-10"
    >
      <span
        class="font-small text-success text-bold"
      >
        Number
      </span>
    </div>
    <div>
      <span
        class="text-primary-dark text-bold font-regular"
      >
        <span
          v-if="card['showCardInfo']"
        >
          {{ card['number'].substring(0,4) }}
          {{ card['number'].substring(4,8) }}
          {{ card['number'].substring(8,12) }}
          {{ card['number'].substring(12) }}
        </span>
        <span
          v-else
        >
          **** **** **** {{card['number'].substring(12)}}
        </span>
      </span>
    </div>
    <div
      class="flex-box align-center justify-sb pr-20 mt-10"
    >
      <div>
        <div
          class="mt-10"
        >
          <span
            class="font-small text-success text-bold"
          >
            Valid Thru
          </span>
        </div>
        <div
        >
          <span
            class="text-primary-dark text-bold font-regular"
          >
            {{ card['validThru'] | humanDate(1,1,0,0,0,0,0,0)}}
          </span>
        </div>
      </div>
      <div
        class="col-6"
      >
        <span
          class="font-small text-success text-bold"
        >
          Cvv
        </span>
        <div
          class="col-6"
        >
          <span
            class="text-primary-dark text-bold font-regular"
          >
            {{ card['showCardInfo']?card['cvv']:'***' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ActiveCardInfo',
  props: {
    card: {
      type: Object,
      default: null
    }
  }
};
</script>
