const ATTRIBUTES = {
    FINISHED: 'countdown-finished',
};

const EVENTS = {
    FINISHED: 'toujou-countdown-finished',
};

const STATES = {
    FINISHED: 'finished',
};

const SELECTORS = {
    DAYS_ITEM: '[data-unit="days"]',
    DAYS_VALUE: '[data-unit="days"] .countdown__value',
    HOURS_VALUE: '[data-unit="hours"] .countdown__value',
    MINUTES_VALUE: '[data-unit="minutes"] .countdown__value',
    SECONDS_VALUE: '[data-unit="seconds"] .countdown__value',
};

const COUNTDOWN_INTERVAL_MS = 1000;

export class ToujouCountdown extends HTMLElement {
    private intervalId: number | null = null;

    private daysItem: HTMLElement | null = null;
    private daysElement: HTMLElement | null = null;
    private hoursElement: HTMLElement | null = null;
    private minutesElement: HTMLElement | null = null;
    private secondsElement: HTMLElement | null = null;

    /**
     * Initializes the countdown.
     */
    connectedCallback() {
        this.cacheElements();

        this.updateCountdown();
        this.startCountdown();
    }

    /**
     * Cleans up the countdown interval.
     */
    disconnectedCallback() {
        this.stopCountdown();
    }

    static get observedAttributes() {
        return ['target-date'];
    }

    /**
     * Restarts the countdown when the target date changes.
     */
    attributeChangedCallback(
        name: string,
        oldValue: string | null,
        newValue: string | null
    ) {
        if (name === 'target-date' && oldValue !== newValue) {
            this.updateCountdown();

            this.stopCountdown();
            this.startCountdown();
        }
    }

    /**
     * Stores references to the countdown elements.
     */
    private cacheElements() {
        this.daysItem = this.querySelector(SELECTORS.DAYS_ITEM);
        this.daysElement = this.querySelector(SELECTORS.DAYS_VALUE);
        this.hoursElement = this.querySelector(SELECTORS.HOURS_VALUE);
        this.minutesElement = this.querySelector(SELECTORS.MINUTES_VALUE);
        this.secondsElement = this.querySelector(SELECTORS.SECONDS_VALUE);
    }

    /**
     * Starts updating the countdown every second.
     */
    private startCountdown() {
        if (!this.targetDate || this.intervalId !== null) {
            return;
        }

        this.intervalId = window.setInterval(() => {
            this.updateCountdown();
        }, COUNTDOWN_INTERVAL_MS);
    }

    /**
     * Stops the countdown interval.
     */
    private stopCountdown() {
        if (this.intervalId !== null) {
            window.clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    /**
     * Updates the finished state and emits an event.
     */
    private updateFinishedState(total: number) {
        const isFinished = total <= 0;

        if (isFinished && !this.hasAttribute(ATTRIBUTES.FINISHED)) {
            this.setAttribute(ATTRIBUTES.FINISHED, '');

            this.dispatchEvent(
                new CustomEvent(EVENTS.FINISHED, {
                    bubbles: true,
                    composed: true,
                    detail: {
                        element: this,
                    },
                })
            );
        }

        if (!isFinished) {
            this.removeAttribute(ATTRIBUTES.FINISHED);
        }
    }

    /**
     * Updates the displayed countdown values.
     */
    private updateCountdown() {
        const remaining = this.getRemainingTime();

        if (!remaining) return;

        if (this.daysElement) {
            this.daysElement.textContent = String(remaining.days);
        }

        if (this.hoursElement) {
            this.hoursElement.textContent = this.formatNumber(remaining.hours);
        }

        if (this.minutesElement) {
            this.minutesElement.textContent = this.formatNumber(remaining.minutes);
        }

        if (this.secondsElement) {
            this.secondsElement.textContent = this.formatNumber(remaining.seconds);
        }

        this.updateDaysItemState(remaining.days);
        this.updateFinishedState(remaining.total);

        if (remaining.total <= 0) {
            this.stopCountdown();
        }
    }

    /**
     * Updates the 'days' element state.
     */
    private updateDaysItemState(days: number) {
        if (!this.daysItem) {
            return;
        }

        if (days === 0) {
            this.daysItem.dataset.state = STATES.FINISHED;
        } else {
            delete this.daysItem.dataset.state;
        }
    }

    /**
     * Calculates the remaining time.
     */
    private getRemainingTime() {
        if (!this.targetDate) {
            return null;
        }

        const target = new Date(this.targetDate);

        if (Number.isNaN(target.getTime())) {
            console.warn(
                `[toujou-countdown] Invalid target date: "${this.targetDate}"`
            );

            return null;
        }

        const diff = Math.max(target.getTime() - Date.now(), 0);
        const totalSeconds = Math.floor(diff / 1000);

        return {
            total: diff,
            days: Math.floor(totalSeconds / 86400),
            hours: Math.floor((totalSeconds % 86400) / 3600),
            minutes: Math.floor((totalSeconds % 3600) / 60),
            seconds: totalSeconds % 60,
        };
    }

    /**
     * Formats a number with leading zeros.
     */
    private formatNumber(value: number) {
        return String(value).padStart(2, '0');
    }

    private get targetDate() {
        return this.getAttribute('target-date') ?? '';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-countdown': ToujouCountdown;
    }
}

customElements.define('toujou-countdown', ToujouCountdown);
