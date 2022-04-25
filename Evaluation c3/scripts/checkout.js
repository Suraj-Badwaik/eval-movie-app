// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

 let amount = JSON.parse(localStorage.getItem('amount')) ;
    console.log('amount:', amount)

    document.getElementById('wallet').innerText = amount
    

let movie = JSON.parse(localStorage.getItem('movie')) || [];
console.log('movie:', movie)

    let poster = document.createElement('img')
    poster.src = movie.Poster;

    let imgDiv = document.createElement('div')
    imgDiv.setAttribute('class','imgDiv')
    imgDiv.append(poster);

    let title = document.createElement('p')
    title.innerText = 'Title: '+movie.Title;

    let titleDiv = document.createElement('div')
    titleDiv.setAttribute('class','titleDiv')
    titleDiv.append(title)
    
    document.getElementById('movie').append(imgDiv,titleDiv)





function bookMovie(){

    // let amount = JSON.parse(localStorage.getItem('amount')) ;
    // console.log('amount:', amount)

    // document.getElementById('wallet').innerText = amount

    let no_of_seats = document.getElementById('number_of_seats').value ;
    console.log('no_of_seats:', no_of_seats)

    let total_fair =  no_of_seats * 100 ;
    console.log('total_fair:', total_fair);

    if(total_fair>amount){
        alert('Insufficient Balance!');
        return false;
    }
    else{
        let new_amount = amount - total_fair;
        document.getElementById('wallet').innerText = new_amount;
        alert('Booking successful!');
        return;
    }

}

