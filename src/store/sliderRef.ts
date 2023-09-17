import { create } from 'zustand'


interface SliderState {
  sliderRef: any
  setSliderRef: (slider: any) => void
}
export const useProjectsSlider = create<SliderState>()((set) => ({
  sliderRef: null,
  setSliderRef: (slider) => set({ sliderRef: slider }),
}))