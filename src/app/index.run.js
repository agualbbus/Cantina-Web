(function() {
  'use strict';

  angular
    .module('sistemaCantina')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
