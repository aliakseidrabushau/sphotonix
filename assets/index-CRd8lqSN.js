import{d as i,u as c,a as d,j as t}from"./index-Bm4aNRBx.js";import{u as g,a as h}from"./index-Dy78uoYe.js";import{C as u}from"./index-BroN-mPa.js";const m=i.div`
  margin-top: 8px;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
`,f=i.div`
  margin-top: 8px;
  font-size: 17px;
  line-height: 26px;
  color: rgba(219, 219, 219, 1);
`,j=i.div`
  margin-top: 32px;
`,v=i.div`
  padding: 28px 20px 12px;
  border-radius: 12px;
  border: 1px solid #5D638F;
  background-color: #404464;
  position: relative;

  &:not(:first-child) {
    margin-top: 8px;
  }
`,y=i.div`
  position: absolute;
  top: 12px;
  left: 24px;
  font-size: 12px;
  line-height: 16px;
  color: #8A8FB2;
`,_=i.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 20px;
  color: #C9CCE2;
  text-align: left;

  .big {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    color: #C9CCE2;
    margin-right: 12px;
  }
`,z=()=>{const{t:e}=c(),o=d(),s=g(),n=[{year:2022,text:e("forgot_the_name",{percent:"44%"})},{year:2023,text:e("lost_their_keys",{percent:"30%"})},{year:2020,text:e("had_difficulty",{percent:"35%"})}],r=(a,x)=>{const{year:l,text:p}=a;return t.jsxs(v,{children:[t.jsxs(y,{children:[l," ",e("survey")]}),t.jsx(_,{dangerouslySetInnerHTML:{__html:p}})]},x)};return h(),t.jsxs("div",{className:"scrollable",children:[t.jsx(m,{children:e("you_are_not_alone")}),t.jsx(f,{children:e("we_agree")}),t.jsx(j,{children:n.map(r)}),t.jsx(u,{onClick:()=>o(s)})]})};export{z as default};
