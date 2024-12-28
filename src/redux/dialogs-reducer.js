const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    //let stateCopy => return га ауыстырдык, копи жасамай сразу ретурн жасайды енди;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
            case SEND_MESSAGE:
                let body = state.newMessageBody;
                return {
                    ...state,
                    newMessageBody: '',
                    messages: [...state.messages, {id: 54, message: body}]
                };
            default:
                return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;