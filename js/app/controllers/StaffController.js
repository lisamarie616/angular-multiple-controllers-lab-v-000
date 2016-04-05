function StaffController(){
  var vm = this;
  vm.name = 'Steve'
  vm.email = 'steve@apple.com'
  vm.phone = '777-1212'
}

angular
  .module('app')
  .controller('StaffController', StaffController);