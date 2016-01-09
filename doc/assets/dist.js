(function(){

	'use strict'

	function init(){
		var codeBlocks = document.querySelectorAll('code');
		for (var i = 0; i < codeBlocks.length; i++)
			codeBlocks[i].innerHTML = replaceHTMLSpecialChars(codeBlocks[i].innerHTML).trim();
	}

	function replaceHTMLSpecialChars(text){
		return text.replace(/\</g,'&lt;').replace(/\>/g,'&gt;');
	}

	init();
	
})();

(function(){

  'use strict'

  var langSelectors = document.querySelectorAll('.cp-menu-lang li');
  var path = window.location.pathname;

  function init(){
    setTriggers();
    identifyLang();
  }

  function setTriggers(){
    for (var i = 0; i < langSelectors.length; i++)
      langSelectors[i].onclick = changeLang;
  }

  function changeLang(evt){
    var lang = evt.currentTarget.getAttribute('data-lang');
    if(!isLangAlreadySetted(lang))
      window.location.pathname = path.replace(/doc\/\w{2}-\w{2}\//g,'doc/' + lang);
  }

  function isLangAlreadySetted(lang){
    return window.location.pathname.indexOf(lang) > -1;
  }

  function identifyLang(){
    for (var i = 0; i < langSelectors.length; i++)
      if(path.indexOf(langSelectors[i].getAttribute('data-lang')) > -1)
        langSelectors[i].setAttribute('class', 'is-active');
  }

  init();
  
})();

var WebFontConfig = {
  google: { families: [ 'Source+Sans+Pro:400,300:latin' ] }
};

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
