Polymer({
    is: 'my-list',
    behaviors: [Polymer.NoteAppBehavior],
    signIn: function () {
        this.$.auth.signInWithPopup();
    }
});