import create from "zustand";

interface IStoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reseat: () => void;
}

const useCounterStore = create<IStoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: (state.count += 1) })),
  decrement: () => set((state) => ({ count: (state.count -= 1) })),
  reseat: () => set((state) => ({ count: (state.count = 0) })),
}));

export default useCounterStore;
