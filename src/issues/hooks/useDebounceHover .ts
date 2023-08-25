type useDebounceHoverProps = {

    time?: number;

    action: () => void;

};

const useDebounceHover = ({ time = 3, action }: useDebounceHoverProps) => {

    let timeOut: ReturnType<typeof setTimeout>;

    const onTimeOut = () => {

        return new Promise((req) => {

            timeOut = setTimeout(() => {

                req(true);

            }, time * 1000);

        });

    };

    const onMouseEnter = async () => {

        const isHover = await onTimeOut();

        if (!isHover) return;

        action();

    };

    const onMouseLeave = () => {

        clearTimeout(timeOut);

    };

    return { onMouseEnter, onMouseLeave };

};

export default useDebounceHover;