var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class MyList extends Polymer.Element {
    static get is() {
        return 'my-list';
    }
    authenticate() {
        this.$.auth.signInWithPopup();
    }
}
__decorate([
    property({ type: Boolean, value: false })
    //isLoading: boolean;
    ,
    observe("signIn")
], MyList.prototype, "authenticate", null);
customElements.define('my-list', MyList);
//# sourceMappingURL=my-listold.js.map