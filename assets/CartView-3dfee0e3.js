import{_ as m,o as l,c as i,a as t,F as h,g as p,h as g,t as d,d as C,e as x,i as y}from"./index-6eff3204.js";const{VITE_APP_URL:c,VITE_APP_PATH:r}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zack_p",BASE_URL:"/vue-week6-assignment",MODE:"production",DEV:!1,PROD:!0},v={data(){return{products:[],productId:"",cart:{},loadingItem:""}},methods:{getCarts(){this.$http.get(`${c}/v2/api/${r}/cart`).then(e=>{this.cart=e.data.data}).catch(e=>{alert(e.response.data.message)})},updateCartQty(e){const o={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${c}/v2/api/${r}/cart/${e.id}`,{data:o}).then(u=>{this.getCarts(),this.loadingItem=""}).catch(u=>{alert(u.response.data.message)})},deleteCartItem(e){this.loadingItem=e.id,this.$http.delete(`${c}/v2/api/${r}/cart/${e.id}`).then(o=>{alert(o.data.message),this.getCarts(),this.loadingItem=""}).catch(o=>{alert(o.response.data.message)})},deleteAllCartsItem(){this.$http.delete(`${c}/v2/api/${r}/carts`).then(e=>{this.getCarts()}).catch(e=>{alert(e.response.data.message)})}},mounted(){this.getCarts()}},f=t("div",null," 這是前台購物車列表頁面 ",-1),b={class:"table align-middle"},P=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"200px"}},"數量/單位"),t("th",null,"單價")])],-1),V=["onClick","disabled"],$={key:0,class:"fa-solid fa-sync fa-spin"},k={class:"input-group input group-sm"},A=["onUpdate:modelValue","onChange","disabled"],E=["value"],T={class:"input-group-text"},I={class:"text-end"},D=t("td",{colspan:"3",class:"text-end"},"總價",-1),U={class:"text-end"},q=t("td",{colspan:"3",class:"text-success text-end"},"折扣價",-1),w={class:"text-end text-success"};function B(e,o,u,L,a,_){return l(),i(h,null,[f,t("table",b,[P,t("tbody",null,[a.cart.carts?(l(!0),i(h,{key:0},p(a.cart.carts,s=>(l(),i("tr",{key:s.id},[t("td",null,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:n=>_.deleteCartItem(s),disabled:s.id===a.loadingItem},[s.id===a.loadingItem?(l(),i("i",$)):g("",!0),C(" x")],8,V)]),t("td",null,d(s.product.title),1),t("td",null,[t("div",k,[x(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":n=>s.qty=n,onChange:n=>_.updateCartQty(s),disabled:s.id===a.loadingItem},[(l(),i(h,null,p(20,n=>t("option",{value:n,key:n},d(n),9,E)),64))],40,A),[[y,s.qty]]),t("span",T,d(s.product.unit),1)])]),t("td",I,d(s.total),1)]))),128)):g("",!0)]),t("tfoot",null,[t("tr",null,[D,t("td",U,d(a.cart.total),1)]),t("tr",null,[q,t("td",w,d(a.cart.final_total),1)])])])],64)}const N=m(v,[["render",B]]);export{N as default};