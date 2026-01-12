import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TaskStatus({ status }: { status: boolean }) {
    return (
        <span
            className={clsx(
                'inline-flex items-center rounded-full px-2 py-1 text-xs',
                {
                    'bg-gray-100 text-gray-500': !status,
                    'bg-green-500 text-white': status,
                },
            )}
        >
            {status ? (
                <>
                    Done
                    <CheckIcon className="ml-1 w-4 text-white" />

                </>
            ) :
                <>
                    To do
                    <ClockIcon className="ml-1 w-4 text-gray-500" />
                </>
            }
        </span>
    );
}