import create from 'zustand'
import { persist } from 'zustand/middleware'

type FavoriteRepoStore = {
  favoriteRepoIds: number[]
  addToFavorites: (repoId: number) => void
  removeFromFavorites: (id: number) => void
}

const useFavoriteRepoStore = create(persist<FavoriteRepoStore>(
  (set) => ({
    favoriteRepoIds: [],
    addToFavorites: (repoId: number) => {
      set((state) => ({
        favoriteRepoIds: [...state.favoriteRepoIds, repoId]
      }))
    },
    removeFromFavorites: (repoId: number) => {
      set((state) => ({
        favoriteRepoIds: state.favoriteRepoIds.filter((id) => id !== repoId)
      }))
    },
  }),
  {
    name: 'favorite-repo-store',
  }))

export default useFavoriteRepoStore