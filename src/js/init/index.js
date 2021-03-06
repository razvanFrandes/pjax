const loadImage = require('../modules/common/loadImage').default;

let elmBg = null;

module.exports = {
  // preload method: after content is replaced. / before scrollManager.resize run.
  preload: function(contents, fixedBefore, fixedAfter, scrollManager, callback) {
    loadImage([
      '/pjax/img/index/bg.jpg'
    ], callback);
  },
  // initBeforeTransit method: after scrollManager.resize run. / before page transition.
  initBeforeTransit: function(contents, fixedBefore, fixedAfter, scrollManager) {
  },
  // initAfterTransit method: after page transition.
  initAfterTransit: function(contents, fixedBefore, fixedAfter, scrollManager) {
    elmBg = fixedAfter.querySelector('.js-background');
    elmBg.classList.add('is-scale')
  },
  // clear any variables.
  clear: function() {
    elmBg = null;
  },
}
