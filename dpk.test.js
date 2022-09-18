const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it.each([
      [null, "0"],
      [undefined, "0"],
      ["", "0"],
      [false, "0"],
      [true, "ff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1a"],
      [10000, "8f9d5384d8b68af8c55b590e6536071e983da2d4c17eb76414ea3806ec48fbc767d5f36d930de501080223a7b216e1fe1ff41fcb14189e3d2638a1607b18fc7f"],
      ["testing123", "473d7b582694eb854d8ce227bc88f66b2aed617636fed7b7c1188db3f0fbc2ce85a53e5cdd5c04fc7f40d0802453a330e7553e11f12b4420da85733d11a3479d"],
      [{partitionKey:"less than 256"}, "less than 256"],
      [{}, "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"],
      [[], "888b858b73d5d34fedab0f07663436931a95c73d6d7808edc868767bb9172f9e542fb7bb1ad1dbe988ceff0aaffde2012bc0e7d1914e986269f46d93651436a5"],
      [{partitionKey:"morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256morethan256more"}, "de1b122ca46cf6a2455cd39286a47086ad6e84d1bf6583814e40d0e551e9640083883eb2acdb096762c62483ec2658a49ded6255a13e636d19e12c8e120b77c2"],
  ])
  ("i dunno", (event, expectedKey) => {
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(expectedKey);
  });
});
