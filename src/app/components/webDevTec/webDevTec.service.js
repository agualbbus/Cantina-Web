(function() {
  'use strict';

  angular
      .module('sistemaCantina')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
