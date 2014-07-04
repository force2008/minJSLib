describe("A name space functions", function() {
    var name;

    it("namespace", function() {
        var namespace = "a.b.c.d";
        var b = P(namespace);

        expect(a).toBeDefined();
        expect(a.b).toBeDefined();
        expect(a.b.c).toBeDefined();
        expect(a.b.c.d).toBeDefined();


    });
});