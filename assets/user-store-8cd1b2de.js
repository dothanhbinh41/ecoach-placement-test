import{i as o,j as r}from"./index-8010c543.js";const c="test-input/get-profile-by-token",i="test-input/update-test-input",u="test-input/come-check",S="test-input/get-status-speaking",a="test-input/get-status-general",h=o({id:"user",state:()=>({testSchedule:{}}),getters:{},actions:{getProfileByToken(e){return localStorage.setItem("token",e.token),new Promise((s,n)=>{r.query(`/${c}`,e).then(t=>{this.testSchedule=t.data.data,localStorage.setItem("testSchedule",JSON.stringify(this.testSchedule)),s(t)}).catch(t=>{n(t)})})},updateUser(e){return new Promise((s,n)=>{r.post(`/${i}`,e).then(t=>{this.testSchedule=t.data.data,s(t)}).catch(t=>{n(t)})})},comeCheckSpeaking(e){return new Promise((s,n)=>{r.post(`/${u}`,e).then(t=>{s(t)}).catch(t=>{n(t)})})},GET_STATUS_SPEAKING(e){return new Promise((s,n)=>{r.query(`/${S}/${e.id}`).then(t=>{s(t)}).catch(t=>{n(t)})})},GET_STATUS_GENERAL(e){return new Promise((s,n)=>{r.query(`/${a}/${e.id}`).then(t=>{s(t)}).catch(t=>{n(t)})})}}}),T=h();export{T as u};
