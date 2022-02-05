import Vue from 'vue'

var invocation = new XMLHttpRequest();
var url = 'http://localhost:8000/ap/connect/facebook';
   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}

Vue.prototype.$facebook = {
  init,
  /**
   * https://developers.facebook.com/docs/reference/javascript/FB.login
   * @param {String} scope
   * @return {Promise}
   */
  login (scope = '') {
    return new Promise(resolve => {
      init(() => FB.login(resolve, { scope }));
    });
  },
  /**
   * https://developers.facebook.com/docs/reference/javascript/FB.logout
   * @return {Promise}
   */
  logout () {
    return call('logout');
  },
  /**
   * https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
   * @return {Promise}
   */
  getLoginStatus () {
    return call('getLoginStatus');
  },
  /**
   * https://developers.facebook.com/docs/reference/javascript/FB.getAuthResponse
   * @return {Promise}
   */
  getAuthResponse () {
    return call('getAuthResponse');
  },
  /**
   * https://developers.facebook.com/docs/javascript/reference/FB.api
   * @param {String} path
   * @param {String} path
   * @param {String} path
   * @return {Promise}
   */
  api (...params) {
    return call('api', ...params);
  },
};

function init (callback) {
  if (typeof FB === 'undefined') {
    window.fbAsyncInit = () => {
      FB.init({
        appId      : '2969807393081984',
        cookie     : true,
        xfbml      : true,
        version    : 'v6.0',
      });
      callback(FB);
    };
  } else {
    callback(FB);
  }
}

function call (method, ...params) {
  return new Promise(resolve => {
    init(() => FB[method](...params, resolve));
  });
}

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));