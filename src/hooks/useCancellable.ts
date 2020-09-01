import {useEffect, useMemo} from 'react'

interface CancellationToken {
    isCancelled: boolean

    cancel(): void
}

export const useCancellationToken = (): CancellationToken => {
    return useMemo(() => {
        const token = {
            isCancelled: false,
            cancel: () => {
            }
        };

        token.cancel = () => token.isCancelled = true;

        return token as CancellationToken
    }, [])
};

export const useCancellableEffect = (action: () => void, dependencies: any[], cancellationToken: CancellationToken) => {
    useEffect(() => {
        action()
        // eslint-disable-next-line
    }, [...dependencies, cancellationToken]);
    useEffect(() => () => cancellationToken.cancel()
        // eslint-disable-next-line
        , [])
}