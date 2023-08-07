function HxG_4 () {
this.version="3.00";
this.brw=new this.HxBrowserMgr();
this.brw.initClientBrowserObject(this);
this.g=new this.HxGeometryMgr(this);
this.res=[];
this.i=new this.HxCompImpMgr(this);
this.dragger=new this.HxDragMgr(this);
this.mouser=new this.HxMouseMgr(this);
this.uistate=new this.HxUIState();
this.Components=[];
this.SubComponents=[];
this.Behaviors=[];
this.Converters=[];
this.Validators=[];
this.HTMLTags=[];
this.Popups=[];
this.Timers=[];
this.userEvents=[];
this.regExp=new this.HxConstraints();
this.sel=new this.HxCaretSelection();
this.tabNav=null;
this.c=new this.HxCache();
this.clip=new this.pseudoClipboard();
this.action=new this.HxAction();
this.CSSSelectors=null;
this.cal=new this.HxICal();
this.bodyLoadRewritten=false;
this.bodyLoadDone=false;
this.globalResize=false;
this.pendingFocusReturn=null;
this.pendingSelect=false;
this.pendingBlurRefocus=null;
this.pendingPrompt=null;
this.cursorTracking=null;
}
HxG_4.prototype.BHR_generic="generic";
HxG_4.prototype.BHR_keybind="keybind";
HxG_4.prototype.BHR_validate= "validate";
HxG_4.prototype.BHR_assist="assist";
HxG_4.prototype.BHR_focus="focus";
HxG_4.prototype.BHR_alert="alert";
HxG_4.prototype.BHR_hs="hs";
HxG_4.prototype.BHR_track="track";
HxG_4.prototype.BHR_mouseclick="mouseclick";
HxG_4.prototype.CMP_calendar="calendar";
HxG_4.prototype.CMP_colorpicker="colorpicker";
HxG_4.prototype.CMP_slider="slider";
HxG_4.prototype.CMP_spinner="spinner";
HxG_4.prototype.CMP_colorpicker="colorpicker";
HxG_4.prototype.CMP_timepicker="timepicker";
HxG_4.prototype.CMP_datepicker="datepicker";
HxG_4.prototype.CMP_image="image";
HxG_4.prototype.CMP_twistie="twistie";
HxG_4.prototype.CMP_menu="menu";
HxG_4.prototype.CMP_submenu="submenu";
HxG_4.prototype.CMP_mapitem="mapitem";
HxG_4.prototype.CVT_number="number";
HxG_4.prototype.CVT_datetime= "datetime";
HxG_4.prototype.CVT_mask="mask";
HxG_4.prototype.CVT_string="string";
HxG_4.prototype.ACT_FOCUS="FOCUS";
HxG_4.prototype.ACT_SELECTED="SELECTED";
HxG_4.prototype.ACT_UNSELECTED="UNSELECTED";
HxG_4.prototype.ACT_SHOW="SHOW";
HxG_4.prototype.ACT_HIDE="HIDE";
HxG_4.prototype.ACT_INVERTHIDE="INVERTHIDE";
HxG_4.prototype.ACT_VISIBLE="VISIBLE";
HxG_4.prototype.ACT_INVISIBLE="INVISIBLE";
HxG_4.prototype.ACT_INVERTVISIBLE="INVERTVISIBLE";
HxG_4.prototype.ACT_LOCKED="LOCKED";
HxG_4.prototype.ACT_UNLOCKED="UNLOCKED";
HxG_4.prototype.ACT_INVERTLOCKED= "INVERTLOCKED";
HxG_4.prototype.ACT_NEXTTAB="NEXTTAB";
HxG_4.prototype.ACT_NEXTTABCLEAR= "NEXTTABCLEAR";
HxG_4.prototype.ACT_PREVTAB="PREVTAB";
HxG_4.prototype.ACT_PREVTABCLEAR= "PREVTABCLEAR";
HxG_4.prototype.ACT_PADLEFT="PADLEFT";
HxG_4.prototype.ACT_PADRIGHT="PADRIGHT";
HxG_4.prototype.ACT_TRIM="TRIM";
HxG_4.prototype.ACT_CONFIRM="CONFIRM";
HxG_4.prototype.ACT_ALERT="ALERT";
HxG_4.prototype.ACT_CLICK="CLICK";
HxG_4.prototype.ACT_SUBMIT="SUBMIT";
HxG_4.prototype.ACT_NOTHING="NOTHING";
HxG_4.prototype.ACT_NONE="NONE";
HxG_4.prototype.ACT_STOP="STOP";
HxG_4.prototype.ACT_GOTO="GOTO";
HxG_4.prototype.ACT_ATERROR="@ERROR";
HxG_4.prototype.ACT_ISERROR="ERROR";
HxG_4.prototype.CLASS_BUTTON_LABEL="_Label";
HxG_4.prototype.CLASS_BUTTON_ICON="_Icon";
HxG_4.prototype.CLASS_BUTTON_MOUSED="_moused";
HxG_4.prototype.CLASS_BUTTON_DEPRSD="_depressed";
HxG_4.prototype.CLASS_BUTTON_DISBLD="_disabled";
HxG_4.prototype.CLASS_DEF="inputText";
HxG_4.prototype.CLASS_SL="_Slider";
HxG_4.prototype.CLASS_SL_LINES="_Body";
HxG_4.prototype.CLASS_DP="_DatePicker";
HxG_4.prototype.CLASS_DPS=["-Header", "-HeaderLine1", "-HeaderLine2", "-HeaderYear", "-HeaderMonth", "-HeaderWeekday",
"-Body", "-Button", "-CurrentMonth", "-OtherMonth", "-CurrentDay", "-InvalidDay", "-Today", "-CurrentToday",  "-Size"];
HxG_4.prototype.CLASS_CA="calendar";
HxG_4.prototype.CLASS_CLR="_ColorPicker";
HxG_4.prototype.CLASS_CLRS=["-Body", "-GridCell", "-GridSwatch", "-GridCell-Selected", "-GridCell-Hover","-GridCell-Hover-Selected"];
HxG_4.prototype.CLASS_PB="progressBar";
HxG_4.prototype.CLASS_PBS=["-DIV", "-Table", "-Title", "-Message", "-Bar", "-Bar_container", "-Bar_text"];
HxG_4.prototype.CLASS_TA="_Typeahead";
HxG_4.prototype.CLASS_TA_BODY="_Body";
HxG_4.prototype.CLASS_TA_SELECTED="_Selected";
HxG_4.prototype.CLASS_MB_SEPARATOR="separator";
HxG_4.prototype.CLASS_MB_SEPARATOR_L= "separator_first";
HxG_4.prototype.CLASS_MB_SEPARATOR_R= "separator_last";
HxG_4.prototype.CLASS_MB_CELL="cell";
HxG_4.prototype.CLASS_MB_ALTCELL="cell_alt";
HxG_4.prototype.CLASS_MB_CELLF="cell_first";
HxG_4.prototype.CLASS_MB_CELLL="cell_last";
HxG_4.prototype.CLASS_MB_ITEM="item";
HxG_4.prototype.CLASS_MB_ALTITEM="item_alt";
HxG_4.prototype.CLASS_MB_ARROW="arrow";
HxG_4.prototype.CLASS_MB_N="_normal";
HxG_4.prototype.CLASS_MB_M="_moused";
HxG_4.prototype.CLASS_MB_S="_selected";
HxG_4.prototype.CLASS_MB_SM="_selected_moused";
HxG_4.prototype.DTFMT_DATE0="MM-dd-yyyy";
HxG_4.prototype.DTFMT_DEFAULTSTRICT=1;
HxG_4.prototype.DTFMT_DEFAULTFIRSTDAYWEEK=0;
HxG_4.prototype.DTFMT_YEAR="%yyyy";
HxG_4.prototype.DTFMT_GEYEAR="%GGGG %y";
HxG_4.prototype.DTFMT_GCYEAR="%yyyy %GG";
HxG_4.prototype.MFMT_DEFAULTSTRICT=1;
HxG_4.prototype.WDIGITS="0123456789";
HxG_4.prototype.MASK_ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
HxG_4.prototype.DATE_EPOCH_IDS=["","i","h","b","j"];
HxG_4.prototype.DATE_EPOCH_YEARS=[
[0,0],
["06220716","006220716"],
["-37611006","-37611006"],
["-05430101","-05430101"],
["18680908","19120731","19261226","19890108"]
];
HxG_4.prototype.STR_DATE_TODAY=["today","tomorrow","yesterday","now"];
HxG_4.prototype._uA="A";	HxG_4.prototype._u2A="AA";  HxG_4.prototype._u3A="AAA";  HxG_4.prototype._u4A="AAAA";  HxG_4.prototype._u5A="AAAAA";  HxG_4.prototype._u6A="AAAAAA";  HxG_4.prototype._u7A="AAAAAAA";  HxG_4.prototype._u8A="AAAAAAAA";
HxG_4.prototype._lG="g";	HxG_4.prototype._l2G="gg";  HxG_4.prototype._l3G="ggg";  HxG_4.prototype._l4G="gggg";  HxG_4.prototype._l5G="ggggg";  HxG_4.prototype._l6G="gggggg";  HxG_4.prototype._l7G="ggggggg";  HxG_4.prototype._l8G="gggggggg";
HxG_4.prototype._lY="y";  HxG_4.prototype._l2Y="yy";  HxG_4.prototype._l3Y="yyy";  HxG_4.prototype._l4Y="yyyy";
HxG_4.prototype._uY="Y";  HxG_4.prototype._u2Y="YY";  HxG_4.prototype._u3Y="YYY";  HxG_4.prototype._u4Y="YYYY";
HxG_4.prototype._uG="G";  HxG_4.prototype._u2G="GG";  HxG_4.prototype._u3G="GGG";  HxG_4.prototype._u4G="GGGG";
HxG_4.prototype._uM="M";  HxG_4.prototype._u2M="MM";  HxG_4.prototype._u3M="MMM";  HxG_4.prototype._u4M="MMMM";
HxG_4.prototype._uE="E";  HxG_4.prototype._u2E="EE";  HxG_4.prototype._u3E="EEE";  HxG_4.prototype._u4E="EEEE";
HxG_4.prototype._uD="D";  HxG_4.prototype._u2D="DD";  HxG_4.prototype._u3D="DDD";
HxG_4.prototype._uS="S";  HxG_4.prototype._u2S="SS";  HxG_4.prototype._u3S="SSS";
HxG_4.prototype._lD="d";  HxG_4.prototype._l2D="dd";
HxG_4.prototype._lH="h";  HxG_4.prototype._l2H="hh";
HxG_4.prototype._uH="H";  HxG_4.prototype._u2H="HH";
HxG_4.prototype._lM="m";  HxG_4.prototype._l2M="mm";
HxG_4.prototype._lS="s";  HxG_4.prototype._l2S="ss";
HxG_4.prototype._uK="K";  HxG_4.prototype._u2K="KK";
HxG_4.prototype._lK="k";  HxG_4.prototype._l2K="kk";
HxG_4.prototype._lW="w";  HxG_4.prototype._l2W="ww";
HxG_4.prototype._uF="F";
HxG_4.prototype._uW="W";
HxG_4.prototype._lE="e";
HxG_4.prototype._lA="a";
HxG_4.prototype._lZ="z";
HxG_4.prototype._uZ="Z";
HxG_4.prototype._lX="x";
HxG_4.prototype._lN="n";
HxG_4.prototype._lP="p";
HxG_4.prototype._lF="f";
HxG_4.prototype._lL="l";
HxG_4.prototype._uR="R";
HxG_4.prototype.NFMT_DECIMAL0="###,###,##0";
HxG_4.prototype.NFMT_LOCALE0=",.%\u2030-$";
HxG_4.prototype.NFMT_DEFAULTSTRICT=1;
HxG_4.prototype.TW_UP=0;
HxG_4.prototype.TW_DN=1;
HxG_4.prototype.TW_LT=2;
HxG_4.prototype.TW_RT=3;
HxG_4.prototype.TW_SNOUT=0;
HxG_4.prototype.TW_PUG=1;
HxG_4.prototype.TW_VEE=2;
HxG_4.prototype.TW_TRI=3;
HxG_4.prototype.TW_NOBAR=0;
HxG_4.prototype.TW_BAR_INNER=1;
HxG_4.prototype.TW_BAR_OUTER=2;
HxG_4.prototype.TAG_OBJECT="object";
HxG_4.prototype.TAG_PARAM="param";
HxG_4.prototype.TAG_EMBED="embed";
HxG_4.prototype.ELEMENT_NODE=1;
HxG_4.prototype.TEXT_NODE=3;
HxG_4.prototype.DOCUMENT_NODE=9;
HxG_4.prototype.KEY_BS=8;
HxG_4.prototype.KEY_TAB=9;
HxG_4.prototype.KEY_ENTER=13;
HxG_4.prototype.KEY_ESC=27;
HxG_4.prototype.KEY_SPACEBAR= 32;
HxG_4.prototype.KEY_PGUP=33;
HxG_4.prototype.KEY_PGDN=34;
HxG_4.prototype.KEY_END=35;
HxG_4.prototype.KEY_HOME=36;
HxG_4.prototype.KEY_LTARROW=37;
HxG_4.prototype.KEY_UPARROW=38;
HxG_4.prototype.KEY_RTARROW=39;
HxG_4.prototype.KEY_DNARROW=40;
HxG_4.prototype.KEY_INS=45;
HxG_4.prototype.KEY_DEL=46;
HxG_4.prototype.CLR_BTN="buttonface";
HxG_4.prototype.CLR_BCK="Window";
HxG_4.prototype.CLR_SHDW="ThreeDShadow";
HxG_4.prototype._Z="0";
HxG_4.prototype._1="1";
HxG_4.prototype._2="2";
HxG_4.prototype.__1="-1";
HxG_4.prototype._C=",";
HxG_4.prototype._U="_";
HxG_4.prototype._Y="-";
HxG_4.prototype._P=".";
HxG_4.prototype._B=" ";
HxG_4.prototype._E="";
HxG_4.prototype._X="X";
HxG_4.prototype._LB="#";
HxG_4.prototype._EQ="=";
HxG_4.prototype._QM="?";
HxG_4.prototype._EX="!";
HxG_4.prototype._TL="~";
HxG_4.prototype._SL="/";
HxG_4.prototype._SM=";";
HxG_4.prototype._CL=":";
HxG_4.prototype._VB="|";
HxG_4.prototype._SQT="'";
HxG_4.prototype._DQT='"';
HxG_4.prototype._LT="<";
HxG_4.prototype._GT=">";
HxG_4.prototype._PCT="%";
HxG_4.prototype._UPC="^";
HxG_4.prototype._ON="on";
HxG_4.prototype._OFF="off";
HxG_4.prototype._FLS="false";
HxG_4.prototype._PX="px";
HxG_4.prototype._ZPX="0px";
HxG_4.prototype._1PX="1px";
HxG_4.prototype._2PX="2px";
HxG_4.prototype._HEX="0x";
HxG_4.prototype._ID="id";
HxG_4.prototype._NAM="name";
HxG_4.prototype._TRU="true";
HxG_4.prototype._HX="_hx_";
HxG_4.prototype._lOBJ= "object";
HxG_4.prototype._UND="undefined";
HxG_4.prototype._ALL="all";
HxG_4.prototype._NO="none";
HxG_4.prototype._HI="hidden";
HxG_4.prototype._VS="visible";
HxG_4.prototype._POS="position";
HxG_4.prototype._ABS="absolute";
HxG_4.prototype._REL="relative";
HxG_4.prototype._TRN="transparent";
HxG_4.prototype._DSB="disabled";
HxG_4.prototype._RDO="readonly";
HxG_4.prototype._SLD="solid";
HxG_4.prototype._OUT="outset";
HxG_4.prototype._INS="inset";
HxG_4.prototype._AUT="auto";
HxG_4.prototype._DFT="default";
HxG_4.prototype._INL="inline";
HxG_4.prototype._INB="inline-block";
HxG_4.prototype._BLK="block";
HxG_4.prototype._MID="middle";
HxG_4.prototype._CTR="center";
HxG_4.prototype._LFT="left";
HxG_4.prototype._RGT="right";
HxG_4.prototype._TOP="top";
HxG_4.prototype._BOT="bottom";
HxG_4.prototype._COR="color";
HxG_4.prototype._BCOR= "background-color";
HxG_4.prototype._BRD="border";
HxG_4.prototype._BRCOR= "border-color";
HxG_4.prototype._BRSTY= "border-style";
HxG_4.prototype._BRWID= "border-width";
HxG_4.prototype._BRLWD= "border-left-width";
HxG_4.prototype._BRRWD= "border-right-width";
HxG_4.prototype._BRTWD= "border-top-width";
HxG_4.prototype._BRBWD= "border-bottom-width";
HxG_4.prototype._BRLCL= "border-left-color";
HxG_4.prototype._BRRCL= "border-right-color";
HxG_4.prototype._BRTCL= "border-top-color";
HxG_4.prototype._BRBCL= "border-bottom-color";
HxG_4.prototype._BRLSY= "border-left-style";
HxG_4.prototype._BRRSY= "border-right-style";
HxG_4.prototype._BRTSY= "border-top-style";
HxG_4.prototype._BRBSY= "border-bottom-style";
HxG_4.prototype._BIMG="background-image";
HxG_4.prototype._BPOS="background-position";
HxG_4.prototype._BREP="background-repeat";
HxG_4.prototype._NREP="no-repeat";
HxG_4.prototype._WD="width";
HxG_4.prototype._HT="height";
HxG_4.prototype._ALT= "alt";
HxG_4.prototype._TTL= "title";
HxG_4.prototype._SRC= "src"
HxG_4.prototype._TYP= "type";
HxG_4.prototype._XT="text";
HxG_4.prototype._VIS="visibility";
HxG_4.prototype._DSP="display";
HxG_4.prototype._ZND="z-index";
HxG_4.prototype._MGNL= "margin-left";
HxG_4.prototype._MGNR= "margin-right";
HxG_4.prototype._MGNT= "margin-top";
HxG_4.prototype._MGNB= "margin-bottom";
HxG_4.prototype._PADL= "padding-left";
HxG_4.prototype._PADR= "padding-right";
HxG_4.prototype._PADT= "padding-top";
HxG_4.prototype._PADB= "padding-bottom";
HxG_4.prototype._TXA="text-align";
HxG_4.prototype._VXA="vertical-align";
HxG_4.prototype._CRS="cursor";
HxG_4.prototype._URL="url(";
HxG_4.prototype._URI="uri(";
HxG_4.prototype._BODY= "#body";
HxG_4.prototype._DOC="#document";
HxG_4.prototype._WDW="#window";
HxG_4.prototype._RAD="radio";
HxG_4.prototype._CHK="checkbox";
HxG_4.prototype._SBM="submit";
HxG_4.prototype._RES="reset";
HxG_4.prototype._PWD="password";
HxG_4.prototype._TBTN= "button";
HxG_4.prototype._lIMG= "image";
HxG_4.prototype._lINP= "input";
HxG_4.prototype._VL="value";
HxG_4.prototype._onKD= "onkeydown";
HxG_4.prototype._evKD= "keydown";
HxG_4.prototype._onKU= "onkeyup";
HxG_4.prototype._evKU= "keyup";
HxG_4.prototype._onKP= "onkeypress";
HxG_4.prototype._evKP= "keypress";
HxG_4.prototype._onMC= "onclick";
HxG_4.prototype._evMC= "click";
HxG_4.prototype._onMCC="ondblclick";
HxG_4.prototype._evMCC="dblclick";
HxG_4.prototype._onMU= "onmouseup";
HxG_4.prototype._evMU= "mouseup";
HxG_4.prototype._onMD= "onmousedown";
HxG_4.prototype._evMD= "mousedown";
HxG_4.prototype._onMM= "onmousemove";
HxG_4.prototype._evMM= "mousemove";
HxG_4.prototype._onMV= "onmouseover";
HxG_4.prototype._evMV= "mouseover";
HxG_4.prototype._onMO= "onmouseout";
HxG_4.prototype._evMO= "mouseout";
HxG_4.prototype._onIN= "oninput";
HxG_4.prototype._onMS= "onmouse";
HxG_4.prototype._onPC= "onpropertychange";
HxG_4.prototype._onDOMPC="DOMAttrModified";
HxG_4.prototype._onDOMVPC= "DOMCharacterDataModified";
HxG_4.prototype._onR="onresize";
HxG_4.prototype._onF="onfocus";
HxG_4.prototype._evF="focus";
HxG_4.prototype._onB="onblur";
HxG_4.prototype._evB="blur";
HxG_4.prototype._onL="onload";
HxG_4.prototype._onUL= "onunload";
HxG_4.prototype._onC="onchange";
HxG_4.prototype._onSC= "onscroll";
HxG_4.prototype._evSC= "scroll";
HxG_4.prototype._onCM= "oncontextmenu";
HxG_4.prototype._evCM= "contextmenu";
HxG_4.prototype._onCP="oncopy";
HxG_4.prototype._evCP="copy";
HxG_4.prototype._onCT="oncut";
HxG_4.prototype._evCT="cut";
HxG_4.prototype._onPST= "onpaste";
HxG_4.prototype._evPST= "paste";
if (document && document.createElement && ((document.createElement("button")).tagName == "button")) {
HxG_4.prototype.tagCase=function (s) {return s.toLowerCase();}
} else {
HxG_4.prototype.tagCase=function (s) {return s.toUpperCase();}
}
HxG_4.prototype._BBODY=HxG_4.prototype.tagCase("body");
HxG_4.prototype._DDOC=HxG_4.prototype.tagCase("document");
HxG_4.prototype._TAB=HxG_4.prototype.tagCase("table");
HxG_4.prototype._TBDY=HxG_4.prototype.tagCase("tbody");
HxG_4.prototype._TD=HxG_4.prototype.tagCase("td");
HxG_4.prototype._TR=HxG_4.prototype.tagCase("tr");
HxG_4.prototype._DIV=HxG_4.prototype.tagCase("div");
HxG_4.prototype._INP=HxG_4.prototype.tagCase("input");
HxG_4.prototype._TXT=HxG_4.prototype.tagCase("textarea");
HxG_4.prototype._BTN=HxG_4.prototype.tagCase("button");
HxG_4.prototype._IMG=HxG_4.prototype.tagCase("img");
HxG_4.prototype._SEL=HxG_4.prototype.tagCase("select");
HxG_4.prototype._SPN=HxG_4.prototype.tagCase("span");
HxG_4.prototype._FRM=HxG_4.prototype.tagCase("form");
HxG_4.prototype._ANC=HxG_4.prototype.tagCase("a");
HxG_4.prototype._EMB=HxG_4.prototype.tagCase("embed");
HxG_4.prototype._OBJ=HxG_4.prototype.tagCase("object");
HxG_4.prototype._APP=HxG_4.prototype.tagCase("applet");
HxG_4.prototype._BR=HxG_4.prototype.tagCase("br");
HxG_4.prototype._HR=HxG_4.prototype.tagCase("hr");
HxG_4.prototype._IFRM=HxG_4.prototype.tagCase("iframe");
HxG_4.prototype._LAB=HxG_4.prototype.tagCase("label");
HxG_4.prototype.INTERR_Dispatcher="Internal Error: Cannot dispatch user function.";
HxG_4.prototype.INTERR_Constraint="Internal error: Cannot consruct constraint.";
HxG_4.prototype.INTERR_Bad_Family="Internal error: Invalid stylesheet family.";
HxG_4.prototype.INTERR_Parse_Literal= "Parse error: Failed parsing a strict literal: ";
HxG_4.prototype.INTERR_Parse_TwoDig="Parse error: Failed parsing number digits: ";
HxG_4.prototype.INTERR_Parse_end="Parse error: Failing at end of parse: ";
HxG_4.prototype.INTERR_Format_Symbol="Bad format: Unexpected number symbol.";
HxG_4.prototype.INTERR_Format_ZSymbol="Bad format: Unexpected 0 symbol.";
HxG_4.prototype.INTERR_Format_LSymbol="Bad format: Unexpected # symbol.";
HxG_4.prototype.INTERR_Format_Group="Bad format: Bad grouping character: ";
HxG_4.prototype.INTERR_Format_Decimal="Bad format: Multiple decimal points.";
HxG_4.prototype.INTERR_Format_Exponent="Bad format: Bad exponent marker.";
HxG_4.prototype.INTERR_Format_Padding="Bad format: Incorrect use of padding marker.";
HxG_4.prototype.INTERR_Format_Percent="Bad format: Cannot have percent and mille.";
HxG_4.prototype.STR_percent_char="%";
HxG_4.prototype.STR_mille_char="\u2030";
HxG_4.prototype.STR_icurrency_char="\u00A4";
HxG_4.prototype.HxICal=function () {
this.bIsGregorian=false;
this.bIsHebrew=false;
this.bIsHijiri=false;
this.hebrewAccumulatedMonthsPerCycle=[0,12,24,37,49,61,74,86,99,111,123,136,148,160,173,185,197,210,222];
this.hijiriAccumulatedDaysPerCycle=[0,354,709,1063,1417,1772,2126,2481,2835,3189,3544,3898,4252,4607,4961,5316,5670,6024,6379,6733,7087,7442,7796,8150,8505,8859,9214,9568,9922,10277];
}
HxG_4.prototype.HxICal.prototype.setCalendar=function (bIsGreg, bIsHb, bIsHj) {
this.bIsHebrew=bIsHb;
this.bIsHijiri=bIsHj;
this.bIsGregorian=(!this.bIsHebrew && !this.bIsHijiri);
}
HxG_4.prototype.HxICal.prototype.daysInYear=function (cyr) {
if (this.bIsGregorian) return ((cyr==null||this.isLeapYear(cyr))?366:365);
else if (this.bIsHijiri) return ((cyr==null||this.isLeapYear(cyr))?355:354);
else return (hX_4.cal.calcRoshHaShannah(cyr+1)-hX_4.cal.calcRoshHaShannah(cyr));
}
HxG_4.prototype.HxICal.prototype.monthsInYear=function (cyr) {
return ((!this.bIsHebrew)?12:(cyr==null||this.isLeapYear(cyr)?13:12));
}
HxG_4.prototype.HxICal.prototype.maxDaysInMonth=function () {
return ((this.bIsGregorian)?31:30);
}
HxG_4.prototype.HxICal.prototype.minDaysInMonth=function () {
return ((this.bIsGregorian)?28:29);
}
HxG_4.prototype.HxICal.prototype.daysInMonth=function (cm,cyr) {
if (this.bIsGregorian) return ((cm>11)?99:((1==cm)?(this.isLeapYear(cyr)?29:28):((cm==3||cm==5||cm==8||cm==10)?30:31)));
if (this.bIsHijiri) return ((cm>11)?99:((11==cm)?(this.isLeapYear(cyr)?30:29):((cm%2==1)?29:30)));
else {
var dYr, l=this.isLeapYear(cyr), r=(cm%2==1)?29:30;
if (cm>11) r=(!l)?99:((cm>12)?99:29);
else if (cm>10) r=(l)?30:29;
else if (cm==7 || cm==8) {
dYr=this.daysInYear(cyr);
r+=(((cm==7) && (dYr==355 || dYr==385))?1:0);
r -= (((cm==8) && (dYr==353 || dYr==383))?1:0);
}
return r;
}
}
HxG_4.prototype.HxICal.prototype.dateToCalendar=function (dt) {
var l,mx,yD,y,m,d;
if (this.bIsGregorian) {
y=dt.getAdjYear(); m=dt.getMonth(); d=dt.getDate();
} else if (this.bIsHijiri) {
yD=this.gregorianToJulian(dt)-1948440;
if (yD < 0) return {year:1, month:0, date:1};
y=Math.floor(yD/10631);
y=(y*30)+1;
l=yD%10631; mx=this.daysInYear(y);
while (l>=mx) {
y++; l-=mx;
mx=this.daysInYear(y);
}
m=0; d=l; mx=this.daysInMonth(m,y);
while (d>=mx) {
m++; d-=mx;
mx=this.daysInMonth(m,y);
}
d++;
} else {
yD=this.gregorianToJulian(dt);
if (yD < 347997) return {year:1, month:6, date:1};
y=dt.getFullYear()+3761; m=6; d=1;
l=this.calendarToJulian(y,m,d);
while (yD < l && l >= 0) {
y--; l=this.calendarToJulian(y,m,d);
}
yD=yD-l;
mx=this.daysInYear(y);
while (yD>=mx) {
y++; yD-=mx;
mx=this.daysInYear(y);
}
m=6; mx=this.daysInMonth(m,y);
while (yD>=mx) {
m++; yD-=mx;
m=(m>=this.monthsInYear(y))?0:m;
mx=this.daysInMonth(m,y);
}
d=yD+1;
}
return {year:y, month:m, date:d};
}
HxG_4.prototype.HxICal.prototype.calendarToDate=function (y,m,d,h,mn,s,mls) {
var o,r;
if (this.bIsGregorian) o=this.calendarToDatePc(((y<0)?y+1:y),m,d);
else o=this.calendarToDatePc(y,m,d);
r=new Date(o.year, o.month, o.date, h, mn, s);
r.setFullYear(o.year); r.setMonth(o.month); r.setDate(o.date);
if (mls && mls>0) r.setMilliseconds(mls);
return r;
}
HxG_4.prototype.HxICal.prototype.calendarToDatePc=function (y,m,d) {
if (this.bIsGregorian) return {year:y, month:m, date:d};
return this.julianToDatePc(this.calendarToJulian(y,m,d));
}
HxG_4.prototype.HxICal.prototype.calendarToJulian=function (y,m,d) {
var jD,j,mX;
if (this.bIsGregorian) jD=this.gregorianToJulian(y,m,d);
else if (this.bIsHijiri) {
if (y < 0) return 0;
jD=Math.floor((y-1)/30)*10631;
jD+=this.hijiriAccumulatedDaysPerCycle[(y-1)%30];
for (j=0; j<m; j++) jD+=this.daysInMonth(j,y);
jD+=(d-1+1948440);
}
else {
if (y < 0) return 0;
jD=this.calcRoshHaShannah(y);
mX=(m>=6)?m:(this.monthsInYear(y));
for (j=6; j<mX; j++) jD+=this.daysInMonth(j,y);
if (mX!=m) for (j=0; j<m; j++) jD+=this.daysInMonth(j,y);
jD+=(d+347995);
}
return jD;
}
HxG_4.prototype.HxICal.prototype.julianToDatePc= function (jd) {
var i,j,x,z,y,d,m;
if (jd < 0) return {year:-4713, month:0, date:1};
if (jd > 2299160) {
y=Math.floor(((jd-1867216)-0.25)/36524.25);
x=jd + y + 1 - Math.floor(0.25*y);
} else x=jd;
y=x + 1524.0;
z=Math.floor(6680.0 + ((y-2439870.0)-122.1)/365.25);
i=Math.floor(z*365.25);
j=Math.floor((y-i)/30.6001);
d=Math.floor(y-i-Math.floor(j*30.6001));
m=Math.floor(j-1.0);		if (m > 12) m -= 12;
y=Math.floor(z-4715.0);	if (m > 2) y--;
return {year:y, month:m-1, date:d};
}
HxG_4.prototype.HxICal.prototype.gregorianToJulian=function(dt, iM, iD) {
var g=(15+31*(10+12*1582)), jd, xy, xm, x, y, m, d;
if (typeof(dt)=="object") {y=dt.getFullYear(); m=dt.getMonth()+1; d=dt.getDate();} else {y=dt;(y<0)?y++:y;m=iM+1;d=iD;}
if (y <= -4713) return 0;
if (y==1582 && m==10 && d>4 && d<15) d=4;
if (m > 2) {
xy=y;
xm=m + 1;
} else {
xy=y - 1;
xm=m + 13;
}
jd=Math.floor(Math.floor(365.25*xy) + Math.floor(30.6001*xm) + d + 1720995);
if ((d+31*(m+12*y)) >= g) {
x=Math.floor(0.01*xy);
jd+=(2 - x + Math.floor(0.25*x));
}
return jd;
}
HxG_4.prototype.HxICal.prototype.isLeapYear=function (cyr) {
var y=(cyr<0)?cyr+1:cyr;
if (this.bIsGregorian) return (((0==y%4) && (y<1582 || 0!=(y%100))) || (0==y%400));
else return (this.isLunarLeap(y%((this.bIsHijiri)?30:19)));
}
HxG_4.prototype.HxICal.prototype.nearestLeapYear=function (cyr) {
var y, yc;
if (this.bIsGregorian) {
y=(y<0)?y++:y;
y=Math.floor(cyr/4)*4;
y=((y<1582) || (0!=y%100) || (0==y%400))?y:(y+4);
return ((y==0)?((cyr<0)?-4:4):y);
} else if (this.bIsHijiri) {
y=cyr; yc=y%30;
while (!this.isLunarLeap(yc)) {
y++;yc++;
}
return y;
} else {
y=cyr; yc=y%19;
while (!this.isLunarLeap(yc)) {
y++;yc++;
}
return y;
}
}
HxG_4.prototype.HxICal.prototype.isLunarLeap=function (c) {
if (this.bIsHijiri)	return (c==2 || c==5 || c==7 || c==10 || c==13 || c==15 || c==18 || c==21 || c==24 || c==26 || c==29);
return (c==0 || c==3 || c==6 || c==8 || c==11 || c==14 || c==17);
}
HxG_4.prototype.HxICal.prototype.getDay=function (dt) {
return (Math.abs((this.gregorianToJulian(dt)+1)%7));
}
HxG_4.prototype.HxICal.prototype.getJulianDay=function (dt) {
var i, d1, d2, m=dt.getMonth(), d=dt.getDate(), y=dt.getAdjYear();
if (this.bIsGregorian) {
d1=this.gregorianToJulian(y,0,1); d2=this.gregorianToJulian(y,m,d);
} else {
var o=this.dateToCalendar(dt);
d1=this.calendarToJulian(o.year, 0, 1); d2=this.calendarToJulian(o.year, o.month, o.date);
}
return (d2-d1+1);
}
HxG_4.prototype.HxICal.prototype.getDayOfWeekInMonth=function (dt) {
var j=0, d=(this.bIsGregorian)?(dt.getDate()):((this.dateToCalendar(dt)).date);
var k=Math.floor((d-1)/7)+1;
while (d > 0) {j++; d -= 7;}
return (j);
}
HxG_4.prototype.HxICal.prototype.getJulianWeek=function (dt, FDOW) {
var ofd, off, fd, fdw=(FDOW!=null)?FDOW:0, o=this.dateToCalendar(dt), y=o.year, d=this.getJulianDay(dt)-1, yD=this.daysInYear(y)-1;
if (d>=yD-6) {
ofd=this.calendarToJulian(y+1,0,1), fd=(Math.abs((ofd+1)%7))
off=(fdw>fd)?((fd+7)-fdw):(fd-fdw);
if (off > (yD-d)) return {yr:y+1, wk:1};
}
ofd=this.calendarToJulian(y,0,1), fd=(Math.abs((ofd+1)%7))
off=(fdw>fd)?((fd+7)-fdw):(fd-fdw);
d=d + off;
if (d >= 0)
return {yr:y, wk:(Math.floor(d/7)+1)};
else
 return {yr:-1, wk:-1};
}
HxG_4.prototype.HxICal.prototype.getJulianWeekOfMonth=function (dt, FDOW) {
var o=this.dateToCalendar(dt), ofd=this.calendarToJulian(o.year,o.month,1), fd=(Math.abs((ofd+1)%7)), f=(FDOW==0)?7:FDOW, d=o.date-1-(f-fd);
return (Math.floor(d/7)+2);
}
HxG_4.prototype.HxICal.prototype.julianToMonthDay=function (cjd, cyr) {
var m=0, d=cjd, dInM=this.daysInMonth(m,cyr);
while (d > dInM) {
d-=dInM; m++;
dInM=this.daysInMonth(m,cyr);
}
return {month:m, date:d};
}
HxG_4.prototype.HxICal.prototype.twoYearToFourYear=function (cyr, today, offset) {
var y=cyr, o=this.dateToCalendar(today);
y+=((Math.floor(o.year/100)*100)-100);
if (y <= offset) y+=100;
return y;
}
HxG_4.prototype.HxICal.prototype.adjustDate=function (dt, iYearInc, iMonthInc, iDayDif, iHourDif, iMinuteDif, iSecondDif) {
var o, x, msDif=0, bResetTime=false, iOrigHour=dt.getHours(), iOrigMinute=dt.getMinutes(), iOrigSecond=dt.getSeconds();
if (!iHourDif && !iMinuteDif && !iSecondDif && iDayDif) {
bResetTime=true;
dt.setHours(dt.getTimezoneOffset < 0 ? 4 : 20);
}
if (iSecondDif) msDif+=iSecondDif * 1000;
if (iMinuteDif) msDif+=iMinuteDif * 60000;
if (iHourDif) msDif+=iHourDif * 3600000;
if (iDayDif) msDif+=iDayDif * 86400000;
if (msDif) dt.setTime(dt.getTime() + msDif);
o=this.dateToCalendar(dt);
if (iYearInc) o.year+=iYearInc;
if (iMonthInc) o.month+=iMonthInc;
x=this.monthsInYear(o.year);
if (o.month >= x) {
o.month=(o.month-x);
o.year++;
}
else if (o.month < 0) {
o.year--;
x=this.monthsInYear(o.year);
o.month=x+o.month;
}
x=this.daysInMonth(o.month, o.year);
if (o.date > x) o.date=x;
o=this.calendarToDatePc(o.year, o.month, o.date);
dt.setFullYear(o.year);	dt.setMonth(o.month); dt.setDate(o.date);
dt.setFullYear(o.year);	dt.setMonth(o.month); dt.setDate(o.date);
if (bResetTime) {
dt.setHours(iOrigHour);
dt.setMinutes(iOrigMinute);
dt.setSeconds(iOrigSecond);
}
return dt;
}
HxG_4.prototype.HxICal.prototype.calcRoshHaShannah=function (cyr) {
var dow, lunarC=Math.floor((cyr-1)/19), y=Math.floor((cyr-1)%19), om=this.calcMoladOfLunarCycle(lunarC);
om.moladHalakim+=765433 * this.hebrewAccumulatedMonthsPerCycle[y];
om.moladDay+=Math.floor(om.moladHalakim/25920);
om.moladHalakim=om.moladHalakim%25920;
dow=(om.moladDay%7);
if /* Rule 2 */ ((om.moladHalakim >= 19440) ||  (!(y==2 || y==5 || y==7 || y==10 || y==13 || y==16 || y==18) && dow == 2 && om.moladHalakim >= 9924) ||
((y==3 || y==6 || y==8 || y==11 || y==14 || y==17 || y==0) && dow==1 && om.moladHalakim >= 16789))
om.moladDay++;
dow=(om.moladDay%7); if (dow == 3 || dow == 5 || dow == 0) om.moladDay++;
return om.moladDay;
}
HxG_4.prototype.HxICal.prototype.calcMoladOfLunarCycle=function (lunarCycle) {
var h=31524+(179876755*lunarCycle);
return {moladDay:(Math.floor(h/25920)), moladHalakim:(h%25920)};
}
Date.prototype.getAdjYear=function(dt) {
var y=this.getFullYear();
return ((y<=0)?y-1:y);
}
Date.prototype.Hx4Clone=function(dt) {
var r, y=this.getFullYear();
if (dt != null && dt >= 2)  {
r=new Date (this.getFullYear(), this.getMonth(), this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds());
} else if (dt != null && dt == 1)
r=new Date (this.getFullYear(), 0, 0, this.getHours(), this.getMinutes(), this.getSeconds());
else
 r=new Date (this.getFullYear(), this.getMonth(), this.getDate(), 12, 0, 0);
r.setFullYear(y);
return (r);
}
Date.prototype.Hx4CompareDate=function(oDate, bCompareTime) {
var iDiff=this.getFullYear() - oDate.getFullYear();
if (iDiff==0) iDiff=this.getMonth() - oDate.getMonth();
if (iDiff==0) iDiff=this.getDate() - oDate.getDate();
if (bCompareTime && iDiff==0) {
iDiff=this.getHours() - oDate.getHours();
if (iDiff==0) iDiff=this.getMinutes() - oDate.getMinutes();
if (iDiff==0) iDiff=this.getSeconds() - oDate.getSeconds();
}
if (iDiff < 0) iDiff=-1;
else if (iDiff > 0) iDiff=1;
return iDiff;
}
HxG_4.prototype.addComponent=function(id, obj) {
if (id && obj && this.brw.isW3C()) {
var DOMobj=this.getElementById(id);
if (DOMobj && !this.Components[id]) {
this.Components[id]=obj;
obj.id=id;
obj.DOMobj=DOMobj;
obj.HTMLrendered=false;
obj.p=this;
obj.r=hX_4.currentResource();
this.loadComponent(obj);
return true;
}
}
return false;
}
HxG_4.prototype.add=HxG_4.prototype.addComponent;
HxG_4.prototype.addSubComponent=function (parentId, iChildId, iObj, iPosition) {
if (parentId && this.brw.isW3C()) {
var theParent=this.getComponentById (parentId);
theParent=(theParent == null) ? this.getSubComponentById (parentId) : theParent;
if (theParent) {
if (hX_4.isString(iChildId)) {
if (iChildId && iObj) {
this.SubComponents[iChildId]=iObj;
iObj.id=iChildId;
iObj.p=theParent;
theParent.addSubComponent (iObj, iPosition);
}
} else if (iChildId.length) {
var a=iChildId, childId, i;
for (i=0; i<a.length; i++) {
if (a[i]) {
childId=parentId + hX_4._Y + (i+1);
this.SubComponents[childId]=a[i];
a[i].id=childId;
a[i].p=theParent;
theParent.addSubComponent(a[i], null);
}
}
}
}
return true;
}
return false;
}
HxG_4.prototype.addS=HxG_4.prototype.addSubComponent;
HxG_4.prototype.removeSubComponent=function (parentId, childId) {
if (parentId && this.brw.isW3C()) {
var theParent=this.getComponentById (parentId);
theParent=(theParent == null) ? this.getSubComponentById (parentId) : theParent;
if (theParent && childId) {
this.SubComponents[childId]=null;
theParent.removeSubComponent (childId);
return true;
}
}
return false;
}
HxG_4.prototype.remS=HxG_4.prototype.removeSubComponent;
HxG_4.prototype.addBehavior=function(id, eventname, obj) {
if (id && eventname && obj && obj.type && this.brw.isW3C()) {
var DOMobj=(id==hX_4._BODY)?document.body:this.getElementById(id);
if (DOMobj) {
var e=hX_4.getBehaviorEvent(obj.type, eventname), i=e.indexOf(hX_4._ON), thisid=id + hX_4._HX + obj.type + hX_4._U + ((i==0)?e.substr(2):e);
if (this.Behaviors[thisid] && this.Behaviors[thisid].addSubComponent) {
this.Behaviors[thisid].addSubComponent(obj);
} else {
this.Behaviors[thisid]=obj;
obj.id=id;
obj.eventname=e;
obj.DOMobj=DOMobj;
obj.HTMLrendered=false;
obj.p=this;
obj.r=hX_4.currentResource();
this.loadComponent(obj);
}
return true;
}
}
return false;
}
HxG_4.prototype.addB=HxG_4.prototype.addBehavior;
HxG_4.prototype.addConverter=function(id, obj) {
if (id && obj && this.brw.isW3C()) {
this.Converters[id]=obj;
obj.id=id;
obj.p=this;
return true;
}
return false;
}
HxG_4.prototype.addC=HxG_4.prototype.addConverter;
HxG_4.prototype.addValidator=function(id, obj) {
if (id && obj && this.brw.isW3C()) {
this.Validators[id]=obj;
obj.id=id;
obj.p=this;
return true;
}
return false;
}
HxG_4.prototype.addV=HxG_4.prototype.addValidator;
HxG_4.prototype.addHTMLTag=function(id, type) {
if (id && type=="taborder" && this.brw.isW3C()) {
var DOMobj=this.getElementById(id);
if (DOMobj) {
this.HTMLTags.push(DOMobj);
return true;
}
}
return false;
}
HxG_4.prototype.addH=HxG_4.prototype.addHTMLTag;
HxG_4.prototype.addPopup=function(id, parentid, srcvalue, clickstyle, fullstyle, pagenode) {
if (id && this.brw.isW3C()) {
if (this.Popups[id]) {
return this.Popups[id];
} else {
var obj=new this.JSFPopup(parentid, srcvalue, clickstyle, fullstyle, pagenode);
this.Popups[id]=obj;
obj.id=id;
obj.HTMLrendered=false;
obj.p=this;
obj.r=hX_4.currentResource();
this.loadComponent(obj);
return obj;
}
}
return null;
}
HxG_4.prototype.addP=HxG_4.prototype.addPopup;
HxG_4.prototype.onPageLoad=function () {
if (!this.bodyLoadRewritten) this.bodyLoadEventNum=this.attachEvent(document.body, hX_4._onL, hX_4._lL, this.pageLoadAction);
this.bodyLoadRewritten=true;
return true;
}
HxG_4.prototype.loadComponent=function(c) {
if (this.bodyLoadDone && c.onPageLoad) {
if (!c.HTMLrendered) c.onPageLoad();
c.HTMLrendered=true;
}
}
HxG_4.prototype.pageLoadAction=function(evt) {
var varobj, inBodyLoad=hX_4.bodyLoadDone;
hX_4.bodyLoadDone=true;
hX_4.removeEvent(document.body, hX_4._onL, hX_4.bodyLoadEventNum);
for (varobj in hX_4.Components) hX_4.loadComponent(hX_4.Components[varobj]);
for (varobj in hX_4.Behaviors) hX_4.loadComponent(hX_4.Behaviors[varobj]);
for (varobj in hX_4.Popups) hX_4.loadComponent(hX_4.Popups[varobj]);
if (!inBodyLoad && hX_4.globalResize && hX_4.brw.isNavOrMoz()) hX_4.redraw();
if((typeof ODCRegistry) != 'undefined' && ODCRegistry)
this.bodyUnloadEventNum=hX_4.attachEvent(document.body, hX_4._onUL , hX_4._lL, hX_4.pageUnloadAction);
return;
}
HxG_4.prototype.pageUnloadAction=function(evt)
{
hX_4.removeEvent(document.body, hX_4._onUL, this.bodyUnloadEventNum);
unbindElements();
}
HxG_4.prototype.redraw=function () {
var varobj;
for (varobj in this.Components) {
if (this.Components[varobj].uirelease) this.Components[varobj].uirelease();
if (this.Components[varobj].redraw) this.Components[varobj].redraw();
}
for (varobj in this.Popups) {
if (this.Popups[varobj].uirelease) this.Popups[varobj].uirelease();
}
if (hX_4.tabNav != null) {
delete (hX_4.tabNav);
hX_4.tabNav=null;
}
hX_4.CSSSelectors=null;
if (!(this.isUnDef(typeof hX_1)) && (hX_1 != null) && (hX_1.redraw)) hX_1.redraw();
if (!(this.isUnDef(typeof hX_2)) && (hX_2 != null) && (hX_2.redraw)) hX_2.redraw();
if (!(this.isUnDef(typeof hX_3)) && (hX_3 != null) && (hX_3.redraw)) hX_3.redraw();
return true;
}
HxG_4.prototype.uirelease=function (freeOnly) {
this.dragger.killDrag();
this.mouser.killMouse();
if (hX_4.pendingPrompt != null) hX_4.pendingPrompt.uirelease();
if (freeOnly == null) {
var o=this.uistate.getActiveComponent();
if (o) o.uirelease();
this.uistate.setActiveComponent (hX_4._E);
}
this.i.killAllTimers();
if (freeOnly == null) {
for (varobj in this.Components)
if (this.Components[varobj].uirelease) this.Components[varobj].uirelease();
}
for (varobj in this.Popups)
if (this.Popups[varobj].uirelease) this.Popups[varobj].uirelease();
if (freeOnly == null) {
if (!(this.isUnDef(typeof hX_1)) && (hX_1 != null) && (hX_1.uirelease)) hX_1.uirelease();
if (!(this.isUnDef(typeof hX_2)) && (hX_2 != null) && (hX_2.uirelease)) hX_2.uirelease()
if (!(this.isUnDef(typeof hX_3)) && (hX_3 != null) && (hX_3.uirelease)) hX_3.uirelease()
}
return true;
}
HxG_4.prototype.getComponentById=function(obj) {
return (obj != null && this.isString(obj)) ? ((this.Components[obj]==undefined)?null:this.Components[obj]) : obj;
}
HxG_4.prototype.getComponentsInId=function(inobj, a) {
var c, obj=hX_4.getElementById(inobj), r=((a)?a:null);
if (obj) {
if (obj.id!=undefined && obj.id != null && obj.id.length > 0) {
c=hX_4.getComponentById(obj.id);
if (c) {
if (r==null) r=[];
r.push(c.id);
}
}
for (obj=obj.firstChild; obj != null; obj=obj.nextSibling) r=hX_4.getComponentsInId(obj, r);
}
return r;
}
HxG_4.prototype.getSubComponentById=function(obj) {
return (obj != null && this.isString(obj)) ? ((this.SubComponents[obj]==undefined)?null:this.SubComponents[obj]) : obj;
}
HxG_4.prototype.getParentComponentById=function(obj) {
return (obj != null && this.isString(obj)) ? ((this.SubComponents[obj].p==undefined)?null:this.SubComponents[obj].p) : obj;
}
HxG_4.prototype.getConverterById=function(obj) {
return (obj != null && this.isString(obj)) ? ((this.Converters[obj]==undefined)?null:this.Converters[obj]) : obj;
}
HxG_4.prototype.getValidatorById=function(obj) {
return (obj != null && this.isString(obj)) ? ((this.Validators[obj]==undefined)?null:this.Validators[obj]) : obj;
}
HxG_4.prototype.getBehaviorById=function(obj, behaviorname, eventname) {
if (obj != null && this.isString(obj)) {
var e=this.getBehaviorEvent(behaviorname, eventname),i=e.indexOf(hX_4._ON), thisid=obj + hX_4._HX + behaviorname + hX_4._U + ((i==0)?e.substr(2):e);
return ((this.Behaviors[thisid]==undefined)?null:hX_4.Behaviors[thisid]);
}
return (obj);
}
HxG_4.prototype.getBehaviorEvent=function(bname, ename) {
return (ename);
}
HxG_4.prototype.getBehaviorsById=function(obj) {
if (obj != null && this.isString(obj)) {
var behavior, r=[];
for (behavior in hX_4.Behaviors) if (hX_4.Behaviors[behavior].id == obj) r.push(hX_4.Behaviors[behavior]);
}
return (r);
}
HxG_4.prototype.getPopupById=function(obj) {
return (obj != null && this.isString(obj)) ? ((this.Popups[obj]==undefined)?null:this.Popups[obj]) : obj;
}
HxG_4.prototype.getElementById=function(obj) {
var theObj=obj;
if (obj != null && this.isString(obj)) {
if (window.document.getElementById != null) theObj=window.document.getElementById(obj);
else if (window.document.all != null) theObj=window.document.all(obj);
}
return theObj;
}
HxG_4.prototype.attachComponentEvent=function (objid, eventname, position) {
hX_4.attachEvent (objid, eventname, position, hX_4.i.dispatchComponent);
}
HxG_4.prototype.attachBehaviorEvent=function (objid, behaviorname, eventname, position, alias) {
if (alias) hX_4.attachEvent(objid, eventname, position, "hX_4.i.dispatchBehavior(this, event, '" + behaviorname + "', '" + alias + "')");
else hX_4.attachEvent(objid, eventname, position, "hX_4.i.dispatchBehavior(this, event, '" + behaviorname + "')");
}
HxG_4.prototype.attachInputStateEvent=function (objid, eventname) {
hX_4.attachEvent(objid, eventname, hX_4._lF, hX_4.i.dispatchInputState);
}
HxG_4.prototype.attachEvent=function (objid, eventname, position, handler, handler1, args, MozDown) {
if (objid && eventname && handler) {
var rValue=null, obj=this.getElementById(objid);
if (obj) {
var srcid=this.i.dispatchToID(obj), userObj=hX_4.lookupEvent (hX_4._uR, srcid, eventname);
if (userObj == null) userObj=hX_4.addNewEvent (srcid, obj, eventname, hX_4._uR, handler1, args, MozDown);
if (position == hX_4._lF || position == "first") 		rValue=userObj.addPre  (hX_4._lF, handler);
else if (position == hX_4._lP || position == "previous")rValue=userObj.addPre  (hX_4._lL, handler);
else if (position == hX_4._lN || position == "next")	rValue=userObj.addPost (hX_4._lF, handler);
else													rValue=userObj.addPost (hX_4._lL, handler);
var tgtobj=(srcid == hX_4._WDW)? window:((srcid == hX_4._BODY) ? document.body : obj);
if (this.brw.isIE())
tgtobj.setAttribute(eventname, hX_4.runEvent);
else {
if (eventname == hX_4._onPC) {
tgtobj.addEventListener((args && args.length && args[0]==hX_4._VL)?hX_4._onDOMVPC:hX_4._onDOMPC, hX_4.runEvent1, false);
} else if (MozDown) {
var eName=(eventname.indexOf(hX_4._ON) == 0) ? eventname.substr(2) : eventname;
tgtobj.addEventListener(eName, hX_4.runEvent2, true);
} else
 tgtobj.setAttribute(eventname, "return(hX_4.runEvent(this, event));");
}
return rValue;
}
}
return null;
}
HxG_4.prototype.removeEvent=function (objid, eventname, which) {
if (objid && eventname) {
var obj=this.getElementById(objid);
if (obj) {
var srcid=this.i.dispatchToID(obj), userObj=hX_4.lookupEvent (hX_4._uR, srcid, eventname);
if (userObj != null) {
var user= (arguments.length > 2 && which && hX_4.isString(which) && which == "user");
var num=(arguments.length > 2 && which && hX_4.isNumber(which));
var all=(arguments.length <= 2);
if (user)	userObj.User=null;
if (all)	userObj.remove(0);
if (num)	userObj.remove(which);
return true;
}
}
}
return false;
}
HxG_4.prototype.HxBrowserMgr=function () {
this.m_browserLevel=3;
this.m_browserName='Netscape';
this.m_browserVersion='Unknown';
this.m_clientPlatform='Unknown';
this.m_JSVersion=1.0;
this.m_hasStyleSheet=false;
this.m_hasActiveX=true;
this.m_hasIECacheBug=false;
this.m_hasDOM=false;
this.m_hasDOM1=false;
this.m_hasDOM2=false;
this.m_hasLayers=false;
this.m_hasPersistentStore= false;
this.m_hasInnerHTML=true;
this.m_isIE=false;
this.m_isNavigator=false;
this.m_isFirefox=false;
this.m_isOpera=false;
this.m_isKonqueror=false;
this.m_isMozilla=false;
this.m_isW3C=false;
this.m_isW3C_STD=false;
this.m_isIE6_CSS=false;
this.m_isIE_XP=false;
this.m_isIXP=false;
this.isBrowserLevel=function(neededBrowserLevel) { return (neededBrowserLevel < (this.m_browserLevel+1)); }
this.getRealAppVersion=function() { return this.m_realAppVersion; }
this.hasIEZindexLimitation=function() { return (this.m_isIE && this.m_realAppVersion < 5.5); }
this.getJSVersion=function() { return this.m_JSVersion; }
this.hasActiveX=function() { return this.m_hasActiveX; }
this.hasIECacheBug=function() { return this.m_hasIECacheBug; }
this.hasStyleSheet=function() { return this.m_hasStyleSheet; }
this.hasDOM=function() { this.m_isIE && this.isBrowserLevel(4); }
this.hasDOM1=function() { return this.m_hasDOM1; }
this.hasDOM2=function() { return this.m_hasDOM2; }
this.hasInnerHTML=function() { return this.m_hasInnerHTML; }
this.isIE=function() { return this.m_isIE; }
this.isNetscape=function() { return this.m_isNavigator; }
this.isFirefox=function() { return this.m_isFirefox; }
this.isOpera=function() { return this.m_isOpera; }
this.isKonqueror=function() { return this.m_isKonqueror; }
this.isMozilla=function() { return this.m_isMozilla; }
this.isNavOrMoz=function() { return (this.m_isMozilla || this.m_isNavigator); }
this.isNetscape4=function() { return (this.m_isNavigator && this.m_realAppVersion >= 4.0); }
this.hasLayers=function() { return this.m_hasLayers; }
this.isIE5=function() { return (this.m_isIE && this.m_realAppVersion >= 5.0); }
this.isIE5_5=function() { return (this.m_isIE && this.m_realAppVersion >= 5.5); }
this.isIE6_CSS=function() { return (this.m_isIE6_CSS); }
this.isW3C=function() { return (this.m_isW3C); }
this.isW3Cstd=function() { return (this.m_isW3C_STD); }
this.isPlatformMac=function() { return ((this.m_clientPlatform.indexOf("Mac") != -1) ? true : false); }
this.isPlatformWin=function() { return ((this.m_clientPlatform.indexOf("Win") != -1) ? true : false); }
this.isPlatformIEWinXP=function() { return (this.m_isIE_XP); }
this.isPlatformWinXP=function() { return (this.m_isXP); }
this.inited=false;
}
HxG_4.prototype.HxBrowserMgr.prototype.initClientBrowserObject=function (parent) {
if (this.inited)
return;
this.p=parent;
this.m_browserLevel=parseInt (navigator.appVersion.charAt(0), 10);
if (navigator.appName!=undefined)
this.m_browserName=navigator.appName;
if (navigator.userAgent!=undefined)
this.m_browserVersion=navigator.userAgent;
if (navigator.platform!=undefined)
this.m_clientPlatform=navigator.platform;
this.m_isIE=(this.m_browserName == "Microsoft Internet Explorer");
this.m_isNavigator=(this.m_browserName == "Netscape");
this.m_isOpera=(this.m_browserName == "Opera");
this.m_isKonqueror=(this.m_browserName == "Konqueror");
this.m_isMozilla=(window.navigator != null) ? (window.navigator.userAgent.indexOf("ecko") != -1) : false;
if (this.m_isMozilla) {
this.m_isNavigator=false;
this.m_isFirefox=(window.navigator != null) ? (window.navigator.userAgent.indexOf("irefox") != -1) : false;
}
this.m_realAppVersion=parseFloat(this.m_isIE ? navigator.appVersion.substr(navigator.appVersion.indexOf("MSIE") + 4) : navigator.appVersion);
this.m_hasLayers=this.m_isNavigator && this.m_browserLevel >= 4 && this.m_browserLevel < 5;
if(window.gCookie && gCookie.bs && gCookie.bs == hX_4._E) {
this.m_isIE=true;
this.m_isNavigator=false;
this.m_browserLevel=5;
this.m_realAppVersion=5.0;
}
if(window.gCookie && gCookie.bs && gCookie.bs == "_NN4") {
this.m_isIE=false;
this.m_isNavigator=true;
this.m_browserLevel=4;
this.m_realAppVersion=4.7;
}
this.m_hasIECacheBug=this.m_isIE;
this.m_hasStyleSheet=this.isBrowserLevel(4);
this.m_hasActiveX=this.m_isIE && (navigator.appVersion.indexOf("Win") != -1);
this.m_hasPersistentStore=this.m_isIE && this.m_realAppVersion > 5 && this.isPlatformWin();
if (window.document.implementation != null) {
this.m_hasDOM1=window.document.implementation.hasFeature("HTML","1.0");
this.m_hasDOM2=window.document.implementation.hasFeature("HTML","2.0") &&
window.document.implementation.hasFeature("Events","2.0") &&
window.document.implementation.hasFeature("Core","2.0") &&
window.document.implementation.hasFeature("CSS2","2.0");
}
if (!this.isIE()) {
var testIH=document.createElement("span");
if (testIH && testIH.innerHTML!=undefined) {
try {
testIH.innerHTML="foo";
this.m_hasInnerHTML=(testIH.innerHTML == "foo");
} catch (e) {
this.m_hasInnerHTML=false;
}
} else
 this.m_hasInnerHTML=false;
}
if (this.isPlatformWin() && (navigator.appVersion!=undefined) && (navigator.userAgent!=undefined)) {
var str=((this.m_isIE) ? navigator.appVersion : navigator.userAgent), ix=str.indexOf("Windows NT ");
if (ix >= 0 && ix+11 < str.length) {
str=str.substr(ix+11,3);
if (str.length > 0) {
var snum=new Number(str);
this.m_isXP=(snum >= 5.1);
this.m_isIE_XP=(this.m_isIE && this.m_isXP);
}
}
}
if (document.images) {
this.m_isW3C=(document.body && document.body.style && document.getElementById) ? true : false;
if (this.m_isW3C) {
this.m_isW3C_STD=(this.isNavOrMoz()) ? true : ((document.compatMode && document.compatMode.indexOf("CSS1") >= 0) ? true : false);
this.m_isIE6_CSS=(this.m_isIE && document.compatMode && document.compatMode.indexOf("CSS1") >= 0)? true : false;
}
}
}
HxG_4.prototype.HxGeometryMgr=function (thisparent) {
this.p=thisparent;
this.p.geo=this;
}
HxG_4.prototype.HxGeometryMgr.prototype.getAbsPosTop=function(obj) {
var rValue=0, elem=this.p.getElementById(obj);
if(elem.offsetParent) {
while(elem.offsetParent) {
rValue+=elem.offsetTop;
rValue -= elem.scrollTop;
elem=elem.offsetParent;
}
}
else if(elem.y)
rValue+=elem.y;
return rValue;
}
HxG_4.prototype.HxGeometryMgr.prototype.getAbsPosLeft=function(obj) {
var rValue=0, elem=this.p.getElementById(obj);
if(elem.offsetParent) {
while(elem.offsetParent) {
rValue+=elem.offsetLeft;
rValue -= elem.scrollLeft;
elem=elem.offsetParent;
}
}
else if(elem.x)
rValue+=elem.x;
return rValue;
}
HxG_4.prototype.HxGeometryMgr.prototype.getRendHeight=function (obj) {
var elem=this.p.getElementById(obj);
return parseInt(elem.offsetHeight, 10);
}
HxG_4.prototype.HxGeometryMgr.prototype.getRendWidth=function (obj) {
var elem=this.p.getElementById(obj);
return parseInt(elem.offsetWidth, 10);
}
HxG_4.prototype.HxGeometryMgr.prototype.parseBorder=function (obj, which, defwidth) {
var width=defwidth, bname="border-" + which + "-style";
if ((this.getP(obj, bname)) == hX_4._NO) {
width=0;
} else {
bname="border-" + which + "-width";
var value=this.getP(obj, bname);
width=(value == hX_4._E) ? defwidth : ((value == "thin") ? 2 : ((value == "medium") ? 3 : ((value == "thick") ? 4 : parseInt(value, 10))));
}
return width;
}
HxG_4.prototype.HxGeometryMgr.prototype.testIEXPBorder=function (obj) {
return ((hX_4.brw.isPlatformIEWinXP())?((hX_4.g.getP(obj, hX_4._BRSTY) == hX_4._NO && hX_4.g.getP(obj, hX_4._BRWID) == hX_4._2PX)):false);
}
HxG_4.prototype.HxGeometryMgr.prototype.testXPBorder=function (obj, style) {
var rvalue=false;
if (hX_4.brw.isPlatformWinXP()) {
if (hX_4.brw.isIE()) {
rvalue=(hX_4.g.getP(obj, hX_4._BRSTY) == hX_4._NO && hX_4.g.getP(obj, hX_4._BRWID) == hX_4._2PX);
} else {
var a=hX_4.g.getP(obj,hX_4._BRLSY),  b=hX_4.g.getP(obj,hX_4._BRRSY), c=hX_4.g.getP(obj,hX_4._BRTSY), d=hX_4.g.getP(obj,hX_4._BRBSY);
rvalue=(a==b && b==c && c==d && a==style);
if (rvalue) {
a=hX_4.g.getP(obj,hX_4._BRLWD);
b=hX_4.g.getP(obj,hX_4._BRRWD);
c=hX_4.g.getP(obj,hX_4._BRTWD);
d=hX_4.g.getP(obj,hX_4._BRBWD);
rvalue=(a==b && b==c && c==d && a==hX_4._2PX);
}
if (rvalue) {
a=hX_4.g.getP(obj,hX_4._BRLCL);
b=hX_4.g.getP(obj,hX_4._BRRCL);
c=hX_4.g.getP(obj,hX_4._BRTCL);
d=hX_4.g.getP(obj,hX_4._BRBCL);
var e=hX_4.getEvalStyle(obj,hX_4._COR,hX_4.CLR_BTN);
rvalue=(a==b && b==c && c==d && a==e);
}
}
}
return rvalue;
}
HxG_4.prototype.HxGeometryMgr.prototype.getWindowClientWidth=function () {
if (window.innerWidth)
return window.innerWidth;
else if (this.p.brw.isIE6_CSS())
return document.body.parentElement.clientWidth;
else if (document.body && document.body.clientWidth)
return document.body.clientWidth;
return 0;
}
HxG_4.prototype.HxGeometryMgr.prototype.getWindowClientHeight=function () {
if (window.innerHeight)
return window.innerHeight;
else if (this.p.brw.isIE6_CSS())
return document.body.parentElement.clientHeight;
else if (document.body && document.body.clientHeight)
return document.body.clientHeight;
return 0;
}
HxG_4.prototype.HxGeometryMgr.prototype.getP=function (obj, stylething1, stylething2) {
var rvalue=null, elem=this.p.getElementById(obj);
if (elem) {
if (elem.currentStyle) {
var cstyle=(stylething2) ? stylething2 : this.CSStagToDOMtag (stylething1);
rvalue=elem.currentStyle.getAttribute(cstyle);
} else if (window.getComputedStyle) {
var compStyle=window.getComputedStyle(elem, hX_4._E);
rvalue=compStyle.getPropertyValue(stylething1);
}
}
return (rvalue);
}
HxG_4.prototype.HxGeometryMgr.prototype.setP=function (obj, prop, newV) {
var elem=hX_4.getElementById(obj);
if (elem) {
if (elem.currentStyle) {
var n=this.p.g.CSStagToDOMtag(prop);
if (elem.style.getAttribute(n) != newV)
elem.style.setAttribute(n, newV);
} else {
if (elem.style.getPropertyValue(prop) != newV)
elem.style.setProperty(prop, newV, hX_4._E);
}
}
}
HxG_4.prototype.HxGeometryMgr.prototype.copyP=function (src, dst, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
var x, s,l=arguments.length;
for (x=2; x < l; x++) {
s=hX_4.g.getP(src, arguments[x]);
hX_4.g.setP(dst, arguments[x], s);
}
}
HxG_4.prototype.HxGeometryMgr.prototype.CSStagToDOMtag=function(value) {
var work=value, q=work.indexOf(hX_4._Y);
while (q >= 0) {
work=work.substring(0, q) + (work.substring(q+1, q+2)).toUpperCase() + work.substring(q+2);
q=work.indexOf(hX_4._Y);
}
return work;
}
HxG_4.prototype.HxGeometryMgr.prototype.findContainer=function (obj, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
var i, p=obj;
while (p && p.tagName && p.tagName.toLowerCase() != p0.toLowerCase())
p=(p.parentNode) ? p.parentNode : null;
while (i <= arguments.length-2 && p && p.tagName && p.tagName.toLowerCase() == arguments[i].toLowerCase()) {
p=(p.parentNode) ? p.parentNode : null;
i++;
}
p=(p && p.tagName && p.tagName.toLowerCase() == arguments[arguments.length-1].toLowerCase()) ? p : null;
return p;
}
HxG_4.prototype.HxCache=function () {
this.MAX_STR_DATE_MONTHS=[];
this.MAX_STR_DATE_SHMONTHS=[];
this.MAX_STR_DATE_DAYS=[];
this.MAX_STR_DATE_SHDAYS=[];
this.BIGNUM_converter=null;
}
HxG_4.prototype.HxCache.prototype.strInit=function() {
if (this.MAX_STR_DATE_MONTHS.length==0) {
var i,j,k;
for (i=0;i<3;i++) {
hX_4.c.MAX_STR_DATE_SHDAYS[i]=hX_4.c.MAX_STR_DATE_DAYS[i]=hX_4.c.MAX_STR_DATE_SHMONTHS[i]=hX_4.c.MAX_STR_DATE_MONTHS[i]=0;
for (j=0;j<hX_4.STRA_DATE_SHDAYS[i].length;j++) hX_4.c.MAX_STR_DATE_SHDAYS[i]=Math.max(hX_4.c.MAX_STR_DATE_SHDAYS[i], hX_4.STRA_DATE_SHDAYS[i][j].length);
for (j=0;j<hX_4.STRA_DATE_DAYS[i].length;j++) hX_4.c.MAX_STR_DATE_DAYS[i]=Math.max(hX_4.c.MAX_STR_DATE_DAYS[i], hX_4.STRA_DATE_DAYS[i][j].length);
for (j=0;j<hX_4.STRA_DATE_SHMONTHS[i].length;j++) hX_4.c.MAX_STR_DATE_SHMONTHS[i]=Math.max(hX_4.c.MAX_STR_DATE_SHMONTHS[i], hX_4.STRA_DATE_SHMONTHS[i][j].length);
for (j=0;j<hX_4.STRA_DATE_MONTHS[i].length;j++) hX_4.c.MAX_STR_DATE_MONTHS[i]=Math.max(hX_4.c.MAX_STR_DATE_MONTHS[i], hX_4.STRA_DATE_MONTHS[i][j].length);
}
}
}
HxG_4.prototype.currentResource=function () {
if (hX_4.res != null) {
if (hX_4.res.length <= 0) {
hX_4.res[0]=new hX_4.HxResourceMgr(hX_4);
hX_4.res[0].setAbsolutePaths();
}
return (hX_4.res[hX_4.res.length-1]);
}
return null;
}
HxG_4.prototype.HxResourceMgr=function (thisparent) {
this.p=thisparent;
this.bPathSet=false;
this.jsfRootToken="/faces";
this.protocol="http://";
this.baseLibPath=".ibmjsfres/";
this.baseImgPath=this.baseLibPath + "img/";
this.baseCssPath=this.baseLibPath + "css/";
this.baseDlgPath=this.baseLibPath + "dlg/";
this.getImgPath=function() { return this.baseImgPath; }
this.getCssPath=function() { return this.baseCssPath; }
this.getDlgPath=function() { return this.baseDlgPath; }
this.p.R_IMG_CNT=7;
this.p.R_IMG_SPACER=0;
this.p.R_IMG_HINKIES=1;
this.p.R_IMG_LG_HINKIES=2;
this.p.R_IMG_VLG_HINKIES=3;
this.p.R_IMG_CAL_HINKIES=4;
this.p.R_IMG_COL_HINKIES=5;
this.p.R_IMG_TIME_HINKIES=6;
this.RF_IMGS=[["1x1.gif", 1, 1, 0, 0, 0],
["hinkies_v2_1.gif", 16, 96, 2, 3, 4],
["hinkies_lg_v2_1.gif", 24, 24, 2, 2, 1],
["hinkies_vlg_v2_1.gif", 24, 24, 2, 2, 1],
["HinkiesC_v2_1.gif", 24, 156, 2, 12, 1],
["HinkiesCl_v2_1.gif", 24, 156, 2, 12, 1],
["HinkiesT_v2_1.gif", 24, 156, 2, 12, 1]];
this.images=[];
}
HxG_4.prototype.HxResourceMgr.prototype.recache=function () {
for (var i=0; i < this.p.R_IMG_CNT; i++) {
this.images[i]=new Image(this.RF_IMGS[i][1], this.RF_IMGS[i][2]);
this.images[i].src=this.getImgPath() + this.RF_IMGS[i][0];
}
}
HxG_4.prototype.HxResourceMgr.prototype.getURI=function (img) {
return hX_4._URL + hX_4._SQT + this.images[img].src + hX_4._SQT + ")";
}
HxG_4.prototype.HxResourceMgr.prototype.getURL=function (img) {
return this.images[img].src;
}
HxG_4.prototype.HxResourceMgr.prototype.wellPosition=function (id, row, col, grp) {
var cellX=(this.RF_IMGS[id][1]/this.RF_IMGS[id][3]), cellY=(this.RF_IMGS[id][2]/(this.RF_IMGS[id][4]*this.RF_IMGS[id][5]));
return 	((-(col * cellX)) + hX_4._PX + hX_4._B + (-((((grp)?grp:0)*(cellY*this.RF_IMGS[id][4]))+(row*cellY))) + hX_4._PX);
}
HxG_4.prototype.setResourceServer=function(path) {
var lchar, cr=this.res.length;
this.res[cr]=new this.HxResourceMgr(this);
lchar=path.charAt(path.length-1);
path=(lchar == "/") ? path : path + "/";
this.res[cr].baseImgPath=path + "img/";
this.res[cr].baseCssPath=path + "css/"
this.res[cr].baseDlgPath=path + "dlg/";
this.res[cr].bPathSet=true;
this.res[cr].recache();
}
HxG_4.prototype.HxResourceMgr.prototype.setAbsolutePaths=function() {
if (this.bPathSet == false) {
var sPathPrefix=this.getAbsolutePathPrefix(this.jsfRootToken);
this.baseImgPath=sPathPrefix + this.baseLibPath + "img/";
this.baseCssPath=sPathPrefix + this.baseLibPath + "css/"
this.baseDlgPath=sPathPrefix + this.baseLibPath + "dlg/";
this.bPathSet=true;
this.recache();
}
}
HxG_4.prototype.HxResourceMgr.prototype.getAbsolutePathPrefix=function (sToken) {
if (this.p.isUnDef(typeof sToken) || sToken == hX_4._E) sToken=this.jsfRootToken;
var sLocation=new String(document.location), sPathPrefix=hX_4._E, iCursor=sLocation.indexOf(sToken, 0) - 1;
var i, sl="/";
if (iCursor < 0) {
iCursor=sLocation.indexOf(this.protocol, 0);
if (iCursor != -1) {
var sTailPath=sLocation.slice(iCursor + this.protocol.length);
for (i=0; i < sTailPath.length; i++) {
if (sTailPath.charAt(i) == sl) {
sTailPath=sTailPath.slice(i);
for (i=1; i < sTailPath.length; i++) {
if (sTailPath.charAt(i) == sl) {
sPathPrefix=sTailPath.substring(0, i + 1);
break;
}
}
}
}
}
} else {
var bFoundProjectDir=false;
for (i=iCursor; i >= 0; i--) {
if (sLocation.charAt(i) == sl) {
bFoundProjectDir=true;
break;
}
}
if (bFoundProjectDir == true) {
sPathPrefix=sLocation.substring(i, i + (iCursor - i) + 1 + 1);
}
}
return sPathPrefix;
}
HxG_4.prototype.HxUIState=function () {
this.activecomponent=null;
this.activecomponentkind="";
}
HxG_4.prototype.HxUIState.prototype.setActiveComponent=function(obj) {
this.activecomponent=(obj) ? obj : "";
return true;
}
HxG_4.prototype.HxUIState.prototype.getActiveComponent=function(kind) {
return (this.activecomponent && hX_4.isObject(this.activecomponent))?this.activecomponent:null;
}
HxG_4.prototype.JSFargument=function (instring) {
this.value=this.attribute=hX_4._E;
if (instring && (hX_4.isString(instring))) {
var q=instring.indexOf(hX_4._CL);
q=(q < 0) ? instring.indexOf(hX_4._EQ) : q;
if (q > 0) {
this.attribute=instring.substring(0,q);
this.value=instring.substring(q+1);
} else {
this.attribute=instring;
}
this.attribute=hX_4.Trim(this.attribute);
this.attribute=this.attribute.toLowerCase();
}
}
HxG_4.prototype.ARG_IS_TRUE=1;
HxG_4.prototype.ARG_TO_NUM=2;
HxG_4.prototype.ARG_TO_NAN=3;
HxG_4.prototype.ARG_TO_FCN=4;
HxG_4.prototype.ARG_TO_FCNS= 5;
HxG_4.prototype.ARG_TO_NAS=6;
HxG_4.prototype.ARG_IS_TRUEV=7;
HxG_4.prototype.ARG_TO_BIGNUM=8;
HxG_4.prototype.ARG_TO_NAU=9;
HxG_4.prototype.JSFargument.prototype.parseArg=function (thisp, type, arg1, arg2) {
if (type != hX_4.ARG_TO_NAS)
this.value=hX_4.Trim(this.value);
if (type == hX_4.ARG_IS_TRUE)
return (!(this.value == hX_4._FLS || this.value == hX_4._OFF || this.value == hX_4._Z));
else if (type == hX_4.ARG_IS_TRUEV)
return ((this.value == hX_4._FLS || this.value == hX_4._OFF || this.value == hX_4._Z || this.value == hX_4._NO) ? hX_4._NO:hX_4._VS);
else if (type == hX_4.ARG_TO_NUM || type == hX_4.ARG_TO_BIGNUM) {
var num;
if (hX_4.isString(this.value)) {
if (type == hX_4.ARG_TO_NUM)
num=new Number(this.value);
else {
if (hX_4.c.BIGNUM_converter == null)
hX_4.c.BIGNUM_converter=new hX_4.NumberConverter();
num=hX_4.c.BIGNUM_converter.constantToValue(this.value);
}
} else
 num=this.value;
num=Math.min(Math.max(arg1, num), arg2);
return num;
} else if (type == hX_4.ARG_TO_NAN || type == hX_4.ARG_TO_NAU ||type == hX_4.ARG_TO_NAS) {
if (this.value.length <= 0)
return null;
else
 return ((type==hX_4.ARG_TO_NAU) ? this.value.toUpperCase():this.value);
} else if (type == hX_4.ARG_TO_FCN)
return eval(this.value);
else if (type == hX_4.ARG_TO_FCNS)
return (new Function ("event", this.value));
else
 return this.value;
}
HxG_4.prototype.parseArg=function (attributeTable, thisp, a) {
var i, j, v, v1, arg, desc, b=(hX_4.isString(a)) ? [a] : a;
for (i=0; i<b.length; i++) {
arg=new this.JSFargument(b[i]);
if (arg.attribute.length >= 0) {
desc=attributeTable[arg.attribute];
if (desc) {
if (!(desc[2]) || (desc[2] && !thisp.HTMLrendered)) {
v=(desc[1] == null) ? (arg.value) : (arg.parseArg(thisp, desc[1], desc[3], desc[4]));
if (thisp[desc[0]]!=null && hX_4.isArray(thisp[desc[0]])) {
while ((thisp[desc[0]]).length>0) (thisp[desc[0]]).pop();
j=(v==null) ? -1 : v.indexOf(hX_4._SM);
while (j >= 0) {
v1=v.substr(0,j);
v=v.substr(j+1);
(thisp[desc[0]]).push(v1);
j=(v==null) ? -1 : v.indexOf(hX_4._SM);
}
(thisp[desc[0]]).push(v);
} else
 thisp[desc[0]]=v;
}
}
}
}
}
HxG_4.prototype.getArg=function (attributeTable, thisp, arg) {
var r=null;
if (arg.length >= 0) {
var argdesc=attributeTable[arg];
if (argdesc) r=thisp[argdesc[0]];
if (r!=null && hX_4.isArray(r)) {
var i, r1=hX_4._E;
for (i=0; i<r.length; i++) r1=r1+((i>0)?hX_4._SM:hX_4._E)+r[i];
r=r1;
}
}
return r;
}
HxG_4.prototype.HxCompImpMgr=function (thisparent) {
this.p=thisparent;
this.p.imp=this;
this.deferSetFocus=this.deferSetSelect=this.deferSetSelect1=null;
this.deferNSRedraw=[];
}
HxG_4.prototype.HxCompImpMgr.prototype.dispatchID=function(obj) {
var src=null;
if (obj && obj.id) {
src=(obj.nodeType == hX_4.ELEMENT_NODE || obj.nodeType == hX_4.DOCUMENT_NODE) ? obj : obj.parentNode;
src=src.id;
} else if (obj == document || obj == document.body)
src=hX_4._BODY;
return src;
}
HxG_4.prototype.HxCompImpMgr.prototype.dispatchToID=function(obj) {
return (obj.navigator) ? hX_4._WDW : (((obj.nodeName == hX_4._DDOC || obj.nodeName == hX_4._BBODY || obj.nodeName.toLowerCase() == hX_4._BODY || obj.nodeName.toLowerCase() == hX_4._DOC) ? hX_4._BODY : obj.id));
}
HxG_4.prototype.HxCompImpMgr.prototype.dispatchComponent=function(evt) {
if ((typeof hX_4)=="undefined") return true;
evt=(evt) ? evt : ((event) ? event: null);
var src=hX_4.i.dispatchID(this);
if (evt && src) {
var obj=hX_4.getComponentById(src);
if (obj) {
var item=obj.DOMobj.tagName.toLowerCase();
return (obj.dispatchComponent (item, evt, evt.type, evt.keyCode));
}
}
return true;
}
HxG_4.prototype.HxCompImpMgr.prototype.dispatchBehavior=function(thisp, evt, name, alias) {
if ((typeof hX_4)=="undefined") return true;
evt=(evt) ? evt : ((event) ? event: null);
var o,x,src=hX_4.i.dispatchID(thisp);
if (evt && name && src) {
if (alias && alias == "oninput_FORM") {
x=document.getElementById(src);
if (x && x.form) {
src=x.form.id;
alias=hX_4._onIN;
}
}
o=hX_4.getBehaviorById(src,name,((alias!=null)?alias:evt.type));
if (o!=null) return(o.dispatchBehavior (this, evt));
}
return true;
}
HxG_4.prototype.HxCompImpMgr.prototype.dispatchInputState=function(evt) {
if ((typeof hX_4)=="undefined") return true;
evt=(evt) ? evt : ((event) ? event: null);
var src=hX_4.i.dispatchID(this);
if (evt && src) {
var obj=hX_4.getBehaviorById(src, hX_4.BHR_assist, hX_4._onIN);
if (obj != null && obj.state) return obj.state.dispatch(evt);
}
return true;
}
HxG_4.prototype.HxCompImpMgr.prototype.attachMonitor=function(obj, monitor, property1, property2) {
var x, proparray=[];
for (x=2; x < arguments.length; x++) proparray.push(arguments[x]);
this.p.attachEvent (obj, hX_4._onPC, hX_4._lL, this.dispatchMonitor, monitor, proparray);
}
HxG_4.prototype.HxCompImpMgr.prototype.dispatchMonitor=function(evt) {
if ((typeof hX_4)=="undefined") return;
evt=(evt) ? evt : ((event) ? event: null);
if (evt && this) {
var src=((this.nodeType == hX_4.ELEMENT_NODE || this.nodeType == hX_4.DOCUMENT_NODE) ? this : this.parentNode);
if (src) {
var srcid=hX_4.i.dispatchToID(src), obj=hX_4.getComponentById(srcid), prop=(hX_4.brw.isIE()) ? ((evt.propertyName) ? evt.propertyName:null) : ((evt.type==hX_4._onDOMVPC)?hX_4._VL:((evt.attrName) ? evt.attrName : null));
var j, userObj=hX_4.lookupEvent (hX_4._uR, srcid, hX_4._onPC);
if (userObj != null && userObj.args && userObj.args.length) {
for (j=0; j < userObj.args.length; j++) {
if (userObj.args[j] == prop) {
if (hX_4.isString(userObj.handler1) && ((userObj.handler1 == "standard") || (userObj.handler1 == "standard1"))) {
if (hX_4.brw.isIE() || userObj.handler1 == "standard1") {
obj.redraw();
} else {
hX_4.i.deferNSRedraw.push(obj);
setTimeout(hX_4.i.NSRedraw, 10);
}
} else
 userObj.handler1.call (this, obj, evt, userObj.args);
break;
}
}
}
}
}
return
 }
HxG_4.prototype.HxCompImpMgr.prototype.NSRedraw=function () {
while (hX_4.i.deferNSRedraw.length > 0) {
hX_4.i.deferNSRedraw[hX_4.i.deferNSRedraw.length-1].redraw();
hX_4.i.deferNSRedraw.pop();
}
}
HxG_4.prototype.HxCompImpMgr.prototype.attachResizeMonitor=function(obj, type) {
if (this.p.brw.isIE()) {
obj.onresize=(!type) ? this.dispatchMonitorResize : type;
} else {
if (!hX_4.globalResize) {
this.p.attachEvent(document, hX_4._onR, hX_4._lL, ((!type) ? this.dispatchMonitorResize : type));
hX_4.globalResize=true;
}
}
}
HxG_4.prototype.HxCompImpMgr.prototype.dispatchMonitorResize=function(evt) {
if ((typeof hX_4)=="undefined") return;
evt=(evt) ? evt : ((event) ? event: null);
if (evt) {
if (hX_4.brw.isIE()) {
if (this) {
var src=((this.nodeType == hX_4.ELEMENT_NODE || this.nodeType == hX_4.DOCUMENT_NODE) ? this : this.parentNode);
if (src) {
var srcid=hX_4.i.dispatchToID(src);
var obj=hX_4.getComponentById(srcid);
obj.redraw();
}
}
} else {
hX_4.redraw();
}
}
return
 }
HxG_4.prototype.HxCompImpMgr.prototype.cancelAction=function(evt, preventDefault) {
evt.cancelBubble=true;
if (preventDefault) {
if (evt.preventDefault) evt.preventDefault();
else if (evt.returnValue) evt.returnValue=false;
}
}
HxG_4.prototype.HxCompImpMgr.prototype.fireEvent=function(obj, evtname, evttag) {
var elem=this.p.getElementById(obj), ename=evtname.toLowerCase();
if (elem) {
if (elem.fireEvent) {
return (elem.fireEvent(ename));
} else if (elem.dispatchEvent) {
var eType="HTMLEvents", newEvt, shName=(ename.indexOf(hX_4._ON) == 0) ? ename.substr(2) : ename;
if (shName == hX_4._evMD || shName == hX_4._evMU || shName == hX_4._evMC || shName == hX_4._evMCC ||
shName == hX_4._evMM || shName == hX_4._evMO || shName == hX_4._evMV)
eType="MouseEvents";
newEvt=document.createEvent(eType);
newEvt.initEvent(shName, true, true);
if (evttag) newEvt.internalFire=hX_4._HX;
return (elem.dispatchEvent(newEvt));
}
}
return false;
}
HxG_4.prototype.HxCompImpMgr.prototype.markEvent=function(obj, evtname) {
if (hX_4.cursorTracking && evtname==hX_4._evF) {
for (var c=0; c < hX_4.cursorTracking.length; c++) hX_4.cursorTracking[c].markFocus(obj,hX_4._evF);
return true;
}
return false;
}
HxG_4.prototype.HxCompImpMgr.prototype.setFocus=function(obj, select, defer) {
var c, o=hX_4.getElementById(obj);
if (o && o.tagName && o.tagName == hX_4._TAB && o.rows && o.rows.length > 0) {
if (o.rows[0].cells && o.rows[0].cells.length > 0) {
c=hX_4.getFirstChildInCell(o.rows[0].cells[0]);
if (c && c.tagName && c.tagName == hX_4._LAB) {
c=c.firstChild;
if (c && c.tagName && c.tagName == hX_4._INP && (c.type.toLowerCase() == hX_4._RAD || c.type.toLowerCase() == hX_4._CHK))
o=c;
}
}
}
hX_4.imp.markEvent(o, hX_4._evF);
hX_4.i.deferSetFocus=o;
if (hX_4.i.deferSetFocus && this.isFocusable(hX_4.i.deferSetFocus)) {
hX_4.i.deferSetSelect=((arguments.length > 1) && select);
if (arguments.length > 2 && defer)
setTimeout(hX_4.i.focusSetter, 10);
else
 hX_4.i.focusSetter();
return true;
}
return false;
}
HxG_4.prototype.HxCompImpMgr.prototype.focusSetter=function() {
if ((typeof hX_4)=="undefined") return;
if (document.hasFocus && document.hasFocus() && document.activeElement && document.activeElement.id) {
if (hX_4.sel.hasSelection(document.activeElement)) {
var was=document.activeElement;
var to=hX_4.i.deferSetFocus;
if (to.id == null || to.id != was.id)
hX_4.sel.setSelection(was, 0, 0);
}
}
if (hX_4.i.deferSetFocus.focus!=undefined) hX_4.i.deferSetFocus.focus();
if (hX_4.i.deferSetSelect && hX_4.i.deferSetFocus.select!=undefined) hX_4.i.deferSetFocus.select();
}
HxG_4.prototype.HxCompImpMgr.prototype.isFocusable=function(obj) {
if ((obj.type && obj.type.toLowerCase()==hX_4._HI) || obj.disabled) return false;
var root=obj;
while (root != null && root.tagName != hX_4._BBODY) {
if (root.nodeType == hX_4.ELEMENT_NODE) {
if (hX_4.g.getP (root, hX_4._VIS) == hX_4._HI || hX_4.g.getP (root, hX_4._DSP) == hX_4._NO)
return false;
}
root=root.parentNode;
}
return (obj.focus != null);
}
HxG_4.prototype.HxCompImpMgr.prototype.dispatchTimer=function(id, item, action) {
if ((typeof hX_4)=="undefined") return false;
var elem=this.p.getComponentById(id);
if (elem) {
elem.dispatchTimer(item, action);
return true;
}
return false;
}
HxG_4.prototype.HxCompImpMgr.prototype.dispatchTimerBehavior=function(src, item, action, bname, ename) {
if ((typeof hX_4)=="undefined") return false;
if (src) {
var aa=(bname==hX_4.BHR_assist), obj=hX_4.getBehaviorById(src, bname, ((aa)?hX_4._onIN:ename));
if (obj != null) {
if (aa) {
if (obj.state && obj.state.dispatchTimer) return obj.state.dispatchTimer(item, action);
} else {
if (obj.dispatchTimer) return obj.dispatchTimer(item, action);
}
}
}
return true;
}
HxG_4.prototype.HxCompImpMgr.prototype.startTimerTimed=function(id, item, action, period, bname, ename) {
var dispatcher=(bname != null) ? "hX_4.i.dispatchTimerBehavior('" : "hX_4.i.dispatchTimer('";
var executionstring=dispatcher + id + "', '" + item + "', '" + action + ((bname==null)?"":("', '" + bname)) + ((ename==null)?"":("', '" + ename)) + "')";
var thisid=window.setTimeout(executionstring, period);
this.addTimer(thisid, "t");
return thisid;
}
HxG_4.prototype.HxCompImpMgr.prototype.startTimerInterval=function(id, item, action, period) {
var executionstring="hX_4.i.dispatchTimer('" + id + "', '" + item + "', '" + action + "')";
var thisid=window.setInterval(executionstring, period);
this.addTimer(thisid, "i");
return thisid;
}
HxG_4.prototype.HxCompImpMgr.prototype.killAllTimers=function() {
var i, timerid, iS="i", l=this.p.Timers.length;
for (i=0; i < l; i++) {
timerid=this.p.Timers[i][0];
if (timerid != 0) {
if (this.p.Timers[i][1] == iS) window.clearInterval(timerid);
else window.clearTimeout(timerid);
this.p.Timers[i][0]=0;
}
}
}
HxG_4.prototype.HxCompImpMgr.prototype.killTimerTimed=function(timerid) {
if (timerid != null && timerid != 0) {
window.clearTimeout(timerid);
var i, iT="t", l=this.p.Timers.length;
for (i=0; i < l; i++) {
if ((timerid == this.p.Timers[i][0]) && (iT == this.p.Timers[i][1]))
this.p.Timers[i][0]=0;
}
}
}
HxG_4.prototype.HxCompImpMgr.prototype.killTimerInterval=function(timerid) {
if (timerid != null && timerid != 0) {
window.clearInterval(timerid);
var i, iS="i", l=this.p.Timers.length;
for (i=0; i < l; i++) {
if ((timerid == this.p.Timers[i][0]) && (iS == this.p.Timers[i][1]))
this.p.Timers[i][0]=0;
}
}
}
HxG_4.prototype.HxCompImpMgr.prototype.addTimer=function(timerid, type) {
var i, added=false, l=this.p.Timers.length, thisEntry=[timerid, type];
for (i=0; i < l; i++) {
if (this.p.Timers[i][0] == 0) {
this.p.Timers[i]=thisEntry;
added=true;
break;
}
}
if (!added) this.p.Timers[l]=thisEntry;
}
HxG_4.prototype.dragMouseEvents=null;
HxG_4.prototype.HxDragMgr=function (thisparent) {
this.p=thisparent;
this.dragObj=this.owningObj=null;
this.clickstyle=0;
this.rect=null;
this.dragging=this.dragswap=this.buttonup=this.buttondown=this.keydown=false;
this.releaseNow=true;
this.timerid=0;
}
HxG_4.prototype.HxDragMgr.prototype.dragInit=function (dragObject, owningObject, releaseNow, clickstyle, noskipinitial) {
if (dragObject) {
this.clickstyle=(clickstyle != null) ? clickstyle : 0;
this.dragObj=dragObject;
this.owningObj=owningObject;
this.releaseNow=releaseNow;
this.dragging=this.dragswap=false;
if (noskipinitial) {
this.buttonup=this.buttondown=this.keydown=false;
} else {
this.buttonup=this.buttondown=this.keydown=true;
}
this.rect=new hX_4.HxRect(this.dragObj);
if (hX_4.dragMouseEvents==null) hX_4.dragMouseEvents=hX_4.brw.isIE() ? [hX_4._onMD, hX_4._onMU, hX_4._onMM, hX_4._onKD, hX_4._onKU] : [hX_4._evMD, hX_4._evMU, hX_4._evMM, hX_4._evKD, hX_4._evKU, hX_4._evKP, hX_4._evSC];
this.p.swapDragEvent(true, null, hX_4.dragMouseEvents);
this.dragswap=true;
return true;
}
return false;
}
HxG_4.prototype.HxDragMgr.prototype.resetSize=function() {
if (this.dragswap) {
this.rect.height=this.p.g.getRendHeight(this.dragObj);
this.rect.width=this.p.g.getRendWidth(this.dragObj);
}
}
HxG_4.prototype.HxDragMgr.prototype.moveDrag=function (pt) {
if (this.dragging && this.owningObj != null && this.owningObj.dragMove)
this.owningObj.dragMove(pt.X, pt.Y);
}
HxG_4.prototype.HxDragMgr.prototype.killDrag=function () {
if (this.timerid != 0) this.p.i.killTimerTimed (this.timerid);
if (this.dragswap) this.p.swapDragEvent(false, null, hX_4.dragMouseEvents);
if (this.dragging && this.owningObj != null && this.owningObj.dragEnd) this.owningObj.dragEnd();
this.dragObj=this.owningObj=null;
this.dragging=this.dragswap=false;
this.timerid=0;
}
HxG_4.prototype.HxDragMgr.prototype.dispatchDragAction=function(evt) {
if ((typeof hX_4)=="undefined") return true;
evt=(evt) ? evt : ((event) ? event: null);
if (evt) {
var src=(evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : (hX_4.brw.isIE() ? document.body : null));
if (src) {
src=(src.nodeType == hX_4.ELEMENT_NODE || src.nodeType == hX_4.DOCUMENT_NODE) ? src : src.parentNode;
var pt=hX_4.g.toPoint(evt), isInPopup=(hX_4.dragger && hX_4.dragger.rect && hX_4.dragger.rect.hitTest(pt));
if (hX_4.dragger.clickstyle > 0) {
if ((evt.type==hX_4._evMD || evt.type==hX_4._evKD) && hX_4.dragger.timerid != 0) {
hX_4.i.killTimerTimed (hX_4.dragger.timerid);
hX_4.dragger.timerid=0;
}
if (evt.type==hX_4._evKD || evt.type==hX_4._evKU || evt.type==hX_4._evKP) {
if (hX_4.dragger.owningObj && hX_4.dragger.owningObj.dispatchDragAction)
hX_4.dragger.owningObj.dispatchDragAction(evt);
} else if (evt.type==hX_4._evMD || evt.type==hX_4._evMU || evt.type==hX_4._evMM) {
if (isInPopup) {
if (hX_4.dragger.owningObj != null && hX_4.dragger.owningObj.dispatchDragAction)
hX_4.dragger.owningObj.dispatchDragAction(evt);
} else {
if (evt.type == hX_4._evMD || evt.type==hX_4._evMU) {
if (evt.type == hX_4._evMD && hX_4.dragger.buttondown) {
hX_4.dragger.buttondown=hX_4.dragger.keydown=false;
} else if (evt.type==hX_4._evMU && hX_4.dragger.buttonup) {
hX_4.dragger.buttonup=hX_4.dragger.keydown=false;
} else {
hX_4.uirelease();
}
}
}
}
} else {
if (evt.type == hX_4._evMD) {
if (hX_4.dragger.timerid != 0) {
hX_4.i.killTimerTimed (hX_4.dragger.timerid);
hX_4.dragger.timerid=0;
}
if (hX_4.dragger.dragging) {
} else {
if (isInPopup) {
hX_4.dragger.dragging=true;
if (hX_4.dragger.owningObj != null && hX_4.dragger.owningObj.dragStart) hX_4.dragger.owningObj.dragStart();
hX_4.dragger.moveDrag(pt);
} else {
if (hX_4.dragger.buttondown) {
hX_4.dragger.buttondown=hX_4.dragger.keydown=false;
} else
 hX_4.uirelease();
}
}
} else if (evt.type==hX_4._evMU) {
if (isInPopup) {
hX_4.dragger.moveDrag(pt);
if (hX_4.dragger.dragging && hX_4.dragger.owningObj != null && hX_4.dragger.owningObj.dragEnd)
hX_4.dragger.owningObj.dragEnd();
if (hX_4.dragger.releaseNow) {
if (hX_4.dragger.owningObj.dispatchTimer) {
hX_4.dragger.dragging=false;
hX_4.dragger.timerid=hX_4.i.startTimerTimed (hX_4.dragger.owningObj.id, "popup", "dragEnd", 750);
} else
 hX_4.uirelease();
} else {
hX_4.dragger.dragging=false;
}
} else {
if (hX_4.dragger.buttonup)
hX_4.dragger.buttonup=hX_4.dragger.keydown=false;
else
 hX_4.uirelease();
}
} else if (evt.type==hX_4._evMM) {
if (isInPopup) hX_4.dragger.moveDrag(pt);
} else if (evt.type==hX_4._evKD || evt.type==hX_4._evKP || evt.type==hX_4._evKU) {
if (hX_4.dragger.timerid != 0) {
hX_4.i.killTimerTimed (hX_4.dragger.timerid);
hX_4.dragger.timerid=0;
}
if (hX_4.dragger.owningObj && hX_4.dragger.owningObj.dragKey)
hX_4.dragger.owningObj.dragKey(evt.type, evt.keyCode);
}
}
}
}
hX_4.i.cancelAction(evt, true);
return false;
}
HxG_4.prototype.mouserMouseEvents=null;
HxG_4.prototype.HxMouseMgr=function (thisparent) {
this.p=thisparent;
this.root=this.basespot=this.baserect=this.savehotrect=this.basehotrect=null;
this.hotspots=[];
this.dragswap=false;
this.timerid=0;
this.maxDelay=750;
}
HxG_4.prototype.HxMouseMgr.prototype.setBaseSpot=function (root, iLocation, longDelay) {
this.root=root;
var location=(iLocation) ? iLocation : root.DOMobj;
this.basespot=root.DOMobj;
if (this.baserect == null) this.baserect=new hX_4.HxRect(root.DOMobj);
else this.baserect.setRect(root.DOMobj);
if (this.basehotrect == null) this.basehotrect=new hX_4.HxRect(location);
else this.basehotrect.setRect(location);
if (this.savehotrect == null) this.savehotrect=new hX_4.HxRect(location);
else this.savehotrect.setRect(location);
this.maxDelay=(longDelay != null && longDelay) ? 5750:750;
if (this.timerid != 0) {
hX_4.i.killTimerTimed (this.timerid);
this.timerid=0;
}
}
HxG_4.prototype.HxMouseMgr.prototype.addHotSpot=function (obj) {
function sub (obj) {
this.obj=obj;
this.id=obj.id;
this.rect=new hX_4.HxRect(obj);
}
if (this.timerid != 0) {
hX_4.i.killTimerTimed (this.timerid);
this.timerid=0;
}
for (var i=0; i < this.hotspots.length; i++) {
if (this.hotspots[i].id == obj.id) return;
}
this.hotspots.push(new sub(obj));
if (this.hotspots.length == 1) this.tidyBaseRect();
this.trackMouse();
}
HxG_4.prototype.HxMouseMgr.prototype.removeHotSpot=function (obj) {
for (var i=0; i < this.hotspots.length; i++) {
if (this.hotspots[i].id  == obj.id) {
this.hotspots.splice(i,1);
break;
}
}
if (this.hotspots.length <= 0)
this.killMouse();
}
HxG_4.prototype.HxMouseMgr.prototype.tidyBaseRect=function (obj) {
if (this.hotspots[0]) {
var r=this.hotspots[0].rect;
this.basehotrect.setRectR(this.savehotrect);
var b=this.basehotrect;
if (r.X > b.X+b.width)
b.width=r.X-b.X;
else if (r.X+r.width < b.X) {
b.width+=((r.X+r.width)-b.X);
b.X=r.X+r.width;
}
if (r.Y > b.Y+b.height)
b.height=r.Y-b.Y;
else if (r.Y+r.height < b.Y) {
b.height+=((r.y+r.height)-b.Y);
b.Y=r.Y+r.height;
}
}
}
HxG_4.prototype.HxMouseMgr.prototype.trackMouse=function () {
if (!this.dragswap) {
if (hX_4.mouserMouseEvents==null) hX_4.mouserMouseEvents=hX_4.brw.isIE() ? [hX_4._onMD, hX_4._onMU, hX_4._onMM, hX_4._onKD, hX_4._onKU, hX_4._onCM] : [hX_4._evMD, hX_4._evMU, hX_4._evMM, hX_4._evMV, hX_4._evMO, hX_4._evKD, hX_4._evKU, hX_4._evKP, hX_4._evSC];
hX_4.swapDragEvent(true, hX_4.mouser, hX_4.mouserMouseEvents);
this.dragswap=true;
}
}
HxG_4.prototype.HxMouseMgr.prototype.killMouse=function () {
if (this.timerid != 0) hX_4.i.killTimerTimed (this.timerid);
if (this.dragswap) hX_4.swapDragEvent(false, hX_4.mouser, hX_4.mouserMouseEvents);
this.dragswap=false;
this.timerid=0;
while (this.hotspots.length > 0) this.hotspots.pop();
this.basespot=null;
}
HxG_4.prototype.HxMouseMgr.prototype.dispatchDragAction=function(evt) {
if ((typeof hX_4)=="undefined") return true;
var rtn=false;
evt=(evt) ? evt : ((event) ? event: null);
if (evt) {
var src=(evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : (hX_4.brw.isIE() ? document.body : null));
if (src) {
src=(src.nodeType == hX_4.ELEMENT_NODE || src.nodeType == hX_4.DOCUMENT_NODE) ? src : src.parentNode;
if (evt.type==hX_4._evKD || evt.type==hX_4._evKU) {
if (hX_4.mouser.timerid != 0) {
hX_4.i.killTimerTimed (hX_4.mouser.timerid);
hX_4.mouser.timerid=0;
}
if (hX_4.mouser.root && hX_4.mouser.root.dispatchDragAction)
hX_4.mouser.root.dispatchDragAction(src, evt);
} else if (evt.type==hX_4._evCM) {
} else if (evt.type==hX_4._evMD || evt.type==hX_4._evMU || evt.type==hX_4._evMM) {
var i, isBase=false, point=hX_4.g.toPoint(evt), isInPopup=hX_4.mouser.basehotrect.hitTest(point);
if (isInPopup)
isBase=true;
else {
for (i=0; (!isInPopup) && (i < hX_4.mouser.hotspots.length); i++) {
if (hX_4.mouser.hotspots[i])
isInPopup=hX_4.mouser.hotspots[i].rect.hitTest(point);
}
}
if (isInPopup) {
if (hX_4.mouser.timerid != 0) {
hX_4.i.killTimerTimed (hX_4.mouser.timerid);
hX_4.mouser.timerid=0;
}
if (src && src.tagName == hX_4._BBODY && hX_4.brw.isIE())
src=document.elementFromPoint(point.X, point.Y);
if (hX_4.mouser.root && hX_4.mouser.root.dispatchDragAction && evt.type!=hX_4._evMO)
rtn=hX_4.mouser.root.dispatchDragAction(src, evt, isBase);
} else {
if (evt.type!=hX_4._evMM)
hX_4.mouser.root.dispatchTimer("popup", "MouseOut");
else if (hX_4.mouser.root.dispatchTimer) {
if (hX_4.mouser.baserect.hitTest(point))
hX_4.mouser.root.dispatchTimer("popup", "MouseOut");
else
 if (hX_4.mouser.timerid <= 0) hX_4.mouser.timerid=hX_4.i.startTimerTimed (hX_4.mouser.root.id, "popup", "MouseOut", hX_4.mouser.maxDelay);
}
}
}
}
}
if (!rtn) hX_4.i.cancelAction(evt, true);
return rtn;
}
HxG_4.prototype.lookupEvent=function (kind, id, name) {
var i, j, l1, l=this.userEvents.length;
for (i=0; i < l; i++) {
if (this.userEvents[i].id == id) {
l1=this.userEvents[i].events.length;
for (j=0; j < l1; j++) {
if (this.userEvents[i].events[j].etype == kind && this.userEvents[i].events[j].eventname == name)
return (this.userEvents[i].events[j]);
}
return null;
}
}
return null;
}
HxG_4.prototype.addNewEvent=function (id, obj, eventname, kind, handler1, args, MozDown) {
var i, userObj, eObj=null, l=this.userEvents.length;
for (i=0; i < l && eObj == null; i++) {
if (this.userEvents[i].id == id) eObj=this.userEvents[i];
}
if (eObj == null) {
eObj=new hX_4.JSFEventObject(id);
this.userEvents.push(eObj);
}
userObj=new hX_4.JSFEvent(obj, eventname, kind, handler1, args, MozDown);
eObj.events.push(userObj);
return userObj;
}
HxG_4.prototype.JSFEventObject=function (id, obj, eventname, etype, handler1, args) {
this.id=id;
this.events=[];
}
HxG_4.prototype.JSFEvent=function (obj, eventname, etype, handler1, args, MozDown) {
if (obj && eventname) {
this.eventCounter=0;
this.eventname=eventname;
this.preUser= [];
this.User=null;
this.postUser= [];
this.etype=etype;
this.obj=obj;
this.args=args;
this.handler1= handler1;
this.id=null;
var f=null;
if (etype == hX_4._uR) {
if (MozDown)
this.id=(hX_4._WDW == hX_4.i.dispatchToID(obj)) ? hX_4._WDW : obj.id;
else if ((hX_4._BODY == hX_4.i.dispatchToID(obj))) {
f=document.body.getAttribute(eventname);
this.id=hX_4._BODY;
} else {
f=obj.getAttribute(eventname);
this.id=obj.id;
}
} else
 this.id=obj;
if (f != null)
this.User=(hX_4.isFunction(f)) ? f : new Function("event", f);
}
}
HxG_4.prototype.JSFEventEntry=function (id, handler) {
this.id=id;
if (hX_4.isFunction(handler)) this.handler=handler;
else if (hX_4.isString(handler)) this.handler=new Function("event", "return " + handler + ";");
else this.handler=hX_4.JSFNoOp;
}
HxG_4.prototype.JSFNoOp=function (event) {
return;
}
HxG_4.prototype.JSFEvent.prototype.addPost=function (pos, handler) {
this.eventCounter++;
var entry=new hX_4.JSFEventEntry(this.eventCounter, handler);
if (pos == hX_4._lF || pos == "first") this.postUser.unshift (entry);
else this.postUser.push (entry);
return (this.eventCounter);
}
HxG_4.prototype.JSFEvent.prototype.addPre=function(pos, handler) {
this.eventCounter++;
var entry=new hX_4.JSFEventEntry(this.eventCounter, handler);
if (pos == hX_4._lF || pos == "first") this.preUser.unshift (entry);
else this.preUser.push (entry);
return (this.eventCounter);
}
HxG_4.prototype.JSFEvent.prototype.remove=function (id) {
var i, removed=false, l=this.postUser.length;
if (id <= 0) {
for (i=0; i < l; i++) this.postUser[i]=null;
l=this.preUser.length;
for (i=0; i < l; i++) this.preUser[i]=null;
} else {
for (i=0; ((i < l) && (!removed)); i++) {
if ((this.postUser[i]).id == id) {
this.postUser[i]=null;
removed=true;
}
}
l=this.preUser.length;
for (i=0; ((i < l) && (!removed)); i++) {
if ((this.preUser[i]).id == id) {
this.preUser[i]=null;
removed=true;
}
}
}
}
HxG_4.prototype.swapDragEvent=function (addevent, iDragger, mouseEvents) {
var dragger=(iDragger) ? iDragger: hX_4.dragger;
var userObj, j, l=mouseEvents.length, dd="#docdrag", ff, ss="S";
for (j=0; j < l; j++) {
userObj=hX_4.lookupEvent (ss, dd, mouseEvents[j]);
if (!addevent) {
if (userObj) {
if (this.brw.isIE()) {
document.body.setAttribute(mouseEvents[j], userObj.User);
} else {
ff=hX_4._ON + mouseEvents[j];
document.body.removeEventListener(mouseEvents[j], dragger.dispatchDragAction, true);
document.body.setAttribute(ff, userObj.User);
}
}
} else {
if (userObj == null)
userObj=hX_4.addNewEvent (dd, dd, mouseEvents[j], ss);
if (this.brw.isIE()) {
userObj.User=document.body.getAttribute(mouseEvents[j]);
document.body.setAttribute(mouseEvents[j], dragger.dispatchDragAction);
} else {
ff=hX_4._ON + mouseEvents[j];
userObj.User=document.body.getAttribute(ff);
document.body.addEventListener(mouseEvents[j], dragger.dispatchDragAction, true);
}
}
}
if (this.brw.isIE()) {
if (addevent)
document.body.setCapture();
else
 document.body.releaseCapture();
}
return true;
}
HxG_4.prototype.runEvent1=function (evt) {
hX_4.runEvent(this, evt);
}
HxG_4.prototype.runEvent2=function (evt) {
hX_4.runEvent(this, evt, true);
}
HxG_4.prototype.runEvent=function (ethis, evt, MozDown) {
evt=(evt) ? evt : ((event) ? event: null);
ethis=(!ethis) ? this : ethis;
ethis=(ethis == window || ethis == document.window) ? ((MozDown)?window:window.document.body) : ethis;
if (ethis && evt) {
var srcid, userObj, evtname=(evt.type==hX_4._onDOMPC || evt.type==hX_4._onDOMVPC) ? hX_4._onPC : (hX_4._ON + evt.type);
srcid=(ethis == window) ? hX_4._WDW : ((ethis == document || ethis == document.body) ? hX_4._BODY : ethis.id);
userObj=hX_4.lookupEvent (hX_4._uR, srcid, evtname);
if (userObj != null)
return ((hX_4.brw.isIE()) ? (userObj.run(ethis)) : (userObj.run(ethis, evt)));
}
return true;
}
HxG_4.prototype.JSFEvent.prototype.run=function (ethis, evt) {
var i, result=true;
evt=(evt) ? evt : ((event) ? event: null);
for (i=0; result && i < this.preUser.length; i++) {
if (this.preUser[i] != null) {
result=(hX_4.brw.isIE()) ? ((this.preUser[i]).handler.call(ethis)) : ((this.preUser[i]).handler.call(ethis, evt));
result=(result == false) ? false: true;
if (evt.returnValue!=undefined && evt.returnValue == false) result=false;
else if (evt.getPreventDefault && evt.type!=hX_4._onDOMPC && evt.type!=hX_4._onDOMVPC &&  evt.getPreventDefault()) result=false;
}
}
if (result && this.User != null) {
result=(hX_4.brw.isIE()) ? (this.User.call(ethis)) : (this.User.call(ethis, evt));
result=(result == false) ? false: true;
if (evt.returnValue!=undefined && evt.returnValue == false) result=false;
else if (evt.getPreventDefault && evt.type!=hX_4._onDOMPC && evt.type!=hX_4._onDOMVPC &&  evt.getPreventDefault()) result=false;
}
for (i=0; result && i < this.postUser.length; i++) {
if (this.postUser[i] != null) {
result=(hX_4.brw.isIE()) ? ((this.postUser[i]).handler.call(ethis)) : ((this.postUser[i]).handler.call(ethis, evt));
result=(result == false) ? false: true;
if (evt.returnValue!=undefined && evt.returnValue == false) result=false;
else if (evt.getPreventDefault && evt.type!=hX_4._onDOMPC && evt.type!=hX_4._onDOMVPC &&  evt.getPreventDefault()) result=false;
}
}
return result;
}
HxG_4.prototype.HxConstraints=function () {
this.regexp=[];
this.ELexp=[];
this.regexpstr=[];
this.ELexpstr=[];
this.staticConstraint("AlphabetExOnly","^[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]+$");
this.staticConstraint("AlphabetOnly",  "^[A-Za-z]+$");
this.staticConstraint("DigitOnly",     "^[0-9]+$");
this.staticConstraint("AlnumExOnly",   "^[A-Za-z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]+$");
this.staticConstraint("AlnumOnly",     "^[A-Za-z0-9]+$");
this.staticConstraint("UpperCaseOnly", "^[A-Z]+$");
this.staticConstraint("LowerCaseOnly", "^[a-z]+$");
}
HxG_4.prototype.HxConstraints.prototype.getRegExpByName=function (name) {
return this.regexp[name];
}
HxG_4.prototype.HxConstraints.prototype.testRegExp=function (test, exp) {
return ((test.length==0) ? true : (!(test.match(exp) == null)));
}
HxG_4.prototype.HxConstraints.prototype.staticConstraint=function (name, x) {
try {
this.regexp[name]= new RegExp(x);
this.regexp[name].compile(x);
}
catch (e) {
window.status=hX_4.INTERR_Constraint;
}
}
HxG_4.prototype.HxConstraints.prototype.registerConstraint=function (x) {
var name, i, hxc="hxConstraint";
for (i=0; i < this.regexpstr.length; i++) {
if (this.regexpstr[i] == x) {
name=hxc + i;
return this.regexp[name];
}
}
name=hxc + this.regexpstr.length;
this.regexpstr.push(x);
try {
this.regexp[name]= new RegExp(x);
this.regexp[name].compile(x);
return this.regexp[name];
}
catch (e) {
window.status=hX_4.INTERR_Constraint;
}
return null;
}
HxG_4.prototype.HxConstraints.prototype.registerELConstraint=function (x, type) {
var name, i, hxe="hxExpression";
for (i=0; i < this.ELexpstr.length; i++) {
if (this.ELexpstr[i] == x) {
name=hxe + i;
return this.ELexp[name];
}
}
name=hxe + this.ELexpstr.length;
this.ELexpstr.push(x);
try {
var exp=hX_4.replaceAll(x, "@testValue", "testValue");
if (type=="date") {
exp=hX_4.replaceAll(exp, "testValue.date",	"testValue.getDate()");
exp=hX_4.replaceAll(exp, "testValue.day",		"testValue.getDay()");
exp=hX_4.replaceAll(exp, "testValue.hours", 	"testValue.getHours()");
exp=hX_4.replaceAll(exp, "testValue.minutes",	"testValue.getMinutes()");
exp=hX_4.replaceAll(exp, "testValue.month",	"testValue.getMonth()");
exp=hX_4.replaceAll(exp, "testValue.seconds", "testValue.getSeconds()");
exp=hX_4.replaceAll(exp, "testValue.timezoneOffset", "testValue.getTimezoneOffset()");
exp=hX_4.replaceAll(exp, "testValue.time",	"testValue.getTime()");
exp=hX_4.replaceAll(exp, "testValue.year", 	"(testValue.getFullYear()-1900)");
}
exp=" return (" + exp +  "); ";
this.ELexp[name]=new Function("testValue", exp);
return this.ELexp[name];
}
catch (e) {
window.status=hX_4.INTERR_Constraint;
}
return null;
}
HxG_4.prototype.HxConstraints.prototype.testELExp=function (test, exp) {
return (exp.call(this, test));
}
HxG_4.prototype.HxAction=function () {
this.processAction=processAction;
this.doClick=doClick;
function doCssStyleClass (inobj, styleClass) {
var obj=hX_4.getElementById(inobj);
if ((obj != null) && (styleClass != null) && (obj.className != styleClass))
obj.className=styleClass;
}
function doClear (obj) {
if (obj && obj.tagName && obj.value && obj.value.length > 0 && (obj.tagName == hX_4._TXT || (obj.tagName == hX_4._INP && (obj.type.toLowerCase() == hX_4._XT ||obj.type.toLowerCase()==hX_4._PWD)))) {
var p=hX_4.sel.getCaretPos(obj);
if (p >= 0) obj.value=obj.value.substr(0,p);
}
}
function doAction (srcobj, action, globalAction, target, evt) {
var result=true, s, t=target, domMaxLen, a=(action)?action.toUpperCase():null;
if (srcobj != null && t != null && a != null) {
switch (a) {
case hX_4.ACT_NOTHING:
case hX_4.ACT_NONE:
case hX_4.ACT_STOP:
result=false;
break;
case hX_4.ACT_GOTO:
if (t) window.location.href=t;
break;
case hX_4.ACT_ALERT:
if (t && t.toUpperCase()==hX_4.ACT_ATERROR) t=(evt.errorMsg)?evt.errorMsg:hX_4.ACT_ISERROR;
if (t) alert (t);
break;
case hX_4.ACT_CONFIRM:
if (t && t.toUpperCase()==hX_4.ACT_ATERROR) t=(evt.errorMsg)?evt.errorMsg:hX_4.ACT_ISERROR;
if (t) {
s=confirm(t);
result=(s)?true:false;
}
break;
case hX_4.ACT_LOCKED:
hX_4.applyNestedAttribute(t, hX_4._DSB, true, true);
break;
case hX_4.ACT_UNLOCKED:
hX_4.applyNestedAttribute(t, hX_4._DSB, false, true);
break;
case hX_4.ACT_INVERTLOCKED:
hX_4.applyNestedAttribute(t, hX_4._DSB, ((t.disabled)?false:true), true);
break;
case hX_4.ACT_SHOW:
t.style.display=hX_4._E;
hX_4.redraw();
break;
case hX_4.ACT_HIDE:
t.style.display=hX_4._NO;
hX_4.redraw();
break;
case hX_4.ACT_INVERTHIDE:
t.style.display=(hX_4.g.getP(t,hX_4._DSP)==hX_4._NO)?hX_4._E:hX_4._NO;
hX_4.redraw();
break;
case hX_4.ACT_VISIBLE:
hX_4.applyNestedProperty(t, hX_4._VIS, hX_4._VS);
hX_4.redraw();
break;
case hX_4.ACT_INVISIBLE:
hX_4.applyNestedProperty(t, hX_4._VIS, hX_4._HI);
hX_4.redraw();
break;
case hX_4.ACT_INVERTVISIBLE:
hX_4.applyNestedProperty(t, hX_4._VIS, (hX_4.g.getP(t,hX_4._VIS)==hX_4._HI)?hX_4._VS:hX_4._HI);
hX_4.redraw();
break;
case hX_4.ACT_NEXTTAB:
hX_4.gotoNextPrev (t, true);
break;
case hX_4.ACT_NEXTTABCLEAR:
if (evt) {
s=hX_4.evtGetTarget(evt);
doClear(s);
}
hX_4.gotoNextPrev (t, true);
break;
case hX_4.ACT_PREVTAB:
hX_4.gotoNextPrev (t, false);
break;
case hX_4.ACT_PREVTABCLEAR:
if (evt) {
s=hX_4.evtGetTarget(evt);
doClear(s);
}
hX_4.gotoNextPrev (t, false);
break;
case hX_4.ACT_CLICK:
doClick(t);
result=false;
break;
case hX_4.ACT_SUBMIT:
var tagset=[];
tagset.push(new hX_4.tagListItem(hX_4._INP,hX_4._SBM));
tagset.push(new hX_4.tagListItem(hX_4._INP,hX_4._lIMG));
tagset.push(new hX_4.tagListItem(hX_4._BTN,hX_4._SBM));
if (hX_4.isTag(t, tagset))
doClick(t);
else {
var submit, form=(t.tagName==hX_4._FRM) ? t : t.form;
if (form) {
submit=hX_4.findFirstTag(form, tagset);
if (submit) doClick(submit);
}
}
return false;
break;
case hX_4.ACT_PADLEFT:
if (t && t.value && t.maxLength) {
domMaxLen=(t.maxLength == -1 || t.maxLength == 0x7fffffff || t.maxLength == void(0)) ? 0 : t.maxLength;
if (domMaxLen > 0) t.value=hX_4.padL(t.value, domMaxLen, hX_4._B);
}
break;
case hX_4.ACT_PADRIGHT:
if (t && t.value && t.maxLength) {
domMaxLen=(t.maxLength == -1 || t.maxLength == 0x7fffffff || t.maxLength == void(0)) ? 0 : t.maxLength;
if (domMaxLen > 0) t.value=hX_4.padR(t.value, domMaxLen, hX_4._B);
}
break;
case hX_4.ACT_TRIM:
if (t && t.value) t.value=hX_4.Trim(t.value);
break;
case hX_4.ACT_FOCUS:
case hX_4.ACT_SELECTED:
case hX_4.ACT_UNSELECTED:
result=false;
if (evt && evt.type==hX_4._evF && t.id==srcobj.id) {
if (a == hX_4.ACT_SELECTED)
hX_4.sel.setCaretPos(srcobj, 0, srcobj.value.length, hX_4.brw.isNavOrMoz());
else {
var bev=hX_4.getBehaviorById(srcobj.id, hX_4.BHR_assist, hX_4._onIN);
if ((a==hX_4.ACT_UNSELECTED) || (bev==null) || (bev!=null && bev.assist==null))
hX_4.sel.setCaretPos(srcobj, 0, 0, hX_4.brw.isNavOrMoz());
}
break;
}
hX_4.i.setFocus(t, (a==hX_4.ACT_SELECTED), true);
if (evt && evt.type==hX_4._evB) hX_4.pendingBlurRefocus=t.id;
if (!globalAction) {
hX_4.pendingFocusReturn=t.id;
hX_4.pendingSelect=(a==hX_4.ACT_SELECTED);
}
break;
default:
break;
}
}
if (!result) hX_4.i.cancelAction(evt, true);
return result;
}
function doClick (inObj, evttag) {
var o=hX_4.getElementById(inObj);
if (o.click && hX_4.brw.isIE())
return (o.click());
else {
var r=hX_4.i.fireEvent (o, hX_4._onMC, evttag);
if (r == null || r == true && (!hX_4.brw.isIE() && o.tagName && o.tagName==hX_4._ANC)) {
if (o.href) window.location.href=o.href;
}
return r;
}
}
function processAction (obj, evt, fcn, action, globalAction, target, cssStyle, cancelBubble, retainFocus, isError) {
var result=true;
if (fcn != null) {
try {
var realfcn=(hX_4.isFunction(fcn)) ? fcn : new Function ("event", fcn);
result=realfcn.call(obj, evt);
result=(hX_4.isUnDef(typeof result)) ? true : ((result == false) ? false: true);
if (evt) {
if (evt.returnValue!=undefined && evt.returnValue == false) result=false;
else if (evt.getPreventDefault && evt.getPreventDefault()) result=false;
}
}
catch (e) {
window.status=hX_4.INTERR_Dispatcher;
if (evt && evt.errorMsg) evt.errorMsg=null;
}
}
var k, t, a, initialResult=result;
if (result && action != null) {
for (k=0; result && k < action.length; k++) {
a=action[k].toUpperCase();
t=target[k];
if (!(a==hX_4.ACT_CONFIRM || a==hX_4.ACT_ALERT)) {
if (hX_4.isDef(typeof t) && t != null) {
if (t.toLowerCase() == hX_4._NO) t=document.body;
else if (t.substr(0,4).toLowerCase() == hX_4._URL || t.substr(0,4).toLowerCase() == hX_4._URI) t=hX_4.stripURL(t);
else t=hX_4.getElementById(t);
} else if (evt != null) t=hX_4.evtGetTarget(evt);
}
result=doAction (obj, a, globalAction, t, evt);
result=(hX_4.isUnDef(typeof result)) ? true : ((result == false) ? false: true);
if (evt && evt.returnValue!=undefined && evt.returnValue == false) result=false;
else if (evt && evt.getPreventDefault && evt.getPreventDefault()) result=false;
}
}
if (initialResult && cssStyle != null) doCssStyleClass (obj, cssStyle);
if (cancelBubble != null || (isError && !result)) {
if (evt) {
if (evt.preventDefault) {
evt.stopPropagation();
evt.preventDefault();
} else {
if (hX_4.brw.isIE() && evt.type==hX_4._evKD) {
var code=(evt.keyCode && (evt.keyCode != 0)) ? evt.keyCode : -1;
if ((code >= 91 && code <= 93) || (code >= 112 && code <= 123))
try {
evt.keyCode=0;
} catch (e) {
}
}
evt.cancelBubble=true;
evt.returnValue=false;
}
}
result=false;
}
if (retainFocus) hX_4.i.setFocus(t, false, true);
return result;
}
}
HxG_4.prototype.HxCaretSelection=function () {
}
HxG_4.prototype.HxCaretSelection.prototype.getSelection=function (obj) {
var r, sel=null;
if (obj.selectionEnd) {
sel=obj.value.substring(obj.selectionStart,obj.selectionEnd);
} else if (document.selection) {
r=document.selection.createRange();
sel=r.text;
}
return sel;
}
HxG_4.prototype.HxCaretSelection.prototype.getSelectionR=function (obj) {
var s=0, e=0, l;
if (obj.selectionEnd) {
s=obj.selectionStart;
e=obj.selectionEnd;
} else if (document.selection) {
s=this.getCaretPos(obj);
l=this.getSelection(obj);
e=s+l.length;
}
s=(s < 0) ? 0 : s;
e=(e > obj.value.length) ? obj.value.length : e;
return{start: s, end: e};
}
HxG_4.prototype.HxCaretSelection.prototype.hasSelection=function (obj) {
var sel=hX_4.sel.getSelection(obj);
return (sel != null && sel.length > 0);
}
HxG_4.prototype.HxCaretSelection.prototype.setSelection=function (obj, start, end) {
if (obj.createTextRange) {
var t=((obj.tagName) ? obj.tagName : hX_4._E), y=((obj.type) ? obj.type.toLowerCase() : hX_4._E);
if (t==hX_4._BBODY || t==hX_4.TXT || t==hX_4.__BTN ||
(t==hX_4._INP && (y==hX_4._TBTN || y==hX_4._HI || y==hX_4._PWD || y==hX_4._RES || y==hX_4._SBM || y==hX_4._XT)))
{
var r=obj.createTextRange();
r.collapse(true);
r.moveEnd('character', end);
r.moveStart('character', start);
r.select();
}
} else if (obj.setSelectionRange) {
obj.setSelectionRange(start, (end==null)?start:end);
}
}
HxG_4.prototype.HxCaretSelection.prototype.getCaretPos=function (obj, hasFocus) {
if (hasFocus != null && !hasFocus)
if (obj.focus) obj.focus();
if (obj.selectionStart) {
return obj.selectionStart;
} else if (document.selection) {
var n, r=document.selection.createRange();
r.moveEnd("textedit");
n=obj.value.length - r.text.length;
return n;
}
return 0;
}
HxG_4.prototype.HxCaretSelection.prototype.setCaretPos=function (obj, pos, pos1, defer) {
if (arguments.length > 3 && defer != null && defer) {
hX_4.i.deferSetFocus=obj;
hX_4.i.deferSetSelect=pos;
hX_4.i.deferSetSelect1=(arguments.length > 2 && pos1 != null) ? pos1 : null;
setTimeout(hX_4.i.selSetter, 1);
} else {
hX_4.sel.setSelection(obj, pos, pos1);
}
}
HxG_4.prototype.HxCompImpMgr.prototype.selSetter=function() {
hX_4.sel.setSelection(hX_4.i.deferSetFocus, hX_4.i.deferSetSelect, ((hX_4.i.deferSetSelect1 != null)?hX_4.i.deferSetSelect1:hX_4.i.deferSetSelect));
}
HxG_4.prototype.HxRect=function (obj) {
this.X=this.Y=this.width=this.height=null;
if (arguments.length > 0) this.setRect(obj);
}
HxG_4.prototype.HxRect.prototype.setRect=function (obj) {
if (obj) {
this.X=hX_4.g.getAbsPosLeft(obj);
this.Y=hX_4.g.getAbsPosTop(obj);
this.width=hX_4.g.getRendWidth(obj);
this.height=hX_4.g.getRendHeight(obj);
}
}
HxG_4.prototype.HxRect.prototype.setRectR=function (r) {
if (r) {
this.X=r.X;
this.Y=r.Y;
this.width=r.width;
this.height=r.height;
}
}
HxG_4.prototype.HxRect.prototype.hitTest=function (iX, iY) {
if (this.X == null || this.Y == null || this.width == null || this.height == null)
return false;
var x, y;
if (arguments.length == 1) {
x=iX.X; y=iX.Y;
} else {
x=iX; y=iY;
}
return ((x >= this.X) && (x < (this.X+this.width)) &&
(y >= this.Y) && (y < (this.Y+this.height)));
}
HxG_4.prototype.HxGeometryMgr.prototype.toPoint=function (evt) {
var cX, cY;
if (hX_4.brw.isIE()) {
var sBase=(hX_4.brw.isIE6_CSS()) ? document.body.parentNode : document.body;
cX=evt.clientX; cY=evt.clientY;
cX=cX + sBase.scrollLeft;
cY=cY + sBase.scrollTop;
} else {
cX=evt.pageX;	cY=evt.pageY;
}
return {X: cX, Y: cY};
}
HxG_4.prototype.pseudoClipboard=function () {
this.valueAsString=null;
this.valueAsNumber=null;
}
HxG_4.prototype.padL=function (theNumber, toFill, pad) {
var s=theNumber.toString(), i, n=toFill - s.length;
for (i=0; i < n; i++) s=((pad) ? pad:hX_4._Z) + s;
return s;
}
HxG_4.prototype.padR=function (theNumber, toFill, pad) {
var s=theNumber.toString(), i, n=toFill - s.length;
for (i=0; i<n; i++) s=s + ((pad) ? pad:hX_4._Z);
return s;
}
HxG_4.prototype.truncateRoundHalfEven=function (str, chars) {
var ostr=str, oflow=false;
if (ostr.length > chars) {
var tstr=ostr.substr(chars);
ostr=ostr.substr(0, chars);
var r=(tstr.length > 2) ? (new Number(tstr.substr(0,3))) : ((tstr.length > 1) ? (new Number(tstr.substr(0,2))*10) : (new Number(tstr.charAt(0))*100));
var r1=new Number (ostr.charAt(ostr.length-1));
if (r > 500 || (r == 500 && ((Math.floor(r1/2)*2) != r1))) {
if (r1+1 == 10) {
var n=new Number(ostr) +1, nn=new Number(ostr);
n=n.toString(); nn=nn.toString();
if (n.length > nn.length && str.charAt(0) != hX_4._Z) {
ostr=hX_4._Z;
oflow=true;
} else {
ostr=hX_4.padL(n, chars);
}
} else
 ostr=ostr.substr(0,ostr.length-1) + (r1+1);
}
}
return {value: ostr, overflow: oflow};
}
HxG_4.prototype.replaceAll=function (s, ch1, ch2) {
if(ch1==ch2)return s;
var o=s, t=ch1.length, i=o.indexOf(ch1);
while (i >= 0 && o.length > 0) {
o=(i==0) ? (ch2 + o.substr(ch1.length)) : (o.substr(0,i) + ch2 + o.substr(i+t));
i=o.indexOf(ch1);
}
return o;
}
HxG_4.prototype.rplOne=function (s, pos, ch1) {
return (pos < s.length)?(s.substr(0,pos)+ch1+s.substr(pos+1)):s;
}
HxG_4.prototype.allTrim=function (s) {
var o=hX_4.replaceAll(s, "  ", hX_4._B);
if (o.charAt(0) == hX_4._B) o=o.substr(1);
if (o.charAt(o.length-1) == hX_4._B) o=o.substr(0,o.length-1);
return o;
}
HxG_4.prototype.Trim=function (s) {
if (null == s || 0 == s.length || !hX_4.isString(s)) return s;
var o, q=0;
while (q < s.length && s.substr(q,1) == hX_4._B) q++;
o=s.substr(q);
q=o.length-1;
while (q >= 0 && o.substr(q,1) == hX_4._B) q--;
return (o.slice(0,q+1));
}
HxG_4.prototype.trimL=function (s, iChar) {
if (null==s || 0==s.length) return s;
var q=0, ch=(iChar == null) ? hX_4._B:iChar;
while (q < s.length && s.substr(q,1) == ch) q++;
return (s.substr(q));
}
HxG_4.prototype.trimR=function (s, iChar) {
if (null==s || 0==s.length) return s;
var q=s.length-1, ch=(iChar == null) ? hX_4._B:iChar;
while (q >= 0 && s.substr(q,1) == ch) q--;
return (s.substr(0,q+1));
}
HxG_4.prototype.isChar=function (c, set) {
return (set.indexOf(c) >= 0) ? true : false;
}
HxG_4.prototype.NLSFormatMsg=function (template, args) {
var i, r=hX_4._E, l1="{", l2="}";
if (template != null) {
r=template;
if (args != null) {
for (i=0; i < args.length; i++)  r=hX_4.replaceAll (r, l1 + i + l2, args[i]);
}
}
return r;
}
HxG_4.prototype.findNestedObject=function(obj, ichildtag) {
if(obj == null || obj.childNodes == null || obj.childNodes.length == 0)
return null;
var i, nested_child, children=obj.childNodes, childtag=ichildtag.toLowerCase();
for(i=0; i < children.length; i++) {
if(children[i].nodeName.toLowerCase() == childtag)
return children[i];
}
for(i=0; i < children.length; i++) {
nested_child=hX_4.findNestedObject(children[i], childtag);
if (nested_child != null) {
return nested_child;
}
}
return null;
}
HxG_4.prototype.applyNestedAttribute=function(root, attributeName, attributeValue, force) {
if (root.nodeType == hX_4.ELEMENT_NODE) {
if ((root.getAttribute(attributeName) != null) || force)
if (attributeName == hX_4._DSB) root.disabled=attributeValue;
else root.setAttribute(attributeName, attributeValue);
}
for (var child=root.firstChild; child != null; child=child.nextSibling)
this.applyNestedAttribute (child, attributeName, attributeValue, force);
}
HxG_4.prototype.applyNestedProperty=function(root, propertyName, propertyValue) {
if (root.nodeType == hX_4.ELEMENT_NODE)  hX_4.g.setP(root, propertyName, propertyValue);
for (var child=root.firstChild; child != null; child=child.nextSibling)
this.applyNestedProperty (child, propertyName, propertyValue);
}
HxG_4.prototype.getFirstChildInCell=function (cell) {
var r=(cell) ? cell.firstChild : null;
while (r && r.nodeType != hX_4.ELEMENT_NODE) r=r.nextSibling;
return r;
}
HxG_4.prototype.gotoNextPrev=function (t, forward, skipHelper) {
if (hX_4.tabNav == null) hX_4.tabNav=new hX_4.tabNavigator();
var o=hX_4.tabNav.getFocus(t, forward, skipHelper);
if (o) hX_4.i.setFocus(o, (o.tagName==hX_4._INP && o.type.toLowerCase()==hX_4._XT), true);
}
HxG_4.prototype.getTabElements=function () {
if (hX_4.tabNav == null) hX_4.tabNav=new hX_4.tabNavigator();
return hX_4.tabNav.getTabItems();
}
HxG_4.prototype.tabbableElements=null;
HxG_4.prototype.getTabbableElements=function () {
if (hX_4.tabbableElements == null)
hX_4.tabbableElements=[
new hX_4.tagListItem(hX_4._INP,null),
new hX_4.tagListItem(hX_4._SEL,null),
new hX_4.tagListItem(hX_4._TXT,null),
new hX_4.tagListItem(hX_4._BTN,null),
new hX_4.tagListItem(hX_4._ANC,null),
new hX_4.tagListItem(hX_4._EMB,null),
new hX_4.tagListItem(hX_4._OBJ,null),
new hX_4.tagListItem(hX_4._APP,null)];
return hX_4.tabbableElements;
}
HxG_4.prototype.isTabbable=function (node) {
if (hX_4.isTag(node, hX_4.getTabbableElements())) {
if (node.tagName==hX_4._INP) {
if (node.type.toLowerCase()==hX_4._HI) return false;
if (node.id && node.id.length>9 && node.id.substr(node.id.length-10)=="_HXB_GHOST") return false;
}
return true;
}
if (node && node.nodeType!=undefined && node.nodeType == hX_4.ELEMENT_NODE) {
if (node.tabIndex!=undefined && node.tabIndex > 0)
return true;
}
return false;
}
HxG_4.prototype.tagListItem=function (tag, type) {
this.tag=tag.toLowerCase();
this.type=(type != null) ? type.toLowerCase() : null;
}
HxG_4.prototype.isTag=function (inobj, tagset) {
var i, hit=false, obj=hX_4.getElementById(inobj);
if (obj && obj.nodeType!=undefined && obj.nodeType == hX_4.ELEMENT_NODE) {
for (i=0; i < tagset.length && !hit; i++) {
if (tagset[i].tag == obj.tagName.toLowerCase()) {
if ((tagset[i].type == null) || (obj.getAttribute(hX_4._TYP).toLowerCase() == tagset[i].type))
hit=true;
}
}
}
return hit;
}
HxG_4.prototype.findFirstTag=function (inroot, tagset) {
var obj, root=hX_4.getElementById(inroot);
if (hX_4.isTag(root, tagset))
return root;
if (root && root.firstChild!=undefined) {
for (var child=root.firstChild; child != null; child=child.nextSibling) {
obj=this.findFirstTag (child, tagset);
if (obj != null)
return obj;
}
}
return null;
}
HxG_4.prototype.isObject=function(obj) {
return (typeof(obj) == "object");
}
HxG_4.prototype.isFunction=function(obj) {
return (typeof(obj) == "function");
}
HxG_4.prototype.isString=function(obj) {
return (typeof(obj) == "string");
}
HxG_4.prototype.isNumber=function(obj) {
return (typeof(obj) == "number");
}
HxG_4.prototype.isArray=function(obj) {
return (typeof(obj) == "object" && obj.length!=undefined && obj.push!=undefined);
}
HxG_4.prototype.isUnDef=function(objt) {
return (objt == "undefined");
}
HxG_4.prototype.isDef=function(objt) {
return (objt != "undefined");
}
HxG_4.prototype.getKeyCode=function(ev) {
return ((ev.keyCode) ? ev.keyCode : ev.which);
}
HxG_4.prototype.isFcnKey=function(evt) {
var code=hX_4.getKeyCode(evt);
code=(code && (code != 0)) ? code : -1;
if (((code < 48) && (code != 32 && code != 9 && code != 13))
|| (code >= 91 && code <= 93)
|| (code >= 112 && code <= 123)
|| (code >= 124 && code <= 185)
|| (code >= 223))
return true;
return false;
}
HxG_4.prototype.getChrCode=function(ev) {
return (String.fromCharCode ((ev.charCode) ? ev.charCode : ev.keyCode));
}
HxG_4.prototype.setChrCode=function(ev, c) {
if (ev.charCode) ev.charCode=c.charCodeAt(0);
else if (ev.keyCode) ev.keyCode=c.charCodeAt(0);
}
HxG_4.prototype.isFunctionKey=function(keyCode) {
return (112 <= keyCode && keyCode << 123);
}
HxG_4.prototype.evtGetTarget=function (evt) {
return ((evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null));
}
HxG_4.prototype.getFirstClassName=function (inobj) {
var r=null, obj=hX_4.getElementById(inobj);
if (obj && obj.className) {
r=hX_4.allTrim(obj.className);
if (r.indexOf(hX_4._B) > 0)
r=r.substr(0,r.indexOf(hX_4._B));
}
return r;
}
HxG_4.prototype.appendClassName=function (inobj, name, remove) {
var obj=hX_4.getElementById(inobj), c=hX_4._B + hX_4.allTrim(obj.className);
if (remove && remove.length > 0 && c.length > 0) {
var nc, r=hX_4._B + remove, k=c.indexOf(r);
while (k >= 0) {
nc=c.substr(k+1);
c=c.substr(0,k);
k=nc.indexOf(hX_4._B);
nc=(k<0) ? hX_4._E : nc.substr(k);
c=c + hX_4._B + nc;
c=hX_4._B + hX_4.allTrim(c);
k=c.indexOf(r);
}
}
c=hX_4.allTrim(c);
c=(c.length > 0) ? (c + hX_4._B + name) : name;
if (obj.className != c)
obj.className=c;
}
HxG_4.prototype.stripClassSuffix=function (c, suff) {
if (c && suff && suff.length && suff.length > 0) {
var i, r=c, l=suff.length, ll=c.length;
for (i=0; i < l; i++) {
if (suff[i].length < c.length && c.substr(ll-suff[i].length) == suff[i])
return c.substr(0,ll-suff[i].length);
}
}
return r;
}
HxG_4.prototype.isClassDefined=function (testname) {
if (hX_4.CSSSelectors == null) {
var sheets, rulelist, rule, selector, i, j, k, l=document.styleSheets.length;
hX_4.CSSSelectors=[];
for (i=0; i < l; i++) {
sheets=document.styleSheets[i];
rulelist=(sheets.cssRules!=undefined) ? sheets.cssRules :
((sheets.rules!=undefined) ? sheets.rules : null);
if (rulelist != null) {
for (j=0; j < rulelist.length; j++) {
rule=rulelist[j].selectorText;
while (rule && rule.length > 0) {
k=rule.indexOf(hX_4._C);
if (k < 0) {
selector=rule;
rule=hX_4._E;
} else {
selector=rule.substr(0,k);
rule=rule.substr(k+1);
}
selector=hX_4.allTrim(selector);
if (selector.length > 0 && selector.indexOf(hX_4._B) < 0 && selector.charAt(0) ==  hX_4._P)
hX_4.CSSSelectors[selector]=selector;
}
}
}
}
}
if (hX_4.CSSSelectors[hX_4._P + testname]!=null)
return true;
return false;
}
HxG_4.prototype.scratchImg=null;
HxG_4.prototype.scratchImg1=null;
HxG_4.prototype.getClassStyle=function (cl, prop) {
if (cl && cl.length > 0) {
if (this.scratchImg == null) {
var img=hX_4.getElementById("HX_SCRATCH_IMG");
if (!img) {
img=document.createElement(hX_4._DIV);
img.setAttribute(hX_4._ID, "HX_SCRATCH_IMG");
img.style.display=hX_4._NO;
img.style.width=hX_4._ZPX;
img=document.body.appendChild(img);
}
this.scratchImg=img;
}
this.scratchImg.className=cl;
var bi=hX_4.g.getP(this.scratchImg, prop);
if (prop == hX_4._BIMG) {
if (bi && bi.length && bi.length > 0 && bi != hX_4._NO)
return (this.stripURL(bi));
} else
 return bi;
}
return null;
}
HxG_4.prototype.getEvalStyle=function (obj, prop, value) {
if (obj && prop && value) {
if (this.scratchImg1 == null) {
var img=hX_4.getElementById("HX_SCRATCH_IMG1");
if (!img) {
img=document.createElement(hX_4._DIV);
img.setAttribute(hX_4._ID, "HX_SCRATCH_IMG1");
img.style.display=hX_4._NO;
img.style.width=hX_4._ZPX;
img=document.body.appendChild(img);
}
this.scratchImg1=img;
}
hX_4.g.setP(this.scratchImg1, prop, value);
return (hX_4.g.getP(this.scratchImg1, prop));
}
return null;
}
HxG_4.prototype.stripURL=function (url) {
var u=url;
if ((u.substr(0,4).toLowerCase() == hX_4._URL) || (u.substr(0,4).toLowerCase() == hX_4._URI)) {
u=u.substr(4);
u=u.substr(0,u.length-1);
u=hX_4.replaceAll(u, hX_4._DQT,hX_4._E);
u=hX_4.replaceAll(u, hX_4._SQT,hX_4._E);
}
return u;
}
HxG_4.prototype.getIHTML=function (obj) {
return ((obj && obj.innerHTML) ? obj.innerHTML : null);
}
HxG_4.prototype.setIHTML=function (obj, html) {
if (hX_4.brw.isNavOrMoz() && !hX_4.brw.hasInnerHTML()) {
if (!obj) return;
while (obj.lastChild) obj.removeChild(obj.lastChild);
hX_4.intParseTags(obj, html, null);
} else
 obj.innerHTML=html;
}
HxG_4.prototype.intTagIsContainer=function(t) {
return (!(t == hX_4._BR || t==hX_4._HR || t == hX_4._INP || t == hX_4._IMG));
}
HxG_4.prototype.intParseTags=function (root, s, opentag) {
var obj=root, lt, gt, t, tag, i;
while (s.length > 0) {
lt=s.indexOf(hX_4._LT);
gt=(lt >= 0) ? s.indexOf(hX_4._GT, lt) : -1;
if (lt < 0 || gt < 0) {
obj.appendChild(document.createTextNode(s));
break;
} else if (lt > 0)
obj.appendChild(document.createTextNode(s.substring(0, lt)));
if (s.charAt(lt+1) == hX_4._SL) {
t=(s.substring(lt+2,gt)).toLowerCase();
if (t == opentag && hX_4.intTagIsContainer(t))
obj=obj.parentNode;
s=s.substr(gt+1);
} else {
tag=hX_4.intProcessTag (obj, s.substring(lt+1, gt));
s=s.substr(gt+1);
if (tag)
s=hX_4.intParseTags (tag.obj, s, tag.name);
}
}
return (s);
}
HxG_4.prototype.intProcessTag=function (obj, s) {
var name=null, node=null, rnode=null, aN, aV, sN, sV, sgl, c, k, j, i;
s=hX_4.Trim(s);
if (s.length > 0 && s.indexOf(hX_4._LT) < 0) {
i=s.indexOf(hX_4._B);
name=(i < 0) ? s : s.substring(0,i);
if (name.length > 0) {
name=name.toLowerCase();
rnode=node=document.createElement(name);
if (node) obj.appendChild(node);
if (!hX_4.intTagIsContainer(name))
rnode=obj;
}
s=hX_4.Trim(s.substr(i));
i=s.indexOf(hX_4._EQ);
while (i >= 0) {
aN=(hX_4.Trim(s.substring(0, i))).toLowerCase();
s=hX_4.Trim(s.substr(i+1));
c=s.charAt(0);
j=(c == hX_4._SQT) ? s.indexOf(hX_4._SQT,1) : ((c == hX_4._DQT) ? s.indexOf(hX_4._DQT,1) : s.indexOf(hX_4._DQT,1));
if (j >= 0) {
aV=hX_4.Trim(s.substring(1, j));
i=j+1;
} else {
aV=s;
i=s.length;
}
if (aN == "style") {
while (aV.length > 0) {
j=aV.indexOf(hX_4._SM);
if (j >= 0) {
sN=hX_4.Trim(aV.substr(0,j));
aV=hX_4.Trim(aV.substr(j+1));
} else {
sN=aV;
aV=hX_4._E;
}
if (sN.length > 0) {
sV=hX_4._E;
j=sN.indexOf(hX_4._CL);
if (j >= 0) {
sV=hX_4.Trim(sN.substr(j+1));
sN=hX_4.Trim(sN.substr(0,j));
}
hX_4.g.setP(node, sN, sV);
}
}
} else {
node.setAttribute(aN, aV);
}
s=hX_4.Trim(s.substr(i));
i=s.indexOf(hX_4._EQ);
}
return (s==hX_4._SL) ? null : {name:name, obj:rnode} ;
}
return null;
}
if ((typeof hX_4) == 'undefined' || !hX_4) { var hX_4=new HxG_4(); }
if ((typeof hX) == 'undefined' || !hX) { var hX=hX_4; }
HxG_4.prototype.JSFSubButton=function (component, btnOrg, btnBorder, btnColor, btn1label, btn2label, blurIsOn, hinky, inputIsButton) {
if (!component || !component.DOMobj || !component.DOMobj.id || component.DOMobj.id.length <= 0 || !component.DOMobj.tagName || component.DOMobj.tagName != hX_4._INP) return;
this.c=component;
this.btnOrg=(btnOrg) 			? btnOrg : 1;
this.btnBorder=(btnBorder!=null) ? btnBorder : -1;
this.btnColor=(btnColor)		? btnColor : hX_4.CLR_BTN;
this.btn1label=(btn1label)		? btn1label: hX_4._E;
this.btn2label=(this.btnOrg > 1 && btn2label) ? btn2label : hX_4._E;
this.btngraphic=(hinky) 			? hinky : hX_4.R_IMG_HINKIES;
this.blurIsOn=(blurIsOn)		? blurIsOn : false;
this.inputIsButton=(inputIsButton)? true : false;
this.spandisplay=(hX_4.brw.isIE()) ? hX_4._INB : hX_4._INL;
this.borderSystemColor=function (obj) {return ("InactiveCaption"); }
this.borderCalcColor=function (obj) {
var c=hX_4.g.getP(obj, hX_4._BRCOR);
return ((c.length > 0 && c.indexOf(hX_4._B) < 0 && c==hX_4.g.getP (obj, hX_4._COR)) ?  hX_4._E : hX_4.g.getP(obj, hX_4._BRRCL));
}
this.stateStaticPos =
this.statePosition =
this.stateResizable=null;
this.stateIsXP=false;
this.stateBtnBorderStyle =
this.stateBtnBackColor =
this.stateBtnBorderColor =
this.stateBtnBorderWidth=hX_4._E;
this.stateBtnOffset=this.stateElemOffset=0;
this.dupe=this.btn1=this.btn2=this.img1=this.img2=this.iSpn=this.oSpn=null;
this.valid=false;
this.HTMLcopied=false;
this.styleProps=[];
this.styleValues=[];
this.calcValues=calcValues;
this.saveValues=saveValues;
this.getValue=function (v) { return this.styleValues[v]; }
function saveValues (obj) {
var prop=hX_4.g.getP(obj, hX_4._POS);
this.styleProps[hX_4._POS]=(prop && prop.length > 0 && prop != hX_4._AUT) ? prop : null;
prop=hX_4.g.getP(obj, hX_4._MGNL);
this.styleProps[hX_4._MGNL]=(prop && prop.length > 0 && prop != hX_4._AUT) ? prop : null;
prop=hX_4.g.getP(obj, hX_4._MGNR);
this.styleProps[hX_4._MGNR]=(prop && prop.length > 0 && prop != hX_4._AUT) ? prop : null;
prop=hX_4.g.getP(obj, hX_4._MGNT);
this.styleProps[hX_4._MGNT]=(prop && prop.length > 0 && prop != hX_4._AUT) ? prop : null;
prop=hX_4.g.getP(obj, hX_4._MGNB);
this.styleProps[hX_4._MGNB]=(prop && prop.length > 0 && prop != hX_4._AUT) ? prop : null;
prop=hX_4.g.getP(obj, hX_4._LFT);
this.styleProps[hX_4._LFT]=(prop && prop.length > 0 && prop != hX_4._AUT) ? prop : null;
prop=hX_4.g.getP(obj, hX_4._RGT);
this.styleProps[hX_4._RGT]=(prop && prop.length > 0 && prop != hX_4._AUT) ? prop : null;
prop=hX_4.g.getP(obj, hX_4._TOP);
this.styleProps[hX_4._TOP]=(prop && prop.length > 0 && prop != hX_4._AUT) ? prop : null;
prop=hX_4.g.getP(obj, hX_4._BOT);
this.styleProps[hX_4._BOT]=(prop && prop.length > 0 && prop != hX_4._AUT) ? prop : null;
}
function calcValues (cl) {
this.styleValues[hX_4._POS]=(this.styleProps[hX_4._POS] != null) ? this.styleProps[hX_4._POS] : hX_4.getClassStyle(cl, hX_4._POS);
this.styleValues[hX_4._MGNL]=(this.styleProps[hX_4._MGNL] != null) ? this.styleProps[hX_4._MGNL] : hX_4.getClassStyle(cl, hX_4._MGNL);
this.styleValues[hX_4._MGNR]=(this.styleProps[hX_4._MGNR] != null) ? this.styleProps[hX_4._MGNR] : hX_4.getClassStyle(cl, hX_4._MGNR);
this.styleValues[hX_4._MGNT]=(this.styleProps[hX_4._MGNT] != null) ? this.styleProps[hX_4._MGNT] : hX_4.getClassStyle(cl, hX_4._MGNT);
this.styleValues[hX_4._MGNB]=(this.styleProps[hX_4._MGNB] != null) ? this.styleProps[hX_4._MGNB] : hX_4.getClassStyle(cl, hX_4._MGNB);
this.styleValues[hX_4._LFT]=(this.styleProps[hX_4._LFT] != null) ? this.styleProps[hX_4._LFT] : hX_4.getClassStyle(cl, hX_4._LFT);
this.styleValues[hX_4._RGT]=(this.styleProps[hX_4._RGT] != null) ? this.styleProps[hX_4._RGT] : hX_4.getClassStyle(cl, hX_4._RGT);
this.styleValues[hX_4._TOP]=(this.styleProps[hX_4._TOP] != null) ? this.styleProps[hX_4._TOP] : hX_4.getClassStyle(cl, hX_4._TOP);
this.styleValues[hX_4._BOT]=(this.styleProps[hX_4._BOT] != null) ? this.styleProps[hX_4._BOT] : hX_4.getClassStyle(cl, hX_4._BOT);
}
var v, attr, tag, c=this.c, parent=c.DOMobj.parentNode;
hX_4.attachComponentEvent (c.DOMobj, hX_4._onKD, hX_4._lN);
hX_4.attachComponentEvent (c.DOMobj, hX_4._onF, hX_4._lN);
if (this.inputIsButton) hX_4.attachComponentEvent (c.DOMobj, hX_4._onB, hX_4._lN);
if (hX_4.brw.isNavOrMoz()) {
tag=document.createElement(hX_4._INP);
tag.setAttribute(hX_4._TYP, hX_4._XT);
tag.setAttribute(hX_4._ID, c.DOMobj.id+"_HXB_GHOST");
tag.className=c.DOMobj.className;
tag.dir=c.DOMobj.dir;
tag.disabled=c.DOMobj.disabled;
tag.readOnly=c.DOMobj.readOnly;
tag.language=c.DOMobj.language;
tag.tabIndex=-1;
if (c.DOMobj.style.cssText && c.DOMobj.style.cssText.length > 0) tag.style.cssText=c.DOMobj.style.cssText;
tag.style.display=hX_4._NO;
this.dupe=parent.insertBefore(tag, c.DOMobj);
}
tag=document.createElement(hX_4._SPN);
tag.setAttribute (hX_4._ID, c.DOMobj.id + "_outerspan");
tag.style.position=hX_4._REL;
tag.style.display=this.spandisplay;
this.oSpn=parent.insertBefore(tag, c.DOMobj);
this.oSpn.appendChild(c.DOMobj);
tag=document.createElement(hX_4._SPN);
tag.style.position=hX_4._ABS;
tag.style.padding=tag.style.margin=hX_4._ZPX;
tag.style.display=this.spandisplay;
this.iSpn=this.oSpn.appendChild(tag);
tag=document.createElement(hX_4._BTN);
tag.setAttribute(hX_4._ID, c.DOMobj.id+"_1_HXB_HPBTN");
tag.setAttribute(hX_4._TYP, hX_4._TBTN);
tag.setAttribute(hX_4._TTL, this.btn1label);
tag.style.position=hX_4._ABS;
tag.style.padding=tag.style.margin=hX_4._ZPX;
tag.style.fontSize=hX_4._1PX;
tag.onclick=tag.ondblclick=tag.onmousedown=tag.onmouseup=tag.onmouseout=tag.onkeydown=tag.onkeypress=tag.onkeyup=this.dispatchBtnComponent;
if (this.blurIsOn) tag.onblur=this.dispatchBtnComponent;
this.btn1=this.iSpn.appendChild(tag);
tag=document.createElement(hX_4._IMG);
tag.setAttribute(hX_4._SRC, c.r.getURL(c.p.R_IMG_SPACER));
tag.setAttribute(hX_4._BRD, hX_4._Z);
tag.style.fontSize=hX_4._1PX;
tag.style.verticalAlign="baseline";
tag.style.padding=tag.style.margin=hX_4._ZPX;
tag.setAttribute(hX_4._ALT, this.btn1label);
this.img1 =this.btn1.appendChild(tag);
this.valid=(this.oSpn && this.iSpn && this.btn1 && this.img1);
if (this.btnOrg == 2) {
tag=document.createElement(hX_4._BTN);
tag.setAttribute(hX_4._ID, c.DOMobj.id+"_2_HXB_HPBTN");
tag.setAttribute(hX_4._TYP, hX_4._TBTN);
tag.setAttribute(hX_4._TTL, this.btn2label);
tag.style.position=hX_4._ABS;
tag.style.padding=tag.style.margin=hX_4._ZPX;
tag.style.fontSize=hX_4._1PX;
tag.onclick=tag.ondblclick=tag.onmousedown=tag.onmouseup=tag.onmouseout=tag.onkeydown=tag.onkeypress=tag.onkeyup=this.dispatchBtnComponent;
if (this.blurIsOn) tag.onblur=this.dispatchBtnComponent;
this.btn2=this.iSpn.appendChild(tag);
tag=document.createElement(hX_4._IMG);
tag.setAttribute(hX_4._SRC, c.r.getURL(c.p.R_IMG_SPACER));
tag.setAttribute(hX_4._BRD, hX_4._Z);
tag.style.fontSize=hX_4._1PX;
tag.style.padding=tag.style.margin=hX_4._ZPX;
tag.style.verticalAlign="baseline";
tag.setAttribute(hX_4._ALT, this.btn2label);
this.img2=this.btn2.appendChild(tag);
this.valid=this.valid || (this.btn2 && this.img2);
}
this.inpDiv=this.inpSubDiv=null;
if (this.inputIsButton) {
tag=document.createElement(hX_4._DIV);
tag.style.position=hX_4._ABS;
tag.style.padding=tag.style.margin=hX_4._ZPX;
tag.style.borderWidth=hX_4._2PX;
tag.style.borderColor=hX_4.CLR_BCK;
tag.style.borderStyle=hX_4._SLD;
tag.style.display=hX_4._E;
tag.style.fontSize= hX_4._1PX;
this.inpDiv=this.oSpn.appendChild(tag);
tag=document.createElement(hX_4._DIV);
tag.style.position=hX_4._ABS;
tag.style.padding=tag.style.margin=hX_4._ZPX;
tag.style.display=hX_4._E;
tag.style.fontSize= tag.style.borderWidth=hX_4._1PX;
tag.style.borderColor=hX_4.CLR_SHDW;
tag.style.borderStyle=hX_4._SLD;
this.inpSubDiv=this.inpDiv.appendChild(tag);
this.valid=this.valid || (this.inpDiv!=null && this.inpSubDiv!=null);
}
}
HxG_4.prototype.JSFSubButton.prototype.size=function (resizeOnly) {
var c=this.c, prop, elemHeight, elemWidth;
if (!this.valid) return false;
if (!this.HTMLcopied) this.saveValues(this.c.DOMobj);
if (this.oSpn && this.c.DOMobj.parentNode.id==undefined || this.c.DOMobj.parentNode.id != (this.c.DOMobj.id + "_outerspan")) {
this.c.DOMobj.parentNode.insertBefore(this.oSpn, this.c.DOMobj);
var ff=this.oSpn.firstChild;
if (this.dupe) ff=ff.nextSibling;
if (ff) this.oSpn.insertBefore(this.c.DOMobj, ff);
}
if (resizeOnly) {
elemWidth=this.oSpn.offsetWidth;
hX_4.g.setP(c.DOMobj, hX_4._WD, ((elemWidth - this.stateElemOffset) > 0) ? ((elemWidth - this.stateElemOffset) + hX_4._PX) : (hX_4._ZPX));
hX_4.g.setP(this.iSpn, hX_4._LFT, ((elemWidth - this.stateBtnOffset) > 0) ? ((elemWidth - this.stateBtnOffset-1) + hX_4._PX) : (hX_4._ZPX));
this.sizeColorArea();
return true;
}
var bDisabled=c.DOMobj.disabled;
var bReadOnly=c.DOMobj.readOnly;
var bHideFocus=(c.DOMobj.hideFocus) ? c.DOMobj.hideFocus : false;
var bNoSelect=(c.DOMobj.unselectable) ? c.DOMobj.unselectable : false;
var bDisplay=hX_4.g.getP(c.DOMobj, hX_4._DSP) != hX_4._NO;
var bVisible=hX_4.g.getP(c.DOMobj, hX_4._VIS);
var taborder=(c.DOMobj.tabIndex) ? c.DOMobj.tabIndex : 0;
var zIndex=hX_4.g.getP(c.DOMobj, hX_4._ZND);
taborder=(hX_4.brw.isIE()) ? taborder : ((taborder < 0) ? 0 : taborder);
zIndex=hX_4.isString(zIndex) ? parseInt(zIndex) : zIndex;
elemHeight=c.DOMobj.offsetHeight;
elemWidth=c.DOMobj.offsetWidth;
if (elemHeight==0 || elemWidth==0) {
if (elemWidth==0 && !this.HTMLcopied) {
prop=hX_4.g.getP(c.DOMobj, hX_4._WD);
bDisplay=(prop.indexOf(hX_4._PCT) >= 0);
} else bDisplay=false;
}
if (!bDisplay) {
if (elemHeight!=0 && elemWidth!=0) this.oSpn.style.display=hX_4._NO
 this.btn1.style.display=this.iSpn.style.display=hX_4._NO;
if (this.btn2) this.btn2.style.display=hX_4._NO;
return true;
}
hX_4.g.setP(this.iSpn, hX_4._DSP, this.spandisplay);
hX_4.g.setP(this.iSpn, hX_4._VIS, bVisible);
hX_4.g.setP(this.oSpn, hX_4._DSP, this.spandisplay);
hX_4.g.setP(this.oSpn, hX_4._VIS, bVisible);
hX_4.g.setP(this.oSpn, hX_4._TXA, hX_4._LFT);
if (this.oSpn.hideFocus && this.oSpn.hideFocus != bHideFocus) this.oSpn.HideFocus=bHideFocus;
if (this.oSpn.unselectable && this.oSpn.unselectable != bNoSelect) this.oSpn.unselectable=bNoSelect;
if (hX_4.brw.isIE())
if (this.oSpn.disabled != bDisabled) this.oSpn.disabled=bDisabled;
this.calcValues(c.DOMobj.className);
prop=this.getValue(hX_4._POS);
this.stateStaticPos=(this.stateStaticPos != null) ? this.stateStaticPos : ((hX_4.brw.isIE() && (prop=="static")));
this.statePosition=(prop != hX_4._ABS) ? hX_4._REL : prop;
hX_4.g.setP(this.oSpn, hX_4._POS, this.statePosition);
hX_4.g.setP(this.oSpn, hX_4._MGNL,	this.getValue(hX_4._MGNL));
hX_4.g.setP(this.oSpn, hX_4._MGNR,	this.getValue(hX_4._MGNR));
hX_4.g.setP(c.DOMobj, hX_4._MGNL,	hX_4._ZPX);
hX_4.g.setP(c.DOMobj, hX_4._MGNR,	hX_4._ZPX);
if (hX_4.brw.isIE()) {
hX_4.g.setP(this.oSpn, hX_4._MGNT,this.getValue(hX_4._MGNT));
hX_4.g.setP(this.oSpn, hX_4._MGNB,this.getValue(hX_4._MGNB));
hX_4.g.setP(c.DOMobj, hX_4._MGNT,hX_4._ZPX);
hX_4.g.setP(c.DOMobj, hX_4._MGNB,hX_4._ZPX);
}
if (this.stateStaticPos) {
hX_4.g.setP(this.oSpn, hX_4._LFT, hX_4._E);
hX_4.g.setP(this.oSpn, hX_4._RGT, hX_4._E);
hX_4.g.setP(this.oSpn, hX_4._TOP, hX_4._E);
hX_4.g.setP(this.oSpn, hX_4._BOT, hX_4._E);
} else {
hX_4.g.setP(this.oSpn, hX_4._LFT, this.getValue(hX_4._LFT));
hX_4.g.setP(this.oSpn, hX_4._RGT, this.getValue(hX_4._RGT));
hX_4.g.setP(this.oSpn, hX_4._TOP, this.getValue(hX_4._TOP));
hX_4.g.setP(this.oSpn, hX_4._BOT, this.getValue(hX_4._BOT));
}
hX_4.g.setP(c.DOMobj, hX_4._POS, hX_4._REL);
hX_4.g.setP(c.DOMobj, hX_4._LFT, hX_4._E);
hX_4.g.setP(c.DOMobj, hX_4._RGT, hX_4._E);
hX_4.g.setP(c.DOMobj, hX_4._TOP, hX_4._E);
hX_4.g.setP(c.DOMobj, hX_4._BOT, hX_4._E);
if (zIndex!=null && zIndex > 0) {
hX_4.g.setP(this.oSpn, hX_4._ZND, zIndex+hX_4._E);
hX_4.g.setP(this.iSpn, hX_4._ZND, zIndex+hX_4._E);
}
if (this.inpDiv) hX_4.g.setP(this.inpDiv, hX_4._ZND, (zIndex==null || zIndex==0)?hX_4._1:(zIndex+1)+hX_4._E);
hX_4.g.copyP (c.DOMobj, this.iSpn, "direction");
var isNowXP=hX_4.g.testXPBorder(c.DOMobj, hX_4._INS);
if (!this.HTMLcopied) this.stateIsXP=isNowXP;
var outBtn=(this.btnBorder >= 0 || this.stateIsXP);
var borderL=hX_4.g.parseBorder(c.DOMobj, hX_4._LFT, 2), borderR=hX_4.g.parseBorder(c.DOMobj, hX_4._RGT, 2);
var borderT=hX_4.g.parseBorder(c.DOMobj, hX_4._TOP, 2), borderB=hX_4.g.parseBorder(c.DOMobj, hX_4._BOT, 2);
if (outBtn) {
hX_4.g.setP(this.iSpn, hX_4._BCOR, hX_4._TRN);
hX_4.g.setP(this.iSpn, hX_4._BRWID,hX_4._ZPX);
this.stateBtnBorderWidth=1;
this.stateBtnBorderStyle=hX_4._SLD;
this.stateBtnBorderColor=((isNowXP)) ? this.borderSystemColor(c.DOMobj) : this.borderCalcColor(c.DOMobj);
} else {
hX_4.g.setP(this.iSpn, hX_4._BCOR, this.btnColor);
hX_4.g.copyP (c.DOMobj, this.iSpn, hX_4._BRLWD, hX_4._BRLSY, hX_4._BRRWD, hX_4._BRRSY, hX_4._BRTWD, hX_4._BRTSY, hX_4._BRBWD, hX_4._BRBSY);
hX_4.g.setP(this.iSpn, hX_4._BRLWD, hX_4._ZPX);
this.stateBtnBorderWidth=(borderR > 3) ? 3 : borderR;
this.stateBtnBorderColor=this.borderCalcColor(c.DOMobj);
if (this.stateBtnBorderColor == hX_4._E)
hX_4.g.setP(this.iSpn, hX_4._BRCOR, this.stateBtnBorderColor);
else
 hX_4.g.copyP(c.DOMobj, this.iSpn, hX_4._BRCOR, hX_4._BRRCL, hX_4._BRLCL, hX_4._BRTCL, hX_4._BRBCL);
this.stateBtnBorderStyle=hX_4.g.getP(c.DOMobj, hX_4._BRRSY);
}
this.stateBtnBorderStyle=(this.stateBtnBorderStyle == hX_4._SLD) ? hX_4._SLD : hX_4._E;
var intBtnBorderWidth=(!outBtn && this.stateBtnBorderStyle == hX_4._SLD && this.stateBtnBorderWidth > 1) ? 1 : this.stateBtnBorderWidth;
this.stateBtnBackColor=(this.stateBtnBorderWidth > 0) ? this.btnColor : hX_4._TRN;
hX_4.g.setP(this.btn1, hX_4._BCOR, this.stateBtnBackColor);
hX_4.g.setP(this.btn1, hX_4._BRSTY, this.stateBtnBorderStyle);
hX_4.g.setP(this.btn1, hX_4._BRCOR, this.stateBtnBorderColor);
hX_4.g.setP(this.btn1, hX_4._BRWID, intBtnBorderWidth + hX_4._PX);
hX_4.g.setP(this.btn1, hX_4._DSP, hX_4._INL);
this.btn1.disabled=bDisabled || bReadOnly;
this.btn1.hideFocus=(this.stateBtnBorderWidth > 0) ? true : bHideFocus;
this.btn1.tabIndex=(this.inputIsButton)?-1:taborder;
var interiorLine=1, bSpecialCase=(this.stateBtnBorderStyle == hX_4._SLD);
if (bSpecialCase) {
interiorLine=this.stateBtnBorderWidth;
if (!outBtn) {
hX_4.g.setP(this.btn1, hX_4._BRCOR, this.stateBtnBackColor);
hX_4.g.setP(this.iSpn, hX_4._BCOR, this.stateBtnBorderColor);
}
}
if (this.btn2) {
this.btn2.tabIndex=this.btn1.tabIndex;
this.btn2.disabled=this.btn1.disabled;
this.btn2.hideFocus=this.btn1.hideFocus;
hX_4.g.setP(this.btn2, hX_4._DSP, this.btn1.style.display);
hX_4.g.setP(this.btn2, hX_4._BCOR, this.btn1.style.backgroundColor);
hX_4.g.setP(this.btn2, hX_4._BRCOR, this.btn1.style.borderColor);
hX_4.g.setP(this.btn2, hX_4._BRSTY, this.btn1.style.borderStyle);
hX_4.g.setP(this.btn2, hX_4._BRWID, this.btn1.style.borderWidth);
}
elemHeight=c.DOMobj.offsetHeight;
var halfheight, btnHeight, btnWidth, fullheight=((outBtn) ? elemHeight : elemHeight - (borderT + borderB));
fullheight=(fullheight < 0) ? 0 : fullheight;
halfheight=Math.floor(fullheight/2);
halfheight=(interiorLine > 1) ? (halfheight - (interiorLine-1)) : halfheight;
btnHeight=(this.btn2) ? halfheight : fullheight;
btnWidth=(this.btn2) ? ((btnHeight*2)-2) : ((btnHeight*2)-2);
btnWidth=(btnWidth < 10) ? 10 : ((btnWidth > 18) ? 18: btnWidth);
hX_4.g.setP(this.btn1, hX_4._TOP, hX_4._ZPX);
hX_4.g.setP(this.btn1, hX_4._LFT, interiorLine + hX_4._PX);
hX_4.g.setP(this.btn1, hX_4._WD, (btnWidth - (interiorLine-1)) + hX_4._PX);
hX_4.g.setP(this.btn1, hX_4._HT, btnHeight + hX_4._PX);
if (this.btn2) {
hX_4.g.setP(this.btn2, hX_4._TOP, (fullheight - halfheight) + hX_4._PX);
hX_4.g.setP(this.btn2, hX_4._LFT, this.btn1.style.left);
hX_4.g.setP(this.btn2, hX_4._WD, this.btn1.style.width);
hX_4.g.setP(this.btn2, hX_4._HT,this.btn1.style.height);
if (bSpecialCase && (fullheight != ((halfheight*2)+interiorLine))) {
var yOffset=(interiorLine==1) ? -1 : 1;
hX_4.g.setP(this.btn2, hX_4._HT, (parseInt(this.btn2.style.height,10) + yOffset) + hX_4._PX);
hX_4.g.setP(this.btn2, hX_4._TOP,(parseInt(this.btn2.style.top,   10) - yOffset) + hX_4._PX);
}
}
var imgWidth, imgHeight=btnHeight-(intBtnBorderWidth*2);
imgHeight=(imgHeight > 3)	? imgHeight-2 : 1;
if (this.btngraphic == hX_4.R_IMG_HINKIES) {
imgHeight=Math.min(4, imgHeight);
imgWidth=imgHeight*2;
} else {
imgHeight=Math.min(12, imgHeight);
imgWidth=(imgHeight >= 6) ? imgHeight : imgHeight*2;
}
if (imgHeight > 1) {
hX_4.g.setP(this.img1, hX_4._BIMG, c.r.getURI (this.btngraphic));
hX_4.g.setP(this.img1, hX_4._BPOS, c.r.wellPosition(this.btngraphic, imgHeight-2, (bDisabled || bReadOnly) ? 1:0, (this.btn2) ? 1 : 0));
} else
 hX_4.g.setP(this.img1, hX_4._BIMG, c.r.getURI (hX_4.R_IMG_SPACER));
hX_4.g.setP(this.img1, hX_4._BREP, hX_4._NREP);
hX_4.g.setP(this.img1, hX_4._HT, imgHeight + hX_4._PX);
hX_4.g.setP(this.img1, hX_4._WD, imgWidth + hX_4._PX);
if (hX_4.brw.isNavOrMoz()) {
if (this.stateBtnBorderWidth > 1) hX_4.g.setP(this.img1, hX_4._MGNB, hX_4._1PX);
if (this.stateBtnBorderWidth >= 1) hX_4.g.setP(this.img1, hX_4._MGNL, ((this.btngraphic != hX_4.R_IMG_HINKIES)?(-this.stateBtnBorderWidth):(-(this.stateBtnBorderWidth-1))) + hX_4._PX);
}
if (this.btn2) {
hX_4.g.setP(this.img2, hX_4._HT, this.img1.style.height);
hX_4.g.setP(this.img2, hX_4._WD, this.img1.style.width);
hX_4.g.setP(this.img2, hX_4._BIMG, this.img1.style.backgroundImage);
hX_4.g.setP(this.img2, hX_4._BPOS, c.r.wellPosition(this.btngraphic, imgHeight-2, (bDisabled || bReadOnly) ? 1:0, 0));
hX_4.g.setP(this.img2, hX_4._BREP, this.img1.style.backgroundRepeat);
if (hX_4.brw.isNavOrMoz()) {
hX_4.g.setP(this.img2, hX_4._MGNB, this.img1.style.marginBottom);
hX_4.g.setP(this.img2, hX_4._MGNL, this.img1.style.marginLeft);
hX_4.g.setP(this.img2, hX_4._PADB, hX_4._1PX);
}
}
btnWidth=(hX_4.brw.isW3Cstd()) ? btnWidth : (this.btn1.offsetWidth+(interiorLine-1));
btnWidth=(btnWidth < 0) ? 10 : btnWidth;
if (this.HTMLcopied) {
if (hX_4.brw.isIE() || this.statePosition==hX_4._ABS) {
elemWidth=this.oSpn.offsetWidth;
} else if (hX_4.brw.isNavOrMoz() && this.stateResizable && this.dupe) {
this.oSpn.style.display=hX_4._NO;
this.dupe.style.display=hX_4._E;
elemWidth=this.dupe.offsetWidth;
this.dupe.style.display=hX_4._NO;
this.oSpn.style.display=hX_4._E;
} else {
elemWidth=this.oSpn.offsetWidth + this.stateBtnOffset;
}
} else {
prop=(hX_4.brw.isIE()) ? hX_4.g.getP(c.DOMobj, hX_4._WD) : c.DOMobj.style.width;
this.stateResizable=((prop.indexOf(hX_4._PCT)) < 0) ? null : prop;
elemWidth=c.DOMobj.offsetWidth;
}
var W3CadjustH=0, W3CadjustW=0, elemWidth2=elemWidth, bR, bL;
if (!hX_4.brw.isW3Cstd())
W3CadjustW=borderR=((outBtn) ? 0 : borderR);
else {
borderR=(outBtn && !hX_4.brw.isIE()) ? 0 : borderR;
elemHeight -= (borderT + borderB);
W3CadjustW=W3CadjustH=borderR;
if (hX_4.brw.isIE()) {
var pL=parseInt(hX_4.g.getP(c.DOMobj, hX_4._PADL), 10), s=hX_4.g.getP(c.DOMobj, hX_4._BRLSY);
bL=(s==hX_4._NO) ? 2 : borderL;
s=hX_4.g.getP(c.DOMobj, hX_4._BRRSY);
bR=(s==hX_4._NO) ? 2 : borderR;
if (this.stateResizable && !this.HTMLcopied) elemWidth2 -= ((this.stateResizable && !this.HTMLcopied)?(2*((bR + bL + pL + ((outBtn) ? 1 : ((bSpecialCase)?1:0))))) :((bR + bL + pL + ((outBtn) ? 1 : ((bSpecialCase)?1:0)))));
W3CadjustW=(outBtn) ? 0 : (bSpecialCase)?interiorLine:2;
}
}
elemWidth2=elemWidth2 - (btnWidth + 1);
elemWidth2=(elemWidth2 < 0) ? 0 : elemWidth2;
hX_4.g.setP(this.oSpn, hX_4._WD, (this.stateResizable) ? this.stateResizable : (elemWidth + hX_4._PX));
hX_4.g.setP(c.DOMobj, hX_4._WD, elemWidth2 + hX_4._PX);
hX_4.g.setP(c.DOMobj, hX_4._PADR, hX_4._1PX);
hX_4.g.setP(this.iSpn, hX_4._WD, (btnWidth + borderR + 1 - W3CadjustH) + hX_4._PX);
hX_4.g.setP(this.iSpn, hX_4._HT, elemHeight + hX_4._PX);
hX_4.g.setP(this.iSpn, hX_4._LFT, (c.DOMobj.offsetWidth - W3CadjustW) + hX_4._PX);
this.stateBtnOffset=btnWidth + borderR;
if (hX_4.brw.isNavOrMoz()) {
hX_4.g.setP(this.iSpn, hX_4._TOP, -(1+borderT) + hX_4._PX);
hX_4.g.setP(c.DOMobj, hX_4._MGNR, btnWidth + hX_4._PX);
this.stateBtnOffset+=(-borderR+1);
var elemtop=hX_4.g.getAbsPosTop(c.DOMobj), spantop=hX_4.g.getAbsPosTop(this.iSpn);
if (elemtop != spantop) hX_4.g.setP(this.iSpn, hX_4._TOP, (parseInt(this.iSpn.style.top, 10)) + (elemtop-spantop) + hX_4._PX);
} else
 hX_4.g.setP(this.iSpn, hX_4._TOP, hX_4._1PX);
this.saveBR=(isNowXP)?1:borderR; this.saveBL=(isNowXP)?1:borderL; this.saveBT=(isNowXP)?1:borderT; this.saveBB=(isNowXP)?1:borderB;
if (this.inpDiv) this.sizeColorArea ();
if (!this.HTMLcopied) {
if (this.stateResizable) {
this.stateElemOffset=elemWidth - c.DOMobj.offsetWidth;
hX_4.i.attachResizeMonitor(this.oSpn, this.dispatchButtonMonitorResize);
this.HTMLcopied=true;
if (hX_4.brw.isIE()) hX_4.i.fireEvent(this.oSpn.id, hX_4._onR);
}
hX_4.i.attachMonitor(c.DOMobj, this.dispatchMonitorBtn, "className", "class", hX_4._DSB, hX_4._RDO);
}
this.HTMLcopied=true;
return true;
}
HxG_4.prototype.JSFSubButton.prototype.sizeColorArea=function () {
var iW=this.c.DOMobj.offsetWidth - (this.saveBL+this.saveBR), iH=this.c.DOMobj.offsetHeight - (this.saveBT+this.saveBB);
hX_4.g.setP(this.inpDiv, hX_4._TOP,(this.c.DOMobj.offsetTop + this.saveBT)+hX_4._PX);
hX_4.g.setP(this.inpDiv, hX_4._LFT,(this.c.DOMobj.offsetLeft + this.saveBL)+hX_4._PX);
hX_4.g.setP(this.inpDiv, hX_4._WD, iW+hX_4._PX);
hX_4.g.setP(this.inpDiv, hX_4._HT, iH+hX_4._PX);
hX_4.g.setP(this.inpSubDiv, hX_4._TOP, hX_4._ZPX);
hX_4.g.setP(this.inpSubDiv, hX_4._LFT, hX_4._ZPX);
hX_4.g.setP(this.inpSubDiv, hX_4._WD, (iW-4)+hX_4._PX);
hX_4.g.setP(this.inpSubDiv, hX_4._HT,(iH-4)+hX_4._PX);
}
HxG_4.prototype.JSFSubButton.prototype.colorArea=function (backColor, focusOn) {
if (this.inpDiv) {
if (backColor) hX_4.g.setP(this.inpSubDiv, hX_4._BCOR, backColor);
if (focusOn!=null && focusOn) {
hX_4.g.setP(this.inpSubDiv, hX_4._BRCOR, "#000000");
hX_4.g.setP(this.inpSubDiv, hX_4._BRSTY, "dotted");
} else {
hX_4.g.setP(this.inpSubDiv, hX_4._BRCOR, hX_4.CLR_SHDW);
hX_4.g.setP(this.inpSubDiv, hX_4._BRSTY, hX_4._SLD);
}
}
}
HxG_4.prototype.JSFSubButton.prototype.depress=function (btn, downstate) {
if (!this.valid) return false;
var i=this.stateBtnBorderStyle, s=hX_4._E, c=hX_4._E, thisbtn=(btn == "btn1") ? this.btn1 : this.btn2;
if (downstate == true) {
if (i==hX_4._OUT || i==hX_4._E) s=hX_4._INS;
else if (i==hX_4._INS) s=hX_4._OUT;
else if (i=="groove")s="ridge";
else if (i=="ridge") s="groove";
else if (i==hX_4._SLD) s=hX_4._SLD;
c=hX_4.CLR_SHDW;
} else {
s=(this.stateBtnBorderStyle == hX_4._E) ? hX_4._OUT : this.stateBtnBorderStyle;
c=this.stateBtnBackColor;
}
hX_4.g.setP(thisbtn, hX_4._BRSTY, s);
hX_4.g.setP(thisbtn, hX_4._BCOR, c);
return true;
}
HxG_4.prototype.JSFSubButton.prototype.dispatchBtnComponent=function(evt) {
evt=(evt) ? evt : ((event) ? event: null);
if (evt && this) {
var src=((this.nodeType == hX_4.ELEMENT_NODE || this.nodeType == hX_4.DOCUMENT_NODE) ? this : this.parentNode);
if (src) {
var sibling, obj, skip=false, item=hX_4._E;
if (src.tagName == hX_4._IMG)
src=src.parentNode;
if (src.tagName==hX_4._BTN) {
sibling=src.previousSibling;
src=src.parentNode;
if (src && src.tagName == hX_4._SPN) {
item=(sibling && sibling.tagName == hX_4._BTN)?"btn2":"btn1";
src=src.previousSibling;
}
if (src && src.id && src.tagName==hX_4._INP) {
if (evt.type==hX_4._evMCC)
skip=true;
else if (evt.type==hX_4._evMC || evt.type==hX_4._evMD || evt.type==hX_4._evMU)
skip=evt.button > 1;
if (!skip) {
obj=hX_4.getComponentById(src.id);
if (obj) return (obj.dispatchComponent (item, evt, evt.type, evt.keyCode));
}
}
}
}
}
return true;
}
HxG_4.prototype.JSFSubButton.prototype.dispatchButtonMonitorResize=function(evt) {
evt=(evt) ? evt : ((event) ? event: null);
if (evt && this) {
var src=((this.nodeType == hX_4.ELEMENT_NODE || this.nodeType == hX_4.DOCUMENT_NODE) ? this : this.parentNode);
if (src) {
if (!hX_4.brw.isIE()) {
hX_4.redraw();
} else if (src.tagName == hX_4._SPN) {
var inputfld=src.firstChild;
if (inputfld && inputfld.tagName == hX_4._INP) {
var obj=hX_4.getComponentById(inputfld.id);
if (obj) {
obj.redraw(true);
return false;
}
}
}
}
}
return true;
}
HxG_4.prototype.JSFSubButton.prototype.dispatchMonitorBtn=function(obj, evt, args) {
var c=hX_4.getComponentById(obj);
if (hX_4.brw.isIE()) {
c.redraw();
} else {
hX_4.i.deferNSRedraw.push(obj);
setTimeout(hX_4.i.NSRedraw, 10);
}
return true;
}
HxG_4.prototype.DateTimeConverter=function () {
this.type=hX_4.CVT_datetime;
this.ICU4J=false;
this.nStrict=hX_4.DTFMT_DEFAULTSTRICT;
this.sFormat=hX_4.DTFMT_DATE0;
this.sFormatTokenized=null;
this.nLiteralCnt=this.nTokenCnt=0;
this.sLiterals=[];
this.sTokens=[];
this.bHasDate=this.bHasTime=false;
this.FDOW=hX_4.DTFMT_DEFAULTFIRSTDAYWEEK;
this.digitFirst=this.FMTChars=this.FMTDateChars=this.FMTTimeChars=null;
this.FMTBaseChars="aDdEFGHhKkMmSsWwyz";
this.FMTBaseDateChars="DdEFGMWwy";
this.FMTBaseTimeChars="aHhKkmSsz";
this.FMTICU4JChars="gAeYZ";
this.FMTICU4JDateChars="geY";
this.FMTICU4JTimeChars="AZ";
this._8chars="gA";
this._4chars="gAyYGME";
this._3chars="gAyYGMEDS";
this._2chars="gAyYGMEDSdhHmskKw";
this.FMTSEPChars="-_ .,;:|()<>/\\";
this.SEPChars=this.FMTSEPChars;
this.bIsGregorian=true;
this.bIsHijri=this.bIsHebrew=this.bIsChristianEra=this.bIsBuddhistEra=this.bIsJapaneseEra=false;
this.sEpoch=hX_4._E;
this.nEpoch=null;
this.descLbEpoch=this.descYrEpoch=this.descDtEpoch=null;
this.bShowEpoch=false;
this.isShortYr=this.abbEpochLength=this.fulEpochLength=null;
this.minEpoch=1;
this.TZSeparator=":";
this.sAM=hX_4.STR_AM_SUFFIX;
this.sPM=hX_4.STR_PM_SUFFIX;
this.base2DigitSpan=80;
this.DF_MaxLength=null;
this.xDigits=this.zeroDigit=null;
this.msgFail=this.intMsgFail=hX_4._E;
this.maskFormat=this.maskFormatDigits=this.maskFormatLast=this.maskFormatFirst=this.simpleFormat=this.simpleConverter=null;
this.isSimple=false;
this.markers=hX_4._LB + hX_4._QM;
this.promptChar=hX_4._E;
this._l="#"; this._ll="##"; this._lll="###"; this._llll="####";
this._MIN="-";
this._PLS="+";
this._AD=null;
hX_4.c.strInit();
this.attributeTable=[];
this.attributeTable ['strict']=['nStrict',		hX_4.ARG_TO_NUM,	false,	0,	2];
this.attributeTable ['format']=['sFormat',		hX_4.ARG_TO_NAS,	false,	null,	null];
this.attributeTable ['base-2digit-span']=['base2DigitSpan',hX_4.ARG_TO_NUM,	false,	0,	99];
this.attributeTable ['epoch']=['sEpoch',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['icu4j']=['ICU4J', 		hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['first-day-of-week']=['FDOW',			hX_4.ARG_TO_NUM,	false,	0,		6];
this.attributeTable ['digits']=['digitFirst',	hX_4.ARG_TO_NUM,	false,	0,	999999];
this.attributeTable ['am']=['sAM',			hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['pm']=['sPM',			hX_4.ARG_TO_NAN,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.DateTimeConverter.prototype.setAttribute=function(a) {
var i,j,k;
hX_4.parseArg (this.attributeTable, this, a);
this.FMTChars=this.FMTBaseChars + ((this.ICU4J)?this.FMTICU4JChars:hX_4._E);
this.FMTDateChars=this.FMTBaseDateChars + ((this.ICU4J)?this.FMTICU4JDateChars:hX_4._E);
this.FMTTimeChars=this.FMTBaseTimeChars + ((this.ICU4J)?this.FMTICU4JTimeChars:hX_4._E);
this.parseDigits();
this.parseFormatString();
this.sEpoch=(this.sEpoch==null)?hX_4._E:this.sEpoch; this.nEpoch=0;
for (i=0; i < hX_4.DATE_EPOCH_IDS.length;  i++) {
if (hX_4.DATE_EPOCH_IDS[i] == this.sEpoch) {
this.nEpoch=i;
break;
}
}
this.bIsGregorian=this.bIsHijiri=this.bIsHebrew=this.bIsChristianEra=this.bIsBuddhistEra=this.bIsJapaneseEra=false;
this.bIsChristianEra=(this.nEpoch <= 0);
this.bIsHijiri=(this.nEpoch == 1);
this.bIsHebrew=(this.nEpoch == 2);
this.bIsBuddhistEra=(this.nEpoch == 3);
this.bIsJapaneseEra=(this.nEpoch == 4);
this.bIsGregorian=(this.nEpoch == 0 || this.nEpoch >= 3);
this.bShowEpoch=(this.bIsJapaneseEra || this.sFormatTokenized.indexOf("%G")>=0);
this.descLbEpoch=hX_4.STRA_DATE_EPOCHS[this.nEpoch];
this.descYrEpoch=[];
this.descDtEpoch=[];
this.isShortYr=(this.descLbEpoch.length > 2);
this.setCalendar();
this.abbEpochLength=this.fulEpochLength=0; this.minEpoch=1;
this._AD=this.abbEpochLength,this.descLbEpoch[1][1];
for (i=0; i < this.descLbEpoch.length; i++) {
this.fulEpochLength=Math.max(this.fulEpochLength,this.descLbEpoch[i][0].length);
this.abbEpochLength=Math.max(this.abbEpochLength,this.descLbEpoch[i][1].length);
this.minEpoch=(i<=0)?this.minEpoch:((this.descLbEpoch[i-1][1].charAt(0)==this.descLbEpoch[i][1].charAt(0))?2:1);
if (this.bIsChristianEra) {
this.descYrEpoch.push(0);
this.descDtEpoch.push(0);
} else {
j=this.constantToValue(hX_4.DATE_EPOCH_YEARS[this.nEpoch][i]);
this.descYrEpoch.push((j!=null)?j.getFullYear():0);
this.descDtEpoch.push(j);
}
}
if (this.simpleFormat) this.genAssistMasks();
return true;
}
HxG_4.prototype.DateTimeConverter.prototype.epochIndex=function () {
return ((this.bIsHijiri)?1:((this.bIsHebrew)?2:0));
}
HxG_4.prototype.DateTimeConverter.prototype.FormatToken=function (token, typ) {
this.type=typ; this.token=token;
}
HxG_4.prototype.DateTimeConverter.prototype.parseDigits=function () {
this.xDigits=null; this.zeroDigit=hX_4._Z;
if (this.digitFirst != null) {
this.xDigits=String.fromCharCode(this.digitFirst, this.digitFirst+1, this.digitFirst+2, this.digitFirst+3, this.digitFirst+4, this.digitFirst+5, this.digitFirst+6, this.digitFirst+7, this.digitFirst+8, this.digitFirst+9);
this.zeroDigit=this.xDigits.charAt(0);
}
}
HxG_4.prototype.DateTimeConverter.prototype.parseFormatString=function () {
var fmt=this.sFormat;
this.sFormatTokenized=hX_4._E;
this.nLiteralCnt=this.nTokenCnt=this.DF_MaxLength=0;
var index, i, xchar, nchar, last=hX_4._E, lastlen=1, q=false, noT=false, len=fmt.length;
for (index=0; index < len; index++) {
xchar=fmt.charAt(index);
if (!q && hX_4.isChar(xchar, this.FMTChars)) {
if (xchar==last) {
noT=false;
if (lastlen >= 8) noT=true;
else if (lastlen >= 4 && !hX_4.isChar(xchar, this._8chars)) noT=true;
else if (lastlen >= 3 && !hX_4.isChar(xchar, this._4chars)) noT=true;
else if (lastlen >= 2 && !hX_4.isChar(xchar, this._3chars)) noT=true;
else if (lastlen >= 1 && !hX_4.isChar(xchar, this._2chars)) noT=true;
if (!noT) this.sFormatTokenized=this.sFormatTokenized + xchar;
lastlen++;
} else {
this.sFormatTokenized=this.sFormatTokenized + hX_4._PCT + xchar;
lastlen=1;
}
last=xchar;
this.bHasDate=(this.bHasDate) ? this.bHasDate : hX_4.isChar(xchar, this.FMTDateChars);
this.bHasTime=(this.bHasTime) ? this.bHasTime : hX_4.isChar(xchar, this.FMTTimeChars);
} else {
if (xchar == hX_4._SQT) {
nchar=fmt.charAt(index+1);
if (nchar == hX_4._SQT) {
index++;
} else if (q) {
xchar=hX_4._E;
q=false;
} else {
xchar=nchar;
q=true;
index++;
}
}
if (last != hX_4._UPC) {
this.sFormatTokenized=this.sFormatTokenized + hX_4._UPC + this.nLiteralCnt;
this.sLiterals[this.nLiteralCnt]=hX_4._E;
this.nLiteralCnt++;
}
this.sLiterals[this.nLiteralCnt-1]=this.sLiterals[this.nLiteralCnt-1] + xchar;
last=hX_4._UPC;
}
}
fmt=this.sFormatTokenized;
var token, next, nextp, nextl, c, l;
while (fmt.length > 0) {
xchar=fmt.charAt(0);
fmt=fmt.substr(1);
nextp=fmt.indexOf(hX_4._PCT);
nextl=fmt.indexOf(hX_4._UPC);
next=(nextp < 0) ? nextl : ((nextl < 0) ? nextp : Math.min(nextp,nextl));
if (next >= 0) {
token=fmt.substr(0,next);
fmt=fmt.substr(next);
} else {
token=fmt;
fmt=hX_4._E;
}
if (xchar==hX_4._PCT) {
this.sTokens[this.nTokenCnt]=new this.FormatToken(token, 0);
this.nTokenCnt++;
} else {
index=parseInt(token, 10);
token=this.sLiterals[index];
for (i=1; i < this.FMTSEPChars.length; i++)
token=hX_4.replaceAll(token, this.FMTSEPChars.charAt(i), this.FMTSEPChars.charAt(0));
token=hX_4.replaceAll(token,  this.FMTSEPChars.charAt(0)+ this.FMTSEPChars.charAt(0),  this.FMTSEPChars.charAt(0));
this.sTokens[this.nTokenCnt]=new this.FormatToken(this.sLiterals[index], (token == this.FMTSEPChars.charAt(0)) ? 2 : 1);
this.nTokenCnt++;
}
}
for (i=0; i < this.nTokenCnt; i++) {
if (this.sTokens[i].type == 0) {
l=this.sTokens[i].token.length;
switch (this.sTokens[i].token.charAt(0)) {
case hX_4._uF:  case hX_4._uW:  case hX_4._lE:
this.DF_MaxLength+=1;
break;
case hX_4._uD: case hX_4._uS:
this.DF_MaxLength+=3;
break;
case hX_4._uZ:
this.DF_MaxLength+=5;
break;
case hX_4._uA: case hX_4._lG:
this.DF_MaxLength+=8;
break;
case hX_4._lZ:
this.DF_MaxLength+=10;
break;
case hX_4._uG:
this.DF_MaxLength+=((l<=3)?this.abbEpochLength:this.fulEpochLength);
break;
case hX_4._lY: case hX_4._uY:
this.DF_MaxLength+=((this.bIsJapaneseEra)?l:((l==2)?2:4));
break;
case hX_4._uE:
this.DF_MaxLength+=((l > 3) ? hX_4.c.MAX_STR_DATE_DAYS[this.epochIndex()] : hX_4.c.MAX_STR_DATE_SHDAYS[this.epochIndex()]);
break;
case hX_4._uM:
this.DF_MaxLength+=((l < 3)?2:((l > 3) ? hX_4.c.MAX_STR_DATE_MONTHS[this.epochIndex()] : hX_4.c.MAX_STR_DATE_SHMONTHS[this.epochIndex()]));
break;
case hX_4._lA:
this.DF_MaxLength+=Math.max(this.sAM.length, this.sPM.length);
break;
default:
this.DF_MaxLength+=2;
break;
}
} else this.DF_MaxLength+=this.sTokens[i].token.length;
}
}
HxG_4.prototype.DateTimeConverter.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.DateTimeConverter.prototype.lastError=function () {
return ((this.msgFail && this.msgFail.length > 0) ? this.msgFail : null);
}
HxG_4.prototype.DateTimeConverter.prototype.stringToValue=function (iDate) {
var r=this.stringToValueBase(iDate);
return ((r) ? r.value : null);
}
HxG_4.prototype.DateTimeConverter.prototype.stringToValueBase=function (iDate, tokenStop) {
this.intMsgFail=this.msgFail=hX_4._E;
var sDate=iDate, args=[iDate];
if (iDate == null || !hX_4.isString(iDate)) {
this.msgFail=hX_4.ERR_empty;
return null;
}
while (sDate.length > 0 && sDate.charAt(sDate.length-1) == hX_4._B)
sDate=sDate.substr(0, sDate.length-1);
if (sDate.length == 0)
return null;
this.setCalendar();
var tok=this.sTokens, tokI=0, curdate=new Date(), o=hX_4.cal.dateToCalendar(curdate);
var intMonth=o.month+1, intDay=o.date, intYear=o.year, intSvDay=o.date, intJDay=0;
var intHour=12, intMin=0, intSec=0, intMS=0, intMSDay=0, ampm=hX_4._E;
var ADtoCal=false, iEpoch=null, zISO=false, zOffset=null, bShortYear=false, bShortYearSpec=false, bShortHour=false, bKampm=false, bJulianDate=false, bNormalDate=false;
var tokenC=((tokenStop != null) ? tokenStop : this.nTokenCnt), token, pose, i, j, r, n, ch;
while (this.msgFail.length == 0 && sDate.length > 0 && tokI < tokenC) {
token=tok[tokI].token;
this.SEPChars=this.FMTSEPChars;
if (tokI+1<tokenC && tok[tokI+1].type < 1 && (tok[tokI+1].token==hX_4._lZ || tok[tokI+1].token==hX_4._uZ))
this.SEPChars=this.FMTSEPChars.substr(1);
if (tok[tokI].type == hX_4._lX) {
} else if (tok[tokI].type >= 1) {
if (this.nStrict > 1 || tok[tokI].type == 1) {
if (token == sDate.substr(0,token.length)) {
sDate=sDate.substr(token.length);
} else {
if (this.nStrict <= 1) sDate=this.skipSeparators(sDate);
else {
this.msgFail=hX_4.ERR_datetime_parse_fail;
this.intMsgFail=hX_4.INTERR_Parse_Literal + token;
break;
}
}
} else sDate=this.skipSeparators(sDate);
} else {
switch (token) {
case hX_4._lD:  case hX_4._l2D:
case hX_4._lH:	case hX_4._l2H:
case hX_4._uH:  case hX_4._u2H:
case hX_4._lK:  case hX_4._l2K:
case hX_4._uK:  case hX_4._u2K:
case hX_4._lM:  case hX_4._l2M:
case hX_4._lS:  case hX_4._l2S:
case hX_4._lW:  case hX_4._l2W:
case hX_4._uF:  case hX_4._uW:  case hX_4._lE:
if (this.nStrict <= 1)
if (this.skipIfMissing(sDate, true)) break;
n=this.matchDigits (sDate, 2, false);
if (n.fail) {
this.msgFail=hX_4.ERR_datetime_parse_fail;
this.intMsgFail=hX_4.INTERR_Parse_TwoDig + token;
break;
}
sDate=n.s;
switch (tok[tokI].token) {
case hX_4._lD:  case hX_4._l2D:
intDay=n.n;
bNormalDate=true;
break;
case hX_4._lH:  case hX_4._l2H:
intHour=n.n;
bShortHour=true;
break;
case hX_4._uH:  case hX_4._u2H:
intHour=n.n;
break;
case hX_4._lK:  case hX_4._l2K:
intHour=n.n - 1;
break;
case hX_4._uK:  case hX_4._u2K:
intHour=n.n + 1;
bShortHour=true;
bKampm=true;
break;
case hX_4._lM:  case hX_4._l2M:
intMin=n.n; break;
case hX_4._lS:  case hX_4._l2S:
intSec=n.n; break;
case hX_4._uF:
case hX_4._lW:
case hX_4._uW:
case hX_4._l2W:  case hX_4._lE:
default:
break;
}
break;
case hX_4._uS:  case hX_4._u3S:  case hX_4._u2S:
case hX_4._uD:  case hX_4._u3D:  case hX_4._u2D:
if (this.nStrict <= 1)
if (this.skipIfMissing(sDate, true)) break;
n=this.matchDigits (sDate, 3, false);
if (n.fail) {
this.msgFail=hX_4.ERR_datetime_parse_fail;
this.intMsgFail=hX_4.INTERR_Parse_TwoDig + token;
break;
}
sDate=n.s;
if (token.charAt(0) == hX_4._uD) {
bJulianDate=true;
intJDay=n.n;
} else {
intMS=n.n;
}
break;
case hX_4._lY:  case hX_4._l2Y:  case hX_4._l3Y:  case hX_4._l4Y:
case hX_4._uY:  case hX_4._u2Y:  case hX_4._u3Y:  case hX_4._u4Y:
n=this.matchDigits (sDate, 4, false);
if (n.fail) {
this.msgFail=hX_4.ERR_datetime_parse_fail;
this.intMsgFail=hX_4.INTERR_Parse_TwoDig + token;
break;
}
if (token.charAt(0) != hX_4._uY) {
sDate=n.s;
intYear=n.n;
if (n.cnt <= 2) bShortYear=true;
bShortYearSpec=(token==hX_4._lY || token==hX_4._l2Y || token==hX_4._l3Y);
}
break;
case hX_4._uA:  case hX_4._u2A:  case hX_4._u3A:  case hX_4._u4A:  case hX_4._u5A:  case hX_4._u6A:  case hX_4._u7A:  case hX_4._u8A:
case hX_4._lG:  case hX_4._l2G:  case hX_4._l3G:  case hX_4._l4G:  case hX_4._l5G:  case hX_4._l6G:  case hX_4._l7G:  case hX_4._l8G:
if (this.nStrict <= 1)
if (this.skipIfMissing(sDate, true)) break;
n=this.matchDigits (sDate, 8, false);
if (n.fail) {
this.msgFail=hX_4.ERR_datetime_parse_fail;
this.intMsgFail=hX_4.INTERR_Parse_TwoDig + token;
break;
}
if (token.charAt(0)==hX_4._uA) {
sDate=n.s;
intMSDay=n.n;
}
break;
case hX_4._uG:  case hX_4._u2G:
case hX_4._u3G: case hX_4._u4G:
if (this.nStrict <= 1)
if (this.skipIfMissing(sDate)) break;
r=false;
if (sDate.substr(0,2)==this._AD) ADtoCal=true;
for (i=0; i < this.descLbEpoch.length; i++) {
pose=((token.length <= 3) ? this.descLbEpoch[i][1] : this.descLbEpoch[i][0]).toUpperCase();
if ((sDate.substr(0, pose.length)).toUpperCase()==pose) {
sDate=sDate.substr(pose.length);
iEpoch=i;
r=true;
break;
}
pose=this.descLbEpoch[i][((token.length<=3)?1:0)].toUpperCase();
if (this.nStrict <= 1 && sDate.charAt(0).toUpperCase()==pose.charAt(0)) {
n=1;
while (n<sDate.length && n<pose.length && sDate.charAt(n).toUpperCase()==pose.charAt(n)) n++;
pose=pose.substr(0,n);
for (j=0; j<this.descLbEpoch.length; j++) {
if (j!=i && pose==this.descLbEpoch[j][((token.length <= 3)?1:0)].substr(0,n).toUpperCase()) j=99;
}
if (j<99) {
sDate=sDate.substr(n); j=0; ch=sDate.charAt(j);
while (j < sDate.length && ((ch==hX_4._P) || !this.matchDigit(ch) && !hX_4.isChar(ch,this.SEPChars))) {
j++; ch=sDate.charAt(j);
}
sDate=sDate.substr(j);
iEpoch=i;
r=true;
break;
}
}
}
if (!r) this.msgFail=hX_4.ERR_epoch_name;
break;
case hX_4._uM:  case hX_4._u2M:  case hX_4._u3M:  case hX_4._u4M:
if (token.length <= 2 || this.nStrict <= 1) {
n=this.matchDigits (sDate, 2, false);
if (n.fail && this.nStrict > 1) {
this.msgFail=hX_4.ERR_datetime_parse_fail;
this.intMsgFail=hX_4.INTERR_Parse_TwoDig + token;
break;
} else if (!n.fail) {
sDate=n.s;
intMonth=n.n;
break;
}
}
r=false;
for (i=0; i < hX_4.cal.monthsInYear(); i++) {
pose=((token.length > 3 || this.nStrict <= 1)?hX_4.STRA_DATE_MONTHS[this.epochIndex()][i]:hX_4.STRA_DATE_SHMONTHS[this.epochIndex()][i]).toUpperCase();
if (sDate.substr(0, pose.length).toUpperCase() == pose) {
sDate=sDate.substr(pose.length);
intMonth=i+1;
r=true;
break;
}
pose=hX_4.STRA_DATE_MONTHS[this.epochIndex()][i].toUpperCase();
if (this.nStrict <= 1 && sDate.charAt(0).toUpperCase()==pose.charAt(0)) {
n=1;
while (n<sDate.length && n<pose.length && sDate.charAt(n).toUpperCase()==pose.charAt(n)) n++;
pose=pose.substr(0,n);
for (j=0; j<hX_4.cal.monthsInYear(); j++)
if (j!=i && pose==hX_4.STRA_DATE_MONTHS[this.epochIndex()][j].substr(0,n).toUpperCase()) j=99;
if (j<99) {
sDate=sDate.substr(n); j=0; ch=sDate.charAt(j);
while (j < sDate.length && (!this.matchDigit(ch) && !hX_4.isChar(ch,this.SEPChars))) {
j++; ch=sDate.charAt(j);
}
sDate=sDate.substr(j);
intMonth=i+1;
r=true;
}
}
}
if (!r)	this.msgFail=hX_4.ERR_month_name;
break;
case hX_4._uE:  case hX_4._u2E:
case hX_4._u3E: case hX_4._u4E:
if (this.nStrict <= 1)
if (this.skipIfMissing(sDate)) break;
r=false;
for (i=0; i<7; i++) {
pose=((token.length <= 3)?hX_4.STRA_DATE_SHDAYS[this.epochIndex()][i]:hX_4.STRA_DATE_DAYS[this.epochIndex()][i]).toUpperCase();
if (sDate.substr(0, pose.length).toUpperCase() == pose) {
sDate=sDate.substr(pose.length);
r=true;
break;
}
}
if (!r && this.nStrict <= 1) {
sDate=(token.length <= 3)?(this.skipToSeparator(sDate,(this.nStrict==0)?-1:hX_4.c.MAX_STR_DATE_SHDAYS[this.epochIndex()])):(this.skipToSeparator(sDate,-1));
r=true;
}
if (!r) this.msgFail=hX_4.ERR_day_name;
break;
case hX_4._lA:
if (this.nStrict <= 1)
if (this.skipIfMissing(sDate)) break;
if (sDate.length >= 2 && sDate.substr(0,2).toUpperCase() == this.sAM.toUpperCase()) {
ampm=this.sAM;
sDate=sDate.substr(2);
} else if (sDate.length >= 2 && sDate.substr(0,2).toUpperCase() == this.sPM.toUpperCase()) {
ampm=this.sPM;
sDate=sDate.substr(2);
} else {
this.msgFail=hX_4.ERR_ampm_name;
}
break;
case hX_4._lZ: case hX_4._uZ:
this.SEPChars=this.FMTSEPChars.substr(1);
if (this.nStrict <= 1)
if (this.skipIfMissing(sDate)) break;
r=false;
zISO=(token.charAt(0)==hX_4._uZ);
if (!zISO || this.nStrict <= 1) {
for (i=0; i < hX_4.STR_TIMEZONES.length; i++) {
if (hX_4.STR_TIMEZONES[i][1] != null && hX_4.STR_TIMEZONES[i][1].length > 0) {
pose=hX_4.STR_TIMEZONES[i][1].toUpperCase();
if (sDate.substr(0, pose.length).toUpperCase() == pose) {
zOffset=this.readTimeZoneOffset(hX_4.STR_TIMEZONES[i][0]);
sDate=sDate.substr(pose.length);
r=true;
break;
}
pose=hX_4.STR_TIMEZONES[i][3].toUpperCase();
if (sDate.substr(0, pose.length).toUpperCase() == pose) {
zOffset=this.readTimeZoneOffset(hX_4.STR_TIMEZONES[i][2]);
sDate=sDate.substr(pose.length);
r=true;
break;
}
}
}
}
if (zISO && !r) {
pose=sDate.charAt(0);
r=zISO=(this.matchDigit(pose) || pose == this._PLS || pose == this._MIN);
} else zISO=false;
if (r && (i==0 || zISO)) {
var sign=+1;
if (sDate.charAt(0) == this._PLS)
sDate=sDate.substr(1);
else if (sDate.charAt(0) == this._MIN) {
sign=-1;
sDate=sDate.substr(1);
}
n=this.matchDigits (sDate, 2, (this.nStrict>1));
r=!n.fail;
if (r) {
sDate=n.s;
if (n.n < 0 || n.n > 13) r=false;
else zOffset=sign * (n.n * 60);
if (r) {
if (sDate.charAt(0) == this.TZSeparator) sDate=sDate.substr(1);
n=this.matchDigits (sDate, 2, (this.nStrict>1));
r=!n.fail;
if (!r && this.nStrict <= 1) {
r=true;
n.s=0;
}
if (r) {
sDate=n.s;
if (n.n < 0 || n.n > 59)
r=false;
else
 zOffset=sign * (Math.abs(zOffset) + n.n);
}
}
}
}
if (!r) this.msgFail=hX_4.ERR_tzone_name;
break;
default:
break;
}
}
tokI++;
}
if (this.msgFail.length == 0 && this.nStrict > 1 && (tokI != tokenC || sDate.length > 0)) {
this.msgFail=hX_4.ERR_datetime_parse_fail;
this.intMsgFail=hX_4.INTERR_Parse_end + sDate;
}
if (ADtoCal) hX_4.cal.setCalendar(true, false, false);
if (this.msgFail.length == 0 && iEpoch!=null && this.isShortYr && iEpoch<this.descLbEpoch.length-2) {
if (this.nStrict > 1 && intYear>(1+this.descYrEpoch[iEpoch+1]-this.descYrEpoch[iEpoch]))
this.msgFail=hX_4.ERR_epoch_range;
}
if (this.msgFail.length == 0) {
if (bShortYearSpec && !this.isShortYr && bShortYear)
intYear=hX_4.cal.twoYearToFourYear(intYear, curdate, this.getBaseYear(curdate));
if (this.bIsChristianEra)
intYear=(iEpoch==0)?(-intYear):intYear;
else if (this.bIsGregorian) {
iEpoch=(iEpoch!=null) ? iEpoch : this.descLbEpoch.length-1;
intYear+=this.descYrEpoch[iEpoch]-1;
}
if (intYear == 0 && !this.bIsChristianEra)
this.msgFail=hX_4.ERR_epoch_range;
else {
if (bJulianDate && !bNormalDate) {
o=hX_4.cal.julianToMonthDay(intJDay, intYear);
intMonth=o.month+1;
intDay=o.date;
}
if (!bJulianDate && !bNormalDate) {
intDay=hX_4.cal.daysInMonth(intMonth-1,intYear);
if (zOffset) intDay=Math.min(intSvDay,intDay);
}
if (this.nStrict == 0) {
if(intMonth > hX_4.cal.monthsInYear(intYear) && intDay > 0 && intDay <= hX_4.cal.monthsInYear(intYear)) {
i=intMonth;
intMonth=intDay;
intDay=i;
}
}
}
}
if (this.msgFail.length == 0 && (intMonth < 1 || intMonth > hX_4.cal.monthsInYear(intYear)))
this.msgFail=hX_4.ERR_month_range;
if (this.msgFail.length == 0 && (intDay < 1 || intDay > hX_4.cal.minDaysInMonth())) {
i=hX_4.cal.daysInMonth(intMonth-1, intYear);
if (intDay < 1 || intDay > i) {
this.msgFail=hX_4.ERR_month_rangelimit;
args[1]= hX_4.STRA_DATE_MONTHS[this.epochIndex()][intMonth-1];
args[2]= i;
}
}
if (this.msgFail.length == 0) {
if (!bShortHour) {
if (this.nStrict <= 1 && ampm.length > 0) {
if (ampm == this.sPM && intHour <= 12)
intHour+=12;
}
if (intHour < 0 || intHour > 23) {
this.msgFail=hX_4.ERR_hour_range_long;
}
} else {
if (this.nStrict <= 1) {
if (intHour > 12) {
ampm=this.sPM;
intHour -= 12;
}
if (ampm.length == 0)
ampm=(intHour >= 6 && intHour <= 11) ? this.sAM : this.sPM;
}
if (intHour < 1 || intHour > 12)
this.msgFail=hX_4.ERR_hour_range_short;
if (bKampm) {
if (ampm == this.sPM && intHour != 0) {
intHour+=12;
}
else if (ampm == this.sAM && intHour == 0)
intHour=0;
} else {
if (ampm == this.sPM && intHour != 12)
intHour+=12;
else if (ampm == this.sAM && intHour == 12)
intHour=0;
}
}
}
if (this.msgFail.length == 0 && (intMin < 0 || intMin > 59))
this.msgFail=hX_4.ERR_minute_range;
if (this.msgFail.length == 0 && (intSec < 0 || intSec > 59))
this.msgFail=hX_4.ERR_second_range;
if (this.msgFail.length > 0) {
this.msgFail=hX_4.NLSFormatMsg (this.msgFail, args);
return null;
}
r=hX_4.cal.calendarToDate(intYear, intMonth-1, intDay, intHour, intMin, intSec, intMS);
if (zOffset && (zOffset !=  -(r.getTimezoneOffset()))) {
intMin=r.getMinutes() - (zOffset + r.getTimezoneOffset());
r=hX_4.cal.calendarToDate(intYear, intMonth-1, intDay, intHour, intMin, intSec, intMS);
}
return {value:r, token:(tokI > 0)?tokI-1:0, pos:(iDate.length-sDate.length)};
}
HxG_4.prototype.DateTimeConverter.prototype.stringToLastToken=function (iDate, pos) {
var r, token=0, all="hHkKms";
if (iDate.length <= 0 || pos == 0) {
while (token < this.sTokens.length && !(this.sTokens[token].type == 0 && hX_4.isChar(this.sTokens[token].token.charAt(0),all)))
token++;
} else {
r=this.stringToValueBase(iDate.substr(0,pos));
if (r) {
token=(r.token < this.sTokens.length) ? r.token : this.sTokens.length-1;
if (this.sTokens[token].type != 0) {
while (token < this.sTokens.length && this.sTokens[token].type != 0)
token++;
}
token=(token >= this.sTokens.length) ? this.sTokens.length-1:token;
while (token >= 0 && !(this.sTokens[token].type == 0 && hX_4.isChar(this.sTokens[token].token.charAt(0),all)))
token--;
}
}
if (token < 0 || token >= this.sTokens.length)
return hX_4._lH;
else if (this.sTokens[token].token.charAt(0) == hX_4._lM)
return hX_4._lM;
else if (this.sTokens[token].token.charAt(0) == hX_4._lS)
return hX_4._lS;
else
 return hX_4._lH;
}
HxG_4.prototype.DateTimeConverter.prototype.posFromLastToken=function (iDate, token) {
if (iDate.length==0 || !token || token.length!=1) return 0;
var r, i, hit=false, test=(token==hX_4._lS) ? hX_4._lS : ((token==hX_4._lM) ? hX_4._lM : "hHkK");
for (i=0; i < this.sTokens.length && !hit; i++) {
if (this.sTokens[i].type==0 && hX_4.isChar(this.sTokens[i].token.charAt(0),test))
hit=true;
}
if (!hit) return 0;
i=(i>0)?i-1:0;
r=this.stringToValueBase(iDate, i);
return ((r) ? r.pos : 0);
}
HxG_4.prototype.DateTimeConverter.prototype.getMaxLength=function () {
return this.DF_MaxLength;
}
HxG_4.prototype.DateTimeConverter.prototype.isMarker=function (c) {
return (this.markers.indexOf(c) >= 0);
}
HxG_4.prototype.DateTimeConverter.prototype.genAssistMasks=function(promptC) {
var m=hX_4._E, p=hX_4._E, d=hX_4._E, sep=true, i,t,x,y,noT;
if (promptC) this.promptChar=promptC;
for (i=0; i < this.nTokenCnt; i++) {
t=this.sTokens[i].token;
if (this.sTokens[i].type == 0) {
sep=true;
switch (t.charAt(0)) {
case hX_4._lY:
if (this.isShortYr) {
m=m + hX_4._l2Y;
p=p + this._ll;
d=d + hX_4._l2Y;
} else {
m=m + hX_4._l4Y;
p=p + this._llll;
d=d + hX_4._l4Y;
}
break;
case hX_4._uG:
m=m + hX_4._uG;
d=d + hX_4.padR(hX_4._uG, this.abbEpochLength, hX_4._uG);
if (this.isShortYr || this.bIsChristianEra)
p=p + ((this.minEpoch==2)?hX_4.padR(this._l+this._l,this.abbEpochLength,hX_4._B):hX_4.padR(this._l,this.abbEpochLength,hX_4._B));
else
 p=p + this.descLbEpoch[1][1];
noT=true;
break;
case hX_4._uM:
m=m + hX_4._u2M;
p=p + this._ll;
d=d + hX_4._l2M;
break;
case hX_4._lD:
m=m + hX_4._l2D;
p=p + this._ll;
d=d + hX_4._l2D;
break;
case hX_4._lH: case hX_4._uH:
m=m + hX_4._u2H;
p=p + this._ll;
d=d + hX_4._l2H;
break;
case hX_4._lM:
m=m + hX_4._l2M;
p=p + this._ll;
d=d + hX_4._u2A;
break;
case hX_4._lS:
m=m + hX_4._l2S;
p=p + this._ll;
d=d + hX_4._l2S;
break;
default:
sep=false;
break;
}
} else {
if (t.length > 0) {
m=m + ((sep) ? (hX_4._SQT+t+hX_4._SQT) : hX_4._E);
p=p + ((sep) ? t : hX_4._E);
d=d + ((sep) ? t : hX_4._E);
}
}
}
this.maskFormat=(noT)?hX_4.trimL(p):hX_4.Trim(p);
this.maskFormatDigits=hX_4.Trim(d);
m=hX_4.Trim(m);
if (m.length > 0) {
if (m.charAt(0) == hX_4._SQT) 		m=hX_4._SQT + hX_4.Trim(m.substr(1));
if (m.substr(0,2) == "''")			m=hX_4.Trim(m.substr(2));
if (m.charAt(m.length-1) == hX_4._SQT)	m=hX_4.Trim(m.substr(0, m.length-1)) + hX_4._SQT;
if (m.substr(m.length-2,2) == "''")	m=hX_4.Trim(m.substr(0,m.length-2));
}
this.simpleFormat=m;
var args=[];
args.push("strict:2");
if (this.simpleFormat)	args.push("format:"+this.simpleFormat);
if (this.base2DigitSpan)args.push("base-2digit-span:"+this.base2DigitSpan);
if (this.sEpoch)		args.push("epoch:"+this.sEpoch);
if (this.ICU4J)			args.push("icu4j:"+this.ICU4J);
if (this.digitFirst)	args.push("digits:" +this.digitFirst);
args.push("first-day-of-week:"+this.FDOW);
if (this.sAM) 			args.push("am:"+this.sAM);
if (this.sPM) 			args.push("pm:"+this.sPM);
this.simpleConverter=new hX_4.DateTimeConverter(args[0],args[1],args[2],args[3],args[4],((args.length>5)?args[5]:null),((args.length>6)?args[6]:null),((args.length>7)?args[7]:null),((args.length>8)?args[8]:null),((args.length>9)?args[9]:null));
this.simpleConverter.isSimple=true;
this.maskFormatFirst=-1;
this.maskFormatLast=-1;
for (i=0; i < this.maskFormat.length; i++) {
if (this.maskFormat.charAt(i) == hX_4._LB || this.maskFormat.charAt(i) == hX_4._QM) {
this.maskFormatLast=i;
this.maskFormatFirst=(this.maskFormatFirst >= 0) ? this.maskFormatFirst : i;
}
}
}
HxG_4.prototype.DateTimeConverter.prototype.getBaseYear=function(today) {
return (today.getFullYear() - this.base2DigitSpan);
}
HxG_4.prototype.DateTimeConverter.prototype.skipSeparators=function (str) {
var r=str;
while (r.length > 0 && hX_4.isChar (r.charAt(0), this.SEPChars)) r=r.substr(1);
return r;
}
HxG_4.prototype.DateTimeConverter.prototype.skipToSeparator=function (str, max) {
var i=this.countToSeparator(str, max);
return (str.substr(i));
}
HxG_4.prototype.DateTimeConverter.prototype.countToSeparator=function (str, max) {
var r=str, i=0;
while (r.length > 0 && (i < max || max < 0) && !hX_4.isChar (r.charAt(0), this.SEPChars)) {
r=r.substr(1);
i++;
}
return i;
}
HxG_4.prototype.DateTimeConverter.prototype.skipIfMissing=function (str, notdigit) {
var n, r=(hX_4.isChar (str.charAt(0), this.SEPChars));
if (!r) {
n=this.matchDigits (str, 1, true);
r=(notdigit) ? n.fail : (!n.fail);
}
return r;
}
HxG_4.prototype.DateTimeConverter.prototype.matchDigit=function (str) {
if (str.length > 0) {
if (hX_4.WDIGITS.indexOf(str.charAt(0)) >= 0) return true;
if (this.xDigits != null && this.xDigits.indexOf(str.charAt(0)) >= 0) return true;
}
return false;
}
HxG_4.prototype.DateTimeConverter.prototype.matchDigits=function (str, n, exact) {
var cnt=0, s=str, oN=hX_4._E, w, a;
while (cnt < n && s.length > 0) {
w=(hX_4.WDIGITS.indexOf(s.charAt(0)) >= 0);
a=(!w && this.xDigits != null && this.xDigits.indexOf(s.charAt(0)) >= 0);
if (!a && !w)
break;
else {
oN=oN + this.getDigit(s);
cnt++; s=s.substr(1);
}
}
return {fail:(cnt==0 || (exact && cnt!=n)), s:s, n:parseInt(oN,10), cnt:cnt};
}
HxG_4.prototype.DateTimeConverter.prototype.getDigit=function (s) {
if (this.xDigits == null || (hX_4.WDIGITS.indexOf(s.charAt(0)) >= 0) || (this.xDigits.indexOf(s.charAt(0)) < 0)) return (s.charAt(0));
return (hX_4.WDIGITS.charAt(s.charCodeAt(0) - this.xDigits.charCodeAt(0)));
}
HxG_4.prototype.DateTimeConverter.prototype.cvtToDigits=function (str) {
var s=str+hX_4._E, r=hX_4._E;
if (this.xDigits == null) return s;
while (s.length > 0) {
if (hX_4.WDIGITS.indexOf(s.charAt(0)) >= 0) r=r + this.xDigits.charAt(s.charCodeAt(0)-hX_4.WDIGITS.charCodeAt(0));
else r=r + s.charAt(0);
s=s.substr(1);
}
return r;
}
HxG_4.prototype.DateTimeConverter.prototype.digitTransmute=function (ev) {
if (this.xDigits != null) {
var c=hX_4.getChrCode(ev);
if (hX_4.WDIGITS.indexOf(c)>=0) hX_4.setChrCode(ev, this.xDigits.charAt(c.charCodeAt(0)-hX_4.WDIGITS.charCodeAt(0)));
}
}
HxG_4.prototype.DateTimeConverter.prototype.getZeroDigit=function () {
return (this.zeroDigit);
}
HxG_4.prototype.DateTimeConverter.prototype.readTimeZoneOffset=function(str) {
var sign=(str.charAt(0) == this._MIN) ? -1 : +1;
var zoffset=(parseInt(str.substr(1,2), 10)) * 60;
zoffset+=parseInt(str.substr(3,2), 10);
zoffset=zoffset * sign;
return zoffset;
}
HxG_4.prototype.DateTimeConverter.prototype.constantToValue=function (sDate) {
var oDate=null, len=sDate.length;
var i, yr, mo, dy, hr, mn, sc, z;
yr=mo=dy=mn=sc=0;
hr=z=null;
var bRelative=false, t, tstr=sDate.toUpperCase();
for (i=0; i < 4; i++) {
t=hX_4.STR_DATE_TODAY[i].toUpperCase();
if (tstr.length >= t.length && tstr.substr(0, t.length) == t) {
bRelative=true;
break;
}
}
if (bRelative) {
oDate=new Date();
oDate.setSeconds(0);
var daysAdj=0, dayAdj=(i==1) ? 1 : ((i==2) ? -1 : 0);
tstr=tstr.substr(t.length);
tstr=hX_4.allTrim(tstr);
if (tstr.charAt(0) == this._PLS) {
daysAdj=parseInt(tstr.substr(1),10);
} else if (tstr.charAt(0) == this._MIN) {
daysAdj=-(parseInt(tstr.substr(1),10));
}
if (i==3) {
oDate=hX_4.cal.adjustDate(oDate,0,0,daysAdj,0,0,0);
} else {
oDate.setHours(12);
oDate.setMinutes(0);
oDate=hX_4.cal.adjustDate(oDate,0,0,(dayAdj+daysAdj),0,0,0);
}
} else {
var iSign=+1;
if (sDate.charAt(0)==this._MIN) {
sDate=sDate.substr(1);
iSign=-1;
}
if (len >= 4) yr=(parseInt(sDate.substr(0,4), 10) * iSign) + ((iSign<0)?-1:0);
if (len >= 6) mo=parseInt(sDate.substr(4,2), 10);
if (len >= 8) dy=parseInt(sDate.substr(6,2), 10);
if (len >= 10) hr=parseInt(sDate.substr(8,2), 10);
if (len >= 12) mn=parseInt(sDate.substr(10,2), 10);
if (len >= 14) sc=parseInt(sDate.substr(12,2), 10);
if (len >= 16) z=parseInt(sDate.substr(14,3), 10);
if (yr == 0 && mo == 0 && dy == 0) {
oDate=new Date();
yr=oDate.getFullYear();
mo=oDate.getMonth()+1;
dy=oDate.getDate();
}
if (z) {
oDate=new Date(Date.UTC(yr, mo-1, dy, hr, mn, sc, 0));
oDate.setTime(oDate.getTime() - (z * 1000));
} else {
oDate=(!hr)?(new Date (yr, mo-1, dy, 12, 0, 0)):(new Date (yr, mo-1, dy, hr, mn, sc));
}
}
return oDate;
}
HxG_4.prototype.DateTimeConverter.prototype.valueToConstant=function (oDate) {
var m=hX_4.padL(oDate.getMonth()+1, 2);
var d=hX_4.padL(oDate.getDate(), 2);
return (oDate.getFullYear() + m + d);
}
HxG_4.prototype.DateTimeConverter.prototype.nReplace=function (fmt, c, cc, p, x, n) {
var f=fmt, i=f.indexOf(cc), j;
while (i >= 0) {
j=i+2;
while (f.charAt(j)==c) j++;
f=hX_4.replaceAll(f, f.substring(i,j), hX_4.padL(this.cvtToDigits(x), ((n!=null)?n:(j-i-1)), p));
i=f.indexOf(cc);
}
return f;
}
HxG_4.prototype.DateTimeConverter.prototype.valueToString=function (oDate, ifmt, promptChar) {
this.msgFail=hX_4._E;
if (oDate == null) return hX_4._E;
var fmt=((ifmt != null) ? ifmt : this.sFormatTokenized), oddampm=(fmt.indexOf("%K") >= 0);
var o,x,y,z,h,k, pChar=((promptChar)?promptChar:this.getZeroDigit()), bDate=((ifmt!= null)?true:this.bHasDate), bTime=((ifmt!= null)?true:this.bHasTime);
this.setCalendar();
if (bDate) {
fmt=hX_4.replaceAll(fmt, "%MMMM", "@0");
fmt=hX_4.replaceAll(fmt, "%MMM",  "@1");
fmt=hX_4.replaceAll(fmt, "%EEEE", "@2");
fmt=hX_4.replaceAll(fmt, "%EEE",  "@3");
fmt=hX_4.replaceAll(fmt, "%EE",	"@3");
fmt=hX_4.replaceAll(fmt, "%E",	"@3");
fmt=hX_4.replaceAll(fmt, "%GGGG", "@4");
fmt=hX_4.replaceAll(fmt, "%GGG",  "@5");
fmt=hX_4.replaceAll(fmt, "%GG",   "@6");
fmt=hX_4.replaceAll(fmt, "%G",   	"@7");
}
if (bTime) {
fmt=hX_4.replaceAll(fmt, "%a",    "@8");
fmt=hX_4.replaceAll(fmt, "%z",    "@9");
fmt=hX_4.replaceAll(fmt, "%Z",    "@!");
}
if (bDate) {
o=this.valueToYearEpoch(oDate); y=o.year; z=(y==0)?pChar:this.getZeroDigit();
fmt=hX_4.replaceAll(fmt, "%yyyy",hX_4.padL(this.cvtToDigits(y), 4, z));
if (fmt.indexOf("%Y") >= 0) {
x=(hX_4.cal.getJulianWeek(oDate, this.FDOW)).yr;
fmt=hX_4.replaceAll(fmt, "%YYYY", hX_4.padL(this.cvtToDigits(x), 4, z));
}
if (fmt.indexOf("%y") >= 0 || fmt.indexOf("%Y") >= 0) {
if (this.isShortYr) {
fmt=this.nReplace(fmt,hX_4._lY,"%y",pChar,y);
if (fmt.indexOf("%Y") >= 0) fmt=this.nReplace(fmt,hX_4._uY,"%Y",pChar,x);
} else {
fmt=this.nReplace(fmt,hX_4._lY,"%y",pChar,(y%100),2);
if (fmt.indexOf("%Y") >= 0) fmt=this.nReplace(fmt,hX_4._uY,"%Y",pChar,(x%100),2);
}
}
fmt=this.nReplace(fmt,hX_4._uM,"%M",pChar,(o.month+1));
if (fmt.indexOf("%w") >= 0)	fmt=this.nReplace(fmt,hX_4._lW,"%w",pChar,hX_4.cal.getJulianWeek(oDate, this.FDOW).wk);
if (fmt.indexOf("%W") >= 0) fmt=this.nReplace(fmt,hX_4._uW,"%W",pChar,hX_4.cal.getJulianWeekOfMonth(oDate, this.FDOW));
fmt=this.nReplace(fmt,hX_4._lD,"%d",pChar,o.date);
if (fmt.indexOf("%D") >= 0)	fmt=this.nReplace(fmt,hX_4._uD,"%D",pChar,hX_4.cal.getJulianDay(oDate));
if (fmt.indexOf("%g") >= 0)	fmt=this.nReplace(fmt,hX_4._lG,"%g",pChar,hX_4.cal.gregorianToJulian(oDate));
if (fmt.indexOf("%F") >= 0) fmt=this.nReplace(fmt,hX_4._uF,"%F",pChar,hX_4.cal.getDayOfWeekInMonth(oDate));
if (fmt.indexOf("%e") >= 0) {
x=(hX_4.cal.getDay(oDate)-this.FDOW)+1;
x=(x<1)?x+7:x;
fmt=this.nReplace(fmt,hX_4._lE,"%e",pChar, x);
}
}
if (bTime) {
h=oDate.getHours();
k=this.cvtToDigits(oDate.getMilliseconds());
fmt=this.nReplace(fmt,hX_4._lH,"%h",pChar,(((h%12)==0)?12:(h%12)));
fmt=this.nReplace(fmt,hX_4._lK,"%k",pChar,(h+1));
fmt=this.nReplace(fmt,hX_4._uH,"%H",pChar,h);
fmt=this.nReplace(fmt,hX_4._uK,"%K",pChar,((((h%12)==0)?12:(h%12))-1));
fmt=this.nReplace(fmt,hX_4._lM,"%m",pChar,oDate.getMinutes());
fmt=this.nReplace(fmt,hX_4._lS,"%s",pChar,oDate.getSeconds());
fmt=hX_4.replaceAll(fmt, "%SSS", hX_4.padL(k, 3, pChar));
fmt=hX_4.replaceAll(fmt, "%SS",  hX_4.padL(k, 3, pChar).substr(0,2));
fmt=hX_4.replaceAll(fmt, "%S",   hX_4.padL(k, 3, pChar).substr(0,1));
fmt=this.nReplace(fmt,hX_4._uA,"%A", pChar, oDate.getMilliseconds() + (oDate.getSeconds()*1000) + (oDate.getMinutes()*60*1000) + (oDate.getHours()*60*60*1000));
}
if (bDate) {
fmt=hX_4.replaceAll(fmt, "@0", this.valueToMonthLabel(oDate));
fmt=hX_4.replaceAll(fmt, "@1", this.valueToShortMonthLabel(oDate));
fmt=hX_4.replaceAll(fmt, "@2", this.valueToDayLabel(oDate));
fmt=hX_4.replaceAll(fmt, "@3", this.valueToShortDayLabel(oDate));
fmt=hX_4.replaceAll(fmt, "@4", o.name);
fmt=hX_4.replaceAll(fmt, "@5", o.nameabb);
fmt=hX_4.replaceAll(fmt, "@6", o.nameabb);
fmt=hX_4.replaceAll(fmt, "@7", o.nameabb);
}
if (bTime) {
fmt=hX_4.replaceAll(fmt, "@8", this.valueToAmPmLabel(oDate, oddampm));
fmt=hX_4.replaceAll(fmt, "@9", this.valueToTimeZone(oDate));
fmt=hX_4.replaceAll(fmt, "@!", this.valueToTimeZone(oDate, true));
}
for (x=0; x < this.nLiteralCnt; x++)
fmt=hX_4.replaceAll(fmt, hX_4._UPC+x, this.sLiterals[x]);
return fmt;
}
HxG_4.prototype.DateTimeConverter.prototype.valueToAmPmLabel=function(oDate, oddampm) {
var o=oDate.getHours();
if (oddampm)
return (o==0) ? this.sPM : ((o <= 12) ? this.sAM : this.sPM);
else
 return (o < 12) ? this.sAM : this.sPM;
}
HxG_4.prototype.DateTimeConverter.prototype.valueToTimeZone=function(oDate, ISO) {
var r=hX_4._E, j, zoffset, k, z1, z2, z3, z4, dst=false, znames;
var z=-(oDate.getTimezoneOffset());
var feb=new Date(oDate.getFullYear(), 1, 7);
var jun=new Date(oDate.getFullYear(), 5, 15);
var zfeb=-(feb.getTimezoneOffset());
var zjun=-(jun.getTimezoneOffset());
if (z == zfeb && z != zjun)	dst=false;
if (z == zjun && z != zfeb)	dst=true;
z1=(dst) ? 2 : 0;
z2=(dst) ? 3 : 1;
znames=hX_4.STR_TIMEZONES.length;
for (j=znames-1; !ISO && (j>0); j--) {
if (hX_4.STR_TIMEZONES[j][0] == null || hX_4.STR_TIMEZONES[j][0].length == 0) {
} else {
zoffset=this.readTimeZoneOffset(hX_4.STR_TIMEZONES[j][z1]);
if (zoffset == z) {
r=hX_4.STR_TIMEZONES[j][z2];
for (k=0;k<r.length;k++) {
if (this.matchDigit(r.charAt(k))) {
r=r.substr(0,k) + this.cvtToDigits(r.charAt(k)) + r.substr(k+1);
}
}
break;
}
}
}
if (r.length == 0) {
r=((ISO)?hX_4._E:hX_4.STR_TIMEZONES[0][1]) + ((z < 0) ? this._MIN : this._PLS);
z=Math.abs(z);
var hr=Math.floor(z/60);
var mn=z-(hr*60);
hr=hX_4.padL(this.cvtToDigits(hr),2);
mn=hX_4.padL(this.cvtToDigits(mn),2);
r=r + hr + ((ISO)?hX_4._E:this.TZSeparator) + mn;
}
return (r);
}
HxG_4.prototype.DateTimeConverter.prototype.isDateFormat=function() {
return this.bHasDate;
}
HxG_4.prototype.DateTimeConverter.prototype.isTimeFormat=function() {
return this.bHasTime;
}
HxG_4.prototype.DateTimeConverter.prototype.setCalendar=function() {
hX_4.cal.setCalendar(this.bIsGregorian, this.bIsHebrew, this.bIsHijiri);
}
HxG_4.prototype.DateTimeConverter.prototype.valueToDayLabel=function(oDate) {
return hX_4.STRA_DATE_DAYS[this.epochIndex()][hX_4.cal.getDay(oDate)];
}
HxG_4.prototype.DateTimeConverter.prototype.valueToShortDayLabel=function(oDate) {
return hX_4.STRA_DATE_SHDAYS[this.epochIndex()][hX_4.cal.getDay(oDate)];
}
HxG_4.prototype.DateTimeConverter.prototype.valueToSShortDayLabel=function(i) {
return hX_4.STRA_DATE_SHSHDAYS[this.epochIndex()][i];
}
HxG_4.prototype.DateTimeConverter.prototype.valueToMonthLabel=function(oDate) {
var o=hX_4.cal.dateToCalendar(oDate);
return hX_4.STRA_DATE_MONTHS[this.epochIndex()][o.month];
}
HxG_4.prototype.DateTimeConverter.prototype.valueToShortMonthLabel=function(oDate) {
var o=hX_4.cal.dateToCalendar(oDate);
return hX_4.STRA_DATE_SHMONTHS[this.epochIndex()][o.month];
}
HxG_4.prototype.DateTimeConverter.prototype.valueToYearLabel=function (oDate) {
if (this.bShowEpoch)
return (this.isShortYr) ? this.valueToString(oDate, hX_4.DTFMT_GEYEAR) : this.valueToString(oDate, hX_4.DTFMT_GCYEAR);
else
 return this.valueToString(oDate, hX_4.DTFMT_YEAR);
}
HxG_4.prototype.DateTimeConverter.prototype.valueToYearEpoch=function (oDate) {
var i=1,p,o=hX_4.cal.dateToCalendar(oDate), y=o.year;
if (!this.isShortYr) {
if (this.bIsGregorian) {
i=(y < this.descYrEpoch[0])?0:1;
if (this.bIsChristianEra)
y=(y<0)?-y:y;
else {
y -= this.descYrEpoch[0];
if (this.bIsBuddhistEra) y++;
}
}
} else {
for (i=this.descDtEpoch.length-1; i>=0; i--) {
if (this.descDtEpoch[i]!=null && (oDate.Hx4CompareDate(this.descDtEpoch[i]) >= 0)) {
y=y - this.descYrEpoch[i] + 1;
break;
}
}
if (i<0) i=this.descDtEpoch.length-1;
}
p=(this.isSimple)?hX_4.padR(this.descLbEpoch[i][1],this.abbEpochLength,hX_4._B):this.descLbEpoch[i][1];
return { name: this.descLbEpoch[i][0], nameabb: p, year: y, month: o.month, date:o.date };
}
HxG_4.prototype.DateTimeValidator=function () {
this.type=hX_4.CVT_datetime;
this.required=false;
this.minimumBound=this.maximumBound=this.minimumDate=this.maximumDate=null;
this.oMinimum=new Date (100, 0, 1);
this.oMinimum.setFullYear(100);
this.ELexpression=null;
this.ELexpressionImp=null;
this.msgFail=hX_4._E;
this.attributeTable=[];
this.attributeTable ['required']=['required',		hX_4.ARG_IS_TRUE,	false, null, null];
this.attributeTable ['minimum-bound']=['minimumBound',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['min-bound']=['minimumBound',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['maximum-bound']=['maximumBound',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['max-bound']=['maximumBound',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['constraint-expression']=['ELexpression',	hX_4.ARG_TO_NAN,	false,	null, null];
this.setAttribute(arguments);
}
HxG_4.prototype.DateTimeValidator.prototype.setAttribute=function(a) {
var wasmax=this.maximumBound;
var wasmin=this.minimumBound;
var DTP=new hX_4.DateTimeConverter();
hX_4.parseArg (this.attributeTable, this, a);
if (this.minimumBound && wasmin != this.minimumBound)
this.minimumDate=DTP.constantToValue (this.minimumBound);
if (this.maximumBound && wasmax != this.maximumBound)
this.maximumDate=DTP.constantToValue (this.maximumBound);
if (this.maximumDate && this.minimumDate) {
if (1 != this.maximumDate.Hx4CompareDate (this.minimumDate, true))
this.minimumBound=this.maximumBound=this.minimumDate=this.maximumDate=null;
}
if (this.ELexpression != null)
this.ELexpressionImp=hX_4.regExp.registerELConstraint(this.ELexpression, "date");
return true;
}
HxG_4.prototype.DateTimeValidator.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.DateTimeValidator.prototype.lastError=function () {
return ((this.msgFail && this.msgFail.length > 0) ? this.msgFail : null);
}
HxG_4.prototype.DateTimeValidator.prototype.validate=function (testV, iDTP, treatAsDate, treatAsPick) {
this.msgFail=hX_4._E;
var r, e, test=null, DTP=(iDTP != null) ? hX_4.getConverterById(iDTP) : null;
if (DTP == null || !hX_4.isObject(DTP))
return false;
var bTCompare=((treatAsDate) ? false : DTP.isTimeFormat()), bTOnly=(DTP.isTimeFormat() && !DTP.isDateFormat());
if (testV==null || hX_4.isString(testV)) {
r=!(this.required);
if (testV==null) {
this.msgFail=(r) ? hX_4._E : hX_4.ERR_required;
return r;
}
e=hX_4.allTrim (testV);
if (e.length == 0) {
this.msgFail=(r) ? hX_4._E : hX_4.ERR_required;
return r;
}
test=DTP.stringToValue(e);
} else
 if (testV.Hx4Clone) test=testV.Hx4Clone(2);
if (test==null) {
this.msgFail=hX_4.ERR_required;
return false;
}
if (bTOnly && (this.minimumDate || this.maximumDate)) {
if (test.getFullYear() > 1970) {
test.setYear(1970);
test.setMonth(0);
test.setDate(1);
}
test.setMilliseconds(0);
}
if (treatAsPick && this.oMinimum && !bTOnly) {
if (-1 == test.Hx4CompareDate(this.oMinimum)) {
this.msgFail=hX_4.ERR_minimum;
return false;
}
}
if (this.minimumDate) {
if (-1 == test.Hx4CompareDate(this.minimumDate, bTCompare)) {
this.msgFail=hX_4.ERR_minimum;
return false;
}
}
if (this.maximumDate) {
if (1 == test.Hx4CompareDate(this.maximumDate, bTCompare)) {
this.msgFail=hX_4.ERR_maximum;
return false;
}
}
if (this.ELexpressionImp != null) {
if (!hX_4.regExp.testELExp(test, this.ELexpressionImp)) {
this.msgFail=hX_4.ERR_constraint;
return false;
}
}
return true;
}
HxG_4.prototype.DateTimeValidator.prototype.coerce=function (test, iDTP, treatAsDate, treatAsPick) {
this.msgFail=hX_4._E;
var e, o=null, DTP=(iDTP != null) ? hX_4.getConverterById(iDTP) : null;
if (DTP == null || !hX_4.isObject(DTP)) {
this.msgFail=hX_4.ERR_required;
return false;
}
var bTCompare=((treatAsDate) ? false : DTP.isTimeFormat()), bTOnly=(DTP.isTimeFormat() && !DTP.isDateFormat());
if (test != null && hX_4.isString(test)) {
e=hX_4.allTrim (test);
if (e.length > 0) o=DTP.stringToValue(e);
} else if (test.Hx4Clone) o=test.Hx4Clone(2);
if (o == null) o=new Date ();
if (bTOnly && (this.minimumDate || this.maximumDate)) {
if (o.getFullYear() > 1970) {
o.setYear(1970);
o.setMonth(0);
o.setDate(1);
}
o.setMilliseconds(0);
}
if (this.oMinimum && !bTOnly && treatAsPick) {
if (-1 == o.Hx4CompareDate(this.oMinimum))
o=this.oMinimum.Hx4Clone(2);
}
if (this.minimumDate) {
if (-1 == o.Hx4CompareDate(this.minimumDate, bTCompare))
o=this.minimumDate.Hx4Clone(2);
}
if (this.maximumDate) {
if (1 == o.Hx4CompareDate(this.maximumDate, bTCompare))
o=this.maximumDate.Hx4Clone(2);
}
return o;
}
HxG_4.prototype.DateTimeAssist=function (_elem, _state, _converter, _validator, _promptChar) {
if (!_elem || !_converter || !_state) return;
this.isFilled=isFilled;
this.onFocus=onFocus;
this.onBlur=onBlur;
this.onCut=onCut;
this.onPaste=onPaste;
this.toAssist=toAssist;
this.fromAssist=fromAssist;
this.onClick=onClick;
this.onChangeKeyCode= onChangeKeyCode;
this.onChangeChrCode= onChangeChrCode;
this.onValidate=onValidate
 var elem=_elem;
var state=_state;
var cvt=_converter;
var validator=_validator;
var pChar=_promptChar;
var wasP=null;
var handler=null;
if (cvt.simpleFormat == null)
cvt.genAssistMasks(pChar);
handler=new hX_4.MaskAssist.prototype.maskHandler(elem, state, cvt, pChar);
function valueToSimpleString (iDate) {
return (iDate == null)?handler.getEmptyMask():cvt.simpleConverter.valueToString(iDate,null,pChar);
}
function simpleStringToValue (sDate, ending, pos) {
var r=false, i, j, test=sDate, out=sDate, rv=null, l=sDate.length, empty=true, epoch=(cvt.sFormatTokenized.indexOf("%G")>=0);
cvt.setCalendar();
if (l <= 0) return {reset:false, value:null};
for (i=0; empty && ending && i<l; i++) {
if (cvt.maskFormat.charAt(i) == hX_4._LB && test.charAt(i) != pChar && test.charAt(i) != hX_4._B)
empty=false;
}
if (ending && empty) return {reset:false, value:hX_4._E};
if (l < cvt.maskFormat.length)
test=test + handler.getEmptyMask().substr(l);
else if (!ending && l > cvt.maskFormat.length)
return {reset:false, value:null};
var c1, c2, c3, c4, c5, m, m1, intY=-1, intYL=-1, intYT=-1, intM=-1, intD=-1, intH=-1, intMn=-1, intS=-1, strE=hX_4._E, fixH=false, fixD=false, fixM=false, fixY=false, fixG=false, leapT=false;
for (i=0; i < l; i++) {
if (cvt.maskFormat.charAt(i) == hX_4._LB) {
c1=test.charAt(i);
m=cvt.maskFormatDigits.charAt(i);
if (m == hX_4._uG) {
if (c1==pChar || c1==hX_4._B || c1==hX_4._E) {
strE=cvt.descLbEpoch[cvt.descLbEpoch.length-1][1];
} else {
strE=hX_4._E;
c1=c1.toUpperCase();
for (j=0; j < cvt.descLbEpoch.length; j++) {
if (c1==cvt.descLbEpoch[j][1].charAt(0).toUpperCase()) {
if (cvt.minEpoch<=1 || test.charAt(i+1).toUpperCase()==cvt.descLbEpoch[j][1].charAt(1).toUpperCase()) {
strE=cvt.descLbEpoch[j][1];
break;
}
}
}
if (strE != hX_4._E) fixG=r=true;
}
i+=cvt.abbEpochLength;
} else if (m != hX_4._lY) {
c1=cvt.getDigit(c1);
c2=((i+1)<l) ? cvt.getDigit(test.charAt(i+1)) : hX_4._B;
if (c1 == pChar && c2 == pChar) {
c1=hX_4._Z
 c2=(m==hX_4._lH || m==hX_4._lS || m==hX_4._uA) ? hX_4._Z:hX_4._1;
} else if (c1 == pChar && c2 != pChar) {
c1=hX_4._Z
 } else if (c1 != pChar && c2 == pChar) {
c2=(c1==hX_4._Z) ? hX_4._1 : c1;
c1=hX_4._Z;
} else if (c1 == hX_4._Z && c2 == hX_4._Z && m != hX_4._lH) {
c1=hX_4._Z;
c2=(m==hX_4._lH || m==hX_4._lS || m==hX_4._uA) ? hX_4._Z:hX_4._1;
}
j=parseInt(c1+c2,10);
if (m==hX_4._lH) intH=j;
else if (m==hX_4._uA) intMn=j;
else if (m==hX_4._lS) intS=j;
else if (m==hX_4._lM) intM=j;
else intD=j;
i=i+1;
} else {
j=(cvt.isShortYr)?2:4;
c2=((i+1)<l) ? test.charAt(i+1) : hX_4._B;
c3=((i+2)<l) ? test.charAt(i+2) : hX_4._B;
c4=((i+3)<l) ? test.charAt(i+3) : hX_4._B;
if (!ending) {
if (cvt.isShortYr) {
if (c1 == pChar || c1 == hX_4._B) c1=hX_4._1;
if (c2 == pChar || c2 == hX_4._B) c2=hX_4._B;
c3=c4=hX_4._E;
} else {
c5=c4;
if (c1 == pChar || c1 == hX_4._B) c1=hX_4._2;
if (c2 == pChar || c2 == hX_4._B) c2=hX_4._Z;
if (c3 == pChar || c3 == hX_4._B) c3=hX_4._Z;
if (c4 == pChar || c4 == hX_4._B) c4=hX_4._Z;
leapT=(c5!=c4);
}
} else {
var today=new Date(), thisyr=today.getFullYear()+hX_4._E;
if (c1 == pChar && c2 == pChar && c3 == pChar && c4 == pChar) {
if (cvt.isShortYr) {
c1=hX_4._Z; c2=hX_4._1;	c3=c4=hX_4._E;
} else {
if (epoch) { c1=thisyr.charAt(0); c2=c3=c4=hX_4._Z; }
else { c1=thisyr.charAt(0); c2=thisyr.charAt(1); c3=thisyr.charAt(2); c4=thisyr.charAt(3); }
}
} else {
if (cvt.isShortYr) {
if (c1 == pChar || c1 == hX_4._B) c1=hX_4._Z;
if (c2 == pChar || c2 == hX_4._B) c2=hX_4._B;
c3=c4=hX_4._E;
} else {
if (c1 == pChar || c1 == hX_4._B) c1=(epoch)?hX_4._Z:thisyr.charAt(0);
if (c2 == pChar) c2=hX_4._Z;
if (c3 == pChar) c3=hX_4._Z;
if (c4 == pChar) c4=hX_4._Z;
}
}
}
c1=cvt.getDigit(c1)+cvt.getDigit(c2)+cvt.getDigit(c3)+cvt.getDigit(c4);
intYL=intY=parseInt(c1,10);
intYL=hX_4.cal.nearestLeapYear(intY);
i+=(j-1);
}
}
}
if (!ending) {
m=cvt.maskFormatDigits.charAt(pos);
m1=cvt.maskFormatDigits.charAt(pos+1);
intYT=(intY>=0)?((leapT) ? intYL : intY):intY;
if (intY==0) {
intY=1;
intYT=intYL=intY;
fixY=r=true;
}
if (intM >= 0 && m==hX_4._lM && m1==hX_4._lM && intM > hX_4.cal.monthsInYear(intYT) && (Math.floor(intM/10) <= Math.floor(hX_4.cal.monthsInYear()/10))) {
intM=hX_4.cal.monthsInYear(intYT);
fixM=r=true;
}
if (intH >=0 && m==hX_4._lH && m1==hX_4._lH && intH > 23 && (Math.floor(intH/10) <= 2)) {
intH=23;
fixH=r=true;
}
if (intD>=0 && intD > 0 && intM > 0 && intM <= hX_4.cal.monthsInYear()) {
j=hX_4.cal.daysInMonth(intM-1,intYT);
if (intD > j) {
if (m==hX_4._lD && m1==hX_4._lD && (Math.floor(intD/10) <= Math.floor(hX_4.cal.maxDaysInMonth()/10))) {
intD=hX_4.cal.daysInMonth(intM-1,intYT);
fixD=r=true;
} else if (intD <= hX_4.cal.maxDaysInMonth()) {
if (m != hX_4._lD) {
intD=hX_4.cal.daysInMonth(intM-1,intYT);
fixD=r=true;
} else if (intYL != intY && intD <= hX_4.cal.daysInMonth(intM-1,intYL)) {
intY=intYL;
fixY=r=true;
} else {
for (j=intM+1; j!=intM; j++) {
j=(j <= hX_4.cal.monthsInYear(intYT)) ? j:1;
if (intD <= hX_4.cal.daysInMonth(j-1,intYT)) {
intM=j;
fixM=r=true;
break;
}
}
}
}
}
}
}
for (i=0; i < l; i++) {
if (cvt.maskFormat.charAt(i) == hX_4._LB) {
m=cvt.maskFormatDigits.charAt(i);
if (m == hX_4._uG) {
test=test.substr(0,i) + strE + test.substr(i+cvt.abbEpochLength);
if (fixG) out=out.substr(0,i) + strE + out.substr(i+cvt.abbEpochLength);
i+=cvt.abbEpochLength;
} else if (m != hX_4._lY) {
j=(m==hX_4._uA)?intMn:((m==hX_4._lS)?intS:((m==hX_4._lH)?intH:((m==hX_4._lM)?intM:((m==hX_4._lD)?intD:-1))));
if (j >= 0) {
c1=hX_4.padL(j+hX_4._E,2,cvt.getZeroDigit());
test=test.substr(0,i) + c1 + test.substr(i+2);
if ((fixD && m==hX_4._lD) || (fixM && m==hX_4._lM) || (fixH && m==hX_4._lH)) {
if (out.charAt(i)  != c1.charAt(0)) c1=hX_4.rplOne(c1,0,pChar);
if (out.charAt(i+1)!= c1.charAt(1)) c1=hX_4.rplOne(c1,1,pChar);
out=out.substr(0,i) + cvt.cvtToDigits(c1) + out.substr(i+2);
}
}
i+=1;
} else {
j=(cvt.isShortYr)?2:4;
c1=hX_4.padL(((leapT&&!fixY)?intYL:intY)+hX_4._E,j,cvt.getZeroDigit());
test=test.substr(0,i) + c1 + test.substr(i+j);
if (fixY) {
if (out.charAt(i)  != c1.charAt(0)) c1=hX_4.rplOne(c1,0,pChar);
if (out.charAt(i+1)!= c1.charAt(1)) c1=hX_4.rplOne(c1,1,pChar);
if (j>2) {
if (out.charAt(i+2)!= c1.charAt(0)) c1=hX_4.rplOne(c1,2,pChar);
if (out.charAt(i+3)!= c1.charAt(1)) c1=hX_4.rplOne(c1,3,pChar);
}
out=out.substr(0,i) + cvt.cvtToDigits(c1) + out.substr(i+j);
}
i+=(j-1);
}
}
}
rv=cvt.simpleConverter.stringToValue(test);
if (r && !ending && rv) rv=out;
r=(rv==null)?false:r;
return {reset:r,value:rv};
}
function isFilled (curpos) {
var l=elem.value.length;
if (l < cvt.maskFormat.length)
return false;
var c=elem.value.charAt(cvt.maskFormatLast);
return (curpos > cvt.maskFormatLast && c != pChar && c != hX_4._B);
}
function onFocus (evt) {
var newValue=toAssist(elem.value);
elem.value=(newValue.v==null) ? hX_4._E : newValue.v;
hX_4.sel.setCaretPos(elem, cvt.maskFormatFirst);
return true;
}
function toAssist (v) {
var newValue=(v != null) ? hX_4.Trim(v) : null;
newValue=(newValue != null && newValue.length!=undefined && newValue.length > 0) ? cvt.stringToValue(newValue) : null;
newValue=valueToSimpleString(newValue);
return {v:newValue, i:null};
}
function onBlur (evt) {
var v=fromAssist(elem.value);
if (v != null) {
elem.value=v;
return true;
}
return false;
}
function fromAssist (v) {
if (v.length==0) return hX_4._E;
var newValue=simpleStringToValue(v, true, 0).value;
return ((newValue == null || (newValue.length!=undefined && newValue.length==0)) ? hX_4._E : cvt.valueToString(newValue));
}
function onClick (evt) {
return handler.onClick(evt);
}
function onCut (evt) {
return handler.onCut(evt);
}
function onPaste (evt) {
return handler.onPaste(evt);
}
function onChangeKeyCode (evt) {
wasP=state.getPos();
return handler.onChangeKeyCode (evt);
}
function onChangeChrCode (evt) {
wasP=state.getPos();
cvt.digitTransmute(evt);
return handler.onChangeChrCode (evt);
}
function onValidate () {
var reset, i, v=state.getValue(), nV=simpleStringToValue(v, false, wasP);
if (nV.value != null) {
if (nV.reset) {
if (v!=nV.value)state.setValue(nV.value);
return true;
} else {
nV=valueToSimpleString(nV.value);
if (nV != null) return true;
}
}
return false;
}
}
HxG_4.prototype.NumberConverter=function () {
this.type=hX_4.CVT_number;
this.nStrict=hX_4.NFMT_DEFAULTSTRICT;
this.pattern=hX_4.NFMT_DECIMAL0;
this.locale=hX_4.NFMT_LOCALE0;
this.invalidPattern=false;
this.ICU4J=false;
this.digitFirst=null;
this.upattern=null;
this.DF_GroupingSize=this.DF_GroupingSecSize=null;
this.DF_NegativePrefix=this.DF_NegativeSuffix=this.DF_PositivePrefix=this.DF_PositiveSuffix=null;
this.DF_NegativePattern=null;
this.DF_IsDecimalShown=null;
this.DF_PaddingChar=hX_4._E;
this.DF_PaddingPos=this.DF_PaddingLeft=this.DF_PaddingRight=null;
this.DF_MinIntegerDigits=this.DF_MaxIntegerDigits=this.DF_MinFractionDigits=this.DF_MaxFractionDigits=this.DF_MinExponentDigits=null;
this.DF_MaxLength=this.DF_MaxPadLength=null;
this.isExponent=this.isExponentSigned=this.isPercent=this.isMille=false;
this.FMTChars=";0#.,E";
this.PREChars=hX_4.STR_percent_char+hX_4.STR_mille_char+hX_4.STR_icurrency_char;
this.hardPlus="+";
this.hardMinus="-";
this.hardE="E";
this.hardS="*";
this.xDigits=this.zeroDigit=null;
this.LC_groupingSymbol=this.LC_decimalSymbol=this.LC_percentSymbol=this.LC_milleSymbol=this.LC_minusSymbol=this.LC_currencySymbol=null;
this.LC_paddingChar=hX_4._Z;
this.msgFail=this.intMsgFail=hX_4._E;
this.signedConverter=this.zeroConverter=null;
this.attributeTable=[];
this.attributeTable ['strict']=['nStrict',		hX_4.ARG_TO_NUM,	false,	0,	2];
this.attributeTable ['pattern']=['pattern',		hX_4.ARG_TO_NAS,	false,	null,	null];
this.attributeTable ['locale']=['locale',		hX_4.ARG_TO_NAS,	false,	null,	null];
this.attributeTable ['digits']=['digitFirst',	hX_4.ARG_TO_NUM,	false,	0,	999999];
this.attributeTable ['icu4j']=['ICU4J', 		hX_4.ARG_IS_TRUE,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.NumberConverter.prototype.setAttribute=function(a) {
hX_4.parseArg (this.attributeTable, this, a);
this.parseDigits();
this.parseLocaleString();
this.parsePatternString();
if (this.signedConverter)
this.genAssistMasks();
return true;
}
HxG_4.prototype.NumberConverter.prototype.parseDigits=function () {
this.xDigits=null;
this.zeroDigit=hX_4._Z;
if (this.digitFirst != null) {
this.xDigits=String.fromCharCode(this.digitFirst, this.digitFirst+1, this.digitFirst+2, this.digitFirst+3, this.digitFirst+4, this.digitFirst+5, this.digitFirst+6, this.digitFirst+7, this.digitFirst+8, this.digitFirst+9);
this.zeroDigit=this.xDigits.charAt(0);
}
this.LC_paddingChar=this.zeroDigit;
}
HxG_4.prototype.NumberConverter.prototype.parseLocaleString=function () {
this.LC_groupingSymbol=(this.locale.charAt(0) == hX_4._E) ? hX_4.NFMT_LOCALE0.charAt(0) : this.locale.charAt(0);
this.LC_decimalSymbol=(this.locale.charAt(1) == hX_4._E) ? hX_4.NFMT_LOCALE0.charAt(1) : this.locale.charAt(1);
this.LC_percentSymbol=(this.locale.charAt(2) == hX_4._E) ? hX_4.NFMT_LOCALE0.charAt(2) : this.locale.charAt(2);
this.LC_milleSymbol=(this.locale.charAt(3) == hX_4._E) ? hX_4.NFMT_LOCALE0.charAt(3) : this.locale.charAt(3);
this.LC_minusSymbol=(this.locale.charAt(4) == hX_4._E) ? hX_4.NFMT_LOCALE0.charAt(4) : this.locale.charAt(4);
this.LC_currencySymbol=(this.locale.substr(5) == hX_4._E) ? hX_4.NFMT_LOCALE0.substr(5) : this.locale.substr(5);
}
HxG_4.prototype.NumberConverter.prototype.parsePatternString=function () {
this.DF_GroupingSize=this.DF_GroupingSecSize=0;
this.DF_NegativePrefix=this.DF_NegativeSuffix=this.DF_PositivePrefix=this.DF_PositiveSuffix=hX_4._E;
this.DF_NegativePattern=this.DF_IsDecimalShown=false;
this.DF_MinIntegerDigits=this.DF_MaxIntegerDigits=this.DF_MinFractionDigits=this.DF_MaxFractionDigits=this.DF_MinExponentDigits=0;
this.DF_PaddingPos=null;
this.DF_PaddingChar=this.DF_PaddingLeft=this.DF_PaddingRight=hX_4._E;
this.isExponent=this.isExponentSigned=this.isPercent=this.isMille=this.invalidPattern=false;
this.DF_MaxLength=this.DF_MaxPadLength=0;
this.upattern=this.pattern;
var fmt=this.pattern, index, i, j=0, xchar, nchar, bInPositivePattern=true, bInPrefix=true;
var bInNumber=false, bInExponent=false, bInQuote=false, bHaveGroup=false;
var bInMinInteger=false, bInMaxInteger=false, bInMinFraction=false, bInMaxFraction=false;
for (i=fmt.length-1; j < 4 && i > 0; i--) {
xchar=fmt.charAt(i);
if (xchar==hX_4._SQT || xchar==hX_4._P || xchar==hX_4._SM)
break;
if (hX_4._SL == fmt.charAt(i)) {
xchar=fmt.substr(i+1);
this.upattern=fmt=fmt.substr(0,i);
if (xchar.length==1)
this.DF_PaddingLeft=xchar;
else if (xchar.length==2) {
this.DF_PaddingLeft=xchar.substr(0,1);
this.DF_PaddingRight=xchar.substr(1,1);
}
break;
}
j--;
}
var len=fmt.length;
for (index=0; index < len; index++) {
xchar=fmt.charAt(index);
if (bInQuote) {
if (xchar == hX_4._SQT) {
nchar=fmt.charAt(index+1);
if (nchar == hX_4._SQT) {
this.addToPreSuf (bInPositivePattern, bInPrefix, bInQuote, xchar);
index++;
} else {
bInQuote=false;
}
} else {
this.addToPreSuf (bInPositivePattern, bInPrefix, bInQuote, xchar);
}
} else if (!hX_4.isChar(xchar, this.FMTChars)) {
if (!bInPrefix) bInNumber=bInMinInteger=bInMaxInteger=bInMinFraction=bInMaxFraction=bInExponent=false;
if (this.ICU4J && xchar == this.hardS) {
if (this.DF_PaddingPos || fmt.charAt(index+1)==null) {
this.invalidPattern=true;
this.intMsgFail=hX_4.INTERR_Format_Padding;
break;
}
if (bInPositivePattern) {
if (bInPrefix) {
this.DF_PaddingPos=(this.DF_PositivePrefix.length == 0) ? 1:2;
bInPrefix=false; bInNumber=true;
} else
 this.DF_PaddingPos=(this.DF_PositiveSuffix.length == 0) ? 3:4;
this.DF_PaddingChar=fmt.charAt(index+1);
this.upattern=this.upattern.substr(0,index)+this.upattern.substr(index+2);
}
index++;
} else if (xchar == hX_4._SQT) {
nchar=fmt.charAt(index+1);
if (nchar == hX_4._SQT) {
this.addToPreSuf (bInPositivePattern, bInPrefix, bInQuote, xchar);
index++;
} else {
bInQuote=true;
}
} else {
this.addToPreSuf (bInPositivePattern, bInPrefix, bInQuote, xchar);
}
} else {
if (xchar == hX_4._SM) {
bInPositivePattern=bInNumber=bInMinInteger=bInMaxInteger=bInMinFraction=bInMaxFraction=bInExponent=false;
this.DF_NegativePattern=true;
bInPrefix=true;
} else {
if (!bInPrefix && !bInNumber) {
this.invalidPattern=true;
this.intMsgFail=hX_4.INTERR_Format_Symbol;
break;
}
bInPrefix=false; bInNumber=true;
if (!bInPositivePattern) {
if (xchar == this.hardE && fmt.charAt(index+1)) index++;
if (xchar == this.hardS) index++;
} else {
if (xchar == hX_4._Z) {
if (bInExponent) {
this.DF_MinExponentDigits++;
} else if (bInMinInteger) {
this.DF_MinIntegerDigits++;
} else if (bInMinFraction) {
this.DF_MinFractionDigits++;
} else if (bInMaxFraction) {
this.invalidPattern=true;
this.intMsgFail=hX_4.INTERR_Format_ZSymbol;
break;
} else {
if (this.DF_MinIntegerDigits > 0) {
this.invalidPattern=true;
this.intMsgFail=hX_4.INTERR_Format_ZSymbol;
break;
}
this.DF_MinIntegerDigits++;
bInMaxInteger=false; bInMinInteger=true;
}
if (bInMaxInteger || bInMinInteger)	this.DF_GroupingSize++;
} else if (xchar == hX_4._LB) {
if (bInMinInteger || bInExponent) {
this.invalidPattern=true;
this.intMsgFail=hX_4.INTERR_Format_LSymbol;
break;
} else if (bInMaxInteger) {
this.DF_MaxIntegerDigits++;
} else if (bInMaxFraction) {
this.DF_MaxFractionDigits++;
} else if (bInMinFraction) {
this.DF_MaxFractionDigits++;
bInMinFraction=false; bInMaxFraction=true;
} else {
this.DF_MaxIntegerDigits++;
bInMaxInteger=true;
}
if (bInMaxInteger || bInMinInteger)	this.DF_GroupingSize++;
} else if (xchar == hX_4._C) {
if (!bInMinInteger && !bInMaxInteger) {
this.invalidPattern=true;
this.intMsgFail=hX_4.INTERR_Format_Group + bInMaxInteger + hX_4._P;
break;
}
if (bInMaxInteger || bInMinInteger)	{
this.DF_GroupingSecSize=this.DF_GroupingSize;
this.DF_GroupingSize=0;
}
bHaveGroup=true;
} else if (xchar == hX_4._P) {
if (bInExponent || this.DF_IsDecimalShown) {
this.invalidPattern=true;
this.intMsgFail=hX_4.INTERR_Format_Decimal;
break;
}
bInMinInteger=false; bInMaxInteger=false; bInMinFraction=true;
this.DF_IsDecimalShown=true;
} else if (xchar == this.hardE) {
if (this.isExponent || (!bInMinInteger && !bInMaxInteger && !bInMinFraction && !bInMaxFraction)) {
this.invalidPattern=true;
this.intMsgFail=hX_4.INTERR_Format_Exponent;
break;
}
bInMinInteger=bInMaxInteger=bInMinFraction=bInMaxFraction=false;
bInExponent=true;
this.isExponent=true;
if (this.ICU4J && fmt.charAt(index+1) == this.hardPlus) {
this.isExponentSigned=true;
index++;
}
}
}
}
}
}
this.DF_MaxIntegerDigits+=this.DF_MinIntegerDigits;
this.DF_MaxFractionDigits+=this.DF_MinFractionDigits;
if (!bHaveGroup || this.isExponent) this.DF_GroupingSize=this.DF_GroupingSecSize=0;
if (this.DF_GroupingSize > 0) {
if (!this.ICU4J || this.DF_GroupingSecSize==0)
this.DF_GroupingSecSize=this.DF_GroupingSize;
}
if (this.isPercent && this.isMille) {
this.invalidPattern=true;
this.intMsgFail=hX_4.INTERR_Format_Percent;
}
if (this.DF_PaddingPos)	this.DF_PaddingLeft=this.DF_PaddingRight=hX_4._E;
if (!this.invalidPattern) {
var pre, post, dec, exp, com=0;
if (this.isExponent) {
pre=Math.max(this.DF_NegativePrefix.length, this.DF_PositivePrefix.length);
post=Math.max(this.DF_NegativeSuffix.length, this.DF_PositiveSuffix.length);
dec=(this.DF_IsDecimalShown) ? this.LC_decimalSymbol.length : 0;
exp=this.DF_MinExponentDigits + ((this.isExponentSigned)?1:0);
this.DF_MaxLength=pre + this.DF_MaxIntegerDigits + dec + this.DF_MaxFractionDigits + 1 + exp + post;
this.DF_MaxPadLength=this.DF_PositivePrefix.length + this.DF_MaxIntegerDigits + dec + this.DF_MaxFractionDigits + 1 + exp + this.DF_PositiveSuffix.length;
} else {
pre=Math.max(this.DF_NegativePrefix.length, this.DF_PositivePrefix.length);
post=Math.max(this.DF_NegativeSuffix.length, this.DF_PositiveSuffix.length);
dec=(this.DF_IsDecimalShown) ? this.LC_decimalSymbol.length : 0;
if (this.DF_GroupingSize == 0 || this.DF_GroupingSize > this.DF_MaxIntegerDigits)
com=0;
else if (this.DF_GroupingSize == this.DF_GroupingSecSize)
com=Math.floor((this.DF_MaxIntegerDigits-1)/this.DF_GroupingSize);
else {
i=this.DF_MaxIntegerDigits; j=this.DF_GroupingSize;
while (i > j) {
com++;
i -= j;
j=(j == this.DF_GroupingSize) ? this.DF_GroupingSecSize : this.DF_GroupingSize;
}
}
this.DF_MaxLength=pre + this.DF_MaxIntegerDigits + com + dec + this.DF_MaxFractionDigits + post;
this.DF_MaxPadLength=this.DF_PositivePrefix.length + this.DF_MaxIntegerDigits + com + dec + this.DF_MaxFractionDigits + this.DF_PositiveSuffix.length;
}
if (!this.DF_NegativePattern) this.DF_MaxLength++;
if (!this.DF_NegativePattern) this.DF_MaxPadLength++;
}
}
HxG_4.prototype.NumberConverter.prototype.addToPreSuf=function (bInPositivePattern, bInPrefix, bInQuote, c) {
var xchar=c;
if (!bInQuote && hX_4.isChar(xchar, this.PREChars)) {
if (xchar == hX_4.STR_percent_char) {
xchar=this.LC_percentSymbol;
this.isPercent=true;
} else if (xchar == hX_4.STR_mille_char){
xchar=this.LC_milleSymbol;
this.isMille=true;
} else if (xchar == hX_4.STR_icurrency_char) {
xchar=this.LC_currencySymbol;
}
}
if (bInPositivePattern) {
if (bInPrefix)
this.DF_PositivePrefix=this.DF_PositivePrefix + xchar;
else
 this.DF_PositiveSuffix=this.DF_PositiveSuffix + xchar;
} else {
if (bInPrefix)
this.DF_NegativePrefix=this.DF_NegativePrefix + xchar;
else
 this.DF_NegativeSuffix=this.DF_NegativeSuffix + xchar;
}
}
HxG_4.prototype.NumberConverter.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.NumberConverter.prototype.lastError=function () {
return ((this.msgFail && this.msgFail.length > 0) ? this.msgFail : null);
}
HxG_4.prototype.NumberConverter.prototype.getMaxLength=function (v) {
if (!this.DF_NegativePattern && v && this.DF_MaxLength>1)
return ((v.validate(-1, this) || v.validate(-10, this))?this.DF_MaxLength:this.DF_MaxLength-1);
return this.DF_MaxLength;
}
HxG_4.prototype.NumberConverter.prototype.genAssistMasks=function() {
var args=[], pop=false;
if (this.nStrict)	args.push("strict:" +this.nStrict);
if (this.locale)	args.push("locale:" +this.locale);
if (this.digitFirst)args.push("digits:" +this.digitFirst);
if (this.ICU4J)		args.push("icu4j:"  +this.ICU4J);
if (this.DF_NegativePattern) {
if  (this.DF_PaddingLeft.length==0 && this.DF_PaddingRight.length==0) {
this.signedConverter=this;
} else {
if (this.upattern)	args.push("pattern:"+this.upattern);
pop=true;
this.signedConverter=new hX_4.NumberConverter(args[0],args[1],args[2],((args.length>3)?args[3]:null),((args.length>4)?args[4]:null),((args.length>5)?args[5]:null));
}
} else {
if (this.upattern)	args.push("pattern:"+this.upattern + hX_4._SM + this.LC_minusSymbol + this.upattern);
pop=true;
this.signedConverter=new hX_4.NumberConverter(args[0],args[1],args[2],((args.length>3)?args[3]:null),((args.length>4)?args[4]:null),((args.length>5)?args[5]:null));
}
var p1=hX_4._E, p=this.signedConverter.upattern;
p=hX_4.replaceAll(p, hX_4._Z,hX_4._LB);
var k=p.indexOf(hX_4._SM);
if (k >= 0) {
p1=p.substr(k);
p=p.substr(0,k);
}
k=p.indexOf(hX_4._P);
if (k > 0 && p.charAt(k-1)==hX_4._LB)
p=p.substr(0,k-1) + hX_4._Z + p.substr(k);
else if (k < 0) {
k=p.length-1;
while (k >= 0 && p.charAt(k) != hX_4._LB) k--;
p=p.substr(0,k) + hX_4._Z + p.substr(k+1);
}
if (p1.length > 0) {
k=p1.indexOf(hX_4._P);
if (k > 0 && p1.charAt(k-1)==hX_4._LB)
p1=p1.substr(0,k-1) + hX_4._Z + p1.substr(k);
else if (k < 0) {
k=p1.length-1;
while (k >= 0 && p1.charAt(k) != hX_4._LB) k--;
p1=p1.substr(0,k) + hX_4._Z + p1.substr(k+1);
}
}
p=p+p1;
if (pop) args.pop();
args.push("pattern:"+p);
this.zeroConverter=new hX_4.NumberConverter(args[0],args[1],args[2],((args.length>3)?args[3]:null),((args.length>4)?args[4]:null),((args.length>5)?args[5]:null));
}
HxG_4.prototype.NumberConverter.prototype.stringToValue=function (numString, promptChar) {
this.msgFail=this.intMsgFail=hX_4._E;
var argsFail=[numString];
if (numString == null || hX_4.isUnDef(typeof(numString)) || !hX_4.isString(numString)) {
this.msgFail=hX_4.ERR_empty;
return null;
}
if (this.invalidPattern) {
this.msgFail=hX_4.ERR_number_fail;
return null;
}
var sNum=hX_4.Trim(numString);
if (this.DF_PaddingPos == 1) sNum=hX_4.trimL(sNum, this.DF_PaddingChar);
if (this.DF_PaddingPos == 4) sNum=hX_4.trimR(sNum, this.DF_PaddingChar);
if (this.DF_PaddingRight.length > 0 && this.DF_PaddingLeft.length > 0 && this.DF_PaddingRight == hX_4._B && this.DF_PaddingLeft == this.DF_PaddingRight)
sNum=numString;
if (sNum.length==0) {
this.msgFail=hX_4.ERR_empty;
return null;
}
var i, j, sign=+1;
var preposmatch=false, prenegmatch=false, postposmatch=false, postnegmatch=false;
var nopos=this.DF_PositivePrefix.length == 0 && this.DF_PositiveSuffix.length == 0;
var noneg=this.DF_NegativePrefix.length == 0 && this.DF_NegativeSuffix.length == 0;
if ((!this.DF_NegativePattern) && sNum.charAt(0) == this.LC_minusSymbol) {
sNum=sNum.substr(1);
sign=-1;
prenegmatch=true;
postnegmatch=true;
}
if (sign > 0 && nopos && sNum.charAt(0) == this.hardPlus) {
sNum=sNum.substr(1);
preposmatch=true;
postposmatch=true;
}
var pre, post, match=false;
if (!noneg) {
pre=hX_4.Trim(this.DF_NegativePrefix.toUpperCase());
post=hX_4.Trim(this.DF_NegativeSuffix.toUpperCase());
prenegmatch=!(pre.length > 0);
postnegmatch=!(post.length > 0);
if (!prenegmatch && sNum.length >= pre.length && pre == (sNum.substr(0,pre.length)).toUpperCase())
prenegmatch=true;
if (!postnegmatch && sNum.length >= post.length && post == (sNum.substr(sNum.length-post.length)).toUpperCase())
postnegmatch=true;
if (prenegmatch && postnegmatch) {
match=true;
sNum=sNum.substr(pre.length);
sNum=sNum.substr(0,sNum.length-post.length);
}
}
if (!nopos && !match) {
pre=hX_4.Trim(this.DF_PositivePrefix.toUpperCase());
post=hX_4.Trim(this.DF_PositiveSuffix.toUpperCase());
preposmatch=!(pre.length > 0);
postposmatch=!(post.length > 0);
if (!preposmatch && sNum.length >= pre.length && pre == (sNum.substr(0,pre.length)).toUpperCase())
preposmatch=true;
if (!postposmatch && sNum.length >= post.length && post == (sNum.substr(sNum.length-post.length)).toUpperCase())
postposmatch=true;
if (preposmatch && postposmatch) {
match=true;
sNum=sNum.substr(pre.length);
sNum=sNum.substr(0,sNum.length-post.length);
}
}
if (!match && noneg && this.DF_NegativePattern)
prenegmatch=postnegmatch=match=true;
if (prenegmatch && postnegmatch)
sign=-1;
else if (preposmatch && postposmatch)
sign=+1;
else if (!noneg || !nopos) {
if (this.nStrict > 1) {
if (!noneg && !nopos)
this.msgFail=hX_4.ERR_number_fail;
}
}
if (this.msgFail.length == 0) {
var left, right;
if (promptChar)
sNum=hX_4.replaceAll(sNum, promptChar, hX_4._B);
sNum=hX_4.Trim(sNum);
if (this.DF_PaddingPos >= 1 && this.DF_PaddingPos <= 2) sNum=hX_4.trimL(sNum, this.DF_PaddingChar);
if (this.DF_PaddingPos >= 3 && this.DF_PaddingPos <= 4) sNum=hX_4.trimR(sNum, this.DF_PaddingChar);
j=sNum.indexOf(this.LC_decimalSymbol);
if (j >= 0) {
left=sNum.substr(0,j);
right= sNum.substr(j+1);
} else {
if (this.isExponent) {
sNum=sNum.toUpperCase();
j=sNum.indexOf(this.hardE);
if (j >= 0) {
left=sNum.substr(0,j);
right= sNum.substr(j);
} else {
left=sNum;
right=hX_4._E;
}
} else {
left=sNum;
right=hX_4._E;
}
}
if (this.DF_PaddingLeft.length > 0 && this.DF_PaddingLeft != this.LC_paddingChar) 	left=hX_4.trimL(left, this.DF_PaddingLeft);
if (this.DF_PaddingPos >= 1 && this.DF_PaddingPos <= 2) 							left=hX_4.trimL(left, this.DF_PaddingChar);
if (this.DF_PaddingRight.length > 0 && this.DF_PaddingRight != this.LC_paddingChar)	right= hX_4.trimR(right, this.DF_PaddingRight);
if (this.DF_PaddingPos >= 3 && this.DF_PaddingPos <= 4) 							right= hX_4.trimR(right, this.DF_PaddingChar);
left=(left.length==0) ? hX_4._Z:left;
var leftc=hX_4._E, rightc=hX_4._E;
while (left.length > 0) {
if (this.matchDigit(left)) {
leftc=leftc + this.getDigit(left);
left=left.substr(1);
} else if (!this.isExponent && left.charAt(0) == this.LC_groupingSymbol) {
left=left.substr(1);
} else {
argsFail[1]=left.charAt(0);
this.msgFail=hX_4.ERR_number_char;
break;
}
}
var bE=false, bS=false;
while ((this.msgFail.length == 0) && (right.length > 0)) {
if (this.matchDigit(right)) {
rightc=rightc + this.getDigit(right);
right=right.substr(1);
} else if (this.isExponent) {
if ((!bE && right.charAt(0) == this.hardE) ||
((!bS && (right.charAt(0) == this.LC_minusSymbol || right.charAt(0) == this.hardMinus || right.charAt(0) == this.hardPlus)))) {
if (right.charAt(0) == this.hardE)
bE=true;
else
 bS=true;
rightc=rightc + right.charAt(0);
right=right.substr(1);
} else {
argsFail[1]=right.charAt(0);
this.msgFail=hX_4.ERR_number_char;
break;
}
} else {
argsFail[1]=right.charAt(0);
this.msgFail=hX_4.ERR_number_char;
break;
}
}
if ((this.msgFail.length == 0) && (leftc.length == 0) && (rightc.length==0))
this.msgFail=hX_4.ERR_empty;
var r, o;
if (this.msgFail.length == 0 && this.isExponent) {
rightc=(rightc.length == 0) ? hX_4._Z : rightc;
sNum=((sign < 0) ? this.hardMinus:hX_4._E) + leftc + this.LC_decimalSymbol + rightc;
r=new Number(sNum);
if (isNaN(r))
r=null;
if (r == null)
this.msgFail=hX_4.ERR_number_fail;
} else if (this.msgFail.length == 0) {
if (leftc.length == 0)		leftc=hX_4._Z;
if (rightc.length == 0)		rightc=hX_4._Z;
if (isNaN(leftc))			leftc=hX_4._Z;
if (isNaN(rightc))			rightc=hX_4._Z;
while (leftc.length + rightc.length > 17) {
if (rightc.length > 0)
rightc=rightc.substr(0,rightc.length-1);
else
 leftc=leftc.substr(1);
}
o=leftc + hX_4._P + rightc;
r=new Number(o);
if (isNaN(r))
r=null;
if (r == null) {
this.msgFail=hX_4.ERR_number_fail;
} else {
if (this.isPercent) r=r/100;
if (this.isMille)   r=r/1000;
r=r * sign;
}
}
}
if (this.msgFail.length > 0) {
this.msgFail=hX_4.NLSFormatMsg (this.msgFail, argsFail);
return null;
}
return (r);
}
HxG_4.prototype.NumberConverter.prototype.matchDigit=function (str) {
if (str.length > 0) {
if (hX_4.WDIGITS.indexOf(str.charAt(0)) >= 0) return true;
if (this.xDigits != null && this.xDigits.indexOf(str.charAt(0)) >= 0) return true;
}
return false;
}
HxG_4.prototype.NumberConverter.prototype.getDigit=function (str) {
if (this.xDigits == null) return (str.charAt(0));
if (hX_4.WDIGITS.indexOf(str.charAt(0)) >= 0) return (str.charAt(0));
return (hX_4.WDIGITS.charAt(str.charCodeAt(0) - this.xDigits.charCodeAt(0)));
}
HxG_4.prototype.NumberConverter.prototype.convertToDigits=function (str) {
if (this.xDigits == null) return str;
var r=hX_4._E;
while (str.length > 0) {
if (hX_4.WDIGITS.indexOf(str.charAt(0)) >= 0) r=r + this.xDigits.charAt(str.charCodeAt(0)-hX_4.WDIGITS.charCodeAt(0));
else r=r + str.charAt(0);
str=str.substr(1);
}
return r;
}
HxG_4.prototype.NumberConverter.prototype.getZeroDigit=function () {
return (this.zeroDigit);
}
HxG_4.prototype.NumberConverter.prototype.isZeroDigit=function (c) {
return (c==hX_4._Z || c==this.zeroDigit);
}
HxG_4.prototype.NumberConverter.prototype.markDecimal=function (str) {
for (var i=0; i < str.length; i++) {
if (!this.matchDigit(str.charAt(i)))
return i;
}
return -1;
}
HxG_4.prototype.NumberConverter.prototype.valueToString=function (numValue, promptChar) {
this.msgFail=hX_4._E;
if (numValue == null || numValue == 'undefined' || isNaN(numValue) || this.invalidPattern)
return hX_4._E;
var strValue=null, i, j, n, g, zero, sign=((numValue >= 0) ? +1 : -1), abs=Math.abs(numValue);
if (this.isExponent) {
var nExp=0, fMant=hX_4._E, dMant=hX_4._E, expnum=new String(abs);
expnum=expnum.toUpperCase();
i=expnum.indexOf(this.hardE);
if (i >= 0) {
nExp=new Number(expnum.substr(i+1));
expnum=expnum.substr(0,i);
}
i=expnum.indexOf(this.LC_decimalSymbol);
i=(i < 0) ? expnum.indexOf(hX_4._P) : i;
dMant=expnum;
if (i >= 0) {
dMant=expnum.substr(0,i);
fMant=expnum.substr(i+1);
}
while (dMant.length > 0 && this.isZeroDigit(dMant.charAt(0))) dMant=dMant.substr(1);
while (fMant.length > 0 && this.isZeroDigit(fMant.charAt(fMant.length-1))) fMant=fMant.substr(0, fMant.length-1);
var sci=(this.DF_MaxIntegerDigits > this.DF_MinIntegerDigits) && (this.DF_MaxIntegerDigits > 1);
zero=(dMant.length==0 && fMant.length==0);
var tmp_DF_MinIntegerDigits=(!sci) ? this.DF_MinIntegerDigits : ((this.DF_MinIntegerDigits > 0) ? 1: 0);
var e=(zero) ? 0 : tmp_DF_MinIntegerDigits - dMant.length;
for (i=0; dMant.length==0 && i < fMant.length && this.isZeroDigit(fMant.charAt(i)); i++)	e++;
nExp -= e;
if (sci) {
var eToBe=(nExp<0) ?  ((Math.ceil (Math.abs(nExp)/this.DF_MaxIntegerDigits)) * -this.DF_MaxIntegerDigits) :
((Math.floor(Math.abs(nExp)/this.DF_MaxIntegerDigits)) *  this.DF_MaxIntegerDigits);
e=e + (nExp - eToBe);
nExp=eToBe;
}
if (e > 0) {
fMant=hX_4.padR(fMant,e);
dMant=dMant + fMant.substr(0,e);
fMant=fMant.substr(e);
} else if (e < 0) {
fMant=dMant.substr(dMant.length+e) + fMant;
dMant=dMant.substr(0,dMant.length+e);
}
var exp=(Math.abs(nExp)).toString();
exp=this.hardE + ((nExp >= 0) ? (this.isExponentSigned?this.hardPlus:hX_4._E):this.LC_minusSymbol) + hX_4.padL(exp, this.DF_MinExponentDigits);
while (dMant.length > tmp_DF_MinIntegerDigits  && this.isZeroDigit(dMant.charAt(0))) dMant=dMant.substr(1);
var sigDigits=this.DF_MaxIntegerDigits  - dMant.length +
((this.DF_MinFractionDigits==0 || 1==1) ? this.DF_MaxFractionDigits : this.DF_MinFractionDigits);
var fM=hX_4.truncateRoundHalfEven(fMant, sigDigits);
fMant=fM.value;
if (fM.overflow) {
n=new Number(dMant) + 1;
dMant=((sign < 0)?this.hardMinus:hX_4._E) + n.toString() + hX_4._P + fMant + exp;
n=new Number(dMant);
return (this.valueToString (n));
} else {
sigDigits=(zero) ? this.DF_MinFractionDigits : ((!sci) ? this.DF_MinFractionDigits : (this.DF_MinIntegerDigits + this.DF_MinFractionDigits - dMant.length));
dMant=hX_4.padL(dMant, tmp_DF_MinIntegerDigits);
fMant=hX_4.padR(fMant, sigDigits);
while (fMant.length > sigDigits  && this.isZeroDigit(fMant.charAt(fMant.length-1))) fMant=fMant.substr(0,fMant.length-1);
strValue=(fMant.length == 0 || !this.DF_IsDecimalShown) ? (dMant + exp) : (dMant + this.LC_decimalSymbol + fMant + exp);
}
} else {
var left=Math.floor(abs), right=abs - left;
var fR, nR, nL, fullstring=abs.toString(), fullleft=fullstring, fullright=hX_4._E, q=this.markDecimal(fullstring);
if (q >= 0) {
fullleft=fullstring.substr(0,q);
fullright=fullstring.substr(q+1);
}
left=left.toString();
right=right.toString();
right=right.substr(this.markDecimal(right)+1);
if (right != fullright && !(right.length==1 && this.isZeroDigit(right))) {
if (fullright.length < right.length)
right=fullright;
}
if (this.isPercent) {
right=hX_4.padR(right,2);
left=left + right.substr(0,2);
right=right.substr(2);
} else if (this.isMille) {
right=hX_4.padR(right,3);
left=left + right.substr(0,3);
right=right.substr(3);
}
if (right.length > this.DF_MaxFractionDigits) {
fR=hX_4.truncateRoundHalfEven(right, this.DF_MaxFractionDigits);
right=fR.value;
if (fR.overflow) {
n=new Number(left);
n=(n+1);
left=n.toString();
}
}
right=hX_4.padR(right, this.DF_MinFractionDigits, this.LC_paddingChar);
left=hX_4.padL(left,  this.DF_MinIntegerDigits, this.LC_paddingChar);
while (left.length  > this.DF_MinIntegerDigits  && left.charAt(0) == this.LC_paddingChar) left=left.substr(1);
while (right.length > this.DF_MinFractionDigits && right.charAt(right.length-1) == this.LC_paddingChar) right=right.substr(0,right.length-1);
nR=new Number(right); nL=new Number(left);
zero=(nR == 0) && (nL == 0);
var zR=this.LC_paddingChar, zL=zR, zZ=false;
if (this.DF_PaddingLeft.length > 0) {
zL=(this.DF_PaddingLeft.length > 0) ? this.DF_PaddingLeft : this.LC_paddingChar;
zR=(this.DF_PaddingRight.length > 0) ? this.DF_PaddingRight : this.LC_paddingChar;
zZ=(this.DF_PaddingLeft.length > 0) && (this.DF_PaddingRight.length > 0) && (this.DF_PaddingLeft == this.DF_PaddingRight);
if (zL != this.LC_paddingChar) {
if (zero && zZ) {
left=hX_4.padR(hX_4._E, this.DF_MinIntegerDigits, zL);
right=hX_4.padR(hX_4._E, this.DF_MinFractionDigits, zL);
} else {
for (i=0; i < left.length; i++) {
if (left.charAt(i) != this.LC_paddingChar) break;
left=left.substr(0,i) + zL + left.substr(i+1);
}
}
}
if (zR != this.LC_paddingChar) {
for (i=right.length-1; i >= 0; i--) {
if (right.charAt(i) != this.LC_paddingChar) break;
right=right.substr(0,i) + zR + right.substr(i+1);
}
}
}
if (promptChar) {
if (left.length > 0 && left.length > this.DF_MaxIntegerDigits)
left=left.substr(left.length-this.DF_MaxIntegerDigits);
if (right.length > 0 && right.length > this.DF_MaxFractionDigits)
right=right.substr(0, this.DF_MaxFractionDigits);
while (left.length  > this.DF_MinIntegerDigits  && left.charAt(0) == zL) left=left.substr(1);
while (right.length > this.DF_MinFractionDigits && right.charAt(right.length-1) == zR) right=right.substr(0,right.length-1);
left=hX_4.padL(left,  this.DF_MaxIntegerDigits, promptChar);
right=hX_4.padR(right, this.DF_MaxFractionDigits, promptChar);
}
if (this.xDigits != null) {
left=this.convertToDigits(left);
right= this.convertToDigits(right);
}
j=0;
strValue=left;
if (this.DF_GroupingSize > 0) {
strValue=hX_4._E; g=this.DF_GroupingSize;
for (i=left.length-1; i >= 0; i--) {
if (j==g) {
if (promptChar)
strValue=((left.charAt(i)==promptChar) ? hX_4._E : this.LC_groupingSymbol) + strValue;
else if (zL != this.LC_paddingChar)
strValue=((left.charAt(i)==zL) ? zL : this.LC_groupingSymbol) + strValue;
else
 strValue=this.LC_groupingSymbol + strValue;
j=0; g=(g==this.DF_GroupingSize) ? this.DF_GroupingSecSize:this.DF_GroupingSize;
}
strValue=left.charAt(i) + strValue;
j++;
}
}
if (this.DF_IsDecimalShown) {
if (zero && zZ && zL != this.LC_paddingChar)
strValue=strValue + zL + right;
else
 strValue=strValue + this.LC_decimalSymbol + right;
}
}
if (sign > 0 || zero)
strValue=this.DF_PositivePrefix + strValue + this.DF_PositiveSuffix;
else
 strValue=(!this.DF_NegativePattern) ? (this.LC_minusSymbol + this.DF_PositivePrefix + strValue + this.DF_PositiveSuffix) : (this.DF_NegativePrefix + strValue + this.DF_NegativeSuffix);
if (this.DF_PaddingPos > 0) {
if (this.DF_PaddingPos == 1) strValue=hX_4.padL(strValue, this.DF_MaxPadLength, this.DF_PaddingChar);
if (this.DF_PaddingPos == 4) strValue=hX_4.padR(strValue, this.DF_MaxPadLength, this.DF_PaddingChar);
if (this.DF_PaddingPos == 2) {
if (sign > 0 || zero) {
if (this.DF_PositivePrefix.length == 0) strValue=hX_4.padL(strValue, this.DF_MaxPadLength, this.DF_PaddingChar);
else strValue=this.DF_PositivePrefix + hX_4.padL(strValue.substr(this.DF_PositivePrefix.length), this.DF_MaxPadLength-this.DF_PositivePrefix.length, this.DF_PaddingChar);
} else {
if (!this.DF_NegativePattern && this.DF_PositivePrefix.length > 0) strValue=hX_4.padL(strValue.substr(this.DF_PositivePrefix.length), this.DF_MaxPadLength-1-this.DF_PositivePrefix.length, this.DF_PaddingChar);
else if (this.DF_NegativePrefix.length == 0) strValue=hX_4.padL(strValue, this.DF_MaxPadLength, this.DF_PaddingChar);
else strValue=this.DF_NegativePrefix + hX_4.padL(strValue.substr(this.DF_NegativePrefix.length), this.DF_MaxPadLength-this.DF_NegativePrefix.length, this.DF_PaddingChar);
}
}
if (this.DF_PaddingPos == 3) {
if (sign > 0 || zero) {
if (this.DF_PositiveSuffix.length == 0) strValue=hX_4.padR(strValue, this.DF_MaxPadLength, this.DF_PaddingChar);
else strValue=hX_4.padR(strValue.substr(0,strValue.length-this.DF_PositiveSuffix.length), this.DF_MaxPadLength-this.DF_PositiveSuffix.length, this.DF_PaddingChar) + this.DF_PositiveSuffix;
} else {
if (!this.DF_NegativePattern && this.DF_PositiveSuffix.length > 0) strValue=hX_4.padR(strValue.substr(0,strValue.length-this.DF_PositiveSuffix.length), this.DF_MaxPadLength-this.DF_PositiveSuffix.length, this.DF_PaddingChar) + this.DF_PositiveSuffix;
else if (this.DF_NegativeSuffix.length == 0) strValue=hX_4.padR(strValue, this.DF_MaxPadLength, this.DF_PaddingChar);
else strValue=hX_4.padR(strValue.substr(0,strValue.length-this.DF_NegativeSuffix.length), this.DF_MaxPadLength-this.DF_NegativeSuffix.length, this.DF_PaddingChar) + this.DF_NegativeSuffix;
}
}
}
return strValue;
}
HxG_4.prototype.NumberConverter.prototype.constantToValue=function (sNum) {
var o, j, left, right, sign=1, str=sNum;
if (sNum.charAt(0) == this.hardMinus) {
sign=-1;
str=sNum.substr(1);
}
j=str.indexOf(hX_4._P);
if (j >= 0) {
left=str.substr(0,j);
right= str.substr(j+1);
} else {
left=str;
right=hX_4._Z;
}
if (left.length == 0)	left=hX_4._Z;
if (right.length == 0)	right=hX_4._Z;
o=left + hX_4._P + right;
return ((new Number(o))*sign);
}
HxG_4.prototype.NumberConverter.prototype.valueToConstant=function (nNum) {
return (null);
}
HxG_4.prototype.NumberValidator=function () {
this.type=hX_4.CVT_number;
this.minimumBound=this.maximumBound=this.minimum=this.maximum=this.required=null;
this.ELexpression=this.ELexpressionImp=this.modulus =null;
this.msgFail=hX_4._E;
this.attributeTable=[];
this.attributeTable ['required']=['required',		hX_4.ARG_IS_TRUE,	false, null, null];
this.attributeTable ['modulus']=['modulus',		hX_4.ARG_TO_NAN,	false,	null, null];
this.attributeTable	['minimum-bound']=['minimumBound',	hX_4.ARG_TO_BIGNUM,	false,	-999999999999999,999999999999999];
this.attributeTable	['min-bound']=['minimumBound',	hX_4.ARG_TO_BIGNUM,	false,	-999999999999999,999999999999999];
this.attributeTable	['maximum-bound']=['maximumBound',	hX_4.ARG_TO_BIGNUM,	false,	-999999999999999,999999999999999];
this.attributeTable	['max-bound']=['maximumBound',	hX_4.ARG_TO_BIGNUM,	false,	-999999999999999,999999999999999];
this.attributeTable	['constraint-expression']=['ELexpression',	hX_4.ARG_TO_NAN,	false,	null, null];
this.setAttribute(arguments);
}
HxG_4.prototype.NumberValidator.prototype.setAttribute=function(a) {
var wasmax=this.maximumBound, wasmin=this.minimumBound;
hX_4.parseArg (this.attributeTable, this, a);
if (this.minimumBound != null && (wasmin == null || wasmin != this.minimumBound)) this.minimum=new Number(this.minimumBound);
if (this.maximumBound != null && (wasmax == null || wasmax != this.maximumBound)) this.maximum=new Number(this.maximumBound);
if (this.maximum && this.minimum)
if (this.minimum >= this.maximum) this.minimumBound=this.maximumBound=this.minimum=this.maximum=null;
if (this.ELexpression != null) this.ELexpressionImp=hX_4.regExp.registerELConstraint(this.ELexpression);
if (this.modulus != null) if (this.modulus != "10" && this.modulus != "11") this.modulus=null;
return true;
}
HxG_4.prototype.NumberValidator.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.NumberValidator.prototype.lastError=function () {
return ((this.msgFail && this.msgFail.length > 0) ? this.msgFail : null);
}
HxG_4.prototype.NumberValidator.prototype.validate=function (testnum, iNP) {
this.msgFail=hX_4._E;
var e, r, test=null, NP=(iNP != null) ? hX_4.getConverterById(iNP) : null;
if (NP == null || !hX_4.isObject (NP)) {
this.msgFail=hX_4.ERR_required;
return false;
}
if (testnum == null || hX_4.isString(testnum)) {
r=!(this.required);
if (testnum == null) {
this.msgFail=(r) ? hX_4._E : hX_4.ERR_required;
return r;
}
e=hX_4.allTrim (testnum);
if (e.length == 0) {
this.msgFail=(r) ? hX_4._E : hX_4.ERR_required;
return r;
}
test=NP.stringToValue(e);
} else test=testnum;
if (test == null || isNaN (test)) {
this.msgFail=hX_4.ERR_required;
return false;
}
if (this.minimum && test < this.minimum) {
this.msgFail=hX_4.ERR_minimum;
return false;
}
if (this.maximum && test > this.maximum) {
this.msgFail=hX_4.ERR_maximum;
return false;
}
if (this.ELexpressionImp != null) {
if (!hX_4.regExp.testELExp(test, this.ELexpressionImp)) {
this.msgFail=hX_4.ERR_constraint;
return false;
}
}
if (this.modulus) {
this.msgFail=hX_4.ERR_constraint;
var c, exp, strnum=hX_4._E, strnum1=NP.valueToString(test);
exp=hX_4.regExp.getRegExpByName("DigitOnly");
while (strnum1.length > 0) {
if (hX_4.regExp.testRegExp(strnum1.charAt(0),exp))
strnum=strnum + strnum1.charAt(0);
strnum1=strnum1.substr(1);
}
if (strnum.length < 2) return false;
var sum=0, sum10=0, chk=parseInt(strnum.charAt(strnum.length-1),10),  bas=strnum.substr(0, strnum.length-1);
if (this.modulus == "10") {
var odd=true;
while (bas.length > 0) {
c=parseInt(bas.charAt(bas.length-1,10));
c=(!odd) ? c : ((c<5)?(c*2):(((c-5)*2)+1));
sum=sum + c;
odd=!odd;
bas=bas.substr(0,bas.length-1);
}
sum10=(Math.floor((sum-1)/10)+1)*10;
} else if (this.modulus == "11") {
var w=2;
while (bas.length > 0) {
c=parseInt(bas.charAt(bas.length-1,10));
sum=sum + (c*w);
w=(w >= 7) ? 2 : w+1;
bas=bas.substr(0,bas.length-1);
}
sum10=(Math.floor((sum-1)/11)+1)*11;
}
if ((sum10-sum) != chk) return false;
this.msgFail=hX_4._E;
}
return true;
}
HxG_4.prototype.NumberValidator.prototype.coerce=function (testnum, iNP) {
this.msgFail=hX_4._E;
var e, o=null, NP=(iNP != null) ? hX_4.getConverterById(iNP) : null;
if (NP == null || !hX_4.isObject(NP)) {
this.msgFail=hX_4.ERR_required;
return false;
}
if (testnum != null && hX_4.isString(testnum)) {
e=hX_4.allTrim (testnum);
if (e.length > 0) o=NP.stringToValue(e);
} else o=testnum;
if (o == null || isNaN (o)) o=new Number (0);
if (this.minimum && o < this.minimum) o=this.minimum;
if (this.maximum && o > this.maximum) o=this.maximum;
return o;
}
HxG_4.prototype.NumberAssist=function (_elem, _state, _converter, _validator, _promptChar) {
if (!_elem || !_converter || !_state) return;
this.isFilled=isFilled;
this.onFocus=onFocus;
this.onBlur=onBlur;
this.toAssist=toAssist;
this.fromAssist=fromAssist;
this.onClick=onClick;
this.onCut=onCut;
this.onCopy=onCopy;
this.onPaste=onPaste;
this.onChangeKeyCode= onChangeKeyCode;
this.onChangeChrCode= onChangeChrCode;
this.onValidate=onValidate
 var elem=_elem, state=_state, base_converter=_converter, cvt=null, outcvt=null, validator=_validator;
var promptChar=_promptChar, command=hX_4._E, lastCommand=-1, firstCommand=-1, decimalCommand=-1;
var minusSign=null, plusSign="+";
var zero=null;
var zeroS=null;
var negZeroS=null;
var posZeroS=null;
var negNullS=null;
var posNullS=null;
var nullOK=true;
var getCChar=function (i) 	{ return (i < 0 || i >= command.length) ? hX_4._E : command.charAt(i); }
if (base_converter.signedConverter == null) base_converter.genAssistMasks();
outcvt=(base_converter.signedConverter) ? base_converter.signedConverter : base_converter;
cvt=(base_converter.zeroConverter) ? base_converter.zeroConverter : base_converter;
if (validator && (validator.required) != null && validator.required)
nullOK=(cvt.nStrict != null && cvt.nStrict > 1) ? true : false;
minusSign=cvt.LC_minusSymbol;
zero=(validator) ? validator.coerce(0, cvt) : 0;
zeroS=cvt.valueToString(zero, promptChar);
posZeroS=cvt.valueToString(0, promptChar);
negZeroS=cvt.valueToString(-1, promptChar);
zeroS=(nullOK) ? hX_4.replaceAll(posZeroS, cvt.getZeroDigit(), promptChar) : zeroS;
if (nullOK) {
negNullS=hX_4.replaceAll(negZeroS, hX_4._1, promptChar);
posNullS=zeroS;
}
negZeroS=hX_4.replaceAll(negZeroS, hX_4._1, cvt.getZeroDigit());
renewMaskHandler(elem.value);
function handleDelete (evt) {
var v=state.getValue(), pos=state.getPos();
pos=(evt.type==hX_4._evCT) ? (pos) : ((evt.keyCode == hX_4.KEY_BS) ? pos-1 : pos);
if (pos < 0 && !state.hasSel()) return true;
var cR=getCChar(pos);
if (cR != hX_4._LB && !state.hasSel()) {
if (cR==hX_4._EQ && (v.charAt(pos)== cvt.LC_decimalSymbol || v.charAt(pos)==cvt.LC_groupingSymbol) && evt.type!=hX_4._evCT) {
pos=(evt.keyCode == hX_4.KEY_DEL) ? pos+1 : pos;
state.setPos(pos);
return -2;
}
return false;
}
var isLeft=((!cvt.DF_IsDecimalShown) || (pos <= decimalCommand));
if (state.hasSel()) {
var rg=hX_4.sel.getSelectionR(elem);
if ((rg.start <= 0) && (rg.end >= v.length)) {
state.setValue(zeroS);
state.setPos((cvt.DF_IsDecimalShown) ? decimalCommand : lastCommand+1);
} else {
adjRange(rg);
if (cvt.DF_IsDecimalShown && ((v.substring(rg.start,rg.end)).indexOf(cvt.LC_decimalSymbol) >= 0)) {
state.setValue(v.substr(0,rg.start) + cvt.LC_decimalSymbol + v.substr(rg.end));
state.setPos(decimalCommand);
} else {
state.setValue(v.substr(0,rg.start) + v.substr(rg.end));
state.setPos((!cvt.DF_IsDecimalShown) ? rg.end : ((rg.end <= decimalCommand)?rg.end:rg.start));
}
}
} else {
state.setValue (v.substr(0,pos) + v.substr(pos+1));
state.setPos(pos+1+((isLeft)?(0):(-1)));
}
state.setPos (holdCursor(state.getPos(), state.getValue(), isLeft));
return -2;
}
function handleInsert (v, ch, pos, sel) {
var l=v.length, wasV=v, isLeft=((!cvt.DF_IsDecimalShown) || (pos <= decimalCommand));
if (sel) {
var rg=hX_4.sel.getSelectionR(elem);
if ((rg.start <= 0) && (rg.end >= v.length)) {
v=zeroS;
if (cvt.DF_IsDecimalShown) {
v=(ch.length > 1 && ch.indexOf(cvt.LC_decimalSymbol) >= 0) ? v : (v.substr(0,decimalCommand-1) + ch + v.substr(decimalCommand));
pos=decimalCommand;
} else {
v=v.substr(0,lastCommand) + ch + v.substr(lastCommand+1);
pos=lastCommand+1;
}
} else {
adjRange(rg);
if (cvt.DF_IsDecimalShown && ((v.substring(rg.start,rg.end)).indexOf(cvt.LC_decimalSymbol) >= 0)) {
v=(ch.length > 1 && ch.indexOf(cvt.LC_decimalSymbol) >=0) ? (v.substr(0,rg.start) + ch + v.substr(rg.end)) : (v.substr(0,rg.start) + ch + cvt.LC_decimalSymbol + v.substr(rg.end));
pos=decimalCommand;
} else {
v=v.substr(0,rg.start) + ch + v.substr(rg.end);
pos=rg.end;
}
}
state.setPos(holdCursor(pos, v, isLeft));
} else {
var insertMode=false, fillLeft=false, fillRight=false, c=v.charAt(pos);
if (c==promptChar) {
if (isLeft && (pos < l-1) && (v.charAt(pos+1)==promptChar)) fillRight=true;
else if (!isLeft && (v.charAt(pos-1)==promptChar)) fillLeft=true;
}
insertMode=(cvt.DF_IsDecimalShown) ? (c == cvt.LC_decimalSymbol) : (pos > lastCommand);
if (isFilled(pos)) return -2;
if (!insertMode) {
var ip=pos;
if (ch.length <= 1) {
v=v.substr(0,pos) + ch + v.substr(pos+1);
if (pos+1 < lastCommand && getCChar(pos+1) == hX_4._EQ) pos++;
state.setPos(pos+1);
if (fillRight) {
ip++;
while (v.charAt(ip) == promptChar) {
v=v.substr(0,ip) + cvt.getZeroDigit() + v.substr(ip+1);
ip++;
}
} else if (fillLeft) {
ip--;
while (v.charAt(ip) == promptChar) {
v=v.substr(0,ip) + cvt.getZeroDigit() + v.substr(ip+1);
ip--;
}
}
} else {
while (v.charAt(ip)==promptChar && ip < pos+ch.length) ip++;
if (pos!=ip) v=v.substr(0,pos)+v.substr(ip);
v=v.substr(0,pos) + ch + v.substr(pos);
state.setPos(pos);
if (fillRight) {
ip=pos+ch.length;
while (v.charAt(ip) == promptChar) {
v=v.substr(0,ip) + cvt.getZeroDigit() + v.substr(ip+1);
ip++;
}
} else if (fillLeft) {
ip--;
while (v.charAt(ip) == promptChar) {
v=v.substr(0,ip) + cvt.getZeroDigit() + v.substr(ip+1);
ip--;
}
}
}
} else {
c=v.charAt(firstCommand);
if (isLeft && (c==promptChar || cvt.isZeroDigit(c) || c==hX_4._B))
v=v.substr(0,pos) + ch + v.substr(pos);
else
 return false;
}
if (v != wasV) state.setPos(holdCursor(state.getPos(), v, isLeft));
}
state.setValue(v);
return -2;
}
function handleCaretPrev (evt) {
if (evt.shiftKey || state.hasSel())
return -1;
else {
state.setPos(getMovePrevSkipRange(state.getPos()));
return -2;
}
}
function handleCaretNext (evt) {
if (evt.shiftKey || state.hasSel())
return -1;
else {
state.setPos(getMoveNextSkipRange(state.getPos()));
return -2;
}
}
function getMovePrevSkipRange (pos) {
var i, c, v=state.getValue(), l=v.length;
for (i=pos-1; i >= 0; i--) {
c=getCChar(i);
if (c == hX_4._QM || c == hX_4._LB || c == hX_4._EQ) {
i=(i < 0) ? 0 : ((i > l) ? l : i);
return (i);
}
}
return (0);
}
function getMoveNextSkipRange (pos) {
var i, c, v=state.getValue(), l=v.length;
for (i=pos+1; i < l; i++) {
if (i == lastCommand+1)
return i;
c=getCChar(i);
if (c == hX_4._QM || c == hX_4._LB || c == hX_4._EQ) {
i=(i < 0) ? 0 : ((i > l) ? l : i);
return (i);
}
}
return (l);
}
function getMoveNextSkipChar (ch, pos) {
if (ch == cvt.LC_decimalSymbol) {
if (!cvt.DF_IsDecimalShown)
return {hit:true, skip:decimalCommand-pos};
if (pos == decimalCommand)
return {hit:true, skip:decimalCommand-pos+1};
else
 return {hit:true, skip:decimalCommand-pos};
} else if (cvt.DF_GroupingSize > 0 && cvt.LC_groupingSymbol == ch) {
if (pos >= decimalCommand)
return {hit:true, skip:0};
var i, l=command.length, p=(pos >= decimalCommand-cvt.DF_GroupingSize) ? 0 : pos;
for (i=p; i < l; ++i) {
if (getCChar(i) == hX_4._EQ)
return {hit:true, skip:(i - pos + 1)};
}
}
return {hit:false, skip:0};
}
function centerCursor (v, plus) {
var newpos=-1;
if (cvt.DF_IsDecimalShown)
newpos=v.indexOf(cvt.LC_decimalSymbol);
if (newpos < 0) {
newpos=v.length;
if (plus && cvt.DF_PositiveSuffix)
newpos -= cvt.DF_PositiveSuffix.length;
else if ((!plus) && cvt.DF_NegativeSuffix)
newpos -= cvt.DF_NegativeSuffix.length;
newpos=(newpos < 0) ? 0 : newpos;
}
return newpos;
}
function adjRange (rg) {
var pre=0, suff=command.length;
while (pre < suff && (command.charAt(pre) == hX_4._VB || command.charAt(pre) == hX_4._QM)) pre++;
if (command.charAt(suff-1) == hX_4._VB || command.charAt(suff-1) == hX_4._QM) {
suff--;
while (suff >= 0 && (command.charAt(suff) == hX_4._VB || command.charAt(suff) == hX_4._QM)) suff--;
}
rg.start=(rg.start < pre) ? pre : rg.start;
rg.end=(rg.end > (suff+1)) ? (suff+1) : rg.end;
}
function holdCursor (pos, v, isLeft) {
var r=pos, plusPrefix=((cvt.DF_PositivePrefix) ? cvt.DF_PositivePrefix : hX_4._E), minusPrefix=(cvt.DF_NegativePrefix) ? cvt.DF_NegativePrefix : hX_4._E;
if (cvt.DF_GroupingSize > 0 || (plusPrefix.length != minusPrefix.length)) {
var i, oldDigPos=-1, newValue=cvt.stringToValue(v, promptChar);
if (isLeft) {
oldDigPos=0;
for (i=decimalCommand-1; (i >= pos) && (i >= 0); i--) {
if (getCChar(i) != hX_4._EQ) oldDigPos++;
}
}
newValue=cvt.valueToString(newValue, promptChar);
newValue=(newValue == null || newValue.length == 0) ? zeroS : newValue;
if (newValue != null && newValue.length > 0) {
var wasCommand=command;
renewMaskHandler(newValue);
if (oldDigPos < 0)
r=pos + (command.length - wasCommand.length);
else {
r=decimalCommand;
while (oldDigPos > 0 && r > 0) {
r--;
if (getCChar(r) != hX_4._EQ) oldDigPos--;
}
}
}
}
return r;
}
function putNumberToClipboard () {
var v=state.getValue(), rg=hX_4.sel.getSelectionR(elem);
hX_4.clip.valueAsString=v.substring(rg.start,rg.end);
adjRange(rg);
v=v.substring(rg.start,rg.end);
if (cvt.DF_GroupingSize > 0) v=hX_4.replaceAll(v, cvt.LC_groupingSymbol,hX_4._E);
hX_4.clip.valueAsNumber=hX_4.replaceAll(v, promptChar,hX_4._E);
}
function renewMaskHandler (v) {
var i, l=v.length, h=null, c=hX_4._E, prefix=hX_4._E, suffix=hX_4._E, iV=cvt.stringToValue(v, promptChar);
var plus=(iV==null) ? (!(negNullS != null && v == negNullS)) : ((iV == 0) ? (!(negZeroS != null && v == negZeroS)) : (iV > 0));
if (plus) {
prefix=(cvt.DF_PositivePrefix) ? cvt.DF_PositivePrefix : hX_4._E;
suffix=(cvt.DF_PositiveSuffix) ? cvt.DF_PositiveSuffix : hX_4._E;
} else {
prefix=(cvt.DF_NegativePrefix) ? cvt.DF_NegativePrefix : hX_4._E;
suffix=(cvt.DF_NegativeSuffix) ? cvt.DF_NegativeSuffix : hX_4._E;
}
prefix=prefix.length;
suffix=v.length - suffix.length;
lastCommand=0; firstCommand=-1; decimalCommand=-1;
for (i=0; i<l; ++i) {
h=v.charAt(i);
if (i < prefix)
c=c + (((!plus) && h == cvt.LC_minusSymbol) ? hX_4._QM : hX_4._VB);
else if (i >= suffix)
c+=hX_4._VB;
else {
if (cvt.DF_GroupingSize > 0 && h == cvt.LC_groupingSymbol)
c+= hX_4._EQ;
else if (cvt.DF_IsDecimalShown && h == cvt.LC_decimalSymbol) {
c+=hX_4._EQ;
decimalCommand=i;
} else {
c+=hX_4._LB;
firstCommand=(firstCommand < 0) ? i : firstCommand;
lastCommand=i;
}
}
}
decimalCommand=(cvt.DF_IsDecimalShown) ? decimalCommand : suffix;
command=c;
return (plus);
}
function isFilled (curpos) {
renewMaskHandler(elem.value);
var c=(cvt.DF_IsDecimalShown && cvt.DF_MaxFractionDigits>0) ? elem.value.charAt(lastCommand) : elem.value.charAt(firstCommand);
if (c == hX_4._B || c == promptChar)
return false;
return (curpos > lastCommand);
}
function onFocus (evt) {
var newValue=toAssist(elem.value);
renewMaskHandler(newValue.v);
var newpos=centerCursor(newValue.v, (newValue.i>=0));
elem.value=newValue.v;
hX_4.sel.setCaretPos(elem, newpos, null, hX_4.brw.isNavOrMoz());
return true;
}
function toAssist (v) {
var newValue=null, inum=((v.length==0) ? null : base_converter.stringToValue(v));
if (inum == null && nullOK) {
inum=0;
newValue=zeroS;
} else {
inum=(inum==null) ? zero : inum;
var newValueO=outcvt.valueToString(inum, promptChar);
newValue=cvt.valueToString(inum, promptChar);
if (cvt.DF_IsDecimalShown) {
var i=decimalCommand, j=newValueO.indexOf(cvt.LC_decimalSymbol), k=newValue.indexOf(cvt.LC_decimalSymbol);
if (i >= 0 && j >= 0 && k >= 0) {
i++; j++; k++;
while (i < command.length && command.charAt(i) == hX_4._LB && j < newValueO.length && k < newValue.length) {
if (cvt.isZeroDigit(newValueO.charAt(j)) && newValue.charAt(k) == promptChar)
newValue=newValue.substr(0,k) + cvt.getZeroDigit() + newValue.substr(k+1);
i++; j++; k++;
}
}
}
}
newValue=(newValue != null) ? newValue : hX_4._E;
return {v:newValue, i:inum};
}
function onBlur (evt) {
var newValue=fromAssist(elem.value);
if (newValue != null) {
elem.value=newValue;
return true;
}
return false;
}
function fromAssist (v) {
if (v.length==0)
return hX_4._E;
var newValue=outcvt.stringToValue(v, promptChar);
return (newValue != null) ? base_converter.valueToString(newValue) : hX_4._E;
}
function onClick (evt) {
if (state.hasSel())
return true;
var v=state.getValue(), pos=state.getPos();
renewMaskHandler(v);
if (pos <= 0 || pos > (v.length-1))
return true;
var newpos, MoveR=true, cL=getCChar(pos-1), cR=getCChar(pos);
if (cL == hX_4._LB || cR == hX_4._LB ||
cL == hX_4._QM || cR == hX_4._QM ||
cL == hX_4._EQ || cR == hX_4._EQ)
return true;
if (cvt.DF_IsDecimalShown)
MoveR=(pos <= v.indexOf(cvt.LC_decimalSymbol));
newpos=(MoveR) ? getMoveNextSkipRange(pos) : getMovePrevSkipRange(pos);
state.setPos(newpos);
return -2;
}
function onChangeKeyCode (evt) {
renewMaskHandler(state.getValue());
switch (hX_4.getKeyCode(evt)) {
case hX_4.KEY_BS:
case hX_4.KEY_DEL:
return handleDelete(evt);
case hX_4.KEY_LTARROW:
return handleCaretPrev(evt);
case hX_4.KEY_RTARROW:
return handleCaretNext(evt);
}
return true;
}
function onCut (evt) {
if (hX_4.brw.isIE() && state.hasSel()) {
var cutText=hX_4.sel.getSelection(elem);
window.clipboardData.setData("Text", cutText);
putNumberToClipboard();
renewMaskHandler(state.getValue());
return handleDelete(evt);
}
return true;
}
function onCopy (evt) {
if (hX_4.brw.isIE() && state.hasSel())
putNumberToClipboard();
return true;
}
function onPaste (evt) {
if (hX_4.brw.isIE()) {
var d=false, cutText=window.clipboardData.getData("Text"), v=state.getValue(), pos=state.getPos(), sel=state.hasSel();
if (cutText == hX_4.clip.valueAsString)
cutText=hX_4.clip.valueAsNumber;
else {
if (cvt.DF_GroupingSize > 0) cutText=hX_4.replaceAll(cutText,cvt.LC_groupingSymbol,hX_4._E);
cutText=hX_4.replaceAll(cutText,promptChar,hX_4._E);
}
if (sel) {
var rg=hX_4.sel.getSelectionR(elem);
d=(v.substring(rg.start,rg.end).indexOf(cvt.LC_decimalSymbol) >= 0);
}
if (!d) {
d=cutText.indexOf(cvt.LC_decimalSymbol);
cutText=(d < 0) ? cutText : cutText.substr(0,d)+cutText.substr(d+1);
}
return (handleInsert(v, cutText, pos, sel));
}
return true;
}
function onChangeChrCode (evt) {
var ch=hX_4.getChrCode(evt);
if (evt.keyCode == hX_4.KEY_TAB || evt.keyCode == hX_4.KEY_ENTER)
return +2;
var pos=state.getPos(), v=state.getValue(), sel=state.hasSel()
renewMaskHandler(v);
if (ch == minusSign || ch == plusSign) {
var iV=cvt.stringToValue (v, promptChar), posSignLen=0, negSignLen=0;
var isLeft=((!cvt.DF_IsDecimalShown) || (pos <= decimalCommand));
var isNeg=((iV == null && negNullS && v==negNullS) || (iV == 0 && negZeroS && v==negZeroS) || (iV != null && iV != 0 && iV < 0));
if (sel) {
var rg=hX_4.sel.getSelectionR(elem);
isNeg=((rg.start <= 0) && (rg.end >= v.length)) ? false : isNeg;
handleDelete(evt);
pos=state.getPos(); v=state.getValue();
}
iV=cvt.stringToValue (v, promptChar);
iV=(iV != null) ? (iV * -1) : null;
if (iV == null || iV == 0) {
if (pos > 0) {
posSignLen=(cvt.DF_PositivePrefix) ? cvt.DF_PositivePrefix.length : 0;
negSignLen=(cvt.DF_NegativePrefix) ? cvt.DF_NegativePrefix.length : 0;
}
if ((iV == 0 && isNeg) || (iV == null && isNeg)) {
v=(iV==0) ? posZeroS : (posNullS) ? posNullS: posZeroS;
ch=(sel) ? 0 : (posSignLen-negSignLen);
} else {
v=(iV==0) ? negZeroS : (negNullS) ? negNullS : negZeroS;
ch=negSignLen-posSignLen;
}
state.setValue(v);
state.setPos (pos+ch, v, isLeft);
renewMaskHandler(v);
return -2;
} else {
if (pos > 0) {
posSignLen=(cvt.DF_PositivePrefix) ? cvt.DF_PositivePrefix.length : 0;
negSignLen=(cvt.DF_NegativePrefix) ? cvt.DF_NegativePrefix.length : 0;
}
ch=(iV < 0) ? (negSignLen-posSignLen) : (posSignLen-negSignLen);
v=cvt.valueToString(iV);
state.setValue(v);
state.setPos (pos+ch, v, isLeft);
renewMaskHandler(v);
return -2;
}
}
if (!sel) {
var skip=getMoveNextSkipChar(ch, pos);
if (skip.hit) {
state.setPos(pos+skip.skip);
return -2;
}
}
return (handleInsert (v, ch, pos, sel));
}
function onValidate (evt) {
var v=state.getValue(), newValue=cvt.stringToValue(v, promptChar);
if (newValue != null)
newValue=(newValue == 0 && negZeroS != null && v == negZeroS) ? negZeroS: cvt.valueToString(newValue, promptChar);
else if (negNullS != null && v == negNullS)
newValue=negNullS;
if (newValue != null) {
if (cvt.DF_IsDecimalShown) {
var i=decimalCommand, j=v.indexOf(cvt.LC_decimalSymbol), k=newValue.indexOf(cvt.LC_decimalSymbol);
if (i >= 0 && j >= 0 && k >= 0) {
i++; j++; k++;
while (i < command.length && command.charAt(i) == hX_4._LB && j < v.length && k < newValue.length) {
if (cvt.isZeroDigit(v.charAt(j)) && newValue.charAt(k) == promptChar)
newValue=newValue.substr(0,k) + cvt.getZeroDigit() + newValue.substr(k+1);
i++; j++; k++;
}
}
}
state.setValue(newValue);
return true;
} else if (cvt.lastError() == hX_4.ERR_empty) {
state.setValue(zeroS);
return true;
}
return false;
}
}
HxG_4.prototype.MaskConverter=function () {
this.type=hX_4.CVT_mask;
this.nStrict=hX_4.MFMT_DEFAULTSTRICT;
this.maskFormat=hX_4._E;
this.markers=this.mask_Protect=this.maskProtect=this.maskNFormat=null;
this.maskFormatLast=this.maskFormatFirst=this.maskNFormatLast=this.maskNFormatFirst=-1;
this.constraint1Exp=this.constraint1ExpImp=this.constraint2Exp=this.constraint2ExpImp=this.constraint3Exp=this.constraint3ExpImp=this.constraint4Exp=this.constraint4ExpImp=null;
this.msgFail=this.intMsgFail=hX_4._E;
this.attributeTable=[];
this.attributeTable ['strict']=['nStrict',	hX_4.ARG_TO_NUM,	false,	0,	2];
this.attributeTable ['mask']=['maskFormat',hX_4.ARG_TO_NAS,	false,	null,	null];
this.attributeTable ['protect-mask']=['mask_Protect',hX_4.ARG_TO_NAS,	false,	null,	null];
this.attributeTable	['char1-regexpression']=['constraint1Exp',hX_4.ARG_TO_NAN,false,	null, null];
this.attributeTable	['char2-regexpression']=['constraint2Exp',hX_4.ARG_TO_NAN,false,	null, null];
this.attributeTable	['char3-regexpression']=['constraint3Exp',hX_4.ARG_TO_NAN,false,	null, null];
this.attributeTable	['char4-regexpression']=['constraint4Exp',hX_4.ARG_TO_NAN,false,	null, null];
this.setAttribute(arguments);
}
HxG_4.prototype.MaskConverter.prototype.setAttribute=function(a) {
var i,c;
hX_4.parseArg (this.attributeTable, this, a);
if (this.constraint1Exp) this.constraint1ExpImp=hX_4.regExp.registerConstraint(this.constraint1Exp);
if (this.constraint2Exp) this.constraint2ExpImp=hX_4.regExp.registerConstraint(this.constraint2Exp);
if (this.constraint3Exp) this.constraint3ExpImp=hX_4.regExp.registerConstraint(this.constraint3Exp);
if (this.constraint4Exp) this.constraint4ExpImp=hX_4.regExp.registerConstraint(this.constraint4Exp);
this.markers=hX_4._LB + hX_4._QM + ((this.constraint3ExpImp)?hX_4._EX:hX_4._E) + ((this.constraint4ExpImp)?hX_4._TL:hX_4._E)
this.maskFormatFirst=this.maskFormatLast=-1;
for (i=0; i < this.maskFormat.length; i++) {
c=this.maskFormat.charAt(i);
if (this.isMarker(c)) {
this.maskFormatLast=i;
this.maskFormatFirst=(this.maskFormatFirst >= 0) ? this.maskFormatFirst : i;
}
}
this.maskProtect=null;
if (this.mask_Protect != null && this.maskFormat != null && this.maskFormat.length >= 0 && this.maskFormat.length == this.mask_Protect.length) {
this.maskProtect=this.mask_Protect;
for (i=0; i < this.maskProtect.length; i++) {
c=this.maskFormat.charAt(i);
if (this.isMarker(c)) {
c=this.maskProtect.charAt(i);
if (!this.isMarker(c))
this.maskProtect=this.maskProtect.substr(0,i) + hX_4._X + this.maskProtect.substr(i+1);
} else
 this.maskProtect=this.maskProtect.substr(0,i) + c + this.maskProtect.substr(i+1);
}
for (i=0; i < this.maskProtect.length; i++) {
if (this.isMarker(this.maskProtect.charAt(i))) {
this.maskNFormatLast=i;
this.maskNFormatFirst=(this.maskNFormatFirst >= 0) ? this.maskNFormatFirst : i;
}
}
}
return true;
}
HxG_4.prototype.MaskConverter.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.MaskConverter.prototype.lastError=function () {
return ((this.msgFail && this.msgFail.length > 0) ? this.msgFail : null);
}
HxG_4.prototype.MaskConverter.prototype.getMaxLength=function () {
return this.maskFormat.length;
}
HxG_4.prototype.MaskConverter.prototype.isMarker=function (c) {
return (this.markers.indexOf(c) >= 0);
}
HxG_4.prototype.MaskConverter.prototype.rebuildProtectMask=function (newvalue) {
this.maskNFormat=null;
if (this.maskProtect && newvalue.length==this.maskFormat.length) {
this.maskNFormat=this.maskFormat;
for (var i=0; i < this.maskProtect.length; i++) {
if (!this.isMarker(this.maskProtect.charAt(i)))
this.maskNFormat=this.maskNFormat.substr(0,i) + newvalue.charAt(i) + this.maskNFormat.substr(i+1);
}
}
}
HxG_4.prototype.MaskConverter.prototype.stringToValue=function (inString, promptChar, initial) {
this.msgFail=this.intMsgFail=hX_4._E;
var argsFail=[inString];
if (inString == null || hX_4.isUnDef(typeof(inString)) || !hX_4.isString(inString)) {
this.msgFail=hX_4.ERR_empty;
return null;
}
var v=inString, l=v.length, l1=this.maskFormat.length;
if (l > l1 && (!promptChar && l != l1)) {
this.msgFail=hX_4.ERR_constraint;
return null;
}
if (l < l1)	v=hX_4.padR(v,l1,((promptChar)?promptChar:hX_4._B));
l=v.length;
var out=hX_4._E, c, i, m, x, x1;
for (i=0; i < l; i++) {
c=null;
x=v.charAt(i);
m=this.maskFormat.charAt(i);
if (this.isMarker(m)) {
if (promptChar && (x == promptChar))
c=hX_4._B;
else if (this.maskProtect && this.maskProtect.charAt(i) == hX_4._X)
c=x;
else if (m == hX_4._LB) {
if (this.constraint1ExpImp)
c=(hX_4.regExp.testRegExp(x, this.constraint1ExpImp)) ? x : null;
else
 c=((hX_4.isChar(x, hX_4.WDIGITS)) ? x : null);
} else if (m == hX_4._QM) {
if (this.constraint2ExpImp)
c=(hX_4.regExp.testRegExp(x, this.constraint2ExpImp)) ? x : null;
else {
x1=x.toUpperCase();
c=((hX_4.isChar(x1, hX_4.MASK_ALPHA)) ? x : null);
}
} else if (m == hX_4._EX) {
if (this.constraint3ExpImp)
c=(hX_4.regExp.testRegExp(x, this.constraint3ExpImp)) ? x : null;
} else {
if (this.constraint4ExpImp)
c=(hX_4.regExp.testRegExp(x, this.constraint4ExpImp)) ? x : null;
}
} else
 c=((x == m) ? hX_4._E : null);
if (c == null) {
if (initial && promptChar)
c=promptChar
 else {
this.msgFail=hX_4.ERR_constraint;
return null;
}
}
out=out + c;
}
return out;
}
HxG_4.prototype.MaskConverter.prototype.valueToString=function (inStr, promptChar) {
this.msgFail=hX_4._E;
if (inStr == null) return hX_4._E;
var c, i, j=0, out=hX_4._E, v=inStr, l=this.maskFormat.length, l1=v.length;
if (l1 < l)	v=hX_4.padR(v,l,((promptChar)?promptChar:hX_4._B));
l1=v.length;
for (i=0; i < l; i++) {
c=this.maskFormat.charAt(i);
if (this.isMarker(c)) {
if (j < l1) {
c=v.charAt(j);
c=(this.maskProtect && this.maskProtect.charAt(i) == hX_4._X)?c:((c==hX_4._B && promptChar) ? promptChar:c);
out=out + c;
} else if (promptChar)
out=out + promptChar;
else {
this.msgFail=hX_4.ERR_constraint;
return null;
}
j++;
} else {
out=out + c;
}
}
return out;
}
HxG_4.prototype.MaskConverter.prototype.constantToValue=function (s) {
return (null);
}
HxG_4.prototype.MaskConverter.prototype.valueToConstant=function (s) {
return (null);
}
HxG_4.prototype.StringValidator=function () {
this.type=hX_4.CVT_string;
this.minimumLength=this.maximumLength=this.required=null;
this.constraint=this.constraintImp=null;
this.constraintExp=this.constraintExpImp =null;
this.ELexpression=this.ELexpressionImp=null;
this.msgFail=hX_4._E;
this.attributeTable=[];
this.attributeTable ['required']=['required',		hX_4.ARG_IS_TRUE,	false,	null, null];
this.attributeTable	['minimum-length']=['minimumLength',	hX_4.ARG_TO_NUM,	false,	0, 9999999];
this.attributeTable	['min-length']=['minimumLength',	hX_4.ARG_TO_NUM,	false,	0, 9999999];
this.attributeTable	['maximum-length']=['maximumLength',	hX_4.ARG_TO_NUM,	false,	1, 9999999];
this.attributeTable	['max-length']=['maximumLength',	hX_4.ARG_TO_NUM,	false,	1, 9999999];
this.attributeTable	['constraint']=['constraint',	hX_4.ARG_TO_NAN,	false,	null, null];
this.attributeTable	['constraint-regexpression']= ['constraintExp',	hX_4.ARG_TO_NAN,	false,	null, null];
this.attributeTable	['constraint-expression']=['ELexpression',	hX_4.ARG_TO_NAN,	false,	null, null];
this.setAttribute(arguments);
}
HxG_4.prototype.StringValidator.prototype.setAttribute=function(a) {
hX_4.parseArg (this.attributeTable, this, a);
if (this.minimumLength != null && this.minimumLength < 0) this.minimumLength=0;
if (this.maximumLength != null && this.maximumLength < 1) this.maximumLength=1;
if (this.maximumLength && this.minimumLength && this.minimumLength >= this.maximumLength) this.minimumLength=this.maximumLength=null;
if (this.constraint) this.constraintImp=hX_4.regExp.getRegExpByName(this.constraint);
if (this.constraintExp) this.constraintExpImp=hX_4.regExp.registerConstraint(this.constraintExp);
if (this.ELexpression != null) this.ELexpressionImp=hX_4.regExp.registerELConstraint(this.ELexpression);
return true;
}
HxG_4.prototype.StringValidator.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.StringValidator.prototype.lastError=function () {
return ((this.msgFail && this.msgFail.length > 0) ? this.msgFail : null);
}
HxG_4.prototype.StringValidator.prototype.validate=function (teststr, iC) {
this.msgFail=hX_4._E;
var C=(iC != null) ? hX_4.getConverterById(iC) : null;
if (teststr != null && !hX_4.isString(teststr)) {
this.msgFail=hX_4.ERR_required;
return false;
}
var test=(teststr == null) ? hX_4._E : teststr;
test=test.replace(/[\r\n]/g, hX_4._E);
if (test.length == 0) {
if (this.required) {
this.msgFail=hX_4.ERR_required;
return false;
} else
 return true;
}
if (this.minimumLength && test.length < this.minimumLength) {
this.msgFail=hX_4.ERR_minimum;
return false;
}
if (this.maximumLength && test.length > this.maximumLength) {
this.msgFail=hX_4.ERR_maximum;
return false;
}
if (this.constraintImp != null) {
if (!hX_4.regExp.testRegExp(test, this.constraintImp)) {
this.msgFail=hX_4.ERR_constraint;
return false;
}
}
if (this.constraintExpImp != null) {
if (!hX_4.regExp.testRegExp(test, this.constraintExpImp)) {
this.msgFail=hX_4.ERR_constraint;
return false;
}
}
if (this.ELexpressionImp != null) {
if (!hX_4.regExp.testELExp(test, this.ELexpressionImp)) {
this.msgFail=hX_4.ERR_constraint;
return false;
}
}
return true;
}
HxG_4.prototype.MaskAssist=function (_elem, _state, _converter, _validator, _promptChar) {
if (!_elem || !_converter || !_state) return;
this.isFilled=isFilled;
this.onFocus=onFocus;
this.onBlur=onBlur;
this.onClick=onClick;
this.onCut=onCut;
this.onPaste=onPaste;
this.onChangeKeyCode= onChangeKeyCode;
this.onChangeChrCode= onChangeChrCode;
this.onValidate=onValidate
 var elem=_elem;
var state=_state;
var cvt=_converter;
var validator=_validator;
var promptChar=_promptChar;
this.getMask=function getMask() { return ((cvt.maskNFormat!=null)?cvt.maskNFormat:cvt.maskFormat); }
this.getMaskLast=function getMaskLast() { return ((cvt.maskNFormat!=null)?cvt.maskNFormatLast:cvt.maskFormatLast); }
this.getMaskFirst=function getMaskFirst() { return ((cvt.maskNFormat!=null)?cvt.maskNFormatFirst:cvt.maskFormatFirst); }
var handler=null;
handler=new hX_4.MaskAssist.prototype.maskHandler(elem, state, cvt, promptChar);
function isFilled (curpos) {
var c, v=hX_4.Trim(elem.value), l=v.length;
if (l < (this.getMask()).length)
return false;
c=v.charAt(this.getMaskLast());
return ((curpos > this.getMaskLast()) && (c != promptChar) && (c != hX_4._B));
}
function onFocus () {
var newValue=(elem.value) ? hX_4.trimR(elem.value) : null;
newValue=(newValue && newValue.length > 0) ? cvt.stringToValue(newValue, promptChar, true) : null;
newValue=(newValue) ? cvt.valueToString(newValue, promptChar) : handler.getEmptyMask();
elem.value=newValue;
handler.rebuildMask(newValue);
hX_4.sel.setCaretPos(elem, this.getMaskFirst(), null, hX_4.brw.isNavOrMoz());
return true;
}
function onBlur () {
var v=elem.value;
if (v.length==0) return true;
var newValue=cvt.stringToValue(v, promptChar);
if (newValue != null)
newValue=(newValue.length==0) ? hX_4._E : cvt.valueToString(newValue);
if (newValue != null) {
elem.value=newValue;
return true;
}
return false;
}
function onClick (evt) {
return handler.onClick(evt);
}
function onCut (evt) {
return handler.onCut(evt);
}
function onPaste (evt) {
return handler.onPaste(evt);
}
function onChangeKeyCode (evt) {
return handler.onChangeKeyCode (evt);
}
function onChangeChrCode (evt) {
return handler.onChangeChrCode (evt);
}
function onValidate () {
var newValue=cvt.stringToValue(state.getValue(), promptChar);
if (newValue != null)
newValue=cvt.valueToString(newValue, promptChar);
if (newValue != null)
return true;
return false;
}
}
HxG_4.prototype.MaskAssist.prototype.maskHandler=function(_element, _state, _converter, _promptChar) {
var elem=_element;
var state=_state;
var cvt=_converter;
var promptChar=_promptChar;
var emptyMask=null;
this.onClick=onClick;
this.onCut=onCut;
this.onPaste=onPaste;
this.onChangeKeyCode= onChangeKeyCode;
this.onChangeChrCode= onChangeChrCode;
this.getEmptyMask=function getEmptyMask() {return emptyMask;}
this.rebuildMask=function rebuildMask(v) {if (cvt.rebuildProtectMask) cvt.rebuildProtectMask(v); }
var getKeyCode=hX_4.getKeyCode;
var getMask=function getMask() { return ((cvt.maskNFormat!=null)?cvt.maskNFormat:cvt.maskFormat); }
var getCChar=function (i) 	{ return (i < 0 || i >= (getMask()).length) ? hX_4._E : (getMask()).charAt(i); }
emptyMask=hX_4.replaceAll(cvt.maskFormat, hX_4._LB, promptChar);
for (var i=1; i<cvt.markers.length; i++)
emptyMask=hX_4.replaceAll(emptyMask, cvt.markers.charAt(i), promptChar);
function doDelete (evt) {
var v, s, cR, pos=state.getPos();
pos=(evt.type==hX_4._evCT) ? (pos) : ((evt.keyCode==hX_4.KEY_BS) ? pos-1 : pos);
if (pos < 0 && !state.hasSel())
return true;
cR=getCChar(pos);
if (!cvt.isMarker(cR) && cR != hX_4._EQ && !state.hasSel()) {
if (evt.type!=hX_4._evCT) {
pos=(evt.keyCode==hX_4.KEY_BS) ? (pos) : (pos+1);
state.setPos(pos);
return -2;
}
return false;
}
v=state.getValue(); s=state.hasSel();
if (s) {
var rg=hX_4.sel.getSelectionR(elem);
state.setValue((rg.start <= 0 && rg.end >= v.length-1)?emptyMask:fillWithMaskPiece(v, rg.start, rg.end));
} else
 if (pos>=0 && pos<v.length) state.setValue (v.substr(0,pos) + promptChar + v.substr(pos+1));
pos=(s || (evt.type!=hX_4._evCT && evt.keyCode==hX_4.KEY_BS)) ? pos : pos+1;
state.setPos(pos);
return -2;
}
function doInsert (v, chi, pos, sel) {
var ch=(chi==hX_4._B)?promptChar:chi;
if (sel) {
var rg=hX_4.sel.getSelectionR(elem);
v=fillWithMaskPiece(v, rg.start, rg.end);
var i, l=v.length;
for (i=rg.start; i < rg.end; i++) {
if (cvt.isMarker(getCChar(i))) break;
}
if (i < rg.end)
v=v.substr(0,i) + ch + v.substr(i+1);
state.setPos(rg.start+1);
} else {
v=v.substr(0,pos) + ((ch==hX_4._B)?promptChar:ch) + v.substr(pos+1);
pos=getMoveForward (v, pos+1);
state.setPos(pos);
}
state.setValue(v);
return -2;
}
function doCaretPrev (evt) {
if (evt.shiftKey || state.hasSel())
return -1;
else {
var pos=getMovePrevious (state.getValue(), state.getPos()-1);
state.setPos(pos);
return -2;
}
}
function doCaretNext (evt) {
if (evt.shiftKey || state.hasSel())
return -1;
else {
var pos=getMoveForward (state.getValue(), state.getPos()+1);
state.setPos(pos);
return -2;
}
}
function getMovePrevious (v, pos) {
var i, c, c1, l=v.length;
pos=(pos < 0) ? 0 : ((pos > l) ? l : pos);
for (i=pos; i > 0; i--) {
c=getCChar(i);
c1=getCChar(i-1);
if (cvt.isMarker(c) || cvt.isMarker(c1))
return (i);
}
return (0);
}
function getMoveForward(v, pos) {
var i, l=v.length;
pos=(pos < 0) ? 0 : ((pos > l) ? l : pos);
for (i=pos; i <= l; i++) {
if (cvt.isMarker(getCChar(i))) return (i);
}
return (l);
}
function  fillWithMaskPiece (v, start, end) {
return (v.substr(0,start) + emptyMask.substr(start, end-start) + v.substr(end));
}
function onClick(evt) {
if (state.hasSel())
return true;
var v=state.getValue(), pos=state.getPos();
if (pos <= 0 || pos > (v.length-1))
return true;
var cL=getCChar(pos-1), cR=getCChar(pos);
if (cvt.isMarker(cL) || cvt.isMarker(cL))
return true;
var MoveR=true, posLeft=getMovePrevious (v, pos), posRight=getMoveForward(v, pos);
if ((pos-posLeft) < (posRight-pos))
state.setPos(posLeft);
else
 state.setPos(posRight);
return -2;
}
function onChangeKeyCode (evt) {
switch (hX_4.getKeyCode(evt)) {
case hX_4.KEY_BS:
case hX_4.KEY_DEL:
return doDelete(evt);
case hX_4.KEY_LTARROW:
return doCaretPrev(evt);
case hX_4.KEY_RTARROW:
return doCaretNext(evt);
}
return true;
}
function onCut(evt) {
if (hX_4.brw.isIE() && state.hasSel()) {
var cutText=hX_4.sel.getSelection(elem);
window.clipboardData.setData("Text", cutText);
return doDelete(evt);
}
return true;
}
function onPaste (evt) {
if (hX_4.brw.isIE()) {
var cutText=window.clipboardData.getData("Text");
var v=state.getValue(), pos=state.getPos(), sel=state.hasSel();
if (sel) {
var rg=hX_4.sel.getSelectionR(elem);
v=(rg.start <= 0 && rg.end >= v.length-1)?emptyMask:fillWithMaskPiece(v, rg.start, rg.end);
}
var mChars=false, c, m, i, r, l=cutText.length;
for (i=0; i < l; i++) {
m=getCChar(i);
if (!cvt.isMarker(m)) {
mChars=(m == cutText.charAt(i));
break;
}
}
for (i=0; i < l; i++) {
m=getCChar(i);
c=cutText.charAt(i);
if (!cvt.isMarker(m) && m == c) {
} else {
c=(c==hX_4._B)?promptChar:c;
v=v.substr(0,pos) + c + v.substr(pos+1);
}
pos=(mChars) ? pos+1 : getMoveForward (v, pos+1);
}
state.setValue(v);
pos=getMoveForward (v, pos);
state.setPos(pos);
return -2;
}
return true;
}
function onChangeChrCode (evt) {
var v=state.getValue(), pos=state.getPos(), sel=state.hasSel(), ch=hX_4.getChrCode(evt);
if (evt.keyCode == hX_4.KEY_TAB || evt.keyCode == hX_4.KEY_ENTER)
return +2;
return (doInsert(v, ch, pos, sel));
}
}
HxG_4.prototype.JSFPopup=function (parentid, srcValue, clickstyle, fullstyle, pagenode) {
this.parentid=parentid;
this.DOMobj=this.parentDOMobj=this.parentCOMPobj=this.parentSUBobj=null;
this.pagenode=(pagenode != null) ? pagenode : document.body;
this.srcValue=hX_4._E;
this.sticky=false;
this.fullStyle=(fullstyle != null && fullstyle) ? true : false;
this.clickStyle=(clickstyle != null) ? clickstyle : 0;
this.hideArray=this.hideArrayV=null;
this.dropShadowWidth=this.dropShadowColor=null;
this.dropDivs=[];
this.transparency=this.transDiv=null;
}
HxG_4.prototype.JSFPopup.prototype.onPageLoad=function() {
this.parentDOMobj=hX_4.getElementById(this.parentid);
this.parentCOMPobj=hX_4.getComponentById(this.parentid);
if (this.parentDOMobj && this.parentCOMPobj) {
if (!this.HTMLrendered) {
if (this.srcValue == hX_4._E) {
var elem=document.createElement(hX_4._DIV);
elem.setAttribute(hX_4._ID, this.id);
elem.style.position=hX_4._ABS;
elem.style.left=elem.style.top=hX_4._ZPX;
elem.style.height=elem.style.width="10" + hX_4._PX;
elem.style.zIndex="1000000";
if (!this.fullStyle) elem.style.margin=elem.style.padding=hX_4._ZPX;
elem.style.verticalAlign=hX_4._TOP;
elem.style.overflow=hX_4._HI;
elem.style.display=hX_4._NO;
this.pagenode.insertBefore (elem, (this.pagenode.firstChild));
this.DOMobj=elem;
this.HTMLrendered=true;
return true;
}
}
}
return false;
}
HxG_4.prototype.JSFPopup.prototype.DIR_RIGHT=1;
HxG_4.prototype.JSFPopup.prototype.DIR_CENTER=2;
HxG_4.prototype.JSFPopup.prototype.uivisible=function (dir, location, inline, absPt) {
var pop=this.DOMobj;
if (inline) {
if (pop) {
this.parentDOMobj=this.parentCOMobj=inline;
this.parentDOMobj.insertBefore(pop, this.parentDOMobj.firstChild);
pop.style.position="static";
pop.style.left=pop.style.top=hX_4._ZPX;
pop.style.visibility=hX_4._VS;
pop.style.display=hX_4._E;
}
} else {
if (pop && this.parentDOMobj && this.parentCOMPobj) {
this.pagenode.insertBefore (pop, this.pagenode.firstChild);
var tagtop, tagleft, i, ds, off, poptop, popleft;
var base=(location != null) ? location : this.parentDOMobj;
var tagheight=hX_4.g.getRendHeight(base), tagwidth=hX_4.g.getRendWidth(base);
if (absPt) {
tagtop=poptop=absPt.Y; popleft=tagLeft=absPt.X;
} else {
tagtop=hX_4.g.getAbsPosTop(base); tagleft=hX_4.g.getAbsPosLeft(base);
if (dir != null && dir == this.DIR_RIGHT) {
poptop=tagtop - 1;
popleft=tagleft + tagwidth - 1;
} else {
poptop=tagtop + tagheight - 1;
popleft=tagleft;
}
}
if (this.srcValue == hX_4._E) {
pop.style.top=poptop + hX_4._PX;
pop.style.left= popleft + hX_4._PX;
pop.style.display=hX_4._BLK;
pop.style.visibility=hX_4._HI;
var x, y, h=hX_4.g.getRendHeight(pop), w=hX_4.g.getRendWidth(pop);
var winheight=hX_4.g.getWindowClientHeight(), winwidth=hX_4.g.getWindowClientWidth();
var wintop=document.body.scrollTop, winleft=document.body.scrollLeft;
if (((poptop-wintop) + h > winheight) && (winheight > h))
pop.style.top=(tagtop - h + 1) + hX_4._PX;
if (dir != null > 0 && dir == this.DIR_CENTER) {
popleft+=((tagwidth - w)/2);
pop.style.left= popleft + hX_4._PX;
}
if (popleft < winleft) pop.style.left= winleft + hX_4._PX;
if (popleft+w >= (winwidth-1)) pop.style.left= (tagleft + tagwidth - (w+2)) + hX_4._PX;
y=hX_4.g.getAbsPosTop(pop); x=hX_4.g.getAbsPosLeft(pop);
if (hX_4.brw.isIE() && pop.filters && pop.filters.length > 0) {
for (i=0; i < pop.filters.length; i++)
if (hX_4.isDef(typeof pop.filters[i].Apply)) pop.filters[i].Apply();
}
pop.style.visibility=hX_4._VS;
if (hX_4.brw.isIE() && pop.filters && pop.filters.length > 0) {
for (i=0; i < pop.filters.length; i++)
if (hX_4.isDef(typeof pop.filters[i].Play)) pop.filters[i].Play();
}
var t=hX_4.g.getP(pop, "opacity");
this.transparency=(t < 1) ? t : null;
if (this.transparency && this.transDiv == null) {
ds=this.transDiv=document.createElement(hX_4._DIV);
ds.style.position=hX_4._ABS;
ds.style.display=hX_4._NO;
ds.style.padding=this.transDiv.style.margin=this.transDiv.style.left=this.transDiv.style.top=hX_4._ZPX;
pop.insertBefore (ds, pop.firstChild);
}
if (this.transparency && this.transDiv) {
ds=this.transDiv;
var lB=hX_4.g.parseBorder(pop, hX_4._LFT,0), rB=hX_4.g.parseBorder(pop, hX_4._RGT,0);
var tB=hX_4.g.parseBorder(pop, hX_4._TOP,0),  bB=hX_4.g.parseBorder(pop, hX_4._BOT,0);
ds.style.left=ds.style.top=hX_4._ZPX;
ds.style.width=(w-(lB+rB)) + hX_4._PX;
ds.style.height=(h-(tB+bB)) + hX_4._PX;
ds.style.display=hX_4._BLK;
ds.style.zIndex=hX_4.__1;
ds.style.backgroundColor=hX_4.g.getP(pop, hX_4._BCOR);
ds.style.backgroundImage=hX_4.g.getP(pop, hX_4._BIMG);
ds.style.backgroundRepeat=hX_4.g.getP(pop, hX_4._BREP);
ds.style.backgroundAttachment=hX_4.g.getP(pop, "background-attachment");
if (hX_4.brw.isIE()) {
ds.style.backgroundPositionX=hX_4.g.getP(pop, "background-position-x");
ds.style.backgroundPositionY=hX_4.g.getP(pop, "background-position-y");
} else {
ds.style.backgroundPosition=hX_4.g.getP(pop, hX_4._BPOS);
}
pop.style.backgroundColor=hX_4._TRN;
pop.style.backgroundImage=hX_4._NO;
if (hX_4.brw.isNavOrMoz()) pop.style.opacity=hX_4._1;
this.addTransparency(ds, this.transparency);
}
if (hX_4.brw.isNavOrMoz()) {
this.dropShadowWidth=parseInt(hX_4.g.getP(pop, "-moz-outline-width"),10);
this.dropShadowColor=hX_4.g.getP(pop, "-moz-outline-color");
off=-1;
} else {
this.dropShadowWidth=parseInt(hX_4.g.getP(pop, "outlineWidth"),10);
this.dropShadowColor=hX_4.g.getP(pop, "outlineColor");
off=0;
}
if (this.dropShadowWidth > 0) {
this.dropShadowWidth=(this.dropShadowWidth > 10) ? 10 : this.dropShadowWidth;
var scale=(this.transparency) ? this.transparency : .8;
var scaleStep=(scale-0.10)/this.dropShadowWidth;
scaleStep=(scaleStep < 0) ? 0 : scaleStep;
for (i=1; i <= this.dropShadowWidth; i++) {
if (i > this.dropDivs.length) {
ds=document.createElement(hX_4._DIV);
ds.style.position=hX_4._ABS;
ds.style.display=hX_4._NO;
ds.style.padding=ds.style.margin=ds.style.left=ds.style.top=hX_4._ZPX;
ds.style.backgroundColor=hX_4._TRN;
ds.style.borderStyle=hX_4._SLD;
ds.style.borderWidth=hX_4._ZPX;
ds.style.borderBottomWidth=ds.style.borderRightWidth=hX_4._1 + hX_4._PX;
this.dropDivs.push(ds);
this.pagenode.insertBefore (ds, (this.pagenode.firstChild));
}
ds=this.dropDivs[i-1];
ds.style.borderColor=(this.dropShadowColor) ? this.dropShadowColor : hX_4.CLR_SHDW;
this.addTransparency(ds, (scale-((i-1)*scaleStep)));
}
}
for (i=0; i < this.dropShadowWidth; i++) {
ds=this.dropDivs[i];
if (ds) {
ds.style.left=(x+i+2+off) + hX_4._PX;
ds.style.top=(y+i+2+off) + hX_4._PX;
ds.style.width=(w-1) + hX_4._PX;
ds.style.height=(h-1) + hX_4._PX;
ds.style.zIndex=hX_4._E+(1000000-11+i);
ds.style.display=hX_4._BLK;
}
}
if (hX_4.brw.isIE() && document.elementFromPoint) {
var x1, y1, test, sBase=(hX_4.brw.isIE6_CSS()) ? document.body.parentNode : document.body;
x=x - sBase.scrollLeft;
y=y - sBase.scrollTop;
pop.style.display=hX_4._NO;
for (x1=x; x1 < x+w; x1+=12) {
for (y1=y; y1 < y+h; y1+=12) {
test=document.elementFromPoint(x1, y1);
if (test && test.tagName == hX_4._SEL && test.style.visibility != hX_4._HI && test.style.display != hX_4._NO) {
if (!this.hideArray) {
this.hideArray=[];
this.hideArrayV=[];
}
this.hideArray.push(test);
this.hideArrayV.push(test.style.visibility);
test.style.visibility=hX_4._HI;
}
}
}
pop.style.display=hX_4._BLK;
}
}
}
if (pop && this.clickStyle != 2)
hX_4.dragger.dragInit (pop, this.parentCOMPobj, true, this.clickStyle);
return true;
}
return false;
}
HxG_4.prototype.JSFPopup.prototype.uirelease=function (force) {
if (this.DOMobj && (force || !this.sticky)) {
var i;
for (i=0; i < this.dropShadowWidth; i++)
if (this.dropDivs[i]) this.dropDivs[i].style.display=hX_4._NO;
if (this.transparency && this.transDiv) {
this.transDiv.style.display=hX_4._NO;
this.DOMobj.style.backgroundColor=this.DOMobj.style.backgroundImage=hX_4._E;
if (hX_4.brw.isNavOrMoz()) this.DOMobj.style.opacity=hX_4._E;
}
this.DOMobj.style.display=hX_4._NO;
this.DOMobj.style.visibility=hX_4._HI;
if (this.hideArray) {
for (i=0; i < this.hideArray.length; i++) {
if (this.hideArray[i] && this.hideArray[i].style)
this.hideArray[i].style.visibility=this.hideArrayV[i];
}
this.hideArray=null;
}
return true;
}
return false;
}
HxG_4.prototype.JSFPopup.prototype.isPopped=function() {
return (this.DOMobj && this.DOMobj.style.display != hX_4._NO) ? true : false;
}
HxG_4.prototype.JSFPopup.prototype.addTransparency=function(o,t) {
if (o) {
if (o.filters) {
o.style.filter="progid:DXImageTransform.Microsoft.Alpha(enabled=false)";
o.filters.item("DXImageTransform.Microsoft.Alpha").opacity=t*100;
o.filters.item("DXImageTransform.Microsoft.Alpha").enabled=true;
} else if (o.style)
o.style.MozOpacity=t;
}
}
HxG_4.prototype.JSFPopup.prototype.removeTransparency=function(o) {
if (o) {
if (o.filters) {
o.style.filter="progid:DXImageTransform.Microsoft.Alpha(enabled=false)";
o.filters.item("DXImageTransform.Microsoft.Alpha").opacity=100;
o.filters.item("DXImageTransform.Microsoft.Alpha").enabled=true;
} else if (o.style)
o.style.MozOpacity=1;
}
}
HxG_4.prototype.tabNavigator=function() {
this.getFocus=function (obj, dir, h) { return focus(obj,  ((dir > 0)?+1:-1), h); }
this.getTabItems= function () { return tabItems; }
var i, tabItems=[];
function elem(obj, s) {
this.obj=obj;
this.name=(obj.name) ? obj.name : hX_4._E;
this.tabOrder=obj.getAttribute("tabIndex");
this.tabOrder=(this.tabOrder==null)?0:this.tabOrder;
this.srcOrder=s;
}
collectTabElement(document.body);
for (i=0; i < hX_4.HTMLTags.length; i++) collectTabElement(hX_4.HTMLTags[i]);
tabItems.sort(compareTabIndex);
function collectTabElement(iNode) {
var child, node=iNode;
if (node.tagName && node.tagName == hX_4._IFRM) node=(node.contentDocument) ? node.contentDocument : ((node.contentWindow) ? node.contentWindow.document.body : null);
if (hX_4.isTabbable(node)) if (notDuplicateElement(node)) tabItems.push(new elem(node, tabItems.length));
for (child=node.firstChild; child != null; child=child.nextSibling) collectTabElement(child);
}
function notDuplicateElement(node) {
if (node && node.nodeType!=undefined && node.nodeType == hX_4.ELEMENT_NODE) {
if (node.tagName && node.tagName == hX_4._INP && node.type && node.type.toLowerCase() == hX_4._RAD) {
if (node.name && node.name.length > 0) {
var ix, l=tabItems.length;
for (ix=0; ix<l; ix++) if (tabItems[ix].name == node.name) return false;
}
}
}
return true;
}
function compareTabIndex(ia, ib) {
var r=0, a=ia.tabOrder, b=ib.tabOrder;
if ((a == b) || (a < 0 && b < 0))	r=0;
else if (a > 0 && b > 0)			r=a-b;
else if (a >= 0 && b <= 0)			r=-1;
else if (b >= 0 && a <= 0)			r=+1;
return ((r != 0)? r : (ia.srcOrder - ib.srcOrder));
}
function focus(obj, delta, skipH) {
var r=null, ix, hit=false;
for (ix=0;ix<tabItems.length; ix++) {
if (tabItems[ix].obj == obj) { hit=true; break; }
}
if (hit) {
r=(tabItems[ix]).obj;
var obj0=r, ix0=ix+delta;
hit=false;
while (ix != ix0 && !hit) {
if (ix0 < 0) ix0=tabItems.length-1;
if (ix0 >= tabItems.length)	ix0=0;
if (!skipH || tabItems[ix0].obj.id==undefined || !(skipH && tabItems[ix0].obj.id.length>10 && tabItems[ix0].obj.id.substr(tabItems[ix0].obj.id.length-10)=="_HXB_HPBTN")) {
obj0=(tabItems[ix0]).obj;
if ((tabItems[ix0]).tabOrder >= 0)
hit=hX_4.i.isFocusable(obj0);
}
ix0+=delta;
}
r=(hit) ? obj0 : r;
}
return r;
}
}
HxG_4.prototype.JSFImage=function () {
this.type=hX_4.CMP_image;
this.label=null;
this.imageNormalSrc=this.imageMousedSrc=this.imageDepressedSrc=this.imageDisabledSrc=null;
this.iconNormalSrc=this.iconMousedSrc=this.iconDepressedSrc=this.iconDisabledSrc=null;
this.optimizeEvents=this.noResize=false;
this.outerSpan=this.innerDiv=this.labelTag=this.iconTag=this.mouseDiv=null;
this.gE=function (s) { return hX_4.g.getP(this.DOMobj, s); }
this.state=-1;
this.depressedTimer=null;
this.isDepressed=this.stateChanged=this.foundClass=false;
this.labelAbsolute=this.iconAbsolute=false;
this.dispType=(hX_4.brw.isIE()) ? hX_4._INB : hX_4._E;
this.baseClass=[];
this.labelClass=[];
this.iconClass=[];
this.imageSrc=this.iconSrc=null;
this.image=[null, null, null, null];
this.icon=[null, null, null, null];
this.suffixes=[hX_4.CLASS_BUTTON_MOUSED, hX_4.CLASS_BUTTON_DEPRSD, hX_4.CLASS_BUTTON_DISBLD];
this.attributeTable=[];
this.attributeTable ['label']=['label',				hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['normal']=['imageNormalSrc',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['moused']=['imageMousedSrc',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['depressed']=['imageDepressedSrc',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['disabled']=['imageDisabledSrc',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['icon-normal']=['iconNormalSrc',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['icon-moused']=['iconMousedSrc', 	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['icon-depressed']=['iconDepressedSrc', 	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['icon-disabled']=['iconDisabledSrc',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['embedded']=['noResize',			hX_4.ARG_IS_TRUE,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFImage.prototype.onPageLoad=function () {
if (this.DOMobj && this.DOMobj.src) this.imageNormalSrc=this.DOMobj.src;
this.addSpansToInput();
this.setValue(0);
return true;
}
HxG_4.prototype.JSFImage.prototype.redraw=function () {
if (!this.stateChanged) {
this.sizeImageToAttributes();
this.setValue(0);
}
this.stateChanged=false;
return true;
}
HxG_4.prototype.JSFImage.prototype.uirelease=function () {
this.setValue(0);
this.isDepressed=false;
return true;
}
HxG_4.prototype.JSFImage.prototype.setValue=function (ivalue) {
var cl=false, j, value=(this.DOMobj.disabled || this.DOMobj.readOnly) ? 3 : ivalue;
if (this.state != value && value >= 0 && value <= 3) {
this.stateChanged=true;
j=(this.image[value] == null || this.image[value].src == null || this.image[value].src.length==0) ? 0 : value;
if (this.image[j] && this.image[j].src && this.DOMobj.src != this.image[j].src)
this.DOMobj.src=this.image[j].src;
hX_4.appendClassName (this.DOMobj, this.baseClass[value], this.baseClass[this.NORMAL]);
if (this.labelTag) {
if (this.labelTag.className != this.labelClass[value]) {
this.labelTag.className=this.labelClass[value];
cl=true;
}
}
if (this.iconTag) {
j=(this.icon[value] == null || this.icon[value].src == null || this.icon[value].src.length==0) ? 0 : value;
if (this.icon[j] && this.icon[j].src && this.iconTag.src != this.icon[j].src)
this.iconTag.src=this.icon[j].src;
if (this.iconTag.className != this.iconClass[value]) {
this.iconTag.className=this.iconClass[value];
cl=true;
}
}
if (cl && this.labelTag || this.iconTag) this.sizeContentToAttributes();
this.state=value;
return true;
}
return false;
}
HxG_4.prototype.JSFImage.prototype.getValue=function() {
return this.state;
}
HxG_4.prototype.JSFImage.prototype.setAttribute=function(a) {
hX_4.parseArg (this.attributeTable, this, a);
this.imageSrc=[this.imageNormalSrc, this.imageMousedSrc, this.imageDepressedSrc, this.imageDisabledSrc];
this.iconSrc=[this.iconNormalSrc, this.iconMousedSrc, this.iconDepressedSrc, this.iconDisabledSrc];
if (this.HTMLrendered) this.redraw();
return true;
}
HxG_4.prototype.JSFImage.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.JSFImage.prototype.dispatchRelay=function (evt) {
var r=true;
evt=(evt) ? evt : ((event) ? event: null);
if (evt && this) {
var obj=null;
if (hX_4.brw.isIE())
obj=(this.parentNode && this.parentNode.parentNode && this.parentNode.parentNode.lastChild) ? (hX_4.getComponentById(this.parentNode.parentNode.lastChild.id)) : null;
else
 obj=(this.lastChild) ? (hX_4.getComponentById(this.lastChild.id)) : null;
if (obj)
r=obj.dispatchComponent(hX_4._lINP, evt, evt.type, evt.keyCode);
}
return r;
}
HxG_4.prototype.JSFImage.prototype.dispatchTimer= function (id, item, action) {
if (item == "redraw") {
this.sizeContentToAttributes();
} else {
this.depressedTimer=null;
if (this.isDepressed) {
this.isDepressed=false;
this.dispatchComponent(hX_4._lINP, null, hX_4._evMO, null);
}
}
}
HxG_4.prototype.JSFImage.prototype.dispatchComponent=function (item, evt, action, keycode) {
var newvalue=-1, r=true, c=false;
if (this.DOMobj != null)
switch (action) {
case hX_4._evB:
case hX_4._evKU:
newvalue=0;
if (this.isDepressed && this.depressedTimer) hX_4.i.killTimerTimed(this.depressedTimer);
this.isDepressed=false;
c=(action==hX_4._evKU && this.DOMobj.tagName == hX_4._IMG && (keycode == hX_4.KEY_SPACEBAR || keycode == hX_4.KEY_ENTER));
break;
case hX_4._evMO:
newvalue=0;
if (this.isDepressed) this.depressedTimer=hX_4.i.startTimerTimed(this.DOMobj.id, "depress", "depress", 2000);
break;
case hX_4._evMU:
newvalue=1;
if (this.isDepressed && this.depressedTimer) hX_4.i.killTimerTimed(this.depressedTimer);
this.isDepressed=false;
break;
case hX_4._evMC:
if (evt.button>1) r=false;
else if (this.innerDiv && !hX_4.brw.isIE() && (evt.internalFire==undefined)) hX_4.action.doClick(this.DOMobj, true);
break;
case hX_4._evMV:
newvalue=(this.isDepressed && this.depressedTimer) ? 2 : 1;
if (this.isDepressed && this.depressedTimer) hX_4.i.killTimerTimed(this.depressedTimer);
break;
case hX_4._evMD:
if (evt.button<=1) {
newvalue=2;
this.isDepressed=true;
}
break;
case hX_4._evKD:
if (keycode == hX_4.KEY_SPACEBAR || keycode == hX_4.KEY_ENTER)
newvalue=2;
break;
}
if (newvalue >= 0) {
this.setValue(newvalue);
if (!r) hX_4.i.cancelAction(evt, true);
}
if (c) r=hX_4.action.doClick(this.DOMobj);
return r;
}
HxG_4.prototype.JSFImage.prototype.NORMAL=0;
HxG_4.prototype.JSFImage.prototype.MOUSED=1;
HxG_4.prototype.JSFImage.prototype.DEPRESSED=2;
HxG_4.prototype.JSFImage.prototype.DISABLED=3;
HxG_4.prototype.JSFImage.prototype.prepImages=function () {
var c, t=hX_4.getFirstClassName (this.DOMobj);
if (t) t=hX_4.stripClassSuffix(t, this.suffixes);
if (t == null) {
this.baseClass[this.MOUSED]=this.baseClass[this.DEPRESSED]=this.baseClass[this.DISABLED]=t;
this.labelClass[this.MOUSED]=this.labelClass[this.DEPRESSED]=this.labelClass[this.DISABLED]=hX_4._E;
this.iconClass[this.MOUSED]=this.iconClass[this.DEPRESSED]=this.iconClass[this.DISABLED]=hX_4._E;
} else if (t != this.baseClass[this.NORMAL]) {
var	im, isC, s, t1;
this.baseClass[this.NORMAL]=t;
this.foundClass=false;
this.prepClass(t, hX_4.CLASS_BUTTON_MOUSED, this.baseClass, this.MOUSED);
this.prepClass(t, hX_4.CLASS_BUTTON_DEPRSD, this.baseClass, this.DEPRESSED);
this.prepClass(t, hX_4.CLASS_BUTTON_DISBLD, this.baseClass, this.DISABLED);
c=t + hX_4.CLASS_BUTTON_LABEL;
if (hX_4.isClassDefined(c)) {
this.labelClass[this.NORMAL]=c;
this.prepClass(c, hX_4.CLASS_BUTTON_MOUSED, this.labelClass, this.MOUSED);
this.prepClass(c, hX_4.CLASS_BUTTON_DEPRSD, this.labelClass, this.DEPRESSED);
this.prepClass(c, hX_4.CLASS_BUTTON_DISBLD, this.labelClass, this.DISABLED);
} else
 this.labelClass[this.NORMAL]=this.labelClass[this.MOUSED]=this.labelClass[this.DEPRESSED]=this.labelClass[this.DISABLED]=hX_4._E;
c=t + hX_4.CLASS_BUTTON_ICON;
if (hX_4.isClassDefined(c)) {
this.prepClass(c, hX_4._E,                  this.iconClass, this.NORMAL, this.iconSrc);
this.prepClass(c, hX_4.CLASS_BUTTON_MOUSED, this.iconClass, this.MOUSED, this.iconSrc);
this.prepClass(c, hX_4.CLASS_BUTTON_DEPRSD, this.iconClass, this.DEPRESSED, this.iconSrc);
this.prepClass(c, hX_4.CLASS_BUTTON_DISBLD, this.iconClass, this.DISABLED, this.iconSrc);
} else
 this.iconClass[this.NORMAL]=this.iconClass[this.MOUSED]=this.iconClass[this.DEPRESSED]=this.iconClass[this.DISABLED]=hX_4._E;
}
this.prepImage(this.imageSrc, this.image, this.NORMAL);
this.prepImage(this.imageSrc, this.image, this.MOUSED);
this.prepImage(this.imageSrc, this.image, this.DEPRESSED);
this.prepImage(this.imageSrc, this.image, this.DISABLED);
if (this.iconSrc[this.NORMAL]) {
this.prepImage(this.iconSrc, this.icon, this.NORMAL);
this.prepImage(this.iconSrc, this.icon, this.MOUSED);
this.prepImage(this.iconSrc, this.icon, this.DEPRESSED);
this.prepImage(this.iconSrc, this.icon, this.DISABLED);
}
}
HxG_4.prototype.JSFImage.prototype.prepImage=function (src, imp, state) {
if (src[state] && src[state].length > 0) {
if (imp[state] == null) imp[state]=new Image(0, 0);
imp[state].src=hX_4.stripURL(src[state]);
} else
 imp[state]=null;
}
HxG_4.prototype.JSFImage.prototype.prepClass=function (base, suffix, imp, state, imgsrc) {
var im, c=base + suffix, isC=hX_4.isClassDefined(c);
this.foundClass=(this.foundClass || suffix==hX_4._E) ? this.foundClass : isC;
imp[state]=(isC) ? c : base;
if (arguments.length > 4 && isC && (this.iconFromClass || this.iconSrc[state] == null)) {
im=hX_4.getClassStyle(c, hX_4._BIMG);
if (im && im.length > 0) {
this.iconFromClass=true;
this.iconSrc[state]=im;
}
}
}
HxG_4.prototype.JSFImage.prototype.addSpansToInput=function () {
if (!this.DOMobj) return false;
this.prepImages();
if (this.image && this.image[this.NORMAL])
this.DOMobj.setAttribute(hX_4._SRC, this.image[this.NORMAL].src);
else if ((this.DOMobj.tagName==hX_4._IMG || this.DOMobj.type==hX_4._lIMG) &&  (this.DOMobj.src==null || this.DOMobj.src.length==0))
this.DOMobj.setAttribute(hX_4._SRC, this.r.getURL(hX_4.R_IMG_SPACER));
if (this.label || this.iconSrc[this.NORMAL]) {
var tag, prop=this.gE(hX_4._POS);
tag=document.createElement(hX_4._SPN);
tag.setAttribute (hX_4._ID, this.DOMobj.id + "_SPAN");
tag.style.display=this.gE(hX_4._DSP);
tag.style.visibility= this.gE(hX_4._VIS);
tag.style.margin=tag.style.padding=tag.style.borderWidth=hX_4._ZPX;
tag.style.position=(prop != hX_4._ABS) ? hX_4._REL : hX_4._ABS;
tag.style.left=this.gE(hX_4._LFT);
tag.style.right=this.gE(hX_4._RGT);
tag.style.top=this.gE(hX_4._TOP);
tag.style.bottom= this.gE(hX_4._BOT);
this.DOMobj.style.position=hX_4._REL;
this.DOMobj.style.left=this.DOMobj.style.right=this.DOMobj.style.top=this.DOMobj.style.bottom=hX_4._E;
this.outerSpan=this.DOMobj.parentNode.insertBefore(tag, this.DOMobj);
this.outerSpan.appendChild(this.DOMobj);
tag=document.createElement(hX_4.brw.isIE() ? hX_4._SPN : hX_4._DIV);
tag.setAttribute(hX_4._ID, this.DOMobj.id + "_DIV");
tag.style.position=hX_4._ABS;
tag.style.display=this.dispType;
tag.style.overflow=hX_4._HI;
tag.style.zIndex=hX_4._1;
tag.style.margin=tag.style.padding=tag.style.borderWidth=hX_4._ZPX;
this.innerDiv=this.outerSpan.insertBefore(tag, this.DOMobj);
if (this.icon[this.NORMAL]) {
tag=document.createElement(hX_4._IMG);
tag.setAttribute(hX_4._ID, this.DOMobj.id + "_ICON");
tag.setAttribute(hX_4._SRC, this.icon[this.NORMAL].src);
tag.setAttribute(hX_4._BRD, hX_4._Z);
this.iconAbsolute=(hX_4._ABS == hX_4.getClassStyle(this.iconClass[this.NORMAL], hX_4._POS));
tag.style.position=hX_4._ABS;
tag.style.display=hX_4._E;
tag.style.zIndex=hX_4._1;
if (this.iconFromClass) tag.style.backgroundImage=hX_4._NO;
this.iconTag=this.innerDiv.appendChild(tag);
}
if (this.label) {
tag=document.createElement(hX_4._SPN);
tag.setAttribute (hX_4._ID, this.DOMobj.id + "_LABEL");
this.labelAbsolute=(hX_4._ABS == hX_4.getClassStyle(this.labelClass[this.NORMAL], hX_4._POS));
tag.style.position=hX_4._ABS;
tag.style.display=this.dispType;
tag.style.zIndex=hX_4._2;
this.labelTag=this.innerDiv.appendChild(tag);
}
if (hX_4.brw.isIE()) {
if (this.DOMobj.tagName == hX_4._IMG)
tag=document.createElement(hX_4._IMG)
else {
tag=document.createElement(hX_4._INP);
tag.setAttribute(hX_4._TYP, hX_4._lIMG);
}
tag.setAttribute(hX_4._ID, this.DOMobj.id + "_MOUSE");
tag.setAttribute(hX_4._SRC, this.r.getURL(hX_4.R_IMG_SPACER));
tag.tabIndex=hX_4.__1;
tag.style.zIndex="3";
tag.style.position=hX_4._ABS;
tag.style.margin=tag.style.padding=tag.style.borderWidth=hX_4._ZPX;
tag.style.left=tag.style.top=hX_4._ZPX;
tag.style.display=hX_4._E;
tag.setAttribute(hX_4._ALT, this.DOMobj.alt);
tag.setAttribute(hX_4._TTL, this.DOMobj.title);
this.mouseDiv=this.innerDiv.appendChild(tag);
tag.onmouseover=this.DOMobj.onmouseover;
tag.onmouseout=this.DOMobj.onmouseout;
tag.onmousemove=this.DOMobj.onmousemove;
tag.onclick=this.DOMobj.onclick;
tag.onmousedown=this.DOMobj.onmousedown;
tag.onmouseup=this.DOMobj.onmouseup;
this.mouseDiv=this.innerDiv.appendChild(tag);
var behaviors=hX_4.getBehaviorsById(this.DOMobj.id);
if (behaviors) {
for (var b=0; b < behaviors.length; b++)
hX_4.addBehavior(tag.id, behaviors[b].eventname, behaviors[b]);
}
}
} else {
if (this.image[this.MOUSED] == null && this.image[this.DEPRESSED] == null && this.image[this.DISABLED] == null && !this.foundClass)
this.optimizeEvents=true;
}
this.sizeImageToAttributes(true);
if (!this.optimizeEvents) {
hX_4.attachComponentEvent (this.DOMobj, hX_4._onKD, hX_4._lN);
hX_4.attachComponentEvent (this.DOMobj, hX_4._onKU, hX_4._lN);
hX_4.attachComponentEvent (this.DOMobj, hX_4._onB, hX_4._lN);
if (this.outerSpan && (this.labelTag || this.iconTag)) {
var spanTarget=(this.mouseDiv) ? this.mouseDiv : this.outerSpan;
hX_4.attachEvent (spanTarget, hX_4._onMC, hX_4._lN, this.dispatchRelay);
hX_4.attachEvent (spanTarget, hX_4._onMU, hX_4._lN, this.dispatchRelay);
hX_4.attachEvent (spanTarget, hX_4._onMD, hX_4._lN, this.dispatchRelay);
hX_4.attachEvent (spanTarget, hX_4._onMV, hX_4._lN, this.dispatchRelay);
hX_4.attachEvent (spanTarget, hX_4._onMO, hX_4._lN, this.dispatchRelay);
} else {
hX_4.attachComponentEvent (this.DOMobj, hX_4._onMC, hX_4._lN);
hX_4.attachComponentEvent (this.DOMobj, hX_4._onMU, hX_4._lN);
hX_4.attachComponentEvent (this.DOMobj, hX_4._onMD, hX_4._lN);
hX_4.attachComponentEvent (this.DOMobj, hX_4._onMV, hX_4._lN);
hX_4.attachComponentEvent (this.DOMobj, hX_4._onMO, hX_4._lN);
}
hX_4.i.attachMonitor(this.DOMobj, "standard1", "className", "class", hX_4._DSB, hX_4._RDO, hX_4._ALT, hX_4._TTL);
if (!this.noResize && this.outerSpan)
hX_4.i.attachResizeMonitor(this.DOMobj);
}
return true;
}
HxG_4.prototype.JSFImage.prototype.sizeImageToAttributes=function (skipPrep) {
if (!this.DOMobj) return false;
if (skipPrep == null) this.prepImages();
if (this.outerSpan && (this.DOMobj.parentNode.id==undefined || this.DOMobj.parentNode.id != this.DOMobj.id + "_SPAN")) {
this.DOMobj.parentNode.insertBefore(this.outerSpan, this.DOMobj);
this.outerSpan.appendChild(this.DOMobj);
}
if (this.outerSpan) {
var bDisplay=this.gE(hX_4._DSP);
if (bDisplay == hX_4._NO)
this.outerSpan.style.display=hX_4._NO;
else {
var bDisabled=(this.DOMobj.disabled || this.DOMobj.readOnly);
var bHideFocus=(this.DOMobj.hideFocus) ? this.DOMobj.hideFocus : false;
var bNoSelect=(this.DOMobj.unselectable) ? this.DOMobj.unselectable : false;
var bVisible=this.gE(hX_4._VIS);
var zIndex=this.gE(hX_4._ZND);
zIndex=hX_4.isString(zIndex) ? parseInt(zIndex) : zIndex;
if (hX_4.brw.isIE() && this.outerSpan.disabled != bDisabled) this.outerSpan.disabled=bDisabled;
if (this.outerSpan.style.display != bDisplay)	this.outerSpan.style.display=bDisplay;
if (this.outerSpan.style.visibility	!= bVisible)this.outerSpan.style.visibility=bVisible;
if (this.DOMobj.hideFocus && this.outerspan.hideFocus != bHideFocus)		this.outerSpan.HideFocus=bHideFocus;
if (this.DOMobj.unselectable && this.outerspan.unselectable != bNoSelect)	this.outerSpan.unselectable=bNoSelect;
if (zIndex!=null && zIndex > 0) {
if (this.outerSpan.style.zIndex != (zIndex+hX_4._E)) this.outerSpan.style.zIndex=zIndex+hX_4._E;
zIndex=(zIndex+1)+hX_4._E;
}
if (this.labelTag || this.iconTag) {
if (this.labelTag) {
if (this.labelTag.className != this.labelClass[this.NORMAL]) this.labelTag.className=this.labelClass[this.NORMAL];
if (hX_4.getIHTML(this.labelTag) != this.label) hX_4.setIHTML(this.labelTag, this.label);
if (hX_4.brw.isIE() && this.labelTag.disabled != bDisabled)		this.labelTag.disabled=bDisabled;
}
if (this.iconTag) {
if (this.iconTag.className != this.iconClass[this.NORMAL]) this.iconTag.className=this.iconClass[this.NORMAL];
if (hX_4.brw.isIE() && this.iconTag.disabled != bDisabled) this.iconTag.disabled=bDisabled;
this.iconTag.src=(bDisabled && this.icon[this.DISABLED].src)?(this.icon[this.DISABLED].src):(this.icon[this.NORMAL].src);
}
if (this.mouseDiv && this.mouseDiv.disabled != bDisabled) this.mouseDiv.disabled=bDisabled;
this.sizeContentToAttributes(zIndex);
if (!hX_4.brw.isIE())
hX_4.i.startTimerTimed(this.DOMobj.id, "redraw", "redraw", 1);
}
}
}
this.HTMLrendered=true;
return true;
}
HxG_4.prototype.JSFImage.prototype.sizeContentToAttributes=function (zIndex) {
var btnHeight= hX_4.g.getRendHeight(this.DOMobj);
var btnWidth=hX_4.g.getRendWidth(this.DOMobj);
var prop, prop1, prop2, align, span, t, off=0;
if (!hX_4.brw.isIE()) {
prop=hX_4.g.getAbsPosTop(this.outerSpan);
prop1= hX_4.g.getAbsPosTop(this.DOMobj);
off=prop1 - prop;
}
prop=(this.DOMobj.alt && this.DOMobj.alt.length > 0) ? this.DOMobj.alt : (this.label && this.label.length > 0 ? this.label: null);
prop1=(this.DOMobj.title && this.DOMobj.title.length > 0) ? this.DOMobj.title : (this.label && this.label.length > 0 ? this.label:null);
prop2=this.gE(hX_4._CRS);
if (this.innerDiv) {
t=hX_4._ZPX;
hX_4.g.setP(this.innerDiv, hX_4._LFT, t);
t=off + hX_4._PX;
hX_4.g.setP(this.innerDiv, hX_4._TOP, t);
t=btnWidth + hX_4._PX;
hX_4.g.setP(this.innerDiv, hX_4._WD, t);
t=btnHeight + hX_4._PX;
hX_4.g.setP(this.innerDiv, hX_4._HT, t);
if (zIndex && this.innerDiv.style.zIndex != zIndex) this.innerDiv.style.zIndex=zIndex;
if (prop2 && prop2.length > 0) hX_4.g.setP(this.innerDiv,hX_4._CRS, prop2);
}
if (this.mouseDiv) {
t=btnWidth + hX_4._PX;
hX_4.g.setP(this.mouseDiv, hX_4._WD, t);
t=btnHeight + hX_4._PX;
hX_4.g.setP(this.mouseDiv, hX_4._HT, t);
if (this.mouseDiv.alt != prop)		this.mouseDiv.alt=prop;
if (this.mouseDiv.title != prop1)	this.mouseDiv.title=prop1;
if (prop2 && prop2.length > 0) hX_4.g.setP(this.mouseDiv,hX_4._CRS,prop2);
}
if ((this.DOMobj.alt == null || this.DOMobj.alt.length == 0) && (prop)) this.DOMobj.alt=prop;
if ((this.DOMobj.title == null || this.DOMobj.title.length == 0) && (prop1)) this.DOMobj.title=prop1;
if (this.labelTag && hX_4.getIHTML(this.labelTag) != this.label) hX_4.setIHTML(this.labelTag, this.label);
if (this.labelTag && !this.labelAbsolute) {
prop=hX_4.g.getP(this.labelTag, hX_4._TXA);
align=(this.labelClass[this.NORMAL].length>0 && prop && prop.length > 0 && prop != hX_4._AUT) ? prop : hX_4._CTR;
span=hX_4.g.getRendWidth(this.labelTag);
t=((btnWidth - span) > 0) ? (btnWidth - span) : 0;
t=((align == hX_4._LFT) ? 0 : ((align == hX_4._RGT) ? t : (Math.floor(t/2)))) + hX_4._PX;
hX_4.g.setP(this.labelTag, hX_4._LFT, t);
prop=hX_4.g.getP(this.labelTag, hX_4._VXA);
align=(this.labelClass[this.NORMAL].length>0 && prop && prop.length > 0 && prop != hX_4._AUT) ? prop : hX_4._MID;
span=hX_4.g.getRendHeight(this.labelTag);
t=((btnHeight - span)) > 0 ? (btnHeight - span) : 0;
t=((align == hX_4._TOP) ? 0 : ((align == hX_4._BOT) ? (t) : (Math.floor(t/2)))) + hX_4._PX;
hX_4.g.setP(this.labelTag, hX_4._TOP, t);
if (prop2 && prop2.length > 0) hX_4.g.setP(this.labelTag,hX_4._CRS,prop2);
}
if (this.iconTag && !this.iconAbsolute) {
prop=hX_4.getClassStyle(this.iconTag.className, hX_4._TXA);
align=(this.iconClass[this.NORMAL].length>0 && prop && prop.length > 0 && prop != hX_4._AUT) ? prop : hX_4._CTR;
span=hX_4.g.getRendWidth(this.iconTag);
t=((btnWidth - span) > 0) ? (btnWidth - span) : 0;
t=((align == hX_4._LFT) ? 0 : ((align == hX_4._RGT) ? t : (Math.floor(t/2)))) + hX_4._PX;
hX_4.g.setP(this.iconTag, hX_4._LFT, t);
prop=hX_4.getClassStyle(this.iconTag.className, hX_4._VXA);
align=(this.iconClass[this.NORMAL].length>0 && prop && prop.length > 0 && prop != hX_4._AUT) ? prop : hX_4._MID;
span=hX_4.g.getRendHeight(this.iconTag);
t=((btnHeight - span)) > 0 ? (btnHeight - span) : 0;
t=((align == hX_4._TOP) ? 0 : ((align == hX_4._BOT) ? t : (Math.floor(t/2)))) + hX_4._PX;
hX_4.g.setP(this.iconTag, hX_4._TOP, t);
if (prop2 && prop2.length > 0) hX_4.g.setP(this.iconTag, hX_4._CRS, prop2);
}
}
HxG_4.prototype.JSFTwistie=function () {
this.type=hX_4.CMP_twistie;
this.direction=hX_4.TW_RT;
this.style=hX_4.TW_VEE;
this.barstyle=hX_4.TW_NOBAR;
this.size=this.sColorEdge=this.sColorFill=null;
this.ptype=hX_4._BTN;
this.canvas=this.colorEdge =this.colorFill=null;
this.height=this.width=this.saveCanvasLeft=this.saveCanvasTop=0;
this.saveBorderStyle=hX_4._E;
this.attributeTable=[];
this.attributeTable	['direction']=['direction',	hX_4.ARG_TO_NUM,	false,	0,		3];
this.attributeTable	['style']=['style',		hX_4.ARG_TO_NUM,	false,	0,		3];
this.attributeTable	['bar-style']=['barstyle',	hX_4.ARG_TO_NUM,	false,	0,		2];
this.attributeTable	['size']=['size',		hX_4.ARG_TO_NUM,	false,	0,	   999];
this.attributeTable ['color-edge']=['sColorEdge',hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['color-fill']=['sColorFill',hX_4.ARG_TO_NAN,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFTwistie.prototype.onPageLoad=function () {
this.redraw();
return true;
}
HxG_4.prototype.JSFTwistie.prototype.redraw=function () {
this.sizeImageToAttributes();
this.draw();
return true;
}
HxG_4.prototype.JSFTwistie.prototype.uirelease=function () {
return true;
}
HxG_4.prototype.JSFTwistie.prototype.setValue=function (value) {
return false;
}
HxG_4.prototype.JSFTwistie.prototype.getValue=function() {
return null;
}
HxG_4.prototype.JSFTwistie.prototype.setAttribute=function(a) {
hX_4.parseArg (this.attributeTable, this, a);
if (this.HTMLrendered) this.redraw();
return true;
}
HxG_4.prototype.JSFTwistie.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.JSFTwistie.prototype.sizeImageToAttributes=function () {
if (!this.DOMobj) return false;
if (this.DOMobj.tagName != hX_4._BTN && this.DOMobj.tagName != hX_4._INP && this.DOMobj.tagName == hX_4._IMG) return false;
if (this.size==null || this.size==hX_4._E) {
var sSize=hX_4.g.getP(this.DOMobj, hX_4._HT), nSize=parseInt(sSize, 10);
this.size=(nSize == null || nSize == 0 || isNaN(nSize)) ? 7 : (Math.floor((nSize-2+1)/2));
}
var realclass=this.DOMobj.className;
this.DOMobj.className=realclass + "_twistie";
var twistieColorFill=hX_4.g.getP(this.DOMobj, hX_4._COR), twistieColorEdge=hX_4.g.getP(this.DOMobj, hX_4._BRLCL), twistieType=hX_4.g.getP(this.DOMobj, "list-style-type"), twistieType1=hX_4.g.getP(this.DOMobj, "list-style-position");
this.DOMobj.className=realclass;
this.colorFill=this.sColorFill;
this.colorEdge=this.sColorEdge;
if (this.sColorFill == hX_4._E || this.sColorEdge == hX_4._E || this.sColorFill == null || this.sColorEdge == null) {
if (this.sColorFill == hX_4._E || this.sColorFill == null) this.colorFill=twistieColorFill;
if (this.sColorEdge == hX_4._E || this.sColorEdge == null) this.colorEdge=twistieColorEdge;
}
if (this.DOMobj.disabled) this.colorFill=this.colorEdge="GrayText";
this.colorFill=(this.colorFill == hX_4._E) ? "windowtext" : this.colorFill;
this.colorEdge=(this.colorEdge == hX_4._E) ? "windowtext" : this.colorEdge;
if (twistieType == "square") this.style=hX_4.TW_TRI;
else if (twistieType == "circle") this.style=hX_4.TW_PUG;
else if (twistieType == "decimal") this.style=hX_4.TW_SNOUT;
if (twistieType1 == "inside") this.barstyle=hX_4.TW_BAR_INNER;
this.height=this.width=0;
var even=((Math.floor(this.size/2)*2) == this.size);
var b=(this.barstyle == hX_4.TW_BAR_INNER) ? 4: 0
 var v=(this.style == hX_4.TW_SNOUT) ? (even ? this.size :this.size+1) : ((this.style == hX_4.TW_TRI) ? Math.floor(((this.size+1)/2)) : Math.floor(((this.size+1)/2) + 1));
if (this.direction == hX_4.TW_LT || this.direction == hX_4.TW_RT) {
this.height=this.size;
this.width=v + b;
} else {
this.width=this.size;
this.height=v + b;
}
if (this.DOMobj.tagName == hX_4._BTN) {
this.canvas=this.DOMobj.lastChild;
if (this.canvas == null || this.canvas.tagName != hX_4._DIV || this.canvas.id != (this.DOMobj.id+"_TWISTIE")) {
this.canvas=document.createElement(hX_4._DIV);
this.canvas.setAttribute (hX_4._ID, this.DOMobj.id+"_TWISTIE");
this.canvas.style.position=hX_4._REL;
this.canvas.tabIndex=hX_4.__1;
this.canvas.unselectable=hX_4._ON;
this.DOMobj.appendChild(this.canvas);
this.ptype=hX_4._BTN;
}
} else {
var div=this.DOMobj.parentNode;
if (div == null || div.tagName==undefined || div.tagName != hX_4._DIV || div.id==undefined || div.id != (this.DOMobj.id+"_TWISTIE")) {
var find=hX_4.getElementById(this.DOMobj.id+"_TWISTIE");
if (find) {
div=find;
this.DOMobj.parentNode.insertBefore(div, this.DOMobj);
if (div.firstChild)
div.insertBefore(this.DOMobj, div.firstChild);
else
 appendChild(this.DOMobj);
}
}
if (div == null || div.tagName != hX_4._DIV || div.id==undefined || div.id != (this.DOMobj.id+"_TWISTIE")) {
div=document.createElement(hX_4._DIV);
div.setAttribute (hX_4._ID, this.DOMobj.id+"_TWISTIE");
div.style.position=hX_4._REL;
this.DOMobj.parentNode.insertBefore(div, this.DOMobj);
div.appendChild(this.DOMobj);
this.DOMobj.style.position=hX_4._REL;
if (this.DOMobj.style.zIndex == hX_4._E || this.DOMobj.style.zIndex == hX_4._Z  || this.DOMobj.style.zIndex == hX_4._AUT) this.DOMobj.style.zIndex=hX_4._2;
this.DOMobj.style.backgroundColor=hX_4._TRN;
if (hX_4.brw.isNavOrMoz()) {
var parent=div.parentNode;
if (parent.tagName && parent.tagName == hX_4._TD) {
parent.style.width=this.DOMobj.offsetWidth + hX_4._PX;
div.style.height=this.DOMobj.offsetHeight + hX_4._PX;
}
}
this.canvas=document.createElement(hX_4._DIV);
this.canvas.style.position=hX_4._ABS;
this.canvas.tabIndex=hX_4.__1;
this.canvas.unselectable=hX_4._ON;
this.canvas.zIndex=parseInt(this.DOMobj.style.zIndex,10)-1;
div.appendChild(this.canvas);
this.DOMobj.onmousedown=this.onredirect;
this.DOMobj.onmouseout=this.onredirect;
this.DOMobj.onmouseup=this.onredirect;
this.ptype=hX_4._INP;
}
this.canvas=div.lastChild;
}
var child=this.canvas.firstChild;
while (child != null) {
this.canvas.removeChild(child);
child=this.canvas.firstChild;
}
this.canvas.style.width=this.width + hX_4._PX;
this.canvas.style.height=this.height + hX_4._PX;
this.canvas.style.backgroundColor=hX_4._TRN;
var align, xWidth, xHeight, xx, yy, xOff, yOff;
if (this.ptype == hX_4._BTN) {
if (hX_4.brw.isNavOrMoz()) {
align=hX_4.g.getP(this.DOMobj, hX_4._TXA);
if (align == hX_4._CTR) {
xWidth=hX_4.g.getRendWidth(this.DOMobj);
xx=Math.floor((xWidth - this.width  - 1)/2);
this.canvas.style.left=(xx - 3) + hX_4._PX;
}
align=hX_4.g.getP(this.DOMobj, hX_4._VXA);
if (align == hX_4._MID)
this.canvas.style.top=hX_4.__1 + hX_4._PX;
}
} else {
xHeight=hX_4.g.getRendHeight(this.DOMobj);
xWidth=hX_4.g.getRendWidth(this.DOMobj);
yy=Math.round((xHeight- this.height)/2);
xx=Math.round((xWidth - this.width)/2);
yOff=xOff=0;
this.canvas.style.left=(xx + xOff) + hX_4._PX;
this.canvas.style.top=(yy + yOff) + hX_4._PX;
}
this.saveBorderStyle=this.DOMobj.style.borderStyle;
this.saveCanvasLeft=this.canvas.style.left;
this.saveCanvasTop=this.canvas.style.top;
return ((this.direction == hX_4.TW_LT || this.direction == hX_4.TW_RT) ? this.width : this.height);
}
HxG_4.prototype.JSFTwistie.prototype.onredirect=function (evt) {
evt=(evt) ? evt : ((event) ? event: null);
if (evt) {
var src=hX_4.evtGetTarget(evt);
if (src && src.tagName == hX_4._INP) {
var thisp=hX_4.getComponentById(src.id);
if (thisp && !thisp.DOMobj.disabled) {
thisp.drawState(evt);
}
}
}
}
HxG_4.prototype.JSFTwistie.prototype.drawState=function (evt) {
if (this.DOMobj.disabled) return;
if (evt.type==hX_4._evMD) {
hX_4.i.setFocus(this.DOMobj);
this.saveBorderStyle=this.DOMobj.style.borderStyle;
this.saveCanvasLeft=this.canvas.style.left;
this.saveCanvasTop=this.canvas.style.top;
this.DOMobj.style.borderStyle=hX_4._INS;
this.canvas.style.left=parseInt(this.canvas.style.left, 10) + 1;
this.canvas.style.top=parseInt(this.canvas.style.top, 10) + 1;
} else {
if (this.DOMobj.style.borderStyle != this.saveBorderStyle)	this.DOMobj.style.borderStyle=this.saveBorderStyle;
if (this.canvas.style.top  != this.saveCanvasTop)			this.canvas.style.top=this.saveCanvasTop;
if (this.canvas.style.left != this.saveCanvasLeft)			this.canvas.style.left=this.saveCanvasLeft;
}
}
HxG_4.prototype.JSFTwistie.prototype.draw=function() {
if (!this.DOMobj || !this.canvas)
return false;
var stroke=(this.style == hX_4.TW_SNOUT) ? 2 : 1;
var d, i, j, k=0, r, xs;
if (this.direction == hX_4.TW_RT || this.direction == hX_4.TW_LT) {
r=(this.direction == hX_4.TW_RT);
j=this.height;
i=(r) ? 0 : this.width-1;
if (this.style != hX_4.TW_VEE)
this.drawLine(i, k, 1, j, false, false, true, false, 1, this.colorEdge, this.colorFill);
else
 this.drawLine(i, k, 1, j, true, true, false, false, 1, this.colorEdge, hX_4._TRN);
if (this.style == hX_4.TW_TRI) {
j -= 2;
k++;
}
for (i=((r) ? i+1:i-stroke); j > stroke; i=((r) ? i+stroke:i-stroke)) {
this.drawLine(i, k, stroke, j, true, true, false, false, (this.style == hX_4.TW_VEE)?2:1, this.colorEdge, (this.style == hX_4.TW_VEE)?hX_4._TRN:this.colorFill);
k++;
j -= 2;
}
if (j > 0)
this.drawLine((r) ? i : i+(stroke-1), k, 1, j, false, false, true, false, 1, this.colorEdge, this.colorFill);
if (this.barstyle == hX_4.TW_BAR_INNER) {
xs=(this.style == hX_4.TW_VEE || this.style == hX_4.TW_TRI) ? 0 : 2;
this.drawLine((r) ? this.width-2 : 0, (xs > 0) ? 1:0, 2, this.height-xs, false, false, true, false, 1, this.colorEdge, this.colorFill);
}
} else {
d=(this.direction == hX_4.TW_DN);
i=(d) ? 0:this.height-1;
j=this.width;
if (this.style!=hX_4.TW_VEE)
this.drawLine(k, i, j, 1, true, false, false, false, 1, this.colorEdge, this.colorFill);
else
 this.drawLine(k, i, j, 1, false, false, true, true, 1, this.colorEdge, hX_4._TRN);
if (this.style == hX_4.TW_TRI) {
j -= 2;
k++;
}
for (i=((d) ? i+1:i-stroke); j > stroke; i=((d) ? i+stroke : i-stroke)) {
this.drawLine(k, i, j, stroke, false, false, true, true, (this.style == hX_4.TW_VEE)?2:1,this.colorEdge, (this.style == hX_4.TW_VEE)?hX_4._TRN:this.colorFill);
k++;
j -= 2;
}
if (j > 0)
this.drawLine(k, (d) ? i:i+(stroke-1), j, 1, true, false, false, false, 1, this.colorEdge, this.colorFill);
if (this.barstyle == hX_4.TW_BAR_INNER) {
xs=(this.style == hX_4.TW_VEE || this.style == hX_4.TW_TRI) ? 0 : 2;
this.drawLine((xs > 0) ? 1:0, (d) ? this.height-2:0, this.width-xs, 2, (d) ? false:true, (d)? true:false, false, false, 1, this.colorEdge, this.colorFill);
}
}
return true;
}
HxG_4.prototype.JSFTwistie.prototype.drawLine=function(xOffset, yOffset, width, height, T, B, L, R, n, edge, fill) {
var poly=document.createElement(hX_4._DIV);
poly.tabIndex=hX_4._1;
poly.style.position=hX_4._ABS;
poly.style.borderColor=edge;
poly.style.borderStyle=hX_4._SLD;
poly.style.borderWidth=hX_4._ZPX;
poly.style.overflow=hX_4._HI;
this.canvas.appendChild(poly);
var w=width, h=height, hide=false;
if (hX_4.brw.isW3Cstd()) {
if (T && B) {
h=h - (2*n);
if (h <= 0) {
hide=true;
n=height;
h=1;
}
} else if (L && R) {
w=w - (2*n);
if (w <= 0) {
hide=true;
n=width;
w=1;
}
} else if (L || R) {
hide=(h <= n);
w -= n;
} else if (T || B) {
hide=(w <= n);
h -= n;
}
}
poly.style.width=w + hX_4._PX;
poly.style.height=h + hX_4._PX;
poly.style.backgroundColor=(hide) ? hX_4._TRN : fill;
poly.style.left=xOffset + hX_4._PX;
poly.style.top=yOffset + hX_4._PX;
if (T) 	poly.style.borderTopWidth=n + hX_4._PX;
if (B)	poly.style.borderBottomWidth=n + hX_4._PX;
if (L)	poly.style.borderLeftWidth=n + hX_4._PX;
if (R)	poly.style.borderRightWidth=n + hX_4._PX;
if (hide) {
if (B)	poly.style.borderBottomWidth=hX_4._ZPX;
if (R)	poly.style.borderRightWidth=hX_4._ZPX;
}
}
HxG_4.prototype.JSFBehavior=function () {
this.beforeOthers=true;
this.suppressAttach=false;
}
HxG_4.prototype.JSFBehavior.prototype.onPageLoad=function () {
this.setEvent();
return true;
}
HxG_4.prototype.JSFBehavior.prototype.setAttribute=function(a) {
hX_4.parseArg (this.attributeTable, this, a);
if (this.setAttributeCode) this.setAttributeCode();
return true;
}
HxG_4.prototype.JSFBehavior.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.JSFBehavior.prototype.setEvent=function () {
if (this.DOMobj != null) {
if (!this.HTMLrendered && !(this.eventname==hX_4._onL || this.suppressAttach)) {
if (!this.beforeOthers) hX_4.attachBehaviorEvent(this.DOMobj, this.type, this.eventname, hX_4._lN);
else hX_4.attachBehaviorEvent(this.DOMobj, this.type, this.eventname, hX_4._lP);
}
if (this.setEventCode) this.setEventCode();
this.HTMLrendered=true;
return true;
}
return false;
}
HxG_4.prototype.JSFBehaviorGeneric=function () {
this.type=hX_4.BHR_generic;
this.beforeOthers=false;
this.fcn=null;
this.actions= [];
this.targets= [];
this.attributeTable=[];
this.attributeTable ['action']=['actions',	hX_4.ARG_TO_NAU,	false,	null,	null];
this.attributeTable ['function']=['fcn',		hX_4.ARG_TO_FCNS,	false,	null,	null];
this.attributeTable ['target']=['targets',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorGeneric.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorGeneric.prototype.dispatchBehavior=function (thisObj, evt) {
return ((this.DOMobj != null) && (evt != null)) ? hX_4.action.processAction(this.DOMobj, evt, this.fcn, this.actions, true, this.targets, null, null, null) : true;
}
HxG_4.prototype.JSFBehaviorKeybind=function () {
this.type=hX_4.BHR_keybind;
this.keyArray=[];
this.keyCode=this.modifier=this.fcn=null;
this.actions= [];
this.targets= [];
this.cancelBubble=true;
this.retainFocus=false;
this.coBehavior=-1;
this.attributeTable=[];
this.attributeTable ['keycode']=['keyCode',	hX_4.ARG_TO_NUM,	false,	1,		999999];
this.attributeTable ['modifier']=['modifier',	hX_4.ARG_TO_NAU,	false,	null,	null];
this.attributeTable ['action']=['actions',	hX_4.ARG_TO_NAU,	false,	null,	null];
this.attributeTable ['function']=['fcn',		hX_4.ARG_TO_FCNS,	false,	null,	null];
this.attributeTable ['target']=['targets',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['cancel-bubble']=['cancelBubble',	hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['retain-focus']=['retainFocus',	hX_4.ARG_IS_TRUE,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorKeybind.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFKey=function () {
this.keyCode=null;
this.modAlt=this.modShift=this.modCtrl=false;
this.actions=this.targets=this.fcn=null;
this.cancelBubble=true;
this.retainFocus=false;
}
HxG_4.prototype.JSFBehaviorKeybind.prototype.addSubComponent=function(obj) {
var sub=new hX_4.JSFKey();
sub.keyCode=obj.keyCode;
if (obj.modifier) {
obj.modifier=obj.modifier;
sub.modAlt=(obj.modifier.indexOf("ALT") >= 0);
sub.modShift= (obj.modifier.indexOf("SHIFT") >= 0);
sub.modCtrl=(obj.modifier.indexOf("CTRL") >= 0);
}
if (obj.actions)		sub.actions=obj.actions;
if (obj.targets)		sub.targets=obj.targets;
if (obj.fcn) 			sub.fcn=obj.fcn;
if (obj.cancelBubble)	sub.cancelBubble= obj.cancelBubble;
if (obj.retainFocus)	sub.retainFocus=obj.retainFocus;
this.keyArray.push(sub);
if (obj.keyCode == 112) document.onhelp=function () { return false; }
}
HxG_4.prototype.JSFBehaviorKeybind.prototype.setEventCode=function () {
if (!this.HTMLrendered)
if (hX_4.brw.isNavOrMoz()) hX_4.attachBehaviorEvent(this.DOMobj, this.type, hX_4._onKP, hX_4._lN, hX_4._onKD);
}
HxG_4.prototype.JSFBehaviorKeybind.prototype.setAttributeCode=function() {
var obj, i, found=false;
for (i=0; i < this.keyArray.length; i++) {
obj=this.keyArray[i];
if (obj.keyCode==this.keyCode && (this.modifier==null || (this.modifier!= null && obj.modifier && obj.modifier==this.modifier))) {
found=true;
if (this.actions)		obj.actions=this.actions;
if (this.targets)		obj.targets=this.targets;
if (this.fcn) 			obj.fcn=this.fcn;
if (this.cancelBubble)	obj.cancelBubble= this.cancelBubble;
if (this.retainFocus)	obj.retainFocus=this.retainFocus;
}
}
if (!found) this.addSubComponent(this);
}
HxG_4.prototype.isKeyBound=function(obj, keyname, evt, action) {
if (obj != null && keyname != null && this.isString(keyname)) {
var a, b, c, s, i, j, k, objid;
for (i=0; i < 2; i++) {
objid=(i==0) ? ((obj.tagName != HxG_4._FRM) ? obj.id : null) : ((obj.form != null && obj.form.tagName == HxG_4._FRM) ? obj.form.id : null)
b=(objid != null) ? (this.getBehaviorById(objid, hX_4.BHR_keybind, hX_4._evKD)) : null;
b=(b != null) ? b : this.getBehaviorById(objid, hX_4.BHR_keybind, hX_4._evKP);
if (b != null) {
for (k=0; k < b.keyArray.length; k++) {
if (b.keyArray[k].keyCode == keyname)
if (evt == null)
return true;
else {
a=((evt.altKey) ? true : false), c=((evt.ctrlKey) ? true : false), s=((evt.shiftKey) ? true : false);
if ((a == b.keyArray[k].modAlt) && (s == b.keyArray[k].modShift) && (c == b.keyArray[k].modCtrl)) {
if (action) {
for (j=0;j<b.keyArray[k].actions.length;j++) if (action==b.keyArray[k].actions[j]) return true;
return false;
}
return true;
}
}
}
}
}
}
return (false);
}
HxG_4.prototype.JSFBehaviorKeybind.prototype.dispatchBehavior=function (thisObj, evt) {
var result=true;
if ((this.DOMobj != null) && (evt != null) && (this.keyArray.length > 0)) {
var i, j, t, b, a=((evt.altKey) ? true : false), c=((evt.ctrlKey) ? true : false), s=((evt.shiftKey) ? true : false);
if (this.coBehavior==-1) this.coBehavior=hX_4.getBehaviorById(this.DOMobj.id, hX_4.BHR_assist, hX_4._onIN);
for (i=0; i < this.keyArray.length && result; i++) {
if ((evt.keyCode == this.keyArray[i].keyCode) && (a == this.keyArray[i].modAlt) && (s == this.keyArray[i].modShift) && (c == this.keyArray[i].modCtrl)) {
if ((this.keyArray[i].actions!=null && this.keyArray[i].actions.length>0 && this.keyArray[i].actions[0]!=null) || this.keyArray[i].fcn != null) {
if (evt.type == hX_4._evKP)
result=false;
else {
b=false;
if (this.coBehavior!=null) for (j=0;!b&&j<this.keyArray[i].actions.length;j++) b=(this.keyArray[i].actions[j]==hX_4.ACT_SUBMIT);
if (b && this.coBehavior.state && this.coBehavior.state.uirelease) this.coBehavior.state.uirelease();
result=hX_4.action.processAction(thisObj, evt, this.keyArray[i].fcn, this.keyArray[i].actions, true,
this.keyArray[i].targets, null, this.keyArray[i].cancelBubble, this.keyArray[i].retainFocus);
}
}
}
}
}
return result;
}
HxG_4.prototype.JSFBehaviorValidate=function () {
this.type=hX_4.BHR_validate;
this.validatorId=this.converterId=null;
this.successActions=[];
this.errorActions=[];
this.successTargets=[];
this.errorTargets=[];
this.successFunction= this.errorFunction=this.successClass=this.errorClass=this.defaultClass=null;
this.converter=this.validator=null;
this.coBehavior=-1;
this.attributeTable=[];
this.attributeTable ['validator']=['validatorId',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['converter']=['converterId',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['success-function']= ['successFunction',hX_4.ARG_TO_FCNS,	false,	null,	null];
this.attributeTable ['error-function']=['errorFunction',	hX_4.ARG_TO_FCNS,	false,	null,	null];
this.attributeTable ['success-action']=['successActions',hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['success-target']=['successTargets',hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['error-action']=['errorActions',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['error-target']=['errorTargets',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['success-class']=['successClass',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['error-class']=['errorClass',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['default-class']=['defaultClass',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorValidate.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorValidate.prototype.setAttributeCode=function () {
this.validator=this.converter=null;
if (this.validatorId) this.validator=hX_4.getValidatorById(this.validatorId);
if (this.converterId) this.converter=hX_4.getConverterById(this.converterId);
if (this.validator) {
if ((this.validator.type == hX_4.CVT_number || this.validator.type == hX_4.CVT_datetime) && this.converter == null)
this.validator=null;
}
}
HxG_4.prototype.JSFBehaviorValidate.prototype.setEventCode=function () {
if (!this.HTMLrendered) {
var t, i, foundError=false;
if (this.eventname == hX_4._onB && this.errorActions != null && this.successActions != null) {
for (i=0; !foundError && i < this.errorActions.length; i++) {
t=(this.errorActions[i]!=null) ? this.errorActions[i] : hX_4._E;
if (t==hX_4.ACT_FOCUS || t==hX_4.ACT_SELECTED || t==hX_4.ACT_UNSELECTED)
foundError=this.errorTargets == null || this.errorTargets.length < i+1 || this.errorTargets[i]==null || this.errorTargets[i].length==0 || this.errorTargets[i]==this.DOMobj.id;
}
if (foundError) {
for (i=0; i < this.successActions.length; i++) {
t=(this.successActions[i]!=null) ? this.successActions[i] : hX_4._E;
if (t==hX_4.ACT_FOCUS || t==hX_4.ACT_SELECTED) {
if (this.successTargets == null || this.successTargets.length < i+1 || this.successTargets[i]==null || this.successTargets[i].length==0 || this.successTargets[i]==this.DOMobj.id)
this.successActions[i]=hX_4._E;
}
}
}
}
foundError=false;
for (i=0; this.errorActions != null && i < this.errorActions.length; i++) {
t=(this.errorActions[i]!=null) ? this.errorActions[i] : hX_4._E;
if (t==hX_4.ACT_FOCUS || t==hX_4.ACT_SELECTED || t==hX_4.ACT_UNSELECTED) {
if (foundError) this.errorActions[i]=hX_4._E;
else foundError=true;
}
}
foundError=false;
for (i=0; this.successActions != null && i < this.successActions.length; i++) {
t=(this.successActions[i]!=null) ? this.successActions[i] : hX_4._E;
if (t==hX_4.ACT_FOCUS || t==hX_4.ACT_SELECTED || t==hX_4.ACT_UNSELECTED) {
if (foundError) this.successActions[i]=hX_4._E;
else foundError=true;
}
}
}
}
HxG_4.prototype.JSFBehaviorValidate.prototype.dispatchBehavior=function (thisObj, evt) {
var result=true;
if ((this.DOMobj != null) && (evt != null)) {
if (hX_4.pendingFocusReturn && hX_4.pendingFocusReturn != this.DOMobj.id)
return true;
if (evt.type==hX_4._evF && hX_4.pendingBlurRefocus != null && hX_4.pendingBlurRefocus == this.DOMobj.id) {
hX_4.pendingBlurRefocus=null;
return true;
}
hX_4.pendingFocusReturn=hX_4.pendingBlurRefocus=null;
if ((this.DOMobj.readOnly != null && this.DOMobj.readOnly == true) || (this.DOMobj.disabled != null && this.DOMobj.disabled == true))
return true;
if (this.coBehavior == -1) this.coBehavior=hX_4.getBehaviorById(this.DOMobj.id, hX_4.BHR_assist, hX_4._onIN);
if (evt.type==hX_4._evB || evt.type==hX_4._evF) {
var error=null, strValue=this.DOMobj.value, objValue=strValue;
if (evt.type==hX_4._evF) {
if (this.coBehavior && this.coBehavior.assist)
error=null;
else if (this.converter) {
if (this.converter && strValue.length > 0) {
objValue=this.converter.stringToValue(strValue);
if (objValue == null)
error=this.converter.lastError();
}
}
if (error != null && error == hX_4.ERR_empty)
error=null;
} else {
if (this.converter) {
if (strValue.length == 0 && (this.converter.type != hX_4.CVT_mask))
objValue=hX_4._E;
else {
objValue=this.converter.stringToValue(strValue);
if (objValue == null)
error=this.converter.lastError();
else {
strValue=this.converter.valueToString(objValue);
if (strValue == null) error=this.converter.lastError();
else this.DOMobj.value=strValue;
}
}
}
if (error == null && this.validator) {
if (!(this.validator.validate(objValue, this.converter)))
error=this.validator.lastError();
}
}
var fcn=this.successFunction, action, cssStyle, tgt;
if (error != null) {
evt.errorMsg=error;
evt.objValue=void(0);
} else {
if (fcn != null) {
evt.errorMsg=void(0);
evt.objValue=objValue;
try {
var realfcn=(hX_4.isFunction(fcn)) ? fcn : new Function ("event", fcn);
result=realfcn.call(thisObj, evt);
result=(hX_4.isUnDef(typeof result)) ? true : ((result == false) ? false: true);
if (evt) {
if (evt.returnValue!=undefined && evt.returnValue == false) result=false;
else if (evt.getPreventDefault && evt.getPreventDefault()) result=false;
}
}
catch (e) {
window.status=hX_4.INTERR_Dispatcher;
if (evt && evt.errorMsg)
evt.errorMsg=null;
}
if (!result) error=true;
}
}
if (error != null) {
fcn=this.errorFunction;
action=this.errorActions;
tgt=(this.errorTargets == null) ? [this.DOMobj] : this.errorTargets;
cssStyle=this.errorClass;
} else {
fcn=null;
action=this.successActions;
tgt=(this.successTargets == null) ? [this.DOMobj] : this.successTargets;
cssStyle=(this.successClass) ? this.successClass : this.defaultClass;
}
result=hX_4.action.processAction (this.DOMobj, evt, fcn, action, false, tgt, cssStyle, null, null, (error != null));
}
}
return result;
}
HxG_4.prototype.JSFBehaviorAssist=function () {
this.type=hX_4.BHR_assist;
this.suppressAttach=true;
this.converterId=this.validatorId=this.autoTab=this.autoSubmit=this.autoChar=this.promptChar=this.imeMode=null;
this.converter=this.validator=this.assist=this.state=this.maxChars=null;
this.doAutoChar=false;
this.attributeTable=[];
this.attributeTable ['converter']=['converterId',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['validator']=['validatorId',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['auto-char']=['autoChar',		hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['auto-tab']=['autoTab',		hX_4.ARG_TO_NUM,	false,	0,		999999];
this.attributeTable	['auto-submit']=['autoSubmit',	hX_4.ARG_IS_NAS,	false,	null,	null];
this.attributeTable ['prompt-char']=['promptChar',	hX_4.ARG_TO_NAS,	false,	null,	null];
this.attributeTable ['ime-mode']=['imeMode',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorAssist.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorAssist.prototype.setAttributeCode=function () {
this.validator=this.converter=null;
if (this.validatorId) this.validator=hX_4.getValidatorById(this.validatorId);
if (this.converterId) this.converter=hX_4.getConverterById(this.converterId);
if (this.validator) {
if ((this.validator.type==hX_4.CVT_number || this.validator.type==hX_4.CVT_datetime) && this.converter==null)
this.validator=null;
}
if (this.promptChar) {
if (this.promptChar == hX_4._DFT || this.promptChar.length == 0) this.promptChar=hX_4._U;
if (this.promptChar.length > 1) this.promptChar=this.promptChar.charAt(0);
this.autoChar=true;
}
if (this.autoChar && !this.promptChar) this.promptChar=hX_4._U;
if (this.autoChar && this.converter && this.converter.type==hX_4.CVT_number && this.converter.isExponent) {
this.promptChar=this.autoChar=null;
}
this.doAutoChar=(this.autoChar && this.converter);
}
HxG_4.prototype.JSFBehaviorAssist.prototype.setEventCode=function () {
if (!this.HTMLrendered) {
if (this.doAutoChar) {
this.state=new hX_4.inputState(this.DOMobj, this);
if (this.converter.type == hX_4.CVT_number)
this.assist=new hX_4.NumberAssist(this.DOMobj, this.state, this.converter, this.validator, this.promptChar);
else if (this.converter.type == hX_4.CVT_datetime)
this.assist=new hX_4.DateTimeAssist(this.DOMobj, this.state, this.converter, this.validator, this.promptChar);
else if (this.converter.type == hX_4.CVT_mask)
this.assist=new hX_4.MaskAssist(this.DOMobj, this.state, this.converter, this.validator, this.promptChar);
}
}
if (this.autoTab != null) {
var maxlen=(this.autoTab > 0) ? this.autoTab : 0;
var domMaxLen=(this.DOMobj.maxLength == -1 || this.DOMobj.maxLength == 0x7fffffff || this.DOMobj.maxLength == void(0)) ? 0 : this.DOMobj.maxLength;
maxlen=(maxlen <= 0) ? domMaxLen : maxlen;
this.maxChars=(maxlen > 0) ? maxlen : ((this.converter && this.converter.getMaxLength) ? this.converter.getMaxLength(this.validator) : 0);
if (this.maxChars <= 0)
this.autoTab=null;
else {
if (domMaxLen > 0) this.DOMobj.maxLength=this.maxChars;
if (!this.HTMLrendered && this.state == null) this.state=new hX_4.inputState(this.DOMobj, this, true);
this.state.setAutoTab(this.maxChars);
if (this.autoSubmit != null) this.state.setAutoSubmit(true);
}
}
if (this.imeMode != null) {
if (hX_4.brw.isIE()) {
if (this.assist != null) this.DOMobj.style.imeMode=hX_4._DSB;
else if (this.imeMode != null) this.DOMobj.style.imeMode=this.imeMode;
}
}
}
HxG_4.prototype.JSFBehaviorAlert=function () {
this.type=hX_4.BHR_alert;
this.message=hX_4._E;
this.mType=1;
this.attributeTable=[];
this.attributeTable ['message']=['message',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['prompt-type']=['mType',		hX_4.ARG_TO_NUM,	false,	0,		2];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorAlert.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorAlert.prototype.dispatchBehavior=function (thisObj, evt) {
if (this.DOMobj != null && this.eventname != hX_4._E)  {
var a=[];
var t=[this.message];
if (this.mType == 2) {
return false;
} else if (this.mType == 1 && this.message != hX_4._E) {
a.push(hX_4.ACT_CONFIRM);
return hX_4.action.processAction(this.DOMobj, evt, null, a, true, t, null, null, null);
} else if (this.message != hX_4._E) {
a.push(hX_4.ACT_ALERT);
hX_4.action.processAction(this.DOMobj, evt, null, a, true, t, null, null, null);
return true;
}
}
return true;
}
HxG_4.prototype.JSFBehaviorFocus=function () {
this.type=hX_4.BHR_focus;
this.beforeOthers=false;
this.suppressAttach=true;
this.focusId=null;
this.select=false;
this.attributeTable=[];
this.attributeTable ['focus-id']=['focusId',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['select']=['select',	hX_4.ARG_IS_TRUE,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorFocus.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorFocus.prototype.setEventCode=function() {
if (!this.HTMLrendered && this.eventname == hX_4._onL) this.dispatchBehavior(null, null);
return true;
}
HxG_4.prototype.JSFBehaviorFocus.prototype.dispatchBehavior=function (thisObj, evt) {
if (this.eventname != hX_4._E) {
var n, obj=(this.focusId == null) ? null : hX_4.getElementById(this.focusId);
if (obj == null || (obj && obj.tagName && obj.tagName == HxG_4._FRM)) {
n=hX_4.getTabElements();
if (n && n.length > 0 && n[0].obj) hX_4.i.setFocus(n[0].obj, this.select, true);
} else
 hX_4.i.setFocus(obj, this.select, true);
}
return;
}
HxG_4.prototype.JSFBehaviorHS=function () {
this.type=hX_4.BHR_hs;
this.beforeOthers=false;
this.inHideObject=this.inHideTree=this.inHideField=hX_4._E;
this.state=null;
this.hideObject=this.hideField=this.hideTree=null;
this.hasComponents=null;
this.attributeTable=[];
this.attributeTable ['hide-object']=['inHideObject',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['hide-tree']=['inHideTree',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['hide-field']=['inHideField',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['hide-field-value']=['state',	 hX_4.ARG_IS_NAN,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorHS.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorHS.prototype.setEventCode=function() {
this.hasComponents=(this.hideObject) ? hX_4.getComponentsInId(this.hideObject) : null;
this.hideShow();
return true;
}
HxG_4.prototype.JSFBehaviorHS.prototype.setAttributeCode=function() {
this.hideObject=hX_4.getElementById(this.inHideObject);
this.hideTree=hX_4.getElementById(this.inHideTree);
this.hideField=hX_4.getElementById(this.inHideField);
this.state=(this.state==null || this.state==hX_4._E)?hX_4._NO:this.state.toLowerCase();
if (this.HTMLrendered) this.hideShow();
return true;
}
HxG_4.prototype.JSFBehaviorHS.prototype.dispatchBehavior=function (thisObj, evt) {
if (this.DOMobj != null && this.hideObject != null) {
this.state=(this.hideObject.style.display == hX_4._NO) ? hX_4._VS : hX_4._NO;
this.hideShow();
}
return;
}
HxG_4.prototype.JSFBehaviorHS.prototype.hideShow=function () {
if (this.DOMobj != null && this.hideObject != null) {
var bHidden=(this.hideObject.style.display == hX_4._NO), bStateHidden=(!(this.state == hX_4._VS)), lD='_display';
if (bHidden != bStateHidden) {
var r, child, idString, node;
if (this.hideTree != null && this.hideTree.rows)
for (r=0; r < this.hideTree.rows.length; r++) {
if (r != 0) {
child=hX_4.findNestedObject(this.hideTree.rows[r], hX_4._TAB);
if (child != null && child.nodeName == hX_4._TAB) {
child.style.display=hX_4._NO;
idString=child.id;
idString=idString.substring(0,idString.lastIndexOf(hX_4._U));
node=hX_4.getElementById (idString+lD);
if (node != null) node.value=hX_4._NO;
}
}
}
if (this.state != hX_4._NO) {
this.hideObject.style.display=hX_4._E;
if (this.hasComponents)	hX_4.redraw();
} else
 this.hideObject.style.display=hX_4._NO;
}
if (this.hideField && this.state != this.hideField.value) this.hideField.value=this.state;
}
return;
}
HxG_4.prototype.JSFBehaviorTrack=function () {
this.type=hX_4.BHR_track;
this.suppressAttach=true;
this.lastField=null;
this.lastCursor=null;
this.isTrackable=function (obj) {
if (obj.tagName) {
var t, skip=(obj.tagName==hX_4._BTN || obj.tagName==hX_4._ANC);
if (!skip && obj.tagName == hX_4._INP) {
t=obj.type.toLowerCase();
skip=(t==hX_4._SBM || t==hX_4._RES || t==hX_4._lIMG || t==hX_4._TBTN)
}
return !skip;
}
return false;
}
this.attributeTable=[];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorTrack.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorTrack.prototype.setEventCode=function () {
if (!this.HTMLrendered) {
if (this.DOMobj && this.DOMobj.id && this.DOMobj.id.length > 0 && this.DOMobj.tagName && this.DOMobj.tagName == hX_4._FRM) {
this.lastField=document.getElementById(this.DOMobj.id + ":POST_LASTFIELD");
this.lastCursor= document.getElementById(this.DOMobj.id + ":POST_LASTCURSOR");
if (this.lastField != null && this.lastField.value!=undefined) {
this.lastField.disabled=false;
if (this.lastCursor != null) this.lastCursor.diabled=false;
if (hX_4.brw.isIE()) {
hX_4.attachBehaviorEvent(this.DOMobj, this.type, "onfocusin", hX_4._lF, hX_4._onIN);
} else {
var i, obj, tabElements=hX_4.getTabElements();
for (i=0; i < tabElements.length; i++) {
obj=tabElements[i].obj;
if (obj && obj.id && obj.tagName && this.isTrackable(obj))
hX_4.attachBehaviorEvent(obj, this.type, hX_4._onF, hX_4._lF, "oninput_FORM");
}
}
hX_4.attachBehaviorEvent(this.DOMobj, this.type, hX_4._onMU, hX_4._lF, hX_4._onIN);
hX_4.attachBehaviorEvent(this.DOMobj, this.type, hX_4._onKU, hX_4._lF, hX_4._onIN);
if (hX_4.cursorTracking == null) hX_4.cursorTracking=[];
hX_4.cursorTracking.push(this);
}
}
}
}
HxG_4.prototype.JSFBehaviorTrack.prototype.dispatchBehavior=function (thisObj, evt) {
var src, result=true;
if ((this.DOMobj != null) && (evt != null)) {
src=(evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : (hX_4.brw.isIE() ? document.body : null));
this.markFocus(src, evt.type);
}
return result;
}
HxG_4.prototype.JSFBehaviorTrack.prototype.markFocus=function (src, etype) {
if (src != null) {
if (src.form!=undefined && src.form!=null && src.form==this.DOMobj) {
var id=(src.id!=undefined && src.id!=null && src.id.length>0)?src.id:hX_4._E;
id=(id.length>0) ? id : (src.name!=undefined && src.name!=null && src.name.length>0)?src.name:hX_4._E;
if (id.length > 0 && hX_4.isTabbable(src) && this.isTrackable(src)) {
if (etype=="focusin" || etype==hX_4._evF) {
this.lastField.value=id;
if (this.lastCursor != null) this.lastCursor.value=-1;
} else if (this.lastCursor != null && (etype==hX_4._evMU || etype==hX_4._evKU)) {
if (this.lastField.value == id) {
var t=(src.type) ? src.type.toLowerCase() : hX_4._E;
this.lastCursor.value=(src.tagName==hX_4._TXT || (src.tagName==hX_4._INP && t==hX_4._XT)) ? hX_4.sel.getCaretPos(src) : -1;
}
}
}
}
}
}
HxG_4.prototype.JSFBehaviorMouseclick=function () {
this.type=hX_4.BHR_mouseclick;
this.suppressAttach=true;
this.timer=null;
this.mouseArray=[];
this.scope=hX_4._RGT;
this.fcn=null;
this.actions= [];
this.targets= [];
this.attributeTable=[];
this.attributeTable ['scope']=['scope',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['action']=['actions',	hX_4.ARG_TO_NAU,	false,	null,	null];
this.attributeTable ['function']=['fcn',		hX_4.ARG_TO_FCNS,	false,	null,	null];
this.attributeTable ['target']=['targets',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorMouseclick.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFMouse=function () {
this.scope=hX_4._RGT;
this.actions=this.fcn=this.targets=null;
}
HxG_4.prototype.JSFBehaviorMouseclick.prototype.addSubComponent=function(obj) {
var sub=new hX_4.JSFMouse();
sub.scope=obj.scope;
if (obj.actions)	sub.actions=obj.actions;
if (obj.targets)	sub.targets=obj.targets;
if (obj.fcn) 		sub.fcn=obj.fcn;
this.mouseArray.push(sub);
}
HxG_4.prototype.JSFBehaviorMouseclick.prototype.setAttributeCode=function() {
var o, i, found=false;
if (this.scope) this.scope=this.scope.toLowerCase();
for (i=0; i < this.mouseArray.length; i++) {
o=this.mouseArray[i];
if (o.scope==this.scope) {
found=true;
if (this.actions)	o.actions=this.actions;
if (this.targets)	o.targets=this.targets;
if (this.fcn) 		o.fcn=this.fcn;
}
}
if (!found) this.addSubComponent(this);
}
HxG_4.prototype.JSFBehaviorMouseclick.prototype.setEventCode=function () {
var i, ms=null;
for (i=0; i<this.mouseArray.length; i++) {
if (ms==null) ms=this.mouseArray[i].scope;
else if (this.mouseArray[i].scope==hX_4._ALL) ms=hX_4._ALL;
else if (this.mouseArray[i].scope==hX_4._LFT) ms=(ms==hX_4._LFT)?hX_4._LFT:hX_4._ALL;
else ms=(ms==hX_4._LFT)?hX_4._LFT:hX_4._ALL;
if (ms==hX_4._ALL) break;
}
if (document.body.setCapture) {
if (ms == hX_4._RGT || ms == hX_4._ALL)
hX_4.attachEvent(this.DOMobj, hX_4._onCM, hX_4._lL, "hX_4.dispatchMouse(this, event)");
if (ms == hX_4._LFT || ms == hX_4._ALL) {
hX_4.attachEvent(this.DOMobj, hX_4._onMC, hX_4._lL, "hX_4.dispatchMouse(this, event)");
hX_4.attachEvent(this.DOMobj, hX_4._onMCC, hX_4._lL, "hX_4.dispatchMouse(this, event)");
}
hX_4.attachEvent(this.DOMobj, hX_4._onMD, hX_4._lL, "hX_4.dispatchMouse(this, event)");
hX_4.attachEvent(this.DOMobj, hX_4._onMU, hX_4._lL, "hX_4.dispatchMouse(this, event)");
} else if (document.body.addEventListener) {
hX_4.attachEvent(window, hX_4._onMD, hX_4._lL, hX_4.dispatchMouse1, null, null, true);
hX_4.attachEvent(window, hX_4._onMU, hX_4._lL, hX_4.dispatchMouse1, null, null, true);
hX_4.attachEvent(window, hX_4._onMC, hX_4._lL, hX_4.dispatchMouse1, null, null, true);
hX_4.attachEvent(window, hX_4._onMCC,hX_4._lL, hX_4.dispatchMouse1, null, null, true);
}
}
HxG_4.prototype.JSFBehaviorMouseclick.prototype.dispatchTimer=function (item, action) {
document.body.releaseCapture();
this.timer=null;
}
HxG_4.prototype.dispatchMouse1=function (evt) {
hX_4.dispatchMouse(this, evt);
}
HxG_4.prototype.dispatchMouse=function (thisp, evt) {
if ((typeof hX_4)=="undefined") return true;
evt=(evt) ? evt : ((event) ? event: null);
var j, m, p, b=(evt.type==hX_4._evCM?2:((evt.button<=1)?0:2)), thisB=null, src=hX_4.i.dispatchID(thisp);
if (document.body.setCapture) {
src=hX_4.i.dispatchID(thisp);
if (evt && src) {
m=hX_4.getBehaviorsById(src);
for (j=0; j<m.length; j++) {
if (m[j].type==hX_4.BHR_mouseclick && m[j].eventname==hX_4._onMS) {
thisB=m[j]; break;
}
}
}
} else {
p=evt.target;
while (p && thisB==null) {
if (p.id || p.tagName==hX_4._BBODY) {
m=hX_4.getBehaviorsById(p.tagName==hX_4._BBODY?hX_4._BODY:p.id);
for (j=0; j<m.length; j++) {
if (m[j].type==hX_4.BHR_mouseclick && m[j].eventname==hX_4._onMS) {
thisB=m[j]; break;
}
}
}
p=p.parentNode;
}
}
if (thisB) {
m=false;
for (j=0; j<thisB.mouseArray.length; j++) {
if (thisB.mouseArray[j].scope==hX_4._ALL || (thisB.mouseArray[j].scope==hX_4._LFT && b==0) || (thisB.mouseArray[j].scope==hX_4._RGT && b==2)) {
if ((thisB.mouseArray[j].actions!=null && thisB.mouseArray[j].actions.length>0 && thisB.mouseArray[j].actions[0]!=null) || thisB.mouseArray[j].fcn != null) {
if (evt.type==hX_4._evMD) {
if (!m && document.body.setCapture) thisB.DOMobj.setCapture();
m=true;
} else if (evt.type==hX_4._evMU) {
if (!m && document.body.setCapture && thisB.timer==null)
thisB.timer=hX_4.i.startTimerTimed (thisB.id, 0, hX_4._onMS, 1, hX_4.BHR_mouseclick, hX_4._onMS);
m=true;
} else if (evt.type==hX_4._evMC || evt.type==hX_4._evCM) {
hX_4.action.processAction(thisB.DOMobj, evt, thisB.mouseArray[j].fcn, thisB.mouseArray[j].actions, true, thisB.mouseArray[j].targets, null, null, null);
m=true;
} else if (evt.type==hX_4._evMCC) {
m=true;
}
}
}
}
if (m) {
hX_4.i.cancelAction(evt, true);
return false;
}
}
return true;
}
HxG_4.prototype.JSFSpinner=function () {
this.type=hX_4.CMP_spinner;
this.buttonBorder=-1;
this.buttonColor=hX_4.CLR_BTN;
this.interval=this.interval1=this.interval2=this.saveArgs=null;
this.dataType=hX_4.CVT_number;
this.NPid=this.NVid=hX_4._E;
this.NP=this.NV=null;
this.spinstate=0;
this.JSFBTN=this.mouseToken=null;
this.attributeTable=[];
this.attributeTable ['type']=['dataType',		hX_4.ARG_TO_NAN,	true,	null,	null];
this.attributeTable ['validator']=['NVid',			hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['converter']=['NPid',			hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['increment']=['interval',		hX_4.ARG_TO_NUM,	false,	0.001,	9999999];
this.attributeTable ['increment1']=['interval1',		hX_4.ARG_TO_NUM,	false,	0.01,	9999999];
this.attributeTable ['increment2']=['interval2',		hX_4.ARG_TO_NUM,	false,	0.01,	9999999];
this.attributeTable	['button-color']=['buttonColor',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['btn-color']=['buttonColor',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['button-border']=['buttonBorder',	hX_4.ARG_TO_NUM,	false,	-1,		3];
this.attributeTable	['btn-border']=['buttonBorder',	hX_4.ARG_TO_NUM,	false,	-1,		3];
this.setAttribute(arguments);
this.saveArgs=arguments;
}
HxG_4.prototype.JSFSpinner.prototype.onPageLoad=function () {
if (this.dataType != hX_4.CVT_number && this.dataType != hX_4.CVT_datetime)
this.dataType=hX_4.CVT_number;
if (this.NPid && this.NP == null)
this.NP=hX_4.getConverterById(this.NPid);
if (this.NP == null) {
this.NP=(this.dataType==hX_4.CVT_datetime)?new hX_4.DateTimeConverter():hX_4.NumberConverter();
this.NP.setAttribute(this.saveArgs);
}
if (this.NVid && this.NV == null)
this.NV=hX_4.getValidatorById(this.NVid);
if (this.NV == null) {
this.NV=(this.dataType == hX_4.CVT_datetime)?new hX_4.DateTimeValidator():this.NV=new hX_4.NumberValidator();
this.NV.setAttribute(this.saveArgs);
}
this.interval=(this.interval != null) ? this.interval : ((this.dataType == hX_4.CVT_datetime) ? 3600:1);
this.JSFBTN=new hX_4.JSFSubButton(this, 2, this.buttonBorder, this.buttonColor, hX_4.STR_SPINNER_INCREMENT, hX_4.STR_SPINNER_DECREMENT, false);
this.redraw();
return true;
}
HxG_4.prototype.JSFSpinner.prototype.redraw=function (resizeOnly) {
this.JSFBTN.size(resizeOnly);
return true;
}
HxG_4.prototype.JSFSpinner.prototype.uirelease=function (free) {
this.spinstate=0;
this.JSFBTN.depress ("btn1", false);
this.JSFBTN.depress ("btn2", false);
if (free!=null) hX_4.uirelease(true);
return true;
}
HxG_4.prototype.JSFSpinner.prototype.setValue=function (value, notify, returns) {
var r=false;
if (this.DOMobj) {
var ivalue=null;
ivalue=(hX_4.isString(value)) ? this.NP.stringToValue (value) : value;
if (ivalue != null) {
ivalue=this.NV.coerce (ivalue, this.NP);
if (returns)
r=(ivalue != null) ? this.NP.valueToString(ivalue) : hX_4._E;
else {
this.DOMobj.value=(ivalue != null) ? this.NP.valueToString(ivalue) : hX_4._E;
if (notify) {
hX_4.i.markEvent (this.DOMobj, hX_4._onF);
hX_4.i.fireEvent (this.DOMobj, hX_4._onB);
}
r=true;
}
}
}
return r;
}
HxG_4.prototype.JSFSpinner.prototype.getValue=function(cast) {
if (this.DOMobj) return (cast)?(this.NV.coerce(this.DOMobj.value, this.NP)):this.DOMobj.value;
return null;
}
HxG_4.prototype.JSFSpinner.prototype.reValue=function (buttonitem, notify, inValue) {
if (this.DOMobj) {
var pos, delta=0, token=hX_4._E, value=(inValue!=null) ? this.NV.coerce(inValue, this.NP) : this.getValue(true);
if (value == null || isNaN(value))
value=(this.dataType==hX_4.CVT_datetime) ? new Date() : new Number(0);
else {
delta=this.interval;
if (this.dataType==hX_4.CVT_datetime && this.interval1) {
if (this.mouseToken!=null) token=this.mouseToken;
else {
pos=hX_4.sel.getCaretPos(this.DOMobj, false);
token=this.NP.stringToLastToken(this.getValue(), pos);
}
if (token==hX_4._lH) delta=this.interval;
else if (token==hX_4._lM) delta=this.interval1;
else delta=(this.interval2) ? this.interval2 : this.interval1;
}
delta=(buttonitem == "btn1") ? delta : -delta;
if (this.dataType==hX_4.CVT_number) {
var absdelta=(delta < 0) ? -(delta) : delta;
if (absdelta >= 5)
value=(delta >= 0)?((Math.floor(value/absdelta))* absdelta):((Math.ceil(value/absdelta))* absdelta);
}
}
if (this.dataType==hX_4.CVT_number) {
var absD=(delta < 0) ? -(delta) : delta;
if (absD < 1) {
var delta1, power10, power=(absD < .01) ? 3 : ((absD < .1) ? 2 : 1);
power10=Math.pow(10,power);
delta1=delta*power10; value1=value*power10;
value=(value1 + delta1)/power10;
} else {
value=value + delta;
}
} else
 hX_4.cal.adjustDate(value,0,0,0,0,0,delta);
if (inValue!=null)
return (this.setValue(value, false, true));
else {
this.setValue (value, notify);
if (this.interval1) {
var newpos=this.NP.posFromLastToken(this.getValue(), token);
hX_4.sel.setCaretPos(this.DOMobj, newpos);
}
}
}
return null;
}
HxG_4.prototype.JSFSpinner.prototype.setAttribute=function(a) {
var wasvalidator=this.NVid, wasconverter=this.NPid;
hX_4.parseArg (this.attributeTable, this, a);
if (this.bDsc) {
this.bDsc.btnColor=this.buttonColor
 this.bDsc.btnBorder=this.buttonBorder;
}
if (this.NPid && this.NPid != wasconverter) {
var NP=hX_4.getConverterById(this.NPid);
if (NP != null) this.NP=NP;
}
if (!this.NPid && this.NP)
this.NP.setAttribute(a);
if (this.NVid && this.NVid != wasvalidator) {
var NV=hX_4.getValidatorById(this.NVid);
if (this.NV != null) this.NV=NV;
}
if (!this.NVid && this.NV)
this.NV.setAttribute(a);
if (this.HTMLrendered) this.redraw();
return true;
}
HxG_4.prototype.JSFSpinner.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.JSFSpinner.prototype.isRedirectFcnKey=function (evt) {
var code=(evt.keyCode && (evt.keyCode != 0)) ? evt.keyCode : -1;
if (code == hX_4.KEY_UPARROW || code == hX_4.KEY_DNARROW) return true;
return false;
}
HxG_4.prototype.JSFSpinner.prototype.doRedirectFcnKey=function (evt, newValue) {
var code=(evt.keyCode && (evt.keyCode != 0)) ? evt.keyCode : -1;
var r=null;
if (code == hX_4.KEY_UPARROW)
r=this.reValue("btn1", false, newValue);
else if (code == hX_4.KEY_DNARROW)
r=this.reValue("btn2", false, newValue);
return r;
}
HxG_4.prototype.JSFSpinner.prototype.dispatchComponent=function (item, evt, action, keycode) {
var pos, saveToken=this.mouseToken;
this.mouseToken=null;
if (item == "btn1" || item == "btn2") {
switch (action) {
case hX_4._evMC:
this.mouseToken=saveToken;
this.uirelease(true);
this.JSFBTN.depress (item, true);
this.reValue(item, true);
this.uirelease(true);
break;
case hX_4._evMCC:
this.mouseToken=saveToken;
this.uirelease(true);
if (hX_4.brw.isIE()) {
this.JSFBTN.depress (item, true);
this.reValue(item, true);
this.uirelease(true);
}
break;
case hX_4._evMD:
if (this.dataType==hX_4.CVT_datetime) {
pos=(hX_4.sel.getCaretPos(this.DOMobj));
this.mouseToken=(pos>=0)?this.NP.stringToLastToken(this.getValue(), pos):0;
} else this.mouseToken=null;
this.uirelease(true);
this.JSFBTN.depress (item, true);
this.spinstate=1;
hX_4.i.startTimerTimed (this.id, item, "start", 400);
break;
case hX_4._evMO:
case hX_4._evMU:
this.mouseToken=saveToken;
if (this.spinstate == 1) this.uirelease(true);
break;
case hX_4._evKD:
if (this.spinstate == 0) this.uirelease(true);
if (keycode == hX_4.KEY_SPACEBAR) {
this.spinstate=1;
this.JSFBTN.depress (item, true);
this.reValue(item, true);
hX_4.i.cancelAction(evt);
return false;
} else if (keycode == hX_4.KEY_UPARROW) {
this.spinstate=1;
this.JSFBTN.depress ("btn1", true);
this.reValue("btn1", true);
hX_4.i.cancelAction(evt);
return false;
} else if (keycode == hX_4.KEY_DNARROW) {
this.spinstate=1;
this.JSFBTN.depress ("btn2", true);
this.reValue("btn2", true);
hX_4.i.cancelAction(evt);
return false;
} else if (keycode >= hX_4.KEY_SPACEBAR && keycode <= hX_4.KEY_DNARROW) {
hX_4.i.cancelAction(evt);
return false;
}
break;
case hX_4._evKU:
if (keycode >= hX_4.KEY_SPACEBAR && keycode <= hX_4.KEY_DNARROW) {
if (this.spinstate == 1) this.uirelease(true);
hX_4.i.cancelAction(evt);
return false;
}
break;
case hX_4._evKP:
if (keycode >= hX_4.KEY_SPACEBAR && keycode <= hX_4.KEY_DNARROW) {
hX_4.i.cancelAction(evt);
return false;
}
break;
default:
if (action!=hX_4._evMM)
this.uirelease(true);
}
} else if (item==hX_4._lINP) {
if (action==hX_4._evF) {
this.mouseToken=null;
} else if (action==hX_4._evKD) {
this.uirelease();
if (keycode == hX_4.KEY_UPARROW)
this.reValue("btn1", false);
else if (keycode == hX_4.KEY_DNARROW)
this.reValue("btn2", false);
}
} else {
this.uirelease(true);
}
return true;
}
HxG_4.prototype.JSFSpinner.prototype.dispatchTimer=function (item, action) {
if (item == "btn1" || item == "btn2") {
if (action == "spin") this.reValue(item, true);
else if (action == "start") hX_4.i.startTimerInterval (this.id, item, "spin", 75);
}
}
HxG_4.prototype.JSFSlider=function () {
this.type=hX_4.CMP_slider;
this.buttonBorder=-1;
this.buttonColor=hX_4.CLR_BTN;
this.interval=1;
this.scale_width=300;
this.show_labels=true;
this.sliderClass=hX_4.CLASS_DEF + hX_4.CLASS_SL;
this.sliderLinesClass=this.sliderClass + hX_4.CLASS_SL_LINES;
this.continuous=false;
this.labelInterval=this.CSSPrefix=this.saveArgs=null;
this.NPid=this.NVid=hX_4._E;
this.NP=this.NV=null;
this.objPopup=this.objStylus=this.objScale=this.objTicks=this.objLabels=null;
this.scale_height=2;
this.stylus_width=10;
this.stylus_height=20;
this.tick_height=5;
this.tick_width=2;
this.label_size=10;
this.ticks=this.start_tick=this.tick_tabs=0;
this.JSFBTN=null;
this.attributeTable=[];
this.attributeTable ['validator']=['NVid',			hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['converter']=['NPid',			hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['scale-width']=['scale_width', 	hX_4.ARG_TO_NUM, 	false,	0,		9999];
this.attributeTable ['show-labels']=['show_labels', 	hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['increment']=['interval',		hX_4.ARG_TO_NUM,	false,	0.01,	9999999];
this.attributeTable ['label-increment']=['labelInterval',	hX_4.ARG_TO_NUM,	false,	0.01,	9999999];
this.attributeTable	['css-prefix']=['CSSPrefix',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['button-color']=['buttonColor',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['btn-color']=['buttonColor',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['button-border']=['buttonBorder',	hX_4.ARG_TO_NUM,	false,	-1,		3];
this.attributeTable	['btn-border']=['buttonBorder',	hX_4.ARG_TO_NUM,	false,	-1,		3];
this.setAttribute(arguments);
this.saveArgs=arguments;
}
HxG_4.prototype.JSFSlider.prototype.onPageLoad=function () {
if (this.NPid && this.NP == null)
this.NP=hX_4.getConverterById(this.NPid);
if (this.NP == null) {
this.NP=new hX_4.NumberConverter();
this.NP.setAttribute(this.saveArgs);
}
if (this.NVid && this.NV == null)
this.NV=hX_4.getValidatorById(this.NVid);
if (this.NV == null) {
this.NV=new hX_4.NumberValidator();
this.NV.setAttribute(this.saveArgs);
}
this.verifyValidator();
this.JSFBTN=new hX_4.JSFSubButton(this, 1, this.buttonBorder, this.buttonColor, hX_4.STR_SLIDER_LABEL, null, true);
this.objPopup=hX_4.addPopup (this.id + "_popup", this.id, "");
this.redraw();
return true;
}
HxG_4.prototype.JSFSlider.prototype.redraw=function (resizeOnly) {
this.JSFBTN.size(resizeOnly);
return true;
}
HxG_4.prototype.JSFSlider.prototype.uirelease=function (free) {
this.JSFBTN.depress("btn1", false);
if (hX_4.uistate.getActiveComponent() == this && this.JSFBTN && this.JSFBTN.btn1)
hX_4.i.setFocus(this.JSFBTN.btn1);
if (free!=null) hX_4.uirelease(true);
return true;
}
HxG_4.prototype.JSFSlider.prototype.setValue=function (value, notify, returns) {
var r=false;
if (this.DOMobj) {
var ivalue=null;
if (hX_4.isString(value))
ivalue=this.NP.stringToValue (value);
else
 ivalue=value;
if (ivalue != null) {
ivalue=this.NV.coerce (ivalue, this.NP);
if (returns) {
r=(ivalue != null) ? this.NP.valueToString(ivalue) : hX_4._E;
} else {
this.DOMobj.value=(ivalue != null) ? this.NP.valueToString(ivalue) : hX_4._E;
if (notify) {
hX_4.i.markEvent (this.DOMobj, hX_4._onF);
hX_4.i.fireEvent (this.DOMobj, hX_4._onB);
}
r=true;
}
}
}
return r;
}
HxG_4.prototype.JSFSlider.prototype.getValue=function(cast) {
if (this.DOMobj)
return ((cast) ? (this.NV.coerce(this.DOMobj.value, this.NP)) : (this.DOMobj.value));
return null;
}
HxG_4.prototype.JSFSlider.prototype.reValue=function (buttonitem, notify, inValue) {
if (this.DOMobj) {
var absdelta, delta=0;
var value=(inValue!=null) ? this.NV.coerce(inValue, this.NP) : this.getValue(true);
if (value == null || isNaN(value))
value=new Number(0);
delta=(buttonitem == "btn1") ? this.interval : -(this.interval);
absdelta=(delta < 0) ? -(delta) : delta;
if (absdelta < 1) {
var power10, delta1, power=(absdelta < .01) ? 3 : ((absdelta < .1) ? 2 : 1);
power10=Math.pow(10,power);
delta1=delta*power10; value1=value*power10;
value=(value1 + delta1);
delta1=(delta1 < 0) ? -(delta1) : delta1;
value=(this.NV.minimum*power10) + ((Math.round((value-(this.NV.minimum*power10))/delta1))* delta1);
value=value/power10;
} else {
value=value + delta;
value=this.NV.minimum + ((Math.round((value-this.NV.minimum)/absdelta))* absdelta);
}
value=this.NV.coerce (value, this.NP);
if (inValue!=null)
return (this.setValue(value, false, true));
else
 this.setValue (value, notify);
}
return null;
}
HxG_4.prototype.JSFSlider.prototype.setAttribute=function(a) {
var wasvalidator=this.NVid, wasconverter=this.NPid;
hX_4.parseArg (this.attributeTable, this, a);
if (this.bDsc) {
this.bDsc.btnColor=this.buttonColor
 this.bDsc.btnBorder=this.buttonBorder;
}
if (this.NPid && this.NPid != wasconverter) {
var NP=hX_4.getConverterById(this.NPid);
if (NP != null) this.NP=NP;
}
if (!this.NPid && this.NP)
this.NP.setAttribute(a);
if (this.NVid && this.NVid != wasvalidator) {
var NV=hX_4.getValidatorById(this.NVid);
if (this.NV != null) this.NV=NV;
}
if (!this.NVid && this.NV)
this.NV.setAttribute(a);
if (this.NV != null)
this.verifyValidator();
this.labelInterval=(this.labelInterval==null)?null:(this.labelInterval<1?1:this.labelInterval);
if (this.HTMLrendered)
this.redraw();
return true;
}
HxG_4.prototype.JSFSlider.prototype.verifyValidator=function () {
var min=this.NV.getAttribute("minimum-bound"), max=this.NV.getAttribute("maximum-bound");
if (min == null && max == null) {
this.NV.setAttribute ("maximum-bound:10");
this.NV.setAttribute ("minimum-bound:0");
} else if (min == null) {
this.NV.setAttribute ("minimum-bound:"+(max-10));
} else if (max == null) {
this.NV.setAttribute ("maximum-bound:"+(min+10));
} else if (min >= max) {
min=max-10;
this.NV.setAttribute ("minimum-bound:"+min);
}
}
HxG_4.prototype.JSFSlider.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.JSFSlider.prototype.isRedirectFcnKey=function (evt) {
var code=(evt.keyCode && (evt.keyCode != 0)) ? evt.keyCode : -1;
if (code == hX_4.KEY_UPARROW || code == hX_4.KEY_DNARROW) return true;
return false;
}
HxG_4.prototype.JSFSlider.prototype.doRedirectFcnKey=function (evt, newValue) {
var r=null, code=(evt.keyCode && (evt.keyCode != 0)) ? evt.keyCode : -1;
if (code == hX_4.KEY_UPARROW) r=this.reValue("btn1", false, newValue);
else if (code == hX_4.KEY_DNARROW) r=this.reValue("btn2", false, newValue);
return r;
}
HxG_4.prototype.JSFSlider.prototype.dispatchComponent=function (item, evt, action, keycode) {
var rvalue=true, dropit=false, undropit=false;
if (this.objPopup != null) {
if (item == "btn1") {
switch (action) {
case hX_4._evMC:
case hX_4._evMCC:
case hX_4._evMM:
case hX_4._evMO:
case hX_4._evMV:
case hX_4._evMU:
case hX_4._evB:
case hX_4._evF:
break;
case hX_4._evMD:
if (this.objPopup.isPopped()) undropit=true;
else dropit=true;
break;
case hX_4._evKD:
if (keycode == hX_4.KEY_ESC) {
if (this.objPopup.isPopped()) {
this.setValue(this.escapeToValue, true);
undropit=true;
}
} else if (keycode == hX_4.KEY_SPACEBAR || keycode == hX_4.KEY_UPARROW || keycode == hX_4.KEY_DNARROW) {
if (this.objPopup.isPopped()) undropit=true;
else dropit=true;
hX_4.i.cancelAction(evt);
rvalue=false;
} else if (keycode >= hX_4.KEY_SPACEBAR && keycode <= hX_4.KEY_DNARROW) {
hX_4.i.cancelAction(evt);
rvalue=false;
}
break;
case hX_4._evKP:
case hX_4._evKU:
if (keycode >= hX_4.KEY_SPACEBAR && keycode <= hX_4.KEY_DNARROW) {
hX_4.i.cancelAction(evt);
rvalue=false;
}
break;
default:
this.uirelease(true);
break;
}
} else if (item==hX_4._lINP) {
if (action==hX_4._evKD) {
if (keycode == hX_4.KEY_DNARROW) {
this.reValue("btn2", false);
} else if (keycode == hX_4.KEY_UPARROW) {
this.reValue("btn1", false);
} else if (keycode == hX_4.KEY_ESC) {
if (this.objPopup.isPopped()) {
this.setValue(this.escapeToValue, false);
undropit=true;
}
}
}
} else {
this.uirelease(true);
}
if (dropit) {
this.escapeToValue=this.getValue();
hX_4.i.setFocus(this.JSFBTN.btn1);
this.uirelease(true);
hX_4.uistate.setActiveComponent (this);
this.JSFBTN.depress ("btn1", true);
this.sizeSliderToInput();
this.setStylusFromValue();
this.objPopup.uivisible();
hX_4.i.setFocus(this.objPopup.DOMobj);
rvalue=false;
} else if (undropit) {
this.uirelease(true);
rvalue=false;
}
}
return rvalue;
}
HxG_4.prototype.JSFSlider.prototype.dispatchTimer=function (item, action) {
if (item == "popup") {
if (action == "dragEnd")
this.uirelease(true);
}
}
HxG_4.prototype.JSFSlider.prototype.dragStart=function (xOff, yOff) {
}
HxG_4.prototype.JSFSlider.prototype.dragMove=function (xOff, yOff) {
var xLeft=xOff - hX_4.g.getAbsPosLeft(this.objScale);
xLeft=(xLeft < 0) ? 0 : xLeft;
xLeft=(xLeft > this.scale_width) ? this.scale_width : xLeft;
xLeft=this.NV.minimum + ((Math.round(xLeft / this.tick_tabs)) * this.interval);
this.setValue(xLeft);
this.setStylusFromValue();
}
HxG_4.prototype.JSFSlider.prototype.dragKey=function (keyaction, keycode) {
if (keyaction==hX_4._evKD) {
if (keycode == hX_4.KEY_ESC) {
if (this.objPopup.isPopped()) {
this.setValue(this.escapeToValue, true);
this.uirelease(true);
}
} else if (keycode == hX_4.KEY_SPACEBAR || keycode == hX_4.KEY_ENTER) {
if (!hX_4.dragger.keydown && this.objPopup.isPopped()) {
this.dragEnd();
this.uirelease(true);
}
} else if (keycode == hX_4.KEY_LTARROW) {
this.reValue("btn2", true);
this.setStylusFromValue();
} else if (keycode == hX_4.KEY_RTARROW) {
this.reValue("btn1", true);
this.setStylusFromValue();
}
hX_4.dragger.keydown=false;
}
}
HxG_4.prototype.JSFSlider.prototype.dragEnd=function () {
this.setValue(this.getValue(), true);
}
HxG_4.prototype.JSFSlider.prototype.sizeSliderToInput=function () {
var popup=this.objPopup, popupElem=popup.DOMobj, curValue, i, j, p;
if (popup && popupElem) {
this.sliderClass=((this.CSSPrefix != null && this.CSSPrefix.length>0) ? this.CSSPrefix : hX_4.CLASS_DEF) + hX_4.CLASS_SL;
this.sliderLinesClass=this.sliderClass + hX_4.CLASS_SL_LINES;
curValue=this.getValue(true);
this.ticks=((this.NV.maximum  - this.NV.minimum) / this.interval) + 1;
this.start_tick=(curValue - this.NV.minimum) / this.interval;
this.stylus_width=10;
this.stylus_height=20;
this.label_size=10;
this.scale_height=1;
this.tick_height=4;
this.tick_width=1;
this.tick_tabs=(this.scale_width-this.tick_width) / (this.ticks-1.0);
if (popupElem.className != this.sliderClass)popupElem.className=this.sliderClass;
if (popupElem.style.margin != hX_4._ZPX)	popupElem.style.margin=hX_4._ZPX;
if (popupElem.style.padding != hX_4._ZPX)	popupElem.style.padding=hX_4._ZPX;
var borderR=hX_4.g.parseBorder(popupElem, hX_4._RGT, 1), borderL=hX_4.g.parseBorder(popupElem, hX_4._LFT, 1), borderT=hX_4.g.parseBorder(popupElem, hX_4._TOP, 1), borderB=hX_4.g.parseBorder(popupElem, hX_4._BOT, 1);
if (hX_4.brw.isW3Cstd()) borderR=borderL=borderT=borderB=0;
i=this.NP.valueToString (this.NV.minimum).length; j=this.NP.valueToString (this.NV.maximum).length;
var maxlabWidth=Math.max(i,j)*(Math.floor(this.label_size*.6));
var maxleftMargin=Math.floor((Math.max(maxlabWidth,this.stylus_width)+1)/2);
maxlabWidth=(this.labelInterval) ? maxlabWidth*2:maxlabWidth;
var popheight=(this.stylus_height + this.tick_height + this.label_size + 3 + borderT + borderB), popwidth=(this.scale_width+(maxleftMargin*2)+borderL+borderR);
if (popupElem.style.height != popheight + hX_4._PX)	popupElem.style.height=popheight + hX_4._PX;
if (popupElem.style.width  != popwidth  + hX_4._PX)	popupElem.style.width=popwidth  + hX_4._PX;
borderR=borderL=borderT=borderB=0;
var sE=this.objScale, tE=this.objTicks, lE=this.objLabels, yE=this.objStylus;
if (this.objScale == null) {
sE=this.objScale=document.createElement(hX_4._DIV);
sE.setAttribute (hX_4._ID, this.id + "_scale");
sE.className=this.sliderLinesClass;
sE.style.position=hX_4._ABS;
sE.style.overflow=hX_4._HI;
sE.style.fontSize=sE.style.borderWidth=sE.style.margin=sE.style.padding=hX_4._ZPX;
popupElem.appendChild(sE);
tE=this.objTicks=document.createElement(hX_4._DIV);
tE.setAttribute (hX_4._ID, this.id + "_ticks");
tE.className=this.sliderLinesClass;
tE.style.position=hX_4._ABS;
tE.style.overflow=hX_4._HI;
tE.style.fontSize=tE.style.borderWidth=tE.style.margin=tE.style.padding=hX_4._ZPX;
tE.style.backgroundColor=hX_4._TRN;
popupElem.appendChild(tE);
lE=this.objLabels=document.createElement(hX_4._DIV);
lE.setAttribute (hX_4._ID, this.id + "_label");
lE.className=this.sliderLinesClass;
lE.style.position=hX_4._ABS;
lE.style.fontSize=lE.style.borderWidth=lE.style.margin=lE.style.padding=hX_4._ZPX;
lE.style.backgroundColor=hX_4._TRN;
popupElem.appendChild(lE);
yE=this.objStylus=document.createElement(hX_4._DIV);
yE.className=this.sliderLinesClass;
yE.style.position=hX_4._ABS;
yE.style.overflow=hX_4._HI;
yE.style.zIndex="1000001";
yE.style.fontSize=yE.style.borderWidth=yE.style.margin=yE.style.padding=hX_4._ZPX;
yE.style.backgroundColor=hX_4._TRN;
popupElem.appendChild(yE);
}
if (sE.className != this.sliderLinesClass)	sE.className=this.sliderLinesClass;
sE.style.left=(borderL+maxleftMargin) + hX_4._PX;
sE.style.top=((this.stylus_height/2)+borderT) + hX_4._PX;
sE.style.height=this.scale_height + hX_4._PX;
sE.style.width=this.scale_width + hX_4._PX;
p=hX_4.g.getP(sE, hX_4._COR);
if (sE.style.backgroundColor != p) 	sE.style.backgroundColor=p;
if (tE.className != this.sliderLinesClass)	tE.className=this.sliderLinesClass;
tE.style.left=(borderL+maxleftMargin) + hX_4._PX;
tE.style.top=((this.stylus_height/2)+this.scale_height+borderT) + hX_4._PX;
tE.style.height=((this.stylus_height/2)+this.tick_height) + hX_4._PX;
tE.style.width=this.scale_width + hX_4._PX;
var curTick=tE.firstChild;
for (i=0; i<this.ticks; i++) {
if (curTick == null) {
curTick=document.createElement(hX_4._DIV);
tE.appendChild(curTick);
curTick.style.position=hX_4._ABS;
curTick.style.overflow=hX_4._HI;
curTick.style.display=hX_4._BLK;
curTick.style.fontSize=curTick.style.borderWidth=curTick.style.padding=curTick.style.margin=hX_4._ZPX;
}
if (curTick.style.backgroundColor != p) curTick.style.backgroundColor=p;
curTick.style.left =(i*this.tick_tabs) + hX_4._PX;
curTick.style.width=this.tick_width + hX_4._PX;
if (i == 0 || i == (this.ticks-1)) {
curTick.style.top=hX_4._ZPX;
curTick.style.height=((this.stylus_height/2)+this.tick_height) + hX_4._PX;
} else {
curTick.style.top=(this.stylus_height/2) + hX_4._PX;
curTick.style.height=this.tick_height + hX_4._PX;
}
curTick=curTick.nextSibling;
}
while (curTick != null) {
curTick.style.display=hX_4._NO;
curTick=curTick.nextSibling;
}
if (lE.className != this.sliderClass) lE.className=this.sliderClass;
lE.style.left=(borderL+maxleftMargin) + hX_4._PX;
lE.style.top=(this.stylus_height+this.tick_height+borderT) + hX_4._PX;
lE.style.height=this.label_size + hX_4._PX;
lE.style.width=(this.scale_width+this.stylus_width + 3) + hX_4._PX;
var curLabel=lE.firstChild, label, txtNode, subCnt=this.labelInterval;
for (i=0; i<this.ticks; i++) {
if ((this.show_labels || i == 0 || i == this.ticks - 1) && (!this.show_labels || this.labelInterval==null || this.labelInterval==subCnt)) {
subCnt=0;
if (curLabel == null) {
curLabel=document.createElement(hX_4._DIV);
curLabel.className=this.sliderClass;
curLabel.style.position=hX_4._ABS;
curLabel.style.display=hX_4._BLK;
curLabel.style.verticalAlign=hX_4._TOP;
curLabel.style.textAlign=hX_4._CTR;
curLabel.style.top=hX_4._ZPX;
curLabel.style.fontSize=this.label_size + hX_4._PX;
curLabel.style.borderWidth=curLabel.style.margin=curLabel.style.padding=hX_4._ZPX;
curLabel.style.backgroundColor=hX_4._TRN;
if (hX_4.brw.isNavOrMoz() && hX_4.g.getP(curLabel, hX_4._CRS) == hX_4._AUT) curLabel.style.cursor=hX_4._DFT;
lE.appendChild(curLabel);
}
if (curLabel.className != this.sliderClass)	curLabel.className=this.sliderClass;
curLabel.style.left=((i*this.tick_tabs)-(maxlabWidth/2)+1) + hX_4._PX;
curLabel.style.width=maxlabWidth + hX_4._PX;
curLabel.style.height=(this.label_size) + hX_4._PX;
txtNode=curLabel.firstChild;
if (txtNode == null) {
txtNode=document.createTextNode(hX_4._B);
curLabel.appendChild(txtNode);
}
label=this.NV.minimum  + (i * this.interval);
if (label > this.NV.maximum) label=this.NV.maximum;
txtNode.nodeValue=this.NP.valueToString(label);
curLabel=curLabel.nextSibling;
}
subCnt++;
}
while (curLabel != null) {
curLabel.style.display=hX_4._NO;
curLabel=curLabel.nextSibling;
}
if (yE.className != this.sliderLinesClass)	yE.className=this.sliderLinesClass;
yE.style.height=this.stylus_height + hX_4._PX;
yE.style.width=this.stylus_width  + hX_4._PX;
var borderWidth=(hX_4.brw.isW3Cstd()) ? 2 : 0;
var borderHeight=(hX_4.brw.isW3Cstd()) ? 1 : 0;
var triangleHeight=(this.stylus_width/2) - 1;
var boxHeight=(this.stylus_height-triangleHeight-borderHeight);
var subelem=yE.firstChild;
if (!subelem) {
subelem=document.createElement(hX_4._DIV);
subelem.className=this.sliderLinesClass;
subelem.style.position=hX_4._ABS;
subelem.style.overflow=hX_4._HI;
subelem.style.display=hX_4._BLK;
subelem.style.fontSize=subelem.style.margin=subelem.style.padding=hX_4._ZPX;
subelem.style.borderStyle=hX_4._SLD;
subelem.style.borderWidth=hX_4._1 + hX_4._PX;
subelem.style.borderBottomWidth=hX_4._ZPX;
subelem.style.left=subelem.style.top=hX_4._ZPX;
yE.appendChild(subelem);
}
if (subelem.className != this.sliderLinesClass)	subelem.className=this.sliderLinesClass;
subelem.style.height=boxHeight + hX_4._PX;
subelem.style.width=(this.stylus_width-borderWidth) + hX_4._PX;
for (i=1; i <= triangleHeight; i++) {
subelem=subelem.nextSibling;
if (!subelem) {
subelem=document.createElement(hX_4._DIV);
subelem.className=this.sliderLinesClass;
subelem.style.position=hX_4._ABS;
subelem.style.overflow=hX_4._HI;
subelem.style.fontSize=subelem.style.margin=subelem.style.padding=hX_4._ZPX;
subelem.style.borderStyle=hX_4._SLD;
subelem.style.borderWidth=hX_4._1 + hX_4._PX;
subelem.style.borderBottomWidth=subelem.style.borderTopWidth=hX_4._ZPX;
yE.appendChild(subelem);
}
if (subelem.className != this.sliderLinesClass)	subelem.className=this.sliderLinesClass;
subelem.style.top=(boxHeight+i-1+borderHeight) + hX_4._PX;
subelem.style.left=i + hX_4._PX;
subelem.style.height=hX_4._1 + hX_4._PX;
subelem.style.width=(this.stylus_width-borderWidth-(2*i)) + hX_4._PX;
}
return true;
}
return false;
}
HxG_4.prototype.JSFSlider.prototype.setStylusFromValue=function () {
var xLeft, xOff, wasLeft, value=this.getValue(true);
if (!value || value == null || isNaN(value))
value=new Number(0);
wasLeft=xLeft=parseInt(this.objScale.style.left, 10);
xOff=Math.round((value - this.NV.minimum)/this.interval) * this.tick_tabs;
xLeft=xLeft + xOff - (this.stylus_width/2);
if (wasLeft != xLeft)
this.objStylus.style.left=xLeft + hX_4._PX;
return true;
}
HxG_4.prototype.JSFDatePicker=function () {
this.type=hX_4.CMP_datepicker;
this.buttonBorder=-1;
this.buttonColor=hX_4.CLR_BTN;
this.nFirstDayOfWeek=hX_4.DTFMT_DEFAULTFIRSTDAYWEEK;
this.saveArgs=this.CSSPrefix=null;
this.DTPid=this.DTVid=hX_4._E;
this.DTP=this.DTV=null;
this.oDate=this.oDrawDate=null;
this.oToday=new Date();
this.baseClass=hX_4._E;
this.classes=null;
this.CL_HDR=0;
this.CL_HDR_L1=1;
this.CL_HDR_L2=2;
this.CL_HDR_YR=3;
this.CL_HDR_MN=4;
this.CL_HDR_WD=5;
this.CL_BODY=6;
this.CL_BTN=7;
this.CL_M_CUR=8;
this.CL_M_OTH=9;
this.CL_D_CUR=10;
this.CL_D_INV=11;
this.CL_T=12;
this.CL_T_CUR=13;
this.CL_SZ=14;
this.objPopup=null;
this.HTML=null;
this.sUnique="_hx_dp_";
this.timerTimed=this.timerInterval=0;
this.wiggleX=this.wiggleY=0;
this.JSFBTN=null;
this.HPCT="100%";
this.SPN1='<span unselectable="on">';
this.ESPN='</span>';
this.attributeTable=[];
this.attributeTable ['validator']=['DTVid',			hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['converter']=['DTPid',			hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['css-prefix']=['CSSPrefix',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['first-day-of-week']=['nFirstDayOfWeek',	hX_4.ARG_TO_NUM,false,	0,		6];
this.attributeTable	['button-color']=['buttonColor',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['btn-color']=['buttonColor',	hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['button-border']=['buttonBorder',	hX_4.ARG_TO_NUM,	false,	-1,		3];
this.attributeTable	['btn-border']=['buttonBorder',	hX_4.ARG_TO_NUM,	false,	-1,		3];
this.setAttribute(arguments);
this.saveArgs=arguments;
}
HxG_4.prototype.JSFDatePicker.prototype.onPageLoad=function () {
if (this.DTPid && this.DTP == null)
this.DTP=hX_4.getConverterById(this.DTPid);
if (this.DTP == null) {
this.DTP=new hX_4.DateTimeConverter();
this.DTP.setAttribute(this.saveArgs);
}
if (this.DTVid && this.DTV == null)
this.DTV=hX_4.getValidatorById(this.DTVid);
if (this.DTV == null) {
this.DTV=new hX_4.DateTimeValidator();
this.DTV.setAttribute(this.saveArgs);
}
this.JSFBTN=new hX_4.JSFSubButton(this, 1, this.buttonBorder, this.buttonColor, hX_4.STR_DATE_DN_TOGGLE, null, true, hX_4.R_IMG_CAL_HINKIES);
this.objPopup=hX_4.addPopup (this.id + "_popup", this.id, hX_4._E, 1);
this.sUnique=this.id + "_hx_dp_popup_";
this.redraw();
return true;
}
HxG_4.prototype.JSFDatePicker.prototype.redraw=function (resizeOnly) {
this.JSFBTN.size(resizeOnly);
return true;
}
HxG_4.prototype.JSFDatePicker.prototype.uirelease=function (free) {
this.JSFBTN.depress("btn1", false);
if (hX_4.uistate.getActiveComponent() == this && this.JSFBTN && this.JSFBTN.btn1)
hX_4.i.setFocus(this.JSFBTN.btn1);
if (free!=null) hX_4.uirelease(true);
return true;
}
HxG_4.prototype.JSFDatePicker.prototype.setValue=function (value, notify, raw, returns) {
var r=false;
if (this.DOMobj) {
if (raw) {
this.DOMobj.value=value;
r=true;
} else {
var ivalue=null;
if (hX_4.isString(value))
ivalue=this.DTP.stringToValue (value);
else if (hX_4.isObject(value) && value.constructor && value.constructor == Date)
ivalue=value.Hx4Clone(0);
else
 ivalue=null;
if (ivalue && this.DTV.validate(ivalue, this.DTP, null, true)) {
this.oDate=ivalue;
if (returns)
r=this.DTP.valueToString(ivalue);
else {
this.DOMobj.value=this.DTP.valueToString(ivalue);
if (notify) {
hX_4.i.markEvent (this.DOMobj, hX_4._onF);
hX_4.i.fireEvent (this.DOMobj, hX_4._onB);
}
r=true;
}
} else {
r=(returns) ? hX_4._E : false;
}
}
}
return r;
}
HxG_4.prototype.JSFDatePicker.prototype.reValue=function (dInc, notify, inValue) {
if (this.DOMobj) {
var skipInc=false, value=(inValue!=null) ? this.DTP.stringToValue(inValue) : this.getValue(true);
if (value==null && inValue != null && this.DTV && this.DTP) {
value=this.oToday.Hx4Clone(0);
} else if (this.DOMobj.value.length==0)
skipInc=true;
if (value) {
if (!skipInc) {
this.DTP.setCalendar();
value=hX_4.cal.adjustDate(value,0,0,dInc,0,0,0);
}
if (this.DTV.validate(value, this.DTP, null, true)) {
if (inValue!=null)
return (this.setValue(value, false, false, true));
else {
this.setValue (value, notify);
return true;
}
}
}
}
return ((inValue) ? inValue : false);
}
HxG_4.prototype.JSFDatePicker.prototype.reValuePop=function (y, m, d, idate, noscroll) {
if (this.DOMobj) {
var testdate=null;
if (idate) {
testdate=idate;
if (!this.DTV.validate(testdate, this.DTP, null, true)) return;
} else {
this.DTP.setCalendar();
testdate=this.oDate.Hx4Clone(0);
testdate=hX_4.cal.adjustDate(testdate,y,m,d,0,0,0);
testdate=this.DTV.coerce(testdate, this.DTP, null, true);
if (!testdate) return;
}
this.oDate=testdate;
this.updateGrid(noscroll);
}
}
HxG_4.prototype.JSFDatePicker.prototype.setDateFromValue=function () {
this.oDate=this.getValue(true);
if (this.oDate == null || !this.DTV.validate(this.oDate, this.DTP, null, true))
this.oDate=this.oToday.Hx4Clone(0);
return true;
}
HxG_4.prototype.JSFDatePicker.prototype.getValue=function(cast) {
if (this.DOMobj) {
if (cast) {
var d=this.DTP.stringToValue (this.DOMobj.value);
return ((d != null) ? d.Hx4Clone(0) : this.oToday.Hx4Clone(0));
}
return (this.DOMobj.value);
}
return null;
}
HxG_4.prototype.JSFDatePicker.prototype.setAttribute=function(a) {
var wasvalidator=this.DTVid, wasconverter=this.DTPid;
hX_4.parseArg (this.attributeTable, this, a);
if (this.bDsc) {
this.bDsc.btnColor=this.buttonColor
 this.bDsc.btnBorder=this.buttonBorder;
}
if (this.DTPid && this.DTPid != wasconverter) {
var DTP=hX_4.getConverterById(this.DTPid);
if (DTP != null) this.DTP=DTP;
}
if (!this.DTPid && this.DTP)
this.DTP.setAttribute(a);
if (this.DTVid && this.DTVid != wasvalidator) {
var DTV=hX_4.getValidatorById(this.DTVid);
if (this.DTV != null) this.DTV=DTV;
}
if (!this.DTVid && this.DTV)
this.DTV.setAttribute(a);
if (this.HTMLrendered)
this.redraw();
return true;
}
HxG_4.prototype.JSFDatePicker.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.JSFDatePicker.prototype.setClassNames=function () {
if (!this.objPopup || !this.objPopup.DOMobj) return;
var i, test=((this.CSSPrefix != null && this.CSSPrefix.length>0) ? this.CSSPrefix : hX_4.CLASS_DEF) + hX_4.CLASS_DP;
if (test != this.baseClass) {
this.baseClass=test;
this.classes=[];
for (i=0; i <= this.CL_SZ; i++)
this.classes.push(this.baseClass + hX_4.CLASS_DPS[i]);
}
}
HxG_4.prototype.JSFDatePicker.prototype.isRedirectFcnKey=function (evt) {
var code=(evt.keyCode && (evt.keyCode != 0)) ? evt.keyCode : -1;
return (code == hX_4.KEY_UPARROW || code == hX_4.KEY_DNARROW);
}
HxG_4.prototype.JSFDatePicker.prototype.doRedirectFcnKey=function (evt, newValue) {
var r=null, code=(evt.keyCode && (evt.keyCode != 0)) ? evt.keyCode : -1;
if (code == hX_4.KEY_UPARROW)
r=this.reValue(+1, false, newValue);
else if (code == hX_4.KEY_DNARROW)
r=this.reValue(-1, false, newValue);
return r;
}
HxG_4.prototype.JSFDatePicker.prototype.dispatchDragAction=function (evt) {
var r=false;
evt=(evt) ? evt : ((event) ? event: null);
if (evt) {
var src=hX_4.evtGetTarget(evt);
if (src) {
src=(src.nodeType == hX_4.ELEMENT_NODE || src.nodeType == hX_4.DOCUMENT_NODE) ? src : src.parentNode;
if (src) {
var i, id, oSelDate, nYrAdj=0, nDayAdj=0, nMonAdj=0;
if ((this.timerTimed != 0 || this.timerInterval != 0) && (evt.type==hX_4._evKD || evt.type==hX_4._evKU || evt.type==hX_4._evMU || evt.type==hX_4._evMM)) {
var stop=true;
if (evt.type==hX_4._evMM && this.timerInterval != 0) {
var x=Math.abs(this.wiggleX-evt.clientX);
var y=Math.abs(this.wiggleY-evt.clientY);
if (x < 4 && y < 4)
stop=false;
}
if (stop) {
if (this.timerInterval != 0)
hX_4.i.killTimerInterval(this.timerInterval);
if (this.timerTimed != 0)
hX_4.i.killTimerTimed(this.timerTimed);
this.timerTimed=0;
this.timerInterval=0;
this.pressButtonHTML (this.HTML.hdrbtn1, false);
this.pressButtonHTML (this.HTML.hdrbtn2, false);
this.pressButtonHTML (this.HTML.hdrbtn3, false);
this.pressButtonHTML (this.HTML.hdrbtn4, false);
}
}
if (evt.type==hX_4._evKU || evt.type==hX_4._evKP) {
} else if (evt.type==hX_4._evKD) {
switch (evt.keyCode) {
case hX_4.KEY_ESC:
if (this.objPopup.isPopped()) {
this.setValue(this.escapeToValue, true, true);
this.uirelease(true);
}
break;
case hX_4.KEY_SPACEBAR:
case hX_4.KEY_ENTER:
if (!hX_4.dragger.keydown && this.objPopup.isPopped()) {
this.setValue(this.oDate, true);
this.uirelease(true);
}
break;
case hX_4.KEY_LTARROW:
if (evt.shiftKey)
nMonAdj=-1;
else
 nDayAdj=-1;
break;
case hX_4.KEY_UPARROW:
if (evt.shiftKey)
nYrAdj=-1;
else
 nDayAdj=-7;
break;
case hX_4.KEY_RTARROW:
if (evt.shiftKey)
nMonAdj=1;
else
 nDayAdj=1;
break;
case hX_4.KEY_DNARROW:
if (evt.shiftKey)
nYrAdj=+1;
else
 nDayAdj=7;
break;
case hX_4.KEY_TAB:
nDayAdj=evt.shiftKey ? -1 : 1;
break;
default:
break;
}
if (nYrAdj != 0 || nDayAdj != 0 || nMonAdj != 0)
this.reValuePop (nYrAdj, nMonAdj, nDayAdj);
hX_4.dragger.keydown=false;
} else if (evt.type==hX_4._evMD) {
if (src.tagName && src.tagName == hX_4._INP && src.id) {
if (src.id.indexOf("_HDRBTN") >= 0) {
var btn=parseInt (src.id.substr(src.id.length-1),10);
var btno=(btn==1) ? this.HTML.hdrbtn1 : ((btn==2) ? this.HTML.hdrbtn2 : ((btn==3) ? this.HTML.hdrbtn3 : this.HTML.hdrbtn4));
nYrAdj=(btn==1) ? -1 : ((btn==2) ? +1 : 0);
nMonAdj=(btn==3) ? -1 : ((btn==4) ? +1 : 0);
this.reValuePop (nYrAdj, nMonAdj, 0);
this.wiggleX=evt.clientX;
this.wiggleY=evt.clientY;
this.pressButtonHTML (btno, true);
this.timerTimed=hX_4.i.startTimerTimed (this.id, "btn" + btn, "start", 400);
}
} else if (src.tagName) {
if (src.tagName == hX_4._SPN || src.tagName == hX_4._ANC)
src=src.parentNode;
if (src && src.tagName && src.tagName == hX_4._TD && src.id) {
i=src.id.indexOf(this.sUnique);
if (i >= 0) {
id=src.id.substr(this.sUnique.length);
oSelDate=this.DTP.constantToValue (id);
this.reValuePop (0, 0, 0, oSelDate, true);
}
}
}
} else if (evt.type==hX_4._evMU) {
if (src.tagName) {
if (src.tagName == hX_4._SPN || src.tagName == hX_4._ANC)
src=src.parentNode;
if (src && src.tagName && src.tagName == hX_4._TD && src.id) {
i=src.id.indexOf(this.sUnique);
if (i >= 0) {
id=src.id.substr(this.sUnique.length);
oSelDate=this.DTP.constantToValue (id);
if (this.setValue (oSelDate, true))
hX_4.dragger.timerid=hX_4.i.startTimerTimed (hX_4.dragger.owningObj.id, "popup", "dragEnd", 400);
}
}
}
}
}
}
}
return r;
}
HxG_4.prototype.JSFDatePicker.prototype.dispatchComponent=function (item, evt, action, keycode) {
var rvalue=true, dropit=false, undropit=false;
if (this.objPopup != null) {
if (item=="btn1") {
if (action==hX_4._evMD) {
if (this.objPopup.isPopped()) undropit=true;
else dropit=true;
} else if (action==hX_4._evMC || action==hX_4._evMCC || action==hX_4._evMM || action==hX_4._evMO || action==hX_4._evMV || action==hX_4._evMU ||
action==hX_4._evB  || action==hX_4._evF) {
} else if (action==hX_4._evKD) {
if (keycode == hX_4.KEY_ESC) {
if (this.objPopup.isPopped()) {
this.setValue(this.escapeToValue, true, true);
undropit=true;
}
} else if (keycode == hX_4.KEY_SPACEBAR || keycode == hX_4.KEY_UPARROW || keycode == hX_4.KEY_DNARROW) {
if (this.objPopup.isPopped()) {
undropit=true;
} else {
dropit=true;
}
hX_4.i.cancelAction(evt);
rvalue=false;
} else if (keycode >= hX_4.KEY_SPACEBAR && keycode <= hX_4.KEY_DNARROW) {
hX_4.i.cancelAction(evt);
rvalue=false;
}
} else if (action==hX_4._evKP || action==hX_4._evKU) {
if (keycode >= hX_4.KEY_SPACEBAR && keycode <= hX_4.KEY_DNARROW) {
hX_4.i.cancelAction(evt);
rvalue=false;
}
} else {
this.uirelease(true);
}
} else if (item==hX_4._lINP) {
if (action==hX_4._evKD) {
if (keycode == hX_4.KEY_DNARROW) {
this.reValue(-1, false);
this.uirelease(true);
} else if (keycode == hX_4.KEY_UPARROW) {
this.reValue(+1, false);
this.uirelease(true);
} else if (keycode == hX_4.KEY_ESC) {
if (this.objPopup.isPopped()) {
this.setValue(this.escapeToValue, false, true);
undropit=true;
}
}
}
} else {
this.uirelease(true);
}
if (dropit) {
this.escapeToValue=this.getValue();
hX_4.uistate.setActiveComponent (this);
hX_4.i.setFocus(this.JSFBTN.btn1);
this.JSFBTN.depress("btn1", true);
this.setDateFromValue();
this.sizePickerToInput();
this.objPopup.uivisible();
this.showFocus(this.oDate);
rvalue=false;
} else if (undropit) {
this.uirelease(true);
rvalue=false;
}
}
return rvalue;
}
HxG_4.prototype.JSFDatePicker.prototype.dispatchTimer=function (item, action) {
if (item == "popup") {
if (action == "dragEnd")
this.uirelease(true);
}
if (item == "btn1" || item == "btn2" || item == "btn3" || item == "btn4") {
if (action == "spin") {
var btn=parseInt(item.substr(item.length-1),10);
var nYrAdj=(btn==1) ? -1 : ((btn==2) ? +1 : 0);
var nMonAdj=(btn==3) ? -1 : ((btn==4) ? +1 : 0);
this.reValuePop (nYrAdj, nMonAdj, 0);
} else if (action == "start") {
this.timerTimed=0;
this.timerInterval=hX_4.i.startTimerInterval (this.id, item, "spin", 50);
}
}
}
HxG_4.prototype.JSFDatePicker.prototype.sizePickerToInput=function () {
var popupElem=(this.objPopup) ? this.objPopup.DOMobj : null;
if (popupElem) {
this.setClassNames();
if (!this.HTML) this.HTML=new hX_4.JSFMonth(this, popupElem, this.sUnique);
if (!this.HTML.valid) return false;
if (popupElem.className != this.baseClass)	popupElem.className=this.baseClass;
if (popupElem.style.overflow != hX_4._VS)	popupElem.style.overflow=hX_4._VS;
if (popupElem.style.width  != hX_4._E) 		popupElem.style.width=hX_4._E;
if (popupElem.style.height != hX_4._E) 		popupElem.style.height=hX_4._E;
if (this.HTML.table.className != this.classes[this.CL_SZ]) 	this.HTML.table.className=this.classes[this.CL_SZ];
if (this.HTML.td1.width != hX_4._E) 		this.HTML.td1.width=hX_4._E;
if (this.HTML.td2.width != hX_4._E) 		this.HTML.td2.width=hX_4._E;
if (this.HTML.hdrTable.className != this.classes[this.CL_HDR])			this.HTML.hdrTable.className=this.classes[this.CL_HDR];
if (this.HTML.hdrTable.width != this.HPCT) 								this.HTML.hdrTable.width=this.HPCT;
if (this.HTML.hdrtr1.cells[0].className != this.classes[this.CL_HDR_L1])this.HTML.hdrtr1.cells[0].className=this.classes[this.CL_HDR_L1];
if (this.HTML.hdrtr1.cells[1].className != this.classes[this.CL_HDR_YR])this.HTML.hdrtr1.cells[1].className=this.classes[this.CL_HDR_YR];
if (this.HTML.hdrtr1.cells[2].className != this.classes[this.CL_HDR_L1])this.HTML.hdrtr1.cells[2].className=this.classes[this.CL_HDR_L1];
if (this.HTML.hdrtr2.cells[0].className != this.classes[this.CL_HDR_L2])this.HTML.hdrtr2.cells[0].className=this.classes[this.CL_HDR_L2];
if (this.HTML.hdrtr2.cells[1].className != this.classes[this.CL_HDR_MN])this.HTML.hdrtr2.cells[1].className=this.classes[this.CL_HDR_MN];
if (this.HTML.hdrtr2.cells[2].className != this.classes[this.CL_HDR_L2])this.HTML.hdrtr2.cells[2].className=this.classes[this.CL_HDR_L2];
if (this.HTML.hdrbtn1.className != this.classes[this.CL_BTN]) 			this.HTML.hdrbtn1.className=this.classes[this.CL_BTN];
if (this.HTML.hdrbtn2.className != this.classes[this.CL_BTN]) 			this.HTML.hdrbtn2.className=this.classes[this.CL_BTN];
if (this.HTML.hdrbtn3.className != this.classes[this.CL_BTN]) 			this.HTML.hdrbtn3.className=this.classes[this.CL_BTN];
if (this.HTML.hdrbtn4.className != this.classes[this.CL_BTN]) 			this.HTML.hdrbtn4.className=this.classes[this.CL_BTN];
var i, c, s;
if (this.HTML.bodyTable.className != this.classes[this.CL_BODY])	this.HTML.bodyTable.className=this.classes[this.CL_BODY];
if (this.HTML.bodyTable.width != this.HPCT) 						this.HTML.bodyTable.width=this.HPCT;
for (i=this.nFirstDayOfWeek; i < this.nFirstDayOfWeek + 7; i++) {
c=this.HTML.bodytr1.cells[i - this.nFirstDayOfWeek];
if (c.width != hX_4._E) c.width=hX_4._E;
if (c.className != this.classes[this.CL_HDR_WD]) c.className=this.classes[this.CL_HDR_WD];
s=this.SPN1 + this.DTP.valueToSShortDayLabel(i%7) + this.ESPN;
if (hX_4.getIHTML(c) != s) hX_4.setIHTML(c,s);
}
this.updateGrid();
return true;
}
return false;
}
HxG_4.prototype.JSFMonth=function (thisp, inobj, suffix) {
this.valid=false;
if (inobj == null) return;
this.table=this.tr1=this.tr2=this.td1=this.td2=null;
this.hdrTable=this.hdrtr1=this.hdrtr2=null;
this.hdrbtn1=this.hdrbtn2=this.hdrbtn3=this.hdrbtn4=null;
this.hdrMonth=this.hdrYear=null;
this.bodyTable=this.bodytr1=this.bodytr2=null;
this.table=hX_4.getFirstChildInCell(inobj);
if ((this.table == null) || (this.table.tagName != hX_4._TAB)) {
this.table=document.createElement(hX_4._TAB);
this.table.setAttribute (hX_4._ID, suffix + "_table");
this.table.cellPadding=this.table.cellSpacing=this.table.border=hX_4._Z;
inobj.appendChild(this.table);
this.tr1=this.table.insertRow(0);
this.tr2=this.table.insertRow(1);
this.td1=this.tr1.insertCell(0);
this.td2=this.tr2.insertCell(0);
this.td1.vAlign=this.td2.vAlign=hX_4._TOP;
this.td1.align=this.td2.align=hX_4._LFT;
}
if (!this.table) return;
this.tr1=this.table.rows[0];
this.tr2=this.table.rows[1];
this.td1=this.tr1.cells[0];
this.td2=this.tr2.cells[0];
if (!this.tr1 || !this.tr2 || !this.td1 || !this.td2) return;
var htd1, htd2, htd3, htd4, htd5, htd6;
this.hdrTable=hX_4.getFirstChildInCell(this.td1);
if (this.hdrTable == null) {
this.hdrTable=document.createElement(hX_4._TAB);
this.hdrTable.setAttribute (hX_4._ID, suffix + "_hdr_table");
this.hdrTable.cellPadding=this.hdrTable.cellSpacing=this.hdrTable.border=hX_4._Z;
this.td1.appendChild(this.hdrTable);
this.hdrtr1=this.hdrTable.insertRow(0);
this.hdrtr2=this.hdrTable.insertRow(1);
htd1=this.hdrtr1.insertCell(0);
htd2=this.hdrtr1.insertCell(0);
htd3=this.hdrtr1.insertCell(0);
htd4=this.hdrtr2.insertCell(0);
htd5=this.hdrtr2.insertCell(0);
htd6=this.hdrtr2.insertCell(0);
htd1.vAlign=htd2.vAlign=htd3.vAlign=htd4.vAlign=htd5.vAlign=htd6.vAlign=hX_4._MID;
htd1.align=htd4.align=hX_4._LFT;
htd2.align=htd5.align=hX_4._CTR;
htd3.align=htd6.align=hX_4._RGT;
}
if (!this.hdrTable) return;
this.hdrtr1=this.hdrTable.rows[0];
this.hdrtr2=this.hdrTable.rows[1];
htd1=this.hdrtr1.cells[0];
htd2=this.hdrtr1.cells[1];
htd3=this.hdrtr1.cells[2];
htd4=this.hdrtr2.cells[0];
htd5=this.hdrtr2.cells[1];
htd6=this.hdrtr2.cells[2];
if (!this.hdrtr1 || !this.hdrtr2 || !htd1 || !htd2 || !htd3 || !htd4 || !htd5 || !htd6) return;
this.hdrbtn1=hX_4.getFirstChildInCell(htd1);
if (!this.hdrbtn1)
this.hdrbtn1=thisp.emitButtonHTML (htd1, suffix + "_HDRBTN1", 1, 0, hX_4.STR_DATE_PREVIOUS_YEAR)
this.hdrbtn2=hX_4.getFirstChildInCell(htd3);
if (!this.hdrbtn2)
this.hdrbtn2=thisp.emitButtonHTML (htd3, suffix + "_HDRBTN2", 0, 0, hX_4.STR_DATE_NEXT_YEAR)
this.hdrbtn3=hX_4.getFirstChildInCell(htd4);
if (!this.hdrbtn3)
this.hdrbtn3=thisp.emitButtonHTML (htd4, suffix + "_HDRBTN3", 1, 0, hX_4.STR_DATE_PREVIOUS_MONTH)
this.hdrbtn4=hX_4.getFirstChildInCell(htd6);
if (!this.hdrbtn4)
this.hdrbtn4=thisp.emitButtonHTML (htd6, suffix + "_HDRBTN4", 0, 0, hX_4.STR_DATE_NEXT_MONTH)
this.hdrYear=htd2;
this.hdrMonth=htd5;
var i, j, r, c;
this.bodyTable=hX_4.getFirstChildInCell(this.td2);
if (this.bodyTable == null) {
this.bodyTable=document.createElement(hX_4._TAB);
this.bodyTable.setAttribute (hX_4._ID, suffix + "_body_table");
this.bodyTable.cellPadding=this.bodyTable.cellSpacing=this.bodyTable.border=hX_4._Z;
this.td2.appendChild(this.bodyTable);
for (i=0; i < 7; i++) {
r=this.bodyTable.insertRow(i);
for (j=0; j < 7; j++) {
c=r.insertCell(j);
c.vAlign=hX_4._MID;
c.align=hX_4._CTR;
}
}
}
if (!this.bodyTable) return;
this.bodytr1=this.bodyTable.rows[0];
this.bodytr2=this.bodyTable.rows[1];
if (this.bodytr1 && this.bodytr2)
this.valid=true;
}
HxG_4.prototype.JSFDatePicker.prototype.emitButtonHTML=function (parent, id, wellx, welly, alt) {
var btn=null;
if (id) {
btn=document.createElement(hX_4._INP);
btn.setAttribute (hX_4._ID, id);
btn.setAttribute (hX_4._TYP, hX_4._lIMG);
btn.className=this.classes[this.CL_BTN];
btn.src=this.r.getURL (hX_4.R_IMG_SPACER);
btn.alt=btn.title=alt;
btn.style.backgroundImage=this.r.getURI (hX_4.R_IMG_VLG_HINKIES);
btn.style.backgroundPosition=this.r.wellPosition(hX_4.R_IMG_VLG_HINKIES, wellx, welly);
btn.style.backgroundRepeat=hX_4._NREP;
btn.style.margin=hX_4._ZPX;
parent.appendChild(btn);
}
return btn;
}
HxG_4.prototype.JSFDatePicker.prototype.pressButtonHTML=function (id, down) {
var btn=hX_4.getElementById(id);
if (btn) {
var x= ((btn == this.HTML.hdrbtn1 || btn == this.HTML.hdrbtn3)?1:0),  y=((down)?1:0);
btn.style.backgroundPosition=this.r.wellPosition(hX_4.R_IMG_VLG_HINKIES, x, y);
}
}
HxG_4.prototype.JSFDatePicker.prototype.updateGrid=function (noscroll) {
var el, x, y, iDaysBefore, iDaysInAndBefore, iNoOfRows, sizeChanged=false, row, tempDate, tempLDate, oDate=(noscroll && this.oDrawDate) ? this.oDrawDate : this.oDate;
this.DTP.setCalendar();
var yr=this.DTP.valueToYearLabel(oDate), mo=this.DTP.valueToMonthLabel(oDate);
if (!hX_4.brw.isNavOrMoz()) {
yr=this.SPN1 + yr + this.ESPN;
mo=this.SPN1 + mo + this.ESPN;
}
if (hX_4.getIHTML(this.HTML.hdrYear) != yr) 	hX_4.setIHTML(this.HTML.hdrYear,yr);
if (hX_4.getIHTML(this.HTML.hdrMonth) != mo) 	hX_4.setIHTML(this.HTML.hdrMonth,mo);
tempLDate=hX_4.cal.dateToCalendar(oDate);
tempDate=oDate.Hx4Clone();
tempDate=hX_4.cal.adjustDate(tempDate,0,0,(1-tempLDate.date),0,0,0);
iDaysBefore=hX_4.cal.getDay(tempDate) - this.nFirstDayOfWeek;
if (iDaysBefore < 0) iDaysBefore+=7;
iDaysInAndBefore=hX_4.cal.daysInMonth(tempLDate.month, tempLDate.year) + iDaysBefore;
iNoOfRows=Math.floor(iDaysInAndBefore/7);
if (iDaysInAndBefore > iNoOfRows*7) iNoOfRows++;
if (iDaysBefore) tempDate=hX_4.cal.adjustDate(tempDate,0,0,-iDaysBefore,0,0,0);
for (y=iNoOfRows; y<6; y++) {
row=this.HTML.bodyTable.rows[y+1];
if (row.style.display != hX_4._NO) {
for(x=0; x<7; x++)
row.cells[x].id=hX_4._E;
row.style.display=hX_4._NO;
sizeChanged=true;
}
}
for (y=0; y<iNoOfRows; y++) {
row=this.HTML.bodyTable.rows[y+1];
if (row.style.display != hX_4._E) {
row.style.display=hX_4._E;
sizeChanged=true;
}
for(x=0; x<7; x++) {
this.updateMonthGrid(tempDate, y, x, iNoOfRows);
tempDate=hX_4.cal.adjustDate(tempDate,0,0,1,0,0,0)
}
}
if (sizeChanged && this.objPopup && this.objPopup.isPopped() && hX_4.dragger)
hX_4.dragger.resetSize();
this.showFocus (oDate);
this.oDrawDate=this.oDate.Hx4Clone(0);
return true;
}
HxG_4.prototype.JSFDatePicker.prototype.updateMonthGrid=function (oDate, r, c, nRows) {
var s, cl=hX_4._E, cell=this.HTML.bodyTable.rows[r+1].cells[c], oLDate=hX_4.cal.dateToCalendar(oDate);
var iDate=oLDate.date, sid=this.dateToTag(oDate), sDate=this.DTP.cvtToDigits(oLDate.date);
var curr=(this.oDate != null) && (0 == oDate.Hx4CompareDate(this.oDate));
if (0 == oDate.Hx4CompareDate(this.oToday))
cl=(curr) ? this.classes[this.CL_T_CUR] : this.classes[this.CL_T];
else if (curr)
cl=this.classes[this.CL_D_CUR];
else
 cl=(r == 0 && iDate > 7) || (r == nRows-1 && iDate < 7) ? this.classes[this.CL_M_OTH] : this.classes[this.CL_M_CUR];
if (!this.DTV.validate(oDate, this.DTP, true, true))
cl=this.classes[this.CL_D_INV];
if (cell.id != sid || cell.className != cl) {
if (hX_4.brw.isNavOrMoz()) {
s='<a unselectable="on" class="' + cl + '" style="border: 0px none ; margin: 0px; padding: 0px;">' + sDate + '</a>';
cell.style.cursor="pointer";
} else
 s=this.SPN1 + sDate + this.ESPN;
if (cell.id != sid)				cell.setAttribute(hX_4._ID, sid);
if (cell.className != cl)		cell.className=cl;
if (cell.tabIndex!=undefined && cell.tabIndex != hX_4._1) cell.tabIndex=hX_4._1;
if (hX_4.getIHTML(cell) != s)	hX_4.setIHTML(cell,s);
}
return true;
}
HxG_4.prototype.JSFDatePicker.prototype.dateToTag=function(oDate) {
return ((oDate) ? this.sUnique + this.DTP.valueToConstant(oDate) : hX_4._E);
}
HxG_4.prototype.JSFDatePicker.prototype.showFocus=function(d) {
if (d) {
var obj=hX_4.getElementById (this.dateToTag(d));
if (obj && this.objPopup.isPopped()) {
if (obj.tagName && obj.tagName == hX_4._TD && obj.focus) {
obj.focus();
} else {
obj=hX_4.getFirstChildInCell(obj);
if (obj && obj.tagName!=undefined && obj.focus) obj.focus();
}
}
}
}
HxG_4.prototype.JSFMenu=function () {
this.type=hX_4.CMP_menu;
this.flyOpen=true, this.bodyFlyOpen=true;
this.topVertical=false, this.bodyVertical=true;
this.openSticky=false;
this.openInPlace=false;
this.deepSel=false;
this.initSel=this.initSelField=null;
this.target=this.targetObj=null;
this.tabIndex=0;
this.fcn=null;
this.form=null;
this.relative=false;
this.mousePt=null;
this.isFlyOpen=function() { return this.flyOpen;	}
this.isBodyFlyOpen=function() { return this.bodyFlyOpen;	}
this.isFly=function(l){ return ((l<=0)?this.flyOpen:this.bodyFlyOpen); }
this.isTopVertical=function() { return this.topVertical;	}
this.isBodyVertical=function() { return this.bodyVertical; }
this.isVertical=function(l){ return ((l<=0)?this.topVertical:this.bodyVertical); }
this.isOpenSticky=function() { return this.openSticky; }
this.isOpenInPlace=function() { return this.openInPlace; }
this.m=new hX_4.JSFSubMenu();
function st () {
this.mouseObj=this.selObj=this.selOpen=null;
}
this.state=[];
this.focusObj=null;
this.setFocusObj=false;
this.baseClass=null;
function cl (max) {
this.div=this.tab=this.sepL=this.sep=this.sepF=this.sepL=null;
this.cell=new Array(max);
this.cellAlt=new Array(max);
this.cellF= new Array(max);
this.cellL= new Array(max);
this.item=new Array(max);
this.itemAlt=new Array(max);
this.arrow= new Array(max);
this.arrowImg=new Array(max);
}
this.classes=[];
for (var i=0; i < this.MAXLEVELS; i++) {
this.state.push(new st());
this.classes.push(new cl(this.MAXSTATES));
}
this.scratch=null;
this.lastMouseMove=null;
this.lastMouseX=this.lastMouseY=-1;
this.attributeTable=[];
this.attributeTable ['vertical']=['topVertical',	hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['vertical-body']=['bodyVertical',	hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['fly-open']=['flyOpen',		hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['fly-open-body']=['bodyFlyOpen',	hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['open-sticky']=['openSticky',	hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['open-in-place']=['openInPlace', 	hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['initial-selection']=['initSel', 		hX_4.ARG_IS_NAN,	false,	null,	null];
this.attributeTable ['select-all']		=['deepSel', 		hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['tab-index']		=['tabIndex',		hX_4.ARG_TO_NUM,	false,  -1, 	10000];
this.attributeTable ['tabIndex']		=['tabIndex',		hX_4.ARG_TO_NUM,	false,  -1, 	10000];
this.attributeTable ['onchange']		=['fcn',			hX_4.ARG_TO_FCNS,	false,	null,	null];
this.attributeTable ['function']		=['fcn',			hX_4.ARG_TO_FCNS,	false,	null,	null];
this.attributeTable ['target']			=['target', 		hX_4.ARG_IS_NAN,	false,	null,	null];
this.attributeTable ['relative']		=['relative',		hX_4.ARG_IS_TRUE,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.J_M=HxG_4.prototype.JSFMenu;
HxG_4.prototype.JSFMenu.prototype.NORMAL=0;
HxG_4.prototype.JSFMenu.prototype.MOUSED=1;
HxG_4.prototype.JSFMenu.prototype.SELECTED=2;
HxG_4.prototype.JSFMenu.prototype.SELECTED_MOUSED=3;
HxG_4.prototype.JSFMenu.prototype.MAXSTATES=4;
HxG_4.prototype.JSFMenu.prototype.MAXLEVELS=5;
HxG_4.prototype.JSFMenu.prototype.ARROW_1="&gt;&nbsp;";
HxG_4.prototype.JSFMenu.prototype.ARROW_2="&gt;&gt;";
HxG_4.prototype.JSFMenu.prototype.onPageLoad=function () {
if (!this.HTMLrendered && this.DOMobj) {
this.form=hX_4.g.findContainer(this.DOMobj, hX_4._FRM);
this.form=(this.form==null) ? document.body : this.form;
var sel=null, i, e=document.createElement(hX_4._DIV);
e.setAttribute(hX_4._ID, this.id+"_scratch");
e.style.display=hX_4._NO;
e.style.position=hX_4._ABS;
e.style.left=e.style.top=hX_4._ZPX;
this.scratch=this.form.insertBefore (e, (this.form.firstChild));
this.baseClass=hX_4.getFirstClassName(this.DOMobj);
if (!this.m.itemArray || this.m.itemArray.length <= 0) {
this.DOMobj.style.display=hX_4._NO;
} else {
this.buildNode();
if (this.target) {
this.targetObj=hX_4.getElementById(this.target);
if (this.targetObj) if (this.targetObj.tagName != hX_4._INP) this.targetObj=null;
if (this.targetObj) sel=this.findTarget(this.targetObj.value);
}
this.initSelField=hX_4.getElementById(this.id + "_selection");
if (!this.targetObj) {
if (this.initSelField) sel=hX_4.getSubComponentById(this.initSelField.value);
if (sel==null) sel=(this.initSel==null) ? null: hX_4.getSubComponentById(this.initSel);
}
if (sel) this.setValue(sel);
}
this.HTMLrendered=true;
}
this.redraw();
return true;
}
HxG_4.prototype.JSFMenu.prototype.redraw=function (obj) {
if (obj) {
var c=(obj && obj.id) ? hX_4.getComponentById(obj.id) : null;
if (c && c.redraw) c.redraw();
} else
 this.m.redraw();
return true;
}
HxG_4.prototype.JSFMenu.prototype.uirelease=function (iLevel) {
var i, v, oM, oS, level=(iLevel == null) ? 0 : iLevel;
for (i=this.MAXLEVELS-1; i >= level; i--) {
oM=this.state[i].mouseObj;
oS=this.state[i].selObj;
if (oM != null) {
if (oM.isComponent && oM.isComponent.uirelease) oM.isComponent.uirelease();
v=(oS!= null && oS.id == oM.id && (this.isOpenSticky() || this.deepSel || oS.isNoNode() || !oS.isNode()))?this.SELECTED:this.NORMAL;
oM.setState(this.NORMAL, false, (this.isOpenSticky())?false:true);
if (v != this.NORMAL) oS.setColorState(v);
this.state[i].mouseObj=null;
}
oM=this.state[i].selOpen;
if (!this.isOpenSticky() && oM!=null) {
v=(oS != null && oS.id == oM.id && (this.isOpenSticky() || this.deepSel || oS.isNoNode() || !oS.isNode()))?this.SELECTED:this.NORMAL;
oM.setState(this.NORMAL, false, (this.isOpenSticky())?false:true);
if (v != this.NORMAL) oS.setColorState(v);
this.state[i].selOpen=null;
}
}
if (!this.isOpenSticky()) {
if (this.focusObj && this.focusObj.level > 0 && this.focusObj.rootNum != null) {
var test=this.m.itemArray[this.focusObj.rootNum];
if (test.ITEMobj) hX_4.i.setFocus(test.ITEMobj, false, true);
}
this.focusObj=null;
this.setFocusObj=false;
}
return true;
}
HxG_4.prototype.JSFMenu.prototype.getValue=function () {
for (var i=this.MAXLEVELS-1; i >= 0; i--)
if (this.state[i].selObj != null) return (this.state[i].selObj.id);
return null;
}
HxG_4.prototype.JSFMenu.prototype.getMouseState=function () {
for (var i=this.MAXLEVELS-1; i >= 0; i--)
if (this.state[i].mouseObj) return (this.state[i].mouseObj);
return null;
}
HxG_4.prototype.JSFMenu.prototype.setValue=function (obj) {
if (obj && (hX_4.isString(obj) || (obj.type && obj.type == hX_4.CMP_mapitem))) {
var sel=hX_4.getSubComponentById(obj);
if (sel) this.setState(sel, this.SELECTED, true, true, true);
}
}
HxG_4.prototype.JSFMenu.prototype.setState=function (obj, iValue, click, force, initial) {
var d, i, p, v, sel, value=(arguments.length > 1) ? iValue : this.MOUSED;
if (!obj || obj.isSeparator)
return;
if (!force && click && this.isFly(obj.level) && obj.isNode())
return;
if (obj && obj.level!=undefined) {
this.uirelease(obj.level+1);
if (click || force) {
p=obj;
for (i=p.level-1; i>=0; i--) {
if (p && p.p && p.p.type==hX_4.CMP_mapitem) {
p=p.p;
if (this.state[i].selObj == null || this.state[i].selObj.id != p.id) {
if (this.state[i].selObj != null) this.state[i].selObj.setColorState(this.NORMAL);
this.state[i].selObj=p;
this.state[i].selObj.setState(this.SELECTED, true, true, initial);
}
}
}
}
}
v=value;
sel=(this.state[obj.level].selObj != null) ? this.state[obj.level].selObj.id : "";
if (value == this.MOUSED) {
if (this.state[obj.level].mouseObj != null && this.state[obj.level].mouseObj.id != obj.id) {
v=(click) ? this.NORMAL : ((sel == this.state[obj.level].mouseObj.id) ? this.SELECTED : this.NORMAL);
this.state[obj.level].mouseObj.setColorState(v);
if (this.state[obj.level].mouseObj.isComponent && this.state[obj.level].mouseObj.isComponent.uirelease)
this.state[obj.level].mouseObj.isComponent.uirelease();
}
if (this.isFly(obj.level) && this.isOpenSticky() && this.state[obj.level].selObj!=null) {
this.state[obj.level].selObj.setColorState(this.NORMAL);
this.state[obj.level].selObj=null;
}
v=(value == this.MOUSED && (sel != obj.id)) ? value : this.SELECTED_MOUSED;
this.state[obj.level].mouseObj=obj;
}
if (value == this.SELECTED) {
if (this.state[obj.level].selObj != null && sel != obj.id)
this.state[obj.level].selObj.setColorState(this.NORMAL);
v=(click && !force) ? this.SELECTED_MOUSED : this.SELECTED;
this.setField(obj);
this.setTarget(obj);
this.state[obj.level].mouseObj= this.state[obj.level].selObj=obj;
}
if (value == this.NORMAL)  v=(sel == obj.id) ? this.SELECTED : v;
if (!this.deepSel) {
for (d=0; d < this.MAXLEVELS; d++)
if (this.state[d].selObj==null) break;
for (i=0; i < (d-1); i++)
this.state[i].selObj.setColorState(this.NORMAL);
if (v == this.SELECTED_MOUSED && obj.level < (d-1))	v=value;
if (value == this.NORMAL && obj.level < (d-1)) v=this.NORMAL;
}
obj.setState(v, click, force, initial);
this.setField(this.getValue());
this.setTarget(this.getValue());
this.focusObj=null;
this.setFocusObj=false;
}
HxG_4.prototype.JSFMenu.prototype.setField=function (obj) {
if (obj && this.initSelField) {
var sel=hX_4.getSubComponentById(obj);
if (sel != null && (sel.isNoNode() || !sel.isNode())) {
if (sel.id != this.initSelField.value) {
if (this.initSelField.disabled) this.initSelField.disabled=false;
this.initSelField.value=sel.id;
}
}
}
}
HxG_4.prototype.JSFMenu.prototype.setTarget=function (obj) {
if (obj && this.targetObj) {
var sel=hX_4.getSubComponentById(obj);
if (sel != null && (!sel.isNoNode() && !sel.isNode())) {
var v=sel.findValue();
if (v != this.targetObj.value) this.targetObj.value=v;
}
}
}
HxG_4.prototype.JSFMenu.prototype.findTarget=function (value) {
var i, item=null;
for (i=0; item == null && i < this.m.itemArray.length; i++)
item=this.m.itemArray[i].findTarget(value);
return item;
}
HxG_4.prototype.JSFMenu.prototype.setFocus=function (obj) {
this.focusObj=null;
if (obj && obj.ITEMobj) {
this.focusObj=obj;
this.setFocusObj=true;
hX_4.i.setFocus(obj.ITEMobj, false, true);
}
}
HxG_4.prototype.JSFMenu.prototype.setAttribute=function(a) {
hX_4.parseArg (this.attributeTable, this, a);
if (this.isOpenInPlace())
this.openSticky=true;
if (this.HTMLrendered) {
this.buildNode(true);
this.redraw();
}
return true;
}
HxG_4.prototype.JSFMenu.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.JSFMenu.prototype.addSubComponent=function(obj, position) {
if (this.DOMobj.style.display == hX_4._NO) this.DOMobj.style.display=hX_4._E;
this.m.addSubComponent (this, obj, position);
if (this.HTMLrendered) {
this.buildNode();
this.redraw(obj);
}
}
HxG_4.prototype.JSFMenu.prototype.removeSubComponent=function(objid) {
this.m.removeSubComponent (this, objid);
if (this.HTMLrendered) {
this.buildNode();
this.redraw(obj);
}
}
HxG_4.prototype.JSFMenu.prototype.buildNode=function(noNewChildren) {
this.setClasses();
this.m.POPobj=null;
this.m.POPdiv=this.DOMobj;
this.m.buildMenu(this, this, 0, noNewChildren);
for (var i=0; i < this.m.itemArray.length; i++)
this.m.itemArray[i].buildNode(noNewChildren);
}
HxG_4.prototype.JSFMenu.prototype.setClasses=function () {
var i, t, t1, t2, t3, p, k=1;
for (i=0; i < this.MAXLEVELS; i++) {
p=this.baseClass + hX_4._U + (i+1) + hX_4._U;
t1=p + hX_4._DIV.toLowerCase();
t2=p + hX_4._TAB.toLowerCase();
k=(hX_4.isClassDefined(t1) || hX_4.isClassDefined(t2)) ? (i+1) : k;
p=this.baseClass + hX_4._U + (k) + hX_4._U;
t1=p + hX_4._DIV.toLowerCase();
t2=p + hX_4._TAB.toLowerCase();
this.classes[i].div=t1;
this.classes[i].tab=t2;
t=p + hX_4.CLASS_MB_SEPARATOR;
t1=p + hX_4.CLASS_MB_SEPARATOR_L;
t2=p + hX_4.CLASS_MB_SEPARATOR_R;
this.classes[i].sep=t;
this.classes[i].sepF=(hX_4.isClassDefined(t1)) ? t1 : t;
this.classes[i].sepL=(hX_4.isClassDefined(t2)) ? t2 : t;
this.setClass(p + hX_4.CLASS_MB_CELL, this.classes[i].cell);
this.setClass(p + hX_4.CLASS_MB_ALTCELL, this.classes[i].cellAlt);
t=p + hX_4.CLASS_MB_CELLF + hX_4.CLASS_MB_N;
if (!hX_4.isClassDefined(t)) {
this.classes[i].cellF[this.NORMAL]=this.classes[i].cell[this.NORMAL];
this.classes[i].cellF[this.MOUSED]=this.classes[i].cell[this.MOUSED];
this.classes[i].cellF[this.SELECTED]= this.classes[i].cell[this.SELECTED]
this.classes[i].cellF[this.SELECTED_MOUSED]= this.classes[i].cell[this.SELECTED_MOUSED]
} else
 this.setClass(p + hX_4.CLASS_MB_CELLF, this.classes[i].cellF);
t=p + hX_4.CLASS_MB_CELLL + hX_4.CLASS_MB_N;
if (!hX_4.isClassDefined(t)) {
this.classes[i].cellL[this.NORMAL]=this.classes[i].cell[this.NORMAL];
this.classes[i].cellL[this.MOUSED]=this.classes[i].cell[this.MOUSED];
this.classes[i].cellL[this.SELECTED]= this.classes[i].cell[this.SELECTED]
this.classes[i].cellL[this.SELECTED_MOUSED]= this.classes[i].cell[this.SELECTED_MOUSED]
} else
 this.setClass(p + hX_4.CLASS_MB_CELLL, this.classes[i].cellL);
this.setClass(p + hX_4.CLASS_MB_ITEM, this.classes[i].item);
this.setClass(p + hX_4.CLASS_MB_ALTITEM, this.classes[i].itemAlt);
this.setClass(p + hX_4.CLASS_MB_ARROW, this.classes[i].arrow);
this.classes[i].arrowImg[this.NORMAL]=hX_4.getClassStyle(this.classes[i].arrow[this.NORMAL], hX_4._BIMG);
this.classes[i].arrowImg[this.MOUSED]=hX_4.getClassStyle(this.classes[i].arrow[this.MOUSED], hX_4._BIMG);
this.classes[i].arrowImg[this.SELECTED]=hX_4.getClassStyle(this.classes[i].arrow[this.SELECTED], hX_4._BIMG);
this.classes[i].arrowImg[this.SELECTED_MOUSED]=hX_4.getClassStyle(this.classes[i].arrow[this.SELECTED_MOUSED], hX_4._BIMG);
}
}
HxG_4.prototype.JSFMenu.prototype.setClass=function (name, element) {
var t=name + hX_4.CLASS_MB_N, t1=name + hX_4.CLASS_MB_M, t2=name + hX_4.CLASS_MB_S, t3=name + hX_4.CLASS_MB_SM, isT2, isT3;
isT2=hX_4.isClassDefined(t2);
isT3=hX_4.isClassDefined(t3);
t1=(hX_4.isClassDefined(t1)) ? t1 : ((isT2) ? t2 : t);
element[this.NORMAL]=t;
element[this.MOUSED]=t1;
element[this.SELECTED]=(isT2) ? t2 : t1;
element[this.SELECTED_MOUSED]= (isT3) ? t3 : t1;
}
HxG_4.prototype.JSFMenu.prototype.skipSep=function (obj, nAdj, bound) {
var num=obj.num + nAdj, base=((obj.level==0) ? this.m : obj.p.m), menu=base.itemArray;
while ((num >= 0) && (num < menu.length) && (menu[num].isSeparator))
num=num + nAdj;
if (num < 0) return ((bound!= null && bound) ? base.lastItem : null);
else if (num >= menu.length) return ((bound!= null && bound) ? base.firstItem : null);
else return menu[num];
}
HxG_4.prototype.JSFMenu.prototype.menuFromId=function (iSrc) {
var v, p, r=null, base=null, src=iSrc;
while (src && src.tagName && src.tagName != hX_4._TD)
src=src.parentNode;
if (src && src.tagName == hX_4._TD && (!hX_4.isString(src.name) || src.name != hX_4.CMP_menu)) {
src=src.parentNode;
while (src && src.tagName && src.tagName != hX_4._TD && (!hX_4.isString(src.name) || src.name != hX_4.CMP_menu)) src=src.parentNode;
}
if (src==null || !src.tagName || src.tagName != hX_4._TD || (!hX_4.isString(src.name) || src.name != hX_4.CMP_menu))
return null;
p=src;
while (p && p.tagName && p.tagName != hX_4._TAB) p=p.parentNode;
if (p && p.id) {
base=hX_4.getComponentById(p.id.substr(0, p.id.length-6));
if (base != null) {
v=this.isVertical(0);
} else {
base=hX_4.getSubComponentById(p.id.substr(0, p.id.length-6));
if (base != null) v=this.isVertical(1);
}
}
p=src.parentNode;
if (p && p.tagName && p.tagName == hX_4._TR) {
r=(!v) ? ((src.cellIndex >= 0 && p.rowIndex==0) ? src.cellIndex : null) : ((p.rowIndex >= 0 && src.cellIndex==0) ? p.rowIndex : null);
if (this.isOpenInPlace()) r=r/2;
}
return ((base != null && r != null) ? base.m.itemArray[r] : null);
}
HxG_4.prototype.JSFMenu.prototype.dispatchComponent=function (evt) {
if ((typeof hX_4)=="undefined") return true;
evt=(evt) ? evt : ((event) ? event: null);
var src=(this.nodeType == hX_4.ELEMENT_NODE || this.nodeType == hX_4.DOCUMENT_NODE) ? this : this.parentNode;
var sub, root=null, div=src;
while (div && div.tagName && div.tagName != hX_4._DIV)
div=div.parentNode;
if (div && div.id)
root=hX_4.getComponentById(div.id);
if (!root && div && div.id) {
sub=div.id;
if (sub.indexOf("_popup_")) sub=sub.substr(sub.indexOf("_popup_")+7);
root=hX_4.getSubComponentById(sub);
root=(root) ? root.root : null;
}
if (root) {
if (!root.dispatchDragAction(src, evt)) {
if (evt.type != hX_4._evMC) {
hX_4.i.cancelAction(evt, true);
return false;
}
}
}
return true;
}
HxG_4.prototype.JSFMenu.prototype.dispatchDragAction=function (iSrc, evt) {
if ((typeof hX_4)=="undefined") return true;
var src=iSrc, rtn=false, state;
var bound=false, skip=false, focObj=null, clk=false, key=null, newObj=null, openObj=null, nAdj=0, toRoot=false;
if (evt && src) {
switch (evt.type) {
case hX_4._evF:
src=this.menuFromId(src);
if (hX_4.brw.isNavOrMoz() && src && src.level > 0 && !this.setFocusObj) {
if (src.root && src.root.m.firstItem) {
src=src.root.m.firstItem;
this.setFocus(src);
} else src=null;
}
if (src) this.focusObj=src;
this.setFocusObj=false;
rtn=true;
break;
case hX_4._evKU:
case hX_4._evKP:
switch (evt.keyCode) {
case hX_4.KEY_SPACEBAR:
case hX_4.KEY_ENTER:
case hX_4.KEY_LTARROW:
case hX_4.KEY_RTARROW:
case hX_4.KEY_UPARROW:
case hX_4.KEY_DNARROW:
case hX_4.KEY_TAB:
case hX_4.KEY_ESC:
return false;
break;
default:
if (hX_4.brw.isIE())
return true;
return false;
break;
}
case hX_4._evKD:
focObj=(this.focusObj) ? this.focusObj : this.getMouseState();
if (!focObj) {
if (src.id && this.m && this.m.lastItem && this.m.firstItem)
focObj=(this.m.lastItem.ITEMobj && src.id == this.m.lastItem.ITEMobj.id) ? this.m.lastItem : this.m.firstItem;
}
if (!focObj) return rtn;
key=evt.keyCode;
if ((focObj.level==0 && this.isTopVertical()) ||
(focObj.level>0 && !this.isVertical(focObj.level))) {
if (key == hX_4.KEY_RTARROW)
key=hX_4.KEY_DNARROW;
else if (key == hX_4.KEY_LTARROW)
key=hX_4.KEY_UPARROW;
else if (key == hX_4.KEY_DNARROW)
key=hX_4.KEY_RTARROW;
else if (key == hX_4.KEY_UPARROW)
key=hX_4.KEY_LTARROW;
}
switch (key) {
case hX_4.KEY_SPACEBAR:
case hX_4.KEY_ENTER:
this.setState(focObj, this.SELECTED, true, false);
if (focObj.isNode() && (!this.state[focObj.level].selOpen)) {
newObj=focObj.m.firstItem;
openObj=focObj;
clk=true;
} else {
if (focObj.level == 0)	focObj.setColorState(this.SELECTED);
return false;
}
break;
case hX_4.KEY_LTARROW:
case hX_4.KEY_RTARROW:
if (focObj.level > 0 &&
((focObj.isNode() && key == hX_4.KEY_RTARROW) ||
(focObj.p.isNode() && key == hX_4.KEY_LTARROW))) {
if (key == hX_4.KEY_RTARROW) {
newObj=focObj.m.firstItem;
openObj=focObj;
} else {
newObj=focObj.p;
focObj=null;
}
} else {
nAdj=(key == hX_4.KEY_LTARROW) ? -1 : +1;
toRoot=true;
bound=true;
}
break;
case hX_4.KEY_UPARROW:
case hX_4.KEY_DNARROW:
if (focObj.isNode() && focObj.level==0) {
openObj=focObj;
newObj=focObj.m.firstItem;
} else {
newObj=this.skipSep(focObj, (key == hX_4.KEY_UPARROW) ? -1 : +1, true);
}
break;
case hX_4.KEY_TAB:
nAdj=(evt.shiftKey) ? -1 : +1;
case hX_4.KEY_ESC:
toRoot=true;
break;
default:
return true;
}
if (toRoot) {
newObj=this.skipSep(this.m.itemArray[focObj.rootNum], nAdj, bound);
if (!newObj) {
this.uirelease();
if (hX_4.brw.isIE())
rtn=true;
else {
if (nAdj > 0)
hX_4.gotoNextPrev(this.m.lastItem.ITEMobj, true);
else
 hX_4.gotoNextPrev(this.m.firstItem.ITEMobj, false);
}
} else {
this.uirelease();
this.setFocus(newObj);
}
break;
}
if (openObj != null) {
if (!(this.isOpenSticky() && this.state[newObj.p.level].selOpen && this.state[openObj.level].selOpen.id == openObj.id)) {
this.setState (openObj, (clk)?this.SELECTED:this.MOUSED, clk, true);
this.setFocus(openObj);
}
}
if (newObj != null) {
this.setState (newObj, this.MOUSED, false, false);
if (newObj.p!=undefined && newObj.p.isNoNode!=undefined && newObj.p.isNoNode()) {
if (this.state[newObj.p.level].selOpen == null || (this.state[newObj.p.level].selOpen && this.state[newObj.p.level].selOpen.id != newObj.p.id))
newObj=null;
}
if (newObj != null) this.setFocus(newObj);
}
break;
default:
case hX_4._evMU:
case hX_4._evMC:
case hX_4._evMCC:
rtn=false;
break;
case hX_4._evMV:
case hX_4._evMM:
case hX_4._evMO:
case hX_4._evMD:
rtn=false;
if (evt.type==hX_4._evMM) {
skip=(src.tagName==this.lastMouseMove && evt.clientX == this.lastMouseX && evt.clientY == this.lastMouseY);
this.lastMouseMove=src.tagName;
this.lastMouseX=evt.clientX;
this.lastMouseY=evt.clientY;
} else
 this.lastMouseMove=this.lastMouseX=this.lastMouseY=null;
if (!skip) {
newObj=this.menuFromId(src);
if (newObj) {
if (evt.type==hX_4._evMO)
skip=(newObj.level == 0 && this.state[0].selOpen && this.isFly(0))
if (!skip) {
this.mousePt=hX_4.g.toPoint(evt);
this.setState (newObj, (evt.type==hX_4._evMO) ? this.NORMAL : ((evt.type==hX_4._evMD)?this.SELECTED:this.MOUSED), (evt.type==hX_4._evMD), false);
}
}
}
break;
}
}
return rtn;
}
HxG_4.prototype.JSFMenu.prototype.dispatchTimer=function (item, action) {
if ((typeof hX_4)=="undefined") return;
if (item == "popup")
if (action == "MouseOut") this.uirelease();
}
HxG_4.prototype.JSFSubMenu=function () {
this.type=hX_4.CMP_submenu;
this.itemArray=[];
this.firstItem=this.lastItem=null;
this.POPobj=this.POPdiv=null;
this._MD="menu_delete";
}
HxG_4.prototype.JSFSubMenu.prototype.addSubComponent=function (root, obj, position) {
if (obj.type == hX_4.CMP_mapitem) {
var base, k;
if (position == null)
this.itemArray.push(obj);
else {
if (position < 0 || position >= this.itemArray.length) return false;
this.itemArray.splice(position, 0, obj);
}
this.resetEnds();
base=(root.root) ? root.root : root;
if (base.HTMLrendered) {
base.buildNode();
base.redraw(obj);
}
return true;
}
return false;
}
HxG_4.prototype.JSFSubMenu.prototype.removeSubComponent=function (root, objid) {
var base, k;
for (k=0; k < this.itemArray.lenth; k++) {
if (this.itemArray[k].id == objid) break;
}
if (k >= 0 && k < this.itemArray.length) {
this.itemArray.splice(k, 1);
this.resetEnds();
base=(root.root) ? root.root : root;
if (base.HTMLrendered) {
base.buildNode();
base.redraw(obj);
}
return true;
}
return false;
}
HxG_4.prototype.JSFSubMenu.prototype.resetEnds=function () {
this.firstItem=this.lastItem=null;
var k;
for (k=0; (this.firstItem==null) && (k < this.itemArray.length); k++) {
if (this.itemArray[k].separator == null)
this.firstItem=this.itemArray[k];
}
for (k=this.itemArray.length-1; (this.lastItem==null) && (k >= 0); k--) {
if (this.itemArray[k].separator == null)
this.lastItem=this.itemArray[k];
}
}
HxG_4.prototype.JSFSubMenu.prototype.redraw=function () {
var i, c;
for (i=0; i < this.itemArray.length; i++) {
c=this.itemArray[i];
if (!c.isSeparator) {
if (c.item && c.item.id) {
c=hX_4.getComponentById(c.item.id);
if (c && c.redraw) c.redraw();
}
}
}
}
HxG_4.prototype.JSFSubMenu.prototype.buildMenu=function (root, owner, level, noNewChildren) {
if (level >= 0 && root.DOMobj && owner) {
var ii=0, i, j, P, T, R, C, mo;
if (this.POPdiv == null) {
this.POPobj=hX_4.addPopup (root.DOMobj.id+"_popup_"+owner.id, root.DOMobj.id, hX_4._E, 2, true, root.form);
this.POPobj.onPageLoad(true);
this.POPdiv=this.POPobj.DOMobj;
}
P=this.POPdiv;
if (P.style.overflow != hX_4._VS)	P.style.overflow=hX_4._VS;
if (level > 0) {
if (P.className != root.classes[level].div) P.className=root.classes[level].div;
hX_4.g.setP(P, hX_4._WD, hX_4._E);
hX_4.g.setP(P, hX_4._HT, hX_4._E);
} else
 hX_4.appendClassName(P, root.classes[level].div);
T=hX_4.getFirstChildInCell(P);
if (T == null || T.tagName != hX_4._TAB) {
T=document.createElement(hX_4._TAB);
T.setAttribute (hX_4._ID, owner.id + hX_4._U + hX_4._TAB.toLowerCase());
T.name=hX_4.CMP_menu;
T.cellPadding=T.cellSpacing=T.border=hX_4._Z;
P.appendChild(T);
}
if (T.className != root.classes[level].tab)
T.className=root.classes[level].tab;
if (noNewChildren == null || !noNewChildren) {
for (i=0; i < this.itemArray.length; i++) {
ii=(root.isOpenInPlace()) ? i*2 : i;
R=T.rows[(root.isVertical(level))?ii:0];
if (R == null) {
R=T.insertRow(-1);
R.name=hX_4.CMP_menu;
}
if (R.style.display == hX_4._NO) R.style.display=hX_4._E;
C=R.cells[(root.isVertical(level))?0:ii];
if (C == null) {
C=R.insertCell(-1);
C.name=hX_4.CMP_menu;
C.vAlign=hX_4._MID; C.align=hX_4._LFT; C.noWrap=hX_4._TRU;
C.style.position=hX_4._REL;
}
if (C.style.display == hX_4._NO) C.style.display=hX_4._E;
this.itemArray[i].BOXobj=C;
j=hX_4.getFirstChildInCell(C);
while (j != null) {
if (j.style) j.style.display=hX_4._NO;
if (j.name && j.name == this._MD)
C.removeChild(j);
else
 root.scratch.appendChild(j);
j=hX_4.getFirstChildInCell(C);
}
this.itemArray[i].buildItem(T.id, i, C);
if (root.isOpenInPlace()) {
if (root.isVertical(level)) {
R=T.insertRow(ii+1);
R.style.display=hX_4._NO;
R.name=hX_4.CMP_menu;
C=R.insertCell(-1);
C.vAlign=hX_4._TOP; C.align=hX_4._LFT; C.noWrap=hX_4._TRU;
} else {
C=R.insertCell(ii+1);
C.name=hX_4.CMP_menu;
C.vAlign=hX_4._MID; C.align=hX_4._LFT; C.noWrap=hX_4._TRU;
}
C.style.position=hX_4._REL;
C.style.display=hX_4._NO;
}
}
ii=(root.isOpenInPlace()) ? 2 : 1;
for (i=((root.isVertical(level)) ? (this.itemArray.length*ii) : 1); i < T.rows.length; i++)
T.rows[i].style.display=hX_4._NO;
for (i=((root.isVertical(level)) ? 1: (this.itemArray.length*ii)); i < T.rows[0].cells.length; i++)
T.rows[0].cells[i].style.display=hX_4._NO;
}
if (this.itemArray[0].ITEMobj == null) {
if (this.itemArray[0].BOXobj.className != root.classes[level].sepF)
this.itemArray[0].BOXobj.className=root.classes[level].sepF;
}
if (this.itemArray[this.itemArray.length-1].ITEMobj == null) {
if (this.itemArray[this.itemArray.length-1].BOXobj.className != root.classes[level].sepL)
this.itemArray[this.itemArray.length-1].BOXobj.className=root.classes[level].sepL;
}
if (level == 0 || root.isOpenSticky()) {
for (i=0; i < this.itemArray.length; i++) {
mo=this.itemArray[i].ITEMobj;
if (mo) {
hX_4.attachEvent (mo, hX_4._onKD, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onKU, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onKP, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMU, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMD, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMM, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMV, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMO, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMC, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMCC,hX_4._lF, root.dispatchComponent);
if (level==0 || (level > 0 && hX_4.brw.isNavOrMoz()))
hX_4.attachEvent (mo, hX_4._onF, hX_4._lF, root.dispatchComponent);
}
mo=this.itemArray[i].BOXobj;
if (mo) {
hX_4.attachEvent (mo, hX_4._onMU, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMD, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMM, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMV, hX_4._lF, root.dispatchComponent);
hX_4.attachEvent (mo, hX_4._onMO, hX_4._lF, root.dispatchComponent);
}
}
}
return true;
}
return false;
}
HxG_4.prototype.JSFMenuItem=function () {
this.type=hX_4.CMP_mapitem;
this.p=this.id=this.root=this.rootNum=this.level=null;
this.item=this.ITEMobj=this.BOXobj=this.visualState=this.separator=null;
this.num=-1;
this.altClass=this.isSeparator=this.hasArrowSpan=false;
this.arrowSpan=null;
this.noNode=false;
this.isNoNode=function() { return this.noNode; }
this.isComponent=null;
this.isNode=function () { return (this.m.itemArray.length > 0); }
this.m=new hX_4.JSFSubMenu();
this.itemName=this.wasItemName=this.label=this.fcn=null;
this.actions= [];
this.targets= [];
this.attributeTable=[];
this.attributeTable ['alt-class']=['altClass',		hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable ['separator']=['separator',		hX_4.ARG_IS_NAN,	false,	null,	null];
this.attributeTable ['sep']=['separator',		hX_4.ARG_IS_NAN,	false,	null,	null];
this.attributeTable ['label']=['label',			hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['lab']=['label',			hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['action']=['actions',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['target']=['targets',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['function']=['fcn',			hX_4.ARG_TO_FCNS,	false,	null,	null];
this.attributeTable ['onchange']=['fcn',			hX_4.ARG_TO_FCNS,	false,	null,	null];
this.attributeTable ['item']=['itemName',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable ['action-click']= ['noNode',		hX_4.ARG_IS_TRUE,	false,	null,	null];
this.setAttribute(arguments);
}
HxG_4.prototype.J_MI=HxG_4.prototype.JSFMenuItem;
HxG_4.prototype.JSFMenuItem.prototype.setAttribute=function(a) {
hX_4.parseArg (this.attributeTable, this, a);
if (this.root && this.p && this.p.m && this.root.HTMLrendered) {
this.p.buildNode();
this.p.m.redraw();
}
return true;
}
HxG_4.prototype.JSFMenuItem.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.JSFMenuItem.prototype.addSubComponent=function(obj, position) {
if (!this.isSeparator) this.m.addSubComponent (this, obj, position);
}
HxG_4.prototype.JSFMenuItem.prototype.removeSubComponent=function(objid) {
this.m.removeSubComponent (this, objid);
}
HxG_4.prototype.JSFMenuItem.prototype.buildNode=function(noNewChildren) {
if (this.m.itemArray.length > 0) {
this.m.buildMenu (this.root, this, (this.level+1), noNewChildren);
for (var i=0; i < this.m.itemArray.length; i++)
this.m.itemArray[i].buildNode(noNewChildren);
}
}
HxG_4.prototype.JSFMenuItem.prototype.buildItem=function(id_pre, num, parent) {
this.root=this.p, this.level=0;
this.num=this.rootNum=num;
while (this.root.type != hX_4.CMP_menu) {
this.rootNum=this.root.num;
this.root=this.root.p;
this.level++;
}
var a, r=this.root, l=this.level, P=parent;
this.item=null;
this.isSeparator=(this.separator != null) ? true : false;
if (this.itemName) {
this.item=hX_4.getElementById(this.itemName);
if (!this.item) {
var err=hX_4._ANC + hX_4._U + this.itemName;
a=document.createElement(hX_4._ANC);
a.setAttribute(hX_4._ID, err);
a.href=hX_4._LB;
hX_4.setIHTML(a, "Error - " + this.itemName);
this.item=a;
} else {
this.isComponent=hX_4.getComponentById(this.item.id);
var tagset=[];
tagset.push(new hX_4.tagListItem(hX_4._INP));
tagset.push(new hX_4.tagListItem(hX_4._BTN));
tagset.push(new hX_4.tagListItem(hX_4._SEL));
tagset.push(new hX_4.tagListItem(hX_4._ANC));
if (!hX_4.isTag(this.item, tagset)) {
this.itemName=hX_4._ANC + hX_4._U + this.itemName;
a=document.createElement(hX_4._ANC);
a.setAttribute(hX_4._ID, this.itemName);
a.href=hX_4._LB;
a.appendChild(this.item);
this.item=a;
}
}
} else {
if (this.isSeparator) {
if (this.separator.length > 0) {
a=document.createElement(hX_4._SPN);
hX_4.setIHTML(a, this.separator);
} else {
a=document.createElement(hX_4._IMG);
a.src=r.r.getURL(hX_4.R_IMG_SPACER);
a.width=1; a.height=1; a.border=0;
}
} else {
a=document.createElement(hX_4._ANC);
a.href=hX_4._LB;
}
a.setAttribute (hX_4._ID, id_pre + hX_4._U + hX_4._ANC + hX_4._U + num);
a.name="menu_delete";
this.item=a;
}
this.item.style.display=hX_4._E;
P.appendChild(this.item);
if ((l>0 || (l==0 && r.isVertical(0))) && this.isNode()) this.buildArrow(P,l);
if (this.isSeparator) {
this.ITEMobj=null;
if (P.className != r.classes[l].sep) P.className=r.classes[l].sep;
} else {
this.ITEMobj=this.item;
if (hX_4.brw.isIE())
this.item.tabIndex=(this.level > 0) ? -1: r.tabIndex;
else
 this.item.tabIndex=(this.level > 0) ? 99999: r.tabIndex;
if (this.label != null && hX_4.getIHTML(this.item) != this.label)
hX_4.setIHTML(this.item, this.label);
this.visualState=-1;
this.setColorState(r.NORMAL);
}
}
HxG_4.prototype.JSFMenuItem.prototype.buildArrow=function (parent, l) {
var w, img, a, a1=document.createElement(hX_4._SPN), a2=document.createElement(hX_4._SPN), a3=document.createElement(hX_4._SPN), a4=document.createElement(hX_4._SPN);
this.hasArrowSpan=true;
this.arrowSpan=new Array(this.root.MAXSTATES);
this.arrowSpan[this.root.NORMAL]=this.id+"_arrow_"+(l+1)+"_normal";
this.arrowSpan[this.root.MOUSED]=this.id+"_arrow_"+(l+1)+"_moused";
this.arrowSpan[this.root.SELECTED]=this.id+"_arrow_"+(l+1)+"_selected";
this.arrowSpan[this.root.SELECTED_MOUSED]=this.id+"_arrow_"+(l+1)+"_selected_moused";
a1.setAttribute(hX_4._ID, this.arrowSpan[this.root.NORMAL]);
a2.setAttribute(hX_4._ID, this.arrowSpan[this.root.MOUSED]);
a3.setAttribute(hX_4._ID, this.arrowSpan[this.root.SELECTED]);
a4.setAttribute(hX_4._ID, this.arrowSpan[this.root.SELECTED_MOUSED]);
a1.style.position=a2.style.position=a3.style.position=a4.style.position=hX_4._ABS;
a1.style.backgroundImage=a2.style.backgroundImage=a3.style.backgroundImage=a4.style.backgroundImage="none";
a1.className=this.root.classes[l].arrow[this.root.NORMAL];
a2.className=this.root.classes[l].arrow[this.root.MOUSED];
a3.className=this.root.classes[l].arrow[this.root.SELECTED];
a4.className=this.root.classes[l].arrow[this.root.SELECTED_MOUSED];
a2.style.display=a3.style.display=a4.style.display=hX_4._NO;
w=hX_4.getClassStyle(a1.className, hX_4._HT);
if (w && w.length > 0 && w.substr(0,1)==hX_4._Z) {
this.hasArrowSpan=false;
this.arrowSpan=null;
} else {
if (hX_4.brw.isNavOrMoz()) {
w=hX_4.getClassStyle(a1.className, hX_4._MGNT);
if (w && w.length > 0 && w.indexOf(hX_4._PX > 0)) {
w=(parseInt(w,10)/2) + hX_4._PX;
a1.style.marginTop=a2.style.marginTop=a3.style.marginTop=a4.style.marginTop=w;
}
}
if (this.root.classes[l].arrowImg[this.root.NORMAL]) {
for (w=this.root.NORMAL; w < this.root.MAXSTATES; w++) {
img=document.createElement(hX_4._IMG);
img.src=this.root.classes[l].arrowImg[w];
img.border=hX_4._Z;
img.style.padding=img.style.margin=hX_4._ZPX;
a=(w==this.root.NORMAL) ? a1 : (w==this.root.MOUSED?a2:((w==this.root.SELECTED)?a3:a4));
a.appendChild(img);
}
} else {
hX_4.setIHTML(a1, this.root.ARROW_1);
hX_4.setIHTML(a2, this.root.ARROW_2);
hX_4.setIHTML(a3, this.root.ARROW_2);
hX_4.setIHTML(a4, this.root.ARROW_2);
}
if (parent.firstChild.firstChild && parent.firstChild.firstChild.tagName == hX_4._TAB)
parent.firstChild.firstChild.align=hX_4._LFT;
parent.appendChild(a1); parent.appendChild(a2); parent.appendChild(a3); parent.appendChild(a4);
}
}
HxG_4.prototype.JSFMenuItem.prototype.findValue=function () {
return this.findValueTag(this.ITEMobj);
}
HxG_4.prototype.JSFMenuItem.prototype.findValueTag=function (node) {
var v=hX_4._E;
if (!this.isSeparator) {
while (node!=null) {
if (node.nodeType == hX_4.TEXT_NODE) v=node.nodeValue;
else if (node.firstChild) v=this.findValueTag(node.firstChild);
node=node.nextSibling;
}
}
return v;
}
HxG_4.prototype.JSFMenuItem.prototype.findTarget=function (value) {
var i, v, item=null;
if (!this.isSeparator) {
if (this.isNode()) {
for (i=0; item == null && i < this.m.itemArray.length; i++)
item=this.m.itemArray[i].findTarget(value);
} else {
v=this.findValue();
if (v != hX_4._E && v==value) item=this;
}
}
return item;
}
HxG_4.prototype.JSFMenuItem.prototype.setColorState=function (state) {
if (state >= 0 && state < this.root.MAXSTATES && this.ITEMobj != null) {
if (this.visualState != state) {
var t, cl, arr;
this.visualState=state;
cl=(this.altClass) ? (this.root.classes[this.level].cellAlt[state]) : ((this.p.m.firstItem.num==this.num) ? (this.root.classes[this.level].cellF[state]) : ((this.p.m.lastItem.num==this.num) ? (this.root.classes[this.level].cellL[state]) : (this.root.classes[this.level].cell[state])));
this.BOXobj.className=cl;
t=hX_4.getFirstChildInCell(this.BOXobj);
while (t && t.tagName) {
arr=this.hasArrowSpan && t.id && (t.id==this.arrowSpan[this.root.NORMAL] || t.id==this.arrowSpan[this.root.MOUSED] || t.id==this.arrowSpan[this.root.SELECTED] || t.id==this.arrowSpan[this.root.SELECTED_MOUSED]);
cl=(this.altClass) ? this.root.classes[this.level].itemAlt[state] : this.root.classes[this.level].item[state];
cl=(arr) ? (cl+hX_4._B+this.root.classes[this.level].arrow[state]) : cl;
hX_4.appendClassName(t, cl, this.root.baseClass);
if (arr) hX_4.g.setP(t, hX_4._DSP, (t.id == this.arrowSpan[state]) ? hX_4._E : hX_4._NO);
t=t.nextSibling;
}
}
return true;
}
return false;
}
HxG_4.prototype.JSFMenuItem.prototype.setState=function (iState, clickAction, force, initial) {
if (iState >= 0 && iState < this.root.MAXSTATES && this.ITEMobj != null) {
var c, state=iState, vis=((state == this.root.SELECTED) || state == (this.root.SELECTED_MOUSED) || (state == this.root.MOUSED));
this.setColorState(state);
if ((force || clickAction || this.root.isFly(this.level))) {
if (!(initial && !this.root.isOpenSticky())) {
c=(state==this.root.SELECTED && force) ? false : clickAction;
this.doNode(vis, this.BOXobj, c);
}
}
return true;
}
return false;
}
HxG_4.prototype.JSFMenuItem.prototype.doNode=function(display, ilocation, clicked) {
var i, c, d=null, pop, l=this.level, location=ilocation, openItem=this.root.state[l].selOpen;
if (display) {
if (!(clicked && this.isNoNode())) {
if (openItem != null && openItem.id != this.id) {
pop=openItem.m.POPobj;
if (pop && pop.DOMobj) {
if (!this.root.isOpenSticky())
hX_4.mouser.removeHotSpot(pop.DOMobj);
pop.sticky=false;
pop.uirelease(this.root.isOpenInPlace());
if (this.root.isOpenInPlace()) this.tidyPop(openItem, pop, false);
}
openItem=this.root.state[l].selOpen=null;
}
if (this.isNode() && (openItem == null || openItem.id != this.id)) {
pop=this.m.POPobj;
if (pop && pop.DOMobj) {
openItem=this.root.state[l].selOpen=this;
if (!this.root.isOpenSticky() && l==0)
hX_4.mouser.setBaseSpot(this.root, location,  !(this.root.isFlyOpen()));
if (this.root.isVertical(l))
d=pop.DIR_RIGHT;
else if (!this.root.isBodyVertical() && !this.root.isTopVertical()) {
location=null;
d=pop.DIR_CENTER;
}
pop.DOMobj.style.zIndex=hX_4._E+(1000000+l);
hX_4.uistate.setActiveComponent (this.root);
pop.sticky=(this.root.isOpenSticky()) ? true: false;
if (this.root.isOpenInPlace())
pop.uivisible(d, location, this.tidyPop(this, pop, true));
else
 pop.uivisible(d, location, null, (this.root.relative?this.root.mousePt:null));
this.m.redraw();
if (!this.root.isOpenSticky())
hX_4.mouser.addHotSpot(pop.DOMobj);
}
}
}
} else {
if (openItem != null) {
pop=openItem.m.POPobj;
if (pop && pop.DOMobj) {
if (!this.root.isOpenSticky())
hX_4.mouser.removeHotSpot(pop.DOMobj);
pop.sticky=false;
pop.uirelease(this.root.isOpenInPlace());
if (this.root.isOpenInPlace()) this.tidyPop(openItem, pop, false);
}
openItem=this.root.state[l].selOpen=null;
}
}
if (clicked && (!this.isNode() || this.isNoNode())) {
if (l > 0 && !this.root.isOpenSticky()) this.root.uirelease();
if ((this.actions.length==0 && !this.fcn))
hX_4.action.doClick(this.ITEMobj);
else
 hX_4.action.processAction (this.root.DOMobj, null, this.fcn, this.actions, true, this.targets, null, false, false, false, false);
if (this.root.fcn)
hX_4.action.processAction (this.root.DOMobj, null, this.root.fcn, null, true, null, null, false, false, false, false);
}
}
HxG_4.prototype.JSFMenuItem.prototype.tidyPop=function(item, pop, display) {
var n, R=null, C=null, T=item.BOXobj.parentNode;
while (T && T.tagName && T.tagName != hX_4._TAB)
T=T.parentNode;
if (T && T.tagName && T.tagName == hX_4._TAB) {
var d=(display) ? hX_4._E : hX_4._NO;
n=(item.num*2)+1;
if (this.root.isVertical(item.level)) {
if (n < T.rows.length) {
R=T.rows[n];
R.style.visibility=hX_4._VS;
R.style.display=d;
C=(R.cells.length > 0) ? R.cells[0] : null;
}
} else {
if (t.rows.length > 0 && t.rows[0].cells.length > n) C=t.rows[0].cells[n];
}
if (C) {
C.style.visibility=hX_4._VS;
C.style.display=d;
}
}
return C;
}
HxG_4.prototype.getParentIdByType=function(id,type) {
var parent=hX_4.getElementById(id);
parent=parent.parentNode;
while (parent != null) {
if(parent.nodeName==type){
break;
}
parent=parent.parentNode;
}
if (parent==null) {
return null;
}
if (parent.id==null || parent.id=="") {
parent.id=type + "_parentof_"+ id;
}
return parent.id;
}
HxG_4.prototype.getParentOfType=function(obj,type) {
var parent=obj.parentNode;
while(parent!=null){
if(parent.nodeName==type) {
return parent;
}
parent=parent.parentNode;
}
return null;
}
HxG_4.prototype.JSFBehaviorRowAction=function () {
this.type="tablerowaction";
this.hiddenInputId="";
this.inputValue="";
this.colClass=null;
this.actionId="";
this.url="";
this.inputObj=null;
this.formObj=null;
this.trObj=null;
this.attributeTable=new Array();
this.attributeTable ['input-id']=['hiddenInputId',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['input-value']=['inputValue',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['action-id']=['actionId',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['url']=['url',hX_4.ARG_TO_NAN,false,null,null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorRowAction.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorRowAction.prototype.setAttributeCode=function() {
if(this.actionId){
this.inputObj=hX_4.getElementById(this.actionId);
this.trObj=hX_4.getParentOfType(this.inputObj,hX_4._TR);
hX_4.addBehavior(hX_4.getParentIdByType(this.actionId,hX_4._TR),"onclick",new hX_4.JSFBehaviorGeneric("action:goto", "target:url('"+this.url+"')"));
} else {
this.inputObj=hX_4.getElementById(this.hiddenInputId);
this.formObj=hX_4.getParentOfType(this.inputObj, hX_4._FRM);
this.trObj=hX_4.getParentOfType(this.inputObj,hX_4._TR);
}
this.trObj.style.cursor="pointer";
return true;
}
HxG_4.prototype.JSFBehaviorRowAction.prototype.dispatchBehavior=function(thisObj, evt) {
if (this.DOMobj != null && this.inputObj != null && this.formObj != null) {
this.inputObj.disabled=false;
this.inputObj.value=this.inputValue;
this.formObj.submit();
this.inputObj.disabled=true;
}
return;
}
HxG_4.prototype.JSFBehaviorRowCategory=function () {
this.type="tablerowcategory";
this.catId="";
this.expImgSrc="";
this.colImgSrc="";
this.firstRowNum="";
this.lastRowNum="";
this.componentId="";
this.initImg="";
this.expImg=null;
this.colImg=null;
this.attributeTable=new Array();
this.attributeTable ['cat-id']=['catId',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['twistie-exp-img']=['expImgSrc',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['twistie-col-img']=['colImgSrc',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['first-row-num']=['firstRowNum',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['last-row-num']=['lastRowNum',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['component-id']=['componentId',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['init-img']=['initImg',hX_4.ARG_TO_NAN,false,null,null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorRowCategory.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorRowCategory.prototype.IMAGE_ARRAY=new Array();
HxG_4.prototype.JSFBehaviorRowCategory.prototype.setAttributeCode=function() {
for(var i=0;i < this.IMAGE_ARRAY.length;i=i+2) {
if(this.IMAGE_ARRAY[i] == this.expImgSrc){
this.expImg=this.IMAGE_ARRAY[i+1];
}
if(this.IMAGE_ARRAY[i] == this.colImgSrc){
this.colImg=this.IMAGE_ARRAY[i+1];
}
}
if(this.expImg==null){
this.expImg=new Image();
this.expImg.src=this.expImgSrc;
this.IMAGE_ARRAY[this.IMAGE_ARRAY.length]=this.expImgSrc;
this.IMAGE_ARRAY[this.IMAGE_ARRAY.length]=this.expImg;
}
if(this.colImg==null){
this.colImg=new Image();
this.colImg.src=this.colImgSrc;
this.IMAGE_ARRAY[this.IMAGE_ARRAY.length]=this.colImgSrc;
this.IMAGE_ARRAY[this.IMAGE_ARRAY.length]=this.colImg;
}
if(this.initImg=="true"){
this.initTwistieImgs()
}
return true;
}
HxG_4.prototype.JSFBehaviorRowCategory.prototype.dispatchBehavior=function(thisObj, evt) {
var rowNum=0,rowId="",row=null,twistieId=this.catId+'img';
var twistie=hX_4.getElementById(twistieId);
var u=0;
while(true) {
rowId=this.catId+rowNum;
if ((row=hX_4.getElementById(rowId))!=null){
if(row.style.display=='none'){
if(u==0){
twistie.src=this.expImg.src;
u=1;
}
row.style.display='';
} else {
if(u==0){
twistie.src=this.colImg.src;
u=1;
}
row.style.display='none';
}
rowNum++;
} else {
break;
}
}
return;
}
HxG_4.prototype.JSFBehaviorRowCategory.prototype.initTwistieImgs=function() {
var rowNum=0,rowId="",row=null,twistieId=this.catId+'img';
var twistie=hX_4.getElementById(twistieId);
rowId=this.catId+rowNum;
if ((row=hX_4.getElementById(rowId))!=null){
if(row.style.display=='none'){
twistie.src=this.colImg.src;
} else {
twistie.src=this.expImg.src;
}
}
return;
}
HxG_4.prototype.JSFBehaviorRowEditShowHide=function () {
this.type="tableroweditshowhide";
this.divId="";
this.show="";
this.divObj=null;
this.trObj=null;
this.cloneObj=null;
this.attributeTable=new Array();
this.attributeTable ['div-id']=['divId',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['show']=['show',hX_4.ARG_TO_NAN,false,null,null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.setAttributeCode=function() {
this.divObj=hX_4.getElementById(this.divId);
this.trObj=hX_4.getParentOfType(this.divObj,hX_4._TR);
this.cloneObj=this.divObj.cloneNode(true);
return true;
}
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.dispatchBehavior=function(thisObj, evt) {
if(this.divObj==null) {
alert("RUNTIME ERROR: can't find element "+this.spanId);
return;
}
if(!this.divObj.style)	{
return;
}
if(HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.LAST_SHOWN!=null)	{
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.LAST_SHOWN.style.visibility="hidden";
}
this.setVisible(this.show);
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.LAST_SHOWN=this.divObj;
}
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.LAST_SHOWN=null;
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.setVisible=function(bVisible) {
if(bVisible=="false") {
this.divObj.style.visibility="hidden";
this.restoreState(this.cloneObj, this.divObj);
}
else {
this.divObj.style.visibility="visible";
this.setPosition();
}
}
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.restoreState=function(objFrom, objTo) {
if(objFrom.nodeName != objTo.nodeName) {
return;
}
if(objFrom.childNodes.length != objTo.childNodes.length) {
return;
}
if(objFrom.value) {
objTo.value=objFrom.value;
}
for(var i=0; i<objFrom.childNodes.length; i++) {
this.restoreState(objFrom.childNodes[i], objTo.childNodes[i]);
}
}
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.setPosition=function() {
if(this.trObj == null) {
return;
}
var body=hX_4.getParentOfType(this.divObj, hX_4._BBODY);
var rowW=this.trObj.offsetWidth;
var rowL=this.getX(this.trObj);
var pageW=body.scrollWidth;
var spanW=this.divObj.offsetWidth;
var spanL=rowL + (rowW/2) - (spanW/2);
if(pageW>0) {
var xOffset=pageW - (spanW+spanL);
if(xOffset<0) {
spanL+=xOffset;
}
if(spanL<0) {
spanL=0;
}
}
var rowH=this.trObj.offsetHeight;
var rowT=this.getY(this.trObj);
var scrollH=body.scrollTop;
var clientH=body.clientHeight;
var spanH=this.divObj.offsetHeight;
var spanT=(rowT + (rowH/2)) - (spanH/2);
if(clientH>0) {
var yOffset=(scrollH + clientH) - (spanH + spanT);
if(yOffset<0) {
spanT+=yOffset;
}
if(spanT<0) {
spanT=0;
}
if(spanT<scrollH){
spanT=scrollH;
}
}
this.divObj.style.left=spanL;
this.divObj.style.top=spanT;
this.divObj.style.visibility="visible";
}
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.getX=function(obj) {
var curleft=0;
if (obj.offsetParent) {
while (obj.offsetParent) {
curleft+=obj.offsetLeft
 obj=obj.offsetParent;
}
}
else if (obj.x)
curleft+=obj.x;
return curleft;
}
HxG_4.prototype.JSFBehaviorRowEditShowHide.prototype.getY=function(obj) {
var curtop=0;
if (obj.offsetParent)
{
while (obj.offsetParent)
{
curtop+=obj.offsetTop
 obj=obj.offsetParent;
}
}
else if (obj.y)
curtop+=obj.y;
return curtop;
}
HxG_4.prototype.JSFBehaviorRowEditSave=function () {
this.type="tableroweditsave";
this.divId="";
this.tableId="";
this.hiddenId="";
this.divObj=null;
this.tableObj=null;
this.formObj=null;
this.hiddenObj=null;
this.attributeTable=new Array();
this.attributeTable ['div-id']=['divId',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['table-id']=['tableId',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['hidden-id']=['hiddenId',hX_4.ARG_TO_NAN,false,null,null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorRowEditSave.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorRowEditSave.prototype.setAttributeCode=function() {
this.divObj=hX_4.getElementById(this.divId);
this.tableObj=hX_4.getElementById(this.tableId);
this.formObj=hX_4.getParentOfType(this.tableObj,hX_4._FRM);
this.hiddenObj=hX_4.getElementById(this.hiddenId);
return true;
}
HxG_4.prototype.JSFBehaviorRowEditSave.prototype.dispatchBehavior=function(thisObj, evt) {
if(this.formObj==null){
return;
}
this.hiddenObj.value="clicked";
this.formObj.submit();
}
HxG_4.prototype.JSFBehaviorPager=function () {
this.type="tablepager";
this.inputId="";
this.index="";
this.formId="";
this.action="";
this.formObj=null;
this.inputObj=null;
this.attributeTable=new Array();
this.attributeTable ['input-id']=['inputId',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['index']=['index',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['form-id']=['formId',hX_4.ARG_TO_NAN,false,null,null];
this.attributeTable ['action']=['action',hX_4.ARG_TO_NAN,false,null,null];
this.setAttribute(arguments);
}
HxG_4.prototype.JSFBehaviorPager.prototype=new hX_4.JSFBehavior();
HxG_4.prototype.JSFBehaviorPager.prototype.setAttributeCode=function() {
this.inputObj=hX_4.getElementById(this.inputId);
this.formObj=hX_4.getElementById(this.formId);
return true;
}
HxG_4.prototype.JSFBehaviorPager.prototype.dispatchBehavior=function(thisObj, evt) {
if(this.formObj==null || this.inputObj==null){
return;
}
if(this.action=="submit"){
this.submit();
}
}
HxG_4.prototype.JSFBehaviorPager.prototype.submit= function(){
var curPage=this.inputObj.value;
this.inputObj.value=this.index;
this.formObj.submit();
this.inputObj.value=curPage;
}
HxG_4.prototype.HxSelection=function(bSelected)
{
this.bSelected=bSelected;
this.arrSelectionListeners=new Array();
}
HxG_4.prototype.HxSelection.prototype.setSelected=function (bSelected)
{
if(this.bSelected==bSelected)
{
return;
}
this.bSelected=bSelected;
this.fireSelectionListeners();
}
HxG_4.prototype.HxSelection.prototype.isSelected=function ()
{
return this.bSelected;
}
HxG_4.prototype.HxSelection.prototype.addSelectionListener=function (objListener)
{
if(!objListener)
{
alert("RUNTIME ERROR: null SelectionListener added to HxSelection");
}
if(!objListener.selectionChanged)
{
alert("RUNTIME ERROR: SelectionListener does not proide selectionChanged method");
}
this.arrSelectionListeners[this.arrSelectionListeners.length]=objListener;
}
HxG_4.prototype.HxSelection.prototype.fireSelectionListeners=function ()
{
var len=this.arrSelectionListeners.length;
for(var i=0; i<len; i++)
{
this.arrSelectionListeners[i].selectionChanged(this);
}
}
HxG_4.prototype.HxStatisticsListener=function(strDivId, nSelCount)
{
if(!hX_4.getElementById)
{
return;
}
this.nSelCount=nSelCount;
var objDiv=hX_4.getElementById(strDivId);
if(!objDiv)
{
alert("RUNTIME ERROR: "+strDivId+" not found.");
return;
}
this.objText=objDiv.firstChild;
}
HxG_4.prototype.HxStatisticsListener.prototype.selectionChanged=function (objHxSelection)
{
if(objHxSelection.isSelected())
{
this.nSelCount++;
}
else
 {
this.nSelCount--;
}
this.objText.data=this.nSelCount;
}
HxG_4.prototype.HxCheckboxListener=function(strCheckboxId, objSelection)
{
if(!hX_4.getElementById)
{
return;
}
this.objCheckbox=hX_4.getElementById(strCheckboxId);
if(!this.objCheckbox)
{
alert("RUNTIME ERROR: checkbox "+strCheckboxId+" cannot be found");
return;
}
this.objSelection=objSelection;
this.bindToDom();
this.objSelection=objSelection;
this.objSelection.addSelectionListener(this);
}
HxG_4.prototype.HxCheckboxListener.prototype.bindToDom=function ()
{
var thisObj=this;
this.objCheckbox.onclick=function()
{
thisObj.onclick();
}
}
HxG_4.prototype.HxCheckboxListener.prototype.isSelected=function ()
{
return this.objCheckbox.checked;
}
HxG_4.prototype.HxCheckboxListener.prototype.setSelected=function (bSelected)
{
this.objCheckbox.checked=bSelected;
}
HxG_4.prototype.HxCheckboxListener.prototype.onclick=function ()
{
this.objSelection.setSelected(this.isSelected());
}
HxG_4.prototype.HxCheckboxListener.prototype.selectionChanged=function (objHxSelection)
{
if(objHxSelection.isSelected() != this.isSelected())
{
this.setSelected(objHxSelection.isSelected());
}
}
HxG_4.prototype.HxStyleRegister=function(varSelection, strTableId, strSpanId, strStyles)
{
if(!hX_4.getElementById) {
return;
}
this.objTable=hX_4.getElementById(strTableId);
if(!this.objTable) {
alert("RUNTIME ERROR: table not found: "+strTableId);
}
this.objSpan=hX_4.getElementById(strSpanId);
if(!this.objSpan) {
alert("RUNTIME ERROR: select element not found: "+strSpanId);
}
this.styleIterator=new hX_4.HxStyleIterator(strStyles);
var cellArr=this.getCells();
if(!cellArr) {
return;
}
for(var i=0; i<cellArr.length; i++) {
var td=cellArr[i];
var style=this.styleIterator.next();
var listener=new hX_4.HxStyleListener(td, style);
listener.selectionChanged(varSelection);
varSelection.addSelectionListener(listener);
}
}
HxG_4.prototype.HxStyleRegister.prototype.getCells=function()
{
var tableBody=this.getChildOfType(this.objTable, hX_4._TBDY);
if(!tableBody) {
return null;
}
var trArr=this.getChildrenOfType(tableBody, hX_4._TR);
for(var i=0; i<trArr.length; i++) {
if(this.isDescendant(trArr[i], this.objSpan)) {
return this.getChildrenOfType(trArr[i], hX_4._TD);
}
}
return null;
}
HxG_4.prototype.HxStyleRegister.prototype.getChildOfType=function(objParent, strNodeName)
{
var objArr=this.getChildrenOfType(objParent, strNodeName);
if(objArr.length<1) {
return null;
}
return objArr[0];
}
HxG_4.prototype.HxStyleRegister.prototype.getChildrenOfType=function(objParent, strNodeName)
{
var objArr=new Array();
for(var i=0; i<objParent.childNodes.length; i++) {
if(objParent.childNodes[i].nodeName == strNodeName) {
objArr[objArr.length]=objParent.childNodes[i];
}
}
return objArr;
}
HxG_4.prototype.HxStyleRegister.prototype.isDescendant=function(objParent, objChild)
{
var n=objChild;
while(true) {
n=n.parentNode;
if(!n) {
return false;
}
if(n == objParent) {
return true;
}
}
return false;
}
HxG_4.prototype.HxStyleListener=function(objTd, strStyle)
{
this.objTd=objTd;
this.strUnselectedCss=objTd.className;
this.strSelectedCss=strStyle;
}
HxG_4.prototype.HxStyleListener.prototype.selectionChanged=function (objHxSelection)
{
if(objHxSelection.isSelected())
{
this.objTd.className=this.strSelectedCss;
}
else
 {
this.objTd.className=this.strUnselectedCss;
}
}
HxG_4.prototype.HxStyleIterator=function(strStyles)
{
this.styleList=new Array();
this.index=0;
var str=new String(strStyles);
var i, subs, n=0;
while(true)
{
i=str.indexOf(",", n);
if(i<0) {
subs=str.substring(n, str.length);
this.styleList[this.styleList.length]=subs;
break;
}
else {
subs=str.substring(n, i);
this.styleList[this.styleList.length]=subs;
n=i+1;
}
}
}
HxG_4.prototype.HxStyleIterator.prototype.next=function()
{
if(this.index >= this.styleList.length) {
this.index=0;
}
return this.styleList[this.index++];
}
HxG_4.prototype.HxCheckImageListener=function(strImgId, strUnselectedUrl, strSelectedUrl, strUnselected, strSelected)
{
if(!hX_4.getElementById)
{
return;
}
this.objImg=hX_4.getElementById(strImgId);
if(this.objImg==null)
{
alert("RUNTIME ERROR: cannot find item to set background on: "+strImgId);
}
this.strUnselectedUrl=strUnselectedUrl;
this.strSelectedUrl=strSelectedUrl;
this.strUnselected=strUnselected;
this.strSelected=strSelected;
}
HxG_4.prototype.HxCheckImageListener.prototype.selectionChanged=function (objHxSelection)
{
if(objHxSelection.isSelected())
{
this.objImg.src=this.strSelectedUrl;
this.objImg.alt=this.strSelected;
}
else
 {
this.objImg.src=this.strUnselectedUrl;
this.objImg.alt=this.strUnselected;
}
}
HxG_4.prototype.HxCheckCellListener=function(strSpanId, strInputId, objGroup, objHxSelection){
if(!hX_4.getElementById)
{
return;
}
this.objTd=hX_4.getElementById(strSpanId);
if(!this.objTd)
{
alert("RUNTIME ERROR: SPAN element "+strSpanId+" cannot be found");
return;
}
this.objTd=this.getParentOfType(this.objTd, hX_4._TD);
if(!this.objTd)
{
alert("RUNTIME ERROR: TD element cannot be found");
return;
}
this.objInput=hX_4.getElementById(strInputId);
if(!this.objInput)
{
alert("RUNTIME ERROR: INPUT element "+strInputId+" cannot be found");
return;
}
this.objGroup=objGroup;
this.objHxSelection=objHxSelection;
this.bindToDom();
this.objGroup.addMember(this);
}
HxG_4.prototype.HxCheckCellListener.prototype.bindToDom=function()
{
var thisObj=this;
this.objTd.onmousedown=function (evt)
{
if(!evt)
evt=window.event;
thisObj.onMouseDown(evt);
return false;
}
this.objTd.onclick=function (evt)
{
return false;
}
this.objTd.onkeypress=function (evt)
{
if(!evt)
evt=window.event;
thisObj.onKey(evt);
}
}
HxG_4.prototype.HxCheckCellListener.prototype.onMouseDown=function(evt)
{
this.objHxSelection.setSelected(!this.objHxSelection.isSelected());
this.setSelected(this.objHxSelection.isSelected());
this.objGroup.fireMouseDown(evt, this.objHxSelection.isSelected());
}
HxG_4.prototype.HxCheckCellListener.prototype.onKey=function(evt)
{
var nKey=evt.which | evt.keyCode;
if(nKey!=32)
{
return;
}
this.objHxSelection.setSelected(!this.objHxSelection.isSelected());
this.setSelected(this.objHxSelection.isSelected());
}
HxG_4.prototype.HxCheckCellListener.prototype.setSelected=function(bSelected)
{
if(bSelected && this.objGroup.isRadio){
for(x in this.objGroup.arrayMembers){
this.objGroup.arrayMembers[x].objHxSelection.setSelected(false);
this.objGroup.arrayMembers[x].objInput.value=false;
}
}
this.objHxSelection.setSelected(bSelected);
this.objInput.value=bSelected;
}
HxG_4.prototype.HxCheckCellListener.prototype.isSelected=function()
{
return this.objHxSelection.isSelected();
}
HxG_4.prototype.HxCheckCellListener.prototype.isInElementBoundary=function(pt)
{
var y=hX_4.g.getAbsPosTop(this.objTd), x=hX_4.g.getAbsPosLeft(this.objTd);
if(pt.X<x || pt.Y<y) return false;
y+=this.objTd.offsetHeight; x+=this.objTd.offsetWidth;
if (pt.Y>y || pt.X>x) return false;
return true;
}
HxG_4.prototype.HxCheckCellListener.prototype.getParentOfType=function(node, strType)
{
if((node == null) || (strType==null))
{
return null;
}
var parent=node.parentNode;
while(parent!=null)
{
if(parent.nodeName==strType)
{
return parent;
}
parent=parent.parentNode;
}
return null;
}
HxG_4.prototype.HxCheckCellGroup=function(radio)
{
this.arrayMembers=new Array();
this.bSelected=true;
this.isRadio=false;
if(radio){
this.isRadio=true;
}
if(!hX_4.getElementById)
{
return;
}
}
HxG_4.prototype.HxCheckCellGroup.prototype.GROUP=null;
HxG_4.prototype.HxCheckCellGroup.prototype.addMember=function (objHxCheckCellListener)
{
this.arrayMembers[this.arrayMembers.length]=objHxCheckCellListener;
}
HxG_4.prototype.HxCheckCellGroup.prototype.isSelected=function()
{
return this.bSelected;
}
HxG_4.prototype.HxCheckCellGroup.prototype.setSelected=function(bSelected)
{
this.bSelected=bSelected;
}
HxG_4.prototype.HxCheckCellGroup.prototype.fireMouseDown=function(evt, bSelected)
{
this.setSelected(bSelected);
hX_4.HxCheckCellGroup.prototype.GROUP=this;
this.registerWindowListeners(evt);
}
HxG_4.prototype.HxCheckCellGroup.prototype.registerWindowListeners=function(evt)
{
if(document.attachEvent)
{
document.attachEvent("onmousemove", HxG_4.prototype.HxCheckCellGroup.prototype.onMouseEnterStatic);
document.attachEvent("onmouseup",   HxG_4.prototype.HxCheckCellGroup.prototype.onMouseUpStatic);
document.attachEvent("onselectstart",   HxG_4.prototype.HxCheckCellGroup.prototype.onSelectStartStatic);
window.event.cancelBubble=true;
window.event.returnValue=false;
}
else if(document.addEventListener)
{
document.addEventListener("mousemove", HxG_4.prototype.HxCheckCellGroup.prototype.onMouseEnterStatic, true);
document.addEventListener("mouseup",   HxG_4.prototype.HxCheckCellGroup.prototype.onMouseUpStatic, true);
evt.preventDefault();
}
}
HxG_4.prototype.HxCheckCellGroup.prototype.onSelectStartStatic=function(evt)
{
return false;
}
HxG_4.prototype.HxCheckCellGroup.prototype.onMouseEnterStatic=function(evt)
{
if(!evt)
evt=window.event;
hX_4.HxCheckCellGroup.prototype.GROUP.onMouseEnter(evt);
}
HxG_4.prototype.HxCheckCellGroup.prototype.onMouseEnter=function(evt)
{
var len=this.arrayMembers.length;
for(var i=0; i<len; i++)
{
if(this.arrayMembers[i].isInElementBoundary(hX_4.g.toPoint(evt)))
{
this.arrayMembers[i].setSelected(this.isSelected());
return;
}
}
}
HxG_4.prototype.HxCheckCellGroup.prototype.onMouseUpStatic=function(evt)
{
if(!evt)
evt=window.event;
if(document.detachEvent)
{
document.detachEvent("onmousemove", HxG_4.prototype.HxCheckCellGroup.prototype.onMouseEnterStatic);
document.detachEvent("onmouseup", HxG_4.prototype.HxCheckCellGroup.prototype.onMouseUpStatic);
document.detachEvent("onselectstart",   HxG_4.prototype.HxCheckCellGroup.prototype.onSelectStartStatic);
}
else if(document.removeEventListener)
{
document.removeEventListener("mousemove", HxG_4.prototype.HxCheckCellGroup.prototype.onMouseEnterStatic, true);
document.removeEventListener("mouseup", HxG_4.prototype.HxCheckCellGroup.prototype.onMouseUpStatic, true);
}
hX_4.HxCheckCellGroup.prototype.GROUP=null;
}
HxG_4.prototype.HxCheckCellGroup.prototype.selectAll=function()
{
var len=this.arrayMembers.length;
for(var i=0; i<len; i++)
{
this.arrayMembers[i].setSelected(true);
}
}
HxG_4.prototype.HxCheckCellGroup.prototype.selectNone=function()
{
var len=this.arrayMembers.length;
for(var i=0; i<len; i++)
{
this.arrayMembers[i].setSelected(false);
}
}
HxG_4.prototype.HxCheckCellGroup.prototype.selectInverse=function()
{
var len=this.arrayMembers.length;
for(var i=0; i<len; i++)
{
this.arrayMembers[i].setSelected(!this.arrayMembers[i].isSelected());
}
}
HxG_4.prototype.HxFocusChanger=function(element, nPrev, nNext)
{
if(!hX_4.getElementById)
{
return;
}
this.objThis=this.findFocusableElement(element);
this.nNext=nNext;
this.nPrev=nPrev;
if(this.objThis==null)
{
return;
}
this.bindToDom(this.objThis);
}
HxG_4.prototype.HxFocusChanger.prototype.bindToDom=function(objThis)
{
if(objThis.onkeyup != null)
{
this.anotherKeyListener=objThis.onkeyup;
}
var thisObject=this;
objThis.onkeyup=function(evt)
{
if(!evt)
evt=window.event;
thisObject.onkeyup(evt);
if(thisObject.anotherKeyListener!=null)
{
var fn=objThis.onkeyup;
objThis.onkeyup=thisObject.anotherKeyListener;
objThis.onkeyup(evt);
objThis.onkeyup=fn;
}
}
}
HxG_4.prototype.HxFocusChanger.prototype.onkeyup=function(evt)
{
var nKey=evt.which | evt.keyCode;
var objGoto=null;
if(nKey == this.nNext)
{
objGoto=this.findPeer(this.objThis, true);
}
else if(nKey == this.nPrev)
{
objGoto=this.findPeer(this.objThis, false);
}
else
 {
return;
}
if(objGoto!=null)
{
objGoto.focus();
}
}
HxG_4.prototype.HxFocusChanger.prototype.findFocusableElement=function(el)
{
if(el==null)
{
return null;
}
var obj=el;
if(typeof(el) == "string")
{
obj=hX_4.getElementById(el);
}
if(obj==null)
{
alert("RUNTIME ERROR: cannot find: "+strId);
}
if(!obj.focus)
{
return null;
}
return obj;
}
HxG_4.prototype.HxFocusChanger.prototype.findPeer=function(objElement, bNext)
{
var tdObj=this.getParentOfType(objElement, hX_4._TD);
var trObj=this.getParentOfType(objElement, hX_4._TR);
var objRowContainer=trObj.parentNode;
if((tdObj==null) || (trObj==null) || (objRowContainer==null))
{
return null;
}
var nIdx=this.getIndexInParent(trObj);
while(true)
{
if(bNext)
{
nIdx++;
}
else
 {
nIdx--;
}
var objSibling=this.getChildAtIndex(objRowContainer, nIdx);
if(objSibling==null)
{
return null;
}
if(!this.isVisible(objSibling))
{
continue;
}
var objTdPeer=this.findTdPeer(tdObj, objSibling);
if(objTdPeer==null)
{
continue;
}
var objLike=this.findLike(objElement, objTdPeer);
if(objLike!=null)
{
return objLike;
}
}
return null;
}
HxG_4.prototype.HxFocusChanger.prototype.findTdPeer=function(tdFindPeer, trIn)
{
var nIdx=this.getIndexInParent(tdFindPeer);
return this.getChildAtIndex(trIn, nIdx);
}
HxG_4.prototype.HxFocusChanger.prototype.findLike=function(objFindLike, objIn)
{
var nIdx=this.getIndexInParent(objFindLike);
var objPotentialPeer=this.getChildAtIndex(objIn, nIdx);
if(objPotentialPeer!=null)
{
if(this.isViableTarget(objPotentialPeer))
{
return objPotentialPeer;
}
}
var iterator=new  HxDomIterator(objIn);
while(iterator.hasNext())
{
var objNext=iterator.next();
if(this.isViableTarget(objNext))
{
return objNext;
}
}
return null;
}
HxG_4.prototype.HxFocusChanger.prototype.getChildAtIndex=function(objElement, nIdx)
{
if(nIdx<0)
{
return null;
}
if(objElement==null)
{
return null;
}
if(nIdx >= objElement.childNodes.length)
{
return null;
}
return objElement.childNodes[nIdx];
}
HxG_4.prototype.HxFocusChanger.prototype.getIndexInParent=function(objElement)
{
var objParent=objElement.parentNode;
for(var i=0; i<objParent.childNodes.length; i++)
{
if(objElement==objParent.childNodes[i])
{
return i;
}
}
return -1;
}
HxG_4.prototype.HxFocusChanger.prototype.getParentOfType=function(node, strType)
{
if((node == null) || (strType==null))
{
return null;
}
var parent=node.parentNode;
while(parent!=null)
{
if(parent.nodeName==strType)
{
return parent;
}
parent=parent.parentNode;
}
return null;
}
HxG_4.prototype.HxFocusChanger.prototype.isViableTarget=function(objElement)
{
return this.isFocusable(objElement) && this.isVisible(objElement);
}
HxG_4.prototype.HxFocusChanger.prototype.isFocusable=function(objElement)
{
if(objElement==null)
{
return false;
}
if(!objElement.focus)
{
return false;
}
var nodeName=objElement.nodeName;
if(nodeName == hX_4._INP)
return true;
if(nodeName == hX_4._BTN)
return true;
if(nodeName == hX_4._ANC)
return true;
return false;
}
HxG_4.prototype.HxFocusChanger.prototype.isVisible=function(objElement)
{
if(objElement.style)
{
if(objElement.style.visibility=="hidden")
{
return false;
}
if(objElement.style.display=="none")
{
return false;
}
}
var parent=objElement.parentNode;
if(parent==null)
{
return true;
}
return this.isVisible(parent);
}
HxG_4.prototype.HxDomIterator=function(element)
{
this.index=0;
this.root=this.findElement(element);
if(this.root==null)
{
return;
}
this.stack=new Array();
this.pushToStack(this.root);
}
HxG_4.prototype.HxDomIterator.prototype.pushToStack=function(obj)
{
this.stack[this.index++]=obj;
}
HxG_4.prototype.HxDomIterator.prototype.popFromStack=function()
{
return this.stack[this.index--];
}
HxG_4.prototype.HxDomIterator.prototype.findElement=function(element)
{
var ret=element;
if(typeof(element) == "string")
{
if(!hX_4.getElementById)
{
return null;
}
ret=hX_4.getElementById(element);
if(!ret)
{
alert("RUNTIMER ERROR: cannot find "+element);
}
}
return ret;
}
HxG_4.prototype.HxDomIterator.prototype.hasNext=function()
{
return (this.index>0);
}
HxG_4.prototype.HxDomIterator.prototype.next=function()
{
var obj=this.popFromStack();
if(obj==null)
{
return null;
}
if(obj.nextSibling)
{
this.pushToStack(obj.nextSibling);
}
if(obj.firstChild)
{
this.pushToStack(obj.firstChild);
}
return obj;
}
HxG_4.prototype.HxFocusAdder=function(strTableId, nPrev, nNext)
{
if(!hX_4.getElementById)
{
return;
}
var objTable=hX_4.getElementById(strTableId);
if(objTable==null)
{
return;
}
var i, iterator, element, arrElements=objTable.getElementsByTagName(hX_4._TD);
for(i=0; i<arrElements.length; i++)
{
iterator=new HxDomIterator(arrElements[i]);
while(iterator.hasNext())
{
element=iterator.next();
if(this.isFocusable(element))
{
new HxFocusChanger(element, nPrev, nNext);
}
}
}
}
HxG_4.prototype.HxFocusAdder.prototype.isFocusable=HxG_4.prototype.HxFocusChanger.prototype.isFocusable;
HxG_4.prototype.HxFocusAdder.prototype.UP=38;
HxG_4.prototype.HxFocusAdder.prototype.DOWN=40;
HxG_4.prototype.inputState=function (_obj, _behavior, _shortform) {
var obj=_obj, behavior=_behavior, value=obj.value, orgvalue=obj.value;
var pos=-1, sel=-1, orgpos=-1, autotab=0;
var keydown=false, keypress=false, updating=false, autosubmit=false, focus=false, checkedComponent=false;
var keypress_r=null, commitCallback=null, hasComponent=null, autotabtimer=null;
this.rollback=rollback;
this.commit=commit;
this.uirelease=uirelease;
this.setAutoTab=function setAutoTab(x)	{ autotab=x;			}
this.setAutoSubmit= function setAutoSubmit(){ autosubmit=true;	}
this.setCommitCallback= function setCommitCallback(x) { commitCallback=x; }
this.setValue=function setValue(c) 	{ value=c;			}
this.getValue=function getValue()		{ return value;			}
this.setPos=function setPos(c)		{ pos=c;				}
this.getPos=function getPos()		{ return pos;			}
this.hasSel=function hasSel()		{ return sel;			}
this.dispatch=dispatch;
this.dispatchTimer=dispatchTimer;
hX_4.attachInputStateEvent(obj, hX_4._onF);
hX_4.attachInputStateEvent(obj, hX_4._onB);
hX_4.attachInputStateEvent(obj, hX_4._onKD);
hX_4.attachInputStateEvent(obj, hX_4._onKP);
hX_4.attachInputStateEvent(obj, hX_4._onKU);
if (_shortform == null) {
hX_4.attachInputStateEvent(obj, hX_4._onMC);
if (hX_4.brw.isIE()) {
hX_4.attachInputStateEvent(obj, hX_4._onCP);
hX_4.attachInputStateEvent(obj, hX_4._onCT);
hX_4.attachInputStateEvent(obj, hX_4._onPST);
}
}
function saveState () {
value=obj.value;
pos=hX_4.sel.getCaretPos(obj);
sel=hX_4.sel.hasSelection(obj);
orgvalue= value;
orgpos=pos;
}
function dispatchTimer (item, action) {
autotabtimer=null;
if (focus && action == "autotab" && (autotab > 0)) doAutoTab();
}
function uirelease () {
keydown=keypress=false;
updating=true;
if (autotabtimer) {
hX_4.i.killTimerTimed(autotabtimer);
autotabtimer=null;
}
if (focus && behavior.assist && behavior.assist.onBlur) behavior.assist.onBlur(null);
focus=false;
hX_4.pendingPrompt=null;
}
function dispatch (evt) {
var r=true, newR;
if (hX_4.pendingFocusReturn && hX_4.pendingFocusReturn != obj.id)
return true;
hX_4.pendingFocusReturn=null;
if ((obj.readOnly != null && obj.readOnly == true) || (obj.disabled != null && obj.disabled == true))
return true;
switch (evt.type) {
case hX_4._evF:
focus=true;
hX_4.pendingPrompt=this;
keydown=keypress=false;
updating=true;
autotabtimer=null;
if (!checkedComponent) {
hasComponent=hX_4.getComponentById(obj.id);
checkedComponent=true;
}
if (behavior.assist && behavior.assist.onFocus) behavior.assist.onFocus(evt);
if (hX_4.pendingSelect && obj.select) obj.select();
hX_4.pendingSelect=false;
saveState();
if (behavior.assist && pos >= 0) obj.style.imeMode=hX_4._DSB;
break;
case hX_4._evB:
keydown=keypress=false;
updating=true;
if (autotabtimer) {
hX_4.i.killTimerTimed(autotabtimer);
autotabtimer=null;
}
if (focus && behavior.assist && behavior.assist.onBlur) behavior.assist.onBlur(evt);
focus=false;
hX_4.pendingPrompt=null;
break;
case hX_4._evKD:
if (!focus) break;
keydown=true;
keypress=updating=false;
saveState();
if (isSubmitFcnKey(evt) && behavior.assist) {
if (focus && behavior.assist && behavior.assist.onBlur) behavior.assist.onBlur(evt);
focus=false;
break;
} else if (hX_4.isFcnKey(evt) && behavior.assist) {
if (hasComponent && hasComponent.isRedirectFcnKey && hasComponent.isRedirectFcnKey(evt)) {
var newValue=(behavior.assist.fromAssist) ? behavior.assist.fromAssist(value) : obj.value;
newValue=(hasComponent.doRedirectFcnKey) ? hasComponent.doRedirectFcnKey(evt, newValue) : newValue;
newValue=(behavior.assist.toAssist) ? behavior.assist.toAssist(newValue) : newValue;
value=(newValue.v) ? newValue.v : value;
commit(evt);
if (pos >= 0) hX_4.sel.setCaretPos(obj, pos);
r=false;
} else if (behavior.assist.onChangeKeyCode && !isSkipFcnKey(evt)) {
r=behavior.assist.onChangeKeyCode(evt);
if (r == -1) r=true;
else if (r) {
newR=doChange(evt);
r=(r == -2) ? false : newR;
}
if (!r) hX_4.i.cancelAction(evt, true);
}
keypress=true;
keypress_r=r;
}
break;
case hX_4._evKP:
if (!focus) break;
updating=false;
if (hX_4.brw.isNavOrMoz() && evt.keyCode && evt.keyCode == 191 && evt.charCode!=null && evt.charCode==0)
return false;
if (keypress)
r=keypress_r;
else {
keypress=true;
if (behavior.assist && behavior.assist.onChangeChrCode) {
r=behavior.assist.onChangeChrCode(evt);
newR=false;
if (r > 1) {
r=true;
newR=true;
} else if (r) {
newR=doChange(evt);
r=(r == -2) ? false : newR;
}
if (newR && (autotab > 0)) doAutoTab();
} else if (autotab > 0) autotabtimer=hX_4.i.startTimerTimed (obj.id, 0, "autotab", 1, hX_4.BHR_assist);
}
break;
case hX_4._evKU:
if (!focus) break;
updating=false;
if (behavior.assist && behavior.assist.onChangeKeyCode && (keydown && !keypress)) {
if (hX_4.brw.isIE() && evt.keyCode == 67)
r=false;
else {
r=behavior.assist.onChangeKeyCode(evt);
if (r) {
newR=doChange(evt);
r=(r == -2) ? false : newR;
}
}
}
keydown=keypress=false;
break;
case hX_4._evMC:
if (!focus) break;
keydown=keypress=updating=false;
saveState();
if (!sel) {
if (behavior.assist && behavior.assist.onClick) {
r=behavior.assist.onClick(evt);
if (r == -2 && pos >= 0) {
hX_4.sel.setCaretPos(obj, pos);
r=false;
}
}
}
break;
case hX_4._evCT:
if (!focus) break;
keydown=keypress=updating=false;
saveState();
if (sel) {
if (behavior.assist && behavior.assist.onCut) {
r=behavior.assist.onCut(evt);
if (r == -1) r=true;
else if (r) {
r=doChange(evt);
r=(r == -2) ? false : r;
}
}
}
break;
case hX_4._evCP:
if (focus && sel && behavior.assist && behavior.assist.onCopy) behavior.assist.onCopy(evt);
break;
case hX_4._evPST:
if (!focus) break;
keydown=keypress=updating=false;
saveState();
if (behavior.assist && behavior.assist.onPaste) {
newR=false;
r=behavior.assist.onPaste(evt);
if (r) {
newR=doChange(evt);
r=(r == -2) ? false : newR;
}
var didTab=false;
if (newR && (autotab > 0)) didTab=doAutoTab();
if (hX_4.brw.isIE() && newR && !didTab && pos >= 0) hX_4.sel.setCaretPos(obj, pos, null, true);
}
break;
}
return r;
}
function doChange(evt) {
var r=true;
if (behavior.assist && behavior.assist.onValidate) r=behavior.assist.onValidate(evt);
if (r) commit(evt);
else rollback(evt);
return r;
}
function rollback (evt) {
value=orgvalue;
pos=orgpos;
update(evt);
}
function commit (evt) {
if (commitCallback) commitCallback(obj);
update (evt);
}
function update (evt) {
if (!updating) {
updating=true;
if (obj.value != value) obj.value=value;
if (pos >= 0) hX_4.sel.setCaretPos(obj, pos);
updating=false;
}
}
function doAutoTab() {
if (isFilled(hX_4.sel.getCaretPos(obj))) {
if (autosubmit) {
var a=[], t=[];
a.push(hX_4.ACT_SUBMIT);
t.push((behavior.autoSubmit.length > 0) ? behavior.autoSubmit : obj.form.id);
return (hX_4.action.processAction (obj, null, null, a, true, t, null, null, null, true));
} else
 hX_4.gotoNextPrev(obj, true, true);
return true;
}
return false;
}
function isFilled(curpos) {
return ((behavior && behavior.assist && behavior.assist.isFilled)?behavior.assist.isFilled(curpos):(obj.value.length >= autotab && (curpos >= autotab)));
}
function isSubmitFcnKey (evt) {
var code=(evt.keyCode && (evt.keyCode != 0)) ? evt.keyCode : -1;
if (code == 13)	if (!hX_4.isKeyBound(obj, "13", evt, hX_4.ACT_SUBMIT)) return true;
return false;
}
function isSkipFcnKey (evt) {
var code=(evt.keyCode && (evt.keyCode != 0)) ? evt.keyCode : -1;
if (code == 16 || code == 17 || code == 18 ||
code == 145 || code == 166 || code == 167)
return true;
return false;
}
}
HxG_4.prototype.HTTPBackchannel=function(id, callback, post, async, iframename, onerror) {
this._Id=id;
this._Ack=0;
this._AppCallback=(typeof callback == 'function')? callback : HxG_4.getElementById(callback);
if (onerror) {
this._Onerror=(typeof onerror == 'function')? onerror : HxG_4.getElementById(onerror);
} else {
this._Onerror=this.defaultOnError;
}
this._Post=(post == true) ? true : false;
this._Async=(async == true) ? true : false;
this._Iframe=null;
if (null != iframename) {
this.createIFrame(iframename);
}
this._XmlHttp=null;
this._UseXmlHttp=(this._Iframe == null) ? true : false;
this._AllowCrossDomain=false;
this._Username=null;
this._Password=null;
this._SoapRequest=null;
this._SoapAction=null;
this._extraParam=null;
}
HxG_4.prototype.HTTPBackchannel.prototype.Load=function(Url, param) {
this._extraParam=param;
if (this._UseXmlHttp) {
if (this._XmlHttp) {
if (this._XmlHttp.readyState != 0 && this._XmlHttp.readyState != 4)  {
this._XmlHttp.abort();
}
}  else {
if (window.XMLHttpRequest) {
try {
if (this._AllowCrossDomain && netscape &&
netscape.security.PrivilegeManager.enablePrivilege) {
try {
netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
} catch (e) {};
}
this._XmlHttp=new XMLHttpRequest();
} catch(e) {
var txt=(e.message == undefined) ? e : e.message;
eval(this._WINDOW+this._Onerror+"("+txt+")");
this._XmlHttp=null;
}
} else if (window.ActiveXObject) {
try {
this._XmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
} catch(e) {
try {
this._XmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
} catch(e) {
this._XmlHttp=null;
}
}
}
if (this._Async) {
var localThis=this;
this._XmlHttp.onreadystatechange=function() {
localThis.Callback();
}
}
}
try {
this._XmlHttp.open((this._Post ? "POST" : "GET"), Url, this._Async,
this._Username, this._Username ? this._Password : null);
if (this._SoapAction) {
var reqString=this._SoapRequest.join("");
this._XmlHttp.setRequestHeader("SOAPAction", this._SoapAction);
this._XmlHttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
this._XmlHttp.send(reqString);
} else {
this._XmlHttp.send("");
}
if (this._Async == false) {
this.Callback();
}
} catch (e) {
var txt=(e.message == undefined) ? e : e.message;
this._Onerror(txt);
}
} else if (this._Iframe) {
if (this._Post) {
this.PostIframe(Url);
} else {
this.GetIframe(Url);
}
}
}
HxG_4.prototype.HTTPBackchannel.prototype.LoadFromForm=function(FormName, Url) {
myForm=document.forms[FormName];
var urlBase=Url.split('?');
var myUrl=(urlBase.length > 0) ? "?" + urlBase[1] : "";
for (var iX=0; iX<myForm.elements.length; iX++) {
if (myForm.elements[iX].name!="") {
myUrl+=((myUrl == "") ? "?" : "&") + myForm.elements[iX].name
 + "=" + escape(myForm.elements[iX].value);
}
}
this.Load(urlBase[0] + myUrl);
}
HxG_4.prototype.HTTPBackchannel.prototype.setCallback=function(callback) {
this._AppCallback=callback;
}
HxG_4.prototype.HTTPBackchannel.prototype.setPost=function(post) {
this._Post=(post == true) ? true : false;
}
HxG_4.prototype.HTTPBackchannel.prototype.setOnerror=function(onerror) {
this._Onerror=onerror ? onerror : defaultOnError;
}
HxG_4.prototype.HTTPBackchannel.prototype.getXmlHttpRequest=function() {
return this._XmlHttp;
}
HxG_4.prototype.HTTPBackchannel.prototype.setUser=function(user, pwd) {
this._Username=user;
this._Password=pwd;
}
HxG_4.prototype.HTTPBackchannel.prototype.setSoapInfo=function() {
var foo=arguments;
if (arguments.length < 1) {
this._SoapRequest=null;
this._SoapAction=null;
} else {
var nArgs=arguments.length;
if (nArgs % 2 > 0)
nArgs--;
this._SoapAction=arguments[0] + "/" + arguments[1];
var params=" xmlns=\"" + arguments[0] + "\">";
for (var iX=2; iX<nArgs; iX+=2) {
params+=HxG_4._LT + arguments[iX] + HxG_4._GT
 + arguments[iX+1].toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+ this._TAGEND + arguments[iX] + HxG_4._GT;
}
this._SoapRequest=[this._SOAPSTART, arguments[1], params, this._TAGEND, arguments[1], this._SOAPEND];
this.setPost(true);
}
}
HxG_4.prototype.HTTPBackchannel.prototype.enableCrossDomain=function(allow) {
this._AllowCrossDomain=(allow == true) ? true : false;
}
HxG_4.prototype.HTTPBackchannel.prototype.PostIframe=function(Url) {
var myFrameDoc=null;
if (this._Iframe.contentDocument != undefined) {
myFrameDoc=this._Iframe.contentDocument;
} else if (this._Iframe.contentWindow != null) {
myFrameDoc=this._Iframe.contentWindow.document;
} else {
myFrameDoc=this._Iframe.document;
}
var ifrmForm=myFrameDoc.forms[0];
if (myFrameDoc && ifrmForm) {
var kidcnt=ifrmForm.childNodes.length;
for (var iX=kidcnt-1; iX >= 0; iX--) {
ifrmForm.removeChild(ifrmForm.childNodes[iX]);
}
var urlBase=Url.split('?');
ifrmForm.action=urlBase[0];
var fldNode=null;
if (urlBase.length > 1) {
var nvPair=null;
var urlParams=urlBase[1].split('&');
for (iX=0; iX < urlParams.length; iX++) {
nvPair=urlParams[iX].split("=");
fldNode=myFrameDoc.createElement(HxG_4._INP);
fldNode.name=nvPair[0];
if (nvPair.length > 1) {
fldNode.value=nvPair[1];
}
ifrmForm.appendChild(fldNode);
}
}
fldNode=myFrameDoc.createElement(HxG_4._INP);
fldNode.name="callback";
fldNode.value=this._Id+".Callback";
ifrmForm.appendChild(fldNode);
this._Ack=0;
setTimeout(this._Id+".CheckFrame(1);", this._TIMEOUT);
try {
ifrmForm.submit();
} catch (e) {
alert("ERROR callback URL: "+ ((e.message == undefined) ? e : e.message));
}
}
}
HxG_4.prototype.HTTPBackchannel.prototype.GetIframe=function(Url) {
this._Ack=0;
setTimeout(this._Id+".CheckFrame(1);", this._TIMEOUT);
var urlBase=Url.split('?');
Url+=((urlBase.length == 1) ? "?" : "&") + "callback=" + this._Id + ".Callback";
try {
this._Iframe.src=Url;
} catch (e) {
alert("ERROR callback URL: "+ ((e.message == undefined) ? e : e.message));
}
}
HxG_4.prototype.HTTPBackchannel.prototype.CheckFrame=function(v) {
if (this._Ack == 0) {
if (v < 3) {
setTimeout(Id+".CheckFrame("+(v+1)+");", 1000);
}
}
}
HxG_4.prototype.HTTPBackchannel.prototype.Callback=function(Success, Data) {
if (this && this._XmlHttp) {
if (this._XmlHttp.readyState == 4 &&
(this._XmlHttp.status == 200 || this._XmlHttp.status == 0)) {
if (this._AllowCrossDomain && netscape &&
netscape.security.PrivilegeManager.enablePrivilege) {
try {
netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
} catch (e) {};
}
try {
this._AppCallback.call(this,this._XmlHttp.responseXML, this._XmlHttp.responseText, this._extraParam);
} catch (e) {
var txt=(e.message == undefined) ? e : e.message;
this._Onerror(txt);
}
} else if (this._XmlHttp.status != 0)  {
this._Onerror(this._XmlHttp.statusText);
}
} else {
this._Ack=1;
if (Success == 0) {
this._Onerror(Data);
} else {
try {
eval(this._WINDOW+this._AppCallback+"(Data);");
} catch (e) {
var txt=(e.message == undefined) ? e : e.message;
this._Onerror(txt);
}
}
window.history.back();
}
}
HxG_4.prototype.HTTPBackchannel.prototype.defaultOnError=function(msg) {
alert(msg);
}
HxG_4.prototype.createIFrame=function(id) {
if (null != id && document.createElement) {
var ifrmTxt="iframe";
if (window.ActiveXObject) {
ifrmTxt="<iframe name=\"" + id + "\"></iframe>";
}
var myIFrame=document.createElement(iframeTxt);
myIFrame.setAttribute('id', id);
if (!window.ActiveXObject) {
myIFrame.setAttribute('name','RSIFrame');
}
myIFrame.style.width='0px';
myIFrame.style.height='0px';
myIFrame.style.border='0px';
this._Iframe=document.body.appendChild(myIFrame);
if (document.frames) {
this._Iframe=document.frames[id];
}
}
}
HxG_4.prototype.HTTPBackchannel.prototype._TIMEOUT=1000;
HxG_4.prototype.HTTPBackchannel.prototype._SUBMIT="submit";
HxG_4.prototype.HTTPBackchannel.prototype._IFR="iframe";
HxG_4.prototype.HTTPBackchannel.prototype._WINDOW="window.";
HxG_4.prototype.HTTPBackchannel.prototype._TAGEND="</";
HxG_4.prototype.HTTPBackchannel.prototype._SOAPSTART="<soap:Envelope \
xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' \
xmlns:xsd='http://www.w3.org/2001/XMLSchema' \
xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'> \
<soap:Body><";
HxG_4.prototype.HTTPBackchannel.prototype._SOAPEND="></soap:Body></soap:Envelope>";
HxG_4.prototype.JSFProgressBar=function() {
this.type="progressbar";
this.table=null;
this._table="_TABLE";
this.defaultmessage="";
this.title="";
this.percentageDone=0;
this.defaultpercent=5;
this.normal=false;
this.outward=false;
this.bar_div=null;
this.percentTextDiv=null;
this.percentText=null;
this.title_holder=null;
this.message_holder=null;
this.CSSPrefix=null;
this.baseClass=hX_4._E;
this.classes=null;
this.CL_DIV=0;
this.CL_TA=1;
this.CL_T=2;
this.CL_M=3;
this.CL_B=4;
this.CL_BC=5;
this.CL_BT=6;
this.CL_SZ=7;
this.run=false;
this.itu=1;
this.firsttime= true;
this.td=null;
this.td1=null;
this.td2=null;
this.attributeTable=new Array();
this.attributeTable	['css-prefix']=['CSSPrefix',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['itu']=['itu', hX_4.ARG_TO_NUM, false, 0, 100000];
this.attributeTable	['defaultmessage']=['defaultmessage',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['title']=['title',		hX_4.ARG_TO_NAN,	false,	null,	null];
this.attributeTable	['normal']=['normal',		hX_4.ARG_IS_TRUE,	false,	null,	null];
this.attributeTable	['defaultpercent']=['defaultpercent',		hX_4.ARG_TO_NUM,	false,	0,	100];
this.attributeTable	['outward']=['outward',		hX_4.ARG_IS_TRUE,	false,	null,	null];
this.setAttribute(arguments);
this.saveArgs=arguments;
}
HxG_4.prototype.JSFProgressBar.prototype.onPageLoad=function(){
if(this.normal)
this.run=true;
this.setupStyle();
this.DOMobj.className=this.classes[this.CL_DIV];
this.createTable();
this.redraw();
}
HxG_4.prototype.JSFProgressBar.prototype.setAttribute=function(a) {
hX_4.parseArg (this.attributeTable, this, a);
}
HxG_4.prototype.JSFProgressBar.prototype.getAttribute=function (attribute) {
return (hX_4.getArg(this.attributeTable, this, attribute));
}
HxG_4.prototype.JSFProgressBar.prototype.setupStyle=function(){
if (!this.DOMobj) return;
var i, test=(this.CSSPrefix != null && this.CSSPrefix.length>0) ? this.CSSPrefix : hX_4.CLASS_PB;
if (test != this.baseClass) {
this.baseClass=test;
this.classes=new Array();
for (i=0; i <= this.CL_SZ; i++)
this.classes.push(this.baseClass + hX_4.CLASS_PBS[i]);
}
}
HxG_4.prototype.JSFProgressBar.prototype.createTable=function(){
if (!this.HTMLrendered && this.DOMobj) {
this.table=document.createElement("table");
this.DOMobj.appendChild(this.table);
this.table.id=this.id + this._table;
this.table.width="100%";
this.table.height="100%";
this.table.className=this.classes[this.CL_TA];
this.table.appendChild(document.createElement("tbody"));
var row1=document.createElement("tr");
this.table.tBodies[0].appendChild(row1);
var td=document.createElement("td");
row1.appendChild(td);
this.title_holder=document.createTextNode("");
td.appendChild(this.title_holder);
this.title_holder.nodeValue=this.title;
td.className=this.classes[this.CL_T];
var row2=document.createElement("tr");
this.table.tBodies[0].appendChild(row2);
var td2=document.createElement("td");
row2.appendChild(td2);
this.message_holder=document.createTextNode("");
td2.appendChild(this.message_holder);
this.message_holder.nodeValue=this.defaultmessage;
td2.className=this.classes[this.CL_M];
var row3=document.createElement("tr");
this.table.tBodies[0].appendChild(row3);
var td3=document.createElement("td");
row3.appendChild(td3);
if(this.normal && this.outward)
{
td3.align="center";
td3.valign="middle";
}
td3.style.width="95%";
td3.className=this.classes[this.CL_BC];
this.createBar(td3);
var row4=document.createElement("tr");
this.table.tBodies[0].appendChild(row4);
var td4=document.createElement("td");
row4.appendChild(td4);
if(!this.normal)
{
this.percentTextDiv=document.createElement("div");
td3.appendChild(this.percentTextDiv);
var s=document.createElement("span");
this.percentTextDiv.appendChild(s);
this.percentText=document.createTextNode("");
s.appendChild(this.percentText);
this.percentTextDiv.className=this.classes[this.CL_BT];
}
this.HTMLrendered=true;
}
}
HxG_4.prototype.JSFProgressBar.prototype.visible=function(){
this.DOMobj.style.visibility="visible";
}
HxG_4.prototype.JSFProgressBar.prototype.hide=function(){
this.DOMobj.style.visibility="hidden";
}
HxG_4.prototype.JSFProgressBar.prototype.setStatus=function(mess){
if(this.isVisible())
if(mess != null)
this.message_holder.nodeValue=mess;
else
 this.message_holder.nodeValue="";
}
HxG_4.prototype.JSFProgressBar.prototype.createBar=function(dom_elem_bar_container){
this.bar_div=document.createElement("div");
dom_elem_bar_container.appendChild(this.bar_div);
this.bar_div.className=this.classes[this.CL_B];
this.bar_div.style.width="0px";
}
HxG_4.prototype.JSFProgressBar.prototype.start=function(message){
this.setStatus(message);
if(this.normal)
hX_4.i.startTimerTimed (this.id, "bar", "update", this.itu);
this.redraw();
}
HxG_4.prototype.JSFProgressBar.prototype.stop=function(message){
this.setStatus(message);
this.run=false
 this.redraw();
}
HxG_4.prototype.JSFProgressBar.prototype.reset=function(){
if(this.normal)
this.run=true;
this.firsttime=true;
this.percentageDone=0;
}
HxG_4.prototype.JSFProgressBar.prototype.redraw=function(){
if(this.isVisible())
{
this.bar_div.style.width=this.percentageDone+"%";
if(!this.normal)
{
this.percentTextDiv.style.position ="absolute";
this.percentTextDiv.zIndex= 20;
this.percentTextDiv.style.top=this.getY(this.bar_div);
this.percentTextDiv.style.left=eval(this.getX(this.bar_div)) + (eval(this.DOMobj.offsetWidth) / 2);
this.percentTextDiv.align="center";
this.percentTextDiv.valign="middle";
this.percentText.nodeValue=this.percentageDone+" %";
}
}
}
HxG_4.prototype.JSFProgressBar.prototype.isVisible=function(){
return ((this.DOMobj != null) && (this.DOMobj.style.visibility == "visible"));
}
HxG_4.prototype.JSFProgressBar.prototype.upDateMessage=function(message){
this.setStatus(message);
}
HxG_4.prototype.JSFProgressBar.prototype.upDate=function(){
this.setPercentageValue();
this.redraw();
}
HxG_4.prototype.JSFProgressBar.prototype.upDatePercentage=function(percent){
if(!this.normal)
{
var p=0;
if(percent != null && percent != 'undefined')
p=eval(percent);
if(p < 0)
percent=0;
if(p > 100)
percent=100;
this.setPercentageValue(p);
return true;
}
else
 return false;
}
HxG_4.prototype.JSFProgressBar.prototype.setPercentageValue=function(percentage){
if(this.normal)
{
if(this.percentageDone >= 100)
this.percentageDone=0;
this.percentageDone=this.percentageDone + this.defaultpercent;
}
else
 {
this.percentageDone=percentage;
if(this.percentageDone >= 100)
this.percentageDone=100;
}
}
HxG_4.prototype.JSFProgressBar.prototype.dispatchTimer=function (item, action) {
if (item == "bar" && this.run) {
if (action == "update")
{
this.upDate();
hX_4.i.startTimerTimed (this.id, "bar", "update", this.itu);
}
}
}
HxG_4.prototype.JSFProgressBar.prototype.getX=function(obj) {
var curleft=0;
if (obj.offsetParent) {
while (obj.offsetParent) {
curleft+=obj.offsetLeft
 obj=obj.offsetParent;
}
}
else if (obj.x)
curleft+=obj.x;
return curleft;
}
HxG_4.prototype.JSFProgressBar.prototype.getY=function(obj) {
var curtop=0;
if (obj.offsetParent)
{
while (obj.offsetParent)
{
curtop+=obj.offsetTop
 obj=obj.offsetParent;
}
}
else if (obj.y)
curtop+=obj.y;
return curtop;
}
