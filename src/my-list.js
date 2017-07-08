Polymer({
    is: 'my-list',
    behaviors: [Polymer.NoteAppBehavior],
    signIn: function () {
        this.$.auth.signInWithPopup();
    },

    get notesPath() {
        return '/notes/' + this.user.uid;
    },

    toEditableId: function (noteId) {
        return this.notesPath + '/' + noteId;
    },
    get isEditable() {
        return this.online;
    }
});