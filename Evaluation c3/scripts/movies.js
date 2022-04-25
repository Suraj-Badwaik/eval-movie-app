// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount = JSON.parse(localStorage.getItem('amount')) ;
    console.log('amount:', amount)

document.getElementById('wallet').innerText = amount


let id;
async function searchMovies(){

    try{
        let query = document.getElementById('search').value ;

    const res= await fetch(`https://www.omdbapi.com/?apikey=34bbb2f5&s=${query}`)

    let data = await res.json();
    console.log('data:', data)
    let movies = data.Search;
    return movies;

    }
    catch(err){
     console.log('err:', err)
    }
}

function append(data){

    let movies = document.getElementById('movies');
    movies.innerHTML=null;

    data.forEach(function(el,index){

        let movieBox = document.createElement('div')
        movieBox.setAttribute('class','movieBox')

        let img = document.createElement('img')
        img.src = el.Poster;

        let imgDiv = document.createElement('div')
        imgDiv.setAttribute('class','imgDiv')
        imgDiv.append(img)

        let title = document.createElement('p')
        title.innerText = el.Title;

        let book = document.createElement('button')
        book.innerText = 'Book Movies'
        book.addEventListener('click',function(){
            bookMovies(el);
        })

        let titleDiv = document.createElement('div')
        titleDiv.setAttribute('class','titleDiv')
        titleDiv.append(title,book)

        movieBox.append(imgDiv,titleDiv)

        movies.append(movieBox)

    })
}

async function main(){

    let data = await searchMovies();

    if(data===undefined)
    {
        return false;
    }

    append(data);
}




function debounce(func,delay){
    
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func();
    },delay)
}


let movieArr= JSON.parse(localStorage.getItem('movie')) || [];

function bookMovies(el){

    console.log('el:', el)
    // movieArr.push(el)
    // localStorage.setItem('movie',JSON.stringify(movieArr));
    localStorage.setItem('movie',JSON.stringify(el));
    window.location.href= 'checkout.html'
    
}
















// Poster: "https://m.media-amazon.com/images/M/MV5BZDNlN2VkNjAtYWJmMi00NTllLThiODgtZTg1NTQxNzE2NjFhXkEyXkFqcGdeQXVyNjc4NTExMTk@._V1_SX300.jpg"
// Title: "Some Mothers Do 'Ave 'Em"
// Type: "series"
// Year: "1973–1978"
// imdbID: "tt0069634"