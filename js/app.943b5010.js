(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],v=0,d=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vuetify/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},s=[],i={name:"App"},o=i,c=a("2877"),l=Object(c["a"])(o,n,s,!1,null,null,null),u=l.exports,v=a("f309");r["a"].use(v["a"]);var d=new v["a"]({theme:{dark:!0}}),m=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-subheader",[t._v("Recent played")]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:12,md:6,lg:4}},[a("v-card",{attrs:{color:"#385F73",dark:""}},[a("v-card-title",{staticClass:"headline"},[t._v("Unlimited music now")]),a("v-card-subtitle",[t._v("Listen to your favorite artists and albums whenever and wherever, online and offline.")]),a("v-card-actions",[a("v-btn",{attrs:{small:"",text:""}},[t._v("Listen Now")])],1)],1)],1),t._l(t.items,(function(e,r){return a("v-col",{key:r,attrs:{cols:"12",md:6,lg:4}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.artist)}})],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a("v-img",{attrs:{src:e.src}})],1)],1)])],1)}))],2),a("v-subheader",[t._v("Albums")]),a("v-row",[a("v-col",{attrs:{cols:"12",md:6,lg:4}},[a("v-card",{attrs:{color:"#385F73",dark:""}},[a("v-card-title",{staticClass:"headline"},[t._v("Unlimited music now")]),a("v-card-subtitle",[t._v("Listen to your favorite artists and albums whenever and wherever, online and offline.")]),a("v-card-actions",[a("v-btn",{attrs:{small:"",text:""}},[t._v("Listen Now")])],1)],1)],1),t._l(t.items,(function(e,r){return a("v-col",{key:r,attrs:{cols:"12",md:6,lg:4}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.artist)}})],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a("v-img",{attrs:{src:e.src}})],1)],1)])],1)}))],2)],1)},f=[],b={name:"Home",data:function(){return{items:[{color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/foster.jpg",title:"Supermodel",artist:"Foster the People"},{color:"#952175",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"Halcyon Days",artist:"Ellie Goulding"}]}}},h=b,_=a("6544"),g=a.n(_),y=a("8212"),V=a("8336"),w=a("b0af"),C=a("99d9"),k=a("62ad"),x=a("adda"),j=a("0fd9"),O=a("e0c7"),S=Object(c["a"])(h,p,f,!1,null,null,null),T=S.exports;g()(S,{VAvatar:y["a"],VBtn:V["a"],VCard:w["a"],VCardActions:C["a"],VCardSubtitle:C["b"],VCardTitle:C["c"],VCol:k["a"],VImg:x["a"],VRow:j["a"],VSubheader:O["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12",lg:"8"}},[a("v-text-field",{attrs:{filled:"","hide-details":"",rounded:"","append-icon":"mdi-magnify",label:"Search songs..."},on:{input:function(e){return t.search()}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)],1),a("v-row",t._l(t.tracks,(function(t){return a("v-col",{key:t.id,attrs:{cols:"12",xs:"12",md:"6",lg:"4"}},[a("TrackCard",{attrs:{track:t}})],1)})),1)],1)},I=[],L=(a("ac1f"),a("841c"),a("96cf"),a("1da1")),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-4"},[t._v("OVERLINE")]),a("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(t.track.name))]),a("v-list-item-subtitle",[t._v(t._s(t.track.artists[0].name))])],1),a("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}},[a("v-img",{attrs:{src:t.track.album.images[0].url}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.ADD_FAV(t.track)}}},[a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{text:""}},[t._v("Button")])],1)],1)},E=[],R=a("5530"),F=a("2f62"),$={props:["track"],methods:Object(R["a"])({},Object(F["b"])("tracks",["ADD_FAV"]))},D=$,N=a("132d"),M=a("da13"),H=a("8270"),q=a("5d23"),B=Object(c["a"])(D,P,E,!1,null,null,null),z=B.exports;g()(B,{VBtn:V["a"],VCard:w["a"],VCardActions:C["a"],VIcon:N["a"],VImg:x["a"],VListItem:M["a"],VListItemAvatar:H["a"],VListItemContent:q["a"],VListItemSubtitle:q["b"],VListItemTitle:q["c"]});var G={data:function(){return{query:"rock"}},components:{TrackCard:z},created:function(){this.search()},computed:{tracks:function(){return this.$store.state.tracks.tracks}},methods:{search:function(){var t=this;return Object(L["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("tracks/searchTrack",t.query);case 1:case"end":return e.stop()}}),e)})))()}}},U=G,J=a("8654"),K=Object(c["a"])(U,A,I,!1,null,null,null),Q=K.exports;g()(K,{VCol:k["a"],VRow:j["a"],VTextField:J["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-row",t._l(t.favorites,(function(e,r){return a("v-col",{key:r,attrs:{cols:"12",md:6,lg:4}},[a("v-card",{attrs:{dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.name)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.artists[0].name)}})],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a("v-img",{attrs:{src:e.album.images[0].url}})],1)],1)])],1)})),1)],1)},X=[],Y={name:"Home",computed:Object(R["a"])({},Object(F["c"])("tracks",["favorites"])),data:function(){return{items:[{color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/foster.jpg",title:"Supermodel",artist:"Foster the People"},{color:"#952175",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"Halcyon Days",artist:"Ellie Goulding"}]}}},Z=Y,tt=Object(c["a"])(Z,W,X,!1,null,null,null),et=tt.exports;g()(tt,{VAvatar:y["a"],VCard:w["a"],VCardSubtitle:C["b"],VCardTitle:C["c"],VCol:k["a"],VImg:x["a"],VRow:j["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t.isMobile?t._e():a("v-navigation-drawer",{attrs:{permanent:"",app:""}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{staticClass:"mb-3"},[a("v-icon",{staticClass:"mx-4",attrs:{large:""}},[t._v(" mdi-spotify ")]),a("v-toolbar-title",{staticClass:"mr-12 align-center"},[a("span",{staticClass:"title"},[t._v("Spotify")])])],1),a("v-list-item",{attrs:{to:"/home",link:""}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" Home ")]),a("v-list-item-subtitle",[t._v("Ruta principal")])],1)],1)],1)],1),a("v-app-bar",{attrs:{dense:"",dark:"",flat:"",app:""}}),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),t.isMobile?a("v-bottom-navigation",{attrs:{app:""},model:{value:t.bottomNav,callback:function(e){t.bottomNav=e},expression:"bottomNav"}},[a("v-btn",{attrs:{to:"/home",value:"recent"}},[a("span",[t._v("Home")]),a("v-icon",[t._v("mdi-home")])],1),a("v-btn",{attrs:{to:"/favorites",value:"favorites"}},[a("span",[t._v("Favorites")]),a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{to:"/search",value:"nearby"}},[a("span",[t._v("Search")]),a("v-icon",[t._v("mdi-magnify")])],1)],1):t._e()],1)},rt=[],nt={data:function(){return{bottomNav:"favorites"}},computed:{isMobile:function(){return this.$vuetify.breakpoint.mobile}}},st=nt,it=a("7496"),ot=a("40dc"),ct=a("b81c"),lt=a("a523"),ut=a("8860"),vt=a("1800"),dt=a("f6c4"),mt=a("f774"),pt=a("2a7f"),ft=Object(c["a"])(st,at,rt,!1,null,null,null),bt=ft.exports;g()(ft,{VApp:it["a"],VAppBar:ot["a"],VBottomNavigation:ct["a"],VBtn:V["a"],VContainer:lt["a"],VIcon:N["a"],VList:ut["a"],VListItem:M["a"],VListItemAction:vt["a"],VListItemContent:q["a"],VListItemSubtitle:q["b"],VListItemTitle:q["c"],VMain:dt["a"],VNavigationDrawer:mt["a"],VToolbarTitle:pt["a"]}),r["a"].use(m["a"]);var ht=[{path:"/",name:"Index",redirect:"/home",component:bt,children:[{path:"/home",name:"Home",component:T},{path:"/favorites",name:"Favorites",component:et},{path:"/search",name:"Search",component:Q}]},{path:"*",name:"404",redirect:"/"}],_t=new m["a"]({routes:ht}),gt=_t,yt=a("bc3a"),Vt=a.n(yt),wt=Vt.a.create({baseURL:"https://adc-spotify-api.herokuapp.com",mode:"cors",credentials:"same-origin",timeout:2e4}),Ct=wt;function kt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Ct({url:"/search",method:"GET",params:{q:t,type:"track",offset:e}})}var xt={namespaced:!0,state:{tracks:[],favorites:[]},mutations:{SET_TRACKS:function(t,e){t.tracks=e},ADD_FAV:function(t,e){t.favorites.push(e)}},actions:{searchTrack:function(t,e){return Object(L["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,kt(e);case 2:r=a.sent,console.log(r),t.commit("SET_TRACKS",r.data.tracks.items);case 5:case"end":return a.stop()}}),a)})))()}}};r["a"].use(F["a"]);var jt=new F["a"].Store({modules:{tracks:xt}});r["a"].config.productionTip=!1,new r["a"]({vuetify:d,router:gt,store:jt,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.943b5010.js.map