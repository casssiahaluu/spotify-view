(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(43)},22:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),i=(t(22),t(10)),l=t(11),s=t(14),m=t(12),p=t(15),u=t(13),f=t.n(u),d=(t(42),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={artists:[]},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.spotify.com/v1/artists?ids=".concat(["0TcVnvKse98awlZxtUKIOk","11irmEzISytQwB3G8uhC5E","2UhA8yc1DpFfkutXq5lMah"]),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer BQApyguMBnc2O426VLBQP8dnJhuslm-0zIcBrGHWq4HlXwspvpffmiY6tOGmTt7P8oBcs3HdTDfnbkNyIidQ-XnAs3I2c1fSF-zTKMWwjYchTr6zwTCmhT6Y7sy6fnaSHFgXspy7-ynMnz-s6Aoc959gSK8jgT39DBa4AT7b97Ty565b6apMz-E5sFoM8LAYzqnkPQHSvJYUZJDKI-aNkalsbJgQF3QGwVFz2cAiF-bk85CmBuo02i-jqz3PtXmSW9oGxaZtb4nrpkmDBXS_lsWxq35fXv4O58w"}}).then(function(a){return e.setState({artists:a.data.artists.map(function(e,a){return{id:a,img:e.images[1].url,name:e.name,link:e.external_urls.spotify,open:e.uri}})}),!0}).catch(function(e){return console.log(e),!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"/",className:"brand-logo center"},r.a.createElement("i",{className:"fab fa-spotify"})," Spotify View ")))),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"row container"},this.state.artists.map(function(e){return r.a.createElement("div",{key:e.id,className:"col s12 m6 l4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{height:"300",width:"300",className:"activator",alt:e.name,src:e.img}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},e.name)),r.a.createElement("p",null,r.a.createElement("a",{href:e.open,target:"_blank",rel:"noopener noreferrer"},"Abrir no Spotify"))),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"})))}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.6074808e.chunk.js.map