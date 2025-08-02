import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, User } from '@/types';

interface AuthStore extends AuthState {
    // Actions
    login: (token: string, user: User) => void;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            // Initial state
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,

            // Actions
            login: (token: string, user: User) => {
                set({
                    token,
                    user,
                    isAuthenticated: true,
                    isLoading: false,
                });
            },

            logout: () => {
                set({
                    token: null,
                    user: null,
                    isAuthenticated: false,
                    isLoading: false,
                });
            },

            updateUser: (userData: Partial<User>) => {
                const currentUser = get().user;
                if (currentUser) {
                    set({
                        user: { ...currentUser, ...userData },
                    });
                }
            },

            setLoading: (loading: boolean) => {
                set({ isLoading: loading });
            },
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                token: state.token,
                user: state.user,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);

// UI State Store
interface UIStore {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    isModalOpen: boolean;
    modalType: string | null;
    openModal: (type: string) => void;
    closeModal: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
    isSidebarOpen: false,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    closeSidebar: () => set({ isSidebarOpen: false }),

    isModalOpen: false,
    modalType: null,
    openModal: (type: string) => set({ isModalOpen: true, modalType: type }),
    closeModal: () => set({ isModalOpen: false, modalType: null }),
}));