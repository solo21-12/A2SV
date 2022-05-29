function gradingStudents(grades) {
    // Write your code here


    const result = grades.map(value => {
        if (value < 38) {
            return value;
        }
        else if (value % 5 < 3) {
            return value;
        }
        else {
            let vars = 5 - (value % 5);
            return value + vars;
        }
    });
    return result;
}