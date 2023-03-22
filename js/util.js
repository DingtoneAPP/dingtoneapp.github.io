
//DingtoneUrl = "http://dingtone.me";
DingtoneUrl = "";

var faqPage = "faq.html";
var tosPage = "Terms_of_Service.html";
var ppPage = "privacy_policy.html";
var pushPage = "push.html";
var mdPage = "md.html";
var supportPage = "support.html";

var sources = [
               "default",
               "forum",
               "blog",
               "video",
               "pr",
               "review",
               "appstore2",
               "twitter",
               "facebook",
               "others"
               ];
               
var source_urls = [
    "http://c.appsdt.com/click/phoenix/40edb5c3-d2ed-462c-80f7-7c692e5e97c9", //default
    "http://c.appsdt.com/click/phoenix/9ab41a0c4b3b40015ea333de2c2e076720667308", //forum
    "http://c.appsdt.com/click/phoenix/100c7f63a597a9c49e2d45a95b8336c622152462", //blog
    "http://c.appsdt.com/click/phoenix/190f72a3c96565a9aedbb51d6138a01594269480", //video
    "http://c.appsdt.com/click/phoenix/cf9ae8d0b7ed8e5ad10b5076a43ad50f78205537", //pr
    "http://c.appsdt.com/click/phoenix/d5b8692ed0b96c2f9209a0f9401c5bb274942204", //review
    "http://c.appsdt.com/click/phoenix/5b3328f4f06bb8b446dc7b0cb8e49f6927260130", //appstore2
    "http://c.appsdt.com/click/phoenix/3835b94d20413f1adc818f3e0c2782f547669520", //twitter
    "http://c.appsdt.com/click/phoenix/550a4106e38fb5632147ea708ac12ca040226297", //facebook
    "http://c.appsdt.com/click/phoenix/84ab71a78a9f3850a28b356a886a4ac165982076" //others
    ];
	

function jump2appstore(isMobile) {
	var client = new Client(); 
	if(!client.isSupportedVerOfiOSAdHoc()) {
		window.location.href = "itms-services://?action=download-manifest&url=http://dingtone.me/di/DingtoneBeta.plist";
		return;
	}
	
	if(isMobile == null) {
		isMobile = false;
	}
	
	var s = getURLParam('s');
	if(s == null || s == '') {
		//s = sources[0]; //s is empty using default
		if(client.isiPadClient(navigator.userAgent)) {
			window.location.href = "https://itunes.apple.com/app/apple-store/id588937297?mt=8";
		}else if(client.isIOSClient(navigator.userAgent)) {
			window.location.href = "https://itunes.apple.com/us/app/id588937297?mt=8?pid=Website";
		}else {
			window.location.href = "http://c.appsdt.com/click/phoenix/40edb5c3-d2ed-462c-80f7-7c692e5e97c9";
		}
		return ;
	}

	var sIndex = sources.length - 1; //initial as 'others'
	for(var i = 0; i < sources.length; i++) {
		if(sources[i] == s) {
			sIndex = i; //set as matched source
			break;
		}
	}

	window.location.href = source_urls[sIndex];	
}

function androidDownload(localApk) {
	if(localApk == null) {
		localApk = false;
	}
	if(localApk) {
		
	}else {
		window.location.href = "https://play.google.com/store/apps/details?id=me.dingtone.app.im";
	}
}

function androidDownloadWitchLink(localApk,link) {
    if(localApk == null) {
        localApk = false;
    }
    if(localApk) {
        
    }else {
        window.location.href = link;
    }
}

function goDownloadPage() {
	window.location.href = "./download.html" + document.location.search;
}

function goHomePage() {
	window.location.href = "/";
}

function getURLParam(strParamName) {
	return getURLParam(strParamName, true);
}

