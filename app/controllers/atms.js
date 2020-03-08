'use strict';

const Addition = require('../models/addition');
const User = require('../models/user');
const Candidate = require('../models/atm');

const Atms = {
  home: {
    handler: async function(request, h) {
      const candidates = await Candidate.find().lean();
      return h.view('home', { title: 'Make a Addition', candidates: candidates });
    }
  },
  list: {
    handler: async function(request, h) {
      try {
        const additions = await Addition.find().populate('donor').populate('candidate').lean();
        return h.view('list', {
          title: 'Atms to Date',
          additions: additions
        });
      } catch (err) {
        return h.view('main', { errors: [{ message: err.message }] });
      }
    }
  },
  addAtm: {
    handler: async function(request, h) {
      try {
        const id = request.auth.credentials.id;
        const user = await User.findById(id);
        const data = request.payload;

        const rawCandidate = request.payload.candidate.split(',');
        const candidate = await Candidate.findOne({
          atmName: rawCandidate[0],
          atmDescription: rawCandidate[1]
        });

        const newAddition = new Addition({
          name: data.name,
          category: data.category,
          description: data.description,
          candidate: candidate._id
        });
        await newAddition.save();
        return h.redirect('/list');
      } catch (err) {
        return h.view('main', { errors: [{ message: err.message }] });
      }
    }
  }
};

module.exports = Atms;
