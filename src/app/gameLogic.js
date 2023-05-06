export function sort(arr) {
    let i = arr.length;
    while (--i > 0) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}

export function check(name, visited) {
    if (visited.length === 0) return false;
    return visited.includes(name) ? true : false;
}
