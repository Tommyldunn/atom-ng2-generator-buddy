'use babel';

import Ng2ComponentGenerator from '../lib/ng2-generator-buddy';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Ng2ComponentGenerator', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('ng2-generator-buddy');
  });

  describe('when the ng2-generator-buddy:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.ng2-generator-buddy')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'ng2-generator-buddy:toggle');
      console.log(this);
      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.ng2-generator-buddy')).toExist();

        let ng2GeneratorBuddyElement = workspaceElement.querySelector('.ng2-generator-buddy');
        expect(ng2GeneratorBuddyElement).toExist();

        let ng2GeneratorBuddyPanel = atom.workspace.panelForItem(ng2GeneratorBuddyElement);
        expect(ng2GeneratorBuddyPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'ng2-generator-buddy:toggle');
        expect(ng2GeneratorBuddyPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      console.log(this);
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.ng2-generator-buddy')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'ng2-generator-buddy:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let ng2GeneratorBuddyElement = workspaceElement.querySelector('.ng2-generator-buddy');
        expect(ng2GeneratorBuddyElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'ng2-generator-buddy:toggle');
        expect(ng2GeneratorBuddyElement).not.toBeVisible();
      });
      console.log(this);
    });
  });
});
