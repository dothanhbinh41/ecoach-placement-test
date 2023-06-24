import{b as O,c as N,N as R,d as L,e as A,f as M,g as k,h as P,i as $,j as C,k as G,l as D}from"./testScheduleOption-1513baaf.js";import{_ as E,r as d,o as c,c as a,a as s,n as B,t as r,h as I,g as T,s as b,F as y,d as w,i as U,j as Y,e as H,p as F,l as Q}from"./index-97766b09.js";function V(t,e=null,n=null,o=null,l=[]){this.type=t,this.correctQuestions=e,this.totalQuestions=n,this.nameType=j(t),this.totalPointAuto=x(o),this.icon=W(t),l.length&&(this.dataComments=K(l),this.totalPoint=X(this.dataComments))}function W(t){return O.get(t)}function j(t){return N.get(t)}function x(t){let e=Math.floor(t),n=t-e;return e+Math.round(n*2)/2}function X(t){return x((t==null?void 0:t.map(e=>e.point??0).reduce((e,n)=>e+n))/4)}function K(t){return t==null?void 0:t.map(e=>new q(e==null?void 0:e.key,e==null?void 0:e.point,e==null?void 0:e.comment))}function q(t,e,n){this.nameCriteria=z(t),this.autoComment=J(t,e),this.comment=n,this.point=e}function z(t){return R.get(t)}function J(t,e){if(t==null||t==null)return"";switch(t){case"fluency_and_coherence":return G[e];case"lexical_resource":return C[e];case"grammatical_range_accuracy":return $[e];case"pronunciation":return P[e];case"task_achievement_writing":return k[e];case"lexical_resource_writing":return M[e];case"grammatical_range_accuracy_writing":return A[e];case"coherence_cohesion_writing":return L[e]}}const Z={name:"ResultDetail",props:{resultTest:{type:Object,default(){return{}}},testIELTS:{type:Boolean,default(){return!1}}},computed:{handleCheckType(){switch(this.result.type){case 0:return"listening";case 1:return"Speaking";case 2:return"Reading";case 3:return"Writing";case 4:return"Overall"}},handleCheckTypeIcon(){switch(this.result.type){case 0:return"fa-sharp fa-solid fa-volume-high";case 1:return"fa-sharp fa-solid fa-message";case 2:return"fa-solid fa-book";case 3:return"fa-solid fa-pen";case 4:return"fa fa-envelope "}},totalPointTest(){var t,e,n,o;return this.testIELTS?((t=this.resultTest)==null?void 0:t.totalPoint)??((e=this.resultTest)==null?void 0:e.totalPointAuto):x(((n=this.resultTest)==null?void 0:n.totalPoint)??((o=this.resultTest)==null?void 0:o.totalPointAuto)*10/9)},pointLadder(){return this.testIELTS?"9.0":"10"}}},tt={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},et={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},st={class:"flex items-center"},nt={class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},lt={class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},ot={class:"text-right text-test-while"},it=s("br",null,null,-1),rt={class:"font-bold text-test-text-result"},ct={class:"pt-[16px] px-[16px] pb-[28px]"},at=s("h3",null,"Nhận xét:",-1),ut={key:0,class:"mb-0"},_t={key:1},ht=s("p",{class:"mb-0"},"Học viên đọc phần nhận xét chi tiết để hiểu rõ những tiêu chí của kĩ năng này",-1),pt={class:"text-center mt-2"},dt={class:"demo-collapse"},xt={class:"mb-5 text-left text-[15px]"},ft={style:{"font-weight":"bold"}},gt=s("h4",null,"Chi tiết :",-1),Tt=s("hr",null,null,-1);function Et(t,e,n,o,l,i){var u,_,m,v;const h=d("el-collapse-item"),p=d("el-collapse");return c(),a("div",tt,[s("div",et,[s("div",st,[s("div",nt,[s("i",{class:B([(u=n.resultTest)==null?void 0:u.icon,"fa-sharp fa-solid fa-volume-high text-[22px]"])},null,2)]),s("h2",lt,r((_=n.resultTest)==null?void 0:_.nameType),1)]),s("h2",ot,[I("Số điểm "),it,s("span",rt,r((((m=n.resultTest)==null?void 0:m.totalPoint)??((v=n.resultTest)==null?void 0:v.totalPointAuto)).toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+r(i.pointLadder),1)])]),s("div",ct,[at,n.resultTest.totalQuestions?(c(),a("p",ut,"Học viên đúng "+r(n.resultTest.correctQuestions)+"/"+r(n.resultTest.totalQuestions)+" câu trong kỹ năng này",1)):(c(),a("div",_t,[ht,s("div",pt,[s("div",dt,[T(p,null,{default:b(()=>[T(h,{title:"Xem Thêm",name:"1",class:"text-[15px]"},{default:b(()=>[(c(!0),a(y,null,w(n.resultTest.dataComments,(g,S)=>(c(),a("div",xt,[s("h4",ft,"Tiêu chí "+r(S+1)+": "+r(g.nameCriteria),1),s("p",null,r(g.autoComment),1),gt,s("p",null,r(g.comment),1),Tt]))),256))]),_:1})]),_:1})])])]))])])}const mt=E(Z,[["render",Et]]),vt="test-input/get-point",bt=U({id:"resultTest",state:()=>({resultTests:[]}),getters:{},actions:{GET_POINT(t){return new Promise((e,n)=>{Y.query(`/${vt}/${t.id}`).then(o=>{e(o)}).catch(o=>{n(o)})})}}}),It=bt(),yt={name:"OveralResult",props:{pointOverall:{type:Number,default(){return 0}},testIELTS:{type:Boolean,default(){return!1}}},computed:{pointLadder(){return this.testIELTS?"9.0":"10"}}},wt={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},St={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},Ot=s("div",{class:"flex items-center"},[s("div",{class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},[s("i",{class:"fa-sharp fa-solid fa-volume-high text-[22px]"})]),s("h2",{class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},"Overall")],-1),Nt={class:"text-right text-test-while"},Rt=s("br",null,null,-1),Lt={class:"font-bold text-test-text-result"},At=s("div",{class:"pt-[16px] px-[16px] pb-[28px]"},null,-1);function Mt(t,e,n,o,l,i){return c(),a("div",wt,[s("div",St,[Ot,s("h2",Nt,[I("Số điểm "),Rt,s("span",Lt,r(n.pointOverall.toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+r(i.pointLadder),1)])]),At])}const kt=E(yt,[["render",Mt]]);const Pt={name:"testGeneral",components:{OveralResult:kt,ResultDetail:mt},created(){},mounted(){this.getPoint()},data(){return{resultTests:[],testIELTS:!1}},methods:{getPoint(){It.GET_POINT({id:6}).then(t=>{var e;if(!t.data.error){let n=["speaking","writing","listening","vocabulary","reading"];((e=t.data.data)==null?void 0:e.reading)!=null?(n=["speaking","writing","listening","reading"],this.testIELTS=!0):n=["speaking","vocabulary"];let o=n.map(l=>{var h,p,u,_;if(!((p=(h=t==null?void 0:t.data)==null?void 0:h.data)!=null&&p.hasOwnProperty(l))||((u=t==null?void 0:t.data)==null?void 0:u.data[l])==null)return null;let i=(_=t==null?void 0:t.data)==null?void 0:_.data[l];return new V(D.get(l),i==null?void 0:i.right_answers,i.total_correct,i.avg_point,i)}).filter(l=>l!=null);this.resultTests=o,console.log(o)}})}},computed:{pointOverall(){return x(this.resultTests.map(t=>(t==null?void 0:t.totalPoint)??(t==null?void 0:t.totalPointAuto)??0).reduce((t,e)=>t+e)/this.resultTests.length)}}},f=t=>(F("data-v-4497c090"),t=t(),Q(),t),$t={class:"result bg-white pt-[32px] px-[36px] rounded-t-[32px] pb-[48px] lg:rounded-32 lg:h-auto"},Ct=f(()=>s("div",{class:"flex flex-col lg:flex-row"},[s("h3",{class:"text-[17px] text-test-text-page-result opacity-100 font-bold mr-2"},"Xin chào bạn"),s("h3",{class:"text-[17px] text-test-text-page-result opacity-100 font-bold"})],-1)),Gt=f(()=>s("p",null,"Chúc mừng bạn đã hoàn thành tất cả bài test! ECoach xin gửi kết quả kiểm tra đầu vào của bạn như sau:",-1)),Dt={class:"result__tests mt-[22px]"},Bt=f(()=>s("h3",{class:"mb-5"},"Khóa học gợi ý ",-1)),Ut=f(()=>s("div",{class:"h-[73px] w-full flex items-center shadow-md border border-gray-100 rounded-[16px] py-[24px] pl-[28px]"},[s("h3",null,"Basic")],-1));function Yt(t,e,n,o,l,i){const h=d("ResultDetail"),p=d("OveralResult");return c(),a("div",$t,[Ct,Gt,s("div",Dt,[(c(!0),a(y,null,w(l.resultTests,(u,_)=>(c(),H(h,{key:_,resultTest:u,testIELTS:l.testIELTS},null,8,["resultTest","testIELTS"]))),128)),T(p,{pointOverall:i.pointOverall,testIELTS:l.testIELTS},null,8,["pointOverall","testIELTS"])]),Bt,Ut])}const Qt=E(Pt,[["render",Yt],["__scopeId","data-v-4497c090"]]);export{Qt as default};
