import{u as c}from"./user-store-32fcbc8d.js";import{r as o}from"./result-test-store-ea18e4b8.js";import{_ as p,E as l,X as g,o as T,c as _}from"./index-9a959b62.js";const S={name:"SplashPage",components:{},setup(){return{userStore:c,resultTestStore:o}},async mounted(){const t=l.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});await this.loadData(),t.close()},methods:{getUserByToken(t){return c.getProfileByToken({token:t}).then(s=>s).catch(s=>"")},async getResult(t){return o.GET_POINT({id:t})},async getRemakeTest(t){return o.GET_REMAKE_TEST({test_input_schedule_id:t})},getStatusTestInputSchedule(t){return o.GET_STATUS_TEST_INPUT_SCHEDULE({token:t})},async loadData(){const t=l.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});let s=this.userStore.getToken();if(!s){t.close(),this.$router.push({path:"/login"});return}let n=await this.getUserByToken(s);if(t.close(),!n){this.$router.push({path:"/login"});return}let i=-1;await this.getStatusTestInputSchedule(s).then(e=>{var r;i=(r=e==null?void 0:e.data)==null?void 0:r.data}),await this.getRemakeTest(n.id).then(e=>{var r,a;if((a=(r=e==null?void 0:e.data)==null?void 0:r.data)!=null&&a.is_remake&&i!=g){this.$router.push({path:"/information"});return}this.getResult(n.id).then(u=>{var h;if((h=u==null?void 0:u.data)!=null&&h.data){this.$router.push({path:"/result"});return}this.$router.push({path:"/information"})}).catch(()=>{this.$router.push({path:"/information"})})})}}},d={class:"bg-white h-screen"};function m(t,s,n,i,e,r){return T(),_("div",d)}const $=p(S,[["render",m]]);export{$ as default};
