var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){
      
    var salaryArray = [];
    console.log(exercise.salaries)
    for (i = 0; i < exercise.salaries.length; i++) { 
        if (exercise.salary < Number(exercise.salaries[i][18])) {
            salaryArray.push(Number(exercise.salaries[i][18]));
        }
    }

    return salaryArray
    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------

};

// filter function
exercise.largerSalary = function largerSalary(item){
    var value = True
    if (item>exercise.salary) {
       return True
    }
    else {
        return False
    }
    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------

};