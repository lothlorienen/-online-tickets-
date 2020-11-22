class FormCounter extends Widget {
  constructor(node) {
    super(node, 'js-form-counter');

    this.$buttonPlus = this.queryElement('.plus');
    this.$buttonMinus = this.queryElement('.minus');
    this.$input = this.queryElement('.input');
    this.value = this.$input.value;

    this.events();
  }

  events() {
    this.clickEvents();
    this.keyPressEvents();
  }

  clickEvents() {
    this.$node.addEventListener('click', e => {
      let target = e.target;

      if (target === this.$buttonMinus) {
        this.value = this.$input.value;
        this.value = Number(this.value) - 1;
        this.$input.value = this.value;

        if (this.value > 1) {
          this.$buttonMinus.removeAttribute('disabled')
        } else {
          this.$buttonMinus.setAttribute('disabled', 'disabled')
        }
      }

      if (target === this.$buttonPlus) {
        this.value = this.$input.value;
        this.value = Number(this.value) + 1;
        this.$input.value = this.value;

        if (this.value > 1) {
          this.$buttonMinus.removeAttribute('disabled')
        } else {
          this.$buttonMinus.setAttribute('disabled', 'disabled')
        }
      }
    });
  }

  keyPressEvents() {
    this.$input.addEventListener('keypress', function(e) {
      let key = !isNaN(e.charCode) ? e.charCode : e.keyCode;
      if (!keyAllowed(key)) e.preventDefault();
    }, false);

    this.$input.addEventListener('paste', function(e) {
      let pasteData = e.clipboardData.getData('text/plain');
      if (pasteData.match(/[^0-9]/)) e.preventDefault();
    }, false);

    function keyAllowed(key) {
      const keys = [8, 9, 13, 16, 17, 18, 19, 20, 27, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 91, 92, 93];
      return !(key && keys.indexOf(key) === -1);
    }
  }

  static init(el) {
    el && new FormCounter(el);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-form-counter').forEach(item => {
    FormCounter.init(item);
  });
});

window.FormCounter = FormCounter;