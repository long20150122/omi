import { WeElement } from 'omi';
import '../icon';
interface Props {
    chips: [{
        text: string;
        selected?: boolean;
        leading?: {
            icon: object;
        };
        trailing?: {
            icon: object;
            role?: string;
            tabindex?: number;
        };
        checkmark: boolean;
    }];
    input?: boolean;
    choice?: boolean;
    filter?: boolean;
    ripple?: boolean;
}
interface Data {
}
export default class chipSet extends WeElement<Props, Data> {
    static css: string;
    static defaultProps: {
        ripple: boolean;
    };
    static propTypes: {
        ripple: BooleanConstructor;
        chips: ObjectConstructor;
        input: BooleanConstructor;
        choice: BooleanConstructor;
        filter: BooleanConstructor;
    };
    installed(): void;
    render(props: any): JSX.Element;
}
export {};
