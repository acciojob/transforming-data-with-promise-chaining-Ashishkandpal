const output = document.querySelector("#output");

const inputHandler = () => {
  const val = document.querySelector("#ip").value;
  prom(+val);
};

const prom = async (val) => {
  const pro = new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${val}`;
      console.log("first", val);
      resolve(val);
    }, 2000);
  });

  pro
    .then((data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mul = data * 2;
          output.textContent = `Result: ${mul}`;
          console.log("mul", mul);
          resolve(mul);
        }, 1000);
      });
    })
    .then((data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const sub = data - 3;
          output.innerText = `Result: ${sub}`;
          resolve(sub);
        }, 1000);
      });
    })
    .then((data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const divide = data / 2;
          output.innerText = `Result: ${divide}`;
          resolve(divide);
        }, 1000);
      });
    })
    .then((data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const add = data + 10;
          output.innerText = `Result: ${add}`;
          resolve(add);
        }, 1000);
      });
    })
    .then((data) => {
      output.innerText = `Final Result: ${data}`;
    });
};
