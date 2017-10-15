'use babel';

export default class Ng2GeneratorBuddyView {

  constructor(serializedState) {
// 
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
    console.log(this);
  }

  getElement() {
    return this.element;
  }

  // onClose() {
  //
  // }

}
