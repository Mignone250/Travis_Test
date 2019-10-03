import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './index';

chai.use(chaiHttp);
chai.should();

describe("GET /api/users", () => {

    it("should get all articles record", () => {
        chai.request(app)
            .get('/api/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                return true;
            });
    });
    
});

describe("GET /api/Article", () => {

    it("should get all articles record", () => {
        chai.request(app)
            .get('/api/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                return true;
            });
    });
    
});