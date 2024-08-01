import{u as E}from"./user-store-a25ada6c.js";import{r as R}from"./result-test-store-0c3ec819.js";import{t as A,R as D}from"./test-result-model-a4f60371.js";import{_ as P,o,c as r,a as t,g as b,t as l,W as F,P as V,r as y,n as $,i as O,D as w,d as S,b as k,F as B,f as N,B as G,p as M,q as Q}from"./index-6fc0ca03.js";const W={name:"OveralResult",props:{pointOverall:{type:Number,default(){return 0}},testIELTS:{type:Boolean,default(){return!1}}},computed:{pointLadder(){return this.testIELTS?"9.0":"10"}}},X={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},Y={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},j=t("div",{class:"flex items-center"},[t("div",{class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},[t("i",{class:"fa-sharp fa-solid fa-message text-[22px]"})]),t("h2",{class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},"Overall")],-1),q={class:"text-right text-test-while"},H=t("br",null,null,-1),K={class:"font-bold text-test-text-result"},U=t("div",{class:"pt-[16px] px-[16px] pb-[28px]"},null,-1);function z(e,c,s,d,n,a){return o(),r("div",X,[t("div",Y,[j,t("h2",q,[b("Số điểm "),H,t("span",K,l(s.pointOverall.toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+l(a.pointLadder),1)])]),U])}const J=P(W,[["render",z]]),Z={name:"ResultDetail",props:{resultTest:{type:Object,default(){return{}}},testIELTS:{type:Boolean,default(){return!1}}},data(){return{writing:F}},computed:{handleCheckType(){switch(this.result.type){case 0:return"listening";case 1:return"Speaking";case 2:return"Reading";case 3:return"Writing";case 4:return"Overall"}},handleCheckTypeIcon(){switch(this.result.type){case 0:return"fa-sharp fa-solid fa-volume-high";case 1:return"fa-sharp fa-solid fa-message";case 2:return"fa-solid fa-book";case 3:return"fa-solid fa-pen";case 4:return"fa fa-envelope "}},totalPointTest(){var e,c,s,d;return this.testIELTS?((e=this.resultTest)==null?void 0:e.totalPoint)??((c=this.resultTest)==null?void 0:c.totalPointAuto):A(((s=this.resultTest)==null?void 0:s.totalPoint)??((d=this.resultTest)==null?void 0:d.totalPointAuto)*10/9)},pointLadder(){return this.testIELTS?"9.0":"10"},check0And1Point(){return[0,1].includes(+this.resultTest.dataComments[0].point)},dataPlagiarism(){var e;return(e=this.resultTest)!=null&&e.typePlagiarism?V.find(c=>{var s;return c.value===+((s=this.resultTest)==null?void 0:s.typePlagiarism)}):null}}},tt={class:"result__content w-full shadow-lg rounded-[16px] mb-[32px]"},et={class:"w-full bg-test-bg-header-intro rounded-t-[16px] flex justify-between py-[11px] px-[16px]"},st={class:"flex items-center"},lt={class:"rounded-32 bg-707070 w-[37px] h-[37px] flex justify-center items-center text-fdb913 bg-test-bg-icon-result"},nt={class:"text-[18px] font-bold text-white ml-[10px] xl:text-[20px]"},ot={class:"text-right text-test-while"},it=t("br",null,null,-1),rt={class:"font-bold text-test-text-result"},ct={class:"pt-[16px] px-[16px] pb-[28px]"},at=t("h3",null,"Nhận xét:",-1),ut={key:0,class:"mb-0"},dt={key:1},ht=t("p",{class:"mb-0"},"Học viên đọc phần nhận xét chi tiết để hiểu rõ những tiêu chí của kĩ năng này",-1),_t={class:"text-center mt-2"},pt={class:"demo-collapse"},mt={style:{"font-weight":"bold"}},xt={style:{"white-space":"pre-line"}},gt=t("h4",null,"Chi tiết :",-1),ft={style:{"white-space":"pre-line"}},Tt=t("hr",null,null,-1),vt={class:"mb-5 text-left text-[15px]"},bt={style:{"white-space":"pre-line"}},yt={key:0},wt={style:{"white-space":"pre-line"}},St=t("hr",null,null,-1),kt={key:0,class:"mt-3"},Pt=t("hr",null,null,-1),It=t("p",{style:{color:"#FF0000","font-weight":"bold"},class:"mt-3"},"Bài viết có dấu hiệu đạo văn!",-1),Lt={class:"md:grid grid-cols-8 mt-2"},Ct=t("p",{class:"col-span-2"},"Tỉ lệ đạo văn:",-1),Et={class:"col-span-6"},Rt={class:"md:grid grid-cols-8 mt-2"},Ot=t("p",{class:"col-span-2"},"Phương án xử lý:",-1),Bt={class:"col-span-6"},Nt={class:"md:grid grid-cols-8 mt-2"},At=t("p",{class:"col-span-2"},"Nhận xét, dẫn chứng:",-1),Dt={class:"col-span-6",style:{"white-space":"pre-wrap","word-break":"break-all"}};function Ft(e,c,s,d,n,a){var p,i,u,x,g,f,T,L;const h=y("el-collapse-item"),_=y("el-collapse");return o(),r("div",tt,[t("div",et,[t("div",st,[t("div",lt,[t("i",{class:$([(p=s.resultTest)==null?void 0:p.icon,"fa-sharp fa-solid fa-volume-high text-[22px]"])},null,2)]),t("h2",nt,l((i=s.resultTest)==null?void 0:i.nameType),1)]),t("h2",ot,[b("Số điểm "),it,t("span",rt,l((((u=s.resultTest)==null?void 0:u.totalPoint)??((x=s.resultTest)==null?void 0:x.totalPointAuto)).toLocaleString("en-US",{minimumFractionDigits:1}))+" /"+l(a.pointLadder),1)])]),t("div",ct,[at,s.resultTest.totalQuestions?(o(),r("p",ut,"Học viên đúng "+l(s.resultTest.correctQuestions)+"/"+l(s.resultTest.totalQuestions)+" câu trong kỹ năng này",1)):(o(),r("div",dt,[ht,t("div",_t,[t("div",pt,[O(_,null,{default:w(()=>[a.check0And1Point?(o(),k(h,{key:1,title:"Xem Thêm",name:"1",class:"text-[15px]"},{default:w(()=>{var m,v,C;return[t("div",vt,[t("p",bt,l((m=s.resultTest)==null?void 0:m.dataComments[0].autoComment),1),(v=s.resultTest)!=null&&v.dataComments[0].comment?(o(),r("h4",yt,"Chi tiết :")):S("",!0),t("p",wt,l((C=s.resultTest)==null?void 0:C.dataComments[0].comment),1),St])]}),_:1})):(o(),k(h,{key:0,title:"Xem Thêm",name:"1",class:"text-[15px]"},{default:w(()=>[(o(!0),r(B,null,N(s.resultTest.dataComments,(m,v)=>(o(),r("div",{key:v,class:"mb-5 text-left text-[15px]"},[t("h4",mt,"Tiêu chí "+l(v+1)+": "+l(m.nameCriteria),1),t("p",xt,l(m.autoComment),1),gt,t("p",ft,l(m.comment),1),Tt]))),128))]),_:1}))]),_:1})])]),+s.resultTest.type===n.writing&&((g=this.resultTest)!=null&&g.typePlagiarism)?(o(),r("div",kt,[Pt,It,t("div",null,[t("div",Lt,[Ct,t("p",Et,l((f=a.dataPlagiarism)==null?void 0:f.label),1)]),t("div",Rt,[Ot,t("p",Bt,l((T=a.dataPlagiarism)==null?void 0:T.problemSolution),1)]),t("div",Nt,[At,t("p",Dt,l(((L=s.resultTest)==null?void 0:L.descriptionPlagiarism)??""),1)])])])):S("",!0)]))])])}const Vt=P(Z,[["render",Ft]]);const $t={name:"ResultPage",components:{OveralResult:J,ResultDetail:Vt},setup(){return{userStore:E,resultTestStore:R}},created(){},mounted(){this.getInformation(),this.getPoint()},data(){return{testSchedule:{},resultTests:[],testIELTS:!1,suggestedCourse:null,pointOverall:null}},methods:{getInformation(){this.testSchedule=E.getTestSchedule()},getPoint(){R.GET_POINT({id:this.testSchedule.id}).then(e=>{var c,s,d,n,a,h;if(!e.data.error){this.suggestedCourse=(s=(c=e==null?void 0:e.data)==null?void 0:c.data)==null?void 0:s.course_suggest;let _=["speaking","writing","listening","vocabulary","reading"];((n=(d=e==null?void 0:e.data.data)==null?void 0:d.vocabulary)==null?void 0:n.right_answers)>19?(_=["speaking","writing","listening","reading"],this.testIELTS=!0):_=["speaking","vocabulary"];let p=_.map(i=>{var x,g,f,T;if(!((g=(x=e==null?void 0:e.data)==null?void 0:x.data)!=null&&g.hasOwnProperty(i))||((f=e==null?void 0:e.data)==null?void 0:f.data[i])==null)return null;let u=(T=e==null?void 0:e.data)==null?void 0:T.data[i];return new D(G.get(i),u==null?void 0:u.right_answers,u.total_correct,u.avg_point,u,e==null?void 0:e.data.data)}).filter(i=>i!=null);this.resultTests=p,this.pointOverall=(h=(a=e==null?void 0:e.data)==null?void 0:a.data)==null?void 0:h.overall}})}},computed:{}},I=e=>(M("data-v-c1da692e"),e=e(),Q(),e),Gt={class:"result bg-white pt-[32px] px-[36px] rounded-t-[32px] pb-[48px] lg:rounded-32 lg:h-auto"},Mt={class:"flex flex-col lg:flex-row"},Qt=I(()=>t("h3",{class:"text-[17px] text-test-text-page-result opacity-100 font-bold mr-2"},"Xin chào bạn",-1)),Wt={class:"text-[17px] text-test-text-page-result opacity-100 font-bold"},Xt=I(()=>t("p",null,[b("Chúc mừng bạn đã hoàn thành tất cả bài test! "),t("br"),b(" ECoach xin gửi kết quả kiểm tra đầu vào của bạn như sau:")],-1)),Yt={class:"result__tests mt-[22px]"},jt={key:0},qt=I(()=>t("h3",{class:"mb-5"},"Khóa học gợi ý ",-1)),Ht={class:"h-[73px] w-full flex items-center shadow-md border border-gray-100 rounded-[16px] py-[24px] pl-[28px]"};function Kt(e,c,s,d,n,a){const h=y("ResultDetail"),_=y("OveralResult");return o(),r("div",Gt,[t("div",Mt,[Qt,t("h3",Wt,l(n.testSchedule.name)+" - "+l(n.testSchedule.phone),1)]),Xt,t("div",Yt,[(o(!0),r(B,null,N(n.resultTests,(p,i)=>(o(),k(h,{key:i,resultTest:p,testIELTS:n.testIELTS},null,8,["resultTest","testIELTS"]))),128)),O(_,{pointOverall:n.pointOverall,testIELTS:n.testIELTS},null,8,["pointOverall","testIELTS"])]),n.suggestedCourse?(o(),r("div",jt,[qt,t("div",Ht,[t("h3",null,l(n.suggestedCourse),1)])])):S("",!0)])}const te=P($t,[["render",Kt],["__scopeId","data-v-c1da692e"]]);export{te as default};
