import{u as x,$ as a,T as k,a as P,_,L as S}from"./bootstrap-C2g_f0uB.mjs";import{a1 as h,T,Y as V,ae as b,am as $,m as l,ag as n,aq as i,ax as u,a6 as e,an as g,M as B,af as C}from"../jse/index-index-DsynDTz_.mjs";const L={class:"mb-6"},N=h({name:"AuthenticationForgetPassword",__name:"forget-password",props:{loading:{type:Boolean,default:!1},loginPath:{default:"/auth/login"}},emits:["submit"],setup(c,{emit:r}){const m=c,o=r,d=x(),t=T({email:"",submitted:!1}),f=V(()=>t.submitted&&!t.email?"error":"default");function v(){t.submitted=!0,f.value==="default"&&o("submit",t.email)}function w(){d.push(m.loginPath)}return(y,s)=>(b(),$("div",null,[l(k,null,{desc:n(()=>[i(u(e(a)("authentication.forgetPasswordSubtitle")),1)]),default:n(()=>[i(u(e(a)("authentication.forgetPassword"))+" 🤦🏻‍♂️ ",1)]),_:1}),g("div",L,[l(e(P),{modelValue:t.email,"onUpdate:modelValue":s[0]||(s[0]=p=>t.email=p),"error-tip":e(a)("authentication.emailTip"),label:e(a)("authentication.email"),status:f.value,autofocus:"",name:"email",placeholder:"example@example.com",type:"text"},null,8,["modelValue","error-tip","label","status"])]),g("div",null,[l(e(_),{class:"mt-2 w-full",onClick:v},{default:n(()=>[i(u(e(a)("authentication.sendResetLink")),1)]),_:1}),l(e(_),{class:"mt-4 w-full",variant:"outline",onClick:s[1]||(s[1]=p=>w())},{default:n(()=>[i(u(e(a)("common.back")),1)]),_:1})])]))}}),R=h({name:"ForgetPassword",__name:"forget-password",setup(c){const r=B(!1);function m(o){console.log("reset email:",o)}return(o,d)=>(b(),C(e(N),{loading:r.value,"login-path":e(S),onSubmit:m},null,8,["loading","login-path"]))}});export{R as default};
