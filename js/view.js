import { putData, renderData } from "./model.js";

const USERDATA = {
    namauser: null,
    userdate: null,
    scoreuser: null
} 



const showForm = function() {
    
    const containerPopup = document.querySelector('.container-popup');
    containerPopup.removeAttribute('hidden');

}

const formUser = () => {
    const formData = document.querySelector('.formData');
    formData.addEventListener('submit', (event) => {
        const username = document.querySelector('.username').value.toLowerCase();
        const dateUser = document.querySelector('.date').value.toLowerCase();
        const containerPopUp = document.querySelector('.container-popup');

        USERDATA.namauser = username;
        USERDATA.userdate = dateUser;

      
        containerPopUp.remove();
        event.preventDefault();
    })
}

const calcScoreFunction = () => {
    const btnScore = document.querySelector('.btnAnswer');
    btnScore.addEventListener('click', () => {
    
        let temp = [];
        let score = 0;
        let trueAnswer = 5;
        let falseAnswer = 0;
        // The right answer
        const firstA = document.querySelector('#firstA').value;
        const secondA = document.querySelector('#secondA').value;
        const thirdA = document.querySelector('#thirdA').value;
        const fourA = document.querySelector('#fourA').value;
    
         const firstExam = document.getElementsByName('firstExam');
         for(let index = 0; index <= firstExam.length-1; index++) {
             if(firstExam[index].checked) {
                if(firstExam[index].value == firstA) {
                    temp.push(trueAnswer);
                } else {
                    temp.push(falseAnswer);
                }
             }
         }  
         
         const secondExam = document.getElementsByName('secondExam');
         for(let index2 =0; index2 <= secondExam.length-1; index2++) {
                if(secondExam[index2].checked) {
                    if(secondExam[index2].value == secondA) {
                        temp.push(trueAnswer);
                    } else {
                        temp.push(falseAnswer);
                    }
                }
         }
    
         const thirdExam = document.getElementsByName('thirdExam');
         for(let index3 = 0; index3 <= thirdExam.length-1; index3++) {
             if(thirdExam[index3].checked) {
                 if(thirdExam[index3].value == thirdA) {
                     temp.push(trueAnswer);
                 } else {
                     temp.push(falseAnswer);
                 }
             }
         }
    
         const fourExam = document.getElementsByName('fourExam');
         for(let index4=0; index4 <= fourExam.length-1; index4++) {
             if(fourExam[index4].checked) {
                 
                 if(fourExam[index4].value == fourA) {
                     temp.push(trueAnswer);
                 } else {
                     temp.push(falseAnswer);
                    
                 }
             }
         }
         console.log(temp);
    
         temp.forEach((result) => {
           score = parseInt(score + result);
         });
    
         USERDATA.scoreuser = score;
         putData(USERDATA);
         renderData();
      

         try {
            if(USERDATA.namauser == null || USERDATA.namauser == '', USERDATA.userdate == null || USERDATA.userdate == '') {
                throw new SyntaxError('Form data tidak boleh kosong');
            }
                
           
         } catch (error) {

            if(error instanceof SyntaxError) {
                alert(error.message);
                location.reload();
            }
         }



    })
    
    }



export {showForm,formUser,calcScoreFunction};