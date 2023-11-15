const form = document.querySelector('.form');

form.addEventListener('submit', submitForm);

function submitForm(evt) {
  evt.preventDefault();
  const objData = {};
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    objData[key] = value;
  });
  createFunctions(objData);
}

function createFunctions(objData) {
  for (let index = 0; index < objData.amount; index++) {
    const position = index + 1;
    const delay = Number(objData.delay) + Number(objData.step) * index;
    const promise = createPromise(position, delay);

    promise
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, rejact) => {
    const shouldResolve = Math.random() > 0.3;
    const obj = {
      position,
      delay,
    };
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        rejact(obj);
      }
    }, delay);
  });
} 


