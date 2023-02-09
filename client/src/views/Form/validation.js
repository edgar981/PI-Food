export default function validate (inputs) {
    const errors = {};

    if (!inputs.name){
        errors.name = 'Por favor, completa este campo';
    } else if (inputs.name > 40){
        errors.name = 'El nombre debe contener menos caracteres';
    }
    if (inputs.healthScore > 100 || inputs.healthScore < 0){
        errors.healthScore = 'El valor del healthscore debe estar entre 0 y 100'
    }
    if (inputs.summary.length < 15){
        errors.summary = 'Debe contener una descripción del plato';
    }

    return errors;
}