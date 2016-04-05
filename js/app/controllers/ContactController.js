function ContactController(){
  var vm = this;
  vm.name = 'Bill'
  vm.email = 'bill@microsoft.com'
  vm.phone = '555-1212'
  vm.changeName = function(){
    vm.name = 'Something else!'
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);