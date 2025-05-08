import AdminLayout from '@/Layouts/AdminLayout';
import ErrorList from '@/Components/Admin/ErrorList';
import { useForm, Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.users.create'), data);
    };

    return (
        <AdminLayout>
            <h1 className="text-2xl font-semibold mb-6">Add New User</h1>
            {/* <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <TextInput
                        id="name"
                        type="name"
                        value={data.name}
                        className="px-4 py-2"
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Enter user name"
                    />
                    <InputError message={errors.name} className="mt-1" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                        placeholder="Enter user email"
                    />
                    <InputError message={errors.email} className="mt-1" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                        placeholder="Enter user password"
                    />
                    <InputError message={errors.password} className="mt-1" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password_confirmation" className="text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
                        placeholder="Confirm user password"
                    />
                    <InputError message={errors.password_confirmation} className="mt-1" />
                </div>

                <div className="flex justify-end gap-4">
                    <Link
                        href={route('admin.users.index')}
                        as="button"
                        className="btn-secondary px-4 py-2">
                        Cancel
                    </Link>
                    <button className="inline-flex items-center justify-center gap-2 transition px-4 py-3 btn-primary shadow-theme-xs disabled:bg-brand-300 ">
                        Create Account
                        <svg className="fill-current" width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z" fill=""></path>
                        </svg>
                    </button>
                </div>
            </form> */}

            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Enter user name"
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Enter user email"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Enter user password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        placeholder="Confirm user password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex justify-end gap-4 mt-4">
                    <Link
                        href={route('admin.users.index')}
                        as="button"
                        className="btn-secondary px-4 py-2">
                        Cancel
                    </Link>
                    <button className="inline-flex items-center justify-center gap-2 transition px-4 py-3 btn-primary shadow-theme-xs disabled:bg-brand-300" type="submit" disabled={processing}>
                        Create
                        <svg className="fill-current" width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z" fill=""></path>
                        </svg>
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
