(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{FIlL:function(t,e,a){"use strict";var s={name:"ValuesRow",props:{values:Array},methods:{testAlert:function(){alert("test click")}}},r=(a("tNhg"),a("KHd+")),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rowDataWrapper"},[a("div",{staticClass:"rowValuesWrapper"},t._l(t.values,(function(e){return a("div",{staticClass:"rowValueWrapper"},[a("div",{staticClass:"rowValueHeader"},[t._v(t._s(e.name))]),a("div",{staticClass:"rowValue"},[t._v(t._s(e.value.toString()+e.units))])])})),0),a("div",{staticClass:"rowDataUpdateButton",on:{click:t.testAlert}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"37.32",height:"31.51",viewBox:"0 0 37.32 31.51"}},[a("g",{attrs:{id:"Component_1_1","data-name":"Component 1 – 1",transform:"translate(1.215 1)"}},[a("g",{attrs:{id:"Group_24","data-name":"Group 24",transform:"translate(-70.96 -21)"}},[a("g",{attrs:{id:"Group_23","data-name":"Group 23",transform:"translate(-924.217 -496.533)"}},[a("g",{attrs:{id:"Group_21","data-name":"Group 21",transform:"translate(997.962 535.012)"}},[a("path",{attrs:{id:"Path_15","data-name":"Path 15",d:"M1023.925,544.441l6.027-2.907,1.645,6.486",transform:"translate(-999.491 -541.533)",fill:"none",stroke:"#1547d0","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}}),a("path",{attrs:{id:"Path_16","data-name":"Path 16",d:"M997.807,543.5a16.1,16.1,0,0,0,29.448,0",transform:"translate(-997.807 -541.058)",fill:"none",stroke:"#1547d0","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})]),a("g",{attrs:{id:"Group_22","data-name":"Group 22",transform:"translate(995.178 517.533)"}},[a("path",{attrs:{id:"Path_17","data-name":"Path 17",d:"M1001.84,521.508l-6.31,3.044-1.722-6.791",transform:"translate(-993.807 -513.454)",fill:"none",stroke:"#1547d0","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}}),a("path",{attrs:{id:"Path_18","data-name":"Path 18",d:"M1027.827,527.122a16.1,16.1,0,0,0-29.447,0",transform:"translate(-995.923 -517.533)",fill:"none",stroke:"#1547d0","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])])])])}),[],!1,null,"56bf9e6c",null);e.a=n.exports},Ffd2:function(t,e,a){},G80u:function(t,e,a){},LQTj:function(t,e,a){},iyQ6:function(t,e,a){"use strict";a.r(e);var s=a("VTBJ"),r=(a("qePV"),{name:"DeviceCard",components:{ValuesRow:a("FIlL").a},props:{device:{deviceId:String,name:String,imgSrc:String,values:[{name:String,value:Number,units:String}]}},methods:{testAlert:function(){alert("test click")}}}),n=(a("uNSJ"),a("KHd+")),i=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{deviceWrapper:!0!==t.device.recentlyAdded,recentlyAddedDeviceWrapper:!0===t.device.recentlyAdded}},[a("div",{staticClass:"deviceImage"},[a("g-image",{attrs:{src:t.device.imgSrc,alt:"device image"}})],1),a("div",{staticClass:"deviceStats"},[a("div",{staticClass:"deviceName"},[t._v(t._s(t.device.name))]),!0!==t.device.recentlyAdded?a("div",[a("span",{staticClass:"splitter"}),a("ValuesRow",{attrs:{values:t.device.values}})],1):t._e(),a("div",[a("g-link",{staticClass:"link",attrs:{to:"/device/"+t.device.id}},[t._v("Manage")])],1)])])}),[],!1,null,"64f0383c",null).exports,d=a("L2JU"),o={components:{DeviceCard:i},metaInfo:{title:"Smart home dashboard"},data:function(){return{devices:[]}},computed:Object(s.a)({},Object(d.b)(["getDevices","getRecentlyAddedDevices"])),mounted:function(){this.devices=this.getDevices,console.log(this.getRecentlyAddedDevices)},methods:{goToAddDevice:function(){this.$router.push("/addDevice")}}},c=(a("s2we"),Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"blockWrapper"},[a("div",{staticClass:"contentWrapper"},[a("div",{staticClass:"headerWrapper"},[a("div",{staticClass:"header"},[t._v("Smart home dashboard")])]),a("div",{staticClass:"cardsWrapper"},[t.getRecentlyAddedDevices.length>0?a("div",{staticClass:"recentlyAddedNotificationWrapper"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"47.585",height:"44.354",viewBox:"0 0 47.585 44.354"}},[a("g",{attrs:{id:"Component_5_1","data-name":"Component 5 – 1",transform:"translate(1.543 1.566)"}},[a("path",{attrs:{id:"Path_13","data-name":"Path 13",d:"M688.445,507.386l19.034,14.96L727.8,486.474",transform:"translate(-598.257 -588.181) rotate(9)",fill:"none",stroke:"#00ccad","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])]),a("div",[t._v("Device «"+t._s(t.getRecentlyAddedDevices[0].name)+"» has been added")])]):t._e(),t._l(t.devices,(function(e){return!0===e.recentlyAdded?a("DeviceCard",{attrs:{device:e}}):t._e()})),t._l(t.devices,(function(e){return!0!==e.recentlyAdded?a("DeviceCard",{attrs:{device:e}}):t._e()})),a("div",{staticClass:"addDeviceWrapper",on:{click:t.goToAddDevice}},[a("div",{staticClass:"svgWrapper"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48.454",height:"48.454",viewBox:"0 0 48.454 48.454"}},[a("g",{attrs:{id:"Component_2_1","data-name":"Component 2 – 1",transform:"translate(1 1)"}},[a("path",{attrs:{id:"Path_2","data-name":"Path 2",d:"M218,531.323v46.454",transform:"translate(-194.773 -531.323)",fill:"none",stroke:"#1547d0","stroke-linecap":"round","stroke-width":"2"}}),a("path",{attrs:{id:"Path_3","data-name":"Path 3",d:"M218,531.323v46.454",transform:"translate(577.777 -194.773) rotate(90)",fill:"none",stroke:"#1547d0","stroke-linecap":"round","stroke-width":"2"}})])])]),a("div",{staticClass:"textWrapper"},[t._v("Add new device")])])],2)])])])}),[],!1,null,"22d993d8",null));e.default=c.exports},s2we:function(t,e,a){"use strict";a("LQTj")},tNhg:function(t,e,a){"use strict";a("Ffd2")},uNSJ:function(t,e,a){"use strict";a("G80u")}}]);