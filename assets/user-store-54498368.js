import{i as r,j as o}from"./index-038a92ac.js";const c="test-input/get-profile-by-token",a="test-input/update-test-input",S="test-input/come-check",u="test-input/get-status-speaking",i="test-input/get-status-general",h=r({id:"user",state:()=>({testSchedule:{}}),getters:{},actions:{getToken(){return localStorage.getItem("token")},getTestSchedule:()=>JSON.parse(localStorage.getItem("testSchedule")??""),getProfileByToken(t){return new Promise((s,n)=>{o.query(`/${c}`,t).then(e=>{this.testSchedule=e.data.data,localStorage.setItem("token",t.token),localStorage.setItem("testSchedule",JSON.stringify(this.testSchedule)),s(e.data.data)}).catch(e=>{localStorage.removeItem("token"),n(e)})})},updateUser(t){return new Promise((s,n)=>{o.post(`/${a}`,t).then(e=>{this.testSchedule=e.data.data,s(e)}).catch(e=>{n(e)})})},comeCheckSpeaking(t){return new Promise((s,n)=>{o.post(`/${S}`,t).then(e=>{s(e)}).catch(e=>{n(e)})})},GET_STATUS_SPEAKING(t){return new Promise((s,n)=>{o.query(`/${u}/${t.id}`).then(e=>{s(e)}).catch(e=>{n(e)})})},GET_STATUS_GENERAL(t){return new Promise((s,n)=>{o.query(`/${i}/${t.id}`).then(e=>{s(e)}).catch(e=>{n(e)})})}}}),l=h();export{l as u};
