import { configureStore } from '@reduxjs/toolkit'
import clientsDetail from '../Features/Testimonial/TestimonialSlice'
export const store = configureStore({
  reducer: {
    clients: clientsDetail
  },
})
