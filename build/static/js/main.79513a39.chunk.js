(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(53)},46:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(5),c=a.n(r),m=a(7),u=a.n(m),s=a(17),E=a(6),i=a(18),d=a.n(i),o=(a(46),a(3)),h=function(e){var t=e.catchPhrase,a=e.username,n=e.name,r=e.city,c=e.street,m=e.zipcode,u=e.phone,s=e.cname,E=e.email;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card_info"},l.a.createElement(o.b,{style:{width:"60rem",height:"30rem"}},l.a.createElement(o.c,null,l.a.createElement("h4",null,"Description"),l.a.createElement("h5",null,t),l.a.createElement(o.e,null,l.a.createElement(o.d,{md:8},l.a.createElement("h4",null,"contact"),l.a.createElement("h6",null,a)),l.a.createElement(o.d,{md:2},l.a.createElement("h4",null,"name"),l.a.createElement("h6",null,n))),l.a.createElement(o.e,null,l.a.createElement(o.d,{md:8},l.a.createElement("h4",null,"Email"),l.a.createElement("h6",null,E)),l.a.createElement(o.d,{md:2},l.a.createElement("h4",null,"city"),l.a.createElement("h6",null,r))),l.a.createElement(o.e,null,l.a.createElement(o.d,{md:8},l.a.createElement("h4",null,"street"),l.a.createElement("h6",null,c)),l.a.createElement(o.d,{md:4},l.a.createElement("h4",null,"zipcode"),l.a.createElement("h6",null,m))),l.a.createElement(o.e,null,l.a.createElement(o.d,{md:8},l.a.createElement("h4",null,"city"),l.a.createElement("h6",null,s)),l.a.createElement(o.d,{md:4},l.a.createElement("h4",null,"phone"),l.a.createElement("h6",null,u)))))))},p=(a(49),function(e){var t=e.username,a=e.name,r=e.city,c=e.street,m=Object(n.useState)(!1),u=Object(E.a)(m,2),s=u[0],i=u[1];return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card_info"},l.a.createElement(o.b,{style:{width:"60rem",height:"10rem"}},l.a.createElement(o.c,null,l.a.createElement(o.e,null,l.a.createElement(o.d,{md:2},l.a.createElement("h6",null,a)),l.a.createElement(o.d,{md:2},l.a.createElement("h4",null,"contact"),l.a.createElement("strong",null,t)),l.a.createElement(o.d,{md:2},l.a.createElement("h4",null,"city"),l.a.createElement("strong",null,r)),l.a.createElement(o.d,{md:4},l.a.createElement("h4",null,"street"),l.a.createElement("strong",null,c)),l.a.createElement(o.d,{md:2},l.a.createElement(o.a,{color:"danger",onClick:function(){i(1!=s)}},"show"),l.a.createElement("div",null,s?l.a.createElement(h,null):null)))))))}),f=(a(50),function(e){var t=e.userData;return l.a.createElement("div",{className:"user_list"},t.map(function(e,t){return l.a.createElement("div",null,l.a.createElement(p,{key:t,username:e.username,name:e.name,city:e.address.city,street:e.address.street}),l.a.createElement(h,{key:t,catchPhrase:e.company.catchPhrase,username:e.username,name:e.name,city:e.address.city,street:e.address.street,zipcode:e.address.zipcode,phone:e.phone,cname:e.company.name,email:e.email}))}))}),v=(a(51),function(e){for(var t=e.totalPosts,a=e.postsPerPage,n=e.setCurrentPage,r=e.currentPage,c=[],m=1;m<=Math.ceil(t/a);m++)c.push(m);return l.a.createElement("div",{className:"pagination"},c.map(function(e,t){return l.a.createElement("button",{key:t,onClick:function(){return n(e)},className:e==r?"active":""},e)}))}),y=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),m=Object(E.a)(c,2),i=m[0],o=m[1],h=Object(n.useState)(3),p=Object(E.a)(h,2),y=p[0];p[1];Object(n.useEffect)(Object(s.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}},e)})),[]);var g=i*y,b=g-y,P=a.slice(b,g);return l.a.createElement("div",{className:"app"},l.a.createElement("h1",null,"Assigment task"),l.a.createElement(f,{userData:P}),l.a.createElement(v,{totalPosts:a.length,postsPerPage:y,setCurrentPage:o,currentPage:i}))};a(52);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.79513a39.chunk.js.map