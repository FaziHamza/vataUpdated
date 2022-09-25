var mPaymentHelper = mPaymentHelper || {};

mPaymentHelper.enableInputs = function (form) {
  Array.prototype.forEach.call(
    form.querySelectorAll(
      'input[type=\'text\'], input[type=\'email\'], input[type=\'tel\']'
    ),
    function (input) {
      input.removeAttribute('disabled');
    }
  );
}

mPaymentHelper.disabledInputs = function (form) {
  Array.prototype.forEach.call(
    form.querySelectorAll(
      'input[type=\'text\'], input[type=\'email\'], input[type=\'tel\']'
    ),
    function (input) {
      input.setAttribute('disabled', 'true');
    }
  );
}

mPaymentHelper.attachListeners = function (selector) {
  const inputs = document.querySelectorAll(selector);
  Array.prototype.forEach.call(inputs, function (input) {
    input.addEventListener('focus', function () {
      input.classList.add('focused');
    });
    input.addEventListener('blur', function () {
      input.classList.remove('focused');
    });
    input.addEventListener('keyup', function () {
      if (input.value.length === 0) {
        input.classList.add('empty');
      } else {
        input.classList.remove('empty');
      }
    });
  });
};

mPaymentHelper.registerElements = function (elements, exampleName) {
  const formClass = '.' + exampleName;
  const example = document.querySelector(formClass);

  const form = example.querySelector('form');
  const payButton = example.querySelector('button.submit')
  const error = form.querySelector('.error');
  const errorMessage = error.querySelector('.message');
  payButton.classList.add('btn-disabled');

  // Listen for errors from each Element, and show error messages in the UI.
  elements.forEach(function (element) {
    element.on('change', function (event) {
      console.log(event);

      if (event.error) {
        error.classList.add('visible');
        errorMessage.innerHTML = event.error.message;
        payButton.disabled = true;
        payButton.classList.add('btn-disabled');

      } else {
        payButton.disabled = false;
        payButton.classList.remove('btn-disabled');
        error.classList.remove('visible');
      }
    });
  });
}