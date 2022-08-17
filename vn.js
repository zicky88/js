var LANGUAGE_INDEX = 3;
var LANGUAGE_STR = "vn";
var MATCHES_LINK = "zlk_vn";
var DETAILS_LINK = "ShowDetails_vn";
var TEAM_LINK = "Team_vn";
var PK_LINK = "ShowPk_vn";
var RPK_LINK = "ShowRPk_vn";
var CPK_LINK = "ShowCPk_vn";
var PLAYER_LINK = "Player_vn";
var COUNTRY_LINK = "Country_vn";
var ANALYSE_LINK = "ShowAnalyse_vn";
var STADIUM_LINK = "Stadium_vn";
var REFEREE_LINK = "Referee_vn";
var T_HISTORY_ODDSAWAY_LINK = "t_History_OddsAway_vn";
var H_HISTORY_ODDSAWAY_LINK = "h_History_OddsAway_vn";
var A_HISTORY_ODDSAWAY_LINK = "a_History_OddsAway_vn";
var OVER_STR = "<font color=red>TrÃªn</font>";
var UNDER_STR = "<font color=green>DÆ°á»›i</font>";
var RQ_ARR = ["0", "1/4", "1/2", "3/4", "1", "1 1/4", "1 1/2", "1 3/4", "2", "2 1/4", "2 1/2", "2 3/4", "3", "3 1/4", "3 1/2", "3 3/4", "4", "4 1/4", "4 1/2", "4 3/4", "5", "5 1/4", "5 1/2", "5 3/4", "6", "6 1/4", "6 1/2", "6 3/4", "7", "7 1/4", "7 1/2", "7 3/4", "8", "8 1/4", "8 1/2", "8 3/4", "9", "9 1/4", "9 1/2", "9 3/4", "10", "10 1/4", "10 1/2", "10 3/4", "11", "11 1/4", "11 1/2", "11 3/4", "12", "12 1/4", "12 1/2", "12 3/4", "13", "13 1/4", "13 1/2", "13 3/4", "14", "14 1/4", "14 1/2", "14 3/4", "15", "15 1/4", "15 1/2", "15 3/4", "16", "16 1/4", "16 1/2", "16 3/4", "17", "17 1/4", "17 1/2", "17 3/4", "18", "18 1/4", "18 1/2", "18 3/4", "19", "19 1/4", "19 1/2", "19 3/4", "20"];
var OU_ARR = ["0", "0/0.5", "0.5", "0.5/1", "1", "1/1.5", "1.5", "1.5/2", "2", "2/2.5", "2.5", "2.5/3", "3", "3/3.5", "3.5", "3.5/4", "4", "4/4.5", "4.5", "4.5/5", "5", "5/5.5", "5.5", "5.5/6", "6", "6/6.5", "6.5", "6.5/7", "7", "7/7.5", "7.5", "7.5/8", "8", "8/8.5", "8.5", "8.5/9", "9", "9/9.5", "9.5", "9.5/10", "10", "10/10.5", "10.5", "10.5/11", "11", "11/11.5", "11.5", "11.5/12", "12", "12/12.5", "12.5", "12.5/13", "13", "13/13.5", "13.5", "13.5/14", "14", "14/14.5", "14.5", "14.5/15", "15", "15/15.5", "15.5", "15.5/16", "16", "16/16.5", "16.5", "16.5/17", "17", "17/17.5", "17.5", "17.5/18", "18", "18/18.5", "18.5", "18.5/19", "19", "19/19.5", "19.5", "19.5/20", "20"];
var STATE_ARR = ["", "H1", "1/2H", "H2", "KT", "Táº¡m ngá»«ng", "Thá»§ tiÃªu", "Giá» phá»¥", "Giá» phá»¥", "Giá» phá»¥", "120 phÃºt", "11 mÃ©t", "Káº¿t thÃºc", "HoÃ£n", "Cáº¯t ngang", "Chá» xÃ¡c Ä‘á»‹nh", "BÃ n tháº¯ng vÃ ng", ""];
var RESUME_ARR = ["90 phÃºt", "120 phÃºt", "11 mÃ©t", "100 phÃºt", "Káº¿t thÃºc", "Tá»•ng tá»· sá»‘", "2 tráº­n lÆ°á»£t", "Äang diá»…n ra giá» phá»¥, bÃ¢y giá» tá»· sá»‘", "tÆ°á»ng thuáº­t"];
var WORL_ARR = ["<font color=red>W</font>", "<font color=red>W 1/2</font>", "<font color=blue>HÃ²a</font>", "<font color=green>L</font>", "<font color=green>L 1/2</font>"];
var VORD_ARR = ["<font color=red>T</font>", "<font color=blue>H</font>", "<font color=green>B</font>"];
var TEAM_HIS_COLOR_ARR = ["red", "blue", "green"];
var EVEN_STR = "<font color=red>c</font>";
var ODD_STR = "<font color=green>l</font>";
var BASE_HANDICAP = "Tham kháº£o má»Ÿ cá»­a: ";
var HOME_HANDICAP_STR = "0:?";
var AWAY_HANDICAP_STR = "?:0";
var DETAILS_STR = "Chi tiáº¿t";
var GROUP_STR = "Báº£ng ?";
var NOTE_STR = "ChÃº Ã½";
var NEUTRAL_STR = "T";
var HOME_STR = "H";
var AWAY_STR = "A";
var LIVE_STAT_STR = ["Khai cuá»™c", "BÃ³ng pháº¡t gÃ³c thá»© nháº¥t", "Tháº» vÃ ng thá»© nháº¥t", "SÃºt bÃ³ng", "SÃºt cáº§u mÃ´n", "Pháº¡m lá»—i", "Pháº¡t gÃ³c", 
	"Sá»‘ láº§n Ä‘Ã¡ pháº¡t gÃ³c (thi Ä‘áº¥u 120 phÃºt)", "Sá»‘ láº§n pháº¡t trá»±c tiáº¿p", "Viá»‡t vá»‹", "pháº£n lÆ°á»›i nhÃ ", "Tháº» vÃ ng", "Tháº» vÃ ng (thi Ä‘áº¥u 120 phÃºt)", "Tháº» Ä‘á»", "Tá»· lá»‡ giá»¯ bÃ³ng", "ÄÃ¡nh Ä‘áº§u", 
	"Cá»©u  bÃ³ng", "Thá»§ mÃ´n cáº£n phÃ¡", "Máº¥t bÃ³ng", "Cáº¯t bÃ³ng thÃ nh cÃ´ng", "Cháº·n cáº£n", "chuyá»n dÃ i", "Chuyá»n ngáº¯n", "Trá»£ cÃ´ng", "Chuyá»n trung thÃ nh cÃ´ng", 
	"Äá»•i ngÆ°á»i láº§n thá»© má»™t", "Äá»•i ngÆ°á»i láº§n cuá»‘i cÃ¹ng", "Viá»‡t vá»‹ láº§n thá»© má»™t", "Viá»‡t vá»‹ láº§n cuá»‘i cÃ¹ng", "Thay ngÆ°á»i", "BÃ³ng Ä‘Ã¡ pháº¡t gÃ³c láº§n cuá»‘i cÃ¹ng", "Tháº» vÃ ng láº§n cuá»‘i cÃ¹ng", "sá»‘ láº§n Ä‘á»•i ngÆ°á»i (thi Ä‘áº¥u 120 phÃºt)", "Viá»‡t vá»‹(thi Ä‘áº¥u 120 phÃºt)", "Tháº» Ä‘á»(thi Ä‘áº¥u 120 phÃºt)", 
	"à¹‚à¸à¸¥à¸„à¸´à¸à¸¥à¸¹à¸à¸ªà¸¸à¸”à¸—à¹‰à¸²à¸¢", "Quáº£ nÃ©m biÃªn cuá»‘i cÃ¹ng", "Quáº£ Ä‘Ã¡ pháº¡t Ä‘áº§u tiÃªn", "Quáº£ pháº¡t cuá»‘i cÃ¹ng", "Láº§n Ä‘áº§u tiÃªn thá»§ mÃ´n phÃ¡t bÃ³ng", "Láº§n cuá»‘i cÃ¹ng thá»§ mÃ´m phÃ¡t bÃ³ng"];
