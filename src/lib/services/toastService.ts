class ToastService
{
    callbacks: ((message: string) => void)[] = [];

    publish(message: string) {
        this.callbacks.forEach(callback => {
            callback(message);
        });
    }

    subscribe(callback: (message: string) => void) {
        this.callbacks.push(callback)
    }
}

export const toastService = new ToastService();

