(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"V/gd":function(t,e,n){"use strict";n.r(e),n.d(e,"TournamentDashboardPageModule",(function(){return L}));var o=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),r=n("sYmb"),s=n("tyNb"),c=n("z6cu"),b=(n("t4lL"),n("AytR")),l=n("JIr8"),m=n("mrSG"),p=n("fXoL");let d=(()=>{class t{constructor(t){this.toastController=t}presentToast(t="Something went wrong."){return Object(m.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:4e3,position:"top"})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(p.Tb(a.u))},t.\u0275prov=p.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=n("tk/3");function h(t,e){if(1&t&&(p.Qb(0,"ion-label"),p.pc(1),p.Pb()),2&t){const t=p.Zb(),e=t.index,n=t.$implicit,o=p.Zb(2);p.Bb(1),p.sc(" ",o.rankings[e],". ",null==n?null:n.name," ")}}function u(t,e){if(1&t&&(p.Qb(0,"ion-item",5),p.oc(1,h,2,2,"ion-label",3),p.Qb(2,"ion-note",6),p.pc(3),p.Pb(),p.Pb()),2&t){const t=e.$implicit,n=p.Zb(2);p.Bb(1),p.ec("ngIf",n.rankings),p.Bb(2),p.sc(" ",t[n.propertyName],"",n.showPercentage," ")}}function f(t,e){if(1&t&&(p.Qb(0,"ion-list"),p.oc(1,u,4,3,"ion-item",4),p.Pb()),2&t){const t=p.Zb();p.Bb(1),p.ec("ngForOf",t.statsToShow)}}let P=(()=>{class t{constructor(){this.statsToShow=[],this.showExplanation=!1}ngOnChanges(){this.refreshStatsToShow()}refreshStatsToShow(){if(!this.bestList)return;this.statsToShow=[],this.rankings=[];const t=this.bestList[this.propertyName];for(let e=0;e<t.length;e++)e<3&&(this.statsToShow.push(t[e]),this.rankings.push(e+1));this.allowSameRanks()}allowSameRanks(){const t=[];for(const n of this.statsToShow)t.push(n[this.propertyName]);let e=null;for(let n=0;n<t.length;n++)e===t[n]&&(this.rankings[n]=this.rankings[n-1]),e=t[n]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Fb({type:t,selectors:[["app-tournament-dashboard-tile"]],inputs:{propertyName:"propertyName",statName:"statName",showPercentage:"showPercentage",bestList:"bestList"},features:[p.zb],decls:8,vars:3,consts:[[1,"top"],["alt","",3,"src"],[1,"wrapper"],[4,"ngIf"],["lines","none","detail","false",4,"ngFor","ngForOf"],["lines","none","detail","false"],["slot","end"]],template:function(t,e){1&t&&(p.Qb(0,"ion-card"),p.Qb(1,"ion-card-header",0),p.Mb(2,"img",1),p.Qb(3,"div",2),p.Qb(4,"ion-card-title"),p.pc(5),p.Pb(),p.Pb(),p.Pb(),p.Qb(6,"ion-card-content"),p.oc(7,f,2,1,"ion-list",3),p.Pb(),p.Pb()),2&t&&(p.Bb(2),p.fc("src","../../assets/icon/stats/"+e.propertyName+".svg",p.lc),p.Bb(3),p.qc(e.statName),p.Bb(2),p.ec("ngIf",e.statsToShow.length>0))},directives:[a.d,a.f,a.g,a.e,o.j,a.n,o.i,a.l,a.o,a.m],styles:["ion-card[_ngcontent-%COMP%]{max-width:300px}.top[_ngcontent-%COMP%]{position:relative;height:11rem;overflow:hidden;background-size:cover;background-position:50%;text-align:center;z-index:1;color:#000;background-color:#f5f5f5}ion-item[_ngcontent-%COMP%]{max-height:2.5rem!important;--inner-padding-start:0px!important;--inner-padding-end:0px!important;--padding-start:0px!important;--padding-end:0px!important;--min-height:1.8rem!important}ion-card-subtitle[_ngcontent-%COMP%]{margin-top:.2rem;margin-bottom:.2rem;color:#000;font-size:.7rem!important}ion-card-title[_ngcontent-%COMP%]{color:#000;font-size:2rem!important;font-weight:400}.no-margins[_ngcontent-%COMP%]{margin:0;padding:0}ion-note[_ngcontent-%COMP%]{top:.2rem;position:relative;color:var(--ion-color-primary)}ion-label[_ngcontent-%COMP%], ion-note[_ngcontent-%COMP%]{padding:0!important;margin:0!important;font-size:1.5rem!important}img[_ngcontent-%COMP%]{width:32%;display:block;margin:0 auto .7rem}"]}),t})();function w(t,e){1&t&&p.Mb(0,"ion-icon",5)}function v(t,e){1&t&&p.Mb(0,"ion-icon",6)}function M(t,e){if(1&t&&(p.Qb(0,"div"),p.Qb(1,"h1"),p.pc(2),p.Pb(),p.Qb(3,"ion-grid"),p.Qb(4,"ion-row"),p.Qb(5,"ion-col",7),p.Mb(6,"app-tournament-dashboard-tile",8),p.ac(7,"translate"),p.Pb(),p.Qb(8,"ion-col",7),p.Mb(9,"app-tournament-dashboard-tile",9),p.ac(10,"translate"),p.Pb(),p.Qb(11,"ion-col",7),p.Mb(12,"app-tournament-dashboard-tile",10),p.ac(13,"translate"),p.Pb(),p.Qb(14,"ion-col",7),p.Mb(15,"app-tournament-dashboard-tile",11),p.ac(16,"translate"),p.Pb(),p.Qb(17,"ion-col",7),p.Mb(18,"app-tournament-dashboard-tile",12),p.ac(19,"translate"),p.Pb(),p.Qb(20,"ion-col",7),p.Mb(21,"app-tournament-dashboard-tile",13),p.ac(22,"translate"),p.Pb(),p.Qb(23,"ion-col",7),p.Mb(24,"app-tournament-dashboard-tile",14),p.ac(25,"translate"),p.Pb(),p.Qb(26,"ion-col",7),p.Mb(27,"app-tournament-dashboard-tile",15),p.ac(28,"translate"),p.Pb(),p.Pb(),p.Pb(),p.Pb()),2&t){const t=p.Zb();p.Bb(2),p.qc(t.tournamentName),p.Bb(4),p.fc("statName",p.bc(7,17,"statistics.tichuMaster")),p.ec("bestList",t.activeTournamentBestlist),p.Bb(3),p.fc("statName",p.bc(10,19,"statistics.tichuAnnouncedWhen1stRate")),p.ec("bestList",t.activeTournamentBestlist),p.Bb(3),p.fc("statName",p.bc(13,21,"statistics.winRate")),p.ec("bestList",t.activeTournamentBestlist),p.Bb(3),p.fc("statName",p.bc(16,23,"statistics.bombRate")),p.ec("bestList",t.activeTournamentBestlist),p.Bb(3),p.fc("statName",p.bc(19,25,"statistics.doubleWinRate")),p.ec("bestList",t.activeTournamentBestlist),p.Bb(3),p.fc("statName",p.bc(22,27,"statistics.tichuPreventedRate")),p.ec("bestList",t.activeTournamentBestlist),p.Bb(3),p.fc("statName",p.bc(25,29,"statistics.tichuSuccessRate")),p.ec("bestList",t.activeTournamentBestlist),p.Bb(3),p.fc("statName",p.bc(28,31,"statistics.bigTichuSuccessRate")),p.ec("bestList",t.activeTournamentBestlist)}}function N(t,e){if(1&t&&(p.Qb(0,"ion-item",25),p.Qb(1,"ion-label"),p.pc(2),p.Pb(),p.Qb(3,"ion-label",19),p.pc(4),p.Pb(),p.Qb(5,"ion-label",20),p.pc(6),p.Pb(),p.Qb(7,"ion-label",21),p.pc(8),p.Pb(),p.Pb()),2&t){const t=e.$implicit,n=e.index,o=p.Zb(3);p.Bb(2),p.rc(" ",n+1,". "),p.Bb(2),p.tc(" ",t.player1Name," ",o.teamGameAndSymbol," ",t.player2Name," "),p.Bb(2),p.rc(" ",t.winpointsPerRound," "),p.Bb(2),p.rc(" ",t.pointDifference," ")}}function k(t,e){if(1&t&&(p.Qb(0,"div",23),p.oc(1,N,9,6,"ion-item",24),p.Pb()),2&t){const t=p.Zb(2);p.Bb(1),p.ec("ngForOf",t.activeTournamentRanking)}}function y(t,e){if(1&t&&(p.Qb(0,"div"),p.Qb(1,"h1"),p.pc(2,"Leaderboard"),p.Pb(),p.Qb(3,"div",16),p.Qb(4,"ion-item",17),p.Qb(5,"ion-label",18),p.pc(6," Rank "),p.Pb(),p.Qb(7,"ion-label",19),p.pc(8," Users "),p.Pb(),p.Qb(9,"ion-label",20),p.pc(10," Winpoints/Round "),p.Pb(),p.Qb(11,"ion-label",21),p.pc(12," Point-Difference "),p.Pb(),p.Pb(),p.oc(13,k,2,1,"div",22),p.Pb(),p.Pb()),2&t){const t=p.Zb();p.Bb(13),p.ec("ngIf",t.activeTournamentRanking)}}const B=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i){this.route=t,this.translator=e,this.toastService=n,this.httpClient=o,this.toastController=i,this.activeTournamentBestlist=null,this.activeTournamentRanking=null}ngOnInit(){this.route.queryParams.subscribe(t=>{t&&(this.tournamentName=t.tournamentName,this.refreshActiveTournament(this.tournamentName),setInterval(()=>{this.refreshActiveTournament(this.tournamentName)},3e4))})}refreshActiveTournament(t){this.APIGetTournamentBestlistByName(t).subscribe(t=>{this.activeTournamentBestlist=t}),this.APIGetTournamentRanking(t).subscribe(t=>{this.activeTournamentRanking=t,t[0].player2Id&&(this.teamGameAndSymbol="&")})}toggleShowLeaderboard(){this.showLeaderboard=!this.showLeaderboard}APIGetTournamentBestlistByName(t){return this.httpClient.get(`${b.a}/tournament/tournamentBestListbyName/${t}`).pipe(Object(l.a)(t=>(this.toastService.presentToast(),Object(c.a)(t))))}APIGetTournamentRanking(t){return this.httpClient.get(`${b.a}/tournament/ranking/${t}`).pipe(Object(l.a)(t=>(this.toastService.presentToast(),Object(c.a)(t))))}}return t.\u0275fac=function(e){return new(e||t)(p.Lb(s.a),p.Lb(r.d),p.Lb(d),p.Lb(g.b),p.Lb(a.u))},t.\u0275cmp=p.Fb({type:t,selectors:[["app-tournament-dashboard"]],decls:7,vars:4,consts:[[1,"top-spacer"],[1,"leaderboard-toggle",3,"click"],["class","toggle-icon","name","trophy",4,"ngIf"],["class","toggle-icon","name","podium",4,"ngIf"],[4,"ngIf"],["name","trophy",1,"toggle-icon"],["name","podium",1,"toggle-icon"],["sizeLg","3","sizeMd","4","sizeXs","6"],["propertyName","tichuMaster","showPercentage","",3,"statName","bestList"],["propertyName","tichuAnnouncedWhen1stRate","showPercentage","%",3,"bestList","statName"],["showPercentage","%","propertyName","winRate",3,"bestList","statName"],["showPercentage","%","propertyName","bombRate",3,"bestList","statName"],["showPercentage","%","propertyName","doubleWinRate",3,"bestList","statName"],["showPercentage","%","propertyName","tichuPreventedRate",3,"bestList","statName"],["showPercentage","%","propertyName","tichuSuccessRate",3,"bestList","statName"],["howPercentage","%","propertyName","bigTichuSuccessRate",3,"bestList","statName"],[1,"leaderboard-container"],["lines","none","detail","false",1,"leaderboard","header"],[1,"rank"],[1,"users"],[1,"winpoints"],[1,"difference"],["class","leaderboard list",4,"ngIf"],[1,"leaderboard","list"],["lines","none","detail","false",4,"ngFor","ngForOf"],["lines","none","detail","false"]],template:function(t,e){1&t&&(p.Qb(0,"ion-content"),p.Mb(1,"div",0),p.Qb(2,"ion-button",1),p.Xb("click",(function(){return e.toggleShowLeaderboard()})),p.oc(3,w,1,0,"ion-icon",2),p.oc(4,v,1,0,"ion-icon",3),p.Pb(),p.oc(5,M,29,33,"div",4),p.oc(6,y,14,1,"div",4),p.Pb()),2&t&&(p.Bb(3),p.ec("ngIf",!e.showLeaderboard),p.Bb(1),p.ec("ngIf",e.showLeaderboard),p.Bb(1),p.ec("ngIf",!e.showLeaderboard),p.Bb(1),p.ec("ngIf",e.showLeaderboard))},directives:[a.i,a.c,o.j,a.k,a.j,a.q,a.h,P,a.l,a.m,o.i],pipes:[r.c],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-background)}h1[_ngcontent-%COMP%]{color:var(--ion-color-primary);text-align:center;vertical-align:center!important;margin:0;font-size:4em}.leaderboard-toggle[_ngcontent-%COMP%]{position:absolute;right:15%;width:5em;height:5em;text-align:center}.toggle-icon[_ngcontent-%COMP%]{font-size:4em}.leaderboard-container[_ngcontent-%COMP%]{margin-top:4em;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:nowrap;-webkit-box-align:center;align-items:center;align-content:stretch;height:90vh}.leaderboard[_ngcontent-%COMP%]{width:70%}.rank[_ngcontent-%COMP%]{-webkit-box-flex:1;flex-grow:1}.users[_ngcontent-%COMP%]{-webkit-box-flex:5;flex-grow:5}.difference[_ngcontent-%COMP%], .winpoints[_ngcontent-%COMP%]{-webkit-box-flex:3;flex-grow:3}.list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:first-child{--background:#ffe460;color:#000}.list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:nth-child(2){--background:#b5b3b3;color:#000}.list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:nth-child(3){--background:#cd7f32;color:#000}.header[_ngcontent-%COMP%]{--background:var(--ion-color-background);color:#fff;margin-top:.3rem;border-radius:8px 8px 8px 8px;--border-color:hsla(0,0%,100%,0.9);--color-hover:#fff!important;--color-activated:#fff!important;--color-focused:#fff!important}ion-label[_ngcontent-%COMP%]{font-size:1.5rem!important;padding:0!important;margin:0!important}h2[_ngcontent-%COMP%]{text-align:center;vertical-align:center!important;margin:0 0 0 5%}"]}),t})()}];let O=(()=>{class t{}return t.\u0275mod=p.Jb({type:t}),t.\u0275inj=p.Ib({factory:function(e){return new(e||t)},imports:[[s.i.forChild(B)],s.i]}),t})(),L=(()=>{class t{}return t.\u0275mod=p.Jb({type:t}),t.\u0275inj=p.Ib({factory:function(e){return new(e||t)},imports:[[o.b,i.a,a.r,O,r.b.forChild()]]}),t})()},t4lL:function(t,e){}}]);