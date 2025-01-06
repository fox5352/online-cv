import { createContext, ReactNode, useContext, useReducer } from "react";
import dialogReducer from "./dialogReducer";
import { RepoData } from "../../model/project.model";

type DialogState = {
  repo?: RepoData;
};

type DialogFunc = {
  addRepo: (data: RepoData) => void;
  clearRepo: () => void;
};

type DialogContextType = DialogState & DialogFunc;

const initialState: DialogState = {
  repo: undefined,
};

// Initialize context with a placeholder value for DialogContextType
const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(dialogReducer, initialState);

  const addRepo = (repo: RepoData) => {
    dispatch({ type: "ADD", payload: { repo } });
  };

  const clearRepo = () => dispatch({ type: "CLEAR", payload: undefined });

  const value: DialogContextType = {
    ...state,
    addRepo,
    clearRepo,
  };

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context)
    throw new Error("useDialog must be used within a DialogProvider");
  return context;
};
