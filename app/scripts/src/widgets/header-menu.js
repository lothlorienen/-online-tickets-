class HeaderMenu extends Widget {
  constructor(node) {
    super(node, 'js-header');


    this.events();
  }

  events() {

  }

  static init(el) {
    el && new HeaderMenu(el);
  }
}

window.HeaderMenu = HeaderMenu;