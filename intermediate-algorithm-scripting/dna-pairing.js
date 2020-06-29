function pairElement(str) {
    let dna = [];
    let pairs = str.split('');

    for (let molecule of pairs) {
        if (molecule === "A") dna.push(["A", "T"]);
        else if (molecule === "T") dna.push(["T", "A"]);
        else if (molecule === "C") dna.push(["C", "G"]);
        else if (molecule === "G") dna.push(["G", "C"]);
    }

    return dna;
}

pairElement("GCG");
// Returns [ ['G', 'C'], ['C', 'G'], ['G', 'C']]