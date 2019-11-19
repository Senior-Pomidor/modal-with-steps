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

// toNextStep('next-button-step-first', 'modal-content-step-first', 'modal-content-step-second');
// toNextStep('next-button-step-second', 'modal-content-step-second', 'modal-content-step-third');
