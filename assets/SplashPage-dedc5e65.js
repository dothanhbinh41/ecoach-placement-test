import{u as a}from"./user-store-6ddd4b76.js";import{r as n}from"./result-test-store-067146fc.js";import{_ as i,E as u,o as c,c as l}from"./index-191c243e.js";const h={name:"SplashPage",components:{},setup(){return{userStore:a,resultTestStore:n}},mounted(){this.loadData()},methods:{async getUserByToken(t){return await a.getProfileByToken({token:t})},async getResult(t){return n.GET_POINT({id:t})},async loadData(){var o;const t=u.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});let r=this.userStore.getToken();if(!r){t.close(),this.$router.push({path:"/login"});return}let s=await this.getUserByToken(r);if(t.close(),!s){this.$router.push({path:"/login"});return}let e=await this.getResult(s.id);if((o=e==null?void 0:e.data)!=null&&o.data){this.$router.push({path:"/result"});return}this.$router.push({path:"/information"})}}},p={class:"bg-white h-screen"};function g(t,r,s,e,o,d){return c(),l("div",p)}const k=i(h,[["render",g]]);export{k as default};
