import{d as t,u as c,a as x,j as e}from"./index-DH3vF_QL.js";import{u as d,a as m}from"./index-Bqu42TVi.js";import{C as p}from"./index-idpbkrpS.js";import{I as u}from"./index-t5v-ZHFv.js";const g=t.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: left;
`,f=t.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`,h=t.label`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 20px;
  }
`,j=t.div`
  font-size: 15px;
  line-height: 24px;
  color: rgba(219, 219, 219, 1);
  text-align: left;
  margin-bottom: 8px;
`,_=t.span`
  color: rgba(247, 65, 65, 1);
`,N=()=>{const{t:n}=c(),a=x(),i=d(),r=["full_name","company_name","business_email","data_storage_requirements"],l=(s,o)=>e.jsxs(h,{children:[e.jsxs(j,{children:[n(s),o%2===0&&e.jsx(_,{children:"*"})]}),e.jsx(u,{value:"",placeholder:n(`${s}_placeholder`),onChange:()=>{}})]},o);return m(),e.jsxs(e.Fragment,{children:[e.jsx(g,{children:n("your_details")}),e.jsx(f,{children:r.map(l)}),e.jsx(p,{onClick:()=>a(i),children:n("send")})]})};export{N as default};
