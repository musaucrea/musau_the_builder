function calculateBMI() {
    // Get weight and height values from input fields
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Check if weight and height values are provided
    if (weight && height) {
        // Convert height from cm to meters
        const heightInMeters = height / 100;

        // Calculate BMI
        const bmi = weight / (heightInMeters * heightInMeters);

        // Display the result
        const result = document.getElementById('result');
        result.textContent = `Your BMI is ${bmi.toFixed(2)}`;

        // Provide BMI category based on the result
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
        result.textContent += ` (${category})`;
    } else {
        alert('Please enter both weight and height.');
    }
}
