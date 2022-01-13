<template>

  <div
    class="card-actions mt-20 bg-info-layer flex-box no-wrap radius-5 ph-15 pv-10 font-small"
  >
    <div
      class="col-xl-2_4 pointer-cursor"
      style="overflow:hidden"
      @click="toggleCardActiveState(activeCard)"
    >
      <div
        class="flex-box justify-center"
      >
        <span
          class="pv-4 bg-primary text-white ph-5 radius-10"
        >
          <i
            class="far fa-snowflake"
          />
        </span>
      </div>
      <div
        class="flex-box p-5 justify-center text-primary free-letter-spacing"
      >
        <span
          style="word-break:break-word;tex;text-align:center;t-align:center"
        >
          Freeze Card
        </span>
      </div>
    </div>
    <div
      class="col-xl-2_4"
      style="overflow:hidden"
    >
      <div
        class="flex-box justify-center"
      >
        <span
          class="pv-4 bg-primary text-white ph-5 radius-10"
        >
          <i
            class="fas fa-tachometer-alt"
          />
        </span>
      </div>
      <div
        class="flex-box p-5 justify-center text-primary free-letter-spacing"
      >
        <span
          style="word-break:break-word;text-align:center;"
        >
          Set spend limit
        </span>
      </div>
    </div>
    <div
      class="col-xl-2_4"
      style="overflow:hidden"
    >
      <div
        class="flex-box justify-center"
      >
        <span
          class="pv-4 bg-white text-white ph-5 radius-10"
        >
          <i
            class="fab fa-google text-warning-dark"
          />
        </span>
      </div>
      <div
        class="flex-box p-5 justify-center text-primary free-letter-spacing"
      >
        <span
          style="word-break:break-word;text-align:center;"
        >
          Add to GPay
        </span>
      </div>
    </div>
    <div
      class="col-xl-2_4"
      style="overflow:hidden"
    >
      <div
        class="flex-box justify-center"
      >
        <span
          class="pv-4 bg-primary text-white ph-5 radius-10"
        >
          <i
            class="fas fa-undo"
          />
        </span>
      </div>
      <div
        class="flex-box p-5 justify-center text-primary free-letter-spacing"
      >
        <span
          style="word-break:break-word;text-align:center;"
        >
          Replace Card
        </span>
      </div>
    </div>
    <div
      class="col-xl-2_4"
      style="overflow:hidden"
    >
      <div
        class="flex-box justify-center"
      >
        <span
          class="pv-4 bg-primary text-white ph-5 radius-10"
        >
          <i
            class="fas fa-trash-alt"
          />
        </span>
      </div>
      <div
        class="flex-box p-5 justify-center text-primary free-letter-spacing"
      >
        <span
          style="word-break:break-word;text-align:center;"
        >
          Cancel Card
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'ActiveCardActions',
  computed: {
    ...(mapGetters({
      activeCard: 'cards/getActiveCard'
    }))
  },
  methods: {
    ...(mapActions({
      toggleCardActiveState: 'cards/toggleCardActiveState'
    }))
  }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width:1080px){
  .card-actions{
    background:#edf3ff;
  }
}
</style>
