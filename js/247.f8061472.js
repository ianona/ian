(self["webpackChunkian"]=self["webpackChunkian"]||[]).push([[247],{2247:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Zt});var a=n(9835),i=n(6970);function o(e,t,n,o,s,r){const l=(0,a.up)("q-tab"),c=(0,a.up)("q-tabs"),d=(0,a.up)("q-toolbar"),u=(0,a.up)("q-header"),m=(0,a.up)("HelloWorld"),p=(0,a.up)("TimeLines"),w=(0,a.up)("ProjectsSection"),g=(0,a.up)("PublicationsSection"),h=(0,a.up)("ContactSection"),f=(0,a.up)("q-btn"),y=(0,a.up)("q-page-scroller"),v=(0,a.up)("q-page-container"),b=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(b,{view:"hHh lpR fFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:(0,i.C_)({"bg-white":""==e.tab,"text-primary":""==e.tab})},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{align:"left",modelValue:e.tab,"onUpdate:modelValue":t[4]||(t[4]=t=>e.tab=t),shrink:"",stretch:""},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{name:"about",label:"About me",onClick:t[0]||(t[0]=t=>e.scrollTo("about"))}),(0,a.Wm)(l,{name:"projects",label:"Projects",onClick:t[1]||(t[1]=t=>e.scrollTo("projects"))}),(0,a.Wm)(l,{name:"pubs",label:"Publications",onClick:t[2]||(t[2]=t=>e.scrollTo("pubs"))}),(0,a.Wm)(l,{key:"lol",name:"contact",label:"Contact",onClick:t[3]||(t[3]=t=>e.scrollTo("contact"))})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["class"]),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m),(0,a.Wm)(p,{id:"about",onScrolling:e.handleScroll},null,8,["onScrolling"]),(0,a.Wm)(w,{id:"projects",onScrolling:e.handleScroll},null,8,["onScrolling"]),(0,a.Wm)(g,{id:"pubs",onScrolling:e.handleScroll},null,8,["onScrolling"]),(0,a.Wm)(h,{id:"contact",onScrolling:e.handleScroll},null,8,["onScrolling"]),(0,a.Wm)(y,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{fab:"",icon:"keyboard_arrow_up",color:"primary"})])),_:1})])),_:1})])),_:1})}var s=n(499);const r=e=>((0,a.dD)("data-v-04840fb6"),e=e(),(0,a.Cn)(),e),l={class:"row justify-evenly"},c={class:"col-8"},d=r((()=>(0,a._)("h2",{class:"q-mb-md"},"Hello, my name is Ian Ona",-1))),u={class:"q-mt-none"},m=(0,a.Uk)(" I am a software engineer based in Taipei and this is my resume website "),p=r((()=>(0,a._)("div",{class:"q-mt-md"},[(0,a._)("h2",{class:"q-mb-md"},"I am a software engineer"),(0,a._)("h5",{class:"q-mt-none"}," I specialize in web development but I enjoy creating just about any kind of app ")],-1))),w=r((()=>(0,a._)("div",{class:"q-mt-md"},[(0,a._)("h2",{class:"q-mb-md"},"Exercise is cool too"),(0,a._)("h5",{class:"q-mt-none"}," I also like cooking, reviewing movies, and reading (anything) ")],-1)));function g(e,t,n,i,o,s){const r=(0,a.up)("q-linear-progress"),g=(0,a.up)("q-icon"),h=(0,a.up)("q-carousel-slide"),f=(0,a.up)("q-carousel"),y=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(y,{class:"flex flex-center hero"},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",c,[(0,a.Wm)(f,{modelValue:o.slide,"onUpdate:modelValue":t[0]||(t[0]=e=>o.slide=e),swipeable:"",animated:"",padding:!0,arrows:!1,navigation:!0,fullscreen:!1,"control-color":"black"},{"navigation-icon":(0,a.w5)((({active:e})=>[e?((0,a.wg)(),(0,a.j4)(r,{key:0,value:o.progress/5*.2},null,8,["value"])):(0,a.kq)("",!0)])),default:(0,a.w5)((()=>[(0,a.Wm)(h,{name:"one",class:"column flex-center"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[d,(0,a._)("h5",u,[m,(0,a.Wm)(g,{color:"primary",name:"fas fa-smile"})])])])),_:1}),(0,a.Wm)(h,{name:"two",class:"column flex-center"},{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(h,{name:"three",class:"column flex-center"},{default:(0,a.w5)((()=>[w])),_:1})])),_:1},8,["modelValue"])])])])),_:1})}const h={name:"HelloWorld",data(){return{progress:0,curSlide:0,slideContent:[{name:"one",header:"Hello, my name is Ian Ona",sub:"and welcome to my resume website"}],slides:["one","two","three"],slide:"one",lorem:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."}},mounted(){this.interval=setInterval(this.startInterval,100)},methods:{startInterval(){this.progress>=50?(clearInterval(this.interval),this.curSlide=(this.curSlide+1)%3,this.slide=this.slides[this.curSlide],this.progress=.1,this.interval=setInterval(this.startInterval,100)):this.progress++}}};var f=n(1639),y=n(9885),v=n(960),b=n(8289),_=n(1694),k=n(2857),I=n(9984),q=n.n(I);const W=(0,f.Z)(h,[["render",g],["__scopeId","data-v-04840fb6"]]),j=W;q()(h,"components",{QPage:y.Z,QCarousel:v.Z,QLinearProgress:b.Z,QCarouselSlide:_.Z,QIcon:k.Z});var S=n(1957);const Z={class:"row justify-evenly"},T={class:"col-8 col-md-4"},C={key:0},x={key:0},Q=(0,a.Uk)(" Graduated "),P=(0,a._)("b",null,"Magna Cum Laude (3.79/4.00)",-1),V=(0,a.Uk)(" and a member of the Jose Rizal Honor Society for consistent 1st honors for 4 years. Received the Bronze Award for Best Undergraduate Thesis and extra curriculars include Vice President of the Peer Tutor Society and Batch President. "),U=[Q,P,V],A={class:"col-8 col-md-4"},D={key:0},H={key:0},z={key:0};function L(e,t,n,i,o,s){const r=(0,a.up)("vue-writer"),l=(0,a.up)("q-timeline-entry"),c=(0,a.up)("q-timeline"),d=(0,a.up)("q-page"),u=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.j4)(d,{"style-fn":s.myTweak,class:"q-pt-xl"},{default:(0,a.w5)((()=>[(0,a._)("div",Z,[(0,a._)("div",T,[(0,a.Wm)(c,{side:"right",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{heading:""},{default:(0,a.w5)((()=>[i.inView[0]?((0,a.wg)(),(0,a.j4)(r,{key:0,array:["Education"],iterations:1,caret:"cursor"})):(0,a.kq)("",!0)])),_:1}),(0,a.wy)(((0,a.wg)(),(0,a.j4)(l,{title:"National Taiwan University of Science and Technology",subtitle:"M.S. Computer Science 2021-2022",side:"left","data-id":1},{default:(0,a.w5)((()=>[(0,a.Wm)(S.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[1]?((0,a.wg)(),(0,a.iD)("div",C," During my time in NTUST, I was a scholarship receipient and I performed researched on unsupervised image segmentation in the multimedia and image processing laboratory of Professor Kai-Lung Hua. ")):(0,a.kq)("",!0)])),_:1})])),_:1})),[[u,s.updateScroll],[u,s.onIntersection,void 0,{once:!0}]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(l,{title:"De La Salle University - Manila",subtitle:"B.S. Computer Science 2016-2020",side:"right","data-id":2},{default:(0,a.w5)((()=>[(0,a.Wm)(S.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[2]?((0,a.wg)(),(0,a.iD)("div",x,U)):(0,a.kq)("",!0)])),_:1})])),_:1})),[[u,s.onIntersection,void 0,{once:!0}]])])),_:1})]),(0,a._)("div",A,[(0,a.Wm)(c,{layout:"dense",side:"right",color:"primary"},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(l,{"data-id":0,heading:""},{default:(0,a.w5)((()=>[i.inView[0]?((0,a.wg)(),(0,a.j4)(r,{key:0,array:["Experience"],iterations:1,caret:"cursor"})):(0,a.kq)("",!0)])),_:1})),[[u,s.onIntersection,void 0,{once:!0}]]),(0,a.Wm)(l,{title:"Fullstack Web Developer @ MedAlert ERx",subtitle:"2021",side:"left"},{default:(0,a.w5)((()=>[(0,a.Wm)(S.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[1]?((0,a.wg)(),(0,a.iD)("div",D," MedAlert ERx is a Philippine-based startup that digitalizes medical prescriptions, health records, and pharmaceutical deliveries. During my time here, I designed and implemented the delivery system using Grab API, Strapi, and React.js. I also developed the corresponding delivery interface to streamline medicine prescription and delivery processes. ")):(0,a.kq)("",!0)])),_:1})])),_:1}),(0,a.wy)(((0,a.wg)(),(0,a.j4)(l,{title:"I.T. Intern @ Proctor & Gamble",subtitle:"2019",side:"right","data-id":3},{default:(0,a.w5)((()=>[(0,a.Wm)(S.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[3]?((0,a.wg)(),(0,a.iD)("div",H," During my time at P&G, I developed a web application to translate perfume formulas and help streamline research on scented products. I also performed research on generative adversarial networks as a means to generate synthetic data to be used for the testing of in-house research projects. ")):(0,a.kq)("",!0)])),_:1})])),_:1})),[[u,s.onIntersection,void 0,{once:!0}]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(l,{title:"Software Engineering Intern @ Azeus Systems Ltd.",subtitle:"2019",side:"right","data-id":4},{default:(0,a.w5)((()=>[(0,a.Wm)(S.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[4]?((0,a.wg)(),(0,a.iD)("div",z," Developed additional modules for a pre-existing resource tracking system. Additional modules included report generators, import report functionality, request for resources module, and a module for comments. Conducted a technical investigation on media server software Wowza to advise the development team on its usage in future projects. ")):(0,a.kq)("",!0)])),_:1})])),_:1})),[[u,s.updateScroll],[u,s.onIntersection,void 0,{once:!0}]])])),_:1})])])])),_:1},8,["style-fn"])}var E=n(7525);const B={name:"TimeLines",components:{VueWriter:E.Z},methods:{myTweak(e){return{minHeight:e?`calc(90vh - ${e}px)`:"90vh"}},onIntersection(e){const t=parseInt(e.target.dataset.id,10);setTimeout((()=>{this.inView.splice(t,1,e.isIntersecting)}),100)},updateScroll(e){const t=parseInt(e.target.dataset.id,10);1==t&&e.isIntersecting&&this.$emit("scrolling","about"),4!=t||e.isIntersecting||this.$emit("scrolling","")}},setup(){const e=(0,s.iH)(Array.apply(null,Array(5)).map((e=>!1)));return{inView:e}}};var M=n(6292),O=n(8767),R=n(1233),F=n(9205);const G=(0,f.Z)(B,[["render",L]]),N=G;q()(B,"components",{QPage:y.Z,QTimeline:M.Z,QTimelineEntry:O.Z,QTr:R.Z}),q()(B,"directives",{Intersection:F.Z});const $={class:"row justify-evenly"},J={class:"col-8"},Y={"data-id":2,style:{"{\n              min-height":"60px"}},K=(0,a.Uk)("2021"),X=(0,a.Uk)("Tapia J.F.D., Manzano J., "),ee=(0,a._)("b",null,"Ona I.B.",-1),te=(0,a.Uk)(", Chua U., 2021, Development of a Web-based Application for Optimal Allocation of COVID-19 Vaccine, Chemical Engineering Transactions, 88, 553-558. "),ne=(0,a.Uk)("2020"),ae=(0,a.Uk)("Unisse C. Chua, Kyle L. Santiago, "),ie=(0,a._)("b",null,"Ian Benedict M. Ona",-1),oe=(0,a.Uk)(", Romeo Manuel N. Peña, Geremiah Zachary S. Marasigan, Paolo Gabriel A. Delos Reyes, and Briane Paul V. Samson. 2020. From Access to Effective Use: Open Data Portals for Everyday Citizens. In "),se=(0,a._)("i",null,"Proceedings of the 2020 Symposium on Emerging Research from Asia and on Asian Contexts and Cultures",-1),re=(0,a.Uk)(" ("),le=(0,a._)("i",null,"AsianCHI '20",-1),ce=(0,a.Uk)("). Association for Computing Machinery, New York, NY, USA, 61–64. DOI: https://doi.org/10.1145/3391203.3391219");function de(e,t,n,i,o,s){const r=(0,a.up)("vue-writer"),l=(0,a.up)("q-item-label"),c=(0,a.up)("q-item-section"),d=(0,a.up)("q-item"),u=(0,a.up)("q-list"),m=(0,a.up)("q-page"),p=(0,a.Q2)("intersection"),w=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(m,{"style-fn":s.myTweak},{default:(0,a.w5)((()=>[(0,a._)("div",$,[(0,a._)("div",J,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",Y,[(0,a._)("h3",null,[i.inView[2]?((0,a.wg)(),(0,a.j4)(r,{key:0,array:["Publications"],iterations:1,caret:"cursor"})):(0,a.kq)("",!0)])])),[[p,i.onIntersection,void 0,{once:!0}]]),(0,a.Wm)(u,{separator:""},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(d,{clickable:"","data-id":0,onClick:t[0]||(t[0]=e=>s.open("https://doi.org/10.3303/CET2188092"))},{default:(0,a.w5)((()=>[(0,a.Wm)(S.uT,{name:"q-transition--jump-up"},{default:(0,a.w5)((()=>[i.inView[0]?((0,a.wg)(),(0,a.j4)(c,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{overline:""},{default:(0,a.w5)((()=>[K])),_:1}),(0,a.Wm)(l,{class:"text-body1"},{default:(0,a.w5)((()=>[X,ee,te])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1})),[[w],[p,i.onIntersection]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(d,{clickable:"","data-id":1,onClick:t[1]||(t[1]=e=>s.open("https://doi.org/10.1145/3391203.3391219"))},{default:(0,a.w5)((()=>[(0,a.Wm)(S.uT,{name:"q-transition--jump-up"},{default:(0,a.w5)((()=>[i.inView[1]?((0,a.wg)(),(0,a.j4)(c,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{overline:""},{default:(0,a.w5)((()=>[ne])),_:1}),(0,a.Wm)(l,{class:"text-body1"},{default:(0,a.w5)((()=>[ae,ie,oe,se,re,le,ce])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1})),[[w],[p,i.onIntersection]])])),_:1})])])])),_:1},8,["style-fn"])}const ue={name:"PublicationsSection",components:{VueWriter:E.Z},methods:{myTweak(e){return{minHeight:e?`calc(70vh - ${e}px)`:"70vh"}},open(e){window.open(e)}},setup(e,{emit:t}){const n=(0,s.iH)(Array.apply(null,Array(3)).map((e=>!1)));return{inView:n,onIntersection(e){const a=parseInt(e.target.dataset.id,10);setTimeout((()=>{n.value.splice(a,1,e.isIntersecting)}),100),1==a&&e.isIntersecting&&t("scrolling","pubs"),1!=a||e.isIntersecting||t("scrolling","contact")}}}};var me=n(3246),pe=n(490),we=n(7003),ge=n(3115),he=n(1136);const fe=(0,f.Z)(ue,[["render",de]]),ye=fe;q()(ue,"components",{QPage:y.Z,QList:me.Z,QItem:pe.Z,QTr:R.Z,QItemSection:we.Z,QItemLabel:ge.Z}),q()(ue,"directives",{Intersection:F.Z,Ripple:he.Z});const ve={class:"row justify-evenly"},be={class:"col-8"},_e={"data-id":0,style:{"{\n              min-height":"60px"}},ke={class:"text-h5"},Ie=(0,a.Uk)(" You can reach me anytime at "),qe=(0,a._)("a",{href:"mailto:ianbenedictona@gmail.com"},[(0,a._)("span",{class:"touch text-primary"},"ianbenedictona@gmail.com")],-1),We=(0,a.Uk)(" and download my resume "),je=(0,a.Uk)("here"),Se=(0,a._)("br",null,null,-1),Ze=(0,a._)("br",null,null,-1),Te=(0,a.Uk)(" I occasionally take on freelance projects and am always excited to hear about cool things "),Ce=(0,a._)("br",null,null,-1),xe=(0,a._)("br",null,null,-1),Qe=(0,a.Uk)(" Let’s connect! "),Pe=(0,a._)("br",null,null,-1),Ve={class:"q-pa-md q-gutter-sm"};function Ue(e,t,n,i,o,s){const r=(0,a.up)("vue-writer"),l=(0,a.up)("q-icon"),c=(0,a.up)("q-intersection"),d=(0,a.up)("q-btn"),u=(0,a.up)("q-page"),m=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.j4)(u,{"style-fn":s.myTweak},{default:(0,a.w5)((()=>[(0,a._)("div",ve,[(0,a._)("div",be,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",_e,[(0,a._)("h3",null,[i.inView[0]?((0,a.wg)(),(0,a.j4)(r,{key:0,array:["Contact"],iterations:1,caret:"cursor"})):(0,a.kq)("",!0)])])),[[m,i.onIntersection,void 0,{once:!0}]]),((0,a.wg)(),(0,a.j4)(c,{key:0,transition:"flip-up"},{default:(0,a.w5)((()=>[(0,a._)("span",ke,[Ie,qe,We,(0,a._)("span",{class:"cursor-pointer",onClick:t[0]||(t[0]=e=>s.open("https://www.linkedin.com/in/ian-ona/"))},[je,(0,a.Wm)(l,{color:"primary",size:"sm",name:"download"})]),Se,Ze,Te,Ce,xe,Qe,Pe])])),_:1})),((0,a.wg)(),(0,a.j4)(c,{key:0,transition:"flip-up"},{default:(0,a.w5)((()=>[(0,a._)("div",Ve,[(0,a.Wm)(d,{push:"",color:"primary",round:"",icon:"fab fa-linkedin-in",onClick:t[1]||(t[1]=e=>s.open("https://www.linkedin.com/in/ian-ona/"))}),(0,a.Wm)(d,{push:"",color:"accent",round:"",icon:"fab fa-github",onClick:t[2]||(t[2]=e=>s.open("http://github.com/ianona"))})])])),_:1}))])])])),_:1},8,["style-fn"])}const Ae={name:"ContactSection",methods:{myTweak(e){return{minHeight:e?`calc(80vh - ${e}px)`:"80vh"}},open(e){window.open(e)}},setup(){const e=(0,s.iH)(Array.apply(null,Array(2)).map((e=>!1)));return{inView:e,onIntersection(t){const n=parseInt(t.target.dataset.id,10);setTimeout((()=>{e.value.splice(n,1,t.isIntersecting)}),100)}}}};var De=n(875),He=n(5823);const ze=(0,f.Z)(Ae,[["render",Ue]]),Le=ze;q()(Ae,"components",{QPage:y.Z,QIntersection:De.Z,QIcon:k.Z,QBtn:He.Z}),q()(Ae,"directives",{Intersection:F.Z});var Ee=n(8655),Be=n.n(Ee),Me=n(9909),Oe=n.n(Me);const Re={class:"row justify-evenly"},Fe={class:"col-8"},Ge={"data-id":0,style:{"{\n              min-height":"60px"}},Ne={class:"row q-gutter-sm"},$e={class:"col-12 col-md-5","data-id":1},Je=(0,a._)("div",{class:"text-overline text-primary"},"2021",-1),Ye={class:"text-h5 q-mt-sm q-mb-xs"},Ke=(0,a.Uk)(" Likha Academy "),Xe=(0,a._)("div",{class:"text-caption text-grey q-mb-sm"}," An online educational platform that lets users purchase and stream courses related to urban agriculture ",-1),et=(0,a.Uk)(" Nuxt.js "),tt=(0,a.Uk)(" Strapi "),nt=(0,a.Uk)(" Facebook API "),at=(0,a.Uk)(" Paymongo API "),it={class:"col-12 col-md-6","data-id":1},ot=(0,a._)("div",{class:"text-overline text-primary"},"2021",-1),st={class:"text-h5 q-mt-sm q-mb-xs"},rt=(0,a.Uk)(" COVID Vaccine Allocation App "),lt=(0,a._)("div",{class:"text-caption text-grey q-mb-sm"}," A research project that models the optimal COVID vaccine allocation across varying population sizes ",-1),ct=(0,a.Uk)(" React.js "),dt=(0,a.Uk)(" Python Flask ");function ut(e,t,n,i,o,s){const r=(0,a.up)("vue-writer"),l=(0,a.up)("q-parallax"),c=(0,a.up)("q-btn"),d=(0,a.up)("q-chip"),u=(0,a.up)("q-card-section"),m=(0,a.up)("q-card"),p=(0,a.up)("q-page"),w=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.j4)(p,{"style-fn":s.myTweak},{default:(0,a.w5)((()=>[(0,a._)("div",Re,[(0,a._)("div",Fe,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",Ge,[(0,a._)("h3",null,[i.inView[0]?((0,a.wg)(),(0,a.j4)(r,{key:0,array:["Projects"],iterations:1,caret:"cursor"})):(0,a.kq)("",!0)])])),[[w,i.onIntersection,void 0,{once:!0}]]),(0,a._)("div",Ne,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",$e,[(0,a.Wm)(S.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[1]?((0,a.wg)(),(0,a.j4)(m,{key:0,class:"my-card",bordered:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{src:Be(),height:150}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[Je,(0,a._)("div",Ye,[Ke,(0,a.Wm)(c,{size:"sm",padding:"none",flat:"",color:"primary",icon:"fa-solid fa-up-right-from-square",onClick:t[0]||(t[0]=e=>s.open("https://www.likhaacademy.com"))})]),Xe,(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[et])),_:1}),(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[tt])),_:1}),(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[nt])),_:1}),(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[at])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),[[w,i.onIntersection]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",it,[(0,a.Wm)(S.uT,{name:"q-transition--scale"},{default:(0,a.w5)((()=>[i.inView[1]?((0,a.wg)(),(0,a.j4)(m,{key:0,class:"my-card",bordered:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{src:Oe(),height:150}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[ot,(0,a._)("div",st,[rt,(0,a.Wm)(c,{size:"sm",padding:"none",flat:"",color:"primary",icon:"fa-solid fa-up-right-from-square",onClick:t[1]||(t[1]=e=>s.open("http://dlsudatasci.github.io/covidapp"))})]),lt,(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[ct])),_:1}),(0,a.Wm)(d,{size:"sm"},{default:(0,a.w5)((()=>[dt])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),[[w,i.onIntersection]])])])])])),_:1},8,["style-fn"])}const mt={name:"ProjectsSection",components:{VueWriter:E.Z},methods:{myTweak(e){return{minHeight:e?`calc(70vh - ${e}px)`:"70vh"}},open(e){window.open(e)}},setup(e,{emit:t}){const n=(0,s.iH)(Array.apply(null,Array(2)).map((e=>!1)));return{inView:n,onIntersection(e){const a=parseInt(e.target.dataset.id,10);setTimeout((()=>{n.value.splice(a,1,e.isIntersecting)}),50),e.isIntersecting&&t("scrolling","projects")}}}};var pt=n(4458),wt=n(6536),gt=n(3190),ht=n(7691);const ft=(0,f.Z)(mt,[["render",ut]]),yt=ft;q()(mt,"components",{QPage:y.Z,QTr:R.Z,QCard:pt.Z,QParallax:wt.Z,QCardSection:gt.Z,QBtn:He.Z,QChip:ht.Z}),q()(mt,"directives",{Intersection:F.Z});const vt=(0,a.aZ)({name:"MainLayout",components:{HelloWorld:j,TimeLines:N,PublicationsSection:ye,ProjectsSection:yt,ContactSection:Le},setup(){const e=(0,s.iH)(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},tab:(0,s.iH)("")}},methods:{scrollTo(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})},handleScroll(e){""==e&&"about"!=this.tab||"contact"==e&&"pubs"!=this.tab||(this.tab=e)}}});var bt=n(7605),_t=n(6602),kt=n(1663),It=n(2354),qt=n(900),Wt=n(2133),jt=n(3155);const St=(0,f.Z)(vt,[["render",o]]),Zt=St;q()(vt,"components",{QLayout:bt.Z,QHeader:_t.Z,QToolbar:kt.Z,QTabs:It.Z,QTab:qt.Z,QPageContainer:Wt.Z,QPageScroller:jt.Z,QBtn:He.Z})},9909:(e,t,n)=>{e.exports=n.p+"img/covid.583d429f.png"},8655:(e,t,n)=>{e.exports=n.p+"img/likha.af810dcd.jpg"}}]);