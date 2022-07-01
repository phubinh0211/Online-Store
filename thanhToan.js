let currDate = 
                new Date().toISOString().slice(0, 10)
                    .split('-').reverse().join('/');
                      
            let inputDate = new Date();
const inputDay = document.getElementById("day")
inputDay.valueAsDate = inputDate;