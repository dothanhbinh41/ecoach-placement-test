import{_ as x,o as a,c as d,a as n,t as u,w as O,v as X,b as D,r as c,F as m,d as T,e as g,f as _,g as w,n as A,h as P,i as $,j as S,E as k,T as K,m as J}from"./index-f4b7772d.js";import{h as E}from"./moment-fbc5633a.js";import{u as M}from"./user-store-030fb1cb.js";const z={name:"AnswerInputRadio",data(){return{}},props:{data:{type:Object,default:{}},id:{type:String},name:{type:String},userAnswer:{type:String}},computed:{answer(){var e;return((e=this.data)==null?void 0:e.content)??""}},methods:{change(){this.$emit("selectAnswer",this.answer)},checkAnswerSelected(){return this.userAnswer==this.answer}}},Z=["checked","id","name","value"],ee=["for"];function te(e,s,t,o,r,i){return a(),d("div",null,[n("input",{checked:i.checkAnswerSelected(),type:"radio",id:t.id,name:t.name,onChange:s[0]||(s[0]=(...l)=>i.change&&i.change(...l)),value:i.answer},null,40,Z),n("label",{for:t.id,class:"xl:text-[16px] text-test-color-text ml-[15px] xl:text-4 lg:text-[14px]"},u(this.answer),9,ee)])}const se=x(z,[["render",te]]),ne={name:"AnswerInputCheckBox",data(){return{selected:!1,disabled:!1}},props:{data:{type:Object,default:{}},id:"",name:"",userAnswers:{type:Object,default:[]}},mounted(){this.checkAnswerSelected()},watch:{userAnswers(){this.disabled=!this.selected&&this.userAnswers.length>=2}},computed:{answer(){var e;return((e=this.data)==null?void 0:e.content)??""}},methods:{change(){this.$emit("selectAnswer",this.answer,this.selected)},checkAnswerSelected(){this.selected=this.userAnswers.includes(this.answer)}}},ie=["id","name","disabled"],re=["for"];function le(e,s,t,o,r,i){return a(),d("div",null,[O(n("input",{type:"checkbox",class:"pointer",id:t.id,name:t.name,onChange:s[0]||(s[0]=(...l)=>i.change&&i.change(...l)),"onUpdate:modelValue":s[1]||(s[1]=l=>r.selected=l),disabled:r.disabled},null,40,ie),[[X,r.selected]]),n("label",{for:t.id,class:"xl:text-[16px] text-test-color-text ml-[15px] xl:text-4 lg:text-[14px] pointer"},u(this.answer),9,re)])}const ae=x(ne,[["render",le]]);const oe={name:"AnswerInputText",data(){return{answer:""}},props:{userAnswer:{type:String}},mounted(){this.answer=this.userAnswer},methods:{change(){this.$emit("changeInputAnswer",this.answer)}}};function de(e,s,t,o,r,i){return O((a(),d("input",{onInput:s[0]||(s[0]=(...l)=>i.change&&i.change(...l)),placeholder:"Enter your answer",class:"border-test-color-text border-b-[0.002px] pt-[20px] pl-5 w-[65%] h-[48px] focus:outline-none focus:border-[#3399FF] transition duration-300 bg-white","onUpdate:modelValue":s[1]||(s[1]=l=>r.answer=l)},null,544)),[[D,r.answer]])}const ue=x(oe,[["render",de],["__scopeId","data-v-1bdba106"]]),G=0,ce=1,he=2,N=0,B=2,Y=3,xe=5,pe=4;var L=(e=>(e[e.general=0]="general",e[e.speaking=1]="speaking",e[e.reading=2]="reading",e[e.writing=3]="writing",e[e.overall=4]="overall",e[e.listening=5]="listening",e))(L||{});function _e(e){if(e==null||e==null)return 5;switch(e){case 1:return 5;case 2:return 2;default:return 3}}const U=0,ge=1,me=2,H=3;var Q=(e=>(e[e.input=U]="input",e[e.checkbox=ge]="checkbox",e[e.radio=me]="radio",e))(Q||{});function R(e,s=null){var t;return{type:s??_e(e.Skill),description:e.Description??"",script:e.Script,title:e.Title,groupQuestions:(t=e==null?void 0:e.GroupQuestions)==null?void 0:t.map(o=>fe(o))}}function fe(e){var s;return{description:e==null?void 0:e.Description,audio:(e==null?void 0:e.Audio)??"",title:(e==null?void 0:e.Title)??"",image:(e==null?void 0:e.Image)??"",id:e==null?void 0:e._id,questions:(s=e==null?void 0:e.Questions)==null?void 0:s.map(t=>we(t,e.Type))}}function we(e,s){var t;return{description:"",image:"",userAnswer:"",userAnswers:[],idQuestion:e._id,correctAnswer:e==null?void 0:e.Correct,correctAnswers:[],title:e==null?void 0:e.Body,answers:(t=e==null?void 0:e.Answers)==null?void 0:t.map(o=>Te(o)),is_answer:!1,type:be(s),order:e==null?void 0:e.Order}}function Te(e){return{content:e}}function be(e){switch(e){case 1:return U;case 2:return Q.checkbox;case 4:return H;default:return Q.radio}}const ye={name:"AnswerInputTextArea",data(){return{answer:""}},props:{userAnswer:{type:String}},mounted(){this.answer=this.userAnswer},methods:{change(){this.$emit("changeInputAnswer",this.answer)}}};function Ae(e,s,t,o,r,i){return O((a(),d("textarea",{class:"w-full overflow-auto h-[347px] bg-[#F7F6F6] border-white rounded-[16px] p-4 xl:w-full xl:h-[617px] xl:p-[20px] xl:text-[16px] focus:outline-none","onUpdate:modelValue":s[0]||(s[0]=l=>r.answer=l),onInput:s[1]||(s[1]=(...l)=>i.change&&i.change(...l)),placeholder:"Nhập câu trả lời của bạn ở đây"},`\r
     `,544)),[[D,r.answer]])}const F=x(ye,[["render",Ae]]),ve={name:"questionTest",components:{AnswerInputTextArea:F,AnswerInputText:ue,AnswerInputCheckBox:ae,AnswerInputRadio:se},data(){return{selectedAnswer:"",selectedAnswers:[],answer:"",QUESTION_TYPE_CHECKBOX:ce,QUESTION_TYPE_INPUT:G,QUESTION_TYPE_RADIO:he,QUESTION_TYPE_TEXT_AREA:H}},mounted(){this.question.type==G},props:{question:{type:Object,default(){return{answers:[],title:"",type:-1}}},indexQuestion:{type:Number,default:0},indexGroupQuestion:{type:Number,default:0}},methods:{generateAnswerId(e,s,t){return`${this.generateAnswerName(e,s)}-${t}`},generateAnswerName(e,s){return`${e}-${s}`},handleChangeSingleAnswer(e){this.question.userAnswer=e,this.question.answered=e!=""},handleChangeMultipleAnswers(e,s){this.changeMultipleSelectedAnswers(e,s),this.question.userAnswers=[...this.selectedAnswers],this.question.answered=this.selectedAnswers.length>0},changeMultipleSelectedAnswers(e,s){let t=this.selectedAnswers.findIndex(o=>o==s);if(!s){this.selectedAnswers.splice(t,1);return}t<0&&this.selectedAnswers.push(e)}}},Pe=["id"],Ee={class:"xl:text-[20px] text-test-color-question lg:text-[17px]"},Se=["innerHTML"],Ie={class:"flex flex-col mt-[20px]"},ke={key:0},Ce={key:1},Ne={key:0},Qe={key:1};function Oe(e,s,t,o,r,i){const l=c("AnswerInputRadio"),p=c("AnswerInputCheckBox"),h=c("AnswerInputText"),f=c("AnswerInputTextArea");return a(),d("div",{class:"mt-5 h-fit",id:`${t.question.idQuestion}`},[n("h1",Ee,"Question "+u(t.question.order),1),n("h2",{class:"xl:text-[20px] text-[#4E4E4E] lg:text-[14px]",innerHTML:t.question.title},null,8,Se),n("div",Ie,[t.question.type==r.QUESTION_TYPE_RADIO?(a(),d("div",ke,[(a(!0),d(m,null,T(t.question.answers,(v,b)=>(a(),g(l,{data:v,id:i.generateAnswerId(t.indexGroupQuestion,t.indexQuestion,b),name:i.generateAnswerName(t.indexGroupQuestion,t.indexQuestion),onSelectAnswer:i.handleChangeSingleAnswer,key:b,userAnswer:t.question.userAnswer??""},null,8,["data","id","name","onSelectAnswer","userAnswer"]))),128))])):_("",!0),t.question.type==r.QUESTION_TYPE_CHECKBOX?(a(),d("div",Ce,[(a(!0),d(m,null,T(t.question.answers,(v,b)=>(a(),g(p,{data:v,id:i.generateAnswerId(t.indexGroupQuestion,t.indexQuestion,b),name:i.generateAnswerName(t.indexGroupQuestion,t.indexQuestion),onSelectAnswer:i.handleChangeMultipleAnswers,key:b,userAnswers:t.question.userAnswers??[]},null,8,["data","id","name","onSelectAnswer","userAnswers"]))),128))])):_("",!0)]),t.question.type==r.QUESTION_TYPE_INPUT?(a(),d("div",Ne,[w(h,{onChangeInputAnswer:i.handleChangeSingleAnswer,userAnswer:t.question.userAnswer??""},null,8,["onChangeInputAnswer","userAnswer"])])):_("",!0),t.question.type==r.QUESTION_TYPE_TEXT_AREA?(a(),d("div",Qe,[w(f,{onChangeInputAnswer:i.handleChangeSingleAnswer,userAnswer:t.question.userAnswer??""},null,8,["onChangeInputAnswer","userAnswer"])])):_("",!0)],8,Pe)}const Me=x(ve,[["render",Oe]]),Ge="/assets/CoAyCuaAnhAy-BaoAnh-9430793-a9911241.mp3",Re={name:"audioTest",mounted(){this.initPlayer()},props:{id:{type:String},src:{type:String}},watch:{id(){var e;(e=this.vid)==null||e.load(),this.play=!1,this.currentTime="00:00"}},data(){return{play:!1,vid:"",currentTime:"00:00",duration:""}},methods:{initPlayer(){this.vid=document.getElementById(this.id),this.vid.addEventListener("timeupdate",()=>this.onTimeUpdate()),this.vid.addEventListener("pause",()=>this.onStopped()),this.vid.addEventListener("error",()=>this.onStopped()),this.vid.addEventListener("ended",()=>this.onStopped()),this.vid.addEventListener("play",()=>this.onPlayed()),this.vid.addEventListener("durationchange",()=>this.onDurationchange())},onTimeUpdate(){var e;this.currentTime=E.utc((((e=this.vid)==null?void 0:e.currentTime)??0)*1e3).format("mm:ss")},onStopped(){this.play=!1},onPlayed(){this.play=!0},onDurationchange(){var e;this.duration=E.utc((((e=this.vid)==null?void 0:e.duration)??0)*1e3).format("mm:ss")},handlePlay(){if(this.play==!1){this.$emit("onAudioPlayed",this.id),console.log(this.vid),this.vid.play();return}this.vid.pause()}}},De={class:"xl:flex xl: mt-[30px] xl:items-center xl: justify-items-start xl:justify-normal lg:flex lg: justify-between"},$e=n("h1",{class:"text-[#4E4E4E] text-[17px] font-bold xl:order-2 xl:ml-[29px] xl:text-[20px] lg:w-2/4"},[P("Vocabulary and Grammar "),n("br"),P(" Complete each item. Circle the letter of the correct answer.")],-1),Be={class:"pl-4 w-full h-[53px] bg-[#EAE8E8] xl:w-[234px] xl:h-[60px] xl:order-1 xl:rounded-[16px] lg:w-1/3 text-[#333399] text-4xl rounded-4xl flex items-center"},Ye={class:"ml-4"},Le={class:"text-xl"},Ue=["id"],He=n("source",{src:Ge},null,-1),Fe=[He];function Ve(e,s,t,o,r,i){return a(),d("div",De,[$e,n("div",Be,[n("h1",null,[n("button",{onClick:s[0]||(s[0]=(...l)=>i.handlePlay&&i.handlePlay(...l))},[n("i",{class:A({"fa-sharp fa-regular fa-circle-pause":r.play,"fa-regular fa-circle-play":!r.play})},null,2)])]),n("div",Ye,[n("h1",Le,u(r.currentTime)+" / "+u(r.duration),1)]),n("audio",{id:t.id},Fe,8,Ue)])])}const je=x(Re,[["render",Ve]]),qe={name:"group-question",components:{QuestionTest:Me,AudioTest:je},data(){return{grid_cols_3:"lg:grid-cols-3",grid_cols_2:"lg:grid-cols-2",grid_cols_1:"lg:grid-cols-1",TYPE_READING:B,TYPE_WRITING:Y}},props:{groupQuestionProp:{type:Object,default(){return{title:"",questions:[]}}},indexProp:{type:Number,default(){return 0}},typeTest:{type:Number,default(){return 0}},IdAudioIsRunning:{type:String,default(){return"0"}}},methods:{onAudioPlayed(e){this.$emit("onAudioPlayed",e)}}},We={class:"groupQuestion"},Xe={class:"flex xl:block lg:block"},Ke={class:""},Je={class:"text-left"},ze=n("h1",{class:"xl:text-[24px] text-[#333399] lg:text-[17px]"},null,-1),Ze=["innerHTML"],et=["innerHTML"],tt=["src"];function st(e,s,t,o,r,i){const l=c("audio-test"),p=c("QuestionTest");return a(),d("div",We,[t.groupQuestionProp.audio?(a(),g(l,{key:0,id:t.groupQuestionProp.id,src:t.groupQuestionProp.audio,onOnAudioPlayed:i.onAudioPlayed,IdAudioIsRunning:t.IdAudioIsRunning},null,8,["id","src","onOnAudioPlayed","IdAudioIsRunning"])):_("",!0),n("div",Xe,[n("div",null,[n("div",null,[n("div",Ke,[n("div",Je,[ze,n("h1",{innerHTML:t.groupQuestionProp.title,class:"mt-6 text-lg"},null,8,Ze),n("p",{innerHTML:t.groupQuestionProp.description},null,8,et),t.groupQuestionProp.image?(a(),d("img",{key:0,src:t.groupQuestionProp.image,class:"h-[30vh]"},null,8,tt)):_("",!0)])]),n("div",{class:A(["xl:grid lg:grid",[t.typeTest==r.TYPE_READING?r.grid_cols_2:t.typeTest==r.TYPE_WRITING?r.grid_cols_1:r.grid_cols_3]])},[(a(!0),d(m,null,T(t.groupQuestionProp.questions,(h,f)=>(a(),g(p,{indexQuestion:f,question:h,indexGroupQuestion:t.indexProp,key:f},null,8,["indexQuestion","question","indexGroupQuestion"]))),128))],2)])])])])}const C=x(qe,[["render",st]]),nt={name:"VocabularyTest",components:{GroupQuestion:C},data(){return{}},props:{data:{type:Object,default:{groupQuestions:[]}}},methods:{}},it={class:"bg-white"},rt={class:"lg:px-[28px] lg:pl-[57px] pl-[40px] lg:bg-white"},lt={class:""};function at(e,s,t,o,r,i){const l=c("GroupQuestion");return a(),d("div",it,[n("div",rt,[n("div",lt,[(a(!0),d(m,null,T(t.data.groupQuestions,(p,h)=>(a(),g(l,{groupQuestionProp:p,indexProp:h,key:h},null,8,["groupQuestionProp","indexProp"]))),128))])])])}const ot=x(nt,[["render",at]]),dt={name:"readingTest",components:{GroupQuestion:C},data(){return{}},created(){},props:{data:{type:Object,default:{groupQuestions:[]}}},methods:{}},ut={class:"bg-[#BBEEFF] lg:pt-0 lg:h-auto pt-0"},ct={class:"bg-white h-full xl:h-[100%]"},ht={class:"reading-item"},xt={class:"lg:flex"},pt={class:"lg:overflow-auto lg:absolute static left-0 right-0 bottom-0 top-[300px] lg:top-[174px] pt-5 px-7 xl:w-1/2 lg:w-1/2 pb-5"},_t={class:"text-[#333399] text-xl font-bold mb-2"},gt=["innerHTML"],mt={class:"pb-5 lg:absolute static left-[50vw] right-0 bottom-0 top-[300px] lg:top-[174px] bg-[#F8F9FA] rounded-t-3xl text-lg mt-10 py-13 lg:pl-16 px-[10px] xl:w-1/2 lg:bg-white lg:p-0 xl:m-0 lg:overflow-auto xl:rounded-t-0 lg:w-1/2 lg:ml-1 scroll-smooth pl-[25px]"};function ft(e,s,t,o,r,i){const l=c("group-question");return a(),d("div",ut,[n("div",ct,[n("div",ht,[n("div",null,[n("div",xt,[n("div",pt,[n("h1",_t,u(t.data.title),1),n("h1",null,u(t.data.description),1),n("div",null,[n("p",{class:"overflow-auto text-lg lg:pr-10",innerHTML:t.data.script},null,8,gt)])]),n("div",mt,[(a(!0),d(m,null,T(t.data.groupQuestions,(p,h)=>(a(),d("div",{key:h},[w(l,{groupQuestionProp:p,indexProp:h,typeTest:t.data.type},null,8,["groupQuestionProp","indexProp","typeTest"])]))),128))])])])])])])}const wt=x(dt,[["render",ft]]),Tt={name:"ModalConfirmContinue",data(){return{}},props:{visible:{type:Boolean,default(){return!1}},page:{type:Number,default:-1},data:{type:Array,default(){return[]}}},methods:{handleCloseModal(){this.$emit("close")},confirmContinue(){this.$emit("continue")},checkSubmitTest(){return this.page==this.data.length-1}}},bt={class:"w-[318px] rounded-2xl h-[230px] bg-white xl:w-[674px] xl:h-[303px]"},yt=n("div",{class:"w-full bg-[#333399] h-[24px] rounded-t-2xl"},null,-1),At={class:"mt-[5px]"},vt={class:"flex flex-row-reverse mr-[15px]"},Pt=n("i",{class:"fa-solid fa-x"},null,-1),Et=[Pt],St={class:"px-[28px] xl:px-[28px] h-1/2 xl:h-[130px]"},It={class:"header text-[24px] text-[#333399] font-bold xl:text-[40px] xl:text-[40px]"},kt={class:"content text-[14px] text-[#000000] xl:text-[16px] h-1/2"},Ct={class:"footer flex flex-row-reverse mr-[12px] mt-[32px]"};function Nt(e,s,t,o,r,i){return a(),d("div",{class:A([{hidden:!t.visible,"":t.visible},"absolute inset-0 bg-[#70707090] h-full flex justify-center items-center"])},[n("div",bt,[yt,n("div",At,[n("div",vt,[n("button",{class:"text-[20px] p-0",onClick:s[0]||(s[0]=l=>i.handleCloseModal())},Et)]),n("div",St,[n("div",It,"XÁC NHẬN "+u(i.checkSubmitTest()?"NỘP BÀI":"TIẾP TỤC"),1),n("div",kt,"Bạn chưa hoàn thành hết câu hỏi, bạn có muốn "+u(i.checkSubmitTest()?"nộp bài":"tiếp tục"),1),n("div",Ct,[n("button",{class:"w-[130px] h-[41px] bg-[#333399] rounded-[28px] text-white xl:text-[16px] xl:w-[148px] xl:h-[47px]",onClick:s[1]||(s[1]=(...l)=>i.confirmContinue&&i.confirmContinue(...l))},u(i.checkSubmitTest()?"NỘP BÀI":"TIẾP TỤC"),1)])])])])],2)}const V=x(Tt,[["render",Nt]]),Qt={name:"listenTest",components:{GroupQuestion:C,ModalTest:V},data(){return{statusModal:!1,IdAudioIsRunning:"0",audioPlayingIds:[]}},props:{data:{type:Object,default(){return{groupQuestions:[]}}}},methods:{handleOpenModal(e){this.statusModal=e},handleCloseModal(e){this.statusModal=e},onAudioPlayed(e){this.audioPlayingIds&&(this.audioPlayingIds.forEach(s=>{s!==e&&this.turnOffAudio(s)}),this.audioPlayingIds=[]),this.audioPlayingIds.push(e)},turnOffAudio(e){var s;(s=document.getElementById(e))==null||s.pause()}}},Ot={class:"bg-[#BBEEFF] xl:pt-0 lg:h-auto"},Mt={class:"bg-white h-full xl:h-full"},Gt=n("div",{class:"hidden xl:block xl:px-7"},null,-1),Rt={class:"px-[28px] xl:pl-[57px] lg:bg-white"},Dt={class:"xl:block lg:block"};function $t(e,s,t,o,r,i){const l=c("group-question"),p=c("modal-test");return a(),d(m,null,[n("div",Ot,[n("div",Mt,[Gt,n("div",Rt,[n("div",Dt,[(a(!0),d(m,null,T(t.data.groupQuestions,(h,f)=>(a(),d("div",{key:f},[w(l,{onOnAudioPlayed:i.onAudioPlayed,IdAudioIsRunning:r.IdAudioIsRunning,groupQuestionProp:h,indexProp:f,typeTest:t.data.type},null,8,["onOnAudioPlayed","IdAudioIsRunning","groupQuestionProp","indexProp","typeTest"])]))),128))])])])]),(a(),g(p,{key:r.statusModal,statusModal:r.statusModal,onStatusModal:i.handleCloseModal},null,8,["statusModal","onStatusModal"]))],64)}const Bt=x(Qt,[["render",$t]]),Yt="/test-input/get-exam",Lt="/test-input/mark-auto",Ut="/test-input/pause-test",Ht="/test-input/get-pause-test",Ft=$({id:"examTest",state:()=>({status:11111}),getters:{},actions:{getExam(e){return S.query(`${Yt}`,e)},setGeneralTest(e){this.status=e.status},postExam(e){return S.post(`${Lt}`,e)},pauseTest(e){return S.post(`${Ut}`,e)},getPauseTest(e){return S.get(`${Ht}/${e}`)}}}),y=Ft(),j=$({id:"placementsTestStore",state:()=>({dataPlacementsTest:[],typePlacementTestNow:0}),getters:{},actions:{async setDataPlacementTestTest(){let e=await y.getExam({type:"ielts",step:0}).then(s=>s.data.data.map(o=>o.Sections.map(r=>R({...r,Skill:o.Skill},L.general))).reduce((o,r)=>o.concat(r)));this.dataPlacementsTest=e},async setDataStep1Test(){let e=await y.getExam({type:"ielts",step:1}).then(s=>s.data.data.map(o=>o.Sections.map(r=>R({...r,Skill:o.Skill}))).reduce((o,r)=>o.concat(r)));this.dataPlacementsTest=e}}}),I=j(),Vt={name:"HeaderContent",setup(){return{examTestStore:y,userStore:M}},data(){return{time:1800,timeDoTest:"30",interval:null,statusTime:!0,testSchedule:{id:"",name:"",phone:""}}},props:{page:{type:Number,default:-1},data:{type:Array,default(){return[]}},timeTest:{type:Number,default(){return null}},isStepGeneral:{type:Boolean,default(){return!1}}},async mounted(){await this.getCurrentUser(),this.countdown(),this.time=this.timeTest},watch:{data(){clearInterval(this.interval),this.time=this.timeTest,this.countdown()},isStepGeneral(){this.isStepGeneral?this.timeDoTest="30":this.timeDoTest="80"}},computed:{minute(){return Math.floor(this.time/60)},second(){let e=Math.floor(this.time%60);return e<10?`0${e}`:e},isWarningTime(){return this.minute<5}},methods:{async getCurrentUser(){this.testSchedule=M.getTestSchedule(),console.log(this.testSchedule)},nextPage(){this.$emit("nextPage")},backPage(){this.$emit("backPage")},countdown(){this.interval=setInterval(()=>{this.time--,this.time<=0&&(clearInterval(this.interval),this.$emit("timeOut"))},1e3)},async handlePausePlay(){var t;let e={test_input_schedule_id:((t=JSON.parse(localStorage.getItem("testSchedule")))==null?void 0:t.id)??-1,time_pause:E.utc(this.time*1e3).format("HH:mm:ss"),answers:this.data};await y.pauseTest(e);const s=k.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{s.close(),this.$router.push({path:"/information"})},900),clearInterval(this.interval)}},unmounted(){clearInterval(this.interval)}},jt={class:"py-3 header lg:rounded lg:mx-auto lg:justify-between lg:px-14 lg:flex lg:items-center lg:bg-test-bg-header-test rounded-2xl bg-test-bg-header-test-mobile"},qt={class:"lg:pt-0 pt-4 flex flex-col items-center lg:items-start"},Wt=n("h1",{class:"text-test-color-question xl:text-[32px] lg:text-[20px] text-[20px] font-bold"},"KIỂM TRA ĐẦU VÀO",-1),Xt={class:"text-test-text-header-content xl:text-[16px] lg:text-[14px] text-[14px] font-bold"},Kt={class:"xl:text-center flex justify-center items-center"},Jt={class:"flex flex-col items-center"},zt={class:"text-test-text-header-content xl:text-[16px] lg:text-[14px] text-[14px] font-bold"},Zt={class:"text-test-text-header-content xl:text-[16px] lg:text-[14px] text-[14px] font-bold"},es={class:"flex justify-between px-7 lg:mt-0 mt-4"},ts={key:1,class:"xl:w-[132px] xl:h-[47px] text-white lg:w-[112px] lg:h-[41px] lg:text-[14px] w-[103px] h-[36px] lg:mr-[15px]"};function ss(e,s,t,o,r,i){return a(),d("div",jt,[n("div",qt,[Wt,n("p",Xt,u(r.testSchedule.name)+" - "+u(r.testSchedule.phone),1)]),n("div",null,[n("div",Kt,[n("div",Jt,[n("p",zt,"Thời gian : "+u(r.timeDoTest)+" phút",1),n("p",Zt,[P("Thời gian còn lại : "),n("span",{class:A(["xl:text-[24px] lg:text-[20px] text-[20px]",{"text-[#333399]":!i.isWarningTime,"text-[#FF0000]":i.isWarningTime}])},u(`${i.minute}:${i.second}`),3)])]),n("button",{onClick:s[0]||(s[0]=(...l)=>i.handlePausePlay&&i.handlePausePlay(...l)),class:"lg:block hidden bg-[#D64120] rounded-[28px] xl:w-[132px] xl:h-[47px] text-white lg:w-[112px] lg:h-[41px] lg:text-[14px] lg:ml-[20px] w-[103px] h-[36px] xl:mr-[15px] lg:mr-[30px]"},u(r.statusTime?"Tạm Dừng":"Tiếp Tục"),1)])]),n("div",es,[n("button",{onClick:s[1]||(s[1]=(...l)=>i.handlePausePlay&&i.handlePausePlay(...l)),class:"lg:hidden bg-[#D64120] rounded-[28px] xl:w-[132px] xl:h-[47px] text-white lg:w-[112px] lg:h-[41px] lg:text-[14px] lg:ml-[20px] w-[103px] h-[36px] xl:mr-[15px] lg:mr-[30px]"},u(r.statusTime?"Tạm Dừng":"Tiếp Tục"),1),t.page>0?(a(),d("button",{key:0,onClick:s[2]||(s[2]=(...l)=>i.backPage&&i.backPage(...l)),class:"bg-[#333399] rounded-[28px] xl:w-[132px] xl:h-[47px] text-white lg:w-[112px] lg:h-[41px] lg:text-[14px] w-[103px] h-[36px] lg:mr-[15px]"}," Phần Trước ")):(a(),d("button",ts)),n("button",{onClick:s[3]||(s[3]=(...l)=>i.nextPage&&i.nextPage(...l)),class:"bg-[#333399] rounded-[28px] xl:w-[132px] xl:h-[47px] text-white xl:ml-[30px] lg:w-[112px] lg:h-[41px] lg:text-[14px] w-[103px] h-[36px]"},u(t.page==t.data.length-1?"Nộp Bài":"Tiếp Tục"),1)])])}const ns=x(Vt,[["render",ss]]),is={name:"buttonExam",props:{questions:{type:Object,default:[]}}},rs={class:"exam_button lg:pt-2 pt-0"},ls=["href"];function as(e,s,t,o,r,i){return a(!0),d(m,null,T(t.questions,(l,p)=>(a(),d("div",{key:p},[n("div",rs,[n("a",{href:`#${l.idQuestion}`},[n("button",{class:A([{"text-white bg-test-color-button-did-answer":l.answered,"bg-test-color-button-not-done-answer":!l.answered},"xl:min-w-8 xl:px-3 xl:h-8 rounded-32 mr-4 mb-1 px-2 h-6"])},u(l.order),3)],8,ls)])]))),128)}const os=x(is,[["render",as]]),ds={name:"ModalDisplayResults",data(){return{result:null}},props:{visible:{type:Boolean,default(){return!1}},correctAnswer:{type:Number,default(){return 0}},countQuestion:{type:Number,default(){return 0}}},mounted(){this.result()},methods:{handleCloseModal(){this.$emit("visible",!1)},nextPageBegin(){this.$router.push({path:"/information"})}}},us={class:"w-[318px] rounded-2xl h-[230px] bg-white xl:w-[674px] xl:h-[303px]"},cs=n("div",{class:"w-full bg-[#333399] h-[24px] rounded-t-2xl"},null,-1),hs={class:"mt-[5px]"},xs=n("div",{class:"flex flex-row-reverse mr-[15px]"},null,-1),ps={class:"px-[28px] xl:px-[28px] h-1/2 xl:h-[130px]"},_s=n("div",{class:"header text-[24px] text-[#333399] font-bold xl:text-[40px] xl:text-[40px]"},"HOÀN THÀNH",-1),gs={class:"content text-[14px] text-[#000000] xl:text-[16px] h-1/2"},ms=n("br",null,null,-1),fs={class:"footer flex flex-row-reverse mr-[12px] mt-[32px]"};function ws(e,s,t,o,r,i){return a(),d("div",{class:A([{hidden:!t.visible,"":t.visible},"absolute inset-0 bg-[#70707090] h-full flex justify-center items-center"])},[n("div",us,[cs,n("div",hs,[xs,n("div",ps,[_s,n("div",gs,[P("Bạn đã hoàn thành phần thi Vocabulary & Grammar"),ms,P(),n("span",null," Số câu trả lời đúng: "+u(t.correctAnswer)+"/"+u(t.countQuestion),1)]),n("div",fs,[n("button",{class:"w-[130px] h-[41px] bg-[#333399] rounded-[28px] text-white xl:text-[16px] xl:w-[148px] xl:h-[47px]",onClick:s[0]||(s[0]=(...l)=>i.nextPageBegin&&i.nextPageBegin(...l))},"Tiếp Tục")])])])])],2)}const Ts=x(ds,[["render",ws]]),bs={name:"writeTest",components:{GroupQuestion:C,AnswerInputTextArea:F},props:{data:{type:Object,default(){return{groupQuestions:[]}}}},methods:{handleTextAreaAnswer(e){this.data.groupQuestions[0].questions[0].userAnswer=e}},computed:{userAnswer(){return this.data.groupQuestions[0].questions[0].userAnswer}}},ys={class:"bg-white pt-0 h-auto xl:pt-0"},As={class:"bg-white rounded-t-32 h-full h-auto"},vs={class:"px-[28px] mt-[16px] xl:mt-[30px]"},Ps=["innerHTML"],Es=["innerHTML"];function Ss(e,s,t,o,r,i){const l=c("group-question");return a(),d("div",ys,[n("div",As,[n("div",vs,[n("h1",{class:"text-[22px] mb-[8px] xl:text-[20px] xl:mb-[14px]",innerHTML:t.data.description},null,8,Ps),n("p",{class:"text-[14px] mb-[8px] xl:text-[16px] xl:mb-[26px]",innerHTML:t.data.script},null,8,Es),(a(!0),d(m,null,T(t.data.groupQuestions,(p,h)=>(a(),d("div",{key:h},[w(l,{groupQuestionProp:p,indexProp:h,typeTest:t.data.type},null,8,["groupQuestionProp","indexProp","typeTest"])]))),128))])])])}const Is=x(bs,[["render",Ss]]);const ks={name:"GeneralTest",components:{WriteTest:Is,ModalDisplayResults:Ts,ModalConfirmContinue:V,HeaderContent:ns,ListenTest:Bt,ReadingTest:wt,VocabularyTest:ot,ButtonExam:os},data(){return{data:[],page:0,visibleConfirmContinue:!1,visibleDisplayResult:!1,correctAnswer:0,confirm:!1,scorePassTest:1,OVERALL:pe,TYPE_LISTENING:xe,TYPE_WRITING:Y,TYPE_READING:B,TYPE_GENERAL:N,testSchedule:JSON.parse(localStorage.getItem("testSchedule")),timeTest:1800}},async mounted(){this.checkToken();const e=k.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});await I.setDataPlacementTestTest(),e.close(),this.data=I.dataPlacementsTest??[],localStorage.getItem("statusGeneral")==K&&await this.getDataPause()},methods:{checkToken(){JSON.parse(localStorage.getItem("testSchedule"))||this.$router.push({name:"login"})},getConfirmQuestionsSection(){var e;this.visibleConfirmContinue=((e=this.allQuestions)==null?void 0:e.find(s=>!s.answered))!=null},getConfirmQuestionsTest(){var e;this.visibleConfirmContinue=((e=this.allQuestionTest)==null?void 0:e.find(s=>!s.answered))!=null},getConfirmQuestion(){this.page==this.data.length-1?this.getConfirmQuestionsTest():this.getConfirmQuestionsSection()},nextPage(){if(this.getConfirmQuestion(),!this.visibleConfirmContinue){if(this.page==this.data.length-1){this.handleFinished();return}this.page++}},backPage(){this.page!=0&&this.page--},confirmContinue(){if(this.visibleConfirmContinue=!1,this.page==this.data.length-1){this.handleFinished();return}this.page++},async handleFinishedTestGeneral(){const e=k.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});await this.makeExam(0),e.close(),this.visibleDisplayResult=this.correctAnswer<this.scorePassTest,!this.visibleDisplayResult&&(await I.setDataStep1Test(),this.timeTest=4800,this.data=I.dataPlacementsTest??[],this.page=0)},async handleFinishedTestIelts(){const e=k.service({lock:!0,text:"Vui lòng đợi trong giây lát ...",background:"rgba(0, 0, 0, 0.7)"});await this.makeExam(1),await e.close(),this.$router.push({path:"/information"})},handleFinished(){this.currentSection.type==N?this.handleFinishedTestGeneral():this.handleFinishedTestIelts()},timeOut(){this.visibleConfirmContinue=!1,this.handleFinished()},makeExam(e){let s={type:"ielts",test_input_schedule_id:this.testSchedule.id,step:e,answers:this.studentIDAndAnswer};return y.postExam(s).then(t=>{var o,r;if(!t.error){this.correctAnswer=(r=(o=t==null?void 0:t.data)==null?void 0:o.data)==null?void 0:r.right_answer;return}})},getDataPause(){return y.getPauseTest(this.testSchedule.id).then(e=>{this.data=e.data.data.answer_provisional,this.timeTest=E(e.data.data.time_pause,"HH:mm:ss").diff(E().startOf("day"),"seconds")})}},computed:{...J(j,{dataPlacementsTest:"dataPlacementsTest"}),currentSection(){return this.data.length>this.page?this.data[this.page]:null},allQuestions(){return this.currentSection==null?[]:this.currentSection.groupQuestions.map(e=>e.questions).reduce((e,s)=>e.concat(s))},allQuestionTest(){var e;return(e=this.data.map(s=>{var t;return(t=s.groupQuestions)==null?void 0:t.map(o=>o.questions).reduce((o,r)=>o.concat(r))}))==null?void 0:e.reduce((s,t)=>s.concat(t))},studentIDAndAnswer(){return this.allQuestionTest.map(e=>({id:e.idQuestion,answers:e.userAnswer?[e.userAnswer]:e.userAnswers}))},isStepGeneral(){var e;return((e=this.data)==null?void 0:e.find(s=>s.type==N))!=null}}},Cs={class:"bg-white h-screen"},Ns={key:0,class:"flex mt-[20px] lg:[10px] px-5 w-screen overflow-x-auto h-[50px]"},Qs={key:1,class:"bg-white absolute left-0 right-0 bottom-0 top-[300px] lg:top-[174px] overflow-auto pb-5"},Os={key:0};function Ms(e,s,t,o,r,i){const l=c("HeaderContent"),p=c("ButtonExam"),h=c("VocabularyTest"),f=c("listen-test"),v=c("write-test"),b=c("reading-test"),q=c("modal-confirm-continue"),W=c("modal-display-results");return a(),d(m,null,[n("div",Cs,[w(l,{class:"h-[200px] lg:h-[100px]",onNextPage:i.nextPage,onBackPage:i.backPage,page:r.page,data:r.data,onTimeOut:i.timeOut,timeTest:r.timeTest,isStepGeneral:i.isStepGeneral},null,8,["onNextPage","onBackPage","page","data","onTimeOut","timeTest","isStepGeneral"]),i.currentSection.groupQuestions&&i.allQuestions?(a(),d("div",Ns,[w(p,{questions:i.allQuestions},null,8,["questions"])])):_("",!0),i.currentSection&&i.currentSection.type!==r.TYPE_READING?(a(),d("div",Qs,[i.currentSection.type==r.TYPE_GENERAL?(a(),g(h,{key:0,data:i.currentSection},null,8,["data"])):_("",!0),i.currentSection.type==r.TYPE_LISTENING?(a(),g(f,{key:1,data:i.currentSection},null,8,["data"])):_("",!0),i.currentSection.type==r.TYPE_WRITING?(a(),g(v,{key:2,data:i.currentSection},null,8,["data"])):_("",!0)])):_("",!0),n("div",null,[i.currentSection.type==r.TYPE_READING?(a(),g(b,{key:0,data:i.currentSection},null,8,["data"])):_("",!0)])]),i.currentSection?(a(),d("div",Os,[w(q,{visible:r.visibleConfirmContinue,onClose:s[0]||(s[0]=Gs=>r.visibleConfirmContinue=!1),page:r.page,data:r.data,onContinue:i.confirmContinue},null,8,["visible","page","data","onContinue"]),w(W,{visible:r.visibleDisplayResult,correctAnswer:r.correctAnswer,countQuestion:this.allQuestionTest.length},null,8,["visible","correctAnswer","countQuestion"])])):_("",!0)],64)}const Bs=x(ks,[["render",Ms],["__scopeId","data-v-f6d6e28a"]]);export{Bs as default};
