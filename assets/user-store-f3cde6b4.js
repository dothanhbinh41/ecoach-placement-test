import{i as o,j as r}from"./index-6ba8478c.js";const c="test-input/get-profile-by-token",S="test-input/update-test-input",a="test-input/come-check",u="test-input/get-status-speaking",i="test-input/get-status-general",h=o({id:"user",state:()=>({testSchedule:{}}),getters:{},actions:{getToken(){return localStorage.getItem("token")??""},getTestSchedule:()=>JSON.parse(localStorage.getItem("testSchedule")??""),getProfileByToken(t){return localStorage.setItem("token",t.token),new Promise((s,n)=>{r.query(`/${c}`,t).then(e=>{this.testSchedule=e.data.data,localStorage.setItem("testSchedule",JSON.stringify(this.testSchedule)),s(e)}).catch(e=>{n(e)})})},updateUser(t){return new Promise((s,n)=>{r.post(`/${S}`,t).then(e=>{this.testSchedule=e.data.data,s(e)}).catch(e=>{n(e)})})},comeCheckSpeaking(t){return new Promise((s,n)=>{r.post(`/${a}`,t).then(e=>{s(e)}).catch(e=>{n(e)})})},GET_STATUS_SPEAKING(t){return new Promise((s,n)=>{r.query(`/${u}/${t.id}`).then(e=>{s(e)}).catch(e=>{n(e)})})},GET_STATUS_GENERAL(t){return new Promise((s,n)=>{r.query(`/${i}/${t.id}`).then(e=>{s(e)}).catch(e=>{n(e)})})}}}),E=h();export{E as u};