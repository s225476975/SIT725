const expect = require("chai").expect;
const request = require("request");

describe("Multiply Calculator API", function () {
    const baseUrl = "http://localhost:3000";

    it("should return correct multiplication for valid numbers", function (done) {
        request.get(`${baseUrl}/multiply?a=4&b=5`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.include("20"); // 4 * 5 = 20
            done();
        });
    });

    it("should handle missing parameters", function (done) {
        request.get(`${baseUrl}/multiply?a=4`, function (error, response, body) {
            expect(response.statusCode).to.equal(400);
            expect(body).to.include("Invalid input");
            done();
        });
    });

    it("should return error for non-numeric input", function (done) {
        request.get(`${baseUrl}/multiply?a=hello&b=world`, function (error, response, body) {
            expect(response.statusCode).to.equal(400);
            expect(body).to.include("Invalid input");
            done();
        });
    });

    it("should return 0 if one of the numbers is 0", function (done) {
        request.get(`${baseUrl}/multiply?a=0&b=100`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.include("0"); // 0 * 100 = 0
            done();
        });
    });
});