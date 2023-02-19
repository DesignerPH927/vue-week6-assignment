<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <h1 class="h3 fw-bold text-center">請先登入</h1>
      <div class="col-8">
        <form action="" class="formSize">
          <div class="form-floating mb-4">
            <input type="email" class="form-control" id="email" 
            placeholder="name@example.com" required autofocus
            v-model="user.username">
            <label for="email">Email Address</label>
          </div>
          <div class="form-floating mb-4">
            <input type="password" class="form-control" id="password"
            placeholder="xxxxxx" required
            v-model="user.password">
            <label for="password">Email Password</label>
          </div>
          <div class="d-flex gap-1">
            <button class="btn btn-lg btn-primary w-100" type="button"
            @click="login">登入</button>
            <button class="btn btn-outline-secondary w-100"
            type="button"
            @click="returnPage">回首頁</button>
          </div>
        </form>
      </div>
    </div>
    </div> 
</template>

<script>
const { VITE_APP_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    fieldEmpty() {
      if (this.user.username === '' || this.user.password === ''){
        alert('請不要空白');
        return;
      }
    },
    login() {
      this.fieldEmpty();
      // API站點
      const api = `${VITE_APP_URL}v2/admin/signin`;
      // 登入SOP: 1. 登入 2. 將token、expired取出存入cookie            
      this.$http.post(api, this.user)
        .then((res) => {
          // console.log(res);
          // 取出token、expired，使用解構的方式
          const { token, expired } = res.data;
          // console.log(token, expired);
          // 將token、expired存入cookie中，參考MDN文件cookie
          document.cookie = `zackPCookie=${token}; expires=${new Date(expired)}`;
          // 導向目標頁面
          // window.location = 'products.html';
          this.$router.push('/admin/products');
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
    returnPage() {
      this.$router.push('/');
    }
  } 
}
</script>

<style lang="scss">  
  template {
    display: flex;
    justify-content: center;
    align-items: center;        
  }
  .formSize {
    width: 100%;
    max-width: 250px;
    padding: 15px;
    margin: auto;
  }
</style>
