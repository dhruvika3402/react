import React from 'react';

function course({changeCourse}) {
    let course = '';
    if(changeCourse === 'Rw1'){
        course = 'Android';
    }
    else if(changeCourse === 'Rw2'){
        course = 'node js';
    }
    else if(changeCourse === 'Rw3'){
        course = 'react js';
    }else if(changeCourse === 'Rw4'){
        course = 'flutter';
    }else if(changeCourse === 'Rw5'){
        course = 'ios';
    }
    return (
        <div>
            <div>course = {course}</div>
        </div>
    );
}

export default course;