document.getElementById('bioDataform').addEventListener('submit', function(event){
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const club = document.getElementById('club').value;
    const age = document.getElementById('age').value;


    console.log('Form submitted:', { name, email, club, age });


    alert(`Thank you for submitting your information, ${name}!`);


    this.reset();
});
