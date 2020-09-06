const butt = document.querySelector('.butt');
const result = document.getElementById('result');

function* createIdGenerator(){
    let id = 1;
    while(true)
    yield id++;
}

const idGenerator = createIdGenerator();

butt.addEventListener('click',() => {
result.innerHTML = idGenerator.next().value ;
})


