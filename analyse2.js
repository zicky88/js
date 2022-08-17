var  analyseHost = "analyse.7m.com.cn";
function ChangePkData(sx, i){
	if (sx > -1){
		if (sx == 1)
			return AWAY_HANDICAP_STR.replace("?", RQ_ARR[i]);
		return HOME_HANDICAP_STR.replace("?", RQ_ARR[i]);
	}
	
	return "VS";
}

function GetWeather(wi){
	if (!isNaN(wi) && wi > 0 && wi < 30){
		return WEATHER_ARR[wi];
	}
	return;
}
function BuilderChart(total,win,drow,lose){
	var ttt = CHART_TITLE_STR.replace('?1', total).replace('?2', win).replace('?3', drow).replace('?4', lose);
	var chart_table  = '<table border="0" cellspacing="0" cellspaing="0" width="95%"><tr>';
	if (win > 0) chart_table += '<td width="' + win + '%" class="cbg_w" title="' + ttt + '"></td>';
	if (drow > 0) chart_table += '<td width="' + drow + '%" class="cbg_d" title="' + ttt + '"></td>';
	if (lose > 0) chart_table += '<td width="' + lose + '%" class="cbg_l" title="' + ttt + '"></td>';
	chart_table += '</tr></table>';
	return chart_table;
}

var loadGameInfoCount = 0;
function loadData(){
	if(typeof(gameInfo)!="undefined" && gameInfo != null){

		/*
		if(window.location.href.indexOf("debug") != -1){
			alert(typeof(timeZoneData));
		}
		*/
		//$$("mn").style.backgroundColor = "#" + gameInfo["mcolor"];
		//$$("mn").innerHTML = gameInfo["missue"]==1? '' + gameInfo["mname"] + '' : '<span style="color:#FFFFFF;">' + gameInfo["mname"] + '</span>';
		//$$("ta").innerHTML = '<span style="color:#000;">' + gameInfo["taname"] + '</span>';
		//$$("tb").innerHTML = '<span style="color:#000;">' + gameInfo["tbname"] + '</span>';

		var ie6=!-[1,]&&!window.XMLHttpRequest;

		//if(!ie6){
			//$$("spnGameTime").innerHTML =getDateByValue(parseFloat(gameInfo["time"])).toString(fulldateFormat);
		//}
		var charts = gameInfo["tadata"].split(',');
		if(charts.length==4 && charts[0]>0){
			var html =BuilderChart(charts[0],charts[1],charts[2],charts[3]) ;
			//$$("taPan").innerHTML += html;
		}
		
		charts = gameInfo["tbdata"].split(',');
		if(charts.length==4 && charts[0]>0){
			//$$("tbPan").innerHTML += BuilderChart(charts[0],charts[1],charts[2],charts[3]);
		}
		if (gameInfo["tarank"] != ""){
			if (LANGUAGE_INDEX > 1 && !/^[\w]+$/i.test(gameInfo["tarank"])){
					gameInfo["tarank"] = gameInfo["tarank"].replace(/[^\d]+/ig, "");
			}
			$$("ta").innerHTML += '<sup>[' + gameInfo["tarank"] + ']</sup>';
		}
		if (gameInfo["tbrank"] != ""){
			if (LANGUAGE_INDEX > 1 &&  !/^[\w]+$/i.test(gameInfo["tbrank"])){
				gameInfo["tbrank"] = gameInfo["tbrank"].replace(/[^\d]+/ig, "");
			}
			$$("tb").innerHTML += '<sup>[' + gameInfo["tbrank"] + ']</sup>';
		}
		var b_pk = '';
		if (gameInfo["handicap"]!=""){
			if (gameInfo["m_early"] != ''){
				b_pk = ' title="' + BASE_HANDICAP + ChangePkData((parseFloat(gameInfo["m_early"]) > 0 ?  1 : 0), Math.abs(gameInfo["m_early"]) * 4) + '"';
			}else if (gameInfo["s2_early"] != ''){
				b_pk = ' title="' + BASE_HANDICAP + ChangePkData((parseFloat(gameInfo["s2_early"]) > 0 ? 1 : 0), Math.abs(gameInfo["s2_early"]) * 4) + '"';
			}
			
			if (gameInfo["oddstype"] == 1){
				//$$("pk").innerHTML = '<span class="odds_pk1"' + b_pk + '>' + ChangePkData((parseFloat(gameInfo["handicap"]) > 0 ?  1 : 0), Math.abs(gameInfo["handicap"]) * 4) + "</span>";
			}else if (gameInfo["oddstype"] == 2){
				//$$("pk").innerHTML = '<span class="odds_pk1"' + b_pk + '>' + ChangePkData((parseFloat(gameInfo["handicap"]) > 0 ?  1 : 0), Math.abs(gameInfo["handicap"]) * 4) + "</span>";
			}else if (gameInfo["oddstype"] == 3){
			//$$("pk").innerHTML = '<span class="odds_pk1"' + b_pk + '>' + ChangePkData((parseFloat(gameInfo["handicap"]) > 0 ?  1 : 0), Math.abs(gameInfo["handicap"]) * 4) + "</span>";
			}else{
				//$$("pk").innerHTML = "" +  ChangePkData((parseFloat(gameInfo["handicap"]) > 0 ?  1 : 0), gameInfo["handicap"] * 4) + "";
			}
			//$$("cVote").innerHTML ="<iframe src='http://discuss.7msport.com/" + (LANGUAGE_STR=='jp'?'en':LANGUAGE_STR) +"/vote1.htm?no=" + gameId + "' border='0' height='280' width='202' frameborder='no' scrolling='no'></iframe>";
		}
		
		if (gameInfo["weather"]!=""){
			//$$("weather").innerHTML = '<img src="http://img.7m.com.cn/weather_img/' + gameInfo["weather"] + '.gif" weight="20" height="20" border="0">&nbsp;' + GetWeather(gameInfo["weather"]);
			//$$("temperature").innerHTML = gameInfo["temperature"].replace("/"," / ");
			//$$("weather_body").style.display = "";
		}
		if (gameInfo["channel"]!=""){
			$$("living").innerHTML = "<br/>" + gameInfo["channel"];
			$$("living_body").style.display = "";
		}
		$$("last_update").innerHTML = gameInfo["updatedtime"];;
		loadPrediction();
		loadGameHistory();
		iniTeamHistory();
		iniTeamStats();
		iniTeamFixture();
		setTimeout("iniLineup()", 100);
		setTimeout("iniOddsWay()", 300);
		setTimeout("iniStanding()", 800);

		var matchDate = getDateByValue(parseFloat(gameInfo["time"])).toString("yyyy-MM-dd");
		if( LANGUAGE_STR == 'th' ){
			LoadJS( 'http://soccer.7mth.com/report/result/'+matchDate+'.js?t='+new Date().valueOf() , showQBlink );
		}

		if( LANGUAGE_STR == 'en' ){
			LoadJS( 'http://www.7msport.com/report/result/'+matchDate+'.js?t='+new Date().valueOf() , showQBlink );
		}

		if( LANGUAGE_STR == 'vn' ){
			LoadJS( 'http://7mvn.com/report/result/'+matchDate+'.js?t='+new Date().valueOf() , showQBlink );
		}

		if( LANGUAGE_STR == 'kr' ){
			LoadJS( 'http://sport.7mkr.com/soccer/report/result/'+matchDate+'.js?t='+new Date().valueOf() , showQBlink );
		}
		
	}else{
		if(loadGameInfoCount<=2){
			loadGameInfoCount ++;
			LoadJS("http://" + analyseHost +"/" + gameId + "/data/gameinfo_" +  LANGUAGE_STR +".js?f=" + new Date().valueOf(),loadData);	
		}
	}
		
		
}

function showQBlink(){

	if( LANGUAGE_STR == 'th' ) {
		if (typeof(report_result) != "undefined" && typeof(report_result[gameId]) != "undefined") {
			//$$('info_qb').style.display = 'block';
			//$$('bqBtn').setAttribute('href', 'http://soccer.7mth.com/report/data/' + gameId + '.shtml');
			//$$('bqBtn').className = report_result[gameId] == 1 ? 'qinbao_a_th' : 'qinbao_a_th_on';
		}
	}

	if( LANGUAGE_STR == 'en' ) {
		if (typeof(report_result) != "undefined" && typeof(report_result[gameId]) != "undefined") {
			$$('info_qb').style.display = 'block';
			$$('bqBtn').setAttribute('href', 'http://7msport.com/report/game/' + gameId + '.shtml');
		}
	}

	if( LANGUAGE_STR == 'vn' ) {
		if (typeof(report_result) != "undefined" && typeof(report_result[gameId]) != "undefined") {
			$$('info_qb').style.display = '';
			$$('bqBtn').setAttribute('href', 'http://7mvn.com/report/game/'+gameId+'.shtml');
			$$('bqBtn').className = report_result[gameId] == 1 ? 'qinbao_a_vn' : 'qinbao_a_vn_on';
		}
	}

	if( LANGUAGE_STR == 'kr' ) {
		if (typeof(report_result) != "undefined" && typeof(report_result[gameId]) != "undefined") {
			$$('info_qb').style.display = '';
			$$('bqBtn').setAttribute('href', 'http://sport.7mkr.com/soccer/report/data/'+gameId+'.shtml');
			$$('bqBtn').className = report_result[gameId] == 1 ? 'qinbao_a_kr' : 'qinbao_a_kr_on';
		}
	}
}

function loadGameHistory(){
	var hMatches =gamehistory["historymatch"]; 
	var ids = hMatches["id"];
	if(ids.length==0){
		return;
	}
	var matches = gamehistory["match"];
	$$("jfwj_body").style.display = "";
	var mContent="";
	for(var key in matches){
		mContent+="&nbsp;<input type='checkbox' checked='true' id='gmatch_" +  key +"'  value='" + key  +"'  /><label for='gmatch_" +  key +"'>&nbsp;"+matches[key]["n"]+"</label>";
	}
	$$("WJSelLst").innerHTML += mContent;
	var selObj=$$("WJsel");
	for(var i=0;i<=ids.length;i++){
		selObj.add(new Option(i,i));
	}
	selObj.value = ids.length;
	setHistoryMatch();
}

