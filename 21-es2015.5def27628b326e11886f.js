(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{pi15:function(e,t,n){"use strict";n.r(t),n.d(t,"WelcomePageModule",(function(){return L}));var i=n("ofXK"),a=n("3Pt+"),o=n("TEn/"),r=n("tyNb"),s=n("mrSG"),c=n("z6cu"),l=n("JIr8"),b=n("AytR"),g=n("sV9K"),h=n("MO+k"),d=n("wd/R"),p=n("NEhk"),m=n("qb46"),u=n.n(m),f=n("fXoL"),v=n("sYmb"),P=n("tk/3"),w=n("e8h1");const C=["lineCanvas"];function O(e,t){1&e&&(f.Qb(0,"h1"),f.wc(1,"Achievements"),f.Pb())}function _(e,t){if(1&e&&(f.Qb(0,"div"),f.Qb(1,"h5"),f.wc(2),f.bc(3,"translate"),f.Mb(4,"br"),f.wc(5),f.Pb(),f.Mb(6,"ion-progress-bar",14),f.Qb(7,"p"),f.wc(8),f.bc(9,"translate"),f.Pb(),f.Pb()),2&e){const e=f.ac().$implicit;f.Bb(2),f.yc("",f.cc(3,6,"welcome."+e.levelInfo.translationKey+"_title")," "),f.Bb(3),f.yc(" Level ",e.levelInfo.level,""),f.Bb(1),f.hc("value",e.levelInfo.progress/e.levelInfo.target),f.Bb(2),f.Ac("",f.cc(9,8,"welcome."+e.levelInfo.translationKey+"_description")," (",e.levelInfo.progress,"/",e.levelInfo.target,")")}}function I(e,t){if(1&e&&(f.Qb(0,"div"),f.Qb(1,"h5"),f.wc(2),f.bc(3,"translate"),f.Pb(),f.Qb(4,"p"),f.wc(5),f.bc(6,"translate"),f.Pb(),f.Pb()),2&e){const e=f.ac().$implicit;f.Bb(2),f.Bc("",e.tournamentInfo.rank,". ",f.cc(3,5,"welcome.at")," ",e.tournamentInfo.name," ",e.tournamentInfo.year,""),f.Bb(3),f.yc(" ",f.cc(6,7,"welcome.tournament_achievement_description"),"")}}function y(e,t){if(1&e&&(f.Qb(0,"div"),f.Qb(1,"h5"),f.wc(2),f.Pb(),f.Qb(3,"p"),f.wc(4),f.Pb(),f.Pb()),2&e){const e=f.ac().$implicit;f.Bb(2),f.xc(e.customInfo.title),f.Bb(2),f.yc(" ",e.customInfo.description,"")}}function M(e,t){if(1&e&&(f.Qb(0,"ion-slide"),f.Qb(1,"div",10),f.Qb(2,"div",11),f.Mb(3,"img",12),f.Pb(),f.Qb(4,"div",13),f.uc(5,_,10,10,"div",4),f.uc(6,I,7,9,"div",4),f.uc(7,y,5,2,"div",4),f.Pb(),f.Pb(),f.Pb()),2&e){const e=t.$implicit;f.Bb(3),f.ic("src","../../assets/icon/achievements/",e.icon,".svg",f.rc),f.Bb(2),f.gc("ngIf",e.isLevelAchievement),f.Bb(1),f.gc("ngIf",e.isTournamentAchievement),f.Bb(1),f.gc("ngIf",e.isCustomAchievement)}}function Q(e,t){if(1&e){const e=f.Rb();f.Qb(0,"ion-item-sliding"),f.Qb(1,"ion-item",15),f.Yb("click",(function(){f.pc(e);const n=t.index,i=f.ac(2);return i.openTip(i.lineChart,0,i.loggedInUser.elo.length-n-1)})),f.Qb(2,"ion-label",16),f.Qb(3,"div",17),f.Qb(4,"p",18),f.wc(5),f.Pb(),f.Qb(6,"p"),f.wc(7),f.Pb(),f.Qb(8,"p"),f.wc(9),f.Pb(),f.Pb(),f.Qb(10,"div",19),f.Qb(11,"p",18),f.wc(12),f.Pb(),f.Qb(13,"p"),f.wc(14),f.Pb(),f.Qb(15,"p"),f.wc(16),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Qb(17,"ion-item-options",20),f.Qb(18,"button",21),f.Yb("click",(function(){f.pc(e);const n=t.$implicit;return f.ac(2).presentDeleteAlert(n)})),f.Mb(19,"ion-icon",22),f.Pb(),f.Pb(),f.Pb()}if(2&e){const e=t.$implicit;f.Bb(4),f.gc("ngClass",null!=e&&e.isWon?"primary":""),f.Bb(1),f.xc(null==e?null:e.finalScore.team1),f.Bb(2),f.xc(null==e?null:e.playerNames[0]),f.Bb(2),f.xc(null==e?null:e.playerNames[1]),f.Bb(2),f.gc("ngClass",null!=e&&e.isWon?"primary":""),f.Bb(1),f.xc(null==e?null:e.finalScore.team2),f.Bb(2),f.xc(null==e?null:e.playerNames[2]),f.Bb(2),f.xc(null==e?null:e.playerNames[3])}}function B(e,t){if(1&e&&(f.Qb(0,"div",3),f.uc(1,O,2,0,"h1",4),f.Qb(2,"ion-card"),f.Qb(3,"ion-card-header",5),f.Qb(4,"ion-slides",6),f.uc(5,M,8,4,"ion-slide",7),f.Pb(),f.Pb(),f.Pb(),f.Qb(6,"h1"),f.wc(7),f.bc(8,"translate"),f.Pb(),f.Qb(9,"ion-card"),f.Qb(10,"ion-card-header"),f.Qb(11,"div",8),f.Mb(12,"canvas",null,9),f.Pb(),f.Pb(),f.Qb(14,"ion-card-content"),f.Qb(15,"ion-list"),f.uc(16,Q,20,8,"ion-item-sliding",7),f.Pb(),f.Pb(),f.Pb(),f.Pb()),2&e){const e=f.ac();f.Bb(1),f.gc("ngIf",e.achievements&&e.achievements.length>0),f.Bb(4),f.gc("ngForOf",e.achievements),f.Bb(2),f.xc(f.cc(8,4,"welcome.rating")),f.Bb(9),f.gc("ngForOf",e.gameOverview)}}const x=function(){return["/tabs/newGame"]};function k(e,t){1&e&&(f.Qb(0,"div",23),f.Mb(1,"img",24),f.Qb(2,"ion-card-title"),f.wc(3),f.bc(4,"translate"),f.Pb(),f.Qb(5,"ul"),f.Qb(6,"li"),f.wc(7),f.bc(8,"translate"),f.Pb(),f.Mb(9,"br"),f.Qb(10,"li"),f.wc(11),f.bc(12,"translate"),f.Pb(),f.Pb(),f.Qb(13,"ion-button",25),f.wc(14),f.bc(15,"translate"),f.Pb(),f.Pb()),2&e&&(f.Bb(3),f.xc(f.cc(4,5,"welcome.no_games_title")),f.Bb(4),f.xc(f.cc(8,7,"welcome.explainer_2")),f.Bb(4),f.xc(f.cc(12,9,"welcome.explainer_3")),f.Bb(2),f.gc("routerLink",f.jc(13,x)),f.Bb(1),f.yc(" ",f.cc(15,11,"welcome.start_game"),""))}const A=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a,o,s,c){this.alertController=e,this.translator=t,this.toastService=n,this.modalController=i,this.httpClient=a,this.storage=o,this.authService=s,this.router=c,this.hasGames=!0,this.router.events.subscribe(e=>{this.hasGames=!0,e instanceof r.c&&"/tabs/welcome"===e.url&&(this.APIgetAchievements().subscribe(e=>{this.achievements=e}),this.APIgetGameOverview().subscribe(e=>{0!==e.length?(this.gameOverview=e,this.gameOverview=this.formateDate(this.gameOverview),this.APIgetLoggedInUser().subscribe(e=>{this.loggedInUser=e,this.updateGraph(this.loggedInUser.elo)})):this.hasGames=!1}))})}ngOnInit(){h.Chart.plugins.unregister(u.a),this.hasGames=!0,this.APIgetAchievements().subscribe(e=>{this.achievements=e}),this.APIgetGameOverview().subscribe(e=>{0!==e.length?(this.gameOverview=e,this.gameOverview=this.formateDate(this.gameOverview),this.APIgetLoggedInUser().subscribe(e=>{this.loggedInUser=e,this.startGraph(this.loggedInUser.elo)})):this.hasGames=!1})}presentDeleteAlert(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:this.translator.instant("welcome.delete_alert_header"),message:this.translator.instant("welcome.delete_alert_message"),buttons:[{text:this.translator.instant("welcome.cancel"),role:"cancel"},{text:this.translator.instant("welcome.send"),handler:()=>{this.APIsendDeleteGameEmail(JSON.stringify(e)).subscribe(()=>{this.toastService.presentToast("Request sent!")})}}]});yield t.present()}))}formateDate(e){const t=e;for(const n of t)n.date=d(n.date).format("DD.MM.YYYY");return t}updateGraph(e){const t=[],n=[];for(const i of e)t.push(i.ranking),n.push(d(i.date).format("DD.MM.YYYY"));this.lineChart.data.datasets[0].data=t,this.lineChart.data.labels=n,this.lineChart.update()}startGraph(e){const t=[],n=[];for(const i of e)t.push(i.ranking),n.push(d(i.date).format("DD.MM.YYYY"));this.lineChart=new h.Chart(this.lineCanvas.nativeElement,{type:"line",data:{labels:n,datasets:[{fill:!0,lineTension:.1,borderColor:"#eb711b",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#eb711b",pointBackgroundColor:"#eb711b",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ffffff",pointHoverBorderColor:"#ffffff",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t,spanGaps:!1}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{ticks:{display:!1},gridLines:{color:"rgba(255, 255, 255, 0.2)",lineWidth:.5,drawBorder:!1}}],yAxes:[{ticks:{stepSize:50,fontColor:"rgba(255, 255, 255, 0.8)"},gridLines:{color:"rgba(255, 255, 255, 0.9)",lineWidth:.7,drawBorder:!1}}]},legend:{display:!1},tooltips:{enabled:!0,titleFontFamily:"Raleway",bodyFontFamily:"Raleway",displayColors:!1}}})}openTip(e,t,n){e.tooltip._active=[];const i=e.tooltip._active,a=e.getDatasetMeta(t).data[n];for(let o=0;o<i.length;o++)if(a._index===i[o]._index)return;i.push(a),e.tooltip._active=i,e.tooltip.update(!0),e.draw()}APIgetGameOverview(){return this.httpClient.get(b.b+"/users/getGameOverview").pipe(Object(l.a)(e=>(this.toastService.presentToast(),Object(c.a)(e))))}APIgetLoggedInUser(){return this.httpClient.get(b.b+"/users/loggedInUser").pipe(Object(l.a)(e=>(this.toastService.presentToast(),Object(c.a)(e))))}APIdeleteGameFromDb(e){return this.httpClient.delete(`${b.b}/games/${e}`).pipe(Object(l.a)(e=>(this.toastService.presentToast(),Object(c.a)(e))))}APIsendDeleteGameEmail(e){return this.httpClient.post(b.b+"/games/sendDeleteGameEmail",{gameId:e}).pipe(Object(l.a)(e=>(this.toastService.presentToast(),Object(c.a)(e))))}APIgetAchievements(){return this.httpClient.get(b.b+"/users/achievements").pipe(Object(l.a)(e=>(this.toastService.presentToast(),Object(c.a)(e))))}setDetailsToShow(e){this.details=e}}return e.\u0275fac=function(t){return new(t||e)(f.Lb(o.a),f.Lb(v.d),f.Lb(p.a),f.Lb(o.S),f.Lb(P.b),f.Lb(w.b),f.Lb(g.a),f.Lb(r.h))},e.\u0275cmp=f.Fb({type:e,selectors:[["app-welcome"]],viewQuery:function(e,t){var n;1&e&&f.Cc(C,!0),2&e&&f.mc(n=f.Zb())&&(t.lineCanvas=n.first)},decls:4,vars:2,consts:[[1,"top-spacer"],["class","full-height",4,"ngIf"],["class","horizontal-margin top-space",4,"ngIf"],[1,"full-height"],[4,"ngIf"],[1,"no-padding"],["pager","true"],[4,"ngFor","ngForOf"],[1,"canvas-wrapper"],["lineCanvas",""],[1,"achievement-details"],[1,"left"],["alt","",3,"src"],[1,"right"],["color","primary",3,"value"],["lines","inset","detail","false",3,"click"],[1,"verticalLine"],[1,"leftOfLine"],[3,"ngClass"],[1,"rightOfLine"],["side","end",1,"trash-slider"],["ion-button","","color","danger",1,"slide-button",3,"click"],["name","trash"],[1,"horizontal-margin","top-space"],["src","../../assets/pictures/dragon_icon_login.png","alt",""],["expand","block",3,"routerLink"]],template:function(e,t){1&e&&(f.Qb(0,"ion-content"),f.Mb(1,"div",0),f.uc(2,B,17,6,"div",1),f.uc(3,k,16,14,"div",2),f.Pb()),2&e&&(f.Bb(2),f.gc("ngIf",t.hasGames),f.Bb(1),f.gc("ngIf",!t.hasGames))},directives:[o.p,i.j,o.h,o.j,o.J,i.i,o.i,o.y,o.I,o.A,o.w,o.u,o.x,i.h,o.v,o.s,o.l,o.f,o.W,r.i],pipes:[v.c],styles:["ion-content[_ngcontent-%COMP%]::part(background){background:url(dragon.9e494a4c9b27622c5466.png) no-repeat 0 0 fixed;background-size:cover}ion-content[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-background)}ion-item[_ngcontent-%COMP%]{border-radius:0 0 0 0}.top-space[_ngcontent-%COMP%]{margin-top:10vh}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{position:relative;text-align:left;vertical-align:center!important;margin:0 0 0 5%}.trash-slider[_ngcontent-%COMP%]{margin-right:2%;max-height:80%;margin-top:2%}ion-card[_ngcontent-%COMP%]{margin-top:1vh;margin-bottom:3vh}.full-height[_ngcontent-%COMP%]{height:95%!important}.scrolling[_ngcontent-%COMP%]{overflow-y:auto!important;max-height:45vh}.canvas-wrapper[_ngcontent-%COMP%]{position:relative;height:22vh}.no-padding[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.primary[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important}.slide-button[_ngcontent-%COMP%]{width:15vw;background-color:var(--ion-color-primary);font-size:1.4rem;color:#fff}p[_ngcontent-%COMP%]{color:#fff}img[_ngcontent-%COMP%]{width:30%;display:block;margin-left:auto;margin-right:auto}ion-card-title[_ngcontent-%COMP%]{text-align:center}ion-progress-bar[_ngcontent-%COMP%]{--buffer-background:#fff}ul[_ngcontent-%COMP%]{margin-left:5%;margin-right:2%}li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{color:#fff;-webkit-padding-start:0;padding-inline-start:0;text-align:justify}.achievement-header[_ngcontent-%COMP%]{margin:0!important;padding:0!important}.achievement-details[_ngcontent-%COMP%]{margin-bottom:10%;margin-top:10%;display:flex!important;color:#000;width:100%;flex-direction:row;align-items:center}.achievement-details[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]{width:30%}.achievement-details[_ngcontent-%COMP%]   div.left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:20%;margin-bottom:20%;height:60%;width:100%}.achievement-details[_ngcontent-%COMP%]   div.right[_ngcontent-%COMP%]{margin-left:10%;width:70%;font-size:.8rem}"]}),e})()}];let G=(()=>{class e{}return e.\u0275mod=f.Jb({type:e}),e.\u0275inj=f.Ib({factory:function(t){return new(t||e)},imports:[[r.j.forChild(A)],r.j]}),e})(),L=(()=>{class e{}return e.\u0275mod=f.Jb({type:e}),e.\u0275inj=f.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[i.b,a.a,o.Q,G,v.b.forChild()]]}),e})()}}]);