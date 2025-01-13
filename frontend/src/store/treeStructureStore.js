import { create } from "zustand";

const useTreeStructureStore = create((set) => ({
  treeStructure: null,
  setTreeStructure: (data) => set(() => ({ treeStructure: data })),
}));

export default useTreeStructureStore;
