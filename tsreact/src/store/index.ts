import { legacy_createStore, Store } from "redux";
import { RepositoriesState } from "./ducks/repositories/types";

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState{
    repositories: RepositoriesState
}

const store: Store<ApplicationState> = legacy_createStore(rootReducer);

export default store;