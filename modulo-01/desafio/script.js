async function loadUsers() {
    const url = "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
    const response = await fetch(url);
    const users = await response.json();
    handleUsers(users.results);
}


function setValueElement(element, value) {
    document.querySelector(element).innerHTML = value
}

function getTotalMen(users) {
   return users.filter(user => user.gender === "male").length
}

function setTotalMen(total) {
    setValueElement("#total-men", total)
}

function getTotalWomen(users) {
   return users.filter(user => user.gender === "female").length
}

function setTotalWomen(total) {
    setValueElement("#total-women", total)
}

function getTotalAge(users) {
    return users
        .map(user => user.age)
        .reduce((sum, age) => sum + age, 0)
}

function setTotalAge(total) {
    setValueElement("#total-age", total)
}

function getAverageAge(users) {
   return getTotalAge(users) / users.length
}

function setAverageAge(total) {
    setValueElement("#average-age", total)
}

function getUserFields(user) {
    return {
        picture: user.picture.medium,
        name: user.name.first+" "+user.name.last,
        gender: user.gender,
        age: user.dob.age
    }
}

function clearUserList() {
   document
    .querySelector("#user-list")
    .innerHTML = ""
}

function clearStatisticData() {
    document
        .querySelectorAll("#statistics-data ul li span")
        .forEach(item => item.innerHTML = "")
}

function appendUserToList(user) {
    const userElement = `
        <div class="row valign-wrapper">
            <div class="col s2">
                <img src="${user.picture}" alt="" class="circle responsive-img">
            </div>
            <div class="col s10">
                <p>${user.name}, ${user.age} anos</p>
            </div>
        </div>
     `;

    document
        .querySelector("#user-list")
        .insertAdjacentHTML('beforeend', userElement)
}

function filterUserList(users) {
    const filter = document.querySelector("#busca").value
    return users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
}


function handleUsers(users) {
    clearUserList();
    clearStatisticData();

    const mappedUsers = users.map(getUserFields)
    const filteredUsers = filterUserList(mappedUsers)
    filteredUsers.forEach(appendUserToList);
    const totalMen = getTotalMen(filteredUsers);
    const totalWomen = getTotalWomen(filteredUsers);
    const totalAges = getTotalAge(filteredUsers);
    const averageAge = getAverageAge(filteredUsers);
    
    console.log(totalMen, totalWomen, totalAges, averageAge)

    setTotalMen(totalMen);
    setTotalWomen(totalWomen);
    setTotalAge(totalAges);
    setAverageAge(averageAge);
}


document
.querySelector("#buscar")
.addEventListener("click", loadUsers);