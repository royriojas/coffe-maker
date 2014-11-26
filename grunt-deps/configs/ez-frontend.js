module.exports = function ( grunt, pkg, opts ) {
  'use strict';

  return {
    'js-main': {
      src: [
        'dist/js/main.js'
      ],
      dest: 'dist/js/main.js'
    } //,
    //    'css-main': {
    //      src: [
    //        'src/less/main.less'
    //      ],
    //      dest: 'dest/wiki-enhancements.css'
    //    }
  };
};
