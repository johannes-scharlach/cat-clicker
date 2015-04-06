var Cat = function(data) {
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

    this.clickCount = ko.observable(data.clickCount);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.imgSrc = ko.observable(data.imgSrc);
    this.levelId = ko.observable(data.levelId);
    this.level = ko.computed(function() {
      while (this.clickCount() > levels[this.levelId()].max) {
        this.levelId(this.levelId() + 1);
      }
      return levels[this.levelId()].level;
    }, this);
    this.nickNames = ko.observableArray(data.nickNames);
    this.name = ko.observable(data.name);
};


var ViewModel = function() {
  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    imgAttribution: '',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    levelId: 0,
    nickNames: ['Jani', 'Miss J.', 'Little JJ'],
    name: 'Jana'
  }));

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
