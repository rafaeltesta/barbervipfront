export const initialState = {
    cdUser: '',
    nome: '',
    cdBarbeiro: '',
    agendamentos: []
};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setCdUser':
            return { ...state, cdUser: action.payload.cdUser };
            break;
        case 'setNome':
            return { ...state, nome: action.payload.nome };
            break;
        case 'setCdBarbeiro':
            return { ...state, cdBarbeiro: action.payload.cdBarbeiro };
            break;
        case 'setAgendamentos':
            return { ...state, agendamentos: action.payload.agendamentos };
            break;
        default:
            return state;
    }
}