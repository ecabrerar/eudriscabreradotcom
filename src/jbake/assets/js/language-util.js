window.addEventListener('load', function() {

   var ln = window.navigator.language||navigator.browserLanguage||navigator.userLanguage;

    console.log("The language is: " + ln);

    var myApp = {}

    /**
     * Gets cookie value by name
     * @param  {string} name Name of cookie to retrieve
     * @return {string}      Value of cookie if found
     */
    myApp.ReadCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    };

    /**
    * Removes cookie value
    * @param  {string} name Name of cookie
    */
    myApp.EraseCookie = function(name) {
        if ( myApp.ReadCookie(name) )
        document.cookie = name+'=';
        console.log(name+' erased.');
    };

    /**
    * Deletes cookie reference
    * @param  {string} name Name of cookie
    */
    myApp.DeleteCookie = function(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        console.log(name+' deleted.');
    };

    /**
    * Set cookie value
    * @param  {string} name Name of cookie
    */
    myApp.SetCookie = function(name, value, expires) {

        var cookiestring = [[name, '=', encodeURIComponent( value )].join('')];
        var expire_time = '';

        if ( expires ) {
            expire_time = new Date();
            expire_time.setTime( expire_time.getTime() + expires );
            expire_time = expire_time.toGMTString();
            cookiestring.push( ['expires=', expire_time ].join('') );
        }
        cookiestring = cookiestring.join(';')+';';
        document.cookie = cookiestring;
        console.log( 'SetCookie: '+ name +' set to "'+ value +'"', 'Expires?', expire_time );
    };

    if(!myApp.ReadCookie('lang_redirect')) {
      myApp.SetCookie('lang_redirect', ln,300000); // expires milliseconds
    } else if (myApp.ReadCookie('lang_redirect') && myApp.ReadCookie('lang_redirect') !==ln) {
      myApp.EraseCookie('lang_redirect');
      myApp.SetCookie('lang_redirect', ln,300000); // expires milliseconds
    } else if (myApp.ReadCookie('lang_redirect') && myApp.ReadCookie('lang_redirect')===ln) {
       return;
    }

    if(ln.startsWith("es")){
        window.location.href = 'index.html?lang=es';
    }else if(ln.startsWith("en")){
      window.location.href = 'index.html';
    }else{
     window.location.href = 'index.html';
  }

});
