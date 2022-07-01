const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);


function handleUpdate() {

    // console.log(this.value);
    // console.log(this.dataset);

    const suffix = this.dataset.sizing || '';         // '||' means 'OR'  and   '' means nothings.

    // console.log(suffix);
    // console.log(this.name,this.value);

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    // console.log(document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix))
}

//change event on each of the event--

inputs.forEach(input => input.addEventListener('change', handleUpdate));

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));