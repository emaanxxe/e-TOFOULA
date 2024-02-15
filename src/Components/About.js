import React from 'react';
 // Assurez-vous d'importer votre fichier de style CSS pour le modal

function Modal() {
    return (
        <div className="modal" id="about">
            <form className="form">
                <div className="banner"></div>
                <h1 class="title">Mental Health</h1>
    
                <div className="description">
                    <p>Being mentally healthy during childhood means reaching developmental and emotional milestones and learning healthy social skills and how to cope when there are problems. Mentally healthy children have a positive quality of life and can function well at home, in school, and in their communities.

Mental disorders among children are described as serious changes in the way children typically learn, behave, or handle their emotions, which cause distress and problems getting through the day. Many children occasionally experience fears and worries or display disruptive behaviors. If symptoms are serious and persistent and interfere with school, home, or play activities, the child may be diagnosed with a mental disorder.

Helping children cope with stress and worries
School aged children on a playground
Easy-to-use, interactive web tools for children and teens to deal with thoughts and feelings in a healthy way.

Mental health is not simply the absence of a mental disorder. Children who don’t have a mental disorder might differ in how well they are doing, and children who have the same diagnosed mental disorder might differ in their strengths and weaknesses in how they are developing and coping, and in their quality of life. Mental health as a continuum and the identification of specific mental disorders are both ways to understand how well children are doing.</p>
                    <br></br>
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8835536/" target='_blanck' className='article'>Learn more...</a>
                    <br></br><br></br><br></br><br></br>
                </div>
            </form>
        </div>
    );
}

export default Modal;
