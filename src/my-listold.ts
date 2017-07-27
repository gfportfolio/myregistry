@customElement('my-list')
class MyList extends Polymer.Element {
    behaviors: [Polymer.NoteAppBehavior]
    static get is() {
        return 'my-list';
    }
    @property({ type: Boolean, value: false })
    //isLoading: boolean;

    @observe("signIn")
    authenticate() {
        this.$.auth.signInWithPopup();
    }
}
customElements.define('my-list', MyList);