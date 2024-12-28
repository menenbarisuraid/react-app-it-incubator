import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: '1', post: 'Hi, how are you?', likesCount: 2 },
                { id: '2', post: 'It\'s my first post', likesCount: 16 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: '1', name: 'Ayan' },
                { id: '2', name: 'Aibek' },
                { id: '3', name: 'Agytai' },
                { id: '4', name: 'Aidyn' },
                { id: '5', name: 'Beka' },
                { id: '6', name: 'Annur' },
                { id: '7', name: 'Asar' }
            ],
            messages: [
                { id: '1', message: 'Hi' },
                { id: '2', message: 'How is your it-kamasutra?' },
                { id: '3', message: 'Yo' },
                { id: '4', message: 'Yo' },
                { id: '5', message: 'Yo' }
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer; //чтобы вызывать когда будет изменение
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;