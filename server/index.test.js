const request = require('supertest');


describe('Product Service', function () {
  it('responds with javascript', function(done) {
    request('http://localhost:3008')
      .get('/product-bundle.js')
      .expect('Content-Type', 'application/javascript; charset=UTF-8')
      .expect(200, done);
  });

  it('responds with json', function (done) {
    request('http://localhost:3008')
      .get('/product/1')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});

describe('Inventory Service', function () {
  it('responds with javascript', function(done) {
    request('http://localhost:3004')
      .get('/bundle.js')
      .expect('Content-Type', 'application/javascript; charset=UTF-8')
      .expect(200, done);
  });

  it('responds with json', function (done) {
    request('http://localhost:3004')
      .get('/inventory/1/1')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});

describe('Photo Service', function () {
  it('responds with javascript', function(done) {
    request('http://localhost:3000')
      .get('/bundle-photo-module.js')
      .expect('Content-Type', 'application/javascript; charset=UTF-8')
      .expect(200, done);
  });

  it('responds with json', function (done) {
    request('http://localhost:3000')
      .get('/photos/1')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});

describe('Reviews Service', function () {
  it('responds with javascript', function(done) {
    request('http://localhost:3003')
      .get('/bundle.js')
      .expect('Content-Type', 'application/javascript; charset=UTF-8')
      .expect(200, done);
  });

  it('responds with json', function (done) {
    request('http://localhost:3003')
      .get('/api/reviews/1')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});

describe('Proxy Server', function () {
  it('responds with html', function(done) {
    request('http://localhost:3009')
      .get('/shop/1/1/')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200, done);
  });
});
