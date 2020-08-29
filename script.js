const butt = document.querySelector('.butt');
const result = document.getElementById('result');

function* createIdGenerator(){
    let i = 1;
    while(true)
    yield i++;
}

const idGenerator = createIdGenerator();

butt.addEventListener('click',() => {
result.innerHTML = idGenerator.next().value ;
})


