function magic() {
    return function () {
      return x * 42;
    };
  }
  const answer = magic();
  console.log(answer); // * f()
  console.log(answer(1337)); //  56154 = 1337 * 42
  console.log(magic(1337))(42) //1764  42 *42 ***