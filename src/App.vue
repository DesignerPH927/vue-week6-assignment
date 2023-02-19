<template>
  <loading v-model:active="isLoading"
  :color="color"/>
  <RouterView />
</template>

<script>

export default {
  data() {
    return {
      color: 'purple',
      isLoading: false,
    }
  },
  mounted() {
    this.isLoading = true,
    setTimeout(() => {
      this.isLoading = false;
    },1000)
  }
}
</script>


<style lang="scss">

</style>