function setGameHistoryCount(){
	var mids =gamehistory["historymatch"]["mid"];
	var taids = gamehistory["historymatch"]["aid"];
	var vsSameFlag = $$("WJchk").checked;
	var count=0;
	for(var i=0;i<mids.length;i++){
		if($$("gmatch_" + mids[i]).checked  &&  (!vsSameFlag  || (vsSameFlag && taids[i] == gameInfo["taid"]  )     )     ){
			count++;
		}
	}
	var selObj=$$("WJsel");
	for(var i=selObj.options.length-1;i>=0;i--){
		selObj.remove(i);	
	}
	for(var i=0;i<=count;i++){
		selObj.add(new Option(i,i));
	}
	selObj.value = count;
}
function setHistoryMatch(teamId){
	var teamId = gameInfo["taid"];
	var total = parseInt($$("WJsel").value);
	var obj = $$("jfwj");
	for(var i=obj.rows.length-1;i>=2;i--){
		obj.deleteRow(i);
	}
	var selMids={};
	var ms = $$("WJSelLst").getElementsByTagName("input");
	var vsSameFlag = false;
	for(var i=0;i<ms.length;i++){
	
		if(ms[i].id=="WJchk"){
			vsSameFlag = ms[i].checked;
		}
		if(ms[i].checked){
			selMids[ms[i].value]=1;
		}
	}
	var hMatches =gamehistory["historymatch"]; 
	var matches = gamehistory["match"];
	var ids = hMatches["id"];
	var mids = hMatches["mid"];
	var aids = hMatches["aid"];
	var bids = hMatches["bid"];
	var dates = hMatches["date"];
	var liveAs = hMatches["liveA"];
	var liveBs = hMatches["liveB"];
	var redAs = hMatches["redA"];
	var redBs = hMatches["redB"];
	var bcs = hMatches["bc"];
	var ngs = hMatches["ng"];
	var rqs = hMatches["rq"];
	var rqls = hMatches["rql"];
	var worls = hMatches["worl"];
	var oworls = hMatches["oworl"];
	var teams = gamehistory["team"];
	var notes = gamehistory["note"];
	var tr,td,tdTeamA,tdTeamB;
	var index=0,rqFlag;
	var countStats={"total":total,"tw":0,"td":0,"tl":0,"hw":0,"hd":0,"hl":0,"nw":0,"nd":0,"nl":0,"aw":0,"ad":0,"al":0,"ototal":0,"ow":0,"od":0,"ol":0,"over":0,"under":0,"even":0,"odd":0,"hover":0,"hunder":0};
	for(var i=0;i<ids.length;i++){
		if(selMids[mids[i]]==null || (vsSameFlag&&aids[i]!=gameInfo["taid"]))continue;
		index++;
		if(index>total) break;
		tr = obj.insertRow(-1);
		tr.className = (i % 2 == 0) ? "sjt1" : "sjt2";
		tr.onmousemove = function(){this.style.background = "#FFC49D";};
		tr.onmouseout = (i % 2 == 0)?(function(){this.style.background="#C6E4F5"}):(function(){this.style.background="#E6F4FB"});
		td = tr.insertCell(-1);
		td.className = "td_lea";
		td.style.background = "#" + matches[mids[i]]["c"];
		td.style.color = "#FFFFFF";
		td.innerHTML = matches[mids[i]]["n"];
		td = tr.insertCell(-1);
		td.className = "td_time";
		td.innerHTML = dates[i];
		tdTeamA = tr.insertCell(-1);
		tdTeamA.className = "td_team_ana";
		td =  tr.insertCell(-1);
		td.className = "td_score";
		tdTeamB = tr.insertCell(-1);
		tdTeamB.className = "td_team_ana";
		tdTeamA.innerHTML ='<span style="color:' +(worls[i]==0?'#ff0000':'#000000')+'">'+teams[aids[i]] + '</span>';
		if (ngs[i] == 1) tdTeamA.innerHTML += '(' + NEUTRAL_STR + ')';
		tdTeamB.innerHTML = '<span style="color:' +(worls[i]==2?'#ff0000':'#000000')+'">'+teams[bids[i]] + '</a>';
		var Tscore = liveAs[i]+liveBs[i];
		if(liveAs[i] > liveBs[i]){
			td.innerHTML = '<font color="#FF0000">' + liveAs[i] + '</font>-' + liveBs[i] + '';	
			if(teamId == aids[i]){
				countStats["tw"]++;		
				countStats[(ngs[i]==1)?"nw":"hw"]++;
			}else{
				countStats["tl"]++;		
				countStats[(ngs[i]==1)?"nl":"al"]++;
			}
		}else if(liveAs[i] < liveBs[i]){
			td.innerHTML = '' + liveAs[i] + '-<font color="#FF0000">' + liveBs[i] + '</font>';	
			if(teamId == aids[i]){
				countStats["tl"]++;		
				countStats[(ngs[i]==1)?"nl":"hl"]++;
			}else{
				countStats["tw"]++;		
				countStats[(ngs[i]==1)?"nw":"aw"]++;
			}
		}else{
			td.innerHTML = '' + liveAs[i] + '-' + liveBs[i] + '';
			countStats["td"]++;
			if(teamId == aids[i]){
				countStats[(ngs[i]==1)?"nd":"hd"]++;
			}else{		
				countStats[(ngs[i]==1)?"nd":"ad"]++;
			}
		}
		//è®©çƒ
		var rqStr = "&nbsp;";
		td =tr.insertCell(-1);
		td.className ="td_or";
		if (rqs[i]!= "")
		{
			countStats["ototal"]++;	
					
			rqStr = RQ_ARR[Math.abs(parseFloat(rqs[i])) * 4];
			if (LANGUAGE_INDEX == 3){	//è¶Šæ–‡çš„è®©çƒè¡¨ç¤ºæ–¹å¼å¯ç›´æŽ¥ç”¨è¿™ç§è¡¨çŽ°æ–¹å¼
				if (rqs[i].indexOf("-") != -1)
					rqStr = HOME_HANDICAP_STR.replace("?", rqStr);
				else
					rqStr = AWAY_HANDICAP_STR.replace("?", rqStr);
			}
			
			if (rqls[i] == 1)
				rqStr = '' + rqStr + '';
			if (rqs[i].indexOf("-") != -1){
				rqFlag = aids[i] ==teamId;
				tdTeamA.innerHTML += '<font color=red>*</font>';
			}else{
				rqFlag = bids[i] ==teamId;
				tdTeamB.innerHTML += '<font color=red>*</font>';
			}
			
			td.innerHTML = rqStr;
		}
		if (redAs[i] > 0)
			tdTeamA.innerHTML= '<img src="http://img.7m.com.cn/icon/r' + redAs[i] + '.gif" />&nbsp;' + tdTeamA.innerHTML;
		if (redBs[i] > 0)
			tdTeamB.innerHTML += '&nbsp;<img src="http://img.7m.com.cn/icon/r' + redBs[i] + '.gif"  />';
		
		//ç›˜è·¯è¾“èµ¢
		td = tr.insertCell(-1);
		if (oworls[i] > -1){ 
			
			var rqf =  parseFloat(rqs[i]) <0;
			if(oworls[i]==2){
				countStats["od"]++;
			}else if((rqFlag &&oworls[i]<2 )||(!rqFlag && oworls[i]>2)){
				countStats["ow"]++;
			}else{
				countStats["ol"]++;
			}
			td.innerHTML = WORL_ARR[oworls[i]];
		} else{
			td.innerHTML = "&nbsp;"; 
		}
		//å¤§å°çƒ
		if((liveAs[i] + liveBs[i])>2.5){
			//tr.insertCell(-1).innerHTML =  OVER_STR;
			countStats["over"]++;
		}else{
			//tr.insertCell(-1).innerHTML =  UNDER_STR;
			countStats["under"]++;
		}
		//å¥‡å¶
		if((liveAs[i] + liveBs[i])%2 ==0){
			//tr.insertCell(-1).innerHTML = EVEN_STR; 
			countStats["even"]++;
		}else{
			//tr.insertCell(-1).innerHTML = ODD_STR;
			countStats["odd"]++;
		}
		//åŠåœº
		tr.insertCell(-1).innerHTML = bcs[i];
		//åŠåœºå¤§å°
		td = tr.insertCell(-1);
		var th_hss =bcs[i].split('-');
		if(th_hss.length == 2){
			if((th_hss[0] + th_hss[1]) > 0.75){
				//td.innerHTML = OVER_STR ;	
				countStats["hover"]++;
			}else{
				//td.innerHTML =  UNDER_STR;
				countStats["hunder"]++;
			}			
		}else{
			td.innerHTML ="&nbsp;";
		}
	}
	var htmlStat="";
	if(countStats["total"]>0){
		var cnlangFlag = (LANGUAGE_STR == "gb" || LANGUAGE_STR == "big");
		var tw_p = (countStats["tw"]*100.0/countStats["total"]).toFixed(2) +"%";
		var td_p = (countStats["td"]*100.0/countStats["total"]).toFixed(2)+"%";
		var tl_p = (countStats["tl"]*100.0/countStats["total"]).toFixed(2)+"%";
		htmlStat = JFWJ_STAT_STR.replace("?1",countStats["total"]).replace("?2",gameInfo["taname"]).replace("?3",countStats["tw"]).replace("p3%",tw_p).replace("?4",countStats["td"]).replace("p4%",td_p).replace("?5",countStats["tl"]).replace("p5%",tl_p);
		if(countStats["ototal"]>0){
			var ow_p = 	(countStats["ow"]*100.0/countStats["ototal"]).toFixed(2)+"%";
			var od_p = 	(countStats["od"]*100.0/countStats["ototal"]).toFixed(2)+"%";
			var ol_p = 	(countStats["ol"]*100.0/countStats["ototal"]).toFixed(2)+"%";
			htmlStat+="<br/>"+JFWJ_PK_STAT_STR.replace("?1",countStats["ototal"]).replace("?2",gameInfo["taname"]).replace("?3",countStats["ow"]).replace("p3%",ow_p).replace("?4",countStats["od"]).replace("p4%",od_p).replace("?5",countStats["ol"]).replace("p5%",ol_p);	
		}
		
		htmlStat+="<br/>"+JFWJ_OUEO_STR.replace("?1",countStats["over"]).replace("?2",countStats["under"]).replace("?3",countStats["even"]).replace("?4",countStats["odd"]).replace("?5",countStats["hover"]).replace("?6",countStats["hunder"]); 
	}
	$$("WJTJ").innerHTML=htmlStat;
	//showWJad();
}
function loadTeamHistory(team,type){
	var data = gameTeamHistory[team][type];
	var matcheIds = data["match"];
	var matches = gameTeamHistory["match"];
	var mContent = "";
	for(var i=0;i<matcheIds.length;i++){
		var checkId = "t_"+ team +"_" + type +"_" +  matcheIds[i];
		mContent+="&nbsp;<input type='checkbox' checked='true' id='" + checkId +"'  value='" + matcheIds[i]  +"'     onclick=\"setTeamHistoryCount('"+ team +"','" + type +"');setTeamHistory('"+ team +"','" + type +"')\"/><label for='" + checkId +"'>&nbsp;"+matches[matcheIds[i]]["n"]+"</label>";
	}
	$$("spnTeamMatch_" + team +"_" + type).innerHTML = mContent;

	var ids = data["history"]["id"];
	var selObj=$$("selTeamHistory_" + team +"_" + type);
	for(var i=0;i<=ids.length;i++){
		selObj.add(new Option(i,i));
	}
	selObj.value = ids.length;
	setTeamHistory(team,type);
}


