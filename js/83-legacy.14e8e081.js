(self["webpackChunkvuetodo"]=self["webpackChunkvuetodo"]||[]).push([[83],{1083:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Q}});var s=a(6252),n={class:"mt-8 flex flex-col"},i={class:"-my-2 divide-gray-700 overflow-x-auto sm:-mx-6 sm:px-6 lg:px-8"},o={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},l={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},r={class:"min-w-full divide-y divide-gray-200"},d={class:"bg-white divide-y divide-gray-200"},c={class:"shadow mt-10 overflow-hidden border-b border-gray-200 sm:rounded-lg"},u={class:"min-w-full divide-y divide-gray-200"},p={class:"bg-white divide-y divide-gray-200"};function g(e,t,a,g,m,f){var v=(0,s.up)("Task");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",n,[(0,s._)("div",i,[(0,s._)("div",o,[(0,s._)("div",l,[(0,s._)("table",r,[(0,s._)("tbody",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.activeTasks,(function(e){return(0,s.wg)(),(0,s.j4)(v,{key:e.id,task:e},null,8,["task"])})),128))])])]),(0,s._)("div",c,[(0,s._)("table",u,[(0,s._)("tbody",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.completedTasks,(function(e){return(0,s.wg)(),(0,s.j4)(v,{key:e.id,task:e},null,8,["task"])})),128))])])])])])])])}var m=a(7990),f=a(4250),v=(a(8309),a(2526),a(1817),a(3577)),k={class:"max-w-screen-md"},h={class:"px-6 py-4 w-2/12 whitespace-nowrap"},w={class:"flex items-center"},y={class:"ml-4"},x={class:"text-sm font-medium text-gray-900"},b={class:"text-sm text-gray-500"},T={class:"px-6 py-4 w-6/12 whitespace-nowrap"},_={class:"text-sm text-gray-500"},C=(0,s._)("td",{class:"px-6 py-4 w-1/12 whitespace-nowrap"},[(0,s._)("span",{class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"}," Active ")],-1),D={class:"px-6 py-4 w-3/12 whitespace-nowrap text-sm text-gray-500"};function M(e,t,a,n,i,o){var l=(0,s.up)("EditTask");return(0,s.wg)(),(0,s.iD)("tr",k,[(0,s._)("td",h,[(0,s._)("div",w,[(0,s._)("div",y,[(0,s._)("div",x,(0,v.zw)(a.task.name),1),(0,s._)("div",b," Id: "+(0,v.zw)(a.task.id),1)])])]),(0,s._)("td",T,[(0,s._)("div",_,(0,v.zw)(a.task.description),1)]),C,(0,s._)("td",D,[a.task.completed?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"hover:bg-gray-800 w-1/2 hover:text-gray-100 transition p-3 rounded-xl",onClick:t[1]||(t[1]=function(t){return e.changeTaskStateTo({taskID:a.task.id,taskNewState:!1})})},"Unmark as completed ")):((0,s.wg)(),(0,s.iD)("button",{key:0,class:"hover:bg-gray-800 w-1/2 hover:text-gray-100 transition p-3 rounded-xl",onClick:t[0]||(t[0]=function(t){return e.changeTaskStateTo({taskID:a.task.id,taskNewState:!0})})},"Mark as completed ")),(0,s._)("button",{onClick:t[2]||(t[2]=function(){return o.switchModal&&o.switchModal.apply(o,arguments)}),class:"hover:bg-gray-800 w-1/2 ml-4 hover:text-gray-100 transition p-3 rounded-xl"},"Edit task"),(0,s.Wm)(l,{"toggle-modal":i.toggleModal,task:a.task,title:a.task.name,description:a.task.description,"close-modal":o.switchModal},null,8,["toggle-modal","task","title","description","close-modal"])])])}var S={class:"fixed inset-0 z-10 overflow-y-auto"},V={class:"min-h-screen px-4 text-center"},Z=(0,s._)("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," ​ ",-1),W={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},I=(0,s.Uk)(" Edit task "),j={class:"mt-2"},E={class:"mt-4"};function z(e,t,a,n,i,o){var l=(0,s.up)("DialogOverlay"),r=(0,s.up)("TransitionChild"),d=(0,s.up)("DialogTitle"),c=(0,s.up)("Input"),u=(0,s.up)("Dialog"),p=(0,s.up)("TransitionRoot");return(0,s.wg)(),(0,s.j4)(p,{show:a.toggleModal,as:"template"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{as:"div",onClose:a.closeModal},{default:(0,s.w5)((function(){return[(0,s._)("div",S,[(0,s._)("div",V,[(0,s.Wm)(r,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,s.w5)((function(){return[(0,s.Wm)(l,{class:"fixed inset-0"})]})),_:1}),Z,(0,s.Wm)(r,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:(0,s.w5)((function(){return[(0,s._)("div",W,[(0,s.Wm)(d,{as:"h3",class:"text-2xl font-medium leading-6 text-gray-900"},{default:(0,s.w5)((function(){return[I]})),_:1}),(0,s._)("div",j,[(0,s.Wm)(c,{class:"form-control","on-change":o.onTitleChange,value:a.title,error:"false",title:"Title",placeholder:"Task title"},null,8,["on-change","value"]),(0,s.Wm)(c,{class:"form-control","on-change":o.onDescriptionChange,value:a.description,error:"false",title:"Description",placeholder:"Task description"},null,8,["on-change","value"])]),(0,s._)("div",E,[(0,s._)("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:t[0]||(t[0]=function(){return o.saveTask&&o.saveTask.apply(o,arguments)})}," Save "),(0,s._)("button",{type:"button",class:"inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-blue-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:t[1]||(t[1]=function(){return a.closeModal&&a.closeModal.apply(a,arguments)})}," Close ")])])]})),_:1})])])]})),_:1},8,["onClose"])]})),_:1},8,["show"])}var A=a(2106),H=a(9562),N={components:{TransitionRoot:A.Qm,TransitionChild:A.xY,Dialog:A.Vq,DialogOverlay:A.t9,DialogTitle:A.$N,Input:H.Z},data:function(){return{titleValue:"",descriptionValue:"",timeValue:""}},props:["toggleModal","task","closeModal","title","description"],methods:(0,m.Z)({onTitleChange:function(e){this.titleValue=e},onDescriptionChange:function(e){this.descriptionValue=e},saveTask:function(){var e=this;this.changeTaskCredentials({taskID:this.task.id,title:this.titleValue,description:this.descriptionValue,responseHandler:function(t){"task-credentials-changed"===t.data.status&&e.closeModal&&e.closeModal()}})}},(0,f.nv)("tasks",["changeTaskCredentials"])),created:function(){this.titleValue=this.title,this.descriptionValue=this.description}},Y=a(3744);const G=(0,Y.Z)(N,[["render",z]]);var K=G,O={components:{EditTask:K},props:["task"],data:function(){return{toggleModal:!1}},name:"Task",methods:(0,m.Z)((0,m.Z)({},(0,f.nv)("tasks",["changeTaskStateTo"])),{},{switchModal:function(){this.toggleModal=!this.toggleModal}})};const R=(0,Y.Z)(O,[["render",M]]);var U=R,q={name:"Tasks",components:{Task:U},methods:(0,m.Z)({},(0,f.nv)("tasks",["showActiveTasks","doGetAllTasks"])),created:function(){this.doGetAllTasks()},computed:(0,m.Z)((0,m.Z)({},(0,f.rn)({tasks:function(e){return e.tasks.tasks}})),(0,f.Se)("tasks",{activeTasks:"activeTasks",completedTasks:"completedTasks"}))};const F=(0,Y.Z)(q,[["render",g]]);var Q=F},8309:function(e,t,a){var s=a(9781),n=a(6530).EXISTS,i=a(3070).f,o=Function.prototype,l=o.toString,r=/^\s*function ([^ (]*)/,d="name";s&&!n&&i(o,d,{configurable:!0,get:function(){try{return l.call(this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=83-legacy.14e8e081.js.map