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
};

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const form = document.querySelector('.form');
  const delayInput = form.querySelector('[name="delay"]');
  const stepInput = form.querySelector('[name="step"]');
  const amountInput = form.querySelector('[name="amount"]');

  const initialDelay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  const promises = [];

  for (let i = 1; i <= amount; i++) {
    const delay = initialDelay + (i - 1) * step;
    promises.push(createPromise(i, delay));
  }

  Promise.allSettled(promises)
    .then(results => {
      results.forEach(result => {
        if (result.status === 'fulfilled') {
          console.log(`✅ Fulfilled promise ${result.value.position} in ${result.value.delay}ms`);
        } else {
          console.log(`❌ Rejected promise ${result.reason.position} in ${result.reason.delay}ms`);
        }
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

