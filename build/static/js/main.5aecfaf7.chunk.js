(this.webpackJsonpmagiccarddashboard=this.webpackJsonpmagiccarddashboard||[]).push([[0],{39:function(e,t,c){},69:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var a=c(2),r=c(0),n=c.n(r),i=c(21),s=c.n(i),o=(c(69),c(26)),j=(c(39),c(135)),b=c(136),d=c(137),l=c(133),h=c(134),O=c(4),x=c(132),g=Object(x.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}}})),u=c(9),m=n.a.createContext(),p=n.a.createContext(),f=n.a.createContext(),C=n.a.createContext();var y=function(){var e=g();return Object(l.a)(),Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(h.a,{}),Object(a.jsx)(j.a,{position:"fixed",color:"secondary",className:Object(O.a)(e.appBar,{}),children:Object(a.jsx)(b.a,{children:Object(a.jsx)(d.a,{variant:"h3",color:"inherit",children:"Crypto Currencies Watch"})})})]})},v=c(142),S=c(138),k=c(141),w=c(140),F=c(139),P=c(144),B=c(33),T=function(e){return Object(a.jsx)("div",{children:e.magicCard?Object(a.jsxs)(S.a,{children:[Object(a.jsx)(F.a,{style:{height:50,paddingTop:"120%"},image:e.magicCard.imageUrl,title:e.magicCard.name}),Object(a.jsxs)(w.a,{children:[Object(a.jsx)(d.a,{gutterBottom:!0,variant:"headline",component:"h2",children:e.magicCard.name}),Object(a.jsxs)(d.a,{component:"p",children:["Colors:  ",e.magicCard.colors,Object(a.jsx)("br",{}),"Rarity: ",e.magicCard.rarity]})]}),Object(a.jsx)(k.a,{children:Object(a.jsx)(B.b,{to:"/".concat(e.magicCard.id),children:Object(a.jsx)(P.a,{size:"small",color:"primary",target:"_blank",children:"Show the magic card"})})})]}):null})},I=c(32),K=c.n(I),L=c(53),A=c.n(L),D=function(e){for(var t=e.cardsPerPage,c=e.totalCards,r=e.paginate,n=[],i=1;i<=Math.ceil(c/t);i++)n.push(i);return Object(a.jsxs)("div",{children:[n.map((function(e){return Object(a.jsx)(P.a,{onClick:function(){return r(e)},variant:"contained",color:"primary",children:e})})),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]})};var R=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(!0),s=Object(u.a)(i,2),o=s[0],j=s[1],b=Object(r.useState)(""),d=Object(u.a)(b,2),l=d[0],h=(d[1],Object(r.useState)("asc")),O=Object(u.a)(h,2),x=O[0],g=O[1],y=Object(r.useState)(1),S=Object(u.a)(y,2),k=S[0],w=S[1],F=Object(r.useContext)(m),B=Object(u.a)(F,1)[0],I=Object(r.useContext)(p),L=Object(u.a)(I,1)[0],R=Object(r.useContext)(f),N=Object(u.a)(R,1)[0],E=Object(r.useContext)(C),M=Object(u.a)(E,1)[0];Object(r.useEffect)((function(){K.a.get("https://api.magicthegathering.io/v1/cards").then((function(e){n(e.data.cards),j(!1),console.log(" pageSizeFilter   "+B),console.log(" colorFilter   "+L),console.log(" rarityFilter   "+N),console.log(" superTypeFilter   "+M)})).catch((function(e){console.log(e),console.log("Could not fetch data from the API!"),j(!1)}))}),[]);var z=c.sort((function(e,t){return("asc"===x?1:-1)*e.name.localeCompare(t.name)})),J=k*B,U=J-B,G=z.slice(U,J);return console.log("hhhhhhhh  "+L),o?Object(a.jsx)("h1",{children:"Loading the cards...  This might take a few seconds."}):Object(a.jsx)("div",{children:z?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(P.a,{onClick:function(){g("desc"===x?"asc":"desc")},variant:"contained",color:"primary",endIcon:Object(a.jsx)(A.a,{}),children:"Sort"})}),Object(a.jsx)(v.a,{container:!0,spacing:24,style:{padding:80},children:G.map((function(e){return""!==L?e.colors.includes(L)&&e.name.includes(l)&&Object(a.jsx)(v.a,{item:!0,xs:12,sm:6,lg:4,xl:3,style:{padding:30},children:Object(a.jsx)(T,{magicCard:e},e.id)}):e.name.includes(l)&&Object(a.jsx)(v.a,{item:!0,xs:12,sm:6,lg:4,xl:3,style:{padding:30},children:Object(a.jsx)(T,{magicCard:e},e.id)})}))}),Object(a.jsx)(D,{cardsPerPage:B,totalCards:c.length,paginate:function(e){return w(e)}})]}):" "})},N=c(7),E=n.a.createContext({color:"black",background:"#f8bbd0"}),M=c(54),z=c.n(M),J=c(143),U=function(e){var t=Object(r.useContext)(E),c=Object(r.useState)({}),n=Object(u.a)(c,2),i=n[0],s=n[1],j=Object(r.useState)(!0),b=Object(u.a)(j,2),d=b[0],l=b[1];Object(r.useEffect)((function(){K.a.get("https://api.magicthegathering.io/v1/cards/".concat(e.match.params.id)).then((function(e){s(e.data.card),l(!1)})).catch((function(e){console.log(e),console.log("Could not fetch the card details from the API!"),l(!1)}))}),[]);var h={bgcolor:"Rare"==i.rarity?"secondary.main":"Common"==i.rarity?"grey.500":"primary.main",borderColor:"text.primary",m:1,border:5,style:{width:"20rem",height:"20rem"}};return console.log("KKKKKK"+e.match.params),d?Object(a.jsx)("h1",{children:"Loading the card details...  This might take a few seconds."}):Object(a.jsxs)("div",{style:t,className:"CardDetails",children:[Object(a.jsx)("h1",{children:"Magic Card Details!"}),Object(a.jsx)("h2",{children:i.name}),Object(a.jsxs)("h3",{children:[Object(a.jsx)(J.a,Object(o.a)(Object(o.a)({marginLeft:"35%",borderRadius:16},h),{},{children:Object(a.jsx)("img",{src:i.imageUrl,alt:""})})),Object(a.jsx)("br",{}),"Color: ",i.colors," ",Object(a.jsx)("br",{}),"Rarity: ",i.rarity," ",Object(a.jsx)("br",{}),"Layout: ",i.layout," ",Object(a.jsx)("br",{}),i.text," ",Object(a.jsx)("br",{})]}),Object(a.jsx)("br",{}),Object(a.jsx)(P.a,{onClick:function(){e.history.goBack()},variant:"contained",color:"primary",startIcon:Object(a.jsx)(z.a,{}),children:"TO DASHBOARD"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]})};var G=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(B.a,{children:[Object(a.jsx)(y,{}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsxs)(N.c,{children:[Object(a.jsx)(N.a,{exact:!0,path:"/",render:function(e){return Object(a.jsx)(R,Object(o.a)({},e))}}),Object(a.jsx)(N.a,{path:"/:id",exact:!0,component:U})]})]})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,146)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),r(e),n(e),i(e)}))};s.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),H()}},[[93,1,2]]]);
//# sourceMappingURL=main.5aecfaf7.chunk.js.map