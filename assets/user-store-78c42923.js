import{i as o,j as r}from"./index-507164b5.js";const c="test-input/get-profile-by-token",a="test-input/update-test-input",S="test-input/come-check",i="test-input/get-status-speaking",u="test-input/get-status-general",h=o({id:"user",state:()=>({testSchedule:{}}),getters:{},actions:{getToken(){return localStorage.getItem("token")},getTestSchedule:()=>JSON.parse(localStorage.getItem("testSchedule")??""),getProfileByToken(e){return e.token&&localStorage.setItem("token",e.token),new Promise((s,n)=>{r.query(`/${c}`,e).then(t=>{this.testSchedule=t.data.data,localStorage.setItem("testSchedule",JSON.stringify(this.testSchedule)),s(t.data.data)}).catch(t=>{n(t)})})},updateUser(e){return new Promise((s,n)=>{r.post(`/${a}`,e).then(t=>{this.testSchedule=t.data.data,s(t)}).catch(t=>{n(t)})})},comeCheckSpeaking(e){return new Promise((s,n)=>{r.post(`/${S}`,e).then(t=>{s(t)}).catch(t=>{n(t)})})},GET_STATUS_SPEAKING(e){return new Promise((s,n)=>{r.query(`/${i}/${e.id}`).then(t=>{s(t)}).catch(t=>{n(t)})})},GET_STATUS_GENERAL(e){return new Promise((s,n)=>{r.query(`/${u}/${e.id}`).then(t=>{s(t)}).catch(t=>{n(t)})})}}}),E=h();export{E as u};