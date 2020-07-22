(this["webpackJsonpmovies-rdb"]=this["webpackJsonpmovies-rdb"]||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/no-image.d9756f52.png"},30:function(e,t,n){e.exports=n(46)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),s=n(15),c=n(29),l=(n(39),n(4)),u=n(5),v=n(10),m=n(9),d=n(11),p=(n(40),function(e){var t=e.status;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"error-indicator"},"Ops... Something went wrong",t&&r.a.createElement("p",null,"Try Re-Sign-In")))}),h=(n(41),n(42),new(function(){function e(){return Object(l.a)(this,e),e.instance?e.instance:(e.instance=this,this)}return Object(u.a)(e,[{key:"getItem",value:function(e){return JSON.parse(localStorage.getItem("".concat(e)))}},{key:"setItem",value:function(e,t){return localStorage.setItem("".concat(e),JSON.stringify(t))}}]),e}())),g=n(16),f=n.n(g),E=n(17),y=n.n(E),b="fa2b02021794026b428e1d15dc359d00",O="https://api.themoviedb.org/3/",M=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"generateUrl",value:function(e,t,n){return n?"".concat(O).concat(e,"?query=").concat(n,"&api_key=").concat(b):t?"".concat(O).concat(e,"?api_key=").concat(b,"&page=").concat(t):"".concat(O).concat(e,"?&api_key=").concat(b)}},{key:"throwCommonError",value:function(e){if(e.errors&&e.errors.length)throw new Error(e.errors.join(" | "));throw new Error("".concat(e.status_message," (error code: ").concat(e.status_code,")"))}},{key:"handleApiCall",value:function(e){var t,n;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(fetch(e));case 2:return t=a.sent,a.next=5,f.a.awrap(t.json());case 5:return n=a.sent,t.ok||this.throwCommonError(n),a.abrupt("return",n);case 8:case"end":return a.stop()}}),null,this)}},{key:"getPopularMovies",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this.generateUrl("movie/popular",e);return this.handleApiCall(t)}},{key:"getTopRatedMovies",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this.generateUrl("movie/top_rated",e);return this.handleApiCall(t)}},{key:"getMovie",value:function(e){var t=this.generateUrl("movie/".concat(e));return this.handleApiCall(t)}},{key:"getMovieRecommendations",value:function(e){var t=this.generateUrl("movie/".concat(e,"/recommendations"));return this.handleApiCall(t)}},{key:"getGenresListForMovies",value:function(){var e=this.generateUrl("genre/movie/list");return this.handleApiCall(e)}},{key:"getMoviePosterImageUrl",value:function(e){return e.poster_path?"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path):y.a}},{key:"getMoviePosterMiniImageUrl",value:function(e){return e.poster_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(e.poster_path):y.a}},{key:"getMovieBackdropImageUrl",value:function(e){return e.backdrop_path?"".concat("https://image.tmdb.org/t/p/original/").concat(e.backdrop_path):y.a}},{key:"getMovieReleaseYear",value:function(e){return e.release_date?new Date(e.release_date).getFullYear():"N/A"}},{key:"searchMovies",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.generateUrl("search/movie",t,e);return this.handleApiCall(n)}}]),e}()),_=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(v.a)(this,Object(m.a)(t).call(this))).mountStyle=function(){e.setState({style:{transform:"scale(1, 1)",transitionDelay:"0s, ".concat(e.props.delay,"s"),transitionProperty:"opacity, transform",transitionDuration:"0.3s",transitionTimingFunction:"ease",opacity:"1"}})},e.toggleHover=function(){e.setState({hover:!e.state.hover})},e.state={style:{transform:"scale(0, 0)",transitionDelay:"0s, 0s",transitionProperty:"opacity, transform",transitionDuration:"0.3s",transitionTimingFunction:"ease",opacity:"0"},hover:!1},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.mountStyle,10)}},{key:"render",value:function(){var e=this.props.movie,t=e.title,n=e.vote_average,a=e.release_date,o=this.state.hover?{opacity:"1"}:{opacity:"0"};return r.a.createElement("div",{className:"movie-item",style:this.state.style,onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover},r.a.createElement("img",{src:M.getMoviePosterMiniImageUrl(this.props.movie),alt:""}),r.a.createElement("div",{className:"movie-item__details glow",style:o},r.a.createElement("div",{className:"details__title-year"},r.a.createElement("div",{className:"details-title"},t),r.a.createElement("div",{className:"details__year"},"(",a.substr(0,4),")")),r.a.createElement("div",{className:"details__vote"},r.a.createElement("span",{className:"icon"}," "),n)))}}]),t}(r.a.Component),j=function(e){var t=e.movies,n=e.loading,a=e.error;return n?r.a.createElement("div",null,"Loading..."):a?r.a.createElement("div",{className:"list"},r.a.createElement(p,null)):t?(console.log(t),r.a.createElement("div",{className:"list"},t.map((function(e){return r.a.createElement("div",{className:"item-wrapper",key:e.id},r.a.createElement(_,{movie:e,delay:t.indexOf(e)%20*.04}))})))):r.a.createElement("div",null,"Nothing")},S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(v.a)(this,Object(m.a)(t).call(this))).handleScroll=function(){var t=e.props,n=t.moviesLoaded,a=t.moviesRequested,r=t.moviesError,o=document.documentElement.clientHeight;document.documentElement.getBoundingClientRect().bottom-o<50&&(e.setState((function(e){return{currentMoviesPage:e.currentMoviesPage+1}})),a(),M.getPopularMovies(e.state.currentMoviesPage).then((function(e){return n(e.results)})).catch((function(e){r(e)})))},e.state={currentMoviesPage:2},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.moviesLoaded,n=e.moviesRequested,a=e.moviesError;n(),M.getPopularMovies().then((function(e){return t(e.results)})).catch((function(e){a(e)})),M.getPopularMovies(this.state.currentMoviesPage).then((function(e){return t(e.results)})).catch((function(e){a(e)})),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return r.a.createElement(j,{movies:this.props.movies})}}]),t}(r.a.Component),k={moviesLoaded:function(e){return{type:"FETCH_MOVIES_SUCCESS",payload:e}},moviesRequested:function(){return{type:"FETCH_MOVIES_REQUEST"}},moviesError:function(e){return{type:"FETCH_MOVIES_FAILURE",payload:e}}},C=Object(s.b)((function(e){return{movies:e.movies.movies,loading:e.movies.loading,error:e.movies.error}}),k)(S),w=function(){return r.a.createElement(C,null)},I=(n(44),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(v.a)(this,Object(m.a)(t).call(this))).state={hasError:!1},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(p,null):this.props.children}}]),t}(r.a.Component)),U=n(8),T=n(26),F=n(27),R=n(18),N=n(6),P={movies:[],favouritesMovies:[],movie:{},searchText:"",loading:!1,error:null},H=Object(U.combineReducers)({movies:function(e,t){var n=t.type,a=t.payload;if(void 0===e)return localStorage.favouritesJokes?Object(N.a)({},P,{favouritesJokes:h.getItem("favouritesMovies")}):P;switch(n){case"FETCH_MOVIE_REQUEST":return Object(N.a)({},e,{movie:{},loading:!0,error:null});case"FETCH_MOVIE_SUCCESS":return Object(N.a)({},e,{movie:a,loading:!1,error:null});case"FETCH_MOVIE_FAILURE":return Object(N.a)({},e,{movie:{},loading:!1,error:a});case"FETCH_MOVIES_REQUEST":return Object(N.a)({},e,{loading:!0,error:null});case"FETCH_MOVIES_SUCCESS":return Object(N.a)({},e,{movies:[].concat(Object(R.a)(e.movies),Object(R.a)(a)),loading:!1,error:null});case"FETCH_MOVIES_FAILURE":return Object(N.a)({},e,{movies:[],loading:!1,error:a});case"ADD_JOKE":var r=[].concat(Object(R.a)(e.favouritesMovies),[a]);return h.setItem("favouritesMovies",r),Object(N.a)({},e,{favouritesMovies:r});case"REMOVE_JOKE":var o=e.favouritesMovies.filter((function(e){return e.id!==a}));return h.setItem("favouritesMovies",o),Object(N.a)({},e,{favouritesMovies:o});default:return e}}}),A=[F.a],D=Object(U.createStore)(H,Object(T.composeWithDevTools)(U.applyMiddleware.apply(void 0,A)));i.a.render(r.a.createElement(s.a,{store:D},r.a.createElement(I,null,r.a.createElement(c.a,null,r.a.createElement((function(){return r.a.createElement(w,null)}),null)))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0455cc50.chunk.js.map