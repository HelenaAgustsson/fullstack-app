import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateTask() {
    return (
        <Link
            href="/create"
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Create Task</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function EditTask({ id }: { id: number }) {
    return (
        <div className='flex justify-end '>
            <Link
                href="/edit"
                className="rounded-md p-2 border-2 border-gray-200 hover:bg-gray-200"
            >
                <PencilIcon className="size-4 md:size-5" />
            </Link>
        </div>

    );
}