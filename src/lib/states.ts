import { create } from "zustand";

/* Account States */
interface AccountStore {
    userInfo: Record<string, any> | null
    setUserInfo: (userInfo: Record<string, any>) => void
}

export const useAccountStore = create<AccountStore>((set) => ({
    userInfo: null,
    setUserInfo: (userInfo) => set(() => ({ userInfo }))
}))

/* Modal States */
// Wallet Modal
interface ModalStore {
    modal: string;
    options: any;
    loading: boolean;
    setModal: (type: string, options: any) => void;
    setLoading: (loading: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    modal: "", // Modal Key
    options: {},
    loading: false,
    setModal: (type, options = {}) => set(() => ({
        modal: type,
        options: options,
    })),
    setLoading: (loading) => set(() => ({ loading }))
}));