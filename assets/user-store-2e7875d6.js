import{i as c,j as r}from"./index-d1cbc447.js";const o="test-input/get-profile-by-token",S="test-input/update-test-input",i="test-input/come-check",u="test-input/get-status-speaking",a="test-input/get-status-general",h=c({id:"user",state:()=>({testSchedule:{}}),getters:{},actions:{getTestSchedule:()=>JSON.parse(localStorage.getItem("testSchedule")??""),getProfileByToken(t){return localStorage.setItem("token",t.token),new Promise((s,n)=>{r.query(`/${o}`,t).then(e=>{this.testSchedule=e.data.data,localStorage.setItem("testSchedule",JSON.stringify(this.testSchedule)),s(e)}).catch(e=>{n(e)})})},updateUser(t){return new Promise((s,n)=>{r.post(`/${S}`,t).then(e=>{this.testSchedule=e.data.data,s(e)}).catch(e=>{n(e)})})},comeCheckSpeaking(t){return new Promise((s,n)=>{r.post(`/${i}`,t).then(e=>{s(e)}).catch(e=>{n(e)})})},GET_STATUS_SPEAKING(t){return new Promise((s,n)=>{r.query(`/${u}/${t.id}`).then(e=>{s(e)}).catch(e=>{n(e)})})},GET_STATUS_GENERAL(t){return new Promise((s,n)=>{r.query(`/${a}/${t.id}`).then(e=>{s(e)}).catch(e=>{n(e)})})}}}),T=h();export{T as u};