import{u as c}from"./user-store-6fc4f8f5.js";import{r as o}from"./result-test-store-fa9ee906.js";import{_ as l,E as p,X as T,o as _,c as g}from"./index-9af518ea.js";const S={name:"SplashPage",components:{},setup(){return{userStore:c,resultTestStore:o}},mounted(){this.loadData()},methods:{getUserByToken(t){return c.getProfileByToken({token:t}).then(s=>s).catch(s=>"")},async getResult(t){return o.GET_POINT({id:t})},async getRemakeTest(t){return o.GET_REMAKE_TEST({test_input_schedule_id:t})},getStatusTestInputSchedule(t){return o.GET_STATUS_TEST_INPUT_SCHEDULE({token:t})},async loadData(){const t=p.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});let s=this.userStore.getToken();if(!s){t.close(),this.$router.push({path:"/login"});return}let n=await this.getUserByToken(s);if(t.close(),!n){this.$router.push({path:"/login"});return}let i=-1;await this.getStatusTestInputSchedule(s).then(e=>{var r;i=(r=e==null?void 0:e.data)==null?void 0:r.data}),await this.getRemakeTest(n.id).then(e=>{var r,a;if((a=(r=e==null?void 0:e.data)==null?void 0:r.data)!=null&&a.is_remake&&i!=T){this.$router.push({path:"/information"});return}this.getResult(n.id).then(u=>{var h;if((h=u==null?void 0:u.data)!=null&&h.data){this.$router.push({path:"/result"});return}this.$router.push({path:"/information"})}).catch(()=>{this.$router.push({path:"/information"})})})}}},m={class:"bg-white h-screen"};function d(t,s,n,i,e,r){return _(),g("div",m)}const $=l(S,[["render",d]]);export{$ as default};