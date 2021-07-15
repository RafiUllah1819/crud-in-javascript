let data = [];
let index;

const set = () => {
    const tbody = document.getElementById("data");
    data = get();
    const output = data.map((user, i) => {
      return `<tr>
        
          <td><input type="checkbox" ${user.check?"checked=''":""} /></td>
          <td>${user.name}</td>
          <td>${user.age}</td>
          <td>${user.address}</td>
          <td>${
            user.valid
              ? `<button class="btn btn-success" onclick="enable_disable(${i})">Enabled</button>`
              : `<button class="btn btn-danger" onclick="enable_disable(${i})">Disabled</button>`
          }</td>
          <td>
            <button class="btn btn-info" onclick="update(${i})">Edit</button>
            <button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button>
          </td>
        </tr>`;
    });
    tbody.innerHTML = output.join("");
}
const form = () => {
    const div = `
    <div class="col-sm-12">
          <br />
          <div class="form-group">
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <br />
          <div class="form-group">
            <input
              type="text"
              id="age"
              class="form-control"
              placeholder="Age"
            />
          </div>
          <br />
          <div class="form-group">
            <input
              type="text"
              id="address"
              class="form-control"
              placeholder="Address"
            />
          </div>
          <br />
          <div class="form-group">
            <label>Valid:</label>
            <input type="checkbox" id="valid" />
          </div>
          <div class="form-group" style="text-align: right">
            <button type="b+-utton" onclick="reset()" class="btn btn-primary">
              Reset
            </button>
            <input
              type="button"
              onclick="add_update()"
              id="btn"
              value="Add"
              class="btn btn-success"
            />
          </div>
          <br />
        </div>
    `
    const formData = document.getElementById('form');
    formData.innerHTML = div
}
function fields() {
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const address = document.getElementById("address");
    const valid = document.getElementById("valid");
    const button = document.getElementById("btn");
 
    const props = { name, age, address, valid, button };
    return props;
  }

  const get = () => {
    let str = localStorage.getItem('locals');
    if(!str){
      return []
    }
    let arr = str.split("|");
    let arr2 = arr.map((item)=>JSON.parse(item))
    return arr2
  }
  const put = (array) => {
    let str = array.map((item)=>`{"name":"${item.name}","address":"${item.age}","program":"${item.address}"}`)
    let stringData = str.join('|')
    localStorage.setItem('locals',stringData);
  }

//   const put = (array) =>{
//   let str = array.map((item)=>`{"name": "${item.name}", "age":"${item.age}",
//   "address":${item.address}"}`)
//   let storageData = str.join("|");
//   console.log(storageData)
//   localStorage.setItem('local',storageData);
// } 
    const update = (i) =>{
    let item = data[i]
    
    let {name,age, address, valid, button} = fields()
    name.value = item.name;
    age.value = item.age;
    address.value =item.address;
    button.value ='Update';
    index = i;
}
const add_update = () => {
    const { name, age, address, valid, button } = fields(); 
    const user = {
      name: name.value,
      age: age.value,
      address: address.value,
    };
    if (button.value === "Add") {
        data.push(user);
        put(data);
    }else {
        data.splice(index, 1, user)
        put(data);
    }
    set();
    reset();
}
const deleteUser = (i) =>{
 
    data = data.filter((items, index)=>index !=i)
    put(data)
    set()
}
function reset() {
    let { name, age, address, valid, button } = fields();
    name.value = "";
    age.value = "";
    address.value = "";
    valid.checked = false;
    button.value = "Add";
  }
const main = () => {
  const token = localStorage.getItem('token');
  if(token){
    const content = document.getElementById('content');
    const sec = document.getElementById('sec');
    content.style.display = 'block';
       sec.style.display = 'none';

  }
    form();
    set();
}
const logout = () => {
  localStorage.removeItem('token');
  const content = document.getElementById('content');
    const sec = document.getElementById('sec');
    content.style.display = 'none';
    sec.style.display = 'block';
  // main();
}
main();











function hi(a){
  console.log(a)
}
hi("Hi");
hi(data);