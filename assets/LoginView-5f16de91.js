import{_ as c,o as u,c as p,a as e,e as l,v as d}from"./index-6eff3204.js";const{VITE_APP_URL:m}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zack_p",BASE_URL:"/vue-week6-assignment",MODE:"production",DEV:!1,PROD:!0},_={data(){return{user:{username:"",password:""}}},methods:{fieldEmpty(){if(this.user.username===""||this.user.password===""){alert("請不要空白");return}},login(){this.fieldEmpty();const n=`${m}v2/admin/signin`;this.$http.post(n,this.user).then(s=>{const{token:i,expired:a}=s.data;document.cookie=`zackPCookie=${i}; expires=${new Date(a)}`,this.$router.push("/admin/products")}).catch(s=>{alert(s.response.data.message)})},returnPage(){this.$router.push("/")}}},f={class:"container mt-3"},h={class:"row justify-content-center"},w=e("h1",{class:"h3 fw-bold text-center"},"請先登入",-1),x={class:"col-8"},g={action:"",class:"formSize"},b={class:"form-floating mb-4"},v=e("label",{for:"email"},"Email Address",-1),P={class:"form-floating mb-4"},y=e("label",{for:"password"},"Email Password",-1),E={class:"d-flex gap-1"};function k(n,s,i,a,o,r){return u(),p("div",f,[e("div",h,[w,e("div",x,[e("form",g,[e("div",b,[l(e("input",{type:"email",class:"form-control",id:"email",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=t=>o.user.username=t)},null,512),[[d,o.user.username]]),v]),e("div",P,[l(e("input",{type:"password",class:"form-control",id:"password",placeholder:"xxxxxx",required:"","onUpdate:modelValue":s[1]||(s[1]=t=>o.user.password=t)},null,512),[[d,o.user.password]]),y]),e("div",E,[e("button",{class:"btn btn-lg btn-primary w-100",type:"button",onClick:s[2]||(s[2]=(...t)=>r.login&&r.login(...t))},"登入"),e("button",{class:"btn btn-outline-secondary w-100",type:"button",onClick:s[3]||(s[3]=(...t)=>r.returnPage&&r.returnPage(...t))},"回首頁")])])])])])}const A=c(_,[["render",k]]);export{A as default};
