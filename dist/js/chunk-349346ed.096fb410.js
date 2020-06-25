(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-349346ed"],{"9ac5":function(e,t,n){"use strict";var i=n("d4ff"),r=n.n(i);r.a},d4ff:function(e,t,n){},dd1d:function(e,t,n){"use strict";var i=n("f034"),r=n.n(i);r.a},f034:function(e,t,n){},fed0:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("AddMenu")],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"title"}},[n("h1",{attrs:{id:"redTitle"}},[e._v("ADICIONAR MENU")]),n("hr",{staticClass:"back-line"}),n("div",{staticClass:"container box"})])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.addMenu()}}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-1"}),n("div",{staticClass:"col-sm-5"},[n("b-input",{attrs:{type:"text",id:"txtName",placeholder:"Nome do Menu",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("b-input",{attrs:{type:"link",id:"txtName",placeholder:"Link da Imagem",required:""},model:{value:e.img,callback:function(t){e.img=t},expression:"img"}})],1),n("div",{staticClass:"col-sm-5"},[n("b-select",{attrs:{id:"selectTxt",required:""},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Tipo de Menu")]),e._l(this.menuTypes,(function(t){return n("option",{key:t.menu_type_id,domProps:{value:t.menu_type_id}},[e._v(" "+e._s(t.description))])})),n("option",{attrs:{value:"Outro..."}},[e._v("Outro...")])],2),"Outro..."===this.type?n("b-input",{attrs:{type:"text",id:"txtName",placeholder:"Novo tipo de Menu"},model:{value:e.newType,callback:function(t){e.newType=t},expression:"newType"}}):e._e()],1),n("div",{staticClass:"col-sm-1"})]),""!=this.img?n("div",{staticClass:"row"},[n("img",{attrs:{src:e.img,id:"imgMenu"}})]):e._e(),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-2"}),n("div",{staticClass:"col-sm-4",attrs:{align:"left",id:"foodColumn"}},[n("label",{attrs:{id:"title"}},[e._v("Comida:")]),e._l(e.filteredFood,(function(t){return n("div",{key:t.ingredient_id},[n("b-form-group",[n("b-form-checkbox-group",{model:{value:e.checkedFood,callback:function(t){e.checkedFood=t},expression:"checkedFood"}},[n("b-form-checkbox",{attrs:{value:t.ingredient_id}},[e._v(" "+e._s(t.name))])],1)],1)],1)}))],2),n("div",{staticClass:"col-sm-2"}),n("div",{staticClass:"col-sm-4",attrs:{align:"left",id:"drinkColumn"}},[n("label",{attrs:{id:"title"}},[e._v("Bebida:")]),e._l(e.filteredDrinks,(function(t){return n("div",{key:t.ingredient_id},[n("b-form-group",[n("b-form-checkbox-group",{model:{value:e.checkedDrink,callback:function(t){e.checkedDrink=t},expression:"checkedDrink"}},[n("b-form-checkbox",{attrs:{value:t.ingredient_id}},[e._v(" "+e._s(t.name))])],1)],1)],1)}))],2)])]),n("b-button",{staticClass:"addBtn rounded-0 border-0",attrs:{type:"submit",value:"Adicionar"}},[e._v("Adicionar")])],1)])},a=[],c=(n("a4d3"),n("99af"),n("4de4"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("ade3")),o=(n("96cf"),n("2f62"));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"addMenu",data:function(){return{ingredients:[],menuTypes:[],checkedFood:[],checkedDrink:[],menuIng:[],name:"",type:"",newType:"",img:""}},created:function(){this.getAllIngredients(),this.getMyMenuTypes()},methods:{getAllIngredients:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.$store.dispatch("fetchIngredients"));case 3:this.ingredients=this.getIngredients.data,this.ingredients=this.$store.state.ingredients,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),alert(e.t0);case 10:case"end":return e.stop()}}),null,this,[[0,7]])},getMyMenuTypes:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.$store.dispatch("fetchMenuTypes"));case 3:this.menuTypes=this.getMenuTypes.data,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),alert(e.t0);case 9:case"end":return e.stop()}}),null,this,[[0,6]])},addMenu:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(this.menuIng=this.checkedFood.concat(this.checkedDrink),"Outro..."===this.type){e.next=18;break}return e.prev=2,e.next=5,regeneratorRuntime.awrap(this.$store.dispatch("postMenu",{name:this.name,type:this.type,newType:this.newType,img:this.img,menuIng:this.menuIng}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),alert(e.t0);case 10:this.name="",this.img="",this.type="",this.checkedFood=[],this.checkedDrink=[],this.menuIng=[],e.next=33;break;case 18:return e.prev=18,e.next=21,regeneratorRuntime.awrap(this.$store.dispatch("postMenu",{name:this.name,type:this.type,newType:this.newType,img:this.img,menuIng:this.menuIng}));case 21:e.next=26;break;case 23:e.prev=23,e.t1=e["catch"](18),alert(e.t1);case 26:this.getMyMenuTypes(),this.name="",this.img="",this.type="",this.checkedFood=[],this.checkedDrink=[],this.menuIng=[];case 33:case"end":return e.stop()}}),null,this,[[2,7],[18,23]])}},computed:u({},Object(o["b"])(["getIngredients"]),{},Object(o["b"])(["getMenuTypes"]),{filteredFood:function(){return this.ingredients.filter((function(e){return"Comida"==e.type}))},filteredDrinks:function(){return this.ingredients.filter((function(e){return"Bebida"==e.type}))}})},p=l,h=(n("dd1d"),n("2877")),m=Object(h["a"])(p,s,a,!1,null,"2bd222b3",null),f=m.exports,b={data:function(){return{}},components:{AddMenu:f}},g=b,v=(n("9ac5"),Object(h["a"])(g,i,r,!1,null,"740f7cd7",null));t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-349346ed.096fb410.js.map