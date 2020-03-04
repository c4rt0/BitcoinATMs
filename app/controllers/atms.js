'use strict';

const Atms = {
  home: {
    handler: function(request, h) {
      return h.view('home', { title: 'Find Bitcoin ATMs' });
    }
  },
  atms: {
    handler: function(request, h) {
      return h.view('atms', {
        title: 'Bitcoin ATMs',
        atms: this.atms
      });
    }
  },
  addAtm: {
    handler: function(request, h) {
      const data = request.payload;
      this.atms.push(data);
      return h.redirect('/atms');
    }
  }
};

module.exports = Atms;
