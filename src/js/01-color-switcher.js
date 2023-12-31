let intervalId;

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    function startColorChange() {
      if (!intervalId) {
        document.querySelector('[data-start]').disabled = true;
        document.querySelector('[data-stop]').disabled = false;
        intervalId = setInterval(() => {
          document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
      }
    }

    function stopColorChange() {
      clearInterval(intervalId);
      document.querySelector('[data-start]').disabled = false;
      document.querySelector('[data-stop]').disabled = true;
      intervalId = null;
    }

    document.querySelector('[data-start]').addEventListener('click', startColorChange);
    document.querySelector('[data-stop]').addEventListener('click', stopColorChange);
