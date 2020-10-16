const supertest = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("GET /", () => {
    it("should return 200 OK", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("should return api is up", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("up");
        });
    });
  });

  describe("POST /api", () => {
    it("should return a JSON", () => {
      return supertest(server)
        .post("/api/shia")
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it("return should include description", () => {
      const test = {
        description: `Cool photo${Math.random() * 10}`,
        img_url: `shia${Math.random() * 10}.jpeg`,
      };

      let mostRecentId;

      return supertest(server)
        .post("/api/shia")
        .send(test)
        .then((res) => {
          expect(res.body.data.description).toBe(test.description);
        });
    });

    describe("DELETE /api/:id", () => {
      let id = 9;
      // make sure you verify that id is still in the db

      it("should return the value 1", () => {
        return supertest(server)
          .delete(`/api/shia/${+9}`)
          .then((res) => {
            console.log(res.body);
            expect(res.body.removed).toBe(1);
          });
      });

      it("should throw error on deleting twice", () => {
        // make sure you verify that id is still in the db

        return supertest(server)
          .delete(`/api/shia/${+id}`)
          .then((res) => {
            expect(res.body.message).toMatch(
              /Could not find that user with given id/i
            );
          });
      });
    });
  });
});
