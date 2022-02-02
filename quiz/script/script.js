document.addEventListener('DOMContentLoaded', function(){
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questonTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    });
    
    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    });

    const playTest = () => {
        let numberQuestion = 0;

        const renderAnswers = (index) => {
            questions[index].answers.forEach(answer =>{
                const answerItem = document.createElement('div');

                if(numberQuestion === 0) {
                    prevButton.style.display = "none";
                }
                else {
                    prevButton.style.display = "block";
                }

                if(numberQuestion === questions.length-1) {
                    nextButton.style.display = "none";
                }
                else {
                    nextButton.style.display = "block";
                }
                
                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');

                answerItem.innerHTML = ` 
                <div class="answers-item d-flex flex-column">
                    <input type="${questions[index].type}" id="{$answer.title}" name="answer" class="d-none">
                    <label for="{$answer.title}" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="${answer.url}" alt="burger">
                    <span>${answer.title}</span>
                    </label>
                </div>
                `;

                formAnswers.appendChild(answerItem);
            });
        }  

        const renderQuestions = (indexQuestion) =>{;
            formAnswers.innerHTML = ``;

            questonTitle.innerHTML = `${questions[indexQuestion].question}`;

            renderAnswers(indexQuestion);
        }

        renderQuestions(numberQuestion);

        nextButton.onclick = () => {
            numberQuestion++;
            renderQuestions(numberQuestion);
        }

        prevButton.onclick = () => {
            numberQuestion--;
            renderQuestions(numberQuestion);
        }
    }    
})

