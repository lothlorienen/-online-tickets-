class HeaderScroll extends Widget {
  constructor(node) {
    super(node, 'js-header');

    this.header = this.$node;

    this.onScroll = this.onScroll.bind(this);
    this.events();
  }

  events() {
    this.build();
  }

  build() {
    onScroll(this.onScroll);
  }

  onScroll() {
    getScrollPos() > 0
      ? this.header.classList.add('header--scroll')
      : this.header.classList.remove('header--scroll');
  }

  static init(el) {
    el && new HeaderScroll(el);
  }
}

window.HeaderScroll = HeaderScroll;