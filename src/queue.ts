interface DeferredPromise<ValueType> {
  /**
  The deferred promise.
  */
  promise: Promise<ValueType>;

  /**
  Resolves the promise with a value or the result of another promise.
  @param value - The value to resolve the promise with.
  */
  resolve(value?: ValueType | PromiseLike<ValueType>): void;

  /**
  Reject the promise with a provided reason or error.
  @param reason - The reason or error to reject the promise with.
  */
  reject(reason?: unknown): void;
}

function defer<T>(): DeferredPromise<T> {
  const deferred = {} as any;

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return deferred;
}

/**
 * Many peer connection api methods must be qeueud such that they do not arrive
 * at the server out of order.
 */
export class Queue {
  queue: Array<[() => Promise<any>, DeferredPromise<any>]> = [];
  running = false;

  public queue_call<T>(fn: () => Promise<T>): Promise<T> {
    const later = defer<T>();
    this.queue.push([fn, later]);
    this.run();

    return later.promise;
  }

  private run() {
    if (this.running) {
      return;
    }
    this.running = true;
    const item = this.queue.shift();
    if (!item) {
      this.running = false;
      return;
    }

    const [fn, later] = item;
    fn()
      .then((value) => {
        later.resolve(value);
        this.running = false;
        this.run();
      })
      .catch((err) => {
        later.reject(err);
        this.running = false;
        this.run();
      });
  }
}
