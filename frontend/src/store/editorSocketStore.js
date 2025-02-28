import { create } from "zustand";

const useEditorSocketStore = create((set) => ({
  editorSocket: null,
  setEditorSocket: (socket) => set(() => ({ editorSocket: socket })),
}));

export default useEditorSocketStore;
