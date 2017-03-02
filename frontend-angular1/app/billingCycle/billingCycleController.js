(function () {
   angular.module('primeiraApp')
       .controller('BillingCycleCtrl', [
       '$http',
       'msgs',
       'tabs',
       BillingCycleController
   ])
    
    function BillingCycleController($http, msgs, tabs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function () {
            $http.get(url).then(function (res) {
                vm.billingCycle = {}
                vm.billingCycles = res
                tabs.show(vm, {tabList: true, tabCreate: true})
            })    
        }
        
        vm.create = function () {
            $http.post(url, vm.billingCycle).then(function(res) {
                vm.refresh();
                msgs.addSuccess('Operação realizada com sucesso!');
            }).catch(function(res){
                msgs.addError(res.data.errors);
            })
        }

        vm.refresh();
    }
})()