function setTeamHistoryCount(team,type){
	var mids =gameTeamHistory[team][type]["history"]["mid"];
	var count=0;
	for(var i=0;i<mids.length;i++){
		if($$("t_"+ team +"_" + type +"_" + mids[i]).checked ){
			count++;
		}
	}
	var selObj=$$("selTeamHistory_" + team +"_" + type);
	for(var i=selObj.options.length-1;i>=0;i--){
		selObj.remove(i);	
	}
	for(var i=0;i<=count;i++){
		selObj.add(new Option(i,i));
	}
	selObj.value = count;

}
function setTeamHistory(team,type){
	var hdata = gameTeamHistory[team][type]["history"];
	var total = parseInt($$("selTeamHistory_" + team +"_" + type).value);
	var obj = $$("tbTeamHistory_" + team +"_" + type);
	for(var i=obj.rows.length-1;i>=2;i--){
		obj.deleteRow(i);
	}
	var selMids={};
	var ms = $$("spnTeamMatch_" + team +"_" + type).getElementsByTagName("input");
	for(var i=0;i<ms.length;i++){
		if(ms[i].checked){
			selMids[ms[i].value]=1;
		}
	}
	var teamId = team =="A"?gameInfo["taid"]:gameInfo["tbid"];
	var isShowNotice = $$("chkTeamNote" + team).checked;
	var ids = hdata["id"];
	var mids = hdata["mid"];
	var aids = hdata["aid"];
	var bids = hdata["bid"];
	var dates = hdata["date"];
	var liveAs = hdata["liveA"];
	var liveBs = hdata["liveB"];
	var redAs = hdata["redA"];
	var redBs = hdata["redB"];
	var bcs = hdata["bc"];
	var ngs = hdata["ng"];
	var rqs = hdata["rq"];
	var rqls = hdata["rql"];
	var worls = hdata["worl"];
	var oworls = hdata["oworl"];
	var teams = hdata["team"];
	var notes = gameTeamHistory["note"];
	
	var tr,td,tdTeamA,tdTeamB;
	var index=0;
	var countStats={"total":total,"tw":0,"td":0,"tl":0,"hw":0,"hd":0,"hl":0,"nw":0,"nd":0,"nl":0,"aw":0,"ad":0,"al":0,"ototal":0,"ow":0,"od":0,"ol":0,"over":0,"under":0,"even":0,"odd":0,"hover":0,"hunder":0};
	
	
	for(var i=0;i<ids.length;i++){
		if(selMids[mids[i]]==null)continue;
		index++;
		if(index>total) break;
		if ( index == 2 && lanFlag  ){ 
			if(team=="A" &&typeof(history_ad)!="undefined" && history_ad !="" ){
				tr = obj.insertRow(-1);
				td = tr.insertCell(-1);
				td.colSpan = 15;
				td.align = "center";
				td.innerHTML =  history_ad;
				if(typeof(history_ad2) == "undefined") history_ad2 = history_ad;
			}else if(team=="B" &&typeof(history_ad2)!="undefined" && history_ad2 !=""){
				tr = obj.insertRow(-1);
				td = tr.insertCell(-1);
				td.colSpan = 15;
				td.align = "center";
				td.innerHTML =  history_ad2;
			}
		}
		
		tr = obj.insertRow(-1);
		tr.onmousemove = function(){this.style.background = "#FFC49D";};
		if(team =="A"){
			if(i%2==0){
				tr.className = "sjt1";
				tr.onmouseout=function(){this.style.background="#C6E4F5"};
			}else{
				tr.className = "sjt2";
				tr.onmouseout=function(){this.style.background="#E6F4FB"};
			}
		}else{
			if(i%2==0){
				tr.className = "sjt3";
				tr.onmouseout=function(){this.style.background="#DCF4C5"};
			}else{
				tr.className = "sjt4";
				tr.onmouseout=function(){this.style.background="#F0FAE5"};
			}
		}
		
		td = tr.insertCell(-1);
		td.className = "sjcc1";
		td.style.background = "#" + gameTeamHistory["match"][mids[i]]["c"];
		td.style.color = "#FFFFFF";
		td.innerHTML = gameTeamHistory["match"][mids[i]]["n"];
		td = tr.insertCell(-1);
		td.className = "d1";
		td.innerHTML = dates[i];
		tdTeamA = tr.insertCell(-1);
		td =  tr.insertCell(-1);
		tdTeamB = tr.insertCell(-1);
		tdTeamA.innerHTML ='<span style="color:' +(teamId ==aids[i]?TEAM_HIS_COLOR_ARR[worls[i]]:'#000000')+'">'+gameTeamHistory["team"][aids[i]] + '</span>';
		if (ngs[i] == 1) tdTeamA.innerHTML += '(' + NEUTRAL_STR + ')';
		
		tdTeamB.innerHTML = '<span style="color:' +(teamId ==bids[i]?TEAM_HIS_COLOR_ARR[worls[i]]:'#000000')+'">'+gameTeamHistory["team"][bids[i]] + '</span>';
		var Tscore = liveAs[i]+liveBs[i];
		if(liveAs[i] > liveBs[i]){
			td.innerHTML = '<font color="#FF0000">' + liveAs[i] + '</font>-' + liveBs[i] + '';	
			if(teamId == aids[i]){
				countStats["tw"]++;		
				countStats[(ngs[i]==1)?"nw":"hw"]++;
			}else{
				countStats["tl"]++;		
				countStats[(ngs[i]==1)?"nl":"al"]++;
			}
			
		}else if(liveAs[i] < liveBs[i]){
			td.innerHTML = '' + liveAs[i] + '-<font color="#FF0000">' + liveBs[i] + '</font>';	
			if(teamId == aids[i]){
				countStats["tl"]++;		
				countStats[(ngs[i]==1)?"nl":"hl"]++;
			}else{
				countStats["tw"]++;		
				countStats[(ngs[i]==1)?"nw":"aw"]++;
			}
		}else{
			td.innerHTML = '' + liveAs[i] + '-' + liveBs[i] + '';
			countStats["td"]++;
			if(teamId == aids[i]){
				countStats[(ngs[i]==1)?"nd":"hd"]++;
			}else{		
				countStats[(ngs[i]==1)?"nd":"ad"]++;
			}
		}
		//èƒœè´Ÿ
		td = tr.insertCell(-1);
		td.innerHTML = VORD_ARR[worls[i]];
		//è®©çƒ
		var rqStr = "&nbsp;";
		if (rqs[i]!= "")
		{
			countStats["ototal"]++;
			rqStr = RQ_ARR[Math.abs(parseFloat(rqs[i])) * 4];
			if (LANGUAGE_INDEX == 3)	//è¶Šæ–‡çš„è®©çƒè¡¨ç¤ºæ–¹å¼æ¯”è¾ƒç‰¹æ®Š
			{
				if (rqs[i].indexOf("-") != -1)
					rqStr = HOME_HANDICAP_STR.replace("?", rqStr);
				else
					rqStr = AWAY_HANDICAP_STR.replace("?", rqStr);
			}
			else
			{
				if ((rqs[i].indexOf("-") != -1 && aids[i] == teamId) || (rqs[i].indexOf("-") == -1 && bids[i] == teamId))
					rqStr = HOME_HANDICAP_STR.replace("?", rqStr);
				else
					rqStr = AWAY_HANDICAP_STR.replace("?", rqStr);
			}
			if (rqls[i] == 1)
				rqStr = '' + rqStr + '';
				
			if (rqs[i].indexOf("-") != -1)
				tdTeamA.innerHTML += '<font color=red>*</font>';
			else
				tdTeamB.innerHTML += '<font color=red>*</font>';
		}
		if (redAs[i] > 0)
			tdTeamA.innerHTML= '<img src="http://img.7m.com.cn/icon/r' + redAs[i] + '.gif" >&nbsp;' + tdTeamA.innerHTML;
		if (redBs[i] > 0)
			tdTeamB.innerHTML += '&nbsp;<img src="http://img.7m.com.cn/icon/r' + redBs[i] + '.gif">';
		//td = tr.insertCell(-1);
		td.innerHTML = rqStr;
		
		//ç›˜è·¯è¾“èµ¢
		td = tr.insertCell(-1);
		if (oworls[i] > -1){ 
			
			if(oworls[i]==2){
				countStats["od"]++;
			}else if(oworls[i]<2){
				countStats["ow"]++;
			}else{
				countStats["ol"]++;
			}
			td.innerHTML = WORL_ARR[oworls[i]];
		} else{
			td.innerHTML = "&nbsp;"; 
		}	
		//å¤§å°çƒ
		//td = tr.insertCell(-1);
		if((liveAs[i] + liveBs[i])>2.5){
			//td.innerHTML =  OVER_STR;
			countStats["over"]++;
		}else{
			//td.innerHTML =  UNDER_STR;
			countStats["under"]++;
		}
	
		//å¥‡å¶
		//td = tr.insertCell(-1);;
		if((liveAs[i] + liveBs[i])%2 ==0){
			//td.innerHTML = EVEN_STR; 
			countStats["even"]++;
		}else{
			//td.innerHTML = ODD_STR;
			countStats["odd"]++;
		}
		
		//åŠåœº
		td = tr.insertCell(-1);
		td.innerHTML = bcs[i];
		//åŠåœºå¤§å°
		//td = tr.insertCell(-1);
		var th_hss =bcs[i].split('-');
		if(th_hss.length == 2){
			if((th_hss[0] + th_hss[1]) > 0.75){
				//td.innerHTML = OVER_STR ;	
				countStats["hover"]++;
			}else{
				//td.innerHTML =  UNDER_STR;
				countStats["hunder"]++;
			}			
		}else{
			td.innerHTML ="&nbsp;";
		}
		if (isShowNotice&&notes[ids[i]] !=null)
		{
			var note = notes[ids[i]];
			tr = obj.insertRow(-1);
			td = tr.insertCell(-1);
			td.colSpan = 15;
			td.align = "center";
			if(note.indexOf('<br/>')==0){
				note=note.substr(5);
			}
			td.innerHTML =note;			
		}
	}

	var htmlStat="";
	if(countStats["total"]>0){
		var cnlangFlag = (LANGUAGE_STR == "gb" || LANGUAGE_STR == "big");
		var tw_p = (countStats["tw"]*100.0/countStats["total"]).toFixed(2) +"%";
		var td_p = (countStats["td"]*100.0/countStats["total"]).toFixed(2)+"%";
		var tl_p = (countStats["tl"]*100.0/countStats["total"]).toFixed(2)+"%";
		htmlStat+=JFWJ_STAT_STR.replace("?1",countStats["total"]).replace("<strong>?2</strong>","").replace("?3",countStats["tw"]).replace("p3%",tw_p).replace("?4",countStats["td"]).replace("p4%",td_p ).replace("?5",countStats["tl"]).replace("p5%",tl_p );
	
		if(countStats["ototal"]>0){
			var ow_p = 	(countStats["ow"]*100.0/countStats["ototal"]).toFixed(2)+"%";
			var od_p = 	(countStats["od"]*100.0/countStats["ototal"]).toFixed(2)+"%";
			var ol_p = 	(countStats["ol"]*100.0/countStats["ototal"]).toFixed(2)+"%";
			htmlStat+="<br/>"+JFWJ_PK_STAT_STR.replace("?1",countStats["ototal"]).replace("<strong>?2</strong>","").replace("?3",countStats["ow"]).replace("p3%",ow_p).replace("?4",countStats["od"]).replace("p4%",od_p).replace("?5",countStats["ol"]).replace("p5%",ol_p);
		}
		htmlStat+="<br/>"+JFWJ_OUEO_STR.replace("?1",countStats["over"]).replace("?2",countStats["under"]).replace("?3",countStats["even"]).replace("?4",countStats["odd"]).replace("?5",countStats["hover"]).replace("?6",countStats["hunder"]); 
	
	}
	
	$$("divTeamHistroyStat_"+team+"_" + type).innerHTML=htmlStat;	
	if(countStats["total"]>0){
		
		countStats["tw_p"] = (countStats["tw"]*100.0 / countStats["total"]).toFixed(2) + "%";
		countStats["td_p"] = (countStats["td"]*100.0 / countStats["total"]).toFixed(2) + "%";
		countStats["tl_p"] = (countStats["tl"]*100.0 / countStats["total"]).toFixed(2) + "%";
	}else{
		countStats["tw_p"] = "0.00%";
		countStats["td_p"] = "0.00%";
		countStats["tl_p"] = "0.00%";
	}
	var total = countStats["hw"] + countStats["hd"] + countStats["hl"] ;
	if(total>0){
		countStats["hw_p"] = (countStats["hw"]*100.0 / total).toFixed(2) + "%";
		countStats["hd_p"] = (countStats["hd"]*100.0 / total).toFixed(2) + "%";
		countStats["hl_p"] = (countStats["hl"]*100.0 / total).toFixed(2) + "%";																 
	}else{
		countStats["hw_p"] ="0.00%";
		countStats["hd_p"] = "0.00%";
		countStats["hl_p"] = "0.00%";
	}
	total = countStats["nw"] + countStats["nd"] + countStats["nl"] ;
	if(total>0){
		countStats["nw_p"] = (countStats["nw"]*100.0 / total).toFixed(2) + "%";
		countStats["nd_p"] = (countStats["nd"]*100.0 / total).toFixed(2) + "%";
		countStats["nl_p"] = (countStats["nl"]*100.0 / total).toFixed(2) + "%";																 
	}else{
		countStats["nw_p"] ="0.00%";
		countStats["nd_p"] = "0.00%";
		countStats["nl_p"] = "0.00%";
	}
	total = countStats["aw"] + countStats["ad"] + countStats["al"] ;
	if(total>0){
		countStats["aw_p"] = (countStats["aw"]*100.0 / total).toFixed(2) + "%";
		countStats["ad_p"] = (countStats["ad"]*100.0 / total).toFixed(2) + "%";
		countStats["al_p"] = (countStats["al"]*100.0 / total).toFixed(2) + "%";																 
	}else{
		countStats["aw_p"] ="0.00%";
		countStats["ad_p"] = "0.00%";
		countStats["al_p"] = "0.00%";
	}
	var fields =["tw","td","tl","hw","hd","hl","nw","nd","nl","aw","ad","al"];
	var tr1index = LANGUAGE_INDEX != 6 ? 1 : 2;
	var tr2index = LANGUAGE_INDEX != 6 ? 2 : 3;
	var tr1 = $$("tbTeamHistoryStat_"+team+"_" + type).rows[tr1index];
	var tr2 = $$("tbTeamHistoryStat_"+team+"_" + type).rows[tr2index];
	for(var i= 0;i<fields.length;i++){
		tr1.cells[i].innerHTML = countStats[fields[i]];
		tr2.cells[i].innerHTML = countStats[fields[i]+"_p"];
	}
	if(gameInfo["neutral"]=="0"){
		if(team=="A"){
			tr1.cells[3].className = tr2.cells[3].className ="awayt1";
			tr1.cells[4].className= tr2.cells[4].className ="awayt1";
			tr1.cells[5].className= tr2.cells[5].className ="awayt1";
		}else{
			tr1.cells[9].className = tr2.cells[9].className ="awayt1";
			tr1.cells[10].className= tr2.cells[10].className ="awayt1";
			tr1.cells[11].className= tr2.cells[11].className ="awayt1";
		}
	}else{
		tr1.cells[6].className = tr2.cells[6].className ="awayt1";
		tr1.cells[7].className= tr2.cells[7].className ="awayt1";
		tr1.cells[8].className= tr2.cells[8].className ="awayt1";
	}
}

