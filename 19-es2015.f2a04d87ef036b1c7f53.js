(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Eco9:function(t,e,n){"use strict";n.r(e),n.d(e,"TournamentAdminPageModule",(function(){return R}));var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),s=n("mrSG"),c=n("z6cu"),m=(n("t4lL"),n("AytR")),d=n("JIr8"),u=n("NEhk"),l=n("OYNw"),b=n("fXoL"),h=n("sYmb"),T=n("tk/3");function p(t,e){if(1&t){const t=b.Rb();b.Qb(0,"ion-item",8),b.Qb(1,"ion-label"),b.wc(2,"Team Tournament"),b.Pb(),b.Qb(3,"ion-checkbox",9),b.Yb("ngModelChange",(function(e){return b.pc(t),b.ac(2).administratedTournament.isTeamTournament=e})),b.Pb(),b.Pb()}if(2&t){const t=b.ac(2);b.Bb(3),b.gc("ngModel",t.administratedTournament.isTeamTournament)}}function g(t,e){if(1&t){const t=b.Rb();b.Qb(0,"ion-item",8),b.Qb(1,"ion-label"),b.wc(2,"Mode"),b.Pb(),b.Qb(3,"ion-select",10),b.Yb("ngModelChange",(function(e){return b.pc(t),b.ac(2).administratedTournament.type=e})),b.Qb(4,"ion-select-option",11),b.wc(5,"Swiss"),b.Pb(),b.Qb(6,"ion-select-option",12),b.wc(7,"Random"),b.Pb(),b.Pb(),b.Pb()}if(2&t){const t=b.ac(2);b.Bb(3),b.gc("ngModel",t.administratedTournament.type)}}function f(t,e){if(1&t){const t=b.Rb();b.Qb(0,"ion-item",8),b.Qb(1,"ion-label"),b.wc(2,"Tournament Name"),b.Pb(),b.Qb(3,"ion-input",13),b.Yb("ngModelChange",(function(e){return b.pc(t),b.ac(2).administratedTournament.name=e})),b.Pb(),b.Pb()}if(2&t){const t=b.ac(2);b.Bb(3),b.hc("placeholder",null==t.administratedTournament?null:t.administratedTournament.name),b.gc("ngModel",t.administratedTournament.name)}}function P(t,e){if(1&t){const t=b.Rb();b.Qb(0,"ion-item",8),b.Qb(1,"ion-label"),b.wc(2,"Minute Limit per round"),b.Pb(),b.Qb(3,"ion-input",14),b.Yb("ngModelChange",(function(e){return b.pc(t),b.ac(2).administratedTournament.timePerRound=e})),b.Pb(),b.Pb()}if(2&t){const t=b.ac(2);b.Bb(3),b.hc("placeholder",null==t.administratedTournament?null:t.administratedTournament.timePerRound),b.gc("ngModel",t.administratedTournament.timePerRound)}}function v(t,e){if(1&t){const t=b.Rb();b.Qb(0,"ion-item",15),b.Yb("click",(function(){return b.pc(t),b.ac(2).openPlayerSearchModal()})),b.wc(1," Add User "),b.Pb()}}function w(t,e){if(1&t){const t=b.Rb();b.Qb(0,"ion-item-sliding"),b.Qb(1,"ion-item",16),b.Qb(2,"ion-label"),b.wc(3),b.Pb(),b.Mb(4,"ion-reorder"),b.Pb(),b.Qb(5,"ion-item-options",17),b.Qb(6,"button",18),b.Yb("click",(function(){b.pc(t);const n=e.$implicit;return b.ac(2).removeUserFromTournament(n.id)})),b.Mb(7,"ion-icon",19),b.Pb(),b.Pb(),b.Pb()}if(2&t){const t=e.$implicit,n=e.index,i=b.ac(2);b.Bb(1),b.gc("ngClass",i.getClass(n)),b.Bb(2),b.yc(" ",t.name," ")}}function Q(t,e){if(1&t){const t=b.Rb();b.Qb(0,"div"),b.Qb(1,"h1"),b.wc(2,"Tournament Settings"),b.Pb(),b.Qb(3,"ion-list"),b.uc(4,p,4,1,"ion-item",3),b.uc(5,g,8,1,"ion-item",3),b.uc(6,f,4,2,"ion-item",3),b.uc(7,P,4,2,"ion-item",3),b.uc(8,v,2,0,"ion-item",4),b.Pb(),b.Qb(9,"h1"),b.wc(10,"Players & Teams"),b.Pb(),b.Qb(11,"ion-list"),b.Qb(12,"ion-reorder-group",5),b.Yb("ionItemReorder",(function(e){return b.pc(t),b.ac().onRenderItems(e)})),b.uc(13,w,8,2,"ion-item-sliding",6),b.Pb(),b.Pb(),b.Qb(14,"ion-button",7),b.Yb("click",(function(){return b.pc(t),b.ac().saveLocalTournamentChanges()})),b.wc(15," Save changes "),b.Pb(),b.Qb(16,"ion-button",7),b.Yb("click",(function(){return b.pc(t),b.ac().startTournament()})),b.wc(17," Start Tournament "),b.Pb(),b.Pb()}if(2&t){const t=b.ac();b.Bb(4),b.gc("ngIf",t.administratedTournament),b.Bb(1),b.gc("ngIf",t.administratedTournament),b.Bb(1),b.gc("ngIf",t.administratedTournament),b.Bb(1),b.gc("ngIf",t.administratedTournament),b.Bb(1),b.gc("ngIf",t.administratedTournament),b.Bb(5),b.gc("ngForOf",t.localMembersList)}}function C(t,e){if(1&t){const t=b.Rb();b.Qb(0,"ion-item-sliding"),b.Qb(1,"ion-item",16),b.Qb(2,"ion-label"),b.wc(3),b.Pb(),b.Pb(),b.Qb(4,"ion-item-options",17),b.Qb(5,"button",18),b.Yb("click",(function(){b.pc(t);const n=e.$implicit;return b.ac(2).showAreYouSureYouWantToDelete(n.id)})),b.Mb(6,"ion-icon",19),b.Pb(),b.Pb(),b.Pb()}if(2&t){const t=e.$implicit,n=e.index,i=b.ac(2);b.Bb(1),b.gc("ngClass",i.getClass(n)),b.Bb(2),b.yc(" ",t.name," ")}}function M(t,e){if(1&t){const t=b.Rb();b.Qb(0,"div"),b.Qb(1,"h1"),b.wc(2),b.Pb(),b.Qb(3,"div"),b.Qb(4,"a",20),b.wc(5,"This is the tournament link"),b.Pb(),b.Pb(),b.Qb(6,"h1"),b.wc(7),b.Pb(),b.Qb(8,"ion-button",7),b.Yb("click",(function(){return b.pc(t),b.ac().startNextRound()})),b.wc(9," Start Next Round "),b.Pb(),b.Qb(10,"ion-button",7),b.Yb("click",(function(){return b.pc(t),b.ac().showAreYouSureYouWantToFinishTournament()})),b.wc(11," Finish Tournament "),b.Pb(),b.Qb(12,"h1"),b.wc(13,"Remove quitters"),b.Pb(),b.Qb(14,"ion-list"),b.uc(15,C,7,2,"ion-item-sliding",6),b.Pb(),b.Pb()}if(2&t){const t=b.ac();b.Bb(2),b.xc(t.administratedTournament.name),b.Bb(5),b.zc("Time till next round ",t.minutesTillNextRound,":",t.secondsTillNextRound,""),b.Bb(8),b.gc("ngForOf",t.administratedTournament.members)}}const I=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,a,r,s){this.router=t,this.translator=e,this.alertController=n,this.modalController=i,this.translateService=o,this.toastService=a,this.httpClient=r,this.toastController=s}ngOnInit(){this.refreshTournament()}startCountdown(){this.roundStartDate=new Date,setInterval(()=>{const t=(new Date).getTime(),e=this.roundStartDate.getTime()+6e4*this.administratedTournament.timePerRound-t;this.minutesTillNextRound=Math.floor(e%36e5/6e4),this.secondsTillNextRound=Math.floor(e%6e4/1e3)},1e3)}onRenderItems(t){console.log(`Moving item from ${t.detail.from} to ${t.detail.to}`);const e=this.localMembersList.splice(t.detail.from,1)[0];this.localMembersList.splice(t.detail.to,0,e),t.detail.complete()}removeUserFromTournament(t){this.APIremoveUserFromTournament(this.administratedTournament._id,t).subscribe(t=>{this.administratedTournament=t,this.localMembersList=t.members})}showAreYouSureYouWantToDelete(t){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Delete Player with Team",message:"The user and his whole team (if there are teams) will be deleted. This cannot be undone!",buttons:[{text:this.translator.instant("game.cancel"),role:"cancel",cssClass:"secondary",handler:t=>{}},{text:this.translator.instant("game.delete"),handler:()=>{this.removeQuittersFromTournament(t)}}]});yield e.present()}))}showAreYouSureYouWantToFinishTournament(){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Finish Tournament",message:"The tournament will be finished. Make sure everyone has finished their games as Games in progress will all be canceled and not counted. This cannot be undone! The admin section will be gone, you can check the winner etc on the website",buttons:[{text:this.translator.instant("game.cancel"),role:"cancel",cssClass:"secondary",handler:t=>{}},{text:"FINISH",handler:()=>{this.APIfinishTournament(this.administratedTournament._id).subscribe(t=>{this.toastService.presentToast("Tournament finished")})}}]});yield t.present()}))}removeQuittersFromTournament(t){for(const e of this.administratedTournament.teams)e.includes(t)&&this.APIremoveUserFromTournament(this.administratedTournament._id,e[0]).subscribe(t=>{this.APIremoveUserFromTournament(this.administratedTournament._id,e[1]).subscribe(t=>{this.APIupdateTeams(this.administratedTournament._id).subscribe(t=>{this.administratedTournament=t,this.localMembersList=t.members})})})}saveLocalTournamentChanges(){this.administratedTournament.members=this.localMembersList,this.APIupdateTournament(this.administratedTournament).subscribe(t=>{this.administratedTournament=t,this.toastService.presentToast("Changes saved!")})}openPlayerSearchModal(){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:l.a,cssClass:"auto-height bottom-sheet",showBackdrop:!0,mode:"ios"});return t.onDidDismiss().then(t=>{"guestAccount@test.com"===t.data.email?this.toastService.presentToast("Guest cannot be added to a tournament!"):t.data&&this.APIaddUserToTournament(this.administratedTournament._id,t.data.id,t.data.name).subscribe(t=>{this.administratedTournament=t,this.localMembersList=t.members,this.toastService.presentToast("User added!")})}),yield t.present()}))}startTournament(){this.administratedTournament.isTeamTournament&&this.localMembersList.length%2!=0?this.toastService.presentToast("Uneven number of players are not allowed in a team tournament!"):(this.administratedTournament.members=this.localMembersList,this.APIupdateTournament(this.administratedTournament).subscribe(t=>{this.administratedTournament=t,this.startNextRound()}))}refreshTournament(){this.APIgetAdministratedTournament().subscribe(t=>{this.administratedTournament=t,this.localMembersList=t.members})}startNextRound(){this.startCountdown(),this.APIstartNextRound(this.administratedTournament._id).subscribe(t=>{t.multipleGameActiveError?this.presentTooManyOpenGamesAlert(t.multipleGameActiveError):this.toastService.presentToast("New round started"),this.refreshTournament()})}presentTooManyOpenGamesAlert(t){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Can't start new round",message:t+" have too many open games which need to be finished before you can start the new round",buttons:["OK"]});yield e.present()}))}getColor(t){switch(t%2==1&&(t="even"),t){case t="even":return"blue"}}getClass(t){if(!this.administratedTournament.isTeamTournament)return{even:!0};switch(t%2==1&&(t="even"),t){case t="even":return{odd:!0}}return{even:!0}}APIgetAdministratedTournament(){return this.httpClient.get(m.b+"/tournament/administrated").pipe(Object(d.a)(t=>(this.toastService.presentToast(),Object(c.a)(t))))}APIstartNextRound(t){return this.httpClient.get(`${m.b}/tournament/startNextRound/${t}`).pipe(Object(d.a)(t=>(this.toastService.presentToast(),Object(c.a)(t))))}APIupdateTeams(t){return this.httpClient.get(`${m.b}/tournament/updateTeams/${t}`).pipe(Object(d.a)(t=>(this.toastService.presentToast(),Object(c.a)(t))))}APIfinishTournament(t){return this.httpClient.get(`${m.b}/tournament/finish/${t}`).pipe(Object(d.a)(t=>(this.toastService.presentToast(),Object(c.a)(t))))}APIupdateTournament(t){return this.httpClient.post(m.b+"/tournament/update",{updatedTournament:t}).pipe(Object(d.a)(t=>(this.toastService.presentToast(),Object(c.a)(t))))}APIaddUserToTournament(t,e,n){return this.httpClient.post(m.b+"/tournament/addUser",{tournamentId:t,userId:e,userName:n}).pipe(Object(d.a)(t=>(this.toastService.presentToast(),Object(c.a)(t))))}APIremoveUserFromTournament(t,e){return this.httpClient.post(m.b+"/tournament/removeUser",{tournamentId:t,userId:e}).pipe(Object(d.a)(t=>(this.toastService.presentToast(),Object(c.a)(t))))}}return t.\u0275fac=function(e){return new(e||t)(b.Lb(r.h),b.Lb(h.d),b.Lb(a.a),b.Lb(a.S),b.Lb(h.d),b.Lb(u.a),b.Lb(T.b),b.Lb(a.Z))},t.\u0275cmp=b.Fb({type:t,selectors:[["app-tournament-admin"]],decls:5,vars:2,consts:[[1,"top-spacer"],[1,"horizontal-margin"],[4,"ngIf"],["lines","none",4,"ngIf"],["lines","none",3,"click",4,"ngIf"],["disabled","false",3,"ionItemReorder"],[4,"ngFor","ngForOf"],[3,"click"],["lines","none"],["slot","end",3,"ngModel","ngModelChange"],["value","swiss",3,"ngModel","ngModelChange"],["value","swiss"],["value","random"],["slot","end",3,"ngModel","placeholder","ngModelChange"],["type","number","slot","end",3,"ngModel","placeholder","ngModelChange"],["lines","none",3,"click"],[3,"ngClass"],["side","end",1,"trash-slider"],["ion-button","","color","danger",1,"slide-button",3,"click"],["name","trash"],["href","www.google.ch"]],template:function(t,e){1&t&&(b.Qb(0,"ion-content"),b.Mb(1,"div",0),b.Qb(2,"div",1),b.uc(3,Q,18,6,"div",2),b.uc(4,M,16,4,"div",2),b.Pb(),b.Pb()),2&t&&(b.Bb(3),b.gc("ngIf",!(null!=e.administratedTournament&&e.administratedTournament.teams)||0===(null==e.administratedTournament?null:e.administratedTournament.teams.length)),b.Bb(1),b.gc("ngIf",(null==e.administratedTournament?null:e.administratedTournament.teams)&&(null==e.administratedTournament?null:e.administratedTournament.teams.length)>0))},directives:[a.p,i.j,a.y,a.C,i.i,a.f,a.u,a.x,a.m,a.b,o.e,o.f,a.G,a.X,a.H,a.t,a.Y,a.U,a.w,i.h,a.B,a.v,a.s],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-background)}ion-reorder[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.odd[_ngcontent-%COMP%]{--border-color:var(--ion-color-primary)}.even[_ngcontent-%COMP%]{--border-color:var(--ion-color-background)}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[r.j.forChild(I)],r.j]}),t})();var A=n("t5+X");let R=(()=>{class t{}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.a,a.Q,y,A.a]]}),t})()}}]);