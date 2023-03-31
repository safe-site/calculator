document.querySelector('#calculator-form').addEventListener('submit', function (event) {
        event.preventDefault();
      });
      function calculateInterest() {
        let principal = parseFloat(document.querySelector('#principal').value);
        let rate = parseFloat(document.querySelector('#rate').value) / 100;
        let years = parseFloat(document.querySelector('#years').value);
        if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
          alert('Please enter valid numbers');
        } else {
          let interest = principal * rate * years;
          document.querySelector('#interest').innerHTML = interest.toFixed(2);
        }
      }
