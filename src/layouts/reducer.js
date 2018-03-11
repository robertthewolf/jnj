const language = typeof window !== 'undefined'? navigator.userLanguage || navigator.language : 'cs-CZ';
const initialState = ({
    isCzech: language === 'cs-CZ'? true : false
});

export default function (state = initialState, action) {
    const { type } = action
    switch (type) {
        case 'TOGGLE_LANGUAGE':
            return {
                ...state,
                isCzech: !state.isCzech,
            };
        default:
            return state;
    }
}