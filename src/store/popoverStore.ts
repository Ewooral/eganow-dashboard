import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SectionStatus = "COMPLETED" | "PENDING";

export interface Section {
  id: string;
  title: string;
  status: SectionStatus;
}

interface ProgressState {
  sections: Section[];
  updateSectionStatus: (sectionId: string, status: SectionStatus) => void;
  getSectionStatus: (sectionId: string) => SectionStatus;
  resetProgress: () => void;
  dontShowAgain: boolean;
  setDontShowAgain: (value: boolean) => void;
  clearEnabled: boolean;
  setClearEnabled: (value: boolean) => void;
}

const initialSections: Section[] = [
  { id: "business-info", title: "Business Info", status: "PENDING" },
  { id: "business-contact-info", title: "Business Contact", status: "PENDING" },
  { id: "contact-person", title: "Contact Person", status: "PENDING" },
  { id: "directors", title: "Directors & Shareholders", status: "PENDING" },
  { id: "attachments", title: "Attachments", status: "PENDING" },
];

const usePopoverStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      sections: initialSections,

      updateSectionStatus: (sectionId: string, status: SectionStatus) =>
        set((state) => ({
          sections: state.sections.map((section) =>
            section.id === sectionId ? { ...section, status } : section
          ),
        })),

      getSectionStatus: (sectionId: string) =>
        get().sections.find((section) => section.id === sectionId)?.status || "PENDING",

      dontShowAgain: false,

      setDontShowAgain: (value: boolean) => set({ dontShowAgain: value }),

      resetProgress: () => set({ sections: initialSections }),
      clearEnabled: false,
      setClearEnabled: (value) => set({ clearEnabled: value }),
    }),
    {
      name: "onboarding-popover-storage",
    }
  )
);

export default usePopoverStore;
