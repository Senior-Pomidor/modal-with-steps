let toNextStep = function (previousStepButtonId, previousStepBlockId, nextStepBlockId) {
    this.previousStepButtonId = previousStepButtonId;
    this.previousStepBlockId = previousStepBlockId;
    this.nextStepBlockId = nextStepBlockId;

    this.previousStepBlockDisplayNone = function () {
        this.previousStepBlock = document.getElementById(previousStepBlockId);
        this.previousStepBlock.style['display'] = 'none';
    }
    this.previousStepBlockDisplayNone();

    this.nextStepBlockDisplayBlock = function () {
        this.nextStepBlock = document.getElementById(nextStepBlockId);
        this.nextStepBlock.style['display'] = 'block';
    }
    this.nextStepBlockDisplayBlock();
}

let toPreviousStep = function (currentStepButtonId, currentStepBlockId, previousStepBlockId) {
    this.currentStepButtonId = currentStepButtonId;
    this.currentStepBlockId = currentStepBlockId;
    this.previousStepBlockId = previousStepBlockId;

    this.currentStepBlockDisplayNone = function () {
        this.currentStepBlock = document.getElementById(currentStepBlockId);
        this.currentStepBlock.style['display'] = 'none';
    }
    this.currentStepBlockDisplayNone();

    this.previousStepBlockDisplayBlock = function () {
        this.previousStepBlock = document.getElementById(previousStepBlockId);
        this.previousStepBlock.style['display'] = 'block';
    }
    this.previousStepBlockDisplayBlock();
}

// toNextStep('next-button-step-first', 'modal-content-step-first', 'modal-content-step-second'); -> to second step

// toNextStep('next-button-step-second', 'modal-content-step-second', 'modal-content-step-third'); -> to third step

// toPreviousStep('previous-button-step-third', 'modal-content-step-third', 'modal-content-step-second'); -> back to second step

// toPreviousStep('previous-button-step-second', 'modal-content-step-second', 'modal-content-step-first'); -> back to first step 