function getURLParam(strParamName, caseInsensitive) {
    var strReturn = '';
    var strHref = window.location.href;
    if (strHref.indexOf("?") > -1){
        var strQueryString = strHref.substr(strHref.indexOf("?"));
        if(caseInsensitive) {
        	strQueryString = strQueryString.toLowerCase();
        	strParamName = strParamName.toLowerCase();
        }
        var aQueryString = strQueryString.split("&");
        for (var iParam = 0; iParam < aQueryString.length; iParam++) {
            if (aQueryString[iParam].indexOf(strParamName + "=") > -1) {
                var aParam = aQueryString[iParam].split("=");
                strReturn = aParam[1];
                break;
            }
        }
    }
    return unescape(strReturn);
}


//set cookies
function setCookie(name, value, timeInSeconds){
	if(timeInSeconds == null) {
		timeInSeconds = 24 * 60 * 60;
	}
	
	var exp = new Date(); 
	exp.setTime(exp.getTime() + timeInSeconds * 1000);
	document.cookie = name + "=" + escape (value) + ";expires=" + exp.toGMTString();
}
//get cookies
function getCookie(name){
	var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg)) 
		return unescape(arr[2]);
	else return null;
}
//delete cookies
function delCookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if(cval != null) 
		document.cookie = name + "=" + escape (value) + ";expires=" + exp.toGMTString();
}
function delayGotoMobileMain() {
    console.log("delayGotoMobileMain");
    setTimeout(function() {
        goGoMobileMain();
    }, 2000);
}
function goGoMobileMain() {
    var client = new Client();
    var isChinese = client.isChineseClient();
    var isES = client.isES();
    var isFR = client.isFR();
    var isPT = client.isPT();
    var isTR = client.isTR();

    if (isChinese) {
        window.location.href= "/mcn/index.html";
    } else if (isES) {
        window.location.href= "/mes/index.html";
    } else if (isFR) {
        window.location.href= "/mfr/index.html";
    } else if (isPT) {
        window.location.href= "/mpt/index.html";
    } else if (isTR) {
        window.location.href= "/mtr/index.html";
    }else  {
        window.location.href= "/men/index.html";
    }

}
function Client() { }
        Client.prototype.mobileClients = [
            "midp",
            "240x320",
            "blackberry",
            "netfront",
            "nokia",
            "panasonic",
            "portalmmm",
            "sharp",
            "sie-",
            "sonyericsson",
            "symbian",
            "windows ce",
            "windows phone",
            "benq",
            "mda",
            "mot-",
            "opera mini",
            "philips",
            "pocket pc",
            "sagem",
            "samsung",
            "sda",
            "sgh-",
            "vodafone",
            "xda",
            "iphone",
            "android",
            //"ipad",
            "ipod"
        ];
        Client.prototype.IOSClients = [
            "iphone",
            "ipad",
            "ipod"
        ];
        Client.prototype.MessengerClients = [
            "messengerforios"
        ];
        Client.prototype.AndroidClients = [
            "android"
        ];
        
        Client.prototype.SymbianClients = [
            "symbian"
        ];
        
        Client.prototype.BBClients = [
            "blackberry"
        ];
        
        Client.prototype.WPClients = [
            "windows phone"
        ];
        
        Client.prototype.WeChatClients = [
            "micromessenger"
        ];
        
        Client.prototype.QQClients = [
            "qq"
        ];

        Client.prototype.isSupportedVerOfiOSAdHoc = function() {
        	if (/iP(hone|od|ad)/.test(navigator.platform)) {
        	    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        	    var ver =[parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        	    return ver[0] >= 6;
        	}
        	  
        	return true;
        }
        
        
        Client.prototype.isWeChatClient = function(userAgent) {
            userAgent = userAgent.toLowerCase();
            for (var i in this.WeChatClients) {
                if (userAgent.indexOf(this.WeChatClients[i]) != -1) {
                    return true;
                }
            }
            return false;
        }

        Client.prototype.isMessengerClient = function(userAgent) {
            userAgent = userAgent.toLowerCase();
            for (var i in this.MessengerClients) {
                if (userAgent.indexOf(this.MessengerClients[i]) != -1) {
                    return true;
                }
            }
            return false;
        }
        Client.prototype.isQQClient = function(userAgent) {
            userAgent = userAgent.toLowerCase();
            userAgent = userAgent.replace('mqq','1');
            for (var i in this.QQClients) {
                if (userAgent.indexOf(this.QQClients[i]) != -1) {
                    return true;
                }
            }
            return false;
        }
        Client.prototype.isMobileClient = function(userAgent) {
            userAgent = userAgent.toLowerCase();
            for (var i in this.mobileClients) {
                if (userAgent.indexOf(this.mobileClients[i]) != -1) {
                    return true;
                }
            }
            return false;
        }
        
        Client.prototype.isIOSClient = function(userAgent) {
            userAgent = userAgent.toLowerCase();
            for (var i in this.IOSClients) {
                if (userAgent.indexOf(this.IOSClients[i]) != -1) {
                    return true;
                }
            }
            return false;
        }
        
        Client.prototype.isiPadClient = function(userAgent) {
            userAgent = userAgent.toLowerCase();
            if (userAgent.indexOf("ipad") != -1) {
                return true;
            }
            return false;
        }
        
        Client.prototype.isAndroidClient = function(userAgent) {
            userAgent = userAgent.toLowerCase();
            for (var i in this.AndroidClients) {
                if (userAgent.indexOf(this.AndroidClients[i]) != -1) {
                    return true;
                }
            }
            return false;
        }
        
        Client.prototype.isSymbianClient = function(userAgent) {
            userAgent = userAgent.toLowerCase();
            for (var i in this.SymbianClients) {
                if (userAgent.indexOf(this.SymbianClients[i]) != -1) {
                    return true;
                }
            }
            return false;
        }
        
        Client.prototype.isBBClient = function(userAgent) {
            userAgent = userAgent.toLowerCase();
            for (var i in this.BBClients) {
                if (userAgent.indexOf(this.BBClients[i]) != -1) {
                    return true;
                }
            }
            return false;
        }
        
        Client.prototype.isWPClient = function(userAgent) {
            userAgent = userAgent.toLowerCase();
            for (var i in this.WPClients) {
                if (userAgent.indexOf(this.WPClients[i]) != -1) {
                    return true;
                }
            }
            return false;
        }
        
        
        Client.prototype.isChineseClient = function() {
            var lang = navigator.language || navigator.userLanguage;

            if (lang != null && lang.indexOf('zh-') > -1) {
                return true;
            } else {
                if(Client.prototype.isAndroidClient(navigator.userAgent) && navigator.userAgent != null && navigator.userAgent.indexOf('zh-') > -1) {
                    return true;
                }
                return false;
            }
        }
        
        Client.prototype.isES = function() {
            var lang = navigator.language || navigator.userLanguage;

            if (lang != null && lang.indexOf('es') > -1) {
                return true;
            } else {
                if(Client.prototype.isAndroidClient(navigator.userAgent) && navigator.userAgent != null && navigator.userAgent.indexOf('es') > -1) {
                    return true;
                }
                return false;
            }
        }
        
        Client.prototype.isPT = function() {
            var lang = navigator.language || navigator.userLanguage;

            if (lang != null && lang.indexOf('pt') > -1) {
                return true;
            } else {
                if(Client.prototype.isAndroidClient(navigator.userAgent) && navigator.userAgent != null && navigator.userAgent.indexOf('pt') > -1) {
                    return true;
                }
                return false;
            }
        }

        Client.prototype.isTR = function() {
            var lang = navigator.language || navigator.userLanguage;

            if (lang != null && lang.indexOf('tr') > -1) {
                return true;
            } else {
                if(Client.prototype.isAndroidClient(navigator.userAgent) && navigator.userAgent != null && navigator.userAgent.indexOf('tr') > -1) {
                    return true;
                }
                return false;
            }
        }
        
          Client.prototype.isFR = function() {
            var lang = navigator.language || navigator.userLanguage;

            if (lang != null && lang.indexOf('fr') > -1) {
                return true;
            } else {
                if(Client.prototype.isAndroidClient(navigator.userAgent) && navigator.userAgent != null && navigator.userAgent.indexOf('fr') > -1) {
                    return true;
                }
                return false;
            }
        }  
    