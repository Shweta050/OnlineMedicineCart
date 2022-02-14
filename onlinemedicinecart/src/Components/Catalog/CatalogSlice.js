import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../Api/Agent";

const productsAdapter = createEntityAdapter();

function getAxiosParams(productParams) {
    const params = new URLSearchParams();
    params.append('page', productParams.page.toString());
    params.append('limit', productParams.limit.toString());
    params.append('sort', productParams.sort);
    if (productParams.searchTerm) params.append('searchTerm', productParams.searchTerm);
    return params;
}

export const fetchProductsAsync = createAsyncThunk(
    'catalog/fetchProductsAsync',
    async (_, thunkAPI) => {
        const params = getAxiosParams(thunkAPI.getState().catalog.productParams);
        try {
            console.log(params)
            const response = await agent.Catalog.list(params);
            thunkAPI.dispatch(setMetaData(response.metaData));
            return response.items;
        } catch (error) {
           // return thunkAPI.rejectWithValue({error: error.data})
        }
    }
)

export const fetchProductAsync = createAsyncThunk(
    'catalog/fetchProductAsync',
    async (productId, thunkAPI) => {
        try {
            return await agent.Catalog.details(productId);
        } catch (error) {
           // return thunkAPI.rejectWithValue({error: error.data})
        }
    }
)

// export const fetchFilters = createAsyncThunk(
//     'catalog/fetchFilters',
//     async (_, thunkAPI) => {
//         try {
//             return agent.Catalog.fetchFilters();
//         } catch (error) {
//             return thunkAPI.rejectWithValue({error: error.data})
//         }
//     }
// )

function initParams() {
    return {
        sort: 'name',
        category: 'Others',
        page: 1,
        limit:3
    }
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: productsAdapter.getInitialState({
        productsLoaded: false,
        filtersLoaded: false,
        status: 'idle',
        productParams: initParams(),
    }),
    reducers: {
        setProductParams: (state, action) => {
            state.productsLoaded = false;
            state.productParams = {...state.productParams, ...action.payload, page: 1};
        },
        setPageNumber: (state, action) => {
            state.productsLoaded = false;
            state.productParams = {...state.productParams, ...action.payload};
        },
        setMetaData: (state, action) => {
            state.metaData = action.payload;
        },
        resetProductParams: (state) => {
            state.productParams = initParams();
        },
        setProduct: (state, action) => {
            productsAdapter.upsertOne(state, action.payload);
            state.productsLoaded = false;
        },
        removeProduct: (state, action) => {
            productsAdapter.removeOne(state, action.payload);
            state.productsLoaded = false;
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchProductsAsync.pending, (state) => {
            state.status = 'pendingFetchProducts';
        });
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            productsAdapter.setAll(state, action.payload);
            state.status = 'idle';
            state.productsLoaded = true;
        });
        builder.addCase(fetchProductsAsync.rejected, (state, action) => {
            console.log(action.payload);
            state.status = 'idle';
        });
        builder.addCase(fetchProductAsync.pending, (state) => {
            state.status = 'pendingFetchProduct';
        });
        builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
            productsAdapter.upsertOne(state, action.payload);
            state.status = 'idle';
        });
        builder.addCase(fetchProductAsync.rejected, (state, action) => {
            console.log(action);
            state.status = 'idle';
        });
        // builder.addCase(fetchFilters.pending, (state) => {
        //     state.status = 'pendingFetchFilters';
        // });
        // builder.addCase(fetchFilters.fulfilled, (state, action) => {
        //     state.brands = action.payload.brands;
        //     state.types = action.payload.types;
        //     state.filtersLoaded = true;
        //     state.status = 'idle';
        // });
        // builder.addCase(fetchFilters.rejected, (state, action) => {
        //     state.status = 'idle';
        //     console.log(action.payload);
        // })
    })
})

export const productSelectors = productsAdapter.getSelectors((state) => state.catalog);

export const {setProductParams, resetProductParams, setMetaData, setPageNumber, setProduct, removeProduct} = catalogSlice.actions;