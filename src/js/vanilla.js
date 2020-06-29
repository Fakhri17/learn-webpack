import apiData from "../common/serviceAPI";

// Get Users
apiData.getUsers().then(json => json.forEach((val, key) => {
    const li = document.createElement('li');
    li.innerText = ' Name: ' + val.name + ' - ' + ' Email: ' + val.email;
    const ul = document.querySelector('ul#listUsers');
    ul.appendChild(li);
    console.log(val);
    })
  );
  
  // Get Posts
  apiData.getPosts().then(json =>  json.forEach((val, key) => {
    const wrapper = document.createElement('div')
    const title = document.createElement('h3');
    const desc = document.createElement('p');
    const divider = document.createElement('hr')
    title.innerText = val.title.toUpperCase();
    desc.innerText = val.body;
    const container = document.getElementById('listPost')
    wrapper.appendChild(title);
    wrapper.appendChild(desc)
    container.appendChild(wrapper) 
    container.appendChild(divider)
    console.log(val);
    })
  );