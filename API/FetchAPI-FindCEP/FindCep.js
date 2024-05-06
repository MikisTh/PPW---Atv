const validate_cep = (cep) => {
    cep = cep.replace(/[^0-9]/gi, "");
    if (cep.length == 8) {
        return cep;
    }
    throw `CEP "${cep}" format invalid`
}

const apiCep = (cep) => `https://example.api.findcep.com/v1/cep/${cep}.json`
let cep_search = validate_cep('01001-001');

let myHeaders = new Headers();
myHeaders.append('Referer', 'https://your-site.com');

// api cep javascript usando fetch callbacks 
fetch(apiCep(cep_search), { headers: myHeaders})
    .then((responseObj) => {
        responseObj.json()
            .then((data) => console.log(data));
    });

// api cep javascript usando async and await
var getCep = async (cep) => {
    let response = await fetch(apiCep(cep_search));
    let cepJson = await response.json()
    return cepJson;
}

getCep(cep_search).then(cep => console.log(cep));
