var Cat = function() {
    var levels = [
      {
        max: 9,
        level: 'Newborn'
      },
      {
        max: 99,
        level: 'Infant'
      },
      {
        max: 999,
        level: 'Teen'
      },
      {
        max: Infinity,
        level: 'Adult'
      }
    ];

    this.clickCount = ko.observable(0);
    this.imgAttribution = ko.observable('');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.levelId = 0;
    this.level = ko.computed(function() {
      while (this.clickCount() > levels[this.levelId].max) {
        this.levelId++;
      }
      return levels[this.levelId].level;
    }, this);
    this.nickNames = ko.observableArray([
      'Jani',
      'Miss J.',
      'Little JJ'
    ]);
    this.name = ko.observable('Jana');
};


var ViewModel = function() {
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
