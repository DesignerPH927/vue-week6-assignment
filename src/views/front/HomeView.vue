<template>
  <div>這是首頁</div>
  <button class="btn btn-primary"
  type="button"
  @click="loginPage">登入</button>
</template>


<script>
import { RouterLink } from 'vue-router';
export default {
  methods: {
    loginPage() {
      this.$router.push('/login');
    }
  },
}
</script>
