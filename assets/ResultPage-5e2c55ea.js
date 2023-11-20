import{u as y}from"./user-store-7d617e98.js";import{r as S}from"./result-test-store-d988808a.js";import{u as N,x as M,N as L,y as A,z as k,A as P,B as C,D as $,G as D,I as G,J as B,_ as E,o as u,c as a,a as s,j as f,t as o,r as g,n as U,g as m,K as w,F as R,d as O,L as Y,f as F,e as H,p as V,l as Q}from"./index-40157234.js";function W(t,e=null,n=null,r=null,l=[]){this.type=t,this.correctQuestions=e,this.totalQuestions=n,this.nameType=X(t),this.totalPointAuto=j(r),this.icon=K(t),l.length&&(this.dataComments=q(l),this.totalPoint=z(this.dataComments))}function K(t){return N.get(t)}function X(t){return M.get(t)}function j(t){let e=Math.floor(t),n=t-e;return e+Math.floor(n*2)/2}function v(t){let e=Math.floor(t),n=t-e;return e+Math.round(n*2)/2}function z(t){return v((t==null?void 0:t.map(e=>parseFloat(e.point)??0).reduce((e,n)=>e+n))/4)}function q(t){return t==null?void 0:t.map(e=>new J(e==null?void 0:e.key,e==null?void 0:e.point,e==null?void 0:e.comment))}function J(t,e,n){this.nameCriteria=Z(t),this.autoComment=tt(t,e),this.comment=n,this.point=e}function Z(t){return L.get(t)}function tt(t,e){if(t==null||t==null)return"";switch(t){case"fluency_and_coherence":return B[e];case"lexical_resource":return G[e];case"grammatical_range_accuracy":return D[e];case"pronunciation":return $[e];case"task_achievement_writing":return C[e];case"lexical_resource_writing":return P[e];case"grammatical_range_accuracy_writing":return k[e];case"coherence_cohesion_writing":return A[e]}}const et={name:"OveralResult",props:{pointOverall:{type:Number,default(){return 0}},testIELTS:{type:Boolean,default(){return!1}}},computed:{pointLadder(){return this.testIELTS?"9.0":"10"}}},st={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},nt={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},lt=s("div",{class:"flex items-center"},[s("div",{class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},[s("i",{class:"fa-sharp fa-solid fa-message text-[22px]"})]),s("h2",{class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},"Overall")],-1),ot={class:"text-right text-test-while"},rt=s("br",null,null,-1),it={class:"font-bold text-test-text-result"},ct=s("div",{class:"pt-[16px] px-[16px] pb-[28px]"},null,-1);function ut(t,e,n,r,l,_){return u(),a("div",st,[s("div",nt,[lt,s("h2",ot,[f("Số điểm "),rt,s("span",it,o(n.pointOverall.toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+o(_.pointLadder),1)])]),ct])}const at=E(et,[["render",ut]]),_t={name:"ResultDetail",props:{resultTest:{type:Object,default(){return{}}},testIELTS:{type:Boolean,default(){return!1}}},computed:{handleCheckType(){switch(this.result.type){case 0:return"listening";case 1:return"Speaking";case 2:return"Reading";case 3:return"Writing";case 4:return"Overall"}},handleCheckTypeIcon(){switch(this.result.type){case 0:return"fa-sharp fa-solid fa-volume-high";case 1:return"fa-sharp fa-solid fa-message";case 2:return"fa-solid fa-book";case 3:return"fa-solid fa-pen";case 4:return"fa fa-envelope "}},totalPointTest(){var t,e,n,r;return this.testIELTS?((t=this.resultTest)==null?void 0:t.totalPoint)??((e=this.resultTest)==null?void 0:e.totalPointAuto):v(((n=this.resultTest)==null?void 0:n.totalPoint)??((r=this.resultTest)==null?void 0:r.totalPointAuto)*10/9)},pointLadder(){return this.testIELTS?"9.0":"10"}}},ht={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},pt={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},dt={class:"flex items-center"},xt={class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},ft={class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},gt={class:"text-right text-test-while"},Tt=s("br",null,null,-1),mt={class:"font-bold text-test-text-result"},Et={class:"pt-[16px] px-[16px] pb-[28px]"},vt=s("h3",null,"Nhận xét:",-1),bt={key:0,class:"mb-0"},It={key:1},yt=s("p",{class:"mb-0"},"Học viên đọc phần nhận xét chi tiết để hiểu rõ những tiêu chí của kĩ năng này",-1),St={class:"text-center mt-2"},wt={class:"demo-collapse"},Rt={style:{"font-weight":"bold"}},Ot={style:{"white-space":"pre-line"}},Nt=s("h4",null,"Chi tiết :",-1),Mt={style:{"white-space":"pre-line"}},Lt=s("hr",null,null,-1);function At(t,e,n,r,l,_){var h,p,d,x;const i=g("el-collapse-item"),c=g("el-collapse");return u(),a("div",ht,[s("div",pt,[s("div",dt,[s("div",xt,[s("i",{class:U([(h=n.resultTest)==null?void 0:h.icon,"fa-sharp fa-solid fa-volume-high text-[22px]"])},null,2)]),s("h2",ft,o((p=n.resultTest)==null?void 0:p.nameType),1)]),s("h2",gt,[f("Số điểm "),Tt,s("span",mt,o((((d=n.resultTest)==null?void 0:d.totalPoint)??((x=n.resultTest)==null?void 0:x.totalPointAuto)).toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+o(_.pointLadder),1)])]),s("div",Et,[vt,n.resultTest.totalQuestions?(u(),a("p",bt,"Học viên đúng "+o(n.resultTest.correctQuestions)+"/"+o(n.resultTest.totalQuestions)+" câu trong kỹ năng này",1)):(u(),a("div",It,[yt,s("div",St,[s("div",wt,[m(c,null,{default:w(()=>[m(i,{title:"Xem Thêm",name:"1",class:"text-[15px]"},{default:w(()=>[(u(!0),a(R,null,O(n.resultTest.dataComments,(T,I)=>(u(),a("div",{key:I,class:"mb-5 text-left text-[15px]"},[s("h4",Rt,"Tiêu chí "+o(I+1)+": "+o(T.nameCriteria),1),s("p",Ot,o(T.autoComment),1),Nt,s("p",Mt,o(T.comment),1),Lt]))),128))]),_:1})]),_:1})])])]))])])}const kt=E(_t,[["render",At]]);const Pt={name:"ResultPage",components:{OveralResult:at,ResultDetail:kt},setup(){return{userStore:y,resultTestStore:S}},created(){},mounted(){this.getInformation(),this.getPoint()},data(){return{testSchedule:{},resultTests:[],testIELTS:!1,suggestedCourse:null}},methods:{getInformation(){this.testSchedule=y.getTestSchedule()},getPoint(){S.GET_POINT({id:this.testSchedule.id}).then(t=>{var e,n,r;if(!t.data.error){this.suggestedCourse=(n=(e=t==null?void 0:t.data)==null?void 0:e.data)==null?void 0:n.course_suggest;let l=["speaking","writing","listening","vocabulary","reading"];((r=t.data.data)==null?void 0:r.reading)!=null?(l=["speaking","writing","listening","reading"],this.testIELTS=!0):l=["speaking","vocabulary"];let _=l.map(i=>{var h,p,d,x;if(!((p=(h=t==null?void 0:t.data)==null?void 0:h.data)!=null&&p.hasOwnProperty(i))||((d=t==null?void 0:t.data)==null?void 0:d.data[i])==null)return null;let c=(x=t==null?void 0:t.data)==null?void 0:x.data[i];return new W(Y.get(i),c==null?void 0:c.right_answers,c.total_correct,c.avg_point,c)}).filter(i=>i!=null);this.resultTests=_}})}},computed:{pointOverall(){return v(this.resultTests.map(t=>(t==null?void 0:t.totalPoint)??(t==null?void 0:t.totalPointAuto)??0).reduce((t,e)=>t+e)/this.resultTests.length)}}},b=t=>(V("data-v-bbd44a14"),t=t(),Q(),t),Ct={class:"result bg-white pt-[32px] px-[36px] rounded-t-[32px] pb-[48px] lg:rounded-32 lg:h-auto"},$t={class:"flex flex-col lg:flex-row"},Dt=b(()=>s("h3",{class:"text-[17px] text-test-text-page-result opacity-100 font-bold mr-2"},"Xin chào bạn",-1)),Gt={class:"text-[17px] text-test-text-page-result opacity-100 font-bold"},Bt=b(()=>s("p",null,[f("Chúc mừng bạn đã hoàn thành tất cả bài test! "),s("br"),f(" ECoach xin gửi kết quả kiểm tra đầu vào của bạn như sau:")],-1)),Ut={class:"result__tests mt-[22px]"},Yt={key:0},Ft=b(()=>s("h3",{class:"mb-5"},"Khóa học gợi ý ",-1)),Ht={class:"h-[73px] w-full flex items-center shadow-md border border-gray-100 rounded-[16px] py-[24px] pl-[28px]"};function Vt(t,e,n,r,l,_){const i=g("ResultDetail"),c=g("OveralResult");return u(),a("div",Ct,[s("div",$t,[Dt,s("h3",Gt,o(l.testSchedule.name)+" - "+o(l.testSchedule.phone),1)]),Bt,s("div",Ut,[(u(!0),a(R,null,O(l.resultTests,(h,p)=>(u(),H(i,{key:p,resultTest:h,testIELTS:l.testIELTS},null,8,["resultTest","testIELTS"]))),128)),m(c,{pointOverall:_.pointOverall,testIELTS:l.testIELTS},null,8,["pointOverall","testIELTS"])]),l.suggestedCourse?(u(),a("div",Yt,[Ft,s("div",Ht,[s("h3",null,o(l.suggestedCourse),1)])])):F("",!0)])}const Xt=E(Pt,[["render",Vt],["__scopeId","data-v-bbd44a14"]]);export{Xt as default};
