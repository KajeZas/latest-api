fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=LryYjg5vMt60tY0E51618Og8HoMZDqH3')
    .then((data)=>{
        return data.json();
    })
    .then((objectData)=>{
        console.log(objectData.results[0].title);
        let tableData="";
        objectData.results.map((oneartical)=>{
            tableData+=`
            <div class="postas">
                <h6>${oneartical.section}</h6>
                <h5>${oneartical.title}</h5>
                <p>${oneartical.abstract}</p>
                <img src="${oneartical.multimedia[0].url}"/>
                <a href="${oneartical.url}" class="read">Read more...</a>
            </div>
            `;
        });
        document.getElementById("nyt").innerHTML=tableData;
    })

    // <div class="intro">
    //      <p>${values.title}</p>
    // </div>