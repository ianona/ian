(self["webpackChunkian"]=self["webpackChunkian"]||[]).push([[963],{4963:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Qt});var a=n(9835),i=n(6970);function o(e,t,n,o,s,r){const l=(0,a.up)("q-tab"),c=(0,a.up)("q-tabs"),d=(0,a.up)("q-toolbar"),u=(0,a.up)("q-header"),m=(0,a.up)("HelloWorld"),p=(0,a.up)("TimeLines"),w=(0,a.up)("ProjectsSection"),g=(0,a.up)("PublicationsSection"),h=(0,a.up)("ContactSection"),f=(0,a.up)("q-btn"),y=(0,a.up)("q-page-scroller"),v=(0,a.up)("q-page-container"),b=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(b,{view:"hHh lpR fFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:(0,i.C_)({"bg-white":""==e.tab,"text-primary":""==e.tab})},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{align:"left",modelValue:e.tab,"onUpdate:modelValue":t[4]||(t[4]=t=>e.tab=t),shrink:"",stretch:""},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{name:"about",label:"About me",onClick:t[0]||(t[0]=t=>e.scrollTo("about"))}),(0,a.Wm)(l,{name:"projects",label:"Projects",onClick:t[1]||(t[1]=t=>e.scrollTo("projects"))}),(0,a.Wm)(l,{name:"pubs",label:"Publications",onClick:t[2]||(t[2]=t=>e.scrollTo("pubs"))}),(0,a.Wm)(l,{key:"lol",name:"contact",label:"Contact",onClick:t[3]||(t[3]=t=>e.scrollTo("contact"))})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["class"]),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m),(0,a.Wm)(p,{id:"about",onScrolling:e.handleScroll},null,8,["onScrolling"]),(0,a.Wm)(w,{id:"projects",onScrolling:e.handleScroll},null,8,["onScrolling"]),(0,a.Wm)(g,{id:"pubs",onScrolling:e.handleScroll},null,8,["onScrolling"]),(0,a.Wm)(h,{id:"contact",onScrolling:e.handleScroll},null,8,["onScrolling"]),(0,a.Wm)(y,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{fab:"",icon:"keyboard_arrow_up",color:"primary"})])),_:1})])),_:1})])),_:1})}var s=n(499);const r=e=>((0,a.dD)("data-v-0279ddde"),e=e(),(0,a.Cn)(),e),l={class:"row justify-evenly"},c={class:"col-8"},d={class:"q-mb-md"},u={class:"q-mt-none"},m=(0,a.Uk)(" I am a software engineer based in Taipei and this is my resume website "),p={class:"q-mt-md"},w={class:"q-mb-md"},g=r((()=>(0,a._)("h5",{class:"q-mt-none"}," I specialize in web development but enjoy creating just about any kind of app ",-1))),h={class:"q-mt-md"},f={class:"q-mb-md"},y=r((()=>(0,a._)("h5",{class:"q-mt-none"}," I also like cooking, reviewing movies, and reading (anything) ",-1)));function v(e,t,n,i,o,s){const r=(0,a.up)("q-linear-progress"),v=(0,a.up)("vue-writer"),b=(0,a.up)("q-icon"),_=(0,a.up)("q-carousel-slide"),k=(0,a.up)("q-carousel"),q=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(q,{class:"flex flex-center hero"},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",c,[(0,a.Wm)(k,{modelValue:o.slide,"onUpdate:modelValue":t[0]||(t[0]=e=>o.slide=e),swipeable:"",animated:"",padding:!0,arrows:!1,navigation:!0,fullscreen:!1,"control-color":"black"},{"navigation-icon":(0,a.w5)((({active:e})=>[e?((0,a.wg)(),(0,a.j4)(r,{key:0,value:o.progress/5*.2},null,8,["value"])):(0,a.kq)("",!0)])),default:(0,a.w5)((()=>[(0,a.Wm)(_,{name:"one",class:"column flex-center"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("h2",d,[(0,a.Wm)(v,{array:["Hello, my name is Ian Ona"],iterations:1,typeSpeed:70,caret:"cursor"})]),(0,a._)("h5",u,[m,(0,a.Wm)(b,{color:"primary",name:"fas fa-smile"})])])])),_:1}),(0,a.Wm)(_,{name:"two",class:"column flex-center"},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a._)("h2",w,[(0,a.Wm)(v,{array:["I am a software engineer"],iterations:1,typeSpeed:70,caret:"cursor"})]),g])])),_:1}),(0,a.Wm)(_,{name:"three",class:"column flex-center"},{default:(0,a.w5)((()=>[(0,a._)("div",h,[(0,a._)("h2",f,[(0,a.Wm)(v,{array:["Exercise is cool too"],iterations:1,typeSpeed:70,caret:"cursor"})]),y])])),_:1})])),_:1},8,["modelValue"])])])])),_:1})}var b=n(7525);const _={name:"HelloWorld",components:{VueWriter:b.Z},data(){return{progress:0,curSlide:0,slideContent:[{name:"one",header:"Hello, my name is Ian Ona",sub:"and welcome to my resume website"}],slides:["one","two","three"],slide:"one",lorem:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."}},mounted(){this.interval=setInterval(this.startInterval,100)},methods:{startInterval(){this.progress>=50?(clearInterval(this.interval),this.curSlide=(this.curSlide+1)%3,this.slide=this.slides[this.curSlide],this.progress=.1,this.interval=setInterval(this.startInterval,100)):this.progress++}}};var k=n(1639),q=n(9885),I=n(960),W=n(8289),S=n(1694),j=n(2857),Z=n(9984),T=n.n(Z);const C=(0,k.Z)(_,[["render",v],["__scopeId","data-v-0279ddde"]]),x=C;T()(_,"components",{QPage:q.Z,QCarousel:I.Z,QLinearProgress:W.Z,QCarouselSlide:S.Z,QIcon:j.Z});var Q=n(1957);const P={class:"row justify-evenly"},V={class:"col-8 col-md-4"},U={key:0},A={key:0},D=(0,a.Uk)(" Graduated "),H=(0,a._)("b",null,"Magna Cum Laude (3.79/4.00)",-1),z=(0,a.Uk)(" and a member of the Jose Rizal Honor Society for consistent 1st honors for 4 years. Received the Bronze Award for Best Undergraduate Thesis and extra curriculars include Vice President of the Peer Tutor Society and Batch President. "),L=[D,H,z],E={class:"col-8 col-md-4"},O={key:0},M={key:0},B={key:0};function R(e,t,n,i,o,s){const r=(0,a.up)("vue-writer"),l=(0,a.up)("q-timeline-entry"),c=(0,a.up)("q-timeline"),d=(0,a.up)("q-page"),u=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.j4)(d,{"style-fn":s.myTweak,class:"q-pt-xl"},{default:(0,a.w5)((()=>[(0,a._)("div",P,[(0,a._)("div",V,[(0,a.Wm)(c,{side:"right",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{heading:""},{default:(0,a.w5)((()=>[i.inView[0]?((0,a.wg)(),(0,a.j4)(r,{key:0,array:["Education"],iterations:1,caret:"cursor"})):(0,a.kq)("",!0)])),_:1}),(0,a.wy)(((0,a.wg)(),(0,a.j4)(l,{title:"National Taiwan University of Science and Technology",subtitle:"M.S. Computer Science 2021-2022",side:"left","data-id":1},{default:(0,a.w5)((()=>[(0,a.Wm)(Q.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[1]?((0,a.wg)(),(0,a.iD)("div",U," During my time in NTUST, I was a scholarship receipient and I performed researched on unsupervised image segmentation in the multimedia and image processing laboratory of Professor Kai-Lung Hua. ")):(0,a.kq)("",!0)])),_:1})])),_:1})),[[u,s.updateScroll],[u,s.onIntersection,void 0,{once:!0}]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(l,{title:"De La Salle University - Manila",subtitle:"B.S. Computer Science 2016-2020",side:"right","data-id":2},{default:(0,a.w5)((()=>[(0,a.Wm)(Q.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[2]?((0,a.wg)(),(0,a.iD)("div",A,L)):(0,a.kq)("",!0)])),_:1})])),_:1})),[[u,s.onIntersection,void 0,{once:!0}]])])),_:1})]),(0,a._)("div",E,[(0,a.Wm)(c,{layout:"dense",side:"right",color:"primary"},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(l,{"data-id":0,heading:""},{default:(0,a.w5)((()=>[i.inView[0]?((0,a.wg)(),(0,a.j4)(r,{key:0,array:["Experience"],iterations:1,caret:"cursor"})):(0,a.kq)("",!0)])),_:1})),[[u,s.onIntersection,void 0,{once:!0}]]),(0,a.Wm)(l,{title:"Fullstack Web Developer @ MedAlert ERx",subtitle:"2021",side:"left"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[1]?((0,a.wg)(),(0,a.iD)("div",O," MedAlert ERx is a Philippine-based startup that digitalizes medical prescriptions, health records, and pharmaceutical deliveries. During my time here, I designed and implemented the delivery system using Grab API, Strapi, and React.js. I also developed the corresponding delivery interface to streamline medicine prescription and delivery processes. ")):(0,a.kq)("",!0)])),_:1})])),_:1}),(0,a.wy)(((0,a.wg)(),(0,a.j4)(l,{title:"I.T. Intern @ Proctor & Gamble",subtitle:"2019",side:"right","data-id":3},{default:(0,a.w5)((()=>[(0,a.Wm)(Q.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[3]?((0,a.wg)(),(0,a.iD)("div",M," During my time at P&G, I developed a web application to translate perfume formulas and help streamline research on scented products. I also performed research on generative adversarial networks as a means to generate synthetic data to be used for the testing of in-house research projects. ")):(0,a.kq)("",!0)])),_:1})])),_:1})),[[u,s.onIntersection,void 0,{once:!0}]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(l,{title:"Software Engineering Intern @ Azeus Systems Ltd.",subtitle:"2019",side:"right","data-id":4},{default:(0,a.w5)((()=>[(0,a.Wm)(Q.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[4]?((0,a.wg)(),(0,a.iD)("div",B," Developed additional modules for a pre-existing resource tracking system. Additional modules included report generators, import report functionality, request for resources module, and a module for comments. Conducted a technical investigation on media server software Wowza to advise the development team on its usage in future projects. ")):(0,a.kq)("",!0)])),_:1})])),_:1})),[[u,s.updateScroll],[u,s.onIntersection,void 0,{once:!0}]])])),_:1})])])])),_:1},8,["style-fn"])}const F={name:"TimeLines",components:{VueWriter:b.Z},methods:{myTweak(e){return{minHeight:e?`calc(90vh - ${e}px)`:"90vh"}},onIntersection(e){const t=parseInt(e.target.dataset.id,10);setTimeout((()=>{this.inView.splice(t,1,e.isIntersecting)}),100)},updateScroll(e){const t=parseInt(e.target.dataset.id,10);1==t&&e.isIntersecting&&this.$emit("scrolling","about"),4!=t||e.isIntersecting||this.$emit("scrolling","")}},setup(){const e=(0,s.iH)(Array.apply(null,Array(5)).map((e=>!1)));return{inView:e}}};var G=n(6292),N=n(8767),$=n(1233),Y=n(9205);const J=(0,k.Z)(F,[["render",R]]),K=J;T()(F,"components",{QPage:q.Z,QTimeline:G.Z,QTimelineEntry:N.Z,QTr:$.Z}),T()(F,"directives",{Intersection:Y.Z});const X={class:"row justify-evenly"},ee={class:"col-8"},te={"data-id":2,style:{"{\n              min-height":"60px"}},ne=(0,a.Uk)("2021"),ae=(0,a.Uk)("Tapia J.F.D., Manzano J., "),ie=(0,a._)("b",null,"Ona I.B.",-1),oe=(0,a.Uk)(", Chua U., 2021, Development of a Web-based Application for Optimal Allocation of COVID-19 Vaccine, Chemical Engineering Transactions, 88, 553-558. "),se=(0,a.Uk)("2020"),re=(0,a.Uk)("Unisse C. Chua, Kyle L. Santiago, "),le=(0,a._)("b",null,"Ian Benedict M. Ona",-1),ce=(0,a.Uk)(", Romeo Manuel N. Peña, Geremiah Zachary S. Marasigan, Paolo Gabriel A. Delos Reyes, and Briane Paul V. Samson. 2020. From Access to Effective Use: Open Data Portals for Everyday Citizens. In "),de=(0,a._)("i",null,"Proceedings of the 2020 Symposium on Emerging Research from Asia and on Asian Contexts and Cultures",-1),ue=(0,a.Uk)(" ("),me=(0,a._)("i",null,"AsianCHI '20",-1),pe=(0,a.Uk)("). Association for Computing Machinery, New York, NY, USA, 61–64. DOI: https://doi.org/10.1145/3391203.3391219");function we(e,t,n,i,o,s){const r=(0,a.up)("vue-writer"),l=(0,a.up)("q-item-label"),c=(0,a.up)("q-item-section"),d=(0,a.up)("q-item"),u=(0,a.up)("q-list"),m=(0,a.up)("q-page"),p=(0,a.Q2)("intersection"),w=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(m,{"style-fn":s.myTweak},{default:(0,a.w5)((()=>[(0,a._)("div",X,[(0,a._)("div",ee,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",te,[(0,a._)("h3",null,[i.inView[2]?((0,a.wg)(),(0,a.j4)(r,{key:0,array:["Publications"],iterations:1,caret:"cursor"})):(0,a.kq)("",!0)])])),[[p,i.onIntersection,void 0,{once:!0}]]),(0,a.Wm)(u,{separator:""},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(d,{clickable:"","data-id":0,onClick:t[0]||(t[0]=e=>s.open("https://doi.org/10.3303/CET2188092"))},{default:(0,a.w5)((()=>[(0,a.Wm)(Q.uT,{name:"q-transition--jump-up"},{default:(0,a.w5)((()=>[i.inView[0]?((0,a.wg)(),(0,a.j4)(c,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{overline:""},{default:(0,a.w5)((()=>[ne])),_:1}),(0,a.Wm)(l,{class:"text-body1"},{default:(0,a.w5)((()=>[ae,ie,oe])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1})),[[w],[p,i.onIntersection]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(d,{clickable:"","data-id":1,onClick:t[1]||(t[1]=e=>s.open("https://doi.org/10.1145/3391203.3391219"))},{default:(0,a.w5)((()=>[(0,a.Wm)(Q.uT,{name:"q-transition--jump-up"},{default:(0,a.w5)((()=>[i.inView[1]?((0,a.wg)(),(0,a.j4)(c,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{overline:""},{default:(0,a.w5)((()=>[se])),_:1}),(0,a.Wm)(l,{class:"text-body1"},{default:(0,a.w5)((()=>[re,le,ce,de,ue,me,pe])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1})),[[w],[p,i.onIntersection]])])),_:1})])])])),_:1},8,["style-fn"])}const ge={name:"PublicationsSection",components:{VueWriter:b.Z},methods:{myTweak(e){return{minHeight:e?`calc(70vh - ${e}px)`:"70vh"}},open(e){window.open(e)}},setup(e,{emit:t}){const n=(0,s.iH)(Array.apply(null,Array(3)).map((e=>!1)));return{inView:n,onIntersection(e){const a=parseInt(e.target.dataset.id,10);setTimeout((()=>{n.value.splice(a,1,e.isIntersecting)}),100),1==a&&e.isIntersecting&&t("scrolling","pubs"),1!=a||e.isIntersecting||t("scrolling","contact")}}}};var he=n(3246),fe=n(490),ye=n(7003),ve=n(3115),be=n(1136);const _e=(0,k.Z)(ge,[["render",we]]),ke=_e;T()(ge,"components",{QPage:q.Z,QList:he.Z,QItem:fe.Z,QTr:$.Z,QItemSection:ye.Z,QItemLabel:ve.Z}),T()(ge,"directives",{Intersection:Y.Z,Ripple:be.Z});const qe={class:"row justify-evenly"},Ie={class:"col-8"},We={"data-id":0,style:{"{\n              min-height":"60px"}},Se={class:"text-body1"},je=(0,a.Uk)(" You can reach me anytime at "),Ze=(0,a._)("a",{href:"mailto:ianbenedictona@gmail.com"},[(0,a._)("span",{class:"touch text-primary"},"ianbenedictona@gmail.com")],-1),Te=(0,a.Uk)(" and download my resume "),Ce=(0,a.Uk)("here "),xe=(0,a._)("br",null,null,-1),Qe=(0,a._)("br",null,null,-1),Pe=(0,a.Uk)(" I occasionally take on freelance projects and am always excited to hear about cool things "),Ve=(0,a._)("br",null,null,-1),Ue=(0,a._)("br",null,null,-1),Ae=(0,a.Uk)(" Let’s connect! "),De=(0,a._)("br",null,null,-1),He={class:"q-pa-md q-gutter-sm"};function ze(e,t,n,i,o,s){const r=(0,a.up)("vue-writer"),l=(0,a.up)("q-icon"),c=(0,a.up)("q-intersection"),d=(0,a.up)("q-btn"),u=(0,a.up)("q-page"),m=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.j4)(u,{"style-fn":s.myTweak},{default:(0,a.w5)((()=>[(0,a._)("div",qe,[(0,a._)("div",Ie,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",We,[(0,a._)("h3",null,[i.inView[0]?((0,a.wg)(),(0,a.j4)(r,{key:0,array:["Contact"],iterations:1,caret:"cursor"})):(0,a.kq)("",!0)])])),[[m,i.onIntersection,void 0,{once:!0}]]),((0,a.wg)(),(0,a.j4)(c,{key:0,transition:"flip-up"},{default:(0,a.w5)((()=>[(0,a._)("span",Se,[je,Ze,Te,(0,a._)("span",{class:"cursor-pointer",onClick:t[0]||(t[0]=e=>s.open("https://drive.google.com/file/d/1ttO51qAnpUYTbO63MPEgPocfXgY3Ktsg/view?usp=sharing"))},[Ce,(0,a.Wm)(l,{color:"primary",size:"sm",name:"fa-solid fa-up-right-from-square"})]),xe,Qe,Pe,Ve,Ue,Ae,De])])),_:1})),((0,a.wg)(),(0,a.j4)(c,{key:0,transition:"flip-up"},{default:(0,a.w5)((()=>[(0,a._)("div",He,[(0,a.Wm)(d,{push:"",color:"primary",round:"",icon:"fab fa-linkedin-in",onClick:t[1]||(t[1]=e=>s.open("https://www.linkedin.com/in/ian-ona/"))}),(0,a.Wm)(d,{push:"",color:"accent",round:"",icon:"fab fa-github",onClick:t[2]||(t[2]=e=>s.open("http://github.com/ianona"))})])])),_:1}))])])])),_:1},8,["style-fn"])}const Le={name:"ContactSection",methods:{myTweak(e){return{minHeight:e?`calc(80vh - ${e}px)`:"80vh"}},open(e){window.open(e)}},setup(){const e=(0,s.iH)(Array.apply(null,Array(2)).map((e=>!1)));return{inView:e,onIntersection(t){const n=parseInt(t.target.dataset.id,10);setTimeout((()=>{e.value.splice(n,1,t.isIntersecting)}),100)}}}};var Ee=n(875),Oe=n(5823);const Me=(0,k.Z)(Le,[["render",ze]]),Be=Me;T()(Le,"components",{QPage:q.Z,QIntersection:Ee.Z,QIcon:j.Z,QBtn:Oe.Z}),T()(Le,"directives",{Intersection:Y.Z});var Re=n(8655),Fe=n.n(Re),Ge=n(9909),Ne=n.n(Ge);const $e={class:"row justify-evenly"},Ye={class:"col-8"},Je={"data-id":0,style:{"{\n              min-height":"60px"}},Ke={class:"row q-gutter-sm"},Xe={class:"col-12 col-md-5","data-id":1},et=(0,a._)("div",{class:"text-overline text-primary"},"2021",-1),tt={class:"text-h5 q-mt-sm q-mb-xs"},nt=(0,a.Uk)(" Likha Academy "),at=(0,a._)("div",{class:"text-caption text-grey q-mb-sm"}," An online educational platform that lets users purchase and stream courses related to urban agriculture ",-1),it=(0,a.Uk)(" Nuxt.js "),ot=(0,a.Uk)(" Strapi "),st=(0,a.Uk)(" Facebook API "),rt=(0,a.Uk)(" Paymongo API "),lt={class:"col-12 col-md-6","data-id":1},ct=(0,a._)("div",{class:"text-overline text-primary"},"2021",-1),dt={class:"text-h5 q-mt-sm q-mb-xs"},ut=(0,a.Uk)(" COVID Vaccine Allocation App "),mt=(0,a._)("div",{class:"text-caption text-grey q-mb-sm"}," A research project that models the optimal COVID vaccine allocation across varying population sizes ",-1),pt=(0,a.Uk)(" React.js "),wt=(0,a.Uk)(" Python Flask ");function gt(e,t,n,i,o,s){const r=(0,a.up)("vue-writer"),l=(0,a.up)("q-parallax"),c=(0,a.up)("q-btn"),d=(0,a.up)("q-chip"),u=(0,a.up)("q-card-section"),m=(0,a.up)("q-card"),p=(0,a.up)("q-page"),w=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.j4)(p,{"style-fn":s.myTweak},{default:(0,a.w5)((()=>[(0,a._)("div",$e,[(0,a._)("div",Ye,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",Je,[(0,a._)("h3",null,[i.inView[0]?((0,a.wg)(),(0,a.j4)(r,{key:0,array:["Projects"],iterations:1,caret:"cursor"})):(0,a.kq)("",!0)])])),[[w,i.onIntersection,void 0,{once:!0}]]),(0,a._)("div",Ke,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",Xe,[(0,a.Wm)(Q.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[1]?((0,a.wg)(),(0,a.j4)(m,{key:0,class:"my-card",bordered:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{src:Fe(),height:150}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[et,(0,a._)("div",tt,[nt,(0,a.Wm)(c,{size:"sm",padding:"none",flat:"",color:"primary",icon:"fa-solid fa-up-right-from-square",onClick:t[0]||(t[0]=e=>s.open("https://www.likhaacademy.com"))})]),at,(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[it])),_:1}),(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[ot])),_:1}),(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[st])),_:1}),(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[rt])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),[[w,i.onIntersection]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",lt,[(0,a.Wm)(Q.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[1]?((0,a.wg)(),(0,a.j4)(m,{key:0,class:"my-card",bordered:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{src:Ne(),height:150}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[ct,(0,a._)("div",dt,[ut,(0,a.Wm)(c,{size:"sm",padding:"none",flat:"",color:"primary",icon:"fa-solid fa-up-right-from-square",onClick:t[1]||(t[1]=e=>s.open("http://dlsudatasci.github.io/covidapp"))})]),mt,(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[pt])),_:1}),(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[wt])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),[[w,i.onIntersection]])])])])])),_:1},8,["style-fn"])}const ht={name:"ProjectsSection",components:{VueWriter:b.Z},methods:{myTweak(e){return{minHeight:e?`calc(70vh - ${e}px)`:"70vh"}},open(e){window.open(e)}},setup(e,{emit:t}){const n=(0,s.iH)(Array.apply(null,Array(2)).map((e=>!1)));return{inView:n,onIntersection(e){const a=parseInt(e.target.dataset.id,10);setTimeout((()=>{n.value.splice(a,1,e.isIntersecting)}),50),e.isIntersecting&&t("scrolling","projects")}}}};var ft=n(4458),yt=n(6536),vt=n(3190),bt=n(7691);const _t=(0,k.Z)(ht,[["render",gt]]),kt=_t;T()(ht,"components",{QPage:q.Z,QTr:$.Z,QCard:ft.Z,QParallax:yt.Z,QCardSection:vt.Z,QBtn:Oe.Z,QChip:bt.Z}),T()(ht,"directives",{Intersection:Y.Z});const qt=(0,a.aZ)({name:"MainLayout",components:{HelloWorld:x,TimeLines:K,PublicationsSection:ke,ProjectsSection:kt,ContactSection:Be},setup(){const e=(0,s.iH)(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},tab:(0,s.iH)("")}},methods:{scrollTo(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})},handleScroll(e){""==e&&"about"!=this.tab||"contact"==e&&"pubs"!=this.tab||(this.tab=e)}}});var It=n(7605),Wt=n(6602),St=n(1663),jt=n(2354),Zt=n(900),Tt=n(2133),Ct=n(3155);const xt=(0,k.Z)(qt,[["render",o]]),Qt=xt;T()(qt,"components",{QLayout:It.Z,QHeader:Wt.Z,QToolbar:St.Z,QTabs:jt.Z,QTab:Zt.Z,QPageContainer:Tt.Z,QPageScroller:Ct.Z,QBtn:Oe.Z})},9909:(e,t,n)=>{e.exports=n.p+"img/covid.583d429f.png"},8655:(e,t,n)=>{e.exports=n.p+"img/likha.af810dcd.jpg"}}]);