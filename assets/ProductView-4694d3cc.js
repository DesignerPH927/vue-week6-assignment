import{_,o as c,c as r,a as t,t as o,F as n,g as u,h as a}from"./index-a91e732b.js";const{VITE_APP_URL:p,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zack_p",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},m={data(){return{product:{}}},methods:{getProduct(){const{id:i}=this.$route.params;this.$http.get(`${p}/v2/api/${h}/product/${i}`).then(e=>{console.log(e.data.product),this.product=e.data.product}).catch(e=>{alert(e.response.data.message)})}},mounted(){this.getProduct()}},g=t("div",null," 這是前台單一產品頁面 ",-1),P={class:"row justify-content-center"},f={class:"col-md-8"},v={class:"card mb-3"},x=["src"],y={class:"card-body"},V={class:"text-center"},E={key:0,class:"card-footer"},A={class:"row row-cols-3"},w=["src"];function T(i,e,U,k,s,b){return c(),r(n,null,[g,t("div",P,[t("div",f,[t("div",v,[t("img",{src:s.product.imageUrl,alt:"",class:"card-img-top"},null,8,x),t("div",y,[t("h2",V,o(s.product.title),1),t("p",null,"產品描述："+o(s.product.description),1),t("p",null,"產品內容："+o(s.product.content),1),t("p",null,"原價："+o(s.product.origin_price),1),t("p",null,"售價："+o(s.product.price),1)]),s.product.imagesUrl?(c(),r("div",E,[t("div",A,[(c(!0),r(n,null,u(s.product.imagesUrl,(d,l)=>(c(),r("div",{class:"col d-flex justify-content-center",key:"images"+l},[t("img",{src:d,alt:"",class:"img-fluid mb-3",style:{width:"200px","object-fix":"cover"}},null,8,w)]))),128))])])):a("",!0)])])])],64)}const D=_(m,[["render",T]]);export{D as default};
