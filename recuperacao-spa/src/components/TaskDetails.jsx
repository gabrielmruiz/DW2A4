import React from 'react';
import Button from './Button';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
           <div className="back-button-container">
               <Button onClick={handleBackButtonClick}>Voltar</Button>
           </div>
           <div className="task-details-container">
               <h3>{params.taskTitle}</h3>
               <p>
                 Essa tarefa não está completa devido a....
               </p>    
           </div> 
        </>
     );
}
 
export default TaskDetails;