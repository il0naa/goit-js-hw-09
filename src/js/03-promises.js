function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay, status: 'resolved' });
      } else {
        reject({ position, delay, status: 'rejected' });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const form = document.querySelector('.form');
  const delayInput = form.querySelector('[name="delay"]');
  const stepInput = form.querySelector('[name="step"]');
  const amountInput = form.querySelector('[name="amount"]');

  const initialDelay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  function processPromise(index) {
    if (index > amount) {
      return;
    }

    const delay = initialDelay + (index - 1) * step;

    createPromise(index, delay)
      .then(result => {
        console.log(`✅ Проміс ${result.position} виконано за ${result.delay}мс`);
        processPromise(index + 1);
      })
      .catch(error => {
        console.log(`❌ Проміс ${error.position} відхилено за ${error.delay}мс`);
        processPromise(index + 1);
      });
  }

  processPromise(1);
});