function showTeamNote(obj,team){
	setCookie("thn" + team,(obj.checked?"1":"0"),365);
	if(team =="A"){
		if($$("divTeamHistoryA0").style.display!="none"){
			loadTeamHistory("A","all");
		}else{
			loadTeamHistory("A","home");
		}
	}else{
		if($$("divTeamHistoryB0").style.display!="none"){
			loadTeamHistory("B","all");
		}else{
			loadTeamHistory("B","away");
		}
	}	
}

var loadTeamHistoryDataCount = 0;
function iniTeamHistory(){
	if(typeof(gameTeamHistory)!="undefined"){
		if(typeof(gameTeamHistory["A"]["all"]["history"])!='undefined' && gameTeamHistory["A"]["all"]["history"]["id"].length>0){
			$$("dtTeamHistoryTitleA").innerHTML = gameInfo["taname"] +  " - " + $$("dtTeamHistoryTitleA").innerHTML ;
			$$("divTeamHistoryA").style.display = "";
			var noteFlag = getCookie("thnA");
			$$("chkTeamNoteA").checked = (noteFlag==null||noteFlag=="" || noteFlag == 1);
			if(typeof(gameTeamHistory["A"]["home"]["history"])!='undefined' && gameTeamHistory["A"]["home"]["history"]["id"].length>0){
				$$("ddTabA1").style.display = "";
			}
			loadTeamHistory("A","all");
		}
		if(typeof(gameTeamHistory["B"]["all"]["history"])!='undefined' && gameTeamHistory["B"]["all"]["history"]["id"].length>0){
			$$("dtTeamHistoryTitleB").innerHTML = gameInfo["tbname"] +  " - " + $$("dtTeamHistoryTitleB").innerHTML ;
			$$("divTeamHistoryB").style.display = "";
			var noteFlag = getCookie("thnB");
			$$("chkTeamNoteB").checked = (noteFlag==null||noteFlag=="" || noteFlag == 1);
			
			if(typeof(gameTeamHistory["B"]["away"]["history"])!='undefined' && gameTeamHistory["B"]["away"]["history"]["id"].length>0){
				$$("ddTabB1").style.display = "";
			}
			loadTeamHistory("B","all");
		}
	}else{
		if(loadTeamHistoryDataCount<=2){
			loadTeamHistoryDataCount ++;
			LoadJS("http://" + analyseHost +"/" + gameId + "/data/gameteamhistory_" +  LANGUAGE_STR +".js?f=" + new Date().valueOf(),iniTeamHistory);	
		}
	}
}

var  teamHistoryFlag = [false,false];
function showTS(team,index){
	if(index==1){
		if(team=="A" && !teamHistoryFlag[0]){
			loadTeamHistory("A","home");
			teamHistoryFlag[0] = true;
		}else if(team=="B" && !teamHistoryFlag[1]){
			loadTeamHistory("B","away");
			teamHistoryFlag[1] = true;
		}
	}
	$$("ddTab" +  team + index).className ="tab_sel";
	$$("ddTab" + team + ((index+1)%2)).className =""
	$$("divTeamHistory" + team +index).style.display ="";
	$$("divTeamHistory" + team +((index+1)%2)).style.display ="none";
	
}


function loadTeamGoalCount(team){
	var tr = $$("tbTeamGoalCount" + team).rows[2];
	var data= gameTeamStats[team];
	var fields = ["t0-1","t2-3","t4-6","t7+","todd","tevent"]
	for(var i=0;i<6;i++){
		tr.cells[i+1].innerHTML = data[fields[i]];
	}
}


function loadTeamGoalStats(team){
	var tb= $$("tbTeamGoalStats" + team);
	var data= gameTeamStats[team];
	fields = [["t_w2+","t_w1","t_d","t_l1","t_l2+","t_g0","t_g1","t_g2","t_g3+"],
			   ["t_w2+_p","t_w1_p","t_d_p","t_l1_p","t_l2+_p","t_g0_p","t_g1_p","t_g2_p","t_g3+_p"],
			   ["h_w2+","h_w1","h_d","h_l1","h_l2+","h_g0","h_g1","h_g2","h_g3+"],
			   ["h_w2+_p","h_w1_p","h_d_p","h_l1_p","h_l2+_p","h_g0_p","h_g1_p","h_g2_p","h_g3+_p"],
			   ["n_w2+","n_w1","n_d","n_l1","n_l2+","n_g0","n_g1","n_g2","n_g3+"],
			   ["n_w2+_p","n_w1_p","n_d_p","n_l1_p","n_l2+_p","n_g0_p","n_g1_p","n_g2_p","n_g3+_p"],
			   ["a_w2+","a_w1","a_d","a_l1","a_l2+","a_g0","a_g1","a_g2","a_g3+"],
			   ["a_w2+_p","a_w1_p","a_d_p","a_l1_p","a_l2+_p","a_g0_p","a_g1_p","a_g2_p","a_g3+_p"]
			   ];
	for(var i= 0;i<fields.length;i++){
		var pre = i%2==0?1:0;
		var tr = tb.rows[2 +i];
		for(var j=0;j<fields[i].length;j++){
			tr.cells[pre+j].innerHTML =data[fields[i][j]]; 
		}
	}
	var rowIndexs;
	if(gameInfo["neutral"]=="1"){
		rowIndexs = [6,7]
	}else{
		if(team=="A"){
			rowIndexs = [4,5];
		}else{
			rowIndexs =[8,9];	
		}	
	}
	for(var j=1;j<tb.rows[rowIndexs[0]].cells.length;j++){
		tb.rows[rowIndexs[0]].cells[j].style.backgroundColor="#ffc49d";
	}	
	for(var j=0;j<tb.rows[rowIndexs[1]].cells.length;j++){
		tb.rows[rowIndexs[1]].cells[j].style.backgroundColor="#ffc49d";
	}
}

