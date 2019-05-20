import { WeElement } from 'omi';
import '../icon';
interface Props {
    dot: boolean;
    content: string;
}
interface Data {
}
export default class Badge extends WeElement<Props, Data> {
    static css: string;
    static propTypes: {
        dot: BooleanConstructor;
        content: StringConstructor;
    };
    installed(): void;
    uninstall(): void;
    render(props: any): JSX.Element;
}
export {};