var SWAP_STR = "Thay tháº¿";
var HISTORY_ODDS_HEADER = ["Sá»‘ tráº­n", "Má»Ÿ cá»­a", "Cá»­a trÃªn", "Tháº¯ng kÃ¨o", "HÃ²a", "Thua kÃ¨o", "HS", "TL tháº¯ng kÃ¨o", "Tá»· lá»‡ Ä‘á»™", "TÃ¬nh hÃ¬nh tá»· lá»‡ Ä‘á»™ 8 tráº­n Ä‘áº¥u gáº§n Ä‘Ã¢y<span>BÃªn pháº£i lÃ  tráº­n Ä‘áº¥u má»›i nháº¥t</span>"];
var STANDING_HEADER = ["Xáº¿p háº¡ng", "Äá»™i bÃ³ng", "Sá»‘ tráº­n", "Tháº¯ng", "HÃ²a", "Báº¡i", "Sá»‘ bÃ n tháº¯ng", "Sá»‘ bÃ n thua", "Äiá»ƒm", "Ghi chÃº"];
var ESTABLISH_DATA_STR = "ThÃ nh láº­p: ";
var COUNTRY_STR = "Quá»‘c tá»‹ch: ";
var CITY_STR = "ThÃ nh phá»‘: ";
var STADIUM_STR = "SÃ¢n nhÃ : ";
var CAPACITY_STR = "Sá»©c chá»©a: ";
var ADDRESS_STR = "Äá»‹a chá»‰: ";
var WEBSITE_STR = "Website: ";
var EMAIL_STR = "Email: ";
var MAINSHIRT_STR = "Ão nhÃ ";
var AWAYSHIRT_STR = "Ão khÃ¡ch";
var PLAYER_AGE_STR = "Tuá»•i cáº£ cáº§u thá»§: ";
var AVERAGE_STR = "(bÃ¬nh quÃ¢n)";
var LINEUP_ARR = ["Tiá»n Ä‘áº¡o", "Tiá»n vá»‡", "Háº­u vá»‡", "Thá»§ mÃ´n", "", "", "", "", "", "KhÃ¡c"];
var CHART_TITLE_STR = 'Thá»‘ng kÃª ?1 tráº­n Ä‘áº¥u gáº§n Ä‘Ã¢y, ?2%tháº¯ng , ?3%hÃ²a , ?4%báº¡i';
var BIRTHDAY_STR = "NgÃ y sinh: ";
var PERSONAL_HONOURS_STR = "Vinh dá»± cÃ¡ nhÃ¢n: ";
var IN_CLUB_STR = "CLB Ä‘ang tham gia: ";
var PREVIOUS_CLUB_STR = "CLB trÆ°á»›c: ";
var ONCE_CLUB_STR = "CLB cÅ©: ";
var JOIN_DATA_STR = "NgÃ y gia nháº­p: ";
var PROFILE_STR = "Giá»›i thiá»‡u tÃ³m táº¯t: ";
var LINEUP_STR = "Äá»™i hÃ¬nh ?";
var FORMATION_STR = "? Formation";
var TOTAL_STR = "Tá»•ng cá»™ng";
var PLAYER_DATA_TITLE = ["Quá»‘c tá»‹ch:", "NgÃ y sinh:", "HÃ´m nay chu ká»³ sinh há»c:", "Chiá»u cao:", "CÃ¢n náº·ng:", "CLB hiá»‡n nay:", "Vá»‹ trÃ­:", "NgÃ y gia nháº­p:", "PhÃ­ chuyá»ƒn nhÆ°á»£ng:", "CLB trÆ°á»›c:", "CLB cÅ©:", "Sá»‘ Ã¡o:"];
var WEATHER_ARR = ["", "NgÃ y náº¯ng", "Ãt mÃ¢y", "Nhiá»u mÃ¢y", "Trá» Ã¢m u", "MÆ°a nhá»", "MÆ°a vá»«a Ä‘áº¿n to", "MÆ°a rÃ o cÃ³ sáº¥m chá»›p", "Sáº¥m chá»›p mÆ°a bÃ£o", "Tuyáº¿t nhá»", "MÆ°a to", "ÄÃªm khÃ´ng mÆ°a", "Náº¯ng vÃ  nhiá»u mÃ¢y thay Ä‘á»•i", "Ãt mÃ¢y", "Nhiá»u mÃ¢y", "MÆ°a tuyáº¿t", "", "", "Náº¯ng vÃ  nhiá»u mÃ¢y thay Ä‘á»•i", "MÆ°a cÃ³ sáº¥m chá»›p nhá»", "MÆ°a rÃ o nháº¹", "MÃ¹ khÃ­", "MÃ¹ láº¡nh", "CÃ³ lÃºc cÃ³ mÆ°a nhá»", "MÆ°a vá»«a", "CÆ¡n tuyáº¿t nhá»", "MÆ°a phÃ¹n", "CÆ¡n tuyáº¿t", "GiÃ³ bá»¥i", "Tuyáº¿t tung khÃ´ng trung tháº¥p", "CÆ¡n tuyáº¿t to", "Tuyáº¿t vá»«a"];

