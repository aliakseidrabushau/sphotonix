import{d as s,u as c,a as p,j as e}from"./index-Bm4aNRBx.js";import{u as l,a as x}from"./index-Dy78uoYe.js";import{C as d}from"./index-BroN-mPa.js";const u=s.div`
  margin-top: 8px;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
`,g=s.div`
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
  background-image: url(${({$img:t})=>`./assets/press/${t}.png`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  &:not(:first-child) {
    margin-top: 8px;
  }
`,b=()=>{const{t}=c(),n=p(),i=l(),r=["forbes","techcrunch","wired"],a=o=>e.jsx(h,{$img:o},o);return x(),e.jsxs("div",{className:"scrollable",children:[e.jsx(u,{children:t("press_title")}),e.jsx(g,{children:t("press_quote")}),e.jsx(m,{children:r.map(a)}),e.jsx(d,{onClick:()=>n(i),customStyles:"bottom:60px;"})]})};export{b as default};
