import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    currentUser:undefined,
    myClinics:[],
    myDoctors:[],
    myAdmininstrators:[],
    isLoader: false,
    isError: false,
    errorMessage: '',

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
     
            case ActionTypes.MYADMINISTRATORS:
                return ({
                    ...state,
                    myAdmininstrators: action.payload
                })
            case ActionTypes.MYCLINICS:
                return ({
                    ...state,
                    myClinics: action.payload
                })
            case ActionTypes.MYDOCTORS:
                return ({
                    ...state,
                    myDoctors: action.payload
                })
        case ActionTypes.FOLDERNAME:
            return ({
                ...state,
                folderName: action.payload
            })
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })

        case ActionTypes.LOADER:
            return ({
                ...state,
                isLoader: !state.isLoader
            })
        case ActionTypes.SHOWERROR:
            return ({
                ...state,
                isLoader: !state.isLoader,
                isError: !state.isError,
                errorMessage: action.payload
            })

        case ActionTypes.HIDEERROR:
            return ({
                ...state,
                isError: false,
                errorMessage: ''
            })
        default:
            return state;
    }

}