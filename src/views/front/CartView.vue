<template>
  <div>
    這是前台購物車列表頁面
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 200px;">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="cartItem in cart.carts" :key="cartItem.id">
          <td>
            <button class="btn btn-outline-danger"
            type="button"
            @click="deleteCartItem(cartItem)"
            :disabled="cartItem.id === loadingItem">                   
            <i class="fa-solid fa-sync fa-spin"
            v-if="cartItem.id === loadingItem"></i>                 
            x</button>
          </td>
          <td>
            {{cartItem.product.title}}                  
          </td>
          <td>
            <div class="input-group input group-sm">
              <select name="" id="" class="form-select" 
              v-model="cartItem.qty"
              @change="updateCartQty(cartItem)"
              :disabled="cartItem.id === loadingItem">                    
                <option :value="i" v-for="i in 20" 
                  :key="i">{{i}}</option>                     
              </select>
              <span class="input-group-text">
                {{cartItem.product.unit}}</span>
            </div>
          </td>
          <td class="text-end">
            {{cartItem.total}}
          </td>
        </tr>             
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" 
          class="text-end">總價</td>
        <td class="text-end">{{cart.total}}</td>
      </tr>
      <tr>
        <td colspan="3"
          class="text-success text-end">折扣價</td>
        <td class="text-end
          text-success">{{cart.final_total}}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      productId: '',
      cart: {},
      loadingItem: '', // 存id     
    }
  },  
  methods: {         
    getCarts() {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          // console.log("取得購物車列表：", res.data.data); 
          this.cart = res.data.data;         
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
    updateCartQty(item) { //購物車 id  產品 id
      const data = {
        product_id: item.product.id, 
        qty: item.qty,
      }
      this.loadingItem = item.id;
      this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          // console.log("更新購物車：", res.data.data); 
          this.getCarts();
          this.loadingItem = '';    
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
    deleteCartItem(item) {
      this.loadingItem = item.id;
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          alert(res.data.message); 
          this.getCarts();     
          this.loadingItem = '';   
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
    deleteAllCartsItem() {
        this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          // console.log("刪除所有購物車列表：", res.data.data); 
          this.getCarts();        
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },    
  },
  mounted() {    
    this.getCarts();
  },
}
</script>
