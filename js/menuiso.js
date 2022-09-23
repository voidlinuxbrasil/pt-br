const x86 = document.querySelector('.x86');
const x86btn = document.getElementById('btn-x8664');
const btnx86 = document.getElementById('btn');

const i686 = document.querySelector('.i686');
const i686btn = document.getElementById('i686');
const btni686 = document.getElementById('btn1');

const arm = document.querySelector('.arm');
const armbtn = document.getElementById('arm');
const btnarm = document.getElementById('btn2');

const armplat = document.querySelector('.arm-plat');
const platbtn = document.getElementById('platarm');
const btnplat = document.getElementById('btn3');

function mostrarX86(){

    x86.style.display = 'grid';
    btnx86.style.borderBottom = '2px solid #295340';
    i686.style.display = 'none';
    btni686.style.borderBottom = '2px solid #fff';
    arm.style.display = 'none';
    btnarm.style.borderBottom = '2px solid #fff';
    armplat.style.display = 'none';
    btnplat.style.borderBottom = '2px solid #fff';
}



function mostrarI686(){

    i686.style.display = 'grid';
    btni686.style.borderBottom = '2px solid #295340';
    x86.style.display = 'none';
    btnx86.style.borderBottom = '2px solid #fff';
    arm.style.display = 'none';
    btnarm.style.borderBottom = '2px solid #fff';
    armplat.style.display = 'none';
    btnplat.style.borderBottom = '2px solid #fff';
}

function mostrarArm(){

    arm.style.display = 'grid';
    btnarm.style.borderBottom = '2px solid #295340';
    x86.style.display = 'none';
    btnx86.style.borderBottom = '2px solid #fff';
     i686.style.display = 'none';
    btni686.style.borderBottom = '2px solid #fff';
    armplat.style.display = 'none';
    btnplat.style.borderBottom = '2px solid #fff';
}

function mostrarPlat(){

    armplat.style.display = 'grid';
    btnplat.style.borderBottom = '2px solid #295340';
    x86.style.display = 'none';
    btnx86.style.borderBottom = '2px solid #fff';
     i686.style.display = 'none';
    btni686.style.borderBottom = '2px solid #fff';
    arm.style.display = 'none';
    btnarm.style.borderBottom = '2px solid #fff';
}

x86btn.addEventListener('click', mostrarX86);
i686btn.addEventListener('click', mostrarI686);
armbtn.addEventListener('click', mostrarArm);
platbtn.addEventListener('click', mostrarPlat);
