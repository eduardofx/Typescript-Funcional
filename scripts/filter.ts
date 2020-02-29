import { from } from "rxjs";
import { filter } from "rxjs/operators";

namespace operators_demo_4 {

    const observable = from([2, 30, 22, 5, 60, 1]);

    observable.pipe(filter(x => x > 10));

    const subscription = observable.subscribe(
        (value) => console.log(value)
    );

    subscription.unsubscribe();

}
