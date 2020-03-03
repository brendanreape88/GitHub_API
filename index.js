'use strict';

const apiKey = ""

const searchURL = "";







function getRepos(searchTerm){

}


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchTerm = $('#js-search-term').val();
        getRepos(searchTerm);
    });
}

$(watchForm);