document.addEventListener('DOMContentLoaded', function() {
    getEvents()
})

function getEvents () {
        fetch('events/get')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                console.log(response)

            })
            .catch(function(err) {
                console.log("Error: ", err)
            })
}

