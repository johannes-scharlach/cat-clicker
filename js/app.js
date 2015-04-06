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
    ],
    self = this;

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

var initialCats = [{
    clickCount: 0,
    imgAttribution: '',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    levelId: 0,
    nickNames: ['Jani', 'Miss J.', 'Little JJ'],
    name: 'Jana'
  },
  {
    clickCount: 0,
    imgAttribution: '',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    levelId: 0,
    nickNames: ['Jani', 'Miss J.', 'Little JJ'],
    name: 'Theresa'
  },
  {
    clickCount: 0,
    imgAttribution: '',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    levelId: 0,
    nickNames: ['Franzi'],
    name: 'Francesca'
  },
  {
    clickCount: 0,
    imgAttribution: '',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    levelId: 0,
    nickNames: ['July'],
    name: 'Julia'
  },
  {
    clickCount: 0,
    imgAttribution: '',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    levelId: 0,
    nickNames: ['Mary'],
    name: 'Maria'
  },
];

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.switchCats = function() {
    self.currentCat(this);
  };
};

ko.applyBindings(new ViewModel());
