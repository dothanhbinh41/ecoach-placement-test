import{u as s}from"./user-store-32a8b968.js";import{r as o}from"./result-test-store-03315cef.js";import{_ as n,E as i,o as u,c as l}from"./index-ce98ecd0.js";const c={name:"SplashPage",components:{},setup(){return{userStore:s,resultTestStore:o}},mounted(){this.loadData()},methods:{async getUserByToken(t){return await s.getProfileByToken({token:t})},async getResult(t){return o.GET_POINT({id:t})},async loadData(){const t=i.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});let e=this.userStore.getToken();if(!e){t.close(),this.$router.push({path:"/login"});return}let r=await this.getUserByToken(e);if(t.close(),!r){this.$router.push({path:"/login"});return}if(await this.getResult(r.id)){this.$router.push({path:"/result"});return}this.$router.push({path:"/information"})}}},h={class:"bg-white h-screen"};function p(t,e,r,a,g,d){return u(),l("div",h)}const k=n(c,[["render",p]]);export{k as default};
