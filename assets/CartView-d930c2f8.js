import{_ as x,o as l,c,a as t,F as u,g as p,h as g,t as o,d as m,e as C,i as y}from"./index-a91e732b.js";const{VITE_APP_URL:i,VITE_APP_PATH:r}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zack_p",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},f={data(){return{products:[],productId:"",cart:{},loadingItem:""}},methods:{getCarts(){this.$http.get(`${i}/v2/api/${r}/cart`).then(e=>{this.cart=e.data.data}).catch(e=>{alert(e.response.data.message)})},updateCartQty(e){const d={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${i}/v2/api/${r}/cart/${e.id}`,{data:d}).then(h=>{this.getCarts(),this.loadingItem=""}).catch(h=>{alert(h.response.data.message)})},deleteCartItem(e){this.loadingItem=e.id,this.$http.delete(`${i}/v2/api/${r}/cart/${e.id}`).then(d=>{alert(d.data.message),this.getCarts(),this.loadingItem=""}).catch(d=>{alert(d.response.data.message)})},deleteAllCartsItem(){this.$http.delete(`${i}/v2/api/${r}/carts`).then(e=>{this.getCarts()}).catch(e=>{alert(e.response.data.message)})}},mounted(){this.getCarts()}},v=t("div",null," 這是前台購物車列表頁面 ",-1),b={class:"table align-middle"},P=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"200px"}},"數量/單位"),t("th",{class:"text-center"},"單價"),t("th",{class:"text-center"},"小計")])],-1),V=["onClick","disabled"],$={key:0,class:"fa-solid fa-sync fa-spin"},k={class:"input-group input group-sm"},A=["onUpdate:modelValue","onChange","disabled"],E=["value"],T={class:"input-group-text"},D={class:"text-center"},I={class:"text-center"},U=t("td",{colspan:"4",class:"text-end"},"總價",-1),q={class:"text-end"},B=t("td",{colspan:"4",class:"text-success text-end"},"折扣價",-1),L={class:"text-end text-success"};function R(e,d,h,w,a,_){return l(),c(u,null,[v,t("table",b,[P,t("tbody",null,[a.cart.carts?(l(!0),c(u,{key:0},p(a.cart.carts,s=>(l(),c("tr",{key:s.id},[t("td",null,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:n=>_.deleteCartItem(s),disabled:s.id===a.loadingItem},[s.id===a.loadingItem?(l(),c("i",$)):g("",!0),m(" x")],8,V)]),t("td",null,o(s.product.title),1),t("td",null,[t("div",k,[C(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":n=>s.qty=n,onChange:n=>_.updateCartQty(s),disabled:s.id===a.loadingItem},[(l(),c(u,null,p(20,n=>t("option",{value:n,key:n},o(n),9,E)),64))],40,A),[[y,s.qty]]),t("span",T,o(s.product.unit),1)])]),t("td",D,o(s.product.price),1),t("td",I,o(s.total),1)]))),128)):g("",!0)]),t("tfoot",null,[t("tr",null,[U,t("td",q,o(a.cart.total),1)]),t("tr",null,[B,t("td",L,o(a.cart.final_total),1)])])])],64)}const S=x(f,[["render",R]]);export{S as default};
