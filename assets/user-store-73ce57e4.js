import{h as l,i as o}from"./index-a4885c5f.js";const n="test-input/get-profile-by-token",c="test-input/update-test-input",i="test-input/come-check",S="test-input/redo-general",m="test-input/get-status-speaking",u="test-input/get-status-general",_=l({id:"user",state:()=>({testSchedule:{}}),getters:{},actions:{getToken(){return localStorage.getItem("token")},getTestSchedule:()=>JSON.parse(localStorage.getItem("testSchedule")??"{}"),getProfileByToken(e){return new Promise((a,s)=>{o.query(`/${n}`,e).then(t=>{let r=this.getTestSchedule();r&&r.uuid&&e.token!=r.uuid,this.testSchedule=t.data.data,localStorage.setItem("token",e.token),localStorage.setItem("testSchedule",JSON.stringify(this.testSchedule)),a(t.data.data)}).catch(t=>{localStorage.removeItem("token"),s(t)})})},setAfterRedoGeneral(){let e=JSON.parse(localStorage.getItem("testSchedule")??"");e.is_clone=0,e.status=0,localStorage.setItem("testSchedule",JSON.stringify(e)),localStorage.setItem("statusGeneral","0")},updateUser(e){return new Promise((a,s)=>{o.post(`/${c}`,e).then(t=>{this.testSchedule=t.data.data,a(t)}).catch(t=>{s(t)})})},comeCheckSpeaking(e){return new Promise((a,s)=>{o.post(`/${i}`,e).then(t=>{a(t)}).catch(t=>{s(t)})})},redoGeneral(e){return new Promise((a,s)=>{o.post(`/${S}`,e).then(t=>{a(t)}).catch(t=>{s(t)})})},GET_STATUS_SPEAKING(e){return new Promise((a,s)=>{o.query(`/${m}/${e.id}`).then(t=>{a(t)}).catch(t=>{s(t)})})},GET_STATUS_GENERAL(e){return new Promise((a,s)=>{o.query(`/${u}/${e.id}`).then(t=>{a(t)}).catch(t=>{s(t)})})},saveDataTimeInLocal(e,a,s){localStorage.setItem(`answer_provisional_${s}`,JSON.stringify(e)),localStorage.setItem(`time_${s}`,`${a}`),localStorage.setItem(`latest_time_do_test_${s}`,`${new Date().getTime()}`)},deleteDataTimeInLocal(e){localStorage.removeItem(`answer_provisional_${e}`),localStorage.removeItem(`time_${e}`),localStorage.removeItem(`latest_time_do_test_${e}`)},getDataTimeInLocal(e){return{dataAnswer:JSON.parse(localStorage.getItem(`answer_provisional_${e}`)),time:localStorage.getItem(`time_${e}`),latest_time_do_test:localStorage.getItem(`latest_time_do_test_${e}`)}}}}),d=_();export{d as u};
