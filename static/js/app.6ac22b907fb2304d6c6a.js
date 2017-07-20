webpackJsonp([0],[,,,function(t,e,n){"use strict";var s=n(1),a=n(35),r=n(2),i=n(23),o=n.n(i),c=n(24),u=n.n(c);s.a.use(a.a),s.a.use(r.a),e.a=new a.a({routes:[{path:"/",component:o.a},{path:"/episode",component:u.a}]})},function(t,e,n){"use strict";var s=n(1),a=n(2);s.a.use(a.a),e.a=new a.a.Store({state:{searchInput:"",searchActive:!1,seasons:[],showData:[],currentCard:[]},mutations:{SET_VALUE:function(t,e){t.searchInput=e},REMOVE_VALUE:function(t){t.searchInput=""},SET_ACTIVE_SEARCH:function(t,e){t.searchActive=e},SET_EPISODES:function(t,e){t.seasons=e},SET_ACTIVECARD:function(t,e){t.currentCard=[],t.currentCard.push(e)},FILTER_EPISODES:function(t){var e={episodes:[]},n=function(t,e,n){var s=e+n;return t=t.toLowerCase(),s=s.toLowerCase(),s=s.normalize("NFD").replace(/[\u0300-\u036f]/g,""),new RegExp(t).test(s)},s=function(t,e){return t.episodes.filter(function(t){return n(e,t.title_episode,t.description_large)})};t.seasons.forEach(function(n,a){var r=s(n,t.searchInput);r.length&&(e.episodes=e.episodes?e.episodes.concat(r):r)}),e.episodes.length&&(t.showData=[],t.showData.push(e))}},actions:{setValue:function(t,e){(0,t.commit)("SET_VALUE",e)},removeValue:function(t){(0,t.commit)("REMOVE_VALUE")},setEpisodes:function(t,e){(0,t.commit)("SET_EPISODES",e)},setActiveSearch:function(t,e){(0,t.commit)("SET_ACTIVE_SEARCH",e)},filterEpisodes:function(t){(0,t.commit)("FILTER_EPISODES")},setActiveCard:function(t,e){(0,t.commit)("SET_ACTIVECARD",e)}},getters:{currentCard:function(t){return t.currentCard},showData:function(t){return t.showData},searchActive:function(t){return t.searchActive},searchInput:function(t){return t.searchInput},seasons:function(t){return t.seasons},value:function(t){return t.value}}})},function(t,e,n){function s(t){n(17)}var a=n(0)(n(9),n(30),s,null,null);t.exports=a.exports},function(t,e,n){"use strict";e.a={key:"594abb60100000350c1aa595"}},function(t,e,n){"use strict";function s(){var t=i;return fetch(t).then(function(t){return t.json()}).then(function(t){return t.response.seasons})}e.a=s;var a=n(6),r=a.a.key,i="https://exercise-server.herokuapp.com/serieInfo/"+r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),a=n(5),r=n.n(a),i=n(3),o=n(4);s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,store:o.a,template:"<App/>",components:{App:r.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(25),a=n.n(s),r=n(22),i=n.n(r),o=n(7);e.default={name:"app",data:function(){return{loading:!0}},methods:{refreshSeasons:function(){var t=this;n.i(o.a)().then(function(e){t.$store.dispatch("setEpisodes",e),t.loading=!1})},incrementTotal:function(){this.value=""}},components:{Spinner:a.a,HeaderComponent:i.a},mounted:function(){this.refreshSeasons()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"header-component",data:function(){return{activated:!1,search:""}},watch:{search:function(t){t||this.$store.dispatch("setActiveSearch",!1)}},methods:{toggleSearch:function(){this.activated=!this.activated},searchData:function(t){this.$store.dispatch("setValue",t),this.$store.dispatch("setActiveSearch",!0)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(27),a=n.n(s);e.default={name:"Home",components:{ContentComponent:a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"InfoCard",computed:{data:function(){return this.$store.getters.currentCard}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"spinner"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"card",props:["info"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(26),a=n.n(s);e.default={name:"ContentComponent",components:{Card:a.a},computed:{searchActive:function(){return this.$store.getters.searchActive},search:function(){return this.$store.getters.searchInput},showData:function(){return this.$store.dispatch("filterEpisodes"),this.$store.getters.showData},seasons:function(){return this.$store.getters.seasons}},methods:{test:function(t){this.$router.push({path:"episode"}),this.$store.dispatch("setActiveCard",t)},resetInput:function(){this.$emit("reset"),this.$store.dispatch("removeValue"),this.$store.dispatch("setActiveSearch",!1)}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function s(t){n(18)}var a=n(0)(n(10),n(31),s,"data-v-7e82332c",null);t.exports=a.exports},function(t,e,n){var s=n(0)(n(11),n(28),null,null,null);t.exports=s.exports},function(t,e,n){function s(t){n(16)}var a=n(0)(n(12),n(29),s,"data-v-7298073d",null);t.exports=a.exports},function(t,e,n){function s(t){n(19)}var a=n(0)(n(13),n(32),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(21)}var a=n(0)(n(14),n(34),s,"data-v-fe6a3862",null);t.exports=a.exports},function(t,e,n){function s(t){n(20)}var a=n(0)(n(15),n(33),s,"data-v-d99781ec",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("content-component")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.data,function(e){return n("div",{staticClass:"episode info"},[n("img",{staticClass:"img",attrs:{src:e.image_still}}),n("div",{staticClass:"description"},[n("span",[t._v(t._s(e.episode_number)+". "+t._s(e.title_episode))]),n("p",[t._v(t._s(e.duration))]),n("span",[t._v(t._s(e.description_large))]),n("span",[t._v(t._s(e.date))]),n("span",[t._v(t._s(e.year))]),n("span",[t._v(t._s(e.votes_average))])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("spinner",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),n("header-component",{on:{reset:t.incrementTotal}}),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t.activated?t._e():n("div",{staticClass:"container"},[n("router-link",{staticClass:"link",attrs:{to:"/"}},[n("h1",{staticClass:"title"},[t._v("Popcrn")])]),n("div",{staticClass:"search"},[n("div",{staticClass:"icon icon-search",on:{click:t.toggleSearch}})])],1),t.activated?n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("button",{staticClass:"btn btn--search",on:{click:function(e){t.searchData(t.search)}}},[t._v("Buscar  ")]),n("button",{staticClass:"btn btn--delete",on:{click:t.toggleSearch}},[t._v("Cancelar  ")])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"loader"},[t._v("Loading...")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.searchActive?n("div",[n("h1",[t._v('Buscando por "'+t._s(t.search)+'"')]),t._l(t.showData,function(e,s){return n("card",{key:e.id,attrs:{info:e},on:{open:t.test}})}),t.searchActive&&0==t.showData.length?n("div",[n("span",[t._v("No se encontraron resultados 🙁")]),n("button",{on:{click:t.resetInput}},[t._v("Nueva Busqueda")])]):t._e()],2):t.searchActive?t._e():n("div",t._l(t.seasons,function(e,s){return n("card",{key:e.id,attrs:{info:e},on:{open:t.test}})}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"season",style:{"background-image":"url("+t.info.image_background+")"}},[n("h2",{staticClass:"title"},[t._v(t._s(t.info.title))]),t._l(t.info.episodes,function(e){return n("div",{staticClass:"episode",on:{click:function(n){t.$emit("open",e)}}},[n("img",{staticClass:"img",attrs:{src:e.image_still}}),n("div",{staticClass:"description"},[n("span",{staticClass:"episode-count"},[t._v(t._s(e.episode_number)+". ")]),n("span",{staticClass:"episode-count bold"},[t._v(t._s(e.title_episode)+". ")]),n("p",{staticClass:"episode-duration"},[t._v(t._s(e.duration))]),n("span",{staticClass:"episode-desc"},[t._v(t._s(e.description))])])])})],2)},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.6ac22b907fb2304d6c6a.js.map