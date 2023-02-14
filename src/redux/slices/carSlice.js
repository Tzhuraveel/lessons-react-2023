import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../api";


const initialState = {
    cars: [],
    prev: null,
    next: null,
    updatedCar: null,
    errors: null,
    loading: null
}


const carSlice = createSlice({
    name: 'carSLice',
    reducers: {
        getUpdatedCar: (state, action) => {
            state.updatedCar = action.payload
        }
    },
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAllCars.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllCars.fulfilled, (state, action) => {
                const {prev, next, items} = action.payload
                console.log(prev, next)
                state.loading = false
                state.cars = items
                state.prev = prev
                state.next = next
            })
            .addCase(getAllCars.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
});


const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carService.getAllCars(page);
            return data

        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async (newCar, thunkAPI) => {
        try {
            await carService.createCar(newCar)
            thunkAPI.dispatch(getAllCars())
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async (id, thunkAPI) => {
        try {
            await carService.deleteCar(id)
            thunkAPI.dispatch(getAllCars())
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const updateCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({updatedCar, car}, thunkAPI) => {
        try {
            await carService.updateCar(updatedCar.id, car)
            thunkAPI.dispatch(getAllCars())
        }catch (e){
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)




const {reducer: carReducer, actions:{getUpdatedCar}} = carSlice;


const carActions = {
    getAllCars,
    createCar,
    deleteCar,
    updateCar,
    getUpdatedCar
}

export {
    carReducer,
    carActions
}