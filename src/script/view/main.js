   import { result } from "../data/dataResult.js";
   import { putData,renderHistoryData } from "../model/storage.js";
const main = () => {
  

   const btnCalculation = document.querySelector('button-calculation');
  
 

   const examDate = () => {
      const nowDate = new Date();
      return nowDate.toISOString();
   }



   // Function
   const onClickedFinishButton = () => {
      const trueAnswer = 5;
      const falseAnswer = 0;
      let temp = [];
      let resultQuis = 0;
   
      const firstAnswerExam = document.querySelector('#firstAnswerA').value.toLowerCase();
      const secondAnswerExam = document.querySelector('#secondAnswerA').value.toLowerCase();
      const thirdAnswerExam = document.querySelector('#thirdAnswerA').value.toLowerCase();
      const fourthAnswerExam = document.querySelector('#fourthAnswerA').value.toLowerCase();
      const fifthAnswerExam = document.querySelector('#fifthAnswerA').value.toLowerCase();
      const sixAnswerExam = document.querySelector('#sixAnswerA').value.toLowerCase();


      let firstExam = document.getElementsByName('first-exam-answer');
      for(let index = 0; index <= firstExam.length-1; index++) {
               if(firstExam[index].checked) {
               if(firstExam[index].value.toLowerCase() == firstAnswerExam) {
                     temp.push(trueAnswer);
               } else {
                  temp.push(falseAnswer);
               }
            }

           
         }

         let secondExam = document.getElementsByName('second-exam-answer');
      for(let firstindex = 0; firstindex <= secondExam.length-1; firstindex++) {
               if(secondExam[firstindex].checked) {
               if(secondExam[firstindex].value.toLowerCase() == secondAnswerExam) {
                     temp.push(trueAnswer);
               } else {
                  temp.push(falseAnswer);
               }
            }
         }


         let thirdExam = document.getElementsByName('third-exam-answer');
         for(let secondindex = 0; secondindex <= thirdExam.length-1; secondindex++) {
                  if(thirdExam[secondindex].checked) {
                  if(thirdExam[secondindex].value.toLowerCase() == thirdAnswerExam) {
                        temp.push(trueAnswer);
                  } else {
                     temp.push(falseAnswer);
                  }
               }
            }

            let fourthExam = document.getElementsByName('fourth-exam-answer');
            for(let thirdindex = 0; thirdindex <= fourthExam.length-1; thirdindex++) {
                     if(fourthExam[thirdindex].checked) {
                     if(fourthExam[thirdindex].value.toLowerCase() == fourthAnswerExam) {
                           temp.push(trueAnswer);
                     } else {
                        temp.push(falseAnswer);
                     }
                  }
               }
   
               let fifthExam = document.getElementsByName('fifth-exam-answer');
               for(let fourthindex = 0; fourthindex <= fifthExam.length-1; fourthindex++) {
                        if(fifthExam[fourthindex].checked) {
                        if(fifthExam[fourthindex].value.toLowerCase() == fifthAnswerExam) {
                              temp.push(trueAnswer);
                        } else {
                           temp.push(falseAnswer);
                        }
                     }
                  }

                  let sixExam = document.getElementsByName('six-exam-answer');
                  for(let fifthindex = 0; fifthindex <= sixExam.length-1; fifthindex++) {
                           if(sixExam[fifthindex].checked) {
                           if(sixExam[fifthindex].value.toLowerCase() == sixAnswerExam) {
                                 temp.push(trueAnswer);
                           } else {
                              temp.push(falseAnswer);
                           }
                        }
                     }
      
                  temp.forEach((value) => {
                        resultQuis += value;
                  })
   
                  result.score = resultQuis;
                  result.dateExam = examDate();
                  
                  putData(result);
                  renderHistoryData();
              
               
        
      }
         btnCalculation.eventClick = onClickedFinishButton; 
         
}




export {main}