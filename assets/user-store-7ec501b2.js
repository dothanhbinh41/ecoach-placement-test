import{i as c,j as r}from"./index-4c49fde1.js";const a="test-input/get-profile-by-token",u="test-input/update-test-input",S="test-input/come-check",i="test-input/get-status-speaking",h="test-input/get-status-general",l=c({id:"user",state:()=>({testSchedule:{}}),getters:{},actions:{getToken(){return localStorage.getItem("token")},getTestSchedule:()=>JSON.parse(localStorage.getItem("testSchedule")??""),getProfileByToken(t){return new Promise((s,n)=>{r.query(`/${a}`,t).then(e=>{let o=this.getTestSchedule();o&&o.uuid&&t.token!=o.uuid&&localStorage.clear(),this.testSchedule=e.data.data,localStorage.setItem("token",t.token),localStorage.setItem("testSchedule",JSON.stringify(this.testSchedule)),s(e.data.data)}).catch(e=>{alert(e),localStorage.removeItem("token"),n(e)})})},updateUser(t){return new Promise((s,n)=>{r.post(`/${u}`,t).then(e=>{this.testSchedule=e.data.data,s(e)}).catch(e=>{n(e)})})},comeCheckSpeaking(t){return new Promise((s,n)=>{r.post(`/${S}`,t).then(e=>{s(e)}).catch(e=>{n(e)})})},GET_STATUS_SPEAKING(t){return new Promise((s,n)=>{r.query(`/${i}/${t.id}`).then(e=>{s(e)}).catch(e=>{n(e)})})},GET_STATUS_GENERAL(t){return new Promise((s,n)=>{r.query(`/${h}/${t.id}`).then(e=>{s(e)}).catch(e=>{n(e)})})}}}),g=l();export{g as u};
