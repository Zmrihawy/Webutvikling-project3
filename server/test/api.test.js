var app = require('../server');
var chai = require('chai');
var request = require('supertest');
var mongoose = require("mongoose");


var expect = chai.expect;

before(function (done) {
  app.on("mongodbConnected", function() {
    done();
  });
});

describe('API Integration Tests', function(done) {
  describe('GET / user', function(done) { 
    it('should get all tasks', function(done) { 
      request(app) .get('/api/user')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body).to.be.an('array'); 
          expect(res.body).to.not.be.empty; 
          const user = res.body[0];
          expect(user.username).to.be.a('string');
          expect(user.shoppingCart).to.be.an('array');
        }); 
      done(); 
    });
  });

  describe('GET / user / statistics', function(done) { 
    it('should get all tasks', function(done) { 
      request(app) .get('/api/user/statistics')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body).to.be.an('object'); 
          expect(res.body).to.not.be.undefined;
          Object.keys(res.body).forEach(stat => {
            expect(parseInt(res.body[stat])).to.be.a('number');
          })
        }); 
      done(); 
    });
  });

  describe('GET / component / pagination', function(done) { 
    it('should get all components', function(done) { 
      request(app) .get('/api/component/pagination')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body.components).to.be.an('array'); 
          expect(res.body.components).to.not.be.empty; 
          const component = res.body.components[0];
          expect(component.name).to.be.a('string');
          expect(component.specs).to.be.an('array');
        })
      done(); 
    });
  });

  describe('GET / component / statistics', function(done) { 
    it('should get component statistics', function(done) { 
      request(app) .get('/api/component/statistics')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body).to.be.an('object'); 
          expect(res.body).to.not.be.undefined;
          Object.keys(res.body).forEach(stat => {
            expect(parseInt(res.body[stat])).to.be.an('number');
          })
        }); 
      done(); 
    });
  });

  describe('GET / log / statistics', function(done) { 
    it('should get log statistics', function(done) { 
      request(app) .get('/api/log/statistics')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body).to.be.an('object'); 
          expect(res.body).to.not.be.undefined;
          Object.keys(res.body).forEach(stat => {
            expect(parseInt(res.body[stat])).to.be.an('number');
          })
        }); 
      done(); 
    });
  });
});
