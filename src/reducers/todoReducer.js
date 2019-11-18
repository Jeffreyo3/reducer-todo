export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Write about reducers',
        completed: false,
        id: 3892987590
    },
    {
        item: 'Create a reducer',
        completed: false,
        id: 3892987591
    },
    {
        item: 'Teach about reducers',
        completed: false,
        id: 3892987592
    }
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_COMPLETED":
            return { ...state, completed: !state.completed };
        default:
            return state;
    }
};