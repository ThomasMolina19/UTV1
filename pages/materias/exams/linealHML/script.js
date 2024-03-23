let cos = 0;
while(cos < 5){
    const nn = Math.ceil(Math.random() * 10)
    const ww = '.q' + nn;
    const question = document.querySelector(ww);
    const isQuestionOp = question.classList.contains('inactive');
    if (!isQuestionOp) {
        question.classList.add('inactive');
        cos = cos + 1;
    }   
}

let correctAnws = 0;

function opA(numQ) {
    const opl = '.op' + numQ + '-' + 1;
    const ops = document.querySelector(opl);
    const isOpsSelec = ops.classList.contains('pressed');
    const oplB = '.op' + numQ + '-' + 2;
    const oplC = '.op' + numQ + '-' + 3;
    const oplD = '.op' + numQ + '-' + 4;
    const opBs = document.querySelector(oplB);
    const opCs = document.querySelector(oplC);
    const opDs = document.querySelector(oplD);
    const isopBsSelec = opBs.classList.contains('pressed');
    const isopCsSelec = opCs.classList.contains('pressed');
    const isopDsSelec = opDs.classList.contains('pressed');
    const isOpsCorrect = ops.classList.contains('correct');
    const isopBsCorrect = opBs.classList.contains('correct');
    const isopCsCorrect = opCs.classList.contains('correct');
    const isopDsCorrect = opDs.classList.contains('correct');
    if(!isOpsSelec){
        ops.classList.add('pressed');
        if(isOpsCorrect){
            correctAnws = correctAnws + 1;
        }
        if(!isOpsCorrect){
            if(isopBsCorrect && isopBsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopCsCorrect && isopCsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopDsCorrect && isopDsSelec){
                correctAnws = correctAnws - 1;
            }
        }
    }
    if(isopBsSelec){
        opBs.classList.remove('pressed');
    }
    if(isopCsSelec){
        opCs.classList.remove('pressed');
    }
    if(isopDsSelec){
        opDs.classList.remove('pressed');
    }
}

function opB(numQ) {
    const opl = '.op' + numQ + '-' + 2;
    const ops = document.querySelector(opl);
    const isOpsSelec = ops.classList.contains('pressed');
    const oplA = '.op' + numQ + '-' + 1;
    const oplC = '.op' + numQ + '-' + 3;
    const oplD = '.op' + numQ + '-' + 4;
    const opAs = document.querySelector(oplA);
    const opCs = document.querySelector(oplC);
    const opDs = document.querySelector(oplD);
    const isopAsSelec = opAs.classList.contains('pressed');
    const isopCsSelec = opCs.classList.contains('pressed');
    const isopDsSelec = opDs.classList.contains('pressed');
    const isOpsCorrect = ops.classList.contains('correct');
    const isopAsCorrect = opAs.classList.contains('correct');
    const isopCsCorrect = opCs.classList.contains('correct');
    const isopDsCorrect = opDs.classList.contains('correct');
    if(!isOpsSelec){
        ops.classList.add('pressed');
        if(isOpsCorrect){
            correctAnws = correctAnws + 1;
        }
        if(!isOpsCorrect){
            if(isopAsCorrect && isopAsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopCsCorrect && isopCsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopDsCorrect && isopDsSelec){
                correctAnws = correctAnws - 1;
            }
        }
    }
    if(isopAsSelec){
        opAs.classList.remove('pressed');
    }
    if(isopCsSelec){
        opCs.classList.remove('pressed');
    }
    if(isopDsSelec){
        opDs.classList.remove('pressed');
    }
}

function opC(numQ) {
    const opl = '.op' + numQ + '-' + 3;
    const ops = document.querySelector(opl);
    const isOpsSelec = ops.classList.contains('pressed');
    const oplA = '.op' + numQ + '-' + 1;
    const oplB = '.op' + numQ + '-' + 2;
    const oplD = '.op' + numQ + '-' + 4;
    const opAs = document.querySelector(oplA);
    const opBs = document.querySelector(oplB);
    const opDs = document.querySelector(oplD);
    const isopAsSelec = opAs.classList.contains('pressed');
    const isopBsSelec = opBs.classList.contains('pressed');
    const isopDsSelec = opDs.classList.contains('pressed');
    const isOpsCorrect = ops.classList.contains('correct');
    const isopAsCorrect = opAs.classList.contains('correct');
    const isopBsCorrect = opBs.classList.contains('correct');
    const isopDsCorrect = opDs.classList.contains('correct');
    if(!isOpsSelec){
        ops.classList.add('pressed');
        if(isOpsCorrect){
            correctAnws = correctAnws + 1;
        }
        if(!isOpsCorrect){
            if(isopAsCorrect && isopAsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopBsCorrect && isopBsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopDsCorrect && isopDsSelec){
                correctAnws = correctAnws - 1;
            }
        }
    }
    if(isopAsSelec){
        opAs.classList.remove('pressed');
    }
    if(isopBsSelec){
        opBs.classList.remove('pressed');
    }
    if(isopDsSelec){
        opDs.classList.remove('pressed');
    }
}

function opD(numQ) {
    const opl = '.op' + numQ + '-' + 4;
    const ops = document.querySelector(opl);
    const isOpsSelec = ops.classList.contains('pressed');
    const oplA = '.op' + numQ + '-' + 1;
    const oplB = '.op' + numQ + '-' + 2;
    const oplC = '.op' + numQ + '-' + 3;
    const opAs = document.querySelector(oplA);
    const opBs = document.querySelector(oplB);
    const opCs = document.querySelector(oplC);
    const isopAsSelec = opAs.classList.contains('pressed');
    const isopBsSelec = opBs.classList.contains('pressed');
    const isopCsSelec = opCs.classList.contains('pressed');
    const isOpsCorrect = ops.classList.contains('correct');
    const isopAsCorrect = opAs.classList.contains('correct');
    const isopBsCorrect = opBs.classList.contains('correct');
    const isopCsCorrect = opCs.classList.contains('correct');
    if(!isOpsSelec){
        ops.classList.add('pressed');
        if(isOpsCorrect){
            correctAnws = correctAnws + 1;
        }
        if(!isOpsCorrect){
            if(isopAsCorrect && isopAsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopBsCorrect && isopBsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopCsCorrect && isopCsSelec){
                correctAnws = correctAnws - 1;
            }
        }
    }
    if(isopAsSelec){
        opAs.classList.remove('pressed');
    }
    if(isopBsSelec){
        opBs.classList.remove('pressed');
    }
    if(isopCsSelec){
        opCs.classList.remove('pressed');
    }
}

function send() {
    const questionsContainer = document.querySelector('.questionsContainer');
    questionsContainer.classList.add('inactive');
    const main = document.querySelector('.main');
    const cAnswer = document.createElement('section');
    cAnswer.classList.add('cAnswer');
    const answer = document.createElement('p');
    answer.classList.add('answer');
    answer.innerText = 'Nota: ' + correctAnws + '.0';
    cAnswer.appendChild(answer);
    main.appendChild(cAnswer);
}