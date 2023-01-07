'use strict';

var e = React.createElement;

var logo = e('img', {src: 'static/lacslogo.gif'});

const links = {
  'HOME': 'index.html',
  'WHO IS LACS?': 'who-is-lacs.html',
  'WHAT WE DO': 'what-we-do.html',
  'HISTORY': 'history.html',
  'MEETINGS': 'meetings.html',
}


function NavBar (props) {
    var navlist = [];
    var keys = Object.keys(props);
    for (var key in keys) {
      navlist.push( e(
        'a',
        { key: key, href: props[keys[key]]},
        keys[key]
      )
    );
  }
  navlist[0] = e('a', {key: 0, href: links['HOME']}, logo);
  return navlist;
}


ReactDOM.render(NavBar(links), document.querySelector('.navbar'));
