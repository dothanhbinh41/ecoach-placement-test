import{h as r,i as o}from"./index-a2eebbea.js";const n="test-input/get-profile-by-token",l="test-input/update-test-input",c="test-input/come-check",i="test-input/redo-general",S="test-input/get-status-speaking",_="test-input/get-status-general",m="test-input/reset-point",u="/test-input/get-link-test-online",g=r({id:"user",state:()=>({testSchedule:{}}),getters:{},actions:{getToken(){return localStorage.getItem("token")},getTestSchedule:()=>JSON.parse(localStorage.getItem("testSchedule")??"{}"),getProfileByToken(t){return new Promise((a,s)=>{o.query(`/${n}`,t).then(e=>{this.testSchedule=e.data.data,localStorage.setItem("token",t.token),localStorage.setItem("testSchedule",JSON.stringify(this.testSchedule)),a(e.data.data)}).catch(e=>{localStorage.removeItem("token"),localStorage.removeItem("testSchedule"),s(e)})})},setAfterRedoGeneral(){let t=this.getTestSchedule();t.is_clone=0,t.status=0,localStorage.setItem("testSchedule",JSON.stringify(t)),localStorage.setItem("statusGeneral","0")},updateUser(t){return new Promise((a,s)=>{o.post(`/${l}`,t).then(e=>{this.testSchedule=e.data.data,a(e)}).catch(e=>{s(e)})})},comeCheckSpeaking(t){return new Promise((a,s)=>{o.post(`/${c}`,t).then(e=>{a(e)}).catch(e=>{s(e)})})},redoGeneral(t){return new Promise((a,s)=>{o.post(`/${i}`,t).then(e=>{a(e)}).catch(e=>{s(e)})})},GET_STATUS_SPEAKING(t){return new Promise((a,s)=>{o.query(`/${S}/${t.id}`).then(e=>{a(e)}).catch(e=>{s(e)})})},GET_STATUS_GENERAL(t){return new Promise((a,s)=>{o.query(`/${_}/${t.id}`).then(e=>{a(e)}).catch(e=>{s(e)})})},RESET_POINT(t){return new Promise((a,s)=>{o.query(`/${m}`,t).then(e=>{a(e)}).catch(e=>{s(e)})})},saveDataTimeInLocal(t,a,s){localStorage.setItem(`answer_provisional_${s}`,JSON.stringify(t)),localStorage.setItem(`time_${s}`,`${a}`),localStorage.setItem(`latest_time_do_test_${s}`,`${new Date().getTime()}`)},deleteDataTimeInLocal(t){localStorage.removeItem(`answer_provisional_${t}`),localStorage.removeItem(`time_${t}`),localStorage.removeItem(`latest_time_do_test_${t}`)},getDataTimeInLocal(t){return{dataAnswer:JSON.parse(localStorage.getItem(`answer_provisional_${t}`)),time:localStorage.getItem(`time_${t}`),latest_time_do_test:localStorage.getItem(`latest_time_do_test_${t}`)}},GET_LINK_ONLINE(t){return new Promise((a,s)=>{o.query(`/${u}`,t).then(e=>{a(e)}).catch(e=>{s(e)})})}}}),T=g();export{T as u};