var Match_Menu_Arr = ["Báº£ng xáº¿p háº¡ng", "Thá»‘ng kÃª tá»· lá»‡ Ä‘á»™", "Ghi bÃ n hiá»‡p 1/hiá»‡p 2", "TÃ i/Xá»‰u", "Thá»‘ng kÃª hiá»‡p1/2, cáº£ tráº­n", "Tá»•ng sá»‘ BT vÃ  sá»‘ láº»/cháºµn", "Tá»•ng BT Ä‘á»™i bÃ³ng", "Táº§n suáº¥t tá»· sá»‘ xuáº¥t hiá»‡n", "Táº¥n cÃ´ng/phÃ²ng ngá»±", "Báº£ng xáº¿p háº¡ng ghi bÃ n", "Thá»i gian ghi bÃ n", "Ghi bÃ n/lá»t lÆ°á»›i trÆ°á»›c", "Thá»‘ng kÃª tá»· sá»‘"];
var Match_Title_Arr = ["Báº£ng xáº¿p háº¡ng", "Thá»‘ng kÃª tá»· lá»‡ Ä‘á»™", "Ghi bÃ n hiá»‡p 1/hiá»‡p 2", "Thá»‘ng kÃª tÃ i / xá»‰u", "Thá»‘ng kÃª hiá»‡p1/2, cáº£ tráº­n", "Thá»‘ng kÃª tá»•ng sá»‘ bÃ n tháº¯ng vÃ  sá»‘ láº»/cháºµn", "Thá»‘ng kÃª tá»•ng bÃ n tháº¯ng Ä‘á»™i bÃ³ng", "Táº§n suáº¥t tá»· sá»‘ xuáº¥t hiá»‡n", "Táº¥n cÃ´ng/phÃ²ng ngá»±", "Báº£ng xáº¿p háº¡ng ghi bÃ n", "Thá»‘ng kÃª thá»i gian ghi bÃ n", "Ghi bÃ n/lá»t lÆ°á»›i trÆ°á»›c", "Thá»‘ng kÃª tá»· sá»‘"];
var Match_Table_Head_Arr = ["VÃ²ng", "Thá»i gian", "ÄÃ´Ì£i boÌng", "", "ÄÃ´Ì£i boÌng", "PhÃ¢n tÃ­ch", "Month", "SVÄ"];
var str_AnlyseStat="$s0<strong>$s1</strong> tráº­n Ä‘áº¥u: <strong style='color: #F00;'>$s2</strong> tháº¯ng <strong style='color: #00F;'>$s3</strong> hÃ²a <strong style='color: #008000;'>$s4</strong> thua, tá»· lá»‡ tháº¯ng: <strong style='color: #008000;'>$s5</strong>ï¼Œ tá»· lá»‡ tháº¯ng kÃ¨o: <strong style='color: #008000;'>$s6</strong>, tá»· lÃª trÃªn(>2.5): <strong style='color: #008000;'>$s7</strong>, tá»· lá»‡ láº»: <strong style='color: #008000;'>$s8</strong>";
var ALL_STR = "Táº¥t cáº£";
var Frequent_Results_Head_Arr = ["Xáº¿p háº¡ng", "Káº¿t quáº£", "Sá»‘ tráº­n", "Tá»· lá»‡"];
var HF_Stat_Head_Arr = ["Äá»™i bÃ³ng", "1/2 hiá»‡p", "Cáº£Ì‰ hiá»‡p", "Tháº¯ng", "HÃ²a", "Báº¡i"];
var Team_Goals_Head_Arr = ["Äá»™i bÃ³ng", "ChÆ°a ghi bÃ n", "1 bÃ n", "2 bÃ n", "3 bÃ n", "4 bÃ n", "5 bÃ n hoáº·c trá»Ÿ lÃªn"];
var OverUnder_Head_Arr = ["Äá»™i bÃ³ng", "Tá»•ng sá»‘ tráº­n", "2 bÃ n trá»Ÿ xuá»‘ng", "3 bÃ n hoáº·c trá»Ÿ lÃªn"];
var OddEven_Head_Arr = ["Äá»™i bÃ³ng", "Tá»•ng sá»‘ bÃ n tháº¯ng", "Láº»/cháºµn", "0-1 bÃ n", "2-3 bÃ n", "4-6 bÃ n", "7 bÃ n hoáº·c trá»Ÿ lÃªn", "Sá»‘ láº»", "Sá»‘ cháºµn"];
var GetMiss_Head_Arr = ["BÃ n tháº¯ng", "BÃ n thua", "Äá»™i bÃ³ng", "Sá»‘ tráº­n", "Sá»‘ bÃ n tháº¯ng", "Sá»‘ bÃ n thua"];
var HSScores_Head_Arr = ["Äá»™i bÃ³ng", "Tá»•ng sá»‘ tráº­n", "SÃ¢n nhÃ ", "SÃ¢n khÃ¡ch", "Hiá»‡p 1", "Hiá»‡p 1/2", "Hiá»‡p 2", "ghi bÃ n nhiá»u hÆ¡n", "ghi bÃ n nhÆ° nhau"];
var Shooter_Head_Arr = ["Xáº¿p háº¡ng", "Cáº§u thá»§", "Äá»™i bÃ³ng", "Tá»•ng sá»‘ bÃ n tháº¯ng(11 mÃ©t)"];
var GoalTime_Head_Arr = ["Äá»™i bÃ³ng", "Gian Ä‘oáº¡n"];
var FirstGetMiss_Head_Arr = ["Äá»™i bÃ³ng", "Thá»‘ng kÃª ghi bÃ n trÆ°á»›c", "Thá»‘ng kÃª lá»t lÆ°á»›i trÆ°á»›c", "Tá»•ng sá»‘ tráº­n", "SÃ¢n nhÃ ", "SÃ¢n khÃ¡ch"];
var CorrectScore_Head_Arr = ["Äá»™i bÃ³ng", "KhÃ¡c"];

