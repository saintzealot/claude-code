// Module: rR1 (lazy)
// Dependencies: [Xq, C6, ab, u86]
// Pre-declarations: var Zp8, V76, Je3;
// Lines: 105814-105862 in cli.formatted.js
// ---

var Zp8, V76, Je3;

  Xq();
  $7();
  LA();
  C6();
  ab();
  Zp8 = zA(async function () {
    let [A, { ListInferenceProfilesCommand: q }] = await Promise.all([
        fp8(),
        Promise.resolve().then(() => s(u86(), 1)),
      ]),
      K = [],
      Y;
    try {
      do {
        let z = new q({
            ...(Y && { nextToken: Y }),
            typeEquals: "SYSTEM_DEFINED",
          }),
          w = await A.send(z);
        if (w.inferenceProfileSummaries) K.push(...w.inferenceProfileSummaries);
        Y = w.nextToken;
      } while (Y);
      return K.filter((z) => z.inferenceProfileId?.includes("anthropic"))
        .map((z) => z.inferenceProfileId)
        .filter(Boolean);
    } catch (z) {
      throw (A1(z), z);
    }
  });
  V76 = zA(async function (A) {
    try {
      let [q, { GetInferenceProfileCommand: K }] = await Promise.all([
          fp8(),
          Promise.resolve().then(() => s(u86(), 1)),
        ]),
        Y = new K({ inferenceProfileIdentifier: A }),
        z = await q.send(Y);
      if (!z.models || z.models.length === 0) return null;
      let w = z.models[0];
      if (!w?.modelArn) return null;
      let H = w.modelArn.lastIndexOf("/");
      return H >= 0 ? w.modelArn.substring(H + 1) : w.modelArn;
    } catch (q) {
      return (A1(q), null);
    }
  });
  Je3 = ["us", "eu", "apac", "global"];