function loadTeamOddsStats(team){
	var tb= $$("tbTeamOddsstat" + team);
	var data= gameTeamStats[team];
	fields = [["t_hw","t_hd","t_hl","t_lw","t_ld","t_ll","t_dw","t_dd","t_dl"],
			   ["t_hw_p","t_hd_p","t_hl_p","t_lw_p","t_ld_p","t_ll_p","t_dw_p","t_dd_p","t_dl_p"],
			   ["h_hw","h_hd","h_hl","h_lw","h_ld","h_ll","h_dw","h_dd","h_dl"],
			   ["h_hw_p","h_hd_p","h_hl_p","h_lw_p","h_ld_p","h_ll_p","h_dw_p","h_dd_p","h_dl_p"],
			   ["n_hw","n_hd","n_hl","n_lw","n_ld","n_ll","n_dw","n_dd","n_dl"],
			   ["n_hw_p","n_hd_p","n_hl_p","n_lw_p","n_ld_p","n_ll_p","n_dw_p","n_dd_p","n_dl_p"],
			   ["a_hw","a_hd","a_hl","a_lw","a_ld","a_ll","a_dw","a_dd","a_dl"],
			   ["a_hw_p","a_hd_p","a_hl_p","a_lw_p","a_ld_p","a_ll_p","a_dw_p","a_dd_p","a_dl_p"]
			   ];
	for(var i= 0;i<fields.length;i++){
		var pre = i%2==0?1:0;
		var trindex = LANGUAGE_INDEX != 6 ? 2 : 3;
		var tr =tb.rows[trindex +i];
		for(var j=0;j<fields[i].length;j++){
			tr.cells[pre+j].innerHTML =data[fields[i][j]]; 
		}		
	}
	
	var rowIndexs;
	if(gameInfo["neutral"]==1){
		rowIndexs = LANGUAGE_INDEX != 6 ? [6,7] : [7,8];
	}else{
		if(team=="A"){
			rowIndexs = LANGUAGE_INDEX != 6 ? [4,5] : [5,6];
		}else{
			rowIndexs = LANGUAGE_INDEX != 6 ? [8,9] : [9,10];
		}	
	}
	for(var j=1;j<tb.rows[rowIndexs[0]].cells.length;j++){
			tb.rows[rowIndexs[0]].cells[j].style.backgroundColor="#ffc49d";
	}	
	for(var j=0;j<tb.rows[rowIndexs[1]].cells.length;j++){
			tb.rows[rowIndexs[1]].cells[j].style.backgroundColor="#ffc49d";
	}
	
	if(team=="A"){
		if(gameInfo["handicap"]!=""){
			var handicap =parseFloat(gameInfo["handicap"]);
			var cIndexs=[-1,-1,-1];
			if(handicap<=0){
				cIndexs= [0,1,2];
			}else{
				cIndexs= [3,4,5];
			}
			var istart = LANGUAGE_INDEX != 6 ? 2 : 3;
			var iend =  LANGUAGE_INDEX != 6 ? 10 : 11;
			for(var i=istart;i<iend;i++){
				if (LANGUAGE_INDEX == 6){
					iadd = (i%2==0?0:1);
				} else {
					iadd = (i%2==0?1:0);
				}
				console.log(iadd);
				tb.rows[i].cells[cIndexs[0] + iadd].className +=" awayt1";
				tb.rows[i].cells[cIndexs[1] + iadd].className +=" awayt1";
				tb.rows[i].cells[cIndexs[2] + iadd].className +=" awayt1";
			}	
		}
	}else{
		if(gameInfo["handicap"]!=""){
			var handicap =parseFloat(gameInfo["handicap"]);
			var cIndexs=[-1,-1,-1];
			if(handicap<=0){
				cIndexs=[3,4,5];
			}else{
				cIndexs=[0,1,2];
			}
			var istart = LANGUAGE_INDEX != 6 ? 2 : 3;
			var iend =  LANGUAGE_INDEX != 6 ? 10 : 11;
			for(var i=istart;i<iend;i++){
				if (LANGUAGE_INDEX == 6){
					iadd = (i%2==0?0:1);
				} else {
					iadd = (i%2==0?1:0);
				}
				tb.rows[i].cells[cIndexs[0] + iadd].className +=" awayt1";
				tb.rows[i].cells[cIndexs[1] + iadd].className +=" awayt1";
				tb.rows[i].cells[cIndexs[2] + iadd].className +=" awayt1";
			}	
		}
	}
}

var loadTeamStatsDataCount = 0;
function iniTeamStats(){
	if(typeof(gameTeamStats)!="undefined"){
		$$("tbTeamGoalCountA").rows[0].cells[0].innerHTML =gameInfo["taname"] + " - " + $$("tbTeamGoalCountA").rows[0].cells[0].innerHTML;
		loadTeamGoalCount("A");
		$$("divTeamGoalCountA").style.display = "";
		//$$("tbTeamGoalStatsA").rows[0].cells[0].innerHTML =gameInfo["taname"] + " - " + $$("tbTeamGoalStatsA").rows[0].cells[0].innerHTML;
		//loadTeamGoalStats("A");
		//$$("divTeamGoalStatsA").style.display = "";
		var data = gameTeamStats["A"];
		if((data["t_hw"] + data["t_hd"] + data["t_hl"] + data["t_lw"]  + data["t_ld"] + data["t_ll"] + data["t_dw"]  + data["t_dd"] + data["t_dl"]) >0){
			//$$("tbTeamOddsstatA").rows[0].cells[0].innerHTML =gameInfo["taname"] + " - " + $$("tbTeamOddsstatA").rows[0].cells[0].innerHTML;
			//loadTeamOddsStats("A");
			//$$("divTeamOddsstatA").style.display="";
		}
		//$$("tbTeamGoalCountB").rows[0].cells[0].innerHTML =gameInfo["tbname"] + " - " + $$("tbTeamGoalCountB").rows[0].cells[0].innerHTML;
		loadTeamGoalCount("B");
		$$("divTeamGoalCountB").style.display = "";
		$$("tbTeamGoalStatsB").rows[0].cells[0].innerHTML =gameInfo["tbname"] + " - " + $$("tbTeamGoalStatsB").rows[0].cells[0].innerHTML;
		loadTeamGoalStats("B");
		$$("divTeamGoalStatsB").style.display = "";
		var data = gameTeamStats["B"];
		if((data["t_hw"] + data["t_hd"] + data["t_hl"] + data["t_lw"]  + data["t_ld"] + data["t_ll"] + data["t_dw"]  + data["t_dd"] + data["t_dl"]) >0){
			$$("tbTeamOddsstatB").rows[0].cells[0].innerHTML =gameInfo["tbname"] + " - " + $$("tbTeamOddsstatB").rows[0].cells[0].innerHTML;
			loadTeamOddsStats("B");
			$$("divTeamOddsstatB").style.display="";
		}	
	}else{
		if(loadTeamStatsDataCount<=2){
			loadTeamStatsDataCount ++;
			LoadJS("http://" + analyseHost +"/" + gameId + "/data/gameteamstats.js?f=" + new Date().valueOf(),iniTeamStats);	
		}
	}
}

function loadTeamFixture(team){
	var data = gameTeamFixture[team];
	var mids = data["mid"];
	var aids = data["aid"];
	var bids = data["bid"];
	var times = data["time"];
	var neutrals = data["neutral"];
	var tr,td;
	var tb = $$("tbTeamFixture" + team);
	for(var i=0;i<mids.length;i++){
		tr = tb.insertRow(-1);
		if(team=="A"){
			tr.className = (i % 2 == 0) ? "sjt1" : "sjt2";	
		}else{
			tr.className = (i % 2 == 0) ? "sjt3" : "sjt4";
		}		
		td = tr.insertCell(-1);
		td.className = "sc_td_lea";
		td.style.background = "#" + gameTeamFixture["match"][mids[i]]["c"];
		td.style.color="#FFFFFF";
		td.innerHTML= gameTeamFixture["match"][mids[i]]["n"];
		td = tr.insertCell(-1);
		td.className = "sc_td_times";
		td.innerHTML =getDateByValue(parseFloat(times[i])).toString(fulldateFormat) ;
		td = tr.insertCell(-1);
		td.className = "sc_td_team";
		td.innerHTML ='<a href="javascript:' + TEAM_LINK + '(' + aids[i] + ')">' +gameTeamFixture["team"][aids[i]]+   (typeof(neutrals)!="undefined"&&neutrals[i]==1?('(' + NEUTRAL_STR +')'):'')    +'</a>';
		
		td = tr.insertCell(-1);
		td.className = "sc_td_score";
		td.innerHTML = "VS";
		
		td = tr.insertCell(-1);
		td.className = "sc_td_team";
		td.innerHTML = '<a href="javascript:' + TEAM_LINK + '(' + bids[i] + ')">' +gameTeamFixture["team"][bids[i]]+ '</a>';
	}
}



var loadTeamFixtureCount = 0;
function iniTeamFixture(){
	if(typeof(gameTeamFixture)!="undefined"){
		if(gameTeamFixture["A"]["mid"].length>0){
			$$("tbTeamFixtureA").rows[0].cells[0].innerHTML = gameInfo["taname"]  + " - " + $$("tbTeamFixtureA").rows[0].cells[0].innerHTML ;
			loadTeamFixture("A");
			$$("divTeamFixtureA").style.display ="";
		}
		if(gameTeamFixture["B"]["mid"].length>0){
			$$("tbTeamFixtureB").rows[0].cells[0].innerHTML = gameInfo["tbname"]  + " - " + $$("tbTeamFixtureB").rows[0].cells[0].innerHTML ;
			loadTeamFixture("B");
			$$("divTeamFixtureB").style.display ="";
		}
	}else{
		if(loadTeamFixtureCount<=2){
			loadTeamFixtureCount ++;
			LoadJS("http://" + analyseHost +"/" + gameId + "/data/gameteamhistory_" +  LANGUAGE_STR +".js?f=" + new Date().valueOf(),iniTeamFixture);	
		}
	}

}

