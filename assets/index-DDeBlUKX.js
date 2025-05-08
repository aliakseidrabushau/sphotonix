import{d as s,u as c,a as p,j as t}from"./index-DsmYoV4c.js";import{u as x,a as g}from"./index-CUuh3MLD.js";import{C as u}from"./index-CWB6Z5f5.js";const d=s.div`
  margin-top: 8px;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
`,l=s.div`
  margin-top: 16px;
  font-size: 17px;
  line-height: 26px;
  color: #DBDBDB;
`,m=s.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,h=s.div`
  width: 100%;
  height: 74px;
  background-image: url(${({$img:e})=>`./assets/press/${e}.png`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  &:not(:first-child) {
    margin-top: 8px;
  }
`,b=()=>{const{t:e}=c(),n=p(),i=x(),r=["forbes","techcrunch","wired"],a=o=>t.jsx(h,{$img:o},o);return g(),t.jsxs(t.Fragment,{children:[t.jsx(d,{children:e("press_title")}),t.jsx(l,{children:e("press_quote")}),t.jsx(m,{children:r.map(a)}),t.jsx(u,{onClick:()=>n(i),customStyles:"bottom:60px;"})]})};export{b as default};