var PROBABILITY_ARR = ["XÃ¡c suáº¥t tháº¯ng Ä‘Ä©a sÃ¢n nhÃ ", "XÃ¡c suáº¥t tháº¯ng Ä‘Ä©a sÃ¢n khÃ¡ch", "XÃ¡c suáº¥t tá»•ng tháº¯ng Ä‘Ä©a"];
var REPLEVY_STR = 'Trong <span class="tct1">{0}</span> tráº­n Ä‘áº¥u gáº§n Ä‘Ã¢y,hiá»‡p 1 láº¡c háº­u <span class="tct1">{1}</span> tráº­n,Ä‘uá»•i ká»‹p <span class="tct1">{2}</span> tráº­n(<span class="tct1">{3}</span>)';
var NO_DATA_STR = 'Táº¡m khÃ´ng cÃ³ sá»‘ liá»‡u';
var ODDS_STR_ARR = ["C", "T", "T", "Tráº­n hÃ²a"];
var SORTSTR = "Click Ä‘á»ƒ xáº¿p háº¡ng";
var NO_AVAILABLE_STR = "Táº¡m chÆ°a sá»‘ liá»‡u";
var JFWJ_STAT_STR = 'Cá»™ng <strong>?1</strong> tráº­n Ä‘áº¥u, <strong>?2</strong>: <strong style="color: #F00;">?3</strong>tháº¯ng(<strong style="color: #F00;">p3%</strong>), <strong style="color: #00F;">?4</strong>hÃ²a(<strong style="color: #00F;">p4%</strong>), <strong style="color: #008000;">?5</strong>báº¡i(<strong style="color: #008000;">p5%</strong>).';
var JFWJ_PK_STAT_STR = 'Cá»™ng <strong>?1</strong> tráº­n má»Ÿ kÃ¨o, <strong>?2</strong>: <strong style="color: #F00;">?3</strong>tháº¯ng kÃ¨o(<strong style="color: #F00;">p3%</strong>), <strong style="color: #00F;">?4</strong>hÃ²a(<strong style="color: #00F;">p4%</strong>), <strong style="color: #008000;">?5</strong>thua kÃ¨o(<strong style="color: #008000;">p5%</strong>).';
var JFWJ_OUEO_STR = 'Cá»™ng <strong style="color: #F00;">?1</strong>tráº­n trÃªn, <strong style="color: #008000;">?2</strong>tráº­n dÆ°á»›i, <strong style="color: #F00;">?3</strong>tráº­n cháºµn, <strong style="color: #008000;">?4</strong style="color: #008000;">tráº­n láº», <strong style="color: #F00;">?5</strong>tráº­n 1/2H trÃªn, <strong style="color: #008000;">?6</strong>tráº­n 1/2H dÆ°á»›i';
var FIRSTPLAYERSAVG_STR = 'Äá»™ tuá»•i trung bÃ¬nh trong ÄH chÃ­nh thá»©c: ';
var STANDINGS_TYPE = ["CaÌ‰ muÌ€a giaÌ‰i", "VÃ²ng trÃ²n giai Ä‘oaÌ£n 1", "VÃ²ng trÃ²n giai Ä‘oaÌ£n 2", "MuÌ€a xuÃ¢n", "MuÌ€a thu", "MuÌ€a xuÃ¢n 2", "MuÌ€a thu 2", "MÃ¹a Ä‘Ã´ng"];

var fulldateFormat = "dd/MM/yyyy HH:mm:ss";

function HideMatchs(Match_bh){
	var HideMatch = ",623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,";
	return (HideMatch.indexOf("," + Match_bh + ",") != -1);
}
