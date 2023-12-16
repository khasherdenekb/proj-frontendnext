import { create } from "zustand";

type TUseStoreData = {
  title: string;
  image: string;
  tag: string;
  content: string;
  setTitle: (prop: string) => void;
  setContent: (prop: string) => void;
  setTag: (prop: string) => void;
  setImage: (prop: string) => void;
};

export const UseStoreData = create<TUseStoreData>()((set) => ({
  title: "",
  image: "",
  tag: "",
  content: "",
  setTitle: (prop) => set(() => ({ title: prop })),
  setContent: (prop) => set(() => ({ content: prop })),
  setTag: (prop) => set(() => ({ tag: prop })),
  setImage: (prop) => set(() => ({ image: prop })),
}));
