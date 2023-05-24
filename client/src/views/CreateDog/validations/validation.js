const validation = (form) => {

    const errors = {};

    if (!/^[A-Z]+$/i.test(form.name)) {
        errors.name = "The name cannot contain numbers or special characters."
    }

    if (form.name.length < 3 || form.name.length > 30) {
        errors.name = "The name cannot have less than 3 characters or more than 30."
    }
    
    
//----------------------------------------------------------------------
    let weight = form.weight.split(" ")

    if (weight[0] <= 0 || weight[1] <= 0) {
        errors.weight = "The minimum and maximum weight cannot be 0 or negative."
    }

    if (weight.length > 2  || weight.length < 2) {
        errors.weight = "Enter 2 different values."
    }

    if (weight[0]+1 > weight[1]+1) {
        errors.weight = "The minimum weight cannot be greater than maximum weight"
    }
    
//-------------------------------------------------------------------
    let height = form.height.split(" ")
    console.log(height[0], height[1])
    if (height[0] <= 0 || height[1] <= 0) {
        errors.height = "The minimum and maximum height cannot be 0 or negative."
    }
        
    if (height.length > 2  || height.length < 2) {
        errors.height = "Enter 2 different values."
    }
        
    if (height[0]+1 > height[1]+1) {
        errors.height = "The minimum height cannot be greater than maximum height"
    }

//-------------------------------------------------------------------
    let life_time = form.life_time.split(" ")

    if (life_time[0] <= 0 || life_time[1] <= 0) {
        errors.life_time = "The minimum and maximum life_time cannot be 0 or negative."
    }

    if (life_time.length > 2  || life_time.length < 2) {
        errors.life_time = "Enter 2 different values."
    }

    if (life_time[0]+1 > life_time[1]+1) {
        errors.life_time = "The minimum life_time cannot be greater than maximum life_time"
    }
    
    return errors;
}

export default validation;