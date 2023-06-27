import{u as b}from"./user-store-030fb1cb.js";import{r as y}from"./result-test-store-10a08701.js";import{u as N,x as L,N as A,y as M,z as k,A as P,B as C,D as $,G as D,I as G,J as B,_ as m,o as c,c as u,a as s,h as w,t as r,r as d,n as U,g as T,K as S,F as R,d as O,L as Y,e as H,p as F,l as Q}from"./index-f4b7772d.js";function V(t,e=null,n=null,i=null,l=[]){this.type=t,this.correctQuestions=e,this.totalQuestions=n,this.nameType=K(t),this.totalPointAuto=x(i),this.icon=W(t),l.length&&(this.dataComments=j(l),this.totalPoint=X(this.dataComments))}function W(t){return N.get(t)}function K(t){return L.get(t)}function x(t){let e=Math.floor(t),n=t-e;return e+Math.round(n*2)/2}function X(t){return x((t==null?void 0:t.map(e=>e.point??0).reduce((e,n)=>e+n))/4)}function j(t){return t==null?void 0:t.map(e=>new z(e==null?void 0:e.key,e==null?void 0:e.point,e==null?void 0:e.comment))}function z(t,e,n){this.nameCriteria=q(t),this.autoComment=J(t,e),this.comment=n,this.point=e}function q(t){return A.get(t)}function J(t,e){if(t==null||t==null)return"";switch(t){case"fluency_and_coherence":return B[e];case"lexical_resource":return G[e];case"grammatical_range_accuracy":return D[e];case"pronunciation":return $[e];case"task_achievement_writing":return C[e];case"lexical_resource_writing":return P[e];case"grammatical_range_accuracy_writing":return k[e];case"coherence_cohesion_writing":return M[e]}}const Z={name:"OveralResult",props:{pointOverall:{type:Number,default(){return 0}},testIELTS:{type:Boolean,default(){return!1}}},computed:{pointLadder(){return this.testIELTS?"9.0":"10"}}},tt={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},et={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},st=s("div",{class:"flex items-center"},[s("div",{class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},[s("i",{class:"fa-sharp fa-solid fa-volume-high text-[22px]"})]),s("h2",{class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},"Overall")],-1),nt={class:"text-right text-test-while"},lt=s("br",null,null,-1),ot={class:"font-bold text-test-text-result"},rt=s("div",{class:"pt-[16px] px-[16px] pb-[28px]"},null,-1);function it(t,e,n,i,l,o){return c(),u("div",tt,[s("div",et,[st,s("h2",nt,[w("Số điểm "),lt,s("span",ot,r(n.pointOverall.toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+r(o.pointLadder),1)])]),rt])}const ct=m(Z,[["render",it]]),ut={name:"ResultDetail",props:{resultTest:{type:Object,default(){return{}}},testIELTS:{type:Boolean,default(){return!1}}},computed:{handleCheckType(){switch(this.result.type){case 0:return"listening";case 1:return"Speaking";case 2:return"Reading";case 3:return"Writing";case 4:return"Overall"}},handleCheckTypeIcon(){switch(this.result.type){case 0:return"fa-sharp fa-solid fa-volume-high";case 1:return"fa-sharp fa-solid fa-message";case 2:return"fa-solid fa-book";case 3:return"fa-solid fa-pen";case 4:return"fa fa-envelope "}},totalPointTest(){var t,e,n,i;return this.testIELTS?((t=this.resultTest)==null?void 0:t.totalPoint)??((e=this.resultTest)==null?void 0:e.totalPointAuto):x(((n=this.resultTest)==null?void 0:n.totalPoint)??((i=this.resultTest)==null?void 0:i.totalPointAuto)*10/9)},pointLadder(){return this.testIELTS?"9.0":"10"}}},at={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},_t={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},ht={class:"flex items-center"},pt={class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},dt={class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},xt={class:"text-right text-test-while"},ft=s("br",null,null,-1),gt={class:"font-bold text-test-text-result"},Tt={class:"pt-[16px] px-[16px] pb-[28px]"},mt=s("h3",null,"Nhận xét:",-1),Et={key:0,class:"mb-0"},vt={key:1},It=s("p",{class:"mb-0"},"Học viên đọc phần nhận xét chi tiết để hiểu rõ những tiêu chí của kĩ năng này",-1),bt={class:"text-center mt-2"},yt={class:"demo-collapse"},St={style:{"font-weight":"bold"}},wt=s("h4",null,"Chi tiết :",-1),Rt=s("hr",null,null,-1);function Ot(t,e,n,i,l,o){var a,_,E,v;const h=d("el-collapse-item"),p=d("el-collapse");return c(),u("div",at,[s("div",_t,[s("div",ht,[s("div",pt,[s("i",{class:U([(a=n.resultTest)==null?void 0:a.icon,"fa-sharp fa-solid fa-volume-high text-[22px]"])},null,2)]),s("h2",dt,r((_=n.resultTest)==null?void 0:_.nameType),1)]),s("h2",xt,[w("Số điểm "),ft,s("span",gt,r((((E=n.resultTest)==null?void 0:E.totalPoint)??((v=n.resultTest)==null?void 0:v.totalPointAuto)).toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+r(o.pointLadder),1)])]),s("div",Tt,[mt,n.resultTest.totalQuestions?(c(),u("p",Et,"Học viên đúng "+r(n.resultTest.correctQuestions)+"/"+r(n.resultTest.totalQuestions)+" câu trong kỹ năng này",1)):(c(),u("div",vt,[It,s("div",bt,[s("div",yt,[T(p,null,{default:S(()=>[T(h,{title:"Xem Thêm",name:"1",class:"text-[15px]"},{default:S(()=>[(c(!0),u(R,null,O(n.resultTest.dataComments,(g,I)=>(c(),u("div",{key:I,class:"mb-5 text-left text-[15px]"},[s("h4",St,"Tiêu chí "+r(I+1)+": "+r(g.nameCriteria),1),s("p",null,r(g.autoComment),1),wt,s("p",null,r(g.comment),1),Rt]))),128))]),_:1})]),_:1})])])]))])])}const Nt=m(ut,[["render",Ot]]);const Lt={name:"ResultPage",components:{OveralResult:ct,ResultDetail:Nt},setup(){return{userStore:b,resultTestStore:y}},created(){},mounted(){this.getInformation(),this.getPoint()},data(){return{testSchedule:{},resultTests:[],testIELTS:!1}},methods:{getInformation(){this.testSchedule=b.getTestSchedule()},getPoint(){y.GET_POINT({id:this.testSchedule.id}).then(t=>{var e;if(!t.data.error){let n=["speaking","writing","listening","vocabulary","reading"];((e=t.data.data)==null?void 0:e.reading)!=null?(n=["speaking","writing","listening","reading"],this.testIELTS=!0):n=["speaking","vocabulary"];let i=n.map(l=>{var h,p,a,_;if(!((p=(h=t==null?void 0:t.data)==null?void 0:h.data)!=null&&p.hasOwnProperty(l))||((a=t==null?void 0:t.data)==null?void 0:a.data[l])==null)return null;let o=(_=t==null?void 0:t.data)==null?void 0:_.data[l];return new V(Y.get(l),o==null?void 0:o.right_answers,o.total_correct,o.avg_point,o)}).filter(l=>l!=null);this.resultTests=i,console.log(i)}})}},computed:{pointOverall(){return x(this.resultTests.map(t=>(t==null?void 0:t.totalPoint)??(t==null?void 0:t.totalPointAuto)??0).reduce((t,e)=>t+e)/this.resultTests.length)}}},f=t=>(F("data-v-f901cc1e"),t=t(),Q(),t),At={class:"result bg-white pt-[32px] px-[36px] rounded-t-[32px] pb-[48px] lg:rounded-32 lg:h-auto"},Mt=f(()=>s("div",{class:"flex flex-col lg:flex-row"},[s("h3",{class:"text-[17px] text-test-text-page-result opacity-100 font-bold mr-2"},"Xin chào bạn"),s("h3",{class:"text-[17px] text-test-text-page-result opacity-100 font-bold"})],-1)),kt=f(()=>s("p",null,"Chúc mừng bạn đã hoàn thành tất cả bài test! ECoach xin gửi kết quả kiểm tra đầu vào của bạn như sau:",-1)),Pt={class:"result__tests mt-[22px]"},Ct=f(()=>s("h3",{class:"mb-5"},"Khóa học gợi ý ",-1)),$t=f(()=>s("div",{class:"h-[73px] w-full flex items-center shadow-md border border-gray-100 rounded-[16px] py-[24px] pl-[28px]"},[s("h3",null,"Basic")],-1));function Dt(t,e,n,i,l,o){const h=d("ResultDetail"),p=d("OveralResult");return c(),u("div",At,[Mt,kt,s("div",Pt,[(c(!0),u(R,null,O(l.resultTests,(a,_)=>(c(),H(h,{key:_,resultTest:a,testIELTS:l.testIELTS},null,8,["resultTest","testIELTS"]))),128)),T(p,{pointOverall:o.pointOverall,testIELTS:l.testIELTS},null,8,["pointOverall","testIELTS"])]),Ct,$t])}const Yt=m(Lt,[["render",Dt],["__scopeId","data-v-f901cc1e"]]);export{Yt as default};
