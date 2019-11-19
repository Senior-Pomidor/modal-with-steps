let toNextStep = function (previousStepBlockId, nextStepBlockId) {
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

let toPreviousStep = function (currentStepBlockId, previousStepBlockId) {
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

// toNextStep('modal-content-step-first', 'modal-content-step-second'); -> to second step

// toNextStep('modal-content-step-second', 'modal-content-step-third'); -> to third step

// toPreviousStep('modal-content-step-third', 'modal-content-step-second'); -> back to second step

// toPreviousStep('modal-content-step-second', 'modal-content-step-first'); -> back to first step
