<template>
  <div>
    這是前台單一產品頁面
  </div>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card mb-3">
        <img :src="product.imageUrl" alt="" class="card-img-top">
        <div class="card-body">
          <h2 class="text-center">{{product.title}}</h2>
          <p>產品描述：{{product.description}}</p>
          <p>產品內容：{{product.content}}</p>
          <p>原價：{{product.origin_price}}</p>
          <p>售價：{{product.price}}</p>                  
        </div>
        <div v-if="product.imagesUrl" class="card-footer">
          <div class="row row-cols-3">
            <div class="col d-flex justify-content-center" 
            v-for="(images,key) in product.imagesUrl"
            :key="'images'+ key">
              <img :src="images" alt="" class="img-fluid mb-3"
              style="width: 200px;            
              object-fix:cover;">
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
    }
  },
  methods:{
    getProduct() {
      // console.log(this.$route.params.id);
      const { id } =  this.$route.params;
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
      .then((res) => {
        console.log(res.data.product);
        this.product = res.data.product;
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
    }
  },
  mounted() {
    this.getProduct();
  }
}
</script>

<style lang="scss">
  .card-img-top{
    width: 100%;
    height: 550px;
    object-fit: cover;
  }
</style>