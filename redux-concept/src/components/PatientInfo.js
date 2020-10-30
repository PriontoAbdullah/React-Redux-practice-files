export const patientState = {
    patient: []
}

export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            
            const allPatients = [...state.patient, newPatient ]
            return {patient: allPatients};

        case 'REMOVE_PATIENT':
            const remainingPatients = state.patient.filter(pt => pt.id !== action.id);
            const newState = {patient: remainingPatients}
            return newState ;

        default:
            return state; 
    }
}