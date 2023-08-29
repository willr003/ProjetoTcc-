
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    /* setTimeout: uma função que recebe dois parametros, a primeira é uma função
        e a segunda é um tempo. ele vai esperar o determinado tempo e depois executar a função. 
        da mesma forma funciona o setInterval.   */
 setTimeout(() => {
    mario.classList.remove('jump');
 }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

const pipeposition = pipe.offsetLeft;
const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');

/* A condicional if é uma estrutura condicional que executa a afirmação dentro do bloco, 
se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.
então nesse caso se o pipeposition que é o deslocamento da esquerda for menor ou  igual a 100,
quer dizer que o sonic ja beteu no obstáculo, com isso o game é parado. */
if (pipeposition <= 100 && pipeposition >0 && marioposition < 80) {
   
    pipe.style.animation = 'none';
    pipe.style.left = `${pipeposition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioposition}px`;

    mario.src = ' /images/oversonic.png';
    mario.style.width= '80px'
    
    clearInterval(loop);

    
}   

    
}, 10);



/* javascript função keydown: dispara quando qualquer tecla é pressionada. que nesse caso qualquer tecla
pressionada dispara o pulo do sonic */

document.addEventListener('keydown', jump);
  
