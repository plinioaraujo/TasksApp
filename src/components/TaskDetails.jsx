import React from 'react';
import { useParams, useHistory } from 'react-router-dom';


import './TaskDetails.css'
import Button from './Button';
const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () =>{
        history.goBack();
    }

    return ( 
        <>
            <div className="task-button-container" onClick={()=>handleBackButtonClick()}>
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quisquam est dolore mollitia, quas cupiditate itaque doloremque, repudiandae necessitatibus dolor expedita ullam esse autem natus atque aliquam adipisci nemo magnam!
                </p>
            </div>
        </>

     );
}
 
export default TaskDetails;