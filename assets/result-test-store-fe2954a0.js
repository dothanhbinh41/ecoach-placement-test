import{h as r,i as n}from"./index-b1c62052.js";const o="test-input/get-point",E="test-input/check-working-in-two-weeks",i="test-input/get-status-test-input-schedule",c=r({id:"resultTest",state:()=>({resultTests:[]}),getters:{},actions:{GET_POINT(e){return new Promise((s,T)=>{n.query(`/${o}/${e.id}`).then(t=>{s(t)}).catch(t=>{T(t)})})},GET_REMAKE_TEST(e){return new Promise((s,T)=>{n.query(`/${E}`,e).then(t=>{s(t)}).catch(t=>{T(t)})})},GET_STATUS_TEST_INPUT_SCHEDULE(e){return new Promise((s,T)=>{n.query(`/${i}`,e).then(t=>{s(t)}).catch(t=>{T(t)})})}}}),_=c();export{_ as r};
