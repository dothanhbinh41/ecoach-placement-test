import{i as a,j as n}from"./index-5564d457.js";const c="test-input/get-profile-by-token",u="test-input/update-test-input",S="test-input/come-check",i="test-input/get-status-speaking",l="test-input/get-status-general",h=a({id:"user",state:()=>({testSchedule:{}}),getters:{},actions:{getToken(){return localStorage.getItem("token")},getTestSchedule:()=>JSON.parse(localStorage.getItem("testSchedule")??"{}"),getProfileByToken(t){return new Promise((s,r)=>{n.query(`/${c}`,t).then(e=>{alert(e.data.data);let o=this.getTestSchedule();o&&o.uuid&&t.token!=o.uuid&&localStorage.clear(),this.testSchedule=e.data.data,localStorage.setItem("token",t.token),localStorage.setItem("testSchedule",JSON.stringify(this.testSchedule)),s(e.data.data)}).catch(e=>{alert(e),localStorage.removeItem("token"),r(e)})})},updateUser(t){return new Promise((s,r)=>{n.post(`/${u}`,t).then(e=>{this.testSchedule=e.data.data,s(e)}).catch(e=>{r(e)})})},comeCheckSpeaking(t){return new Promise((s,r)=>{n.post(`/${S}`,t).then(e=>{s(e)}).catch(e=>{r(e)})})},GET_STATUS_SPEAKING(t){return new Promise((s,r)=>{n.query(`/${i}/${t.id}`).then(e=>{s(e)}).catch(e=>{r(e)})})},GET_STATUS_GENERAL(t){return new Promise((s,r)=>{n.query(`/${l}/${t.id}`).then(e=>{s(e)}).catch(e=>{r(e)})})}}}),d=h();export{d as u};
