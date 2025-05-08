import{d as i,l as p,u as y,r as v,j as e}from"./index-DsmYoV4c.js";import{C as L}from"./index-CWB6Z5f5.js";const E=300,$=()=>(t,n=E)=>{setTimeout(()=>t(),n)},C=i.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: left;
  white-space: pre-line;
`,A=i.div`
  font-size: 18px;
  line-height: 28px;
  text-align: left;
  white-space: pre-line;
  color: #C9CCE2;
  margin-top: 16px;
`,I=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`,T=i.div(({$multiChoice:t,$isActive:n})=>p`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    font-size: 17px;
    line-height: 26px;
    text-align: left;
    white-space: pre-line;
    transition: .3s;
    cursor: pointer;
    padding: 16px;
    margin-left: auto;
    margin-right: auto;
    ${t&&"padding-left: 56px;"};
    background-color: ${n?"rgba(181, 43, 43, 0.4)":"rgba(255, 255, 255, 0.2)"};
    border: 1px solid ${n?"rgba(255, 191, 191, 0.2)":"rgba(255, 255, 255, 0.1)"};
    position: relative;

    &:not(:first-child) {
      margin-top: 8px;
    }
  `),z=i.div(({$isActive:t})=>p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid ${t?"rgba(247, 65, 65, 1)":"rgba(246, 246, 246, 1)"};
    background-color: ${t?"rgba(247, 65, 65, 1)":"transparent"};
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    transition: background-color .3s;
  `),D=i.div(({$isActive:t})=>p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: ${t?6:1}px solid ${t?"rgba(247, 65, 65, 1)":"rgba(246, 246, 246, 1)"};
    background-color: ${t?"#fff":"transparent"};
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    transition: background-color .3s;
  `),O=({isMultiChoice:t=!1,title:n,subtitle:x,answers:h,onContinueClick:g,radioButtons:c=!1})=>{const{t:u}=y(),b=$(),[a,f]=v.useState([]),m=(s,r)=>{const o=s.key,k=()=>{t?f((d=>d.includes(o)?d.filter(w=>w!==o):d.concat([o]))(a)):(f([o]),c||b(()=>g(s.key)))},l=a.includes(o);return e.jsxs(T,{onClick:k,$multiChoice:t||c,$isActive:l,id:`option-${r+1}`,children:[t?e.jsx(z,{$isActive:l,children:e.jsx("svg",{width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2 4.4L5 8L10 2",stroke:l?"white":"transparent",strokeWidth:"1.5",strokeLinecap:"square",strokeLinejoin:"round"})})}):c&&e.jsx(D,{$isActive:l}),s.content]},r)},j=s=>s.map(r=>({content:u(r),key:r}));return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:n}),x&&e.jsx(A,{children:x}),e.jsx(I,{children:j(h).map(m)}),t&&e.jsx(L,{onClick:()=>g(a),disabled:a.length===0})]})};export{O as Q};
