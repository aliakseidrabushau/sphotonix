import{d as t,u as c,a as x,j as e}from"./index-Bm4aNRBx.js";import{u as d,a as m}from"./index-Dy78uoYe.js";import{C as p}from"./index-BroN-mPa.js";import{I as u}from"./index-B4HB_4m8.js";const g=t.div`
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
`,b=t.span`
  color: rgba(247, 65, 65, 1);
`,N=()=>{const{t:n}=c(),o=x(),i=d(),r=["full_name","company_name","business_email","data_storage_requirements"],l=(s,a)=>e.jsxs(h,{children:[e.jsxs(j,{children:[n(s),a%2===0&&e.jsx(b,{children:"*"})]}),e.jsx(u,{value:"",placeholder:n(`${s}_placeholder`),onChange:()=>{}})]},a);return m(),e.jsxs("div",{className:"scrollable",children:[e.jsx(g,{children:n("your_details")}),e.jsx(f,{children:r.map(l)}),e.jsx(p,{onClick:()=>o(i),children:n("send")})]})};export{N as default};
