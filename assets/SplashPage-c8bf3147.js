import{u as a}from"./user-store-316bd7a2.js";import{r as n}from"./result-test-store-be9855c3.js";import{_ as i,E as u,o as c,c as l}from"./index-6238ad77.js";const h={name:"SplashPage",components:{},setup(){return{userStore:a,resultTestStore:n}},mounted(){this.loadData()},methods:{getUserByToken(t){return a.getProfileByToken({token:t}).then(e=>e).catch(e=>"")},async getResult(t){return n.GET_POINT({id:t})},async loadData(){var s;const t=u.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});let e=this.userStore.getToken();if(!e){t.close(),this.$router.push({path:"/login"});return}let o=await this.getUserByToken(e);if(alert("adad"),t.close(),!o){this.$router.push({path:"/login"});return}let r=await this.getResult(o.id);if((s=r==null?void 0:r.data)!=null&&s.data){this.$router.push({path:"/result"});return}this.$router.push({path:"/information"})}}},p={class:"bg-white h-screen"};function d(t,e,o,r,s,g){return c(),l("div",p)}const k=i(h,[["render",d]]);export{k as default};
