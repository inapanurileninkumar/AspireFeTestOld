<template>
  <div
    class="pt-50 pl-50 pr-20 pb-10"
  >
    <div>
      <p>Hello world</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  beforeMount: function () {
    this.routeTo('Cards');
  }
};
</script>
<style lang="scss" scoped>

</style>
