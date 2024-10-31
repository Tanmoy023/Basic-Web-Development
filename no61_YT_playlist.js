let videoNo = 0;
function myFunction(VideoLink, thumbnail, duration, title, cName, views, monthsOld){
    videoNo++;
    let viewStr;
    if(views < 1000000){
        viewStr = Math.ceil(views/1000) + "K";
    }
    else if(views>=1000000){
        viewStr = Math.ceil(views/1000000) + "M";
    }
    else{
        viewStr = views;
    }
    let html = `
    <a href="${VideoLink}" target="_blank">
    <div class="box">
        <div class="sl-no">
            <p>${videoNo}</p>
        </div>
        <div class="thumbnail">
            <img src="${thumbnail}"
                alt="thumbnail">
            <p class="duration">${duration}</p>
        </div>
        <div class="containt">
            <div class="title">${title}</div>
            <div class="info">
                ${cName} . ${viewStr} . ${monthsOld} months ago
            </div>
        </div>
        <div class="ThreeDot">
            <svg fill="white" height="800px" width="800px" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32.055 32.055" xml:space="preserve">
                <g>
                    <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
    C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
    s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
    c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z" />
                </g>
            </svg>
        </div>
    </div> </a> `
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}
myFunction(" https://youtu.be/tVzUXW6siu0?si=7tBlvDm_dMAfyiyv", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ", "31:20", "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 567567, 4);
 
myFunction(" https://youtu.be/kJEsTjH5mVg?si=-ZomNi7e9JvD4aHY", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg", "28:31", "Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", 104945324, 3);

myFunction(" https://youtu.be/BGeDBfCIqas?si=4xzL6FVC1PlV6UW2", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAjPtvUdoA1O40DUFC8U1NdTYLk1g", "11:12", "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3", "CodeWithHarry", 78634688, 2);
