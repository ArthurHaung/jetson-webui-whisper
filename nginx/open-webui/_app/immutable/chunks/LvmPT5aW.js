let s={comma(t){return s.split(t,[","],!0)},space(t){let i=[" ",`
`,"	"];return s.split(t,i)},split(t,i,c){let r=[],l="",a=!1,f=0,u=!1,n="",p=!1;for(let e of t)p?p=!1:e==="\\"?p=!0:u?e===n&&(u=!1):e==='"'||e==="'"?(u=!0,n=e):e==="("?f+=1:e===")"?f>0&&(f-=1):f===0&&i.includes(e)&&(a=!0),a?(l!==""&&r.push(l.trim()),l="",a=!1):l+=e;return(c||l!=="")&&r.push(l.trim()),r}};var o=s;s.default=s;export{o as l};
//# sourceMappingURL=LvmPT5aW.js.map
