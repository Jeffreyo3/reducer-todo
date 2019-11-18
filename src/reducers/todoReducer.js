export const initialState = {
    todos: [
    {
        item: 'Learn about reducers',
        completed: true,
        id: 1
    },
    {
        item: 'Write about reducers',
        completed: false,
        id: 2
    },
    {
        item: 'Create a reducer',
        completed: false,
        id: 3
    },
    {
        item: 'Teach about reducers',
        completed: false,
        id: 4
    }
]};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_COMPLETED":
            return( { ...state, completed: !state.todos.completed }
            );

        case "ADD_TODO":
            return(
                {...state, todos: [...state.todos, {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                    }]
                }
            );


        default:
            return state;
        };
};