var loadPredictionCount = 0;
function loadPrediction(){
	if(typeof(gamePrediction)!="undefined" && gamePrediction!=null ){
		
		if (typeof(analyse_news) != "undefined"){
			$$("predictions_tb").width = "424px";	
		}else{
			$$("predictions_tb").width = "100%";
			$$("predictions_news_tb").rows[0].deleteCell(1);
			$$("predictions_news_tb").rows[0].deleteCell(1);
		}
		$$("predictions_tb").rows[1].cells[0].innerHTML = "<strong>" + gameInfo["taname"] + "</strong>";
		$$("predictions_tb").rows[1].cells[1].innerHTML = "<strong>" + gameInfo["tbname"] + "</strong>";
		$$("predictions_recent_h").innerHTML = gamePrediction["hr"];
		$$("predictions_recent_a").innerHTML = gamePrediction["ar"];
		$$("predictions_handicap_h").innerHTML = gamePrediction["hh"];
		$$("predictions_handicap_a").innerHTML = gamePrediction["ah"];
		$$("predictions_confidence").innerHTML = gamePrediction["p"] + " " + gamePrediction["cf"] ;
		$$("predictions_recent_match").innerHTML = gameInfo["taname"] + " " + gamePrediction["rm"];
		$$("predictions_tb").rows[5].cells[0].innerHTML = gamePrediction["ct"];
		$$("predictions_tb").style.display = "";
		$$("predictions_news_body").style.display = "";
	
	}else{
		if(loadPredictionCount<=2){
			loadPredictionCount ++;
			LoadJS("http://" + analyseHost +"/" + gameId + "/data/gameprediction_" +  LANGUAGE_STR +".js?f=" + new Date().valueOf(),loadPrediction);	
		}
	}
}





var Standing_sHeader = '<table borderColor="#FFFFFF" cellpadding="2" cellspacing="0" width="100%" class="jfbtb1" border="1">' +
							'<tr class="jfbtb2">' +
								'<td width="8%" onclick="SortColumn(0, this)" style="cursor:pointer" title="' + SORTSTR + '">' + STANDING_HEADER[0] + '</td>' +
								'<td width="30%">' + STANDING_HEADER[1] + '</td>' +
								'<td onclick="SortColumn(2, this)" style="cursor:pointer" title="' + SORTSTR + '">' + STANDING_HEADER[2] + '</td>' +
								'<td onclick="SortColumn(3, this)" style="cursor:pointer" title="' + SORTSTR + '">' + STANDING_HEADER[3] + '</td>' +
								'<td onclick="SortColumn(4, this)" style="cursor:pointer" title="' + SORTSTR + '">' + STANDING_HEADER[4] + '</td>' +
								'<td onclick="SortColumn(5, this)" style="cursor:pointer" title="' + SORTSTR + '">' + STANDING_HEADER[5] + '</td>' +
								'<td onclick="SortColumn(6, this)" style="cursor:pointer" title="' + SORTSTR + '">' + STANDING_HEADER[6] + '</td>' +
								'<td onclick="SortColumn(7, this)" style="cursor:pointer" title="' + SORTSTR + '">' + STANDING_HEADER[7] + '</td>' +
								'<td onclick="SortColumn(8, this)" style="cursor:pointer" title="' + SORTSTR + '">' + STANDING_HEADER[8] + '</td>' +
								'<td width="15%">' + STANDING_HEADER[9] + '</td>' +
							'</tr>';
var Standing_sHeader2 = '<table borderColor="#FFFFFF" cellpadding="2" cellspacing="0" width="100%" class="jfbtb1" border="1">' +
							'<tr class="jfbtb2">' +
								'<td width="8%">' + STANDING_HEADER[0] + '</td>' +
								'<td width="30%">' + STANDING_HEADER[1] + '</td>' +
								'<td>' + STANDING_HEADER[2] + '</td>' +
								'<td>' + STANDING_HEADER[3] + '</td>' +
								'<td>' + STANDING_HEADER[4] + '</td>' +
								'<td>' + STANDING_HEADER[5] + '</td>' +
								'<td>' + STANDING_HEADER[6] + '</td>' +
								'<td>' + STANDING_HEADER[7] + '</td>' +
								'<td>' + STANDING_HEADER[8] + '</td>' +
								'<td width="15%">' + STANDING_HEADER[9] + '</td>' +
							'</tr>';

function SortColumn(cell, tdobj){
	var pan = tdobj.parentNode.parentNode.parentNode.parentNode;
	var obj = tdobj.parentNode.parentNode.parentNode;
	var rows_Arr = new Array();
	for (var i = 1; i < obj.rows.length; ++i){
		if (obj.rows[i].cells.length > 2){
			var v = obj.rows[i].cells[cell].innerHTML;
			rows_Arr.push(new Array(Number(v), obj.rows[i].outerHTML + (i < obj.rows.length - 1 && obj.rows[i+1].cells.length < 3 ? obj.rows[i+1].outerHTML : "")));
		}
	}
	if (sortTp == 0){
		rows_Arr.sort(sortA);
		sortTp = 1;
	}else{
		rows_Arr.sort(sortD);
		sortTp = 0;
	}
	
	var tbstr = "";
	for(var i = 0; i < rows_Arr.length; ++i){
		tbstr += rows_Arr[i][1];
	}
	obj.parentNode.innerHTML = Standing_sHeader + tbstr + '</table>';
	UpdateStandingsRowsClr(pan.childNodes[0]);
}


function UpdateStandingsRowsClr(obj){
	var bgclr = "";
	for (var i = 1; i < obj.rows.length; ++i)
	{
		bgclr = (i % 2 == 0) ? "tr_l0" : "tr_l1";
		if (obj.rows[i].className.indexOf("tr_sel") != -1)
			obj.rows[i].className = bgclr + " tr_sel";
		else
			obj.rows[i].className = bgclr;
	}
}


var arrStandingHtml = [["","",""],["","",""],["","",""],["","",""],["","",""]];
var sortTp = 0;
function sortA(x,y){if(x[0]<y[0]){return -1;}else if(x[0]>y[0]){return 1;}else{return 0;}}
function sortD(x,y){if(x[0]>y[0]){return -1;}else if(x[0]<y[0]){return 1;}else{return 0;}}
function loadLeagueStanding(typeIndex){

	if(arrStandingHtml[0][typeIndex]==""){
		var type = typeIndex==0?"total":(typeIndex==1?"home":"away");
		var data = gameStanding["data"][type];
		arrStandingHtml[0][typeIndex] = Standing_sHeader + getStandingHtml(gameStanding["data"][type]);
	}
	//$$("s_std_0").innerHTML = arrStandingHtml[0][typeIndex];
}

function loadCupStanding(){
	//$$("s_std_0").innerHTML  = Standing_sHeader2 + getStandingHtml(gameStanding["data"]["total"]);
}

function loadTypeStanding(type,tag){
	if(arrStandingHtml[type][tag]==""){
		var data = gameStanding["data"][type][ tag==0?"total":(tag==1?"home":"away")];
		arrStandingHtml[type][tag]= Standing_sHeader + getStandingHtml(data);
	}
	$$("s_std_" + type).innerHTML =arrStandingHtml[type][tag];
}



function getStandingHtml(data){
	var html= [];
	var group = "";
	var rank=1;
	for(var i=0;i<data.length;i++){
		if(data[i][10] !="" && data[i][10]!=group){
			html.push("<tr><td colspan='11' style='font-weight: bold; padding-left: 12px; letter-spacing: 4px; background-color: #EEEEEE;'>" + GROUP_STR.replace("?", data[i][10]) + "</td></tr>");
			group = data[i][10];
			rank=1;
		}
		var bg_Clr = (data[i][0] == gameInfo["taid"] || data[i][0] == gameInfo["tbid"]) ?"bgcolor='#99ccff'":""; 
		html.push("<tr align='middle'" +  (data[i][9] != "0"?" style='color:#FF0000;'":"")   +">");
		html.push("<td " +  bg_Clr +">" + rank + "</td>" );
		html.push("<td " +  bg_Clr +"><a href='javascript:" + TEAM_LINK + "(" + data[i][0] + ")' " + (data[i][1] == 1 ? " style='color:#FF0000; font-weight:bold'" : "style='color:#000000'") + ">" + gameStanding["team"][data[i][0]] + "</a></td>");
		html.push("<td bgColor='#e0e0e0'>" + data[i][2] + "</td>");
		html.push("<td bgColor='#e0e0e0'>" + data[i][3] + "</td>");
		html.push("<td bgColor='#e0e0e0'>" + data[i][4] + "</td>");
		html.push("<td bgColor='#e0e0e0'>" + data[i][5] + "</td>");
		html.push("<td bgColor='#e0e0e0'>" + data[i][6] + "</td>");
		html.push("<td bgColor='#e0e0e0'>" + data[i][7] + "</td>");
		html.push("<td bgColor='#33ccff'>" + data[i][8] + "</td>");
		html.push("<td>&nbsp</td></tr>");
		if(data[i][11]!=""){
			html.push("<tr bgcolor='#e0e0e0' style='color:#FF0000'><td align='center'>" + NOTE_STR + ": </td><td colspan='9'>" + data[i][11] + "</td></tr>");
		}
		rank++;
	}
	html.push("</table>");
	return html.join('');
}

function loadLeagueStandingStat(){
	var data = gameStanding["stats"];
	try{
		$$("e_sdss_snum1").innerHTML = data["played"][0];
		$$("e_sdss_sper1").innerHTML = data["played"][1] + "%";
		$$("e_sdss_unsnum1").innerHTML = data["unplayed"][0];
		$$("e_sdss_unsper1").innerHTML = data["unplayed"][1] + "%";
		$$("e_sdss_zsnum1").innerHTML = data["homewin"][0];
		$$("e_sdss_zsper1").innerHTML = data["homewin"][1] + "%";
		$$("e_sdss_zpnum1").innerHTML = data["draw"][0];
		$$("e_sdss_zpper1").innerHTML = data["draw"][1] + "%";
		$$("e_sdss_ksnum1").innerHTML = data["awaywin"][0];
		$$("e_sdss_ksper1").innerHTML = data["awaywin"][1] + "%";
		$$("e_sdss_dqnum1").innerHTML = data["totalpoint"][0];
		$$("e_sdss_dqavg1").innerHTML = data["totalpoint"][1];
		$$("e_sdss_zdqnum1").innerHTML = data["homepoint"][0];
		$$("e_sdss_zdqavg1").innerHTML = data["homepoint"][1];
		$$("e_sdss_kdqnum1").innerHTML =data["awaypoint"][0];
		$$("e_sdss_kdqavg1").innerHTML = data["awaypoint"][1];
		$$("e_sdss_gmax_t1").innerHTML = data["bestattack"][0];
		$$("e_sdss_gmax1").innerHTML = data["bestattack"][1];
		$$("e_sdss_zgmax_t1").innerHTML = data["besthomeattack"][0];
		$$("e_sdss_zgmax1").innerHTML = data["besthomeattack"][1];
		$$("e_sdss_kgmax_t1").innerHTML = data["bestawayattack"][0];
		$$("e_sdss_kgmax1").innerHTML = data["bestawayattack"][1];
		$$("e_sdss_gmin_t1").innerHTML = data["worstattack"][0];
		$$("e_sdss_gmin1").innerHTML = data["worstattack"][1];
		$$("e_sdss_zgmin_t1").innerHTML = data["worsthomeattack"][0];
		$$("e_sdss_zgmin1").innerHTML = data["worsthomeattack"][1];
		$$("e_sdss_kgmin_t1").innerHTML = data["worstawayattack"][0];
		$$("e_sdss_kgmin1").innerHTML = data["worstawayattack"][1];
		$$("e_sdss_kpmax_t1").innerHTML =data["worstdefense"][0]; 
		$$("e_sdss_kpmax1").innerHTML =  data["worstdefense"][1];
		$$("e_sdss_kpmin_t1").innerHTML =data["bestdefense"][0];
		$$("e_sdss_kpmin1").innerHTML = data["bestdefense"][1];
		$$("e_sdss_zkpmax_t1").innerHTML =  data["worsthomedefense"][0];
		$$("e_sdss_zkpmax1").innerHTML = data["worsthomedefense"][1];
		$$("e_sdss_zkpmin_t1").innerHTML = data["besthomedefense"][0];
		$$("e_sdss_zkpmin1").innerHTML = data["besthomedefense"][1];
		$$("e_sdss_kkpmax_t1").innerHTML =data["worstawaydefense"][0];
		$$("e_sdss_kkpmax1").innerHTML = data["worstawaydefense"][1];
		$$("e_sdss_kkpmin_t1").innerHTML = data["bestawaydefense"][0];
		$$("e_sdss_kkpmin1").innerHTML = data["bestawaydefense"][1];
		$$("standings_stat1_body").style.display  = "";
	}catch(e){}
	
}

