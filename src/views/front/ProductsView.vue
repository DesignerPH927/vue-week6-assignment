<template>
  <div class="container">
    <div>   
      這是前台產品列表頁面
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <table class="table align-middle table-dark">
          <thead>
            <tr class="text-center">              
              <th width="100">圖片</th>
              <th width="100">名稱</th>              
              <th width="150">查看更多</th>      
            </tr>
          </thead>
          <tbody>
            <tr v-for="pItem in products" :key="pItem.id"
              class="text-center">              
              <td style="width: 150px;">
                <div 
                  style=" height: 250px;
                  background-size: cover;
                  background-position: center;"
                  :style="{backgroundImage : `url(${pItem.imageUrl})`}">
                </div>
              </td>
              <th>{{pItem.title}}</th>              
              <td>
                <div class="d-flex justify-content-center gap-1">
                  <RouterLink :to="`/product/${pItem.id}`"
                  class="btn btn-outline-oranges">產品細節</RouterLink>
                  <button class="btn btn-outline-success"
                  type="button"
                  @click="addToCart(pItem.id)">加入購物車</button>
                </div>
              </td>        
            </tr>
          </tbody>
        </table>
      </div>      
    </div>
    
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      products: [],    
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts() {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
      .then((res) => {
        // console.log(res.data.products);
        this.products = res.data.products;
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
    },
    addToCart(id) {
      // console.log('id:', id);
      const data = {
        product_id: id,
        qty: 1
      };

      this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
      .then((res) => {
        alert(res.data.message);        
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>