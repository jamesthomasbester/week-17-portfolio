console.log('working')
fetch('https://api.github.com/users/jamesthomasbester/repos')
    .then(response => response.json())
    .then(result => {
        result.forEach( element => {
            console.log(element)
            $('#body').append(`
                <div class="card mb-3 ${element.language}" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4 text-center" style="padding: 10px; color: black;">
                        <iframe src="https://jamesthomasbester.github.io/${element.name}"></iframe>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${element.name}</h5>
                                <a class="card-text">${element.html_url}</a>
                                <p class="card-text"><small class="text-muted">${element.updated_at}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        })
    })