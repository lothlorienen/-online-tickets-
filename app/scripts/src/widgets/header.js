class Header extends Widget {
  constructor(node) {
    super(node, 'js-header');

    HeaderMenu.init(this.$node);
    HeaderScroll.init(this.$node);
  }

  static init(el) {
    el && new Header(el);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  Header.init(document.querySelector('.js-header'));
});
