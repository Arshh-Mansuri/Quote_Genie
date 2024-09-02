document.addEventListener('DOMContentLoaded',function(){
    console.log('The DOM content is loaded.')
    const button = document.getElementById('new-quote');
    button.addEventListener('click',generatequote);


    function generatequote(){
        console.log("helo")
        fetch('https://api.quotable.io/random')
        .then (response => response.json())
        .then(data =>{

            document.getElementById('quote').innerHTML=`"${data.content}"`;
            document.getElementById('author').innerHTML=`"${data.author}"`;


        });
       

    }

});