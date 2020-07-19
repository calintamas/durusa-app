class Navigation {
  static navigation = null;

  static setRef(ref = {}) {
    this.navigation = ref;
  }

  static getRef() {
    return this.navigation;
  }
}

export default Navigation;
