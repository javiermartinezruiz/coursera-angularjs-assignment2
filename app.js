(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[]).
  controller('ToBuyController', ToBuyController).
  controller('AlreadyBoughtController', AlreadyBoughtController).
  service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  function ShoppingListCheckOffService(){
    var service = this;

    var toBuyItems = [
      { name: "cookies",quantity:10 },
      { name: "candies",quantity:5 },
      { name: "bottles of coke",quantity:4 },
      { name: "apples",quantity:9},
      { name: "oranges",quantity:3 },
    ];
    var alreadyBoughtItems = [];

    service.buy = function(index){
      console.log("Buying index "+index);

      var item = toBuyItems[index];
      console.log(item);

      alreadyBoughtItems.push(item);

      toBuyItems.splice(index,1);
    };

    service.getToBuyItems = function(){
      return toBuyItems;
    };

    service.getAlreadyBoughtItems = function(){
      return alreadyBoughtItems;
    }

  }

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var controller = this;

    controller.buy = function(index){
      var idx = index;
      ShoppingListCheckOffService.buy(idx);
    }

    controller.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var controller = this;
    controller.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

})();
