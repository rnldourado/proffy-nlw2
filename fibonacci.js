const fibonacci = () => {
    const sequence = [1,1];
    for (let i = 2; i < 50; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence; 
}

console.log(fibonacci())