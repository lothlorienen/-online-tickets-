class Select extends Widget {
  constructor(node) {
    super(node, 'js-select');

    // this.onChange = this.onChange.bind(this);

    this.init();
  }

  // onChange(e) {
  //   if (e.target.value) {
  //     this.setAsSelected();
  //   } else {
  //     this.setAsNotSelected();
  //   }
  // }

  build() {
    $(this.$node).select2({
      placeholder: 'не выбрано',
      width: '100%',
      minimumResultsForSearch: -1,
    });

    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //   $(this.$node).select2('destroy');
    //   $(this.$node).removeClass('visually-hidden');
    // }

    // $(this.$node).on('change', this.onChange);

    const value = $(this.$node).find('option[selected]');

    if (!value.length) {
      $(this.$node).val('').trigger('change');
    }

    // if (value.length) {
    //   this.setAsSelected();
    // } else {
    //   this.setAsNotSelected();
    // }
  }

  // setAsSelected() {
  //   this.$node.classList.add('selected');
  //   const $label = this.$node.parentElement.querySelector('.form-select__label');
  //   if ($label) {
  //     $label.classList.add('active');
  //   }
  // }
  //
  // setAsNotSelected() {
  //   this.$node.classList.remove('selected');
  //   const $label = this.$node.parentElement.querySelector('.form-select__label');
  //   if ($label) {
  //     $label.classList.remove('active');
  //   }
  // }

  static init(el) {
    new Select(el);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-select').forEach(item => Select.init(item));
});
