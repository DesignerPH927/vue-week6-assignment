import{_,o as c,c as r,a as t,t as o,F as i,g as u,h as a}from"./index-6eff3204.js";const{VITE_APP_URL:p,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zack_p",BASE_URL:"/vue-week6-assignment",MODE:"production",DEV:!1,PROD:!0},m={data(){return{product:{}}},methods:{getProduct(){const{id:n}=this.$route.params;this.$http.get(`${p}/v2/api/${h}/product/${n}`).then(s=>{console.log(s.data.product),this.product=s.data.product}).catch(s=>{alert(s.response.data.message)})}},mounted(){this.getProduct()}},g=t("div",null," 這是前台單一產品頁面 ",-1),P={class:"row justify-content-center"},v={class:"col-md-8"},f={class:"card mb-3"},x=["src"],y={class:"card-body"},V={class:"text-center"},E={key:0,class:"card-footer"},w={class:"row row-cols-3"},A=["src"];function k(n,s,T,U,e,b){return c(),r(i,null,[g,t("div",P,[t("div",v,[t("div",f,[t("img",{src:e.product.imageUrl,alt:"",class:"card-img-top"},null,8,x),t("div",y,[t("h2",V,o(e.product.title),1),t("p",null,"產品描述："+o(e.product.description),1),t("p",null,"產品內容："+o(e.product.content),1),t("p",null,"原價："+o(e.product.origin_price),1),t("p",null,"售價："+o(e.product.price),1)]),e.product.imagesUrl?(c(),r("div",E,[t("div",w,[(c(!0),r(i,null,u(e.product.imagesUrl,(d,l)=>(c(),r("div",{class:"col d-flex justify-content-center",key:"images"+l},[t("img",{src:d,alt:"",class:"img-fluid mb-3",style:{width:"200px","object-fix":"cover"}},null,8,A)]))),128))])])):a("",!0)])])])],64)}const D=_(m,[["render",k]]);export{D as default};
