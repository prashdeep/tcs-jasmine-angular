export interface AppStore{
    counter:number;
}

export function rootReducer(state:AppStore, action):AppStore{
    switch(action.type){
        case 'INCREMENT':return {counter: state.counter + 1};
    }
    return state;

}