(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{AMPi:function(e,t,n){"use strict";n.r(t),n.d(t,"TournamentsPageModule",(function(){return O}));var a=n("ofXK"),o=n("3Pt+"),r=n("sYmb"),i=n("TEn/"),s=n("tyNb"),l=n("mrSG"),c=n("z6cu"),b=(n("t4lL"),n("AytR")),m=n("JIr8"),d=n("NEhk"),p=n("q7q9"),u=n("gcOT"),g=n("fXoL"),h=n("tk/3");function y(e,t){if(1&e&&(g.Mb(0,"div",6),g.Mb(1,"ion-card-title"),g.kc(2),g.Lb(),g.Lb()),2&e){const e=g.Wb();g.zb(2),g.lc(e.statName)}}function f(e,t){if(1&e&&(g.Mb(0,"div",6),g.Mb(1,"p",7),g.kc(2),g.Lb(),g.Lb()),2&e){const e=g.Wb();g.zb(2),g.lc(e.explanation)}}function P(e,t){if(1&e&&(g.Mb(0,"ion-label"),g.kc(1),g.Lb()),2&e){const e=g.Wb(),t=e.index,n=e.$implicit,a=g.Wb(2);g.zb(1),g.nc(" ",a.rankings[t],". ",null==n?null:n.name," ")}}function v(e,t){if(1&e){const e=g.Nb();g.Mb(0,"ion-item",9),g.Ub("click",(function(){g.gc(e);const n=t.$implicit;return g.Wb(2).deleteComparison(null==n?null:n.name)})),g.jc(1,P,2,2,"ion-label",3),g.Mb(2,"ion-note",10),g.kc(3),g.Lb(),g.Lb()}if(2&e){const e=t.$implicit,n=t.index,a=g.Wb(2);g.cc("ngClass",3==n?"comparison-border":""),g.zb(1),g.cc("ngIf",a.rankings),g.zb(2),g.nc(" ",e[a.propertyName],"",a.showPercentage," ")}}function C(e,t){if(1&e&&(g.Mb(0,"ion-list"),g.jc(1,v,4,4,"ion-item",8),g.Lb()),2&e){const e=g.Wb();g.zb(1),g.cc("ngForOf",e.statsToShow)}}let M=(()=>{class e{constructor(){this.deleteComparisonUserEvent=new g.n,this.openComparisonUserEvent=new g.n,this.statsToShow=[],this.showExplanation=!1}ngOnInit(){}ngOnChanges(){this.refreshStatsToShow()}deleteComparison(e){this.deleteComparisonUserEvent.next(e)}openComparison(){this.openComparisonUserEvent.next("openComparisonEvent")}toggleExplanation(){this.showExplanation=!this.showExplanation}refreshStatsToShow(){if(!this.bestList)return;this.statsToShow=[],this.rankings=[];const e=this.bestList[this.propertyName];this.totalPlayers=e.length;for(let t=0;t<e.length;t++)t<3&&(this.statsToShow.push(e[t]),this.rankings.push(t+1)),this.loggedInPlayerName===e[t].name&&(this.statsOfLoggedInPlayer=e[t],this.rankOfLoggedInPlayer=t+1);for(let t=0;t<e.length;t++)this.additionalPlayerNames.includes(e[t].name)&&(this.statsToShow.push(e[t]),this.rankings.push(t+1))}getClass(){let e=null;return e={"background-color":"#ffe460"},e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Db({type:e,selectors:[["app-tournament-tile"]],inputs:{propertyName:"propertyName",statName:"statName",explanation:"explanation",showPercentage:"showPercentage",bestList:"bestList",additionalPlayerNames:"additionalPlayerNames",loggedInPlayerName:"loggedInPlayerName"},outputs:{deleteComparisonUserEvent:"deleteComparisonUserEvent",openComparisonUserEvent:"openComparisonUserEvent"},features:[g.xb],decls:9,vars:5,consts:[[1,"top",3,"ngStyle","click"],["alt","",3,"src"],["class","wrapper",4,"ngIf"],[4,"ngIf"],[1,"compare",3,"click"],["name","add"],[1,"wrapper"],[1,"explanation"],["detail","false","button","",3,"ngClass","click",4,"ngFor","ngForOf"],["detail","false","button","",3,"ngClass","click"],["slot","end"]],template:function(e,t){1&e&&(g.Mb(0,"ion-card"),g.Mb(1,"ion-card-header",0),g.Ub("click",(function(){return t.toggleExplanation()})),g.Kb(2,"img",1),g.jc(3,y,3,1,"div",2),g.jc(4,f,3,1,"div",2),g.Lb(),g.Mb(5,"ion-card-content"),g.jc(6,C,2,1,"ion-list",3),g.Lb(),g.Mb(7,"div",4),g.Ub("click",(function(){return t.openComparison()})),g.Kb(8,"ion-icon",5),g.Lb(),g.Lb()),2&e&&(g.zb(1),g.cc("ngStyle",t.getClass()),g.zb(1),g.dc("src","../../assets/icon/stats/"+t.propertyName+".svg",g.hc),g.zb(1),g.cc("ngIf",!t.showExplanation),g.zb(1),g.cc("ngIf",t.showExplanation),g.zb(2),g.cc("ngIf",t.statsToShow.length>0))},directives:[i.e,i.g,a.k,a.j,i.f,i.l,i.h,i.p,a.i,i.n,a.h,i.q,i.o],styles:[".top[_ngcontent-%COMP%]{position:relative;overflow:visible;background:var(--ion-color-secondary);background-size:cover;background-position:50%;text-align:center;z-index:1;color:#000}.explanation[_ngcontent-%COMP%]{font-size:.9rem}ion-item[_ngcontent-%COMP%]{font-size:2 rem!important;--border-width:0;--inner-border-width:0;max-height:2.5rem!important;--inner-padding-start:0px!important;--inner-padding-end:0px!important;--padding-start:0px!important;--padding-end:0px!important;--min-height:1.8rem!important}.comparison-border[_ngcontent-%COMP%]{--inner-border-width:1px 0 0 0}ion-card-subtitle[_ngcontent-%COMP%]{margin-top:.2rem;margin-bottom:.2rem;color:#000;font-size:.7rem!important}ion-card-title[_ngcontent-%COMP%]{color:#000;font-size:.1 rem!important;font-weight:400}.top[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{margin-top:0;display:inline-block;font-size:1.2rem;font-weight:400}ion-card-content[_ngcontent-%COMP%]{padding-bottom:.1rem;padding-top:.1rem;padding-right:.8rem!important;padding-left:.8rem!important}ion-note[_ngcontent-%COMP%]{top:.2rem;position:relative;font-size:.9rem!important;color:var(--ion-color-primary)}ion-label[_ngcontent-%COMP%], ion-note[_ngcontent-%COMP%]{padding:0!important;margin:0!important}.plus[_ngcontent-%COMP%], ion-label[_ngcontent-%COMP%]{font-size:1rem!important}.compare[_ngcontent-%COMP%]{background-color:var(--ion-color-primary-gradient);color:var(--ion-color-primary);display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;font-size:1.8rem;padding:0}img[_ngcontent-%COMP%]{width:25%;display:block;margin:0 auto .7rem}"]}),e})();function N(e,t){if(1&e&&(g.Mb(0,"ion-item",14),g.Kb(1,"div",15),g.Mb(2,"ion-label"),g.kc(3),g.Lb(),g.Lb()),2&e){const e=t.$implicit;g.zb(3),g.mc(" ",e," ")}}function L(e,t){if(1&e){const e=g.Nb();g.Mb(0,"ion-card"),g.Mb(1,"ion-card-header"),g.Mb(2,"ion-card-title"),g.kc(3),g.Xb(4,"translate"),g.Lb(),g.Mb(5,"ion-button",12),g.Ub("click",(function(){return g.gc(e),g.Wb(2).shareTournamentKey()})),g.kc(6),g.Xb(7,"translate"),g.Lb(),g.Mb(8,"ion-button",12),g.Ub("click",(function(){return g.gc(e),g.Wb(2).showAreYouSureYouWantToLeaveTournament()})),g.kc(9),g.Xb(10,"translate"),g.Lb(),g.Lb(),g.jc(11,N,4,1,"ion-item",13),g.Lb()}if(2&e){const e=g.Wb(2);g.zb(3),g.nc("",g.Yb(4,5,"tournaments.join_with_key"),": ",e.activeTournament.key,""),g.zb(3),g.mc(" ",g.Yb(7,7,"tournaments.share_key")," "),g.zb(3),g.mc(" ",g.Yb(10,9,"tournaments.leave_tournament")," "),g.zb(2),g.cc("ngForOf",e.allPlayerNames)}}function T(e,t){if(1&e){const e=g.Nb();g.Mb(0,"div"),g.Mb(1,"h2",2),g.Ub("click",(function(){return g.gc(e),g.Wb().toggleExpansion()})),g.kc(2),g.Kb(3,"ion-icon",3),g.Lb(),g.jc(4,L,12,11,"ion-card",1),g.Mb(5,"ion-grid"),g.Mb(6,"ion-row"),g.Mb(7,"ion-col"),g.Mb(8,"app-tournament-tile",4),g.Ub("deleteComparisonUserEvent",(function(t){return g.gc(e),g.Wb().deleteComparisonUser(t)}))("openComparisonUserEvent",(function(){return g.gc(e),g.Wb().openPlayerSearchModal()})),g.Xb(9,"translate"),g.Xb(10,"translate"),g.Lb(),g.Lb(),g.Mb(11,"ion-col"),g.Mb(12,"app-tournament-tile",5),g.Ub("deleteComparisonUserEvent",(function(t){return g.gc(e),g.Wb().deleteComparisonUser(t)}))("openComparisonUserEvent",(function(){return g.gc(e),g.Wb().openPlayerSearchModal()})),g.Xb(13,"translate"),g.Xb(14,"translate"),g.Lb(),g.Lb(),g.Mb(15,"ion-col"),g.Mb(16,"app-tournament-tile",6),g.Ub("deleteComparisonUserEvent",(function(t){return g.gc(e),g.Wb().deleteComparisonUser(t)}))("openComparisonUserEvent",(function(){return g.gc(e),g.Wb().openPlayerSearchModal()})),g.Xb(17,"translate"),g.Xb(18,"translate"),g.Lb(),g.Lb(),g.Mb(19,"ion-col"),g.Mb(20,"app-tournament-tile",7),g.Ub("deleteComparisonUserEvent",(function(t){return g.gc(e),g.Wb().deleteComparisonUser(t)}))("openComparisonUserEvent",(function(){return g.gc(e),g.Wb().openPlayerSearchModal()})),g.Xb(21,"translate"),g.Xb(22,"translate"),g.Lb(),g.Lb(),g.Lb(),g.Mb(23,"ion-row"),g.Mb(24,"ion-col"),g.Mb(25,"app-tournament-tile",8),g.Ub("deleteComparisonUserEvent",(function(t){return g.gc(e),g.Wb().deleteComparisonUser(t)}))("openComparisonUserEvent",(function(){return g.gc(e),g.Wb().openPlayerSearchModal()})),g.Xb(26,"translate"),g.Xb(27,"translate"),g.Lb(),g.Lb(),g.Mb(28,"ion-col"),g.Mb(29,"app-tournament-tile",9),g.Ub("deleteComparisonUserEvent",(function(t){return g.gc(e),g.Wb().deleteComparisonUser(t)}))("openComparisonUserEvent",(function(){return g.gc(e),g.Wb().openPlayerSearchModal()})),g.Xb(30,"translate"),g.Xb(31,"translate"),g.Lb(),g.Lb(),g.Mb(32,"ion-col"),g.Mb(33,"app-tournament-tile",10),g.Ub("deleteComparisonUserEvent",(function(t){return g.gc(e),g.Wb().deleteComparisonUser(t)}))("openComparisonUserEvent",(function(){return g.gc(e),g.Wb().openPlayerSearchModal()})),g.Xb(34,"translate"),g.Xb(35,"translate"),g.Lb(),g.Lb(),g.Mb(36,"ion-col"),g.Mb(37,"app-tournament-tile",11),g.Ub("deleteComparisonUserEvent",(function(t){return g.gc(e),g.Wb().deleteComparisonUser(t)}))("openComparisonUserEvent",(function(){return g.gc(e),g.Wb().openPlayerSearchModal()})),g.Xb(38,"translate"),g.Xb(39,"translate"),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Lb()}if(2&e){const e=g.Wb();g.zb(2),g.mc("",e.activeTournament.name," "),g.zb(1),g.cc("ngClass",e.expanded?"expanded":"collapsed"),g.zb(1),g.cc("ngIf",e.expanded),g.zb(4),g.dc("statName",g.Yb(9,43,"statistics.tichuMaster")),g.dc("explanation",g.Yb(10,45,"statistics.explainer_tichuMaster")),g.cc("bestList",e.activeTournamentBestlist)("additionalPlayerNames",e.additionalPlayerNames)("loggedInPlayerName",e.loggedInPlayerName),g.zb(4),g.dc("explanation",g.Yb(13,47,"statistics.explainer_tichuAnnouncedWhen1stRate")),g.dc("statName",g.Yb(14,49,"statistics.tichuAnnouncedWhen1stRate")),g.cc("bestList",e.activeTournamentBestlist)("additionalPlayerNames",e.additionalPlayerNames)("loggedInPlayerName",e.loggedInPlayerName),g.zb(4),g.dc("explanation",g.Yb(17,51,"statistics.explainer_winRate")),g.dc("statName",g.Yb(18,53,"statistics.winRate")),g.cc("bestList",e.activeTournamentBestlist)("additionalPlayerNames",e.additionalPlayerNames)("loggedInPlayerName",e.loggedInPlayerName),g.zb(4),g.dc("explanation",g.Yb(21,55,"statistics.explainer_bombRate")),g.dc("statName",g.Yb(22,57,"statistics.bombRate")),g.cc("bestList",e.activeTournamentBestlist)("additionalPlayerNames",e.additionalPlayerNames)("loggedInPlayerName",e.loggedInPlayerName),g.zb(5),g.dc("statName",g.Yb(26,59,"statistics.doubleWinRate")),g.dc("explanation",g.Yb(27,61,"statistics.explainer_doubleWinRate")),g.cc("bestList",e.activeTournamentBestlist)("additionalPlayerNames",e.additionalPlayerNames)("loggedInPlayerName",e.loggedInPlayerName),g.zb(4),g.dc("explanation",g.Yb(30,63,"statistics.explainer_tichuPreventedRate")),g.dc("statName",g.Yb(31,65,"statistics.tichuPreventedRate")),g.cc("bestList",e.activeTournamentBestlist)("additionalPlayerNames",e.additionalPlayerNames)("loggedInPlayerName",e.loggedInPlayerName),g.zb(4),g.dc("explanation",g.Yb(34,67,"statistics.explainer_tichuSuccessRate")),g.dc("statName",g.Yb(35,69,"statistics.tichuSuccessRate")),g.cc("bestList",e.activeTournamentBestlist)("additionalPlayerNames",e.additionalPlayerNames)("loggedInPlayerName",e.loggedInPlayerName),g.zb(4),g.dc("explanation",g.Yb(38,71,"statistics.explainer_bigTichuSuccessRate")),g.dc("statName",g.Yb(39,73,"statistics.bigTichuSuccessRate")),g.cc("bestList",e.activeTournamentBestlist)("additionalPlayerNames",e.additionalPlayerNames)("loggedInPlayerName",e.loggedInPlayerName)}}function k(e,t){if(1&e){const e=g.Nb();g.Mb(0,"div"),g.Mb(1,"ion-card"),g.Mb(2,"ion-card-header"),g.Kb(3,"img",16),g.Mb(4,"ion-card-title"),g.kc(5),g.Xb(6,"translate"),g.Lb(),g.Mb(7,"p"),g.kc(8),g.Xb(9,"translate"),g.Lb(),g.Mb(10,"ol"),g.Mb(11,"li"),g.kc(12),g.Xb(13,"translate"),g.Lb(),g.Mb(14,"li"),g.kc(15),g.Xb(16,"translate"),g.Lb(),g.Mb(17,"li"),g.kc(18),g.Xb(19,"translate"),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(20,"ion-card"),g.Mb(21,"ion-card-header"),g.Mb(22,"ion-card-title"),g.kc(23),g.Xb(24,"translate"),g.Lb(),g.Lb(),g.Mb(25,"ion-item"),g.Mb(26,"ion-label",17),g.kc(27),g.Xb(28,"translate"),g.Lb(),g.Mb(29,"ion-input",18),g.Ub("ngModelChange",(function(t){return g.gc(e),g.Wb().tourneyKeyToJoin=t})),g.Lb(),g.Lb(),g.Mb(30,"ion-button",12),g.Ub("click",(function(){return g.gc(e),g.Wb().signUpForTournament()})),g.kc(31),g.Xb(32,"translate"),g.Lb(),g.Lb(),g.Mb(33,"ion-card"),g.Mb(34,"ion-card-header"),g.Mb(35,"ion-card-title"),g.kc(36),g.Xb(37,"translate"),g.Lb(),g.Lb(),g.Mb(38,"ion-item"),g.Mb(39,"ion-label",19),g.kc(40),g.Xb(41,"translate"),g.Lb(),g.Mb(42,"ion-input",20),g.Ub("ngModelChange",(function(t){return g.gc(e),g.Wb().tourneyNameToCreate=t})),g.Lb(),g.Lb(),g.Mb(43,"ion-button",12),g.Ub("click",(function(){return g.gc(e),g.Wb().createNewTournament()})),g.kc(44),g.Xb(45,"translate"),g.Lb(),g.Lb(),g.Lb()}if(2&e){const e=g.Wb();g.zb(3),g.dc("src","../../assets/icon/tournament.svg",g.hc),g.zb(2),g.lc(g.Yb(6,14,"tournaments.title")),g.zb(3),g.lc(g.Yb(9,16,"tournaments.explainer_0")),g.zb(4),g.lc(g.Yb(13,18,"tournaments.explainer_1")),g.zb(3),g.lc(g.Yb(16,20,"tournaments.explainer_2")),g.zb(3),g.lc(g.Yb(19,22,"tournaments.explainer_3")),g.zb(5),g.lc(g.Yb(24,24,"tournaments.sign_up")),g.zb(4),g.lc(g.Yb(28,26,"tournaments.tournament_password")),g.zb(2),g.cc("ngModel",e.tourneyKeyToJoin),g.zb(2),g.mc(" ",g.Yb(32,28,"tournaments.register")," "),g.zb(5),g.lc(g.Yb(37,30,"tournaments.create_new")),g.zb(4),g.mc("",g.Yb(41,32,"tournaments.tournament_name")," "),g.zb(2),g.cc("ngModel",e.tourneyNameToCreate),g.zb(2),g.mc(" ",g.Yb(45,34,"tournaments.create")," ")}}const{Share:x}=u.b,U=[{path:"",component:(()=>{class e{constructor(e,t,n,a,o,r,i,l){this.router=e,this.translator=t,this.alertController=n,this.modalController=a,this.translateService=o,this.toastService=r,this.httpClient=i,this.toastController=l,this.activeTournament=null,this.activeTournamentBestlist=null,this.tourneyKeyToJoin=null,this.tourneyNameToCreate=null,this.additionalPlayerNames=[],this.dataIsRefreshing=!0,this.expanded=!1,this.router.events.subscribe(e=>{e instanceof s.c&&"/tabs/tournaments"===e.url&&(this.dataIsRefreshing=!0,this.refreshActiveTournament())})}ngOnInit(){this.APIgetLoggedInUser().subscribe(e=>{this.loggedInPlayerName=e.name})}refreshActiveTournament(){this.activeTournament=null,this.activeTournamentBestlist=null,this.APIgetActiveTournament().subscribe(e=>{e.noActiveTournaments||(this.activeTournament=e,this.APIGetTournamentBestlist(e.key).subscribe(e=>{this.activeTournamentBestlist=e,this.allPlayerNames=this.getAllPlayerNamesFromBestlist(e),this.allPlayerNames.sort(),this.dataIsRefreshing=!1})),e.noActiveTournaments&&(this.dataIsRefreshing=!1)})}shareTournamentKey(){u.a.isPluginAvailable("Share")&&x.share({title:"Share the tournament key",text:this.activeTournament.key,dialogTitle:"Share the key"})}signUpForTournament(){console.log("signup started"),this.APIsignUpForTournament(this.tourneyKeyToJoin).subscribe(e=>{this.activeTournament=e,this.refreshActiveTournament()})}toggleExpansion(){this.expanded=!this.expanded}getAllPlayerNamesFromBestlist(e){const t=[];return e.elo.forEach(e=>{t.push(e.name)}),t}createNewTournament(){this.tourneyNameToCreate||this.toastService.presentToast(this.translateService.instant("tournaments.toast_no_name_error")),this.APIcreateNewTournament(this.tourneyNameToCreate).subscribe(e=>{console.log(e),this.tourneyKeyToJoin=e.key,this.signUpForTournament()})}deleteComparisonUser(e){return Object(l.a)(this,void 0,void 0,(function*(){const t=this.additionalPlayerNames.indexOf(e);t>-1&&(this.additionalPlayerNames.splice(t,1),this.additionalPlayerNames=this.additionalPlayerNames.slice())}))}openPlayerSearchModal(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({componentProps:{allPlayerNames:this.allPlayerNames},component:p.a,cssClass:"auto-height bottom-sheet",showBackdrop:!0,mode:"ios"});return e.onDidDismiss().then(e=>{this.additionalPlayerNames.push(e.data),this.additionalPlayerNames=this.additionalPlayerNames.slice()}),yield e.present()}))}showAreYouSureYouWantToLeaveTournament(){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:this.translateService.instant("tournaments.leave_tournament_header"),message:this.translateService.instant("tournaments.leave_tournament_message"),buttons:[{text:this.translator.instant("tournaments.back"),role:"cancel",cssClass:"secondary",handler:e=>{}},{text:this.translator.instant("tournaments.leave"),handler:()=>{this.APIremoveFromCurrentTournament().subscribe(()=>{this.refreshActiveTournament()})}}]});yield e.present()}))}APIGetTournamentBestlist(e){return this.httpClient.get(`${b.a}/tournament/tournamentBestList/${e}`).pipe(Object(m.a)(e=>(this.toastService.presentToast(),Object(c.a)(e))))}APIremoveFromCurrentTournament(){return this.httpClient.post(b.a+"/tournament/removeLoggedInUser",{key:this.activeTournament.key}).pipe(Object(m.a)(e=>(this.toastService.presentToast(),Object(c.a)(e))))}APIcreateNewTournament(e){return this.httpClient.post(b.a+"/tournament/create",{name:e,isOfficial:!1,isActive:!0}).pipe(Object(m.a)(e=>(this.toastService.presentToast(),Object(c.a)(e))))}APIgetLoggedInUser(){return this.httpClient.get(b.a+"/users/loggedInUser").pipe(Object(m.a)(e=>(this.toastService.presentToast(),Object(c.a)(e))))}APIsignUpForTournament(e){return this.httpClient.post(b.a+"/tournament/addLoggedInUser",{key:e}).pipe(Object(m.a)(e=>(this.toastService.presentToast(this.translator.instant("tournaments.error_could_not_joing")),Object(c.a)(e))))}APIgetActiveTournament(){return this.httpClient.get(b.a+"/tournament/active").pipe(Object(m.a)(e=>(this.toastService.presentToast(),Object(c.a)(e))))}}return e.\u0275fac=function(t){return new(t||e)(g.Jb(s.h),g.Jb(r.d),g.Jb(i.a),g.Jb(i.A),g.Jb(r.d),g.Jb(d.a),g.Jb(h.b),g.Jb(i.F))},e.\u0275cmp=g.Db({type:e,selectors:[["app-tournaments"]],decls:4,vars:2,consts:[[1,"top-spacer"],[4,"ngIf"],[3,"click"],["name","triangle-outline",3,"ngClass"],["propertyName","tichuMaster","showPercentage","",3,"statName","bestList","additionalPlayerNames","loggedInPlayerName","explanation","deleteComparisonUserEvent","openComparisonUserEvent"],["propertyName","tichuAnnouncedWhen1stRate","showPercentage","%",3,"bestList","additionalPlayerNames","loggedInPlayerName","explanation","statName","deleteComparisonUserEvent","openComparisonUserEvent"],["showPercentage","%","propertyName","winRate",3,"bestList","additionalPlayerNames","loggedInPlayerName","explanation","statName","deleteComparisonUserEvent","openComparisonUserEvent"],["showPercentage","%","propertyName","bombRate",3,"bestList","additionalPlayerNames","loggedInPlayerName","explanation","statName","deleteComparisonUserEvent","openComparisonUserEvent"],["showPercentage","%","propertyName","doubleWinRate",3,"bestList","additionalPlayerNames","loggedInPlayerName","statName","explanation","deleteComparisonUserEvent","openComparisonUserEvent"],["showPercentage","%","propertyName","tichuPreventedRate",3,"bestList","additionalPlayerNames","loggedInPlayerName","explanation","statName","deleteComparisonUserEvent","openComparisonUserEvent"],["showPercentage","%","propertyName","tichuSuccessRate",3,"bestList","additionalPlayerNames","loggedInPlayerName","explanation","statName","deleteComparisonUserEvent","openComparisonUserEvent"],["showPercentage","%","propertyName","bigTichuSuccessRate",3,"bestList","additionalPlayerNames","loggedInPlayerName","explanation","statName","deleteComparisonUserEvent","openComparisonUserEvent"],["expand","block","fill","clear","color","primary",3,"click"],["detail","false","button","",4,"ngFor","ngForOf"],["detail","false","button",""],["tabindex","0"],["alt","",1,"trophy",3,"src"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["position","floating",1,"floating-label"],["maxlength","20","type","text",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(g.Mb(0,"ion-content"),g.Kb(1,"div",0),g.jc(2,T,40,75,"div",1),g.jc(3,k,46,36,"div",1),g.Lb()),2&e&&(g.zb(2),g.cc("ngIf",t.activeTournament&&!t.dataIsRefreshing),g.zb(1),g.cc("ngIf",!t.activeTournament&&!t.dataIsRefreshing))},directives:[i.j,a.j,i.l,a.h,i.k,i.s,i.i,M,i.e,i.g,i.h,i.d,a.i,i.n,i.o,i.m,i.E,o.e,o.f,o.b],pipes:[r.c],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-background) url(dogs.7092f7cc69613632b137.png) top center/cover no-repeat}img[_ngcontent-%COMP%]{width:30%;display:block;margin-left:auto;margin-right:auto}.trophy[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:1rem}h2[_ngcontent-%COMP%]{margin:0 0 0 5%}h2[_ngcontent-%COMP%], ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary);position:relative;vertical-align:center!important}ion-icon[_ngcontent-%COMP%]{top:.3rem}p[_ngcontent-%COMP%]{color:#000}.collapsed[_ngcontent-%COMP%]{display:inline-block;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.expanded[_ngcontent-%COMP%]{display:inline-block;-webkit-transform:rotate(180deg);transform:rotate(180deg)}ion-card-title[_ngcontent-%COMP%]{color:#000;font-size:1.2rem!important;font-weight:400;text-align:center}ion-label[_ngcontent-%COMP%]{font-size:1rem!important}ion-list-header[_ngcontent-%COMP%]{color:#000;font-size:1.2rem!important;font-weight:400}ol[_ngcontent-%COMP%]{margin-left:5%;margin-right:2%}li[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]{color:#000;-webkit-padding-start:0;padding-inline-start:0;text-align:justify}"]}),e})()},{path:"tournament-player-search-modal",loadChildren:()=>Promise.resolve().then(n.bind(null,"qyCJ")).then(e=>e.TournamentPlayerSearchModalPageModule)}];let w=(()=>{class e{}return e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({factory:function(t){return new(t||e)},imports:[[s.j.forChild(U)],s.j]}),e})();var I=n("qyCJ");let O=(()=>{class e{}return e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({factory:function(t){return new(t||e)},imports:[[a.b,o.a,i.y,w,r.b.forChild(),I.TournamentPlayerSearchModalPageModule]]}),e})()},q7q9:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n("mrSG"),o=n("TEn/"),r=n("fXoL"),i=n("3Pt+"),s=n("ofXK");let l=(()=>{class e{transform(e,t){return e?t?(t=t.toLowerCase(),e.filter(e=>e.toLowerCase().includes(t))):e:[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r.Ib({name:"filter",type:e,pure:!0}),e})();function c(e,t){if(1&e){const e=r.Nb();r.Mb(0,"ion-item",3),r.Ub("click",(function(){r.gc(e);const n=t.$implicit;return r.Wb().addToSelectedUsersAndClose(n)})),r.Kb(1,"div",4),r.Mb(2,"ion-label"),r.kc(3),r.Lb(),r.Lb()}if(2&e){const e=t.$implicit;r.zb(3),r.mc(" ",e," ")}}let b=(()=>{class e{constructor(e){this.modalController=e}ngOnInit(){setTimeout(()=>{this.searchbar.setFocus()},1e3)}addToSelectedUsersAndClose(e){return Object(a.a)(this,void 0,void 0,(function*(){this.additionalPlayerName=e,yield this.modalController.dismiss(this.additionalPlayerName)}))}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(o.A))},e.\u0275cmp=r.Db({type:e,selectors:[["app-tournament-player-search-modal"]],viewQuery:function(e,t){var n;1&e&&r.oc(o.t,!0),2&e&&r.fc(n=r.Vb())&&(t.searchbar=n.first)},inputs:{allPlayerNames:"allPlayerNames"},decls:5,vars:5,consts:[[1,"inner-content"],["placeholder","Search to Compare",3,"ngModel","ngModelChange"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],["tabindex","0"]],template:function(e,t){1&e&&(r.Mb(0,"div",0),r.Mb(1,"ion-searchbar",1),r.Ub("ngModelChange",(function(e){return t.searchText=e})),r.Lb(),r.Mb(2,"ion-list"),r.jc(3,c,4,1,"ion-item",2),r.Xb(4,"filter"),r.Lb(),r.Lb()),2&e&&(r.zb(1),r.cc("ngModel",t.searchText),r.zb(2),r.cc("ngForOf",r.Zb(4,2,t.allPlayerNames,t.searchText)))},directives:[o.t,o.E,i.e,i.f,o.p,s.i,o.n,o.o],pipes:[l],styles:[""]}),e})()},qyCJ:function(e,t,n){"use strict";n.r(t),n.d(t,"TournamentPlayerSearchModalPageModule",(function(){return m}));var a=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),i=n("tyNb"),s=n("q7q9"),l=n("fXoL");const c=[{path:"",component:s.a}];let b=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[i.j.forChild(c)],i.j]}),e})(),m=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[a.b,o.a,r.y,b]]}),e})()},t4lL:function(e,t){}}]);