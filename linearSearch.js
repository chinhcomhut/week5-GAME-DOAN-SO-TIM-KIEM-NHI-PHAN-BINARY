function linearSearch(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (index ==arr[i]) {
            alert("index in arr, position: " + i);
            break;
        }
        if (i == arr.length - 1) {
            alert("index not in arr!");
            break;
        }
    }
}