import{i as a,j as o}from"./index-98c89ba5.js";const c="test-input/get-profile-by-token",u="test-input/update-test-input",S="test-input/come-check",l="test-input/redo-general",i="test-input/get-status-speaking",h="test-input/get-status-general",g=a({id:"user",state:()=>({testSchedule:{}}),getters:{},actions:{getToken(){return localStorage.getItem("token")},getTestSchedule:()=>JSON.parse(localStorage.getItem("testSchedule")??"{}"),getProfileByToken(t){return new Promise((s,r)=>{o.query(`/${c}`,t).then(e=>{let n=this.getTestSchedule();n&&n.uuid&&t.token!=n.uuid&&localStorage.clear(),this.testSchedule=e.data.data,localStorage.setItem("token",t.token),localStorage.setItem("testSchedule",JSON.stringify(this.testSchedule)),s(e.data.data)}).catch(e=>{localStorage.removeItem("token"),r(e)})})},setAfterRedoGeneral(){let t=JSON.parse(localStorage.getItem("testSchedule")??"");t.is_clone=0,t.status=0,localStorage.setItem("testSchedule",JSON.stringify(t)),localStorage.setItem("statusGeneral","0")},updateUser(t){return new Promise((s,r)=>{o.post(`/${u}`,t).then(e=>{this.testSchedule=e.data.data,s(e)}).catch(e=>{r(e)})})},comeCheckSpeaking(t){return new Promise((s,r)=>{o.post(`/${S}`,t).then(e=>{s(e)}).catch(e=>{r(e)})})},redoGeneral(t){return new Promise((s,r)=>{o.post(`/${l}`,t).then(e=>{s(e)}).catch(e=>{r(e)})})},GET_STATUS_SPEAKING(t){return new Promise((s,r)=>{o.query(`/${i}/${t.id}`).then(e=>{s(e)}).catch(e=>{r(e)})})},GET_STATUS_GENERAL(t){return new Promise((s,r)=>{o.query(`/${h}/${t.id}`).then(e=>{s(e)}).catch(e=>{r(e)})})}}}),E=g();export{E as u};