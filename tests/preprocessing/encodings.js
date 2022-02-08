
describe("Encodings", function () {

  describe("LabelEncoder", function () {

    it("test the label encoding on array", function () {
      let data = [ "dog", "cat", "man", "dog", "cat", "man", "man", "cat" ];
      let encode = new dfd.LabelEncoder();
      let fit_data = [
        0, 1, 2, 0,
        1, 2, 2, 1
      ];
      assert.deepEqual(encode.fit(data).values, fit_data);
      assert.deepEqual(encode.transform([ "dog", "man" ]).values, [ 0, 2 ]);
    });
    it("test the label encoding on Series", function () {
      let data = [ "dog", "cat", "man", "dog", "cat", "man", "man", "cat" ];
      let series = new dfd.Series(data);
      let encode = new dfd.LabelEncoder();
      let fit_data = [
        0, 1, 2, 0,
        1, 2, 2, 1
      ];
      assert.deepEqual(encode.fit(series).values, fit_data);
      assert.deepEqual(encode.transform([ "dog", "man" ]).values, [ 0, 2 ]);
    });
    it("label encoding directly from a Series", function () {
      let data = new dfd.Series([ "dog", "cat", "man", "dog", "cat", "man", "man", "cat" ]);
      let to_label_encode = new dfd.Series([ "dog", "man" ]);
      let encode = new dfd.LabelEncoder();
      let fit_data = [
        0, 1, 2, 0,
        1, 2, 2, 1
      ];
      assert.deepEqual(encode.fit(data).values, fit_data);
      assert.deepEqual(encode.transform(to_label_encode).values, [ 0, 2 ]);
    });
    // it("Label encoding on Series", function () {
    //     let data = ["dog", "cat", "man", "dog", "cat", "man", "man", "cat"]
    //     let series = new dfd.Series(data)
    //     let encode = new dfd.LabelEncoder()
    //     let fit_data = [
    //         0, 1, 2, 0,
    //         1, 2, 2, 1
    //     ]
    //     assert.deepEqual(encode.fit(series).values, fit_data)
    //     assert.deepEqual(encode.transform(["dog", "man"]).values, [0, 2])
    // });

  });

  describe("OneHotEncoder", function () {

    it("test onehotencoding on array", function () {
      let data = [ "dog", "cat", "man", "dog", "cat", "man", "man", "cat" ];
      let encode = new dfd.OneHotEncoder();
      let fit_data = [
        [ 1, 0, 0 ],
        [ 0, 1, 0 ],
        [ 0, 0, 1 ],
        [ 1, 0, 0 ],
        [ 0, 1, 0 ],
        [ 0, 0, 1 ],
        [ 0, 0, 1 ],
        [ 0, 1, 0 ]
      ];
      let transform_data = [ [ 0, 0, 1 ], [ 0, 1, 0 ] ];

      assert.deepEqual(encode.fit(data).values, fit_data);
      assert.deepEqual(encode.transform([ "man", "cat" ]).values, transform_data);
    });
    it("test onehotencoding on Series", function () {
      let data = [ "dog", "cat", "man", "dog", "cat", "man", "man", "cat" ];
      let series = new dfd.Series(data);
      let encode = new dfd.OneHotEncoder();
      let fit_data = [
        [ 1, 0, 0 ],
        [ 0, 1, 0 ],
        [ 0, 0, 1 ],
        [ 1, 0, 0 ],
        [ 0, 1, 0 ],
        [ 0, 0, 1 ],
        [ 0, 0, 1 ],
        [ 0, 1, 0 ]
      ];
      let transform_data = [ [ 0, 0, 1 ], [ 0, 1, 0 ] ];

      assert.deepEqual(encode.fit(series).values, fit_data);
      assert.deepEqual(encode.transform(new dfd.Series([ "man", "cat" ])).values, transform_data);
    });
  });


});
