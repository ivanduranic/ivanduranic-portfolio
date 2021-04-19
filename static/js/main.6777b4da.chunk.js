(this["webpackJsonpivanduranic-portfolio"]=this["webpackJsonpivanduranic-portfolio"]||[]).push([[0],{145:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),n=c(53),r=c.n(n),l=(c(62),c(17)),i=c(10),o=c.p+"static/media/forest.430cfa62.jpg",d=c(2);function j(){return Object(d.jsxs)("main",{children:[Object(d.jsx)("img",{src:o,alt:"Bright Forest",className:"absolute object-cover w-full h-full"}),Object(d.jsx)("section",{className:"relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8",children:Object(d.jsx)("h1",{className:"text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name",children:"Welcome to my portfolio!"})})]})}var x=c(13),b=c(54),m=c.n(b)()({projectId:"gzvi0vf3",dataset:"production"}),u=c.p+"static/media/krka.eddb7710.jpg",h=c(24),g=c.n(h),p=c(28),f=c.n(p),O=g()(m);function v(){var e,t=Object(a.useState)(null),c=Object(x.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){m.fetch('*[_type == "author"]{\n        name,\n        bio,\n        "authorImage": image.asset->url\n    }').then((function(e){return n(e[0])})).catch(console.error)}),[]),s?Object(d.jsxs)("main",{className:"relative",children:[Object(d.jsx)("img",{src:u,alt:"Krka Waterfalls",className:"absolute w-full"}),Object(d.jsx)("div",{className:"p-10 lg:pt-48 container mx-auto relative",children:Object(d.jsxs)("section",{className:"bg-green-800 rounded-lg shadow-2xl lg:flex p-20",children:[Object(d.jsx)("img",{src:(e=s.authorImage,O.image(e)).url(),className:"rounded w-32 h-32 lg:w-64 lg:h-64 mr-8",alt:s.name}),Object(d.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(d.jsxs)("h1",{className:"cursive text-6xl text-green-300 mb-4",children:["Hey there. I'm"," ",Object(d.jsx)("span",{className:"text-green-100",children:s.name})]}),Object(d.jsx)("div",{className:"prose lg:prose-xl text-white",children:Object(d.jsx)(f.a,{blocks:s.bio,projectId:"gzvi0vf3",dataset:"production"})})]})]})})]}):Object(d.jsx)("div",{children:"Loading..."})}var N=g()(m);function y(){var e,t=Object(a.useState)(null),c=Object(x.a)(t,2),s=c[0],n=c[1],r=Object(i.f)().slug;return Object(a.useEffect)((function(){m.fetch('*[slug.current == "'.concat(r,'"]{\n        title,\n        _id,\n        slug,\n        mainImage{\n          asset->{\n            _id,\n            url\n          }\n        },\n        body,\n        "name": author->name,\n        "authorImage": author->image,\n    }')).then((function(e){return n(e[0])})).catch(console.error)}),[r]),s?Object(d.jsx)("main",{className:"bg-gray-200 min-h-screen p-12",children:Object(d.jsxs)("article",{className:"container shadow-lg mx-auto bg-green-100 rounded-lg",children:[Object(d.jsxs)("header",{className:"relative",children:[Object(d.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(d.jsxs)("div",{className:"bg-white bg-opacity-75 rounded p-12",children:[Object(d.jsx)("h1",{className:"cursive text-3xl lg:text-6xl mb-4",children:s.title}),Object(d.jsxs)("div",{className:"flex justify-center text-gray-800",children:[Object(d.jsx)("img",{src:(e=s.authorImage,N.image(e)).url(),alt:s.name,className:"w-10 h-10 rounded-full"}),Object(d.jsx)("p",{className:"cursive flex items-center pl-2 text-2xl",children:s.name})]})]})}),Object(d.jsx)("img",{src:s.mainImage.asset.url,alt:s.title,className:"w-full object-cover rounded-t",style:{height:"400px"}})]}),Object(d.jsx)("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full",children:Object(d.jsx)(f.a,{blocks:s.body,projectId:"gzvi0vf3",dataset:"production"})})]})}):Object(d.jsx)("div",{children:"Loading..."})}function w(){var e=Object(a.useState)(null),t=Object(x.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){m.fetch('*[_type == "post"]{\n        title,\n        slug,\n        mainImage{\n          asset->{\n            _id,\n            url\n          },\n          alt\n\n        }\n      }').then((function(e){return s(e)})).catch(console.error)}),[]),Object(d.jsx)("main",{className:"bg-green-100 min-h-screen p-12",children:Object(d.jsxs)("section",{className:"container mx-auto",children:[Object(d.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"LinkedIn Posts Page"}),Object(d.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to my page of LinkedIn posts"}),Object(d.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:c&&c.map((function(e,t){return Object(d.jsx)("article",{children:Object(d.jsx)(l.b,{to:"/post/"+e.slug.current,children:Object(d.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400",children:[Object(d.jsx)("img",{src:e.mainImage.asset.url,alt:e.mainImage.alt,className:"w-full h-full rounded-r object-cover absolute"}),Object(d.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(d.jsx)("h3",{className:"text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)})}))})]})})}function k(){var e=Object(a.useState)(null),t=Object(x.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){m.fetch('*[_type == "project"]{\n      title,\n      date,\n      place,\n      description,\n      projectType,\n      link,\n      tags\n    }').then((function(e){return s(e)})).catch(console.error)}),[]),Object(d.jsx)("main",{className:"bg-green-100 min-h-screen p-12",children:Object(d.jsxs)("section",{className:"container mx-auto",children:[Object(d.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"My Projects"}),Object(d.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to my Projects page!"}),Object(d.jsx)("section",{className:"grid grid-cols-2 gap-8",children:c&&c.map((function(e,t){return Object(d.jsxs)("article",{className:"relative rounded-lg shadow-xl bg-white p-16",children:[Object(d.jsx)("h3",{className:"text-gray-800 text-3xl font-bold mb-2 hover:text-red-700",children:Object(d.jsx)("a",{href:e.link,alt:e.title,target:"_blank",rel:"noopener noreferrer",children:e.title})}),Object(d.jsxs)("div",{className:"text-gray-500 text-xs space-x-4",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("strong",{className:"font-bold",children:"Finished on"}),":"," ",new Date(e.date).toLocaleDateString()]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("strong",{className:"font-bold",children:"Company"}),":"," ",e.place]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("strong",{className:"font-bold",children:"Type"}),":"," ",e.projectType]}),Object(d.jsx)("p",{className:"my-6 text-lg text-gray-700 leading-relaxed",children:e.description}),Object(d.jsxs)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"text-red-500 font-bold hover:underline hover:text-red-400 text-xl",children:["View The Project"," ",Object(d.jsx)("span",{role:"img","aria-label":"right pointer",children:"\ud83d\udc49"})]})]})]})}))})]})})}var I=c(29);function C(){return Object(d.jsx)("header",{className:"bg-red-600",children:Object(d.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(d.jsxs)("nav",{className:"flex",children:[Object(d.jsx)(l.c,{to:"/",exact:!0,activeClassName:"text-white",className:"inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest",children:"Ivan Duranic"}),Object(d.jsx)(l.c,{to:"/post",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800",activeClassName:"text-red-100 bg-red-700",children:"LinkedIn Posts"}),Object(d.jsx)(l.c,{to:"/contact",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800",activeClassName:"text-red-100 bg-red-700",children:"Contact"}),Object(d.jsx)(l.c,{to:"/project",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800",activeClassName:"text-red-100 bg-red-700",children:"Projects"}),Object(d.jsx)(l.c,{to:"/about",className:"inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800",activeClassName:"text-red-100 bg-red-700",children:"About Me!"})]}),Object(d.jsxs)("div",{className:"inline-flex py-3 px-3 my-6",children:[Object(d.jsx)(I.SocialIcon,{url:"https://drive.google.com/file/d/1TwKaFAzaLvQXyPCtYcyiPgR4OdMF_XFK/view?usp=sharing",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(d.jsx)(I.SocialIcon,{url:"https://github.com/ivanduranic",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(d.jsx)(I.SocialIcon,{url:"https://www.linkedin.com/in/ivanduranic/",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}})]})]})})}function S(){return Object(d.jsx)("footer",{class:"w-full text-center border-t border-grey p-4 pin-b bg-red-600",children:"Copyright@2021"})}var P=c(57).a.initializeApp({apiKey:"AIzaSyCpLPzdMwTJKNp7oWcQkWCZOBECCcGV-Ac",authDomain:"portfolio-e7695.firebaseapp.com",databaseURL:"https://portfolio-e7695-default-rtdb.firebaseio.com",projectId:"portfolio-e7695",storageBucket:"portfolio-e7695.appspot.com",messagingSenderId:"76493676510",appId:"1:76493676510:web:83b0e85af2ac1cf7acc74f",measurementId:"G-HE2ZYKCE20"}).firestore(),_=function(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(x.a)(n,2),l=r[0],i=r[1],o=Object(a.useState)(""),j=Object(x.a)(o,2),b=j[0],m=j[1],u=Object(a.useState)(!1),h=Object(x.a)(u,2),g=h[0],p=h[1];return Object(d.jsx)("div",{className:"flex items-center h-screen w-full bg-green-100",children:Object(d.jsxs)("div",{className:"w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto",children:[Object(d.jsx)("h2",{className:"block w-full text-center text-grey-darkest mb-6",children:"Toronto, ON | Phone: +1 (437) 774-6800 | Email: ivan.duranic@gmail.com"}),Object(d.jsxs)("h1",{className:"block w-full text-center text-grey-darkest mb-6",children:[Object(d.jsx)("strong",{children:"Contact form"}),"\ud83d\udcf2"]}),Object(d.jsxs)("form",{className:"mb-4 md:flex md:flex-wrap md:justify-between",onSubmit:function(e){e.preventDefault(),p(!0),P.collection("contacts").add({name:c,email:l,message:b}).then((function(){alert("Message has been submitted \ud83d\udc4d"),p(!1)})).catch((function(e){alert(e.message),p(!1)})),s(""),i(""),m("")},children:[Object(d.jsxs)("div",{className:"field-group mb-4 md:w-1/2",children:[Object(d.jsx)("label",{className:"mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest",children:"Name"}),Object(d.jsx)("input",{className:"border py-2 px-3 text-grey-darkest md:mr-2",placeholder:"Name",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)("div",{className:"flex flex-col mb-4 md:w-full",children:[Object(d.jsx)("label",{className:"mb-2 uppercase font-bold text-lg text-grey-darkest",children:"Email"}),Object(d.jsx)("input",{className:"border py-2 px-3 text-grey-darkest",placeholder:"Email",value:l,onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)("div",{className:"flex flex-col mb-6 md:w-full",children:[Object(d.jsx)("label",{className:"mb-2 uppercase font-bold text-lg text-grey-darkest",children:"Message"}),Object(d.jsx)("textarea",{className:"border py-2 px-3 text-grey-darkest",placeholder:"Message",value:b,onChange:function(e){return m(e.target.value)}})]}),Object(d.jsx)("button",{className:"block bg-teal hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded",type:"submit",style:{background:g?"#ccc":"rgb(2, 2, 110)"},children:"Submit"})]})]})})};var E=function(){return Object(d.jsxs)(l.a,{children:[Object(d.jsx)(C,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,component:j,path:"/"}),Object(d.jsx)(i.a,{exact:!0,component:v,path:"/about"}),Object(d.jsx)(i.a,{exact:!0,component:y,path:"/post/:slug"}),Object(d.jsx)(i.a,{exact:!0,component:w,path:"/post"}),Object(d.jsx)(i.a,{exact:!0,component:k,path:"/project"}),Object(d.jsx)(i.a,{exact:!0,component:_,path:"/contact"})]}),Object(d.jsx)(S,{})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,146)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),L()},62:function(e,t,c){}},[[145,1,2]]]);
//# sourceMappingURL=main.6777b4da.chunk.js.map