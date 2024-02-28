<<<<<<< Updated upstream
import create from 'zustand'
=======
import {create} from 'zustand'
>>>>>>> Stashed changes
import { persist } from 'zustand/middleware'

export const useFeatureStore = create(
  persist(
    (set) => ({
      featureCounts: {},
      incrementFeatureCount: (featureTitle: string) =>
        set((state: any) => ({
          featureCounts: {
            ...state.featureCounts,
            [featureTitle]: (state.featureCounts[featureTitle] || 0) + 1,
          },
        })),
    }),
    {
      name: 'most-used-feature-storage',
    },
  ),
)
