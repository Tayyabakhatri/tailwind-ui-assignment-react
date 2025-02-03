import { createSlice } from '@reduxjs/toolkit'



export const testimonialSlice = createSlice({
    name: "Testimonial",
    initialState: {
        tasks:[],
        clientDetail: [{
            img: "src/assets/Avatar Image.png",
            name: "Dianne Russell",
            sirName: "Starbucks"
        },
        {
            img: "src/assets/Avatar Image (1).png",
            name: "Kristin Watson",
            sirName: "Louis Vuitton"
        },
        {
            img: "src/assets/Avatar Image (2).png",
            name: "Kathryn Murphy",
            sirName: "McDonald's"
        }]
    },
    reducers: {
        clients: (state,action) => {
            console.log(action);
            
            const data = state.tasks
            console.log(data);

            console.log(state.clientDetail);

        }
    }
})
export const { clients } = testimonialSlice.actions
export default testimonialSlice.reducer