document.addEventListener('DOMContentLoaded', function(){
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questonTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    
    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    });
    
    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    });

    const playTest = () => {
        const renderQuestions = () => {
            const imgStandart = './image/burger.png';
            const nameStandart = 'Стандарт';
            const imgBlack = './image/burgerBlack.png';
            const nameBlack = 'Чорний';

            questonTitle.textContent = 'Якого кольру бургер ви бажаєте?';

            formAnswers.innerHTML = ` 
             <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                <img class="answerImg" src="./image/burger.png" alt="burger">
                <span>Стандарт</span>
                </label>
            </div>`
        }  
        renderQuestions();  
    }
})

