import{A as i,u as t,N as o,B as _,D as T,I as l,J as I,P as h,K as E,M as R,Q as A}from"./index-9a959b62.js";function P(r,n=null,e=null,c=null,u=[]){this.type=r,this.correctQuestions=n,this.totalQuestions=e,this.nameType=N(r),this.totalPointAuto=s(c),this.icon=f(r),u.length&&(this.dataComments=D(u),this.totalPoint=g(this.dataComments))}function f(r){return i.get(r)}function N(r){return t.get(r)}function s(r){let n=Math.floor(r),e=r-n;return n+Math.floor(e*2)/2}function g(r){return s((r==null?void 0:r.map(n=>parseFloat(n.point)??0).reduce((n,e)=>n+e))/4)}function D(r){return r==null?void 0:r.map(n=>new M(n==null?void 0:n.key,n==null?void 0:n.point,n==null?void 0:n.comment,n==null?void 0:n.comment_auto))}function M(r,n,e,c){this.nameCriteria=p(r),this.autoComment=c??L(r,n),this.comment=e,this.point=n}function p(r){return o.get(r)}function L(r,n){if(r==null||r==null)return"";switch(r){case"fluency_and_coherence":return A.pointLadder[n];case"lexical_resource":return R.pointLadder[n];case"grammatical_range_accuracy":return E.pointLadder[n];case"pronunciation":return h.pointLadder[n];case"task_achievement_writing":return I.pointLadder[n];case"lexical_resource_writing":return l.pointLadder[n];case"grammatical_range_accuracy_writing":return T.pointLadder[n];case"coherence_cohesion_writing":return _.pointLadder[n]}}export{P as R,s as t};
