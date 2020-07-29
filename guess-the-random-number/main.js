const input_elm = {
    seed: document.getElementById("seed-in"),
    multiplier: document.getElementById(`multi-in`),
    increment: document.getElementById(`inc-in`),
    modulus: document.getElementById(`mod-in`)
};
const output_elm = document.getElementById(`out`);

function getInputs() {
    return {
        seed: (String(Number(input_elm.seed.value)) == "NaN") ? 0 : input_elm.seed.value,
        multiplier: (String(Number(input_elm.multiplier.value)) == "NaN") ? 0 : input_elm.multiplier.value,
        increment: (String(Number(input_elm.increment.value)) == "NaN") ? 0 : input_elm.increment.value,
        modulus: (String(Number(input_elm.modulus.value)) == "NaN") ? 0 : input_elm.modulus.value
    }
};

const results = [];
let currentRead = 0;

function genValues(param) {
    resetView();
    let input = getInputs();
    let newSeed = input.seed;
    for (var k = 0; k < 10; k++) {
        let newSeedGen = (newSeed * input.multiplier + input.increment) % input.modulus;
        results[k] = newSeedGen;
        newSeed = newSeedGen;
    };
};

function resetView() {
    output_elm.innerHTML = ``;
    currentRead = 0;
};

function nextView() {
    if (currentRead >= 9) {
        return;
    }
    output_elm.innerHTML += `${results[currentRead]}\n`;
    currentRead++;
};