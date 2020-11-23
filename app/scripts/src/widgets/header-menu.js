class HeaderMenu extends Widget {
  constructor(node) {
    super(node, 'js-header');

    this.$btnMenu = this.queryElement('.menu-btn');
    this.$links = this.queryElement('.links');

    this.events();
  }

  events() {
    this.onBtnClick();
  }

  onBtnClick() {
    this.$btnMenu.addEventListener('click', e => {
      e.preventDefault();

      this.$links.classList.contains('active')
        ? this.hideMenu(this.$links)
        : this.showMenu(this.$links);
    })
  }

  showMenu(elem) {
    this.$links.classList.add('active');
    document.body.classList.add('header-fixed');
    HeaderMenu.expand(elem);
    hideScrollbar();
  }

  hideMenu(elem) {
    HeaderMenu.collapse(elem);
    this.$links.classList.remove('active');
    document.body.classList.remove('header-fixed');
    showScrollbar();
  }

  static collapse(elem) {
    const height = {
      from: elem.scrollHeight,
      to: 0,
    };

    HeaderMenu.animate(elem, height);
  }

  static expand(elem) {
    const height = {
      from: 0,
      to: elem.scrollHeight,
    };

    HeaderMenu.animate(elem, height);
  }

  static animate(elem, height) {
    const handler = ({target, currentTarget}) => {
      if (target !== currentTarget) return false;

      elem.removeEventListener(endEvents.transition, handler);
      elem.classList.remove('animate');
      elem.style.height = '';
    };

    elem.addEventListener(endEvents.transition, handler);
    elem.classList.add('animate');
    elem.style.height = `${height.from}px`;

    raf2x(() => elem.style.height = `${height.to}px`);
  }

  static init(el) {
    el && new HeaderMenu(el);
  }
}

window.HeaderMenu = HeaderMenu;