function loadCupStandingStat(){
	
	var data = gameStanding["stats"];
	try{
		$$("e_sdss_snum2").innerHTML =  data["played"][0];
		$$("e_sdss_sper2").innerHTML =  data["played"][1] + "%";
		$$("e_sdss_unsnum2").innerHTML =  data["unplayed"][0];
		$$("e_sdss_unsper2").innerHTML = data["unplayed"][1] + "%";
		$$("e_sdss_dqnum2").innerHTML = data["totalpoint"][0];
		$$("e_sdss_dqavg2").innerHTML = data["totalpoint"][1];
		$$("e_sdss_gmax_t2").innerHTML = data["bestattack"][0];
		$$("e_sdss_gmax2").innerHTML = data["bestattack"][1];
		$$("e_sdss_gmin_t2").innerHTML =  data["worstattack"][0];
		$$("e_sdss_gmin2").innerHTML =  data["worstattack"][1];
		$$("e_sdss_kpmax_t2").innerHTML = data["worstdefense"][0];
		$$("e_sdss_kpmax2").innerHTML =  data["worstdefense"][1];
		$$("e_sdss_kpmin_t2").innerHTML = data["bestdefense"][0];
		$$("e_sdss_kpmin2").innerHTML = data["bestdefense"][1];
		$$("standings_stat2_body").style.display = "";
	}catch(e){}
	
}


function iniStanding(){
	if(typeof(gameStanding)=="undefined" || gameStanding==null){
		return;
	}
	$$("standings_body").style.display ="";
	if(gameStanding["mode"] == "0"){
		$$("standing0_tag1").style.display = $$("standing0_tag2").style.display = ""; 
		loadLeagueStanding(0)
		loadLeagueStandingStat();
	}else if(gameStanding["mode"] == "1"){
		loadCupStanding();
		loadCupStandingStat();
	}else if(gameStanding["mode"] == "2"){
		for(var type in gameStanding["data"]){
			$$("Standings_" + type).style.display = "";
			if(gameStanding["data"][type]["home"]!=null){
				$$("standing" + type +"_tag1").style.display = $$("standing" + type +"_tag2").style.display = ""; 
			}
			$$("stype_" + type).innerHTML = STANDINGS_TYPE[parseInt(type)];
			loadTypeStanding(type,0);
		}
		loadLeagueStandingStat();
	}
	//$$("e_sds_last_update").innerHTML =gameStanding["updatedtime"];
}







function switchStanding(typeIndex,tagIndex){
	
	$$("s" + typeIndex +"_t" + tagIndex).className="selectli";
	$$("s" + typeIndex +"_t" + tagIndex).getElementsByTagName("span")[0].className ="selectspan";
	$$("s" + typeIndex +"_t" + (tagIndex+1)%3).className = "";
	$$("s" + typeIndex +"_t" + (tagIndex+1)%3).getElementsByTagName("span")[0].className ="";
	$$("s" + typeIndex +"_t" + (tagIndex+2)%3).className = "";
	$$("s" + typeIndex +"_t" + (tagIndex+2)%3).getElementsByTagName("span")[0].className ="";
	
	if(gameStanding["mode"] == "0"){
		loadLeagueStanding(tagIndex);
	}else if(gameStanding["mode"] == "2"){
		loadTypeStanding(typeIndex,tagIndex)	
	}

	
	
}

function initNav(){
	var isShowNav=false;
	if($$("jfwj_body").style.display!='none'){
		$$("gotonavHref0").style.display='';
		isShowNav=true;
	} 
	if($$("predictions_news_body").style.display!='none'){
		$$("gotonavHref1").style.display='';
		isShowNav=true;
	}
	if($$("divTeamHistoryA").style.display!='none'){
		$$("gotonavHref2").style.display='';
		isShowNav=true;
	}
	if($$("divTeamGoalCountA").style.display!='none' || $$("divTeamGoalStatsA").style.display!='none'	|| $$("divTeamOddsstatA").style.display!='none' ){
		$$("gotonavHref3").style.display='';
		isShowNav=true;
	}
	if($$("divTeamFixtureA").style.display!='none'){
		$$("gotonavHref4").style.display='';
		isShowNav=true;
	}
	if($$("divTeamHistoryB").style.display!='none'){
		$$("gotonavHref5").style.display='';
		isShowNav=true;
	}
	if($$("divTeamGoalCountB").style.display!='none' || $$("divTeamGoalStatsB").style.display!='none'	|| $$("divTeamOddsstatB").style.display!='none' ){
		$$("gotonavHref6").style.display='';
		isShowNav=true;
	}
	if($$("divTeamFixtureB").style.display!='none'){
		$$("gotonavHref7").style.display='';
		isShowNav=true;
	}

	if($$("divLineup").style.display!='none'){
		$$("gotonavHref8").style.display='';
		isShowNav=true;
	}

	if($$("divOddsWay").style.display!='none'){
		$$("gotonavHref9").style.display='';
		isShowNav=true;

	}
	if($$("standings_body").style.display!='none'){
		$$("gotonavHref10").style.display='';
		isShowNav=true;
	}
	if(isShowNav==true){
		$$("gotonav").style.display='';
	} 
}
var HideNavTimer=null;
function showNavDiv(){
	$$('gotonav').style.display='none';
	$$("gotonavdiv").style.display='';
	if(HideNavTimer!=null){
		HideNavTimer=clearTimeout(HideNavTimer);
	}
}
function hideNavDiv(){
	if(HideNavTimer!=null){
		HideNavTimer=clearTimeout(HideNavTimer);
	}
	HideNavTimer=setTimeout("$$('gotonavdiv').style.display='none';$$('gotonav').style.display='';",3000);
}
function gotoNav(i){
	 window.location.hash="navtag"+i;
}

function loadLineUp(team){
	var teamName = team=="A"?gameInfo["taname"]:gameInfo["tbname"];
	var a_irange = [0, 0, 0];
	var data = gameLineup[team];
	var htmlLineup = [["","","","",""],["","","","",""],["","","","",""],["","","","",""]];
	for(var i=0;i<data.length;i++){
		htmlLineup[data[i]["p"]][data[i]["s"]] += (data[i]["id"]!="0"? 
					"<a href='javascript:" + PLAYER_LINK + "(" + data[i]["id"] + ")' class='tl" + data[i]["s"] + "'>" + data[i]["n"] + "</a>" :
					"<span class='tl" + data[i]["s"] + "_2'>" + data[i]["n"] + "</span>") + (data[i]["p"]==0?" " :"<br/>");	
		if(data[i]["s"]==3){
			a_irange[data[i]["p"] - 1]++;
		}
	}
	var a_range = a_irange[0].toString() + a_irange[1].toString() + a_irange[2].toString();
	
	
	$$("tdFormationp" + team).style.background = "url(http://img.7m.com.cn/vnimg/img3/sL" + (team=="A"?"M":"A") + a_range +".jpg)"; 
	$$("tdFormationp" + team).innerHTML = "<span class='Lt1'>" + FORMATION_STR.replace("?", teamName) + ": " + (a_range == "000" ? NO_AVAILABLE_STR : a_range) + "</span>";

	$$("tbLineupName" + team).innerHTML = "<h3>" + LINEUP_STR.replace("?", teamName) + ": </h3>"
	$$("tdLineup"+team+"_0").innerHTML = htmlLineup[0][3] + htmlLineup[0][0] + htmlLineup[0][1] + htmlLineup[0][2] +htmlLineup[0][4];
	$$("tdLineup"+team+"_1").innerHTML = htmlLineup[1][3] + htmlLineup[1][0] + htmlLineup[1][1] + htmlLineup[1][2] +htmlLineup[1][4];
	$$("tdLineup"+team+"_2").innerHTML = htmlLineup[2][3] + htmlLineup[2][0] + htmlLineup[2][1] + htmlLineup[2][2] +htmlLineup[2][4];
	$$("tdLineup"+team+"_3").innerHTML = htmlLineup[3][3] + htmlLineup[3][0] + htmlLineup[3][1] + htmlLineup[3][2] +htmlLineup[3][4];
	if(data[team +"age"]!=""){
		$$("tdAge" + team).innerHTML =  "<strong>" + FIRSTPLAYERSAVG_STR + gameLineup[team +"age"] + "</strong>";
	}
}

var loadGameLineUpCount = 0;
function iniLineup(){
	if(typeof(gameLineup)!="undefined"){
		if(gameLineup["A"].length== 0 && gameLineup["B"].length== 0){
			return;
		}
		loadLineUp("A");
		loadLineUp("B");
		
		
		$$("divLineup").style.display = "";
	}else{
		if(loadGameLineUpCount<=2){
			loadGameLineUpCount ++;
			LoadJS("http://" + analyseHost +"/" + gameId + "/data/gamelineup_" +  LANGUAGE_STR +".js?f=" + new Date().valueOf(),iniLineup);	
		}
	}
}



