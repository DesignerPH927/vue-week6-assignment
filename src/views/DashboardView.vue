<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid ">               
        <ul class="navbar-nav">            
            <li class="nav-item">
              <RouterLink to="/admin/products" class="nav-link fw-bold fs-5">後台產品列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/orders" class="nav-link fw-bold fs-5">後台訂單列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/" class="nav-link fw-bold fs-5">回前台首頁</RouterLink>
            </li>
            <li class="nav-item">
              <a href="#" @click.prevent="logout"
                class="nav-link fw-bold fs-5">登出</a>
            </li>
        </ul>            
        <div>                 
          <i class="fa-solid fa-cart-arrow-down
          fs-4 text-secondary position-relative"
          style="cursor:pointer;">
            <span class="position-absolute top-0 
            start-100 translate-middle badge 
            rounded-circle bg-danger"
            style="font-size:11px;"></span>
          </i>
        </div>
      </div>
    </nav>    
    <hr class="text-danger m-0"> 
    <RouterView></RouterView>

  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env;

import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView,
  },
  methods: {
    logout() {
      document.cookie = `zackPCookie=; expires=${new Date()}`;
      this.$router.push('/login');
    },
    // 檢查是否登入成功
    checkAdmin() {
      this.$http.post(`${VITE_APP_URL}/v2/api/user/check`)
        .then((res) => {
          // console.log(res.data);
          if (res.data.success) {
            alert('恭喜你驗證成功');
          }else {
            this.$router.push('/login');
          }
        }) 
        .catch((err) => {
          alert(err.response.data.message);
        })           
    },  
  },
  mounted() {
    // 登入後將token取出
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)zackPCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  // console.log(token);
  // 將token存入headers中，參考axios文件搜尋關鍵字author
  // 已下意思，在下次登入時會預設(defaults)將token內容存入headers中
    this.$http.defaults.headers.common['Authorization'] = token;
    this.checkAdmin();
  },
}
</script>