var Hisotry_sHeader = 	'<table border="1" cellpadding="2" cellspacing="0" class="pltb1"" bordercolor="#FFFFFF" width="100%" id="stat_tb">' +
					  		'<tr class="pltb2">' +
								'<td width="4%">ã€€</td>' +
								'<td width="28%">ã€€</td>' +
								'<td width="8%" onclick="SortOddsColumn(2)" style="cursor:pointer" title="' + SORTSTR + '">' + HISTORY_ODDS_HEADER[0] + '</td>' +
								'<td onclick="SortOddsColumn(3)" style="cursor:pointer" title="' + SORTSTR + '">' + HISTORY_ODDS_HEADER[1] + '</td>' +
								'<td onclick="SortOddsColumn(4)" style="cursor:pointer" title="' + SORTSTR + '">' + HISTORY_ODDS_HEADER[2] + '</td>' +
								'<td onclick="SortOddsColumn(5)" style="cursor:pointer" title="' + SORTSTR + '">' + HISTORY_ODDS_HEADER[3] + '</td>' +
								'<td onclick="SortOddsColumn(6)" style="cursor:pointer" title="' + SORTSTR + '">' + HISTORY_ODDS_HEADER[4] + '</td>' +
								'<td onclick="SortOddsColumn(7)" style="cursor:pointer" title="' + SORTSTR + '">' + HISTORY_ODDS_HEADER[5] + '</td>' +
								'<td onclick="SortOddsColumn(8)" style="cursor:pointer" title="' + SORTSTR + '">' + HISTORY_ODDS_HEADER[6] + '</td>' +
								'<td onclick="SortOddsColumn(9)" style="cursor:pointer" title="' + SORTSTR + '">' + HISTORY_ODDS_HEADER[7] + '</td>' +
								'<td width="8%">' + HISTORY_ODDS_HEADER[8] + '</td>' +
							'</tr>';
							
var oddsWayHTML = ["","",""];
function loadOddsWay(index){
	if(oddsWayHTML[index]==""){
		if(index==0){
			var data = gameOddsway["data"]["total"];
			var oddsLink = T_HISTORY_ODDSAWAY_LINK;
		}else if(index==1){
			var data = gameOddsway["data"]["home"];
			var oddsLink = H_HISTORY_ODDSAWAY_LINK;
		}else if(index == 2){
			var data= gameOddsway["data"]["away"];
			var oddsLink = A_HISTORY_ODDSAWAY_LINK;
		}
		var html = [];
		html.push(Hisotry_sHeader);
		var year = gameOddsway["endDate"].split('-')[0];
		var SelectrowStyle = "";
		for(var i=0;i<data.length;i++){
			var bgclr  = i%2?"#C6E4F5" : "#E6F4FB";
			if (data[i][0] == gameInfo["taid"] ||data[i][0] == gameInfo["tbid"]){
				SelectrowStyle = ' style="font-weight: bold;color:#FF0000;background: #FFC;"';
			}else{
				SelectrowStyle="";
			}
			if(LANGUAGE_INDEX > 1){
				 data[i][9] =  data[i][9].replace(/[W]/g, VORD_ARR[0]).replace(/[D]/g, VORD_ARR[1]).replace(/[L]/g, VORD_ARR[2])
				
			}else{
				 data[i][9]  = ata[i][9].replace(/[W]/g, WORL_ARR[0]).replace(/[D]/g, WORL_ARR[2]).replace(/[L]/g, WORL_ARR[3]) 
		
			}
			html.push("<tr bgcolor='" + bgclr + "' " + SelectrowStyle + " onmouseover=\"drs('" +  data[i][9] + "', " + LANGUAGE_INDEX + "); return true;\" onmouseout=\"nd(); return true;\">");
			html.push("<td>" + (i+1) + "</td>");
			html.push("<td style='text-align: left; padding-left: 12px;'><a href='javascript:" + TEAM_LINK + "(" + data[i][0] + ")'><font color='#000000'>" + gameOddsway["team"][data[i][0]] + "</font></a></td>");
			html.push("<td>" + data[i][1] +"</td>");
			html.push("<td>" + data[i][2] +"</td>");
			html.push("<td>" + data[i][3] +"</td>");
			html.push("<td>" + data[i][4] +"</td>");
			html.push("<td>" + data[i][5] +"</td>");
			html.push("<td>" + data[i][6] +"</td>");
			html.push("<td>" + data[i][7] +"</td>");
			html.push("<td>" + data[i][8] +"%</td>");
			html.push("<td><a href=\"javascript:" + oddsLink + "('" +year + "/m" + gameInfo["mid"] + "'," + data[i][0] + ")\"><font color='#000000'>" + DETAILS_STR + "</font></a></td></tr>");
			
		}
		oddsWayHTML[index] = html.join("");
	}
	$$("tbOddsWayContent").innerHTML=oddsWayHTML[index] ;
	
}


function loadOddsWayStats(type){
	var data = gameOddsway["stats"];
	if(type==0){
		$$("e_ows_h_ws1").innerHTML = data["homewin"][0] ;
		$$("e_ows_h_wp1").innerHTML = data["homewin"][1]  + '%';
		$$("e_ows_ds1").innerHTML = data["draw"][0] ;
		$$("e_ows_dp1").innerHTML = data["draw"][1] + '%';
		$$("e_ows_a_ws1").innerHTML = data["awaywin"][0] ;
		$$("e_ows_a_wp1").innerHTML = data["awaywin"][1] + '%';
		$$("e_ows_mw_tn1").innerHTML = data["maxwinteam"][0].replace(/,/ig, ", ");
		$$("e_ows_mw1").innerHTML = data["maxwinteam"][1] + '%';
		$$("e_ows_minw_tn1").innerHTML = data["minwinteam"][0].replace(/,/ig, ", ");
		$$("e_ows_minw1").innerHTML = data["minwinteam"][1]+ '%';
		$$("e_ows_hmw_tn1").innerHTML = data["homemaxwinteam"][0].replace(/,/ig, ", ");
		$$("e_ows_hmw1").innerHTML = data["homemaxwinteam"][1] + '%';
		$$("e_ows_hminw_tn1").innerHTML = data["homeminwinteam"][0].replace(/,/ig, ", ");
		$$("e_ows_hminw1").innerHTML = data["homeminwinteam"][1] + '%';
		$$("e_ows_amw_tn1").innerHTML = data["awaymaxwinteam"][0].replace(/,/ig, ", ");
		$$("e_ows_amw1").innerHTML = data["awaymaxwinteam"][1] + '%';
		$$("e_ows_aminw_tn1").innerHTML = data["awayminwinteam"][0].replace(/,/ig, ", ");
		$$("e_ows_aminw1").innerHTML = data["awayminwinteam"][1] + '%';
		$$("e_ows_d_tn1").innerHTML = data["maxdrawteam"][0].replace(/,/ig, ", ");
		$$("e_ows_d1").innerHTML = data["maxdrawteam"][1] + '%';
		$$("history_odds_stat1_body").style.display = "";
	}else{
		$$("e_ows_win_s2").innerHTML =data["win"][0];
		$$("e_ows_win_p2").innerHTML = data["win"][1] + '%';
		$$("e_ows_ds2").innerHTML = data["draw"][0];
		$$("e_ows_dp2").innerHTML = data["draw"][1] + '%';
		$$("e_ows_mw_tn2").innerHTML = data["maxwinteam"][0].replace(/,/ig, ", ");
		$$("e_ows_mw2").innerHTML = data["maxwinteam"][1] + '%';
		$$("e_ows_minw_tn2").innerHTML =  data["minwinteam"][0].replace(/,/ig, ", ");
		$$("e_ows_minw2").innerHTML = data["minwinteam"][1] + '%';
		$$("e_ows_d_tn2").innerHTML = data["maxdrawteam"][0].replace(/,/ig, ", ");
		$$("e_ows_d2").innerHTML = data["maxdrawteam"][1] + '%';
		$$("history_odds_stat2_body").style.display = "";
	}
}

function SortOddsColumn(cell){
	var obj = $$("stat_tb");
	var rows_Arr = new Array();
	for (var i = 1; i < obj.rows.length; ++i){
		var v = obj.rows[i].cells[cell].innerHTML;
		if (cell == 9)
			v = v.replace("%", "");
		rows_Arr.push(new Array(Number(v), obj.rows[i].outerHTML));
	}
	
	if (sortTp == 0){
		rows_Arr.sort(sortA);
		sortTp = 1;
	}else{
		rows_Arr.sort(sortD);
		sortTp = 0;
	}
	
	var tbstr = "";
	for(var i = 0; i < rows_Arr.length; ++i){
		tbstr += rows_Arr[i][1];
	}
	$$("tbOddsWayContent").innerHTML = Hisotry_sHeader + tbstr + '</table>';
	UpdateOddsRowsClr();
}

function UpdateOddsRowsClr(){
	var obj = $$("stat_tb");
	var bgclr = "";
	for (var i = 1; i < obj.rows.length; ++i){
		bgclr = (i % 2 == 0) ? "tr_l0" : "tr_l1";
		if (obj.rows[i].className.indexOf("tr_sel") != -1)
			obj.rows[i].className = bgclr + " tr_sel";
		else
			obj.rows[i].className = bgclr;
	}
}


function switchOddsWay(index){
	
	$$("lnkOddsWayTab" + index).className = "selectli";
	$$("lnkOddsWayTab" + index).getElementsByTagName("span")[0].className ="selectspan";
	$$("lnkOddsWayTab" + (index+1)%3).className = "";
	$$("lnkOddsWayTab" + (index+1)%3).getElementsByTagName("span")[0].className ="";
	$$("lnkOddsWayTab" + (index+2)%3).className = "";
	$$("lnkOddsWayTab" + (index+2)%3).getElementsByTagName("span")[0].className ="";
	loadOddsWay(index);
}

function iniOddsWay(){

	if(typeof(gameOddsway)=="undefined" || gameOddsway==null){
		return;
	}

	$$("divOddsWay").style.display ="";
	if(gameOddsway["data"]["home"]!=null){
		//$$("ddOddsWayTab1").style.display = $$("ddOddsWayTab2").style.display = ""; 
		//loadOddsWayStats(0);
	}else{
		//loadOddsWayStats(1);
	}
	//$$("e_ow_last_update").innerHTML =gameOddsway["updatedtime"];
	//loadOddsWay(0);
}

function updateTimeZone(){
	location.reload();
}

function changeLine(line){
	if(LANGUAGE_STR!="gb" && LANGUAGE_STR !="big")  return;
	if(line=="ctc")
		location.href = "http://analyse2.7m.com.cn/" + gameId + "/index" + (LANGUAGE_STR =="gb"?"_gb":"") + ".shtml";
	else if(line == "cnc")
		location.href = "http://analyse1.7m.com.cn/" + gameId + "/index" + (LANGUAGE_STR =="gb"?"_gb":"") + ".shtml";
	
